(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),o=n(4),s=n(5),r=n(7),i=n(6),l=n(1),u=n(0),d=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={logKey:""},e.handleKeyClick=function(t){e.setState({logKey:t.key})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyClick)}},{key:"render",value:function(){var e=this.state.logKey;return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(l.Component);n(13);c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3de6a398.chunk.js.map