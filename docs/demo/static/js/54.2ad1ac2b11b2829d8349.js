webpackJsonp([54],{622:function(t,e,i){i(835);var n=i(0)(i(837),i(838),"data-v-620d79bf",null);t.exports=n.exports},835:function(t,e,i){var n=i(836);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(592)("b492c648",n,!0)},836:function(t,e,i){e=t.exports=i(591)(),e.push([t.i,"",""])},837:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var c=i(2),o=n(c),r=i(64),s=n(r);e.default={name:"name",data:function(){return{selectedCity:["140000","140100","140106"],province:"山西省",city:"太原市",district:"迎泽区"}},methods:{openCityPicker:function(){var t=this;this.$cityPicker.present({onSelect:function(e){var i=[];e.province&&(t.province=e.province.text,i.push(e.province.value.toString())),e.city&&(t.city=e.city.text,i.push(e.city.value.toString())),e.district&&(t.district=e.district.text,i.push(e.district.value.toString())),t.selectedCity=i},onCancel:function(){console.log("onCancel")},startCode:"1",selectedCity:this.selectedCity,fetchData:function(e){return t.$indicator.present(),new o.default(function(i){e?(0,s.default)("https://raw.githubusercontent.com/vm-component/vm-address-json/master/data/"+e+".json").then(function(e){e.data.forEach(function(t){t.text=t.divisionName,t.value=t.divisionCode,t.disabled=!1}),i(e.data),t.$indicator.dismiss()}).catch(function(){i([]),console.error("无法获取数据"),t.$indicator.dismiss()}):(i([]),console.error("没有查询的code值"),t.$indicator.dismiss())})}})}}}},838:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Page",[i("Header",[i("Navbar",[i("Title",[t._v("城市选择器")])],1)],1),t._v(" "),i("Content",{attrs:{padding:""}},[i("h5",[t._v("简介")]),t._v(" "),i("p",[t._v("\n            城市选择器使用的是本地数据库进行地址匹配, 使用的是Picker组件.\n        ")]),t._v(" "),i("h5",[t._v("Picker组件")]),t._v(" "),i("p",[i("strong",[t._v("初始值: ")]),t._v(t._s(t.selectedCity))]),t._v(" "),i("p",[i("strong",[t._v("当前选择的值")]),t._v(": "+t._s(t.province)+"-"+t._s(t.city)+"-"+t._s(t.district))]),t._v(" "),i("Button",{attrs:{block:""},on:{click:t.openCityPicker}},[t._v("城市选择")])],1)],1)},staticRenderFns:[]}}});