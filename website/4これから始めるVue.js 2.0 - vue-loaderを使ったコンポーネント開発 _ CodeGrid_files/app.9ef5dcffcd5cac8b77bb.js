webpackJsonp([1,0],[function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(80),s=a(i),o=n(59),r=a(o),u=n(79),d=a(u),c=n(24),l=a(c);s.default.use(d.default);var f=new d.default(l.default);new s.default({el:"#app",template:"<App/>",components:{App:r.default},router:f})},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),s=a(i),o={memos:s.default},r={nextId:function(t){return t.reduce(function(t,e){return t<e.id?e.id:t},0)+1},findIndex:function(t,e){return t.findIndex(function(t){return t.id===parseInt(e,10)})}},u={addMemo:function(t){t.id=r.nextId(o.memos),o.memos.push(t)},removeMemo:function(t){var e=r.findIndex(s.default,t);o.memos.splice(e,1)},updateMemo:function(t){var e=r.findIndex(s.default,t.id);o.memos.splice(e,1,t)}},d=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];if(!u[t])throw Error(t+" is not defined in mutations.");u[t].apply(u,n)};e.default={state:o,commit:d}},,,,,,,,,,function(t,e,n){var a,i;a=n(14);var s=n(73);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;a=n(16);var s=n(77);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(61),s=a(i),o=n(1),r=a(o);e.default={name:"app",data:function(){return{sharedState:r.default.state}},methods:{navigation:function(t){this.$router.push(t)}},components:{NavLink:s.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(25),s=a(i);e.default={props:{memo:Object,isEdit:Boolean},watch:{$route:"setMemo"},mounted:function(){this.setMemo()},data:function(){return{input:{text:"",date:"",tags:""}}},computed:{tagsArr:function(){return""!==this.input.tags.trim()?this.input.tags.trim().split(/\s+/):[]}},methods:{save:function(){var t=(0,s.default)({},this.input,{tags:this.tagsArr});this.$emit(this.isEdit?"update":"add",t)},cancel:function(){this.$router.push({name:"items"})},setMemo:function(){this.memo&&(this.input={id:this.memo.id,text:this.memo.text,date:this.memo.date,tags:this.memo.tags.join(" ")})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{memo:Object},methods:{remove:function(t){this.$emit("remove",t)},select:function(t){this.$emit("select",t)},edit:function(t){this.$emit("edit",t)}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(60),s=a(i);e.default={props:{isEdit:Boolean,memos:Array,count:Number,sort:String,tags:Array,search:String},computed:{hasMemo:function(){return this.filteredMemos&&0!==this.filteredMemos.length},filteredMemos:function(){var t=this,e=this.memos.concat();if(this.sort)switch(this.sort){case"oldest":break;case"latest":e.reverse();break;case"desc":case"asc":e.sort(function(e,n){if("desc"===t.sort){var a=[n,e];e=a[0],n=a[1]}return new Date(e.date).getTime()-new Date(n.date).getTime()})}return this.tags&&0!==this.tags.length&&(e=e.filter(function(e){return e.tags.some(function(e){return t.tags.includes(e)})})),this.search&&(e=e.filter(function(e){return e.tags.some(function(e){return e.includes(t.search)})||e.text.includes(t.search)||e.date.includes(t.search)})),this.count&&(e=e.splice(0,this.count)),e}},methods:{remove:function(t){this.$emit("remove",t)},select:function(t){this.$emit("select",t)},edit:function(t){this.$emit("edit",t)}},components:{ListItem:s.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{search:""}},watch:{search:function(){this.$emit("update",{key:"search",value:this.search})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sort:"latest",sortOptions:[{value:"latest",label:"新しい順"},{value:"oldest",label:"登録順"},{value:"asc",label:"日付（昇順）"},{value:"desc",label:"日付（降順）"}]}},watch:{sort:function(){this.$emit("update",{key:"sort",value:this.sort})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{memos:Array},data:function(){return{selectedTags:[]}},computed:{allTags:function(){return this.memos.reduce(function(t,e){return e.tags.forEach(function(e){t.includes(e)||t.push(e)}),t},[])}},watch:{selectedTags:function(){this.$emit("update",{key:"tags",value:this.selectedTags})}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=a(i),o=n(11),r=a(o);e.default={methods:{add:function(t){s.default.commit("addMemo",t),this.$emit("navigation",{name:"items"})}},components:{EditorView:r.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=a(i),o=n(12),r=a(o),u=n(62),d=a(u),c=n(63),l=a(c),f=n(64),m=a(f);e.default={data:function(){return{sharedState:s.default.state,privateState:{tags:[],search:"",sort:"latest"}}},computed:{selectedMemo:function(){var t=this.$route.params.id;if(void 0!==t){var e=this.sharedState.memos.find(function(e){return e.id===parseInt(t,0)});return e}},isEdit:function(){return this.$route.meta.edit}},methods:{remove:function(t){s.default.commit("removeMemo",t)},select:function(t){this.$router.push({name:"item",params:{id:t}})},update:function(t){s.default.commit("updateMemo",t),this.$emit("navigation",{name:"items"})},updateCondition:function(t){var e=t.key,n=t.value;this.privateState[e]=n}},components:{ListView:r.default,SearchInput:d.default,SortSelect:l.default,TagsSelect:m.default}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=a(i),o=n(12),r=a(o);e.default={data:function(){return{privateState:{count:3,sort:"latest"},sharedState:s.default.state}},methods:{remove:function(t){s.default.commit("removeMemo",t)}},components:{ListView:r.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{id:1,date:"2016-10-21",text:"公共料金の支払い",tags:["お金"]},{id:2,date:"2016-11-21",text:"Vue.js勉強会",tags:["勉強会"]},{id:3,date:"2016-10-27",text:"打ち合わせ",tags:["打ち合わせ"]},{id:4,date:"2016-11-11",text:"面談",tags:["肉"]},{id:5,date:"2016-12-21",text:"チケット代振り込み",tags:["お金"]},{id:6,date:"2016-10-01",text:"荷物受け取り",tags:["家にいる"]},{id:7,date:"2016-11-13",text:"React勉強会",tags:["勉強会"]},{id:8,date:"2016-11-21",text:"打ち合わせ",tags:["打ち合わせ"]},{id:9,date:"2016-10-21",text:"Angular勉強会",tags:["勉強会"]},{id:10,date:"2016-10-22",text:"飲み会",tags:["飲み会"]}]},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(67),s=a(i),o=n(66),r=a(o),u=n(65),d=a(u),c=n(11),l=a(c);e.default={mode:"history",base:"/2016-vue/demo/4/memo-demo",routes:[{path:"/index.html",redirect:{name:"root"}},{path:"/",component:s.default,name:"root"},{path:"/add",component:d.default,name:"add"},{path:"/items",component:r.default,name:"items",children:[{path:":id",component:l.default,name:"item",meta:{edit:!0}}]}]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var a,i;n(58),a=n(13);var s=n(76);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;a=n(15);var s=n(78);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(54);var s=n(71);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-2b46bdc2",t.exports=a},function(t,e,n){var a,i;n(53),a=n(17);var s=n(70);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-2a46ee38",t.exports=a},function(t,e,n){var a,i;a=n(18);var s=n(68);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(55),a=n(19);var s=n(72);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-2fdbfdfa",t.exports=a},function(t,e,n){var a,i;a=n(20);var s=n(69);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(57),a=n(21);var s=n(75);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(56),a=n(22);var s=n(74);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],on:{change:function(e){t.sort=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[t._l(t.sortOptions,function(n){return e("option",{domProps:{value:n.value}},["\n    "+t._s(n.label)+"\n  "])})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",[e("editor-view",{on:{add:t.add}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],domProps:{value:t._s(t.search)},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("nav",{staticClass:"menu"},[e("router-link",{attrs:{to:{name:"root"},exact:""}},["最新"])," ",e("router-link",{attrs:{to:{name:"items"}}},["一覧"])," ",e("router-link",{attrs:{to:{name:"add"}}},["追加"])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"tags"},[t._l(t.allTags,function(n){return e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedTags,expression:"selectedTags"}],attrs:{type:"checkbox",id:n},domProps:{value:n,checked:Array.isArray(t.selectedTags)?t._i(t.selectedTags,n)>-1:t._q(t.selectedTags,!0)},on:{change:function(e){var a=t.selectedTags,i=e.target,s=!!i.checked;if(Array.isArray(a)){var o=n,r=t._i(a,o);s?r<0&&(t.selectedTags=a.concat(o)):r>-1&&(t.selectedTags=a.slice(0,r).concat(a.slice(r+1)))}else t.selectedTags=s}}})," ",e("label",{attrs:{for:n}},["\n      "+t._s(n)+"\n    "])])})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"editor-view"},[t.input.id?e("div",[e("label",["ID："])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.id,expression:"input.id"}],attrs:{disabled:""},domProps:{value:t._s(t.input.id)},on:{input:function(e){e.target.composing||(t.input.id=e.target.value)}}})]):t._e()," ",e("div",[e("label",["内容："])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.text,expression:"input.text"}],attrs:{placeholder:"メモのタイトル"},domProps:{value:t._s(t.input.text)},on:{input:function(e){e.target.composing||(t.input.text=e.target.value)}}})])," ",e("div",[e("label",["日付："])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.date,expression:"input.date"}],attrs:{type:"date"},domProps:{value:t._s(t.input.date)},on:{input:function(e){e.target.composing||(t.input.date=e.target.value)}}})])," ",e("div",[e("label",["タグ："])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.tags,expression:"input.tags"}],attrs:{placeholder:"空白区切りで指定"},domProps:{value:t._s(t.input.tags)},on:{input:function(e){e.target.composing||(t.input.tags=e.target.value)}}})])," ",e("div",[e("button",{on:{click:t.cancel}},["戻る"])," ",e("button",{on:{click:t.save}},["保存"])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",[e("list-view",{attrs:{memos:t.sharedState.memos,count:t.privateState.count,sort:t.privateState.sort},on:{remove:t.remove}})," ",e("router-link",{staticClass:"root-button",attrs:{to:{name:"items"}}},["すべて見る"])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"layout-items"},[e("div",{staticClass:"layout-items-list"},[e("div",{staticClass:"layout-items-sort"},[e("search-input",{on:{update:t.updateCondition}})," ",e("sort-select",{attrs:{search:t.privateState.sort},on:{update:t.updateCondition}})," ",e("tags-select",{attrs:{memos:t.sharedState.memos},on:{update:t.updateCondition}})])," ",e("list-view",{class:{isEdit:t.isEdit},attrs:{memos:t.sharedState.memos,sort:t.privateState.sort,search:t.privateState.search,tags:t.privateState.tags},on:{remove:t.remove,select:t.select}})])," ",e("router-view",{attrs:{memo:t.selectedMemo,isEdit:t.isEdit},on:{update:t.update}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("nav-link")," ",e("router-view",{staticClass:"contents",on:{navigation:t.navigation}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"list-view"},[t.hasMemo?e("div",[t._l(t.filteredMemos,function(n){return e("list-item",{attrs:{memo:n},on:{remove:t.remove,select:function(e){t.select(n.id)},edit:function(e){t.edit(n.id)}}})})]):e("div",["\n    表示できるメモがありません。\n  "])," "])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"list-item",on:{click:function(e){t.select(t.memo.id)}}},[e("div",[e("span",["id"]),"：\n    ",e("span",[t._s(t.memo.id)])])," ",e("div",[e("span",["text"]),"：\n    ",e("span",[t._s(t.memo.text)])])," ",e("div",[e("span",["date"]),"：\n    ",e("span",[t._s(t.memo.date)])])," ",e("div",[e("span",["tags"]),"：\n      ",e("span",[t._l(t.memo.tags,function(n){return e("span",[t._s(n)])})])])," ",e("div",[e("button",{on:{click:function(e){e.stopPropagation(),t.remove(t.memo.id)}}},["\n      削除\n    "])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.9ef5dcffcd5cac8b77bb.js.map