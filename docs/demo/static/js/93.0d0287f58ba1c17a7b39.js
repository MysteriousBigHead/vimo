webpackJsonp([93],{1126:function(t,e,a){var l=a(1127);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(592)("7b9c18d6",l,!0)},1127:function(t,e,a){e=t.exports=a(591)(),e.push([t.i,".customer-standalone[data-v-5a612653]{position:relative;height:44px;width:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border:1px dashed #333}.customer-standalone .ion-checkbox[data-v-5a612653]{position:static}",""])},1128:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(8),s=function(t){return t&&t.__esModule?t:{default:t}}(l);e.default={name:"name",data:function(){return{displayData:{danger:!1,primary:!0,dark:!1,light:!0,disabled:!0},testModal:!0,testDisabled:!1}},props:{},watch:{displayData:{handler:function(){console.debug(JSON.parse((0,s.default)(this.displayData)))},deep:!0}},computed:{},methods:{onCheckboxChange:function(t){console.debug("onCheckboxChange:"+t)}},created:function(){},mounted:function(){},activated:function(){}}},1129:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Page",[a("Header",[a("Navbar",[a("Title",[t._v("Checkbox")])],1)],1),t._v(" "),a("Content",{staticClass:"outer-content"},[a("List",[a("ListHeader",[t._v("Checkbox")]),t._v(" "),a("Item",[a("Label",[t._v("Danger")]),t._v(" "),a("Checkbox",{attrs:{color:"danger"},slot:"item-left",model:{value:t.displayData.danger,callback:function(e){t.displayData.danger=e},expression:"displayData.danger"}}),t._v(" "),a("Toggle",{slot:"item-right"})],1),t._v(" "),a("Item",[a("Label",[t._v("Primary")]),t._v(" "),a("Checkbox",{attrs:{color:"primary"},slot:"item-left",model:{value:t.displayData.primary,callback:function(e){t.displayData.primary=e},expression:"displayData.primary"}})],1),t._v(" "),a("Item",[a("Label",[t._v("Dark")]),t._v(" "),a("Checkbox",{attrs:{color:"dark"},slot:"item-left",model:{value:t.displayData.dark,callback:function(e){t.displayData.dark=e},expression:"displayData.dark"}})],1),t._v(" "),a("Item",[a("Label",[t._v("Light")]),t._v(" "),a("Checkbox",{attrs:{color:"light"},slot:"item-left",model:{value:t.displayData.light,callback:function(e){t.displayData.light=e},expression:"displayData.light"}})],1),t._v(" "),a("Item",[a("Label",[t._v("Disabled")]),t._v(" "),a("Checkbox",{attrs:{disabled:t.displayData.disabled},slot:"item-left",model:{value:t.displayData.disabled,callback:function(e){t.displayData.disabled=e},expression:"displayData.disabled"}})],1)],1),t._v(" "),a("section",{attrs:{padding:""}},[a("h5",[t._v("单独使用")]),t._v(" "),a("div",{staticClass:"customer-standalone"},[a("Checkbox",{attrs:{color:"danger"},model:{value:t.displayData.danger,callback:function(e){t.displayData.danger=e},expression:"displayData.danger"}})],1),t._v(" "),a("p",[t._v("注意这部分样式的写法!")])]),t._v(" "),a("List",[a("ListHeader",[t._v("使用 v-modal 绑定")]),t._v(" "),a("Item",[a("Label",[t._v("Danger")]),t._v(" "),a("Checkbox",{attrs:{color:"danger",disabled:t.testDisabled},on:{onChange:t.onCheckboxChange},slot:"item-left",model:{value:t.testModal,callback:function(e){t.testModal=e},expression:"testModal"}})],1)],1),t._v(" "),a("Grid",[a("Row",{attrs:{"justify-content-center":""}},[a("Column",{attrs:{"text-center":""}},[a("strong",[t._v(" Current Value: ")]),t._v(" "),a("span",[t._v(t._s(t.testModal))])]),t._v(" "),a("Column",{attrs:{"text-center":""}},[a("strong",[t._v(" Disabled State: ")]),t._v(" "),a("span",[t._v(t._s(t.testDisabled))])])],1),t._v(" "),a("Row",{attrs:{"justify-content-center":""}},[a("Column",{attrs:{"col-1":""}}),t._v(" "),a("Column",[a("Button",{attrs:{block:""},on:{click:function(e){t.testModal=!t.testModal}}},[t._v("setValue")])],1),t._v(" "),a("Column",[a("Button",{attrs:{block:""},on:{click:function(e){t.testDisabled=!t.testDisabled}}},[t._v("Disabled")])],1),t._v(" "),a("Column",{attrs:{"col-1":""}})],1)],1)],1)],1)},staticRenderFns:[]}},688:function(t,e,a){a(1126);var l=a(0)(a(1128),a(1129),"data-v-5a612653",null);t.exports=l.exports}});