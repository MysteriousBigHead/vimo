"use strict";function getPresentDismissIns(i){return{_i:null,present:function(e){var n=this;return new Promise(function(s){n._i&&n._i.isActive?n._i.dismiss().then(function(){n._i=i(e),n._i.present().then(function(){s()})}):(n._i=i(e),n._i.present().then(function(){s()}))})},dismiss:function(){var i=this;return new Promise(function(e){i._i&&i._i.isActive?i._i.dismiss().then(function(){e()}):e()})}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPresentDismissIns=getPresentDismissIns;