(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{ng4s:function(t,e,o){"use strict";o.r(e);var n=o("oCYn"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.addNewTodo(e)}}},[o("label",{attrs:{for:"new-todo"}},[t._v("Add a todo")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoText,expression:"newTodoText"}],attrs:{id:"new-todo",placeholder:"E.g. Feed the cat"},domProps:{value:t.newTodoText},on:{input:function(e){e.target.composing||(t.newTodoText=e.target.value)}}}),t._v(" "),o("button",[t._v("Add")])]),t._v(" "),o("ul",t._l(t.todos,(function(e,n){return o("todo-item",{key:e.id,tag:"li",attrs:{title:e.title},on:{remove:function(e){return t.todos.splice(n,1)}}})})),1)])};i._withStripped=!0;var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("input",{attrs:{type:"checkbox"},on:{click:function(e){return t.$emit("remove")}}}),t._v(" "),o("span",[t._v(t._s(t.title))])])};s._withStripped=!0;var d={name:"todo-item",props:["title"]},l=o("KHd+"),a=Object(l.a)(d,s,[],!1,null,null,null);a.options.__file="assets/js/todo-item.vue";var r={name:"todo-list",components:{TodoItem:a.exports},data:function(){return{newTodoText:"",todos:[{id:1,title:"Do the dishes"},{id:2,title:"Take out the trash"},{id:3,title:"Mow the lawn"}],nextTodoId:4}},methods:{addNewTodo:function(){this.todos.push({id:this.nextTodoId++,title:this.newTodoText}),this.newTodoText=""}}},u=Object(l.a)(r,i,[],!1,null,null,null);u.options.__file="assets/js/todo-list.vue";var p=u.exports;o("sZ/o"),new n.a({el:"#app",template:"<div><todo-list/><todo-list/></div>",components:{TodoList:p}})},"sZ/o":function(t,e,o){}},[["ng4s","runtime",0]]]);