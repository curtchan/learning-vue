(window.webpackJsonp=window.webpackJsonp||[]).push([["course1"],{"30re":function(t,s,a){},dIdF:function(t,s,a){"use strict";a.r(s);a("30re"),a("xv8R");var e=a("oCYn"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"row"},[a("div",{staticClass:"small-6 columns"},[a("h1",{staticClass:"text-center"},[t._v("YOU")]),t._v(" "),a("div",{staticClass:"healthbar"},[a("div",{staticClass:"healthbar text-center",staticStyle:{"background-color":"green",margin:"0",color:"white"},style:{width:t.player.health+"%"}},[t._v(t._s(t.player.health))])])]),t._v(" "),a("div",{staticClass:"small-6 columns"},[a("h1",{staticClass:"text-center"},[t._v("MONSTER")]),t._v(" "),a("div",{staticClass:"healthbar"},[a("div",{staticClass:"healthbar text-center",staticStyle:{"background-color":"green",margin:"0",color:"white"},style:{width:t.monster.health+"%"}},[t._v(t._s(t.monster.health))])])])]),t._v(" "),t.playing?a("section",{staticClass:"row controls"},[a("div",{staticClass:"small-12 columns"},[a("button",{attrs:{id:"attack"},on:{click:t.attack}},[t._v("ATTACK")]),t._v(" "),a("button",{attrs:{id:"special-attack"},on:{click:t.specialAttack}},[t._v("SPECIAL ATTACK")]),t._v(" "),a("button",{attrs:{id:"heal"},on:{click:t.heal}},[t._v("HEAL")]),t._v(" "),a("button",{attrs:{id:"give-up"},on:{click:function(s){t.playing=!1}}},[t._v("GIVE UP")])])]):a("section",{staticClass:"row controls"},[a("div",{staticClass:"small-12 columns"},[a("button",{attrs:{id:"start-game"},on:{click:t.startGame}},[t._v("START NEW GAME")])])]),t._v(" "),t.history.length?a("section",{staticClass:"row log"},[a("div",{staticClass:"small-12 columns"},[a("ul",t._l(t.history,(function(s){return a("li",{class:{"player-turn":"player"===s.who,"monster-turn":"monster"===s.who}},[t._v(t._s(s.message))])})),0)])]):t._e()])};l._withStripped=!0;var r={name:"MonsterSlayer",data:function(){return{playing:!1,player:{health:100},monster:{health:100},history:[]}},methods:{startGame:function(){this.playing=!0,this.history=[],this.player.health=100,this.monster.health=100},attack:function(){var t=this.calcDmg(10);this.monster.health-=t,this.history.unshift({who:"player",message:"Player dealt "+t+" damage"}),this.afterPlayerTurn()},specialAttack:function(){this.monster.health-=10,this.history.unshift({who:"player",message:"Player uses special attack, 10 damage dealt"}),this.afterPlayerTurn()},heal:function(){this.player.health>=90?this.player.health=100:this.player.health+=10,this.history.unshift({who:"player",message:"Player heals up"}),this.afterPlayerTurn()},afterPlayerTurn:function(){if(this.monster.health<=0)return this.playing=!1,void this.history.unshift({who:"player",message:"Player killed monster"});this.monsterTurn(),this.player.health<=0&&(this.playing=!1,this.history.unshift({who:"monster",message:"Monster killed player"}))},monsterTurn:function(){var t=this.calcDmg(10);this.player.health-=t,this.history.unshift({who:"monster",message:"Monster dealt "+t+" damage"})},calcDmg:function(t){return Math.floor(Math.random()*t)+1}}},i=a("KHd+"),n=Object(i.a)(r,l,[],!1,null,null,null);n.options.__file="assets/js/course/MonsterSlayer.vue";var h=n.exports;new e.a({el:"#app",template:"<MonsterSlayer/>",components:{MonsterSlayer:h}})},xv8R:function(t,s,a){}},[["dIdF","runtime",0]]]);