(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(3),r=o.n(c),l=(o(14),o(4)),s=o(5),i=o(7),u=o(6),d=o(8),h=o(1),m=(o(16),function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={boxColor:"white",selectedColor:"#ffff00"},o.onColorSelect=o.onColorSelect.bind(Object(h.a)(Object(h.a)(o))),o.changeBackground=o.changeBackground.bind(Object(h.a)(Object(h.a)(o))),o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onColorSelect",value:function(e){this.setState({selectedColor:e.target.value})}},{key:"changeBackground",value:function(e){this.setState({boxColor:this.state.selectedColor})}},{key:"render",value:function(){var e={backgroundColor:this.state.boxColor};return n.a.createElement("div",{className:"App-container"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"title"},"Color Box")),n.a.createElement("main",{className:"App-main"},n.a.createElement("div",{className:"box",onClick:this.changeBackground,style:e}),n.a.createElement("input",{type:"color",value:this.state.selectedColor,onChange:this.onColorSelect,className:"color-selector"})),n.a.createElement("footer",{className:"App-footer"},n.a.createElement("p",null,"Made by Jon!")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,o){e.exports=o(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.f2c3eac2.chunk.js.map