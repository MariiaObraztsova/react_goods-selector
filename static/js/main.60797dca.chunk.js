(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),s=n(7),r=n(4),a=n(5),d=n(9),i=n(8),l=n(1),u=n.n(l),p=n(6),b=n.n(p),f=(n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.deleteGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.clearSelection=function(){e.setState({selectedGoods:[]})},e}return Object(a.a)(n,[{key:"render",value:function(){var e,t,n=this,c=this.state.selectedGoods;switch(c.length){case 0:t="No goods",e="";break;case 1:t="".concat(c[0]),e="is";break;default:t="".concat(c.slice(0,-1).join(", ")," and ").concat(c.slice(-1)),e="are"}return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"".concat(t," ").concat(e," selected")}),Object(f.jsx)("ul",{children:j.map((function(e){return Object(f.jsxs)("li",{className:b()("App__good",{"App__good--selected":c.find((function(t){return t===e}))}),children:[e,Object(f.jsx)("button",{type:"button",className:"App__button App__button--select",onClick:c.find((function(t){return t===e}))?function(){return n.deleteGood(e)}:function(){return n.addGood(e)},children:c.find((function(t){return t===e}))?"Remove":"Add"})]},e)}))}),c&&Object(f.jsx)("button",{type:"button",className:"App__button App__button--clear",onClick:this.clearSelection,children:"Clear selection"})]})}}]),n}(u.a.Component),_=h;o.a.render(Object(f.jsx)(_,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.60797dca.chunk.js.map