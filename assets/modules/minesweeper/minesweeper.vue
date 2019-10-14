<!-- todo: add game end, timer -->
<template>
    <div class="minesweeper">
        <form v-if="gameStatus !== GAME_STATUS_PLAYING" @submit="formSubmit">
            <div v-if="errors.length">
                <p><b>Please correct the following error(s):</b></p>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>

            <label for="x-input">X:</label>
            <input type="number" required="required" v-model.number="x" id="x-input">
            <label for="y-input">Y:</label>
            <input type="number" required="required" v-model.number="y" id="y-input">
            <label for="bombsPercentage-input">Bombs {{ bombsPercentage }}%:</label>
            <input type="range" min="1" max="100" required="required" v-model="bombsPercentage" id="bombsPercentage-input">
            <input type="submit" value="Generate">
        </form>
        <table v-if="this.game.length">
            <tbody>
            <tr v-for="i in y">
                <td v-for="j in x"
                    v-bind:class="{
                        hidden: game[(i - 1) * x + (j - 1)].hidden
                     }"
                    v-bind:style="itemStyles(game[(i - 1) * x + (j - 1)])"
                    v-on:click="itemClick(game[(i - 1) * x + (j - 1)])"
                    @contextmenu.prevent="itemRMBClick(game[(i - 1) * x + (j - 1)])"
                >
                    <i v-if="game[(i - 1) * x + (j - 1)].hidden" v-bind:class="{
                        'fa fa-flag': game[(i - 1) * x + (j - 1)].hiddenState === 1,
                        'fa fa-question': game[(i - 1) * x + (j - 1)].hiddenState === 2
                    }"></i>
                    <i v-else-if="game[(i - 1) * x + (j - 1)].bomb" class="fa fa-bomb"></i>
                    <span v-else-if="game[(i - 1) * x + (j - 1)].siblingBombs">{{game[(i - 1) * x + (j - 1)].siblingBombs}}</span>
                </td>
                <!--<td v-for="j in x"
                    v-bind:class="{hidden: game[(i - 1) * x + (j - 1)].hidden }"
                    v-on:click="itemClick(game[(i - 1) * x + (j - 1)])"
                >{{(i - 1) * x + (j - 1)}} | {{game[(i - 1) * x + (j - 1)].index}}</td>-->
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    class Item {
        constructor(index) {
            this.index = index;
            this.hidden = true;
            this.bomb = false;
            this.siblingBombs = 0;
            this.hiddenState = 0; //1 - flag, 2 - question mark
        }

        upHiddenState() {
            this.hiddenState++;

            if(this.hiddenState > 2) {
                this.hiddenState = 0;
            }
        }

        canClick() {
            return (this.hidden && this.hiddenState !== 1);
        }

        canRMBClick() {
            return this.hidden;
        }
    }

    export default {
        name: 'minesweeper',
        data: function() {
            return {
                GAME_STATUS_PLAYING: 1,
                GAME_STATUS_NOT_PLAYING: 2,
                GAME_STATUS_LOST: 3,
                GAME_STATUS_WIN: 4,

                gameStatus: 2,

                game: [],
                bombIndexes: [],

                errors: [],

                x: 20,
                y: 20,
                bombsPercentage: 20,
            };
        },
        computed: {
            itemsCount: function(){
                return this.game.length;
            }
        },
        methods: {
            formSubmit: function(e){
                //todo: maybe some better validation

                e.preventDefault();
                this.errors = [];

                if(this.x && this.y) {
                    this.generateGame();
                }

                if(!this.x) {
                    this.errors.push('Type X size');
                }

                if(!this.y) {
                    this.errors.push('Type Y size');
                }

                return false;
            },

            generateGame: function() {
                this.gameStatus = this.GAME_STATUS_PLAYING;
                this.initializeBoard();
            },

            initializeBoard: function() {
                //generating minefield
                this.game = [];
                this.bombIndexes = [];
                for(let x = 0; x < this.x; x++) {
                    for(let y = 0; y < this.y; y++) {
                        this.game.push(new Item(x * this.x + y))
                    }
                }

                //planting bombs
                let bombsLeft = Math.floor(this.bombsPercentage * this.itemsCount / 100);
                while(bombsLeft > 0) {
                    let bombSpot = Math.floor(Math.random() * this.itemsCount);
                    if(this.game[bombSpot].bomb) {
                        continue;
                    }

                    this.bombIndexes.push(bombSpot);
                    this.game[bombSpot].bomb = true;
                    bombsLeft--;
                }

                //marking bomb siblings
                for(let i = 0; i < this.bombIndexes.length; i++) {
                    let siblings = this.getSiblingsForIndex(this.bombIndexes[i]);

                    siblings.forEach(function(el) {
                        if(!el.bomb) {
                            el.siblingBombs++;
                        }
                    });
                }
            },

            getSiblingsForIndex: function(index) {
                let siblings = [];

                let siblingIndex = index;
                let notOnLeftBorder = index % this.x > 0;
                let notOnRightBorder = index % this.x < this.x - 1;

                //West
                siblingIndex -= 1;
                if(siblingIndex >= 0 && notOnLeftBorder) {
                    siblings.push(this.game[siblingIndex]);
                }

                //North
                siblingIndex = index - this.x;
                if(siblingIndex >= 0) {
                    siblings.push(this.game[siblingIndex]);
                }

                //NorthWest
                siblingIndex -= 1;
                if(siblingIndex >= 0 && notOnLeftBorder) {
                    siblings.push(this.game[siblingIndex]);
                }

                //NorthEast
                siblingIndex += 2;
                if(siblingIndex >= 0 && notOnRightBorder) {
                    siblings.push(this.game[siblingIndex]);
                }

                //East
                siblingIndex = index + 1;
                if(siblingIndex < this.itemsCount && notOnRightBorder) {
                    siblings.push(this.game[siblingIndex]);
                }

                //South
                siblingIndex = index + this.x;
                if(siblingIndex < this.itemsCount) {
                    siblings.push(this.game[siblingIndex]);
                }

                //SouthWest
                siblingIndex = index + this.x - 1;
                if(siblingIndex < this.itemsCount && notOnLeftBorder) {
                    siblings.push(this.game[siblingIndex]);
                }

                //SouthEast
                siblingIndex = index + this.x + 1;
                if(siblingIndex < this.itemsCount && notOnRightBorder) {
                    siblings.push(this.game[siblingIndex]);
                }

                return siblings;
            },

            itemClick: function(item) {
                if(this.gameStatus !== this.GAME_STATUS_PLAYING)
                    return;

                if(!item.canClick())
                    return;

                item.hidden = false;

                if(item.bomb) {
                    this.exploded();
                    return;
                }

                if(item.siblingBombs === 0) {
                    console.log(item);
                    this.revealSiblings(item.index);
                }
            },

            itemRMBClick: function(item) {
                if(this.gameStatus !== this.GAME_STATUS_PLAYING)
                    return;

                if(!item.canRMBClick())
                    return;

                item.upHiddenState();
            },

            itemStyles: function(item) {
                let styles = {};

                if(!item.hidden && !item.bomb) {
                    switch(item.siblingBombs) {
                        case 1:
                            styles.color = 'blue';
                            break;
                        case 2:
                            styles.color = 'green';
                            break;
                        case 3:
                            styles.color = 'red';
                            break;
                        case 4:
                            styles.color = 'purple';
                            break;
                        case 5:
                            styles.color = 'black';
                            break;
                        case 6:
                            styles.color = 'maroon';
                            break;
                        case 7:
                            styles.color = 'gray';
                            break;
                        case 8:
                            styles.color = 'turquoise';
                            break;
                    }
                }

                if(this.gameStatus === this.GAME_STATUS_LOST && item.bomb) {
                    styles.backgroundColor = 'red';
                }

                return styles;
            },

            exploded: function() {
                this.gameStatus = this.GAME_STATUS_LOST;

                //revealing all
                this.game.forEach(function(el){
                    el.hidden = false;
                });
            },

            revealSiblings: function(index) {
                let siblings = this.getSiblingsForIndex(index);

                for(let i = 0; i < siblings.length; i++) {
                    if(!siblings[i].hidden) {
                        continue;
                    }

                    siblings[i].hidden = false;
                    if(siblings[i].siblingBombs === 0) {
                        this.revealSiblings(siblings[i].index);
                    }
                }
            },
        }
    }
</script>
<style>
    table, td, th {
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
    }
    td {
        width: 20px;
        height: 20px;
        padding: 0;
        text-align: center;
        font-weight: bold;
        vertical-align: middle;
        box-sizing: border-box;
    }
    td.hidden {
        box-shadow: inset 0 0 2px 3px #00000066;
    }
</style>