(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),m=n.n(a),o=n(7),c=n.n(o),r=(n(17),n(10)),i=n(1),l=n(2),s=n(4),u=n(3),b=n(5),v=(n(18),function(e){var t=e.commentData.map(function(t,n){return m.a.createElement("div",{key:n,className:"comment"},m.a.createElement("button",{onClick:function(){return e.removeComment(n)},type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},m.a.createElement("span",{"aria-hidden":"true"},"\xd7")),m.a.createElement("h5",null,t.name),m.a.createElement("p",null,t.comment))});return m.a.createElement("div",null,t)}),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.commentData,n=e.removeComment;return m.a.createElement(v,{commentData:t,removeComment:n})}}]),t}(a.Component),E=n(8),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,m=t.value;n.setState(Object(E.a)({},a,m))},n.onFormSubmit=function(e){e.preventDefault(),n.props.handleSubmit(n.state),n.setState(n.initialState)},n.initialState={name:"",comment:""},n.state=n.initialState,n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.comment;return m.a.createElement("div",{className:"form"},m.a.createElement("form",{onSubmit:this.onFormSubmit,className:"container"},m.a.createElement("div",{className:"form-title"},"Post a comment"),m.a.createElement("input",{type:"text",name:"name",value:t,placeholder:"Your name",className:"form-control",onChange:this.handleChange}),m.a.createElement("br",null),m.a.createElement("input",{type:"text",name:"comment",value:n,placeholder:"Say something ...",className:"form-control",onChange:this.handleChange}),m.a.createElement("br",null),m.a.createElement("button",{type:"submit",className:"btn mybtn"},"Post")))}}]),t}(a.Component),p=n(9),O=n.n(p),d=function(){return m.a.createElement("nav",{"aria-label":"breadcrumb default-color"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("img",{src:O.a,className:"logo",alt:"Responsive image"})))},N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,m=new Array(a),o=0;o<a;o++)m[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(m)))).state={comments:[]},n.handleSubmit=function(e){n.setState({comments:[].concat(Object(r.a)(n.state.comments),[e])})},n.removeComment=function(e){var t=n.state.comments;n.setState({comments:t.filter(function(t,n){return n!==e})})},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.comments;return m.a.createElement("div",{className:"App col-md-4 offset-md-4"},m.a.createElement(d,null),m.a.createElement(h,{commentData:e,removeComment:this.removeComment}),m.a.createElement(A,{handleSubmit:this.handleSubmit}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(m.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAVCAYAAAAgjzL/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRUNDNjgwM0JCNkQxMUU1QTI3OEE3N0NBMDNCMDRGRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRUNDNjgwNEJCNkQxMUU1QTI3OEE3N0NBMDNCMDRGRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNFQ0M2ODAxQkI2RDExRTVBMjc4QTc3Q0EwM0IwNEZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNFQ0M2ODAyQkI2RDExRTVBMjc4QTc3Q0EwM0IwNEZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EZ3bmgAABmRJREFUeNrsmXls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"}},[[11,1,2]]]);
//# sourceMappingURL=main.c59eb1d9.chunk.js.map