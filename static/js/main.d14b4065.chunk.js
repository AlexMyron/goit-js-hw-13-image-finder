(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{21:function(n,t,e){},43:function(n,t,e){},48:function(n,t,e){"use strict";e.r(t);var o,i=e(0),r=e.n(i),a=e(11),c=e.n(a),s=(e(21),e(8)),p=e.n(s),u=e(12),d=e(9),l=e(4),b=e(13),x=e.n(b),f=e(10),g=(e(43),e(2)),h=g.a.header("\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n"),j=g.a.form("\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"),m=g.a.button("\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover, &:focus{\n    opacity: 1;\n  }\n  "),O=g.a.span("\n  position: absolute;\n//   width: 1px;\n//   height: 1px;\n//   padding: 0;\n//   overflow: hidden;\n//   clip: rect(0, 0, 0, 0);\n//   white-space: nowrap;\n//   clip-path: inset(50%);\n//   border: 0;\n"),v=g.a.input("\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::plactholder{\n    font: inherit;\n    font-size: 18px;\n  }\n"),w=e(1),y=function(n){var t=n.sendInputValue,e=Object(i.useState)(""),o=Object(l.a)(e,2),r=o[0],a=o[1];return Object(w.jsx)(h,{children:Object(w.jsxs)(j,{onSubmit:function(n){n.preventDefault(),t(r)},children:[Object(w.jsx)(m,{type:"submit",children:Object(w.jsx)(O,{})}),Object(w.jsx)(v,{type:"text",value:r,onChange:function(n){a(n.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},k=g.a.li("\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  "),S=g.a.img("\nwidth: 100%;\nheight: 260px;\nobject-fit: cover;\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\n&:hover, &:focus{\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"),C=function(n){var t=n.queryResult;return Object(w.jsx)(w.Fragment,{children:t.map((function(n){var t=n.id,e=n.webformatURL,o=n.tags;return Object(w.jsx)(k,{children:Object(w.jsx)(S,{src:e,alt:o,"data-id":t})},t)}))})},z=g.a.ul("\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"),I=function(n){var t=n.queryResult,e=n.getImage;return Object(w.jsx)(z,{onClick:e,children:Object(w.jsx)(C,{queryResult:t})})},E=g.a.button("\n  width: 100px;\n    margin: 0 auto;\n"),F=function(n){var t=n.handleClick;return Object(w.jsx)(E,{type:"button",onClick:t,children:"Load more"})},L=e(15),R=g.a.div(o||(o=Object(L.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),N=g.a.button("\n  display: block;\n  margin-left: auto;\n  margin-right: 0;\n  margin-bottom: 5px;\n\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n}\n\n"),q=g.a.div("\n  \n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"),T=g.a.div("\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"),B=function(n){var t=n.handleOverlayClick,e=n.handleKeycode,o=n.children;return Object(i.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}})),Object(w.jsx)(T,{onClick:t,children:Object(w.jsx)(q,{children:o})})},D=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(n,"&page=").concat(t,"&key=22046149-41a2515b5a783e6a5f4bfbfcc&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong"))}))},M=function(){var n=Object(i.useState)(""),t=Object(l.a)(n,2),e=t[0],o=t[1],r=Object(i.useState)(1),a=Object(l.a)(r,2),c=a[0],s=a[1],b=Object(i.useState)([]),g=Object(l.a)(b,2),h=g[0],j=g[1],m=Object(i.useState)(""),O=Object(l.a)(m,2),v=O[0],k=O[1],S=Object(i.useState)(!1),C=Object(l.a)(S,2),z=C[0],E=C[1],L=Object(i.useState)(!1),q=Object(l.a)(L,2),T=q[0],M=q[1],P=Object(i.useState)(""),U=Object(l.a)(P,2),G=U[0],H=U[1],J=Object(i.useState)(!1),K=Object(l.a)(J,2),V=K[0],_=K[1];Object(i.useEffect)((function(){if(""!==e){var n,t;n=e,t=c,M(!0),D(n,t).then((function(n){return j((function(t){return 0===n.totalHits&&_(!0),[].concat(Object(d.a)(t),Object(d.a)(n.hits))}))})).catch((function(n){return k(n)})).finally((function(){return M(!1)}))}}),[e,c]),Object(i.useEffect)((function(){if(12!==h.length&&0!==h.length)return Q()}),[h]),Object(i.useEffect)((function(){A(V),_(!1)}),[V]);var A=function(n){if(n)return f.b.error("No such photos or images found",{position:"top-right",duration:2e3})},W=function(){var n=Object(u.a)(p.a.mark((function n(t){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s((function(n){return n+1}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Q=function(){window.scrollTo({top:3*document.documentElement.scrollHeight,behavior:"smooth"})},X=function(){E(!z)},Y=h.length>0;return Object(w.jsxs)(R,{className:"App",children:[Object(w.jsx)(y,{sendInputValue:function(n){j([]),s(1),o(n)}}),Object(w.jsx)(I,{queryResult:h,getImage:function(n){"IMG"===n.target.nodeName&&(!function(n){var t=h.find((function(t){return t.id===n}));H(t.largeImageURL),t.largeImageURL}(Number(n.target.dataset.id)),E(!0))}}),T&&Object(w.jsx)(x.a,{className:"loaderIcon",type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e5}),z&&Object(w.jsxs)(B,{handleOverlayClick:function(n){"IMG"!==n.target.nodeName&&X()},handleKeycode:X,children:[Object(w.jsx)(N,{type:"button",children:"Close"}),Object(w.jsx)("img",{src:G,alt:""},"null")]}),v&&Object(w.jsxs)("p",{children:["Woops... ",v.message]}),Y&&Object(w.jsx)(F,{handleClick:W}),Object(w.jsx)(f.a,{})]})},P=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,49)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;e(n),o(n),i(n),r(n),a(n)}))};c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root")),P()}},[[48,1,2]]]);
//# sourceMappingURL=main.d14b4065.chunk.js.map