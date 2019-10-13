<template>
    <div class="align-center">
        <p>{{ message }}</p>
        <table>
            <tbody>
            <tr v-for="(row, xIndex) in rows">
                <td
                        v-for="(col, yIndex) in row"
                        v-on:click="clickedSquare(xIndex, yIndex)"
                        v-bind:class="{ 'win': col.win }"
                >
                    <i class="fa fa-fw" v-bind:class="{ 'fa-times': col.ticked === 1, 'fa-circle-o': col.ticked === 2}"></i>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="actions">
            <button v-if="finished" v-on:click="restart">Restart</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tictactoe',
        data: function() {
            return {
                x: 3,
                y: 3,
                finished: false,
                messages: {
                    p1turn: 'Player 1 turn',
                    p2turn: 'Player 2 turn',
                    finished: 'Game finished',
                    p1win: 'Player 1 wins',
                    p2win: 'Player 2 wins',
                    tie: 'Tie'
                },
                rows: [[
                    {ticked: null, win: false},
                    {ticked: null, win: false},
                    {ticked: null, win: false}
                ],[
                    {ticked: null, win: false},
                    {ticked: null, win: false},
                    {ticked: null, win: false}
                ],[
                    {ticked: null, win: false},
                    {ticked: null, win: false},
                    {ticked: null, win: false}
                ]],
                step: 1
            };
        },
        computed: {
            message: function() {
                if(this.finished) {
                    switch(this.finished) {
                        case 1:
                            return this.messages.p1win;
                        case 2:
                            return this.messages.p2win;
                        case 3:
                            return this.messages.tie;
                    }
                }

                if(this.getNextPlayer() === 1) {
                    return this.messages.p1turn;
                }

                return this.messages.p2turn;
            },

            maxSteps: function() {
                return this.x * this.y;
            }
        },
        methods: {
            clickedSquare: function(x, y) {
                if(this.finished || this.rows[x][y].ticked) { //cant click clicked
                    return;
                }

                this.rows[x][y].ticked = this.getNextPlayer();

                let winner;
                if(winner = this.checkIfWon()) {
                    this.finished = winner;
                }

                this.stepUp();
            },

            stepUp: function() {
                this.step++;
            },

            getNextPlayer: function() {
                return (this.step - 1) % 2 + 1;
            },

            /**
             * returns:
             * false - no win
             * 1: p1 wins
             * 2: p2 wins
             * 3: tie
             */
            checkIfWon: function() {
                //horizontal
                for(let i = 0; i < 3; i++) {
                    let s1 = this.rows[0][i];
                    let s2 = this.rows[1][i];
                    let s3 = this.rows[2][i];

                    if(this.checkIfLineWins(s1, s2, s3)) {
                        this.markWin(s1, s2, s3);

                        return s1.ticked;
                    }
                }

                //vertical
                for(let i = 0; i < 3; i++) {
                    let s1 = this.rows[i][0];
                    let s2 = this.rows[i][1];
                    let s3 = this.rows[i][2];

                    if(this.checkIfLineWins(s1, s2, s3)) {
                        this.markWin(s1, s2, s3);

                        return s1.ticked;
                    }
                }

                //diagonal
                let s1 = this.rows[0][0];
                let s2 = this.rows[1][1];
                let s3 = this.rows[2][2];
                if(this.checkIfLineWins(s1, s2, s3)) {
                    this.markWin(s1, s2, s3);

                    return s1.ticked;
                }

                s1 = this.rows[2][0];
                s2 = this.rows[1][1];
                s3 = this.rows[0][2];
                if(this.checkIfLineWins(s1, s2, s3)) {
                    this.markWin(s1, s2, s3);

                    return s1.ticked;
                }

                //tie
                if(this.step === this.maxSteps) {
                    return 3;
                }

                return false;
            },

            /**
             * True if win
             */
            checkIfLineWins: function(s1, s2, s3) {
                return (s1.ticked && s2.ticked && s3.ticked
                    && s1.ticked === s2.ticked && s2.ticked === s3.ticked)
            },

            restart: function() {
                this.finished = false;
                this.step = 1;

                this.rows.forEach(function(row) {
                    row.forEach(function(col) {
                        col.ticked = null;
                        col.win = false;
                    });
                });
            },

            markWin: function(s1, s2, s3) {
                s1.win = true;
                s2.win = true;
                s3.win = true;
            }
        }
    }
</script>
<style>
    .align-center {
        text-align: center;
    }
    .actions {
        margin-top: 5px;
    }
    table, td, th {
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
        margin: auto;
    }
    td {
        width: 50px;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        font-size: 38px;
    }
    td.win {
        background-color: green;
    }
</style>