(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(81)},47:function(e,t,n){},49:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),s=n(39),c=n.n(s),r=(n(47),n(41)),i=n(15),l=n(16),m=n(18),u=n(17),p=n(19),d=n(12),f=(n(49),n(50),n(40)),h=n.n(f),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleFormSubmit",value:function(e){e.preventDefault();var t=this.refs.messageText.value;this.props.actions.send(t)}},{key:"render",value:function(){var e=this,t=0,n=this.props.messages.map(function(e){return o.a.createElement("li",{className:"list-group-item",key:t++,style:{color:"#000"}},e)});return o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t)}},o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"text",ref:"messageText",className:"form-control"}),o.a.createElement("span",{className:"input-group-btn"},o.a.createElement("button",{type:"submit",className:"btn btn-prime"},"Send"))))),o.a.createElement("ul",{className:"list-group"},n))}}]),t}(a.Component),g=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(m.a)(this,Object(u.a)(t).call(this,e));var a=new h.a("https://chat-server.azurewebsites.net/chat"),o=Object(d.a)(Object(d.a)(n));return a.onopen=function(){console.log("connection to server open")},a.onmessage=function(e){console.log("message recieved:",e.data),o.setState({messages:Object(r.a)(o.state.messages).concat([e.data])})},a.onclose=function(){console.log("close")},n.state={actions:a,messages:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(b,this.state)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.72683933.chunk.js.map