webpackJsonp([99],{1e3:function(t,e,n){e=t.exports=n(591)(),e.push([t.i,"",""])},1001:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"action-sheet",data:function(){return{}},methods:{showActionSheet1:function(){var t=this;t.$actionSheet.present({title:"请选择操作",subTitle:"注意，选择后不能撤销！",cssClass:"  ActionSheetCssClass1 ActionSheetCssClass2  ",enableBackdropDismiss:!0,buttons:[{text:"再弹一次",role:"destructive",cssClass:"DestructiveBtnCssClass1 DestructiveBtnCssClass2 ",handler:function(){console.log("再弹一次 clicked"),t.$actionSheet.present({title:"请选择操作",subTitle:"注意，选择后不能撤销！",cssClass:"ActionSheetCssClass1 ActionSheetCssClass2  ",enableBackdropDismiss:!0,buttons:[{text:"删除",role:"destructive",cssClass:"  DestructiveBtnCssClass1 DestructiveBtnCssClass2 ",handler:function(){console.log("删除2 clicked")}},{text:"苹果",handler:function(){console.log("苹果 clicked")}},{text:"香蕉",handler:function(){console.log("香蕉 clicked")}},{text:"不确定",role:"cancel",handler:function(){console.log("不确定 clicked")}}]}).then(function(){console.log("actionsheet2 present")})}},{text:"翻转",handler:function(){console.log("翻转 clicked")}},{text:"增加",handler:function(){console.log("增加 clicked")}},{text:"取消",role:"cancel",handler:function(){console.debug("取消 clicked")}}]}).then(function(){console.log("请选择操作 present promise")})},showActionSheet2:function(){this.$actionSheet.present({title:"请选择型号",subTitle:"必须选择, 点击backdrop不能取消",cssClass:"  ActionSheetCssClass1 ActionSheetCssClass2  ",enableBackdropDismiss:!1,buttons:[{text:"MacBook Pro",cssClass:"  DestructiveBtnCssClass1 DestructiveBtnCssClass2 ",handler:function(){console.log("MacBook Pro clicked")}},{text:"MacMini",handler:function(){console.log("MacMini clicked")}},{text:"iPhone",handler:function(){console.log("iPhone clicked")}}]})},showActionSheet3:function(){var t=this;t.$actionSheet.present({title:"请选择操作",subTitle:"注意，选择后不能撤销！",cssClass:"  ActionSheetCssClass1 ActionSheetCssClass2  ",enableBackdropDismiss:!0,buttons:[{text:"删除",role:"destructive",icon:"trash",cssClass:"  DestructiveBtnCssClass1 DestructiveBtnCssClass2 ",handler:function(){console.log("删除 clicked")}},{text:"分享",icon:"share",handler:function(){console.log("分享 clicked")}},{text:"播放",icon:"play",handler:function(){console.log("播放 clicked")}},{text:"取消",role:"cancel",icon:"close",handler:function(){t.$actionSheet.dismiss().then(function(t){console.debug("取消 promise的退出方式")})}}]})},showActionSheet4:function(){var t=this;t.$actionSheet.present({title:"请选择操作",subTitle:"这里按钮很多, 请滚动选择!",enableBackdropDismiss:!0,buttons:[{text:"按钮1",handler:function(){}},{text:"按钮2",handler:function(){}},{text:"按钮3",handler:function(){}},{text:"按钮4",handler:function(){}},{text:"按钮5",handler:function(){}},{text:"按钮6",handler:function(){}},{text:"按钮7",handler:function(){}},{text:"按钮8",handler:function(){}},{text:"按钮9",handler:function(){}},{text:"按钮10",handler:function(){}},{text:"按钮11",handler:function(){}},{text:"按钮12",handler:function(){}},{text:"按钮13",handler:function(){}},{text:"按钮14",handler:function(){}},{text:"按钮15",handler:function(){}},{text:"按钮16",handler:function(){}},{text:"按钮17",handler:function(){}},{text:"按钮18",handler:function(){}},{text:"按钮19",handler:function(){}},{text:"按钮20",handler:function(){}},{text:"取消",role:"cancel",handler:function(){t.$actionSheet.dismiss().then(function(t){console.debug("promise的退出方式")})}}]})}}}},1002:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[n("Header",[n("Navbar",[n("Title",[t._v("Action Sheet")])],1)],1),t._v(" "),n("Content",{attrs:{padding:""}},[n("h5",[t._v("ActionSheet确认单组件")]),t._v(" "),n("p",[t._v("如果按钮组超过9个，则原生组件无法实现，只能使用H5组件")]),t._v(" "),n("Button",{attrs:{block:"",color:"primary"},on:{click:function(e){t.showActionSheet1()}}},[n("span",[t._v("最简单的")])]),t._v(" "),n("Button",{attrs:{block:"",color:"primary"},on:{click:function(e){t.showActionSheet2()}}},[n("span",[t._v("没有Cancel的Actionsheet")])]),t._v(" "),n("Button",{attrs:{block:"",color:"primary"},on:{click:function(e){t.showActionSheet3()}}},[n("span",[t._v("带有Icon的Actionsheet")])]),t._v(" "),n("Button",{attrs:{block:"",color:"primary"},on:{click:function(e){t.showActionSheet4()}}},[n("span",[t._v("Button很多")])])],1)],1)},staticRenderFns:[]}},662:function(t,e,n){n(999);var o=n(0)(n(1001),n(1002),null,null);t.exports=o.exports},999:function(t,e,n){var o=n(1e3);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(592)("0e35e13e",o,!0)}});