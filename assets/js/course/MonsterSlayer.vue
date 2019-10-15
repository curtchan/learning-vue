<template>
    <div>
        <section class="row">
            <div class="small-6 columns">
                <h1 class="text-center">YOU</h1>
                <div class="healthbar">
                    <div class="healthbar text-center"
                         style="background-color: green; margin: 0; color: white;"
                         :style="{width: (player.health) + '%'}"
                    >{{ player.health }}</div>
                </div>
            </div>
            <div class="small-6 columns">
                <h1 class="text-center">MONSTER</h1>
                <div class="healthbar">
                    <div class="healthbar text-center"
                         style="background-color: green; margin: 0; color: white;"
                        :style="{width: (monster.health) + '%'}"
                    >{{ monster.health }}</div>
                </div>
            </div>
        </section>
        <section class="row controls" v-if="!playing">
            <div class="small-12 columns">
                <button id="start-game" @click="startGame">START NEW GAME</button>
            </div>
        </section>
        <section class="row controls" v-else>
            <div class="small-12 columns">
                <button id="attack" @click="attack">ATTACK</button>
                <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
                <button id="heal" @click="heal">HEAL</button>
                <button id="give-up" @click="playing = false">GIVE UP</button>
            </div>
        </section>
        <section class="row log" v-if="history.length">
            <div class="small-12 columns">
                <ul>
                    <li v-for="item in history" :class="{
                        'player-turn': item.who === 'player',
                        'monster-turn': item.who === 'monster'
                    }">{{ item.message }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'MonsterSlayer',
        data: function(){
            return {
                playing: false,
                player: {
                    health: 100,
                },
                monster: {
                    health: 100,
                },
                history: []
            };
        },

        methods: {
            startGame: function() {
                this.playing = true;
                this.history = [];
                this.player.health = 100;
                this.monster.health = 100;
            },

            attack: function() {
                let dmg = this.calcDmg(10);

                this.monster.health -= dmg;

                this.history.unshift({who: 'player', message: 'Player dealt ' + dmg + ' damage'});
                this.afterPlayerTurn();
            },

            specialAttack: function() {
                let dmg = 10;
                this.monster.health -= dmg;

                this.history.unshift({who: 'player', message: 'Player uses special attack, ' + dmg + ' damage dealt'});
                this.afterPlayerTurn();
            },

            heal: function() {
                let dmg = 10;

                if(this.player.health >= 90) {
                    this.player.health = 100;
                } else {
                    this.player.health += dmg;
                }

                this.history.unshift({who: 'player', message: 'Player heals up'});
                this.afterPlayerTurn();
            },

            afterPlayerTurn: function() {
                if(this.monster.health <= 0) {
                    this.playing = false;
                    this.history.unshift({who: 'player', message: 'Player killed monster'});
                    return;
                }

                this.monsterTurn();
                if(this.player.health <= 0) {
                    this.playing = false;
                    this.history.unshift({who: 'monster', message: 'Monster killed player'});
                }
            },

            monsterTurn: function() {
                let dmg = this.calcDmg(10);
                this.player.health -= dmg;

                this.history.unshift({who: 'monster', message: 'Monster dealt ' + dmg + ' damage'});
            },

            calcDmg: function(max) {
                return Math.floor(Math.random() * max) + 1
            },
        }
    }
</script>
<style>

</style>