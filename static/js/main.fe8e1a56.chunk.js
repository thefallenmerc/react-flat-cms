(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n(6),l=n(4),u=(n(24),n(25),n(7));function i(e){var t=e.routeList,n=Object(a.useState)(t),c=Object(l.a)(n,2),u=c[0],i=c[1],s=Object(a.useState)(""),m=Object(l.a)(s,2),f=m[0],h=m[1];Object(a.useEffect)((function(){i(t)}),[t]);var p=function(e){var n=e.target.value;h(n),i(t.filter((function(e){return e.path.toLowerCase().indexOf(n.toLowerCase())>=0})))};return r.a.createElement("div",{className:"Dashboard p-4"},r.a.createElement("div",{className:"SearchContainer"},r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{value:f,onChange:p,onKeyDown:function(e){"Escape"===e.key&&p({target:{value:""}})},placeholder:"Search..."})),r.a.createElement("div",{className:"LinkBox"},u.length>0?u.map((function(e,t){return r.a.createElement("div",{className:"Link",key:t},r.a.createElement(o.b,{to:e.path},r.a.createElement("span",{className:"LinkTitle"},e.name),r.a.createElement("span",{className:"TagContainer"},e.tags.slice(0,e.tags.length-1).map((function(e,t){return r.a.createElement("span",{className:"Tag",key:t,onClick:function(){p({target:{value:e}})}},e)})))))})):f.length>0?r.a.createElement("div",{className:"InfoBox"},"No match found..."):r.a.createElement("div",{className:"InfoBox"},"Nothing to explore..."))))}function s(){return r.a.createElement("div",{className:"FourOFour"},r.a.createElement("h3",null,"You seem to be lost..."),r.a.createElement(o.b,{className:"HomeButton",to:"/"},"Home"))}var m=n(18);function f(){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"spinner"}))}function h(e){var t=e.history,n=e.routeList.find((function(e){return e.path===t.location.pathname})),c=Object(a.useState)(""),u=Object(l.a)(c,2),i=u[0],h=u[1],p=Object(a.useState)(!0),E=Object(l.a)(p,2),d=E[0],v=E[1],g=Object(a.useState)(!1),b=Object(l.a)(g,2),j=b[0],O=b[1];return Object(a.useEffect)((function(){n?fetch(n.url).then((function(e){return e.text()})).then((function(e){var t=new m.a;h(t.render(e)),window.Prism.highlightAll()})).catch((function(e){O(!0)})).finally((function(){v(!1)})):(v(!1),O(!0))}),[n,i,d,j]),d?r.a.createElement(f,null):j?r.a.createElement(s,null):r.a.createElement("div",{className:"Page container"},r.a.createElement("div",{className:"PageContent"},r.a.createElement("div",{className:"Title"},n.name),r.a.createElement("div",{className:"ContentBody",dangerouslySetInnerHTML:{__html:i}}),r.a.createElement(o.b,{className:"HomeButton",to:"/"},"Home")))}var p="https://raw.githubusercontent.com/thefallenmerc/tutorials-n-guides/master/",E={base:p,content:p+"static/content.json",getPath:function(e){return p+"static/src"+e},get:function(e){return fetch(p+"static/src"+e).then((function(e){return e.json()}))}};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b(e).replace(/\\/g,"/").replace(/_/g,"-").toLowerCase()}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("/").pop().split("-").filter((function(e){return e})).map((function(e){return g(e)})).join(" ")}function g(e){return e.charAt(0).toUpperCase()+e.substr(1)}function b(e){return e.substring(0,e.indexOf(".",-1))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("/").filter((function(e){return e}))}Object(c.render)(r.a.createElement(o.a,null,r.a.createElement((function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!0),s=Object(l.a)(o,2),m=s[0],p=s[1];return Object(a.useEffect)((function(){p(!0),fetch(E.content).then((function(e){return e.json()})).then((function(e){c(e.flat.map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.url=E.getPath(e.path),e.path=d(e.path),e.tags=j(e.path),e.name=v(e.path),e}(e)})))})).finally((function(){p(!1)}))}),[]),m?r.a.createElement(f,null):r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(i,{routeList:n})}}),r.a.createElement(u.a,{path:"/:page",render:function(e){return r.a.createElement(h,Object.assign({},e,{routeList:n}))}}))}),null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fe8e1a56.chunk.js.map