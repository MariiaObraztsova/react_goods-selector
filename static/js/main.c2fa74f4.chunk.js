(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),s=n(7),r=n(4),a=n(5),d=n(9),l=n(8),i=n(1),u=n.n(i),p=n(6),b=n.n(p),f=(n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.deleteGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.clearSelection=function(){e.setState({selectedGoods:[]})},e.displaySelectedGoods=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");default:return"".concat(t.slice(0,-1).join(", ")," and ").concat(t.slice(-1)," are selected")}},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:this.displaySelectedGoods()}),Object(f.jsx)("ul",{children:h.map((function(n){var c=t.find((function(e){return e===n}));return Object(f.jsxs)("li",{className:b()("App__good",{"App__good--selected":c}),children:[n,Object(f.jsx)("button",{type:"button",className:"App__button App__button--select",onClick:t.find((function(e){return e===n}))?function(){return e.deleteGood(n)}:function(){return e.addGood(n)},children:c?"Remove":"Add"})]},n)}))}),t.length>0&&Object(f.jsx)("button",{type:"button",className:"App__button App__button--clear",onClick:this.clearSelection,children:"Clear selection"})]})}}]),n}(u.a.Component),G=j;o.a.render(Object(f.jsx)(G,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c2fa74f4.chunk.js.map