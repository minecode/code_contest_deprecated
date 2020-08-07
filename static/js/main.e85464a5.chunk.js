(this["webpackJsonpreactjs-setup"]=this["webpackJsonpreactjs-setup"]||[]).push([[0],{204:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(15),o=t.n(c),l=t(5),i=t(33),u={data:{auth:{authenticated:!1,user:{id:null,name:null,surname:null,image:null},token:null},selectedChallenge:{name:null},globalScore:null,listOfUsers:null,challengeScore:null,userScore:null,challengeIndex:null,challengeList:null}};var s=Object(i.b)((function(n,e){switch(e.type){case"LOGIN":case"LOGOUT":case"CHALLENGE":return e.data;default:return u}})),d=t(3),p=t(2);function f(){var n=Object(d.a)(["\n\tdisplay: grid;\n\n\tgrid-template-columns: 311px auto;\n\tgrid-template-rows: 46px auto;\n\n\tgrid-template-areas:\n\t\t'LG LG'\n\t\t'CL C';\n\n\t@media (min-width: 1024px) {\n\t\tgrid-template-columns: 311px auto 311px;\n\t\tgrid-template-rows: 46px auto;\n\t\n\t\tgrid-template-areas:\n\t\t\t'LG LG LG'\n\t\t\t'CL C UL';\n\t}\n\n\theight: 100vh;\n"]);return f=function(){return n},n}var m=p.default.div(f());function g(){var n=Object(d.a)(["\n  margin-right: 15px;\n  margin-left: 15px;\n"]);return g=function(){return n},n}function b(){var n=Object(d.a)(["\n  text-align: center;\n  padding: 20px;\n  color: var(--gray);\n"]);return b=function(){return n},n}function v(){var n=Object(d.a)(["\n  display: grid;\n\n  grid-template-columns: auto;\n  grid-template-rows: 46px auto auto;\n\n  grid-template-areas:\n    'CI'\n    'CD'\n    'DF';\n\n  height: 100vh;\n"]);return v=function(){return n},n}function h(){var n=Object(d.a)(["\n  grid-area: C;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--primary);\n  max-height: calc(100vh - 46px);\n  overflow-y: scroll;\n"]);return h=function(){return n},n}var x=p.default.div(h()),j=p.default.div(v()),E=p.default.div(b()),O=p.default.div(g()),y=t(209),k=t(210),w=t(208),C=t(207);function L(){var n=Object(d.a)(["\n  font-size: 15px;\n  color: var(--gray);\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);return L=function(){return n},n}function N(){var n=Object(d.a)(["\n  height: 24px;\n  width: 1px;\n\n  background-color: var(--white);\n  opacity: 0.2;\n\n  margin: 0 13px;\n"]);return N=function(){return n},n}function S(){var n=Object(d.a)(["\n  margin-left: 9px;\n\n  font-size: 16px;\n  font-weight: bold;\n\n  color: var(--white);\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);return S=function(){return n},n}function G(){var n=Object(d.a)(["\n  width: 24px;\n  height: 24px;\n\n  color: var(--symbol);\n"]);return G=function(){return n},n}function I(){var n=Object(d.a)(["\n  grid-area: CI;\n\n  display: flex;\n  align-items: center;\n\n  padding: 0 17px;\n  background-color: var(--primary);\n\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;\n  z-index: 2;\n"]);return I=function(){return n},n}function F(){var n=Object(d.a)(["\n  width: 24px;\n  height: 24px;\n\n  color: var(--gray);\n"]);return F=function(){return n},n}function U(){var n=Object(d.a)(["\n  width: 100%;\n  height: 44px;\n\n  padding: 0 10px 0 57px;\n  border-radius: 7px;\n\n  color: var(--white);\n  background-color: var(--chat-input);\n\n  position: relative;\n\n  &::placeholder {\n    color: var(--gray);\n  }\n\n  ~ svg {\n    position: relative;\n    top: -50%;\n    left: 14px;\n    transition: 180ms ease-in-out;\n  }\n"]);return U=function(){return n},n}function _(){var n=Object(d.a)(["\n  width: 100%;\n\n  padding: 16px;\n"]);return _=function(){return n},n}function T(){var n=Object(d.a)(["\n  padding: 30px;\n\n  display: flex;\n  flex-direction: column;\n\n  /* max-height: calc(100vh - 250px - 46px); */\n  /* overflow-y: scroll; */\n\n  color: var(--white);\n\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: var(--tertiary);\n    border-radius: 4px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: var(--secondary);\n  }\n"]);return T=function(){return n},n}function z(){var n=Object(d.a)(["\n  grid-area: CD;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--primary);\n"]);return z=function(){return n},n}var A=p.default.div(z()),Z=p.default.div(T()),D=(p.default.div(_()),p.default.input(U()),Object(p.default)(C.a)(F()),p.default.div(I())),M=(Object(p.default)(w.a)(G()),p.default.h1(S())),P=p.default.div(N()),q=(p.default.span(L()),t(13)),B=t.n(q),R=t(71),Y=t.n(R);function H(n){for(var e=(n=n.split("_").join(" ")).toLowerCase().split(" "),t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].substring(1);return e.join(" ")}var W=function(){var n=Object(l.c)((function(n){return n.data.selectedChallenge.name})),e=Object(l.c)((function(n){return n.data.challengeIndex}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,r.a.createElement(M,null,H(n.split("/")[1])),r.a.createElement(P,null)),r.a.createElement(A,null,r.a.createElement(Z,null,e&&B.a.decode(e.content).length>1?r.a.createElement(Y.a,{source:B.a.decode(e.content)}):"")))},J=t(8),Q=t.n(J),$=t(16),K=t(17),V=t(72),X=t.n(V);function nn(){var n=Object(d.a)(["\n\n  > span {\n    font-size: 2rem;\n    color: var(--gray);\n  }\n\n  > p {\n    margin-bottom: 10px;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(d.a)(["\n    * {\n        font-family: inherit;\n    }\n"]);return en=function(){return n},n}function tn(){var n=Object(d.a)(["\n  text-align: center;\n  padding: 20px;\n  color: var(--gray);\n\n  > div {\n    width: 100% !important;\n    \n  }\n\n"]);return tn=function(){return n},n}function an(){var n=Object(d.a)(["\n\n  align-items: center;\n  background: var(--discord);\n  border-radius: 4px;\n  margin: 20px;\n  padding: 0 12px;\n\n  &:hover {\n    background: var(--link);\n    cursor: pointer;\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(d.a)(["\n  grid-area: DF;\n"]);return rn=function(){return n},n}var cn=p.default.div(rn()),on=p.default.button(an()),ln=p.default.div(tn()),un=Object(p.default)(X.a)(en()),sn=p.default.div(nn()),dn=t(79),pn=t(34),fn=t.n(pn),mn=fn.a.create({baseURL:"https://api.github.com/repos/minecode/code_contest_responses"}),gn=t(214),bn=t(211),vn=(t(200),t(201),function(){var n=Object(a.useState)(""),e=Object(K.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)(""),i=Object(K.a)(o,2),u=i[0],s=i[1],d=Object(a.useState)(!1),p=Object(K.a)(d,2),f=p[0],m=p[1],g=Object(a.useState)(!1),b=Object(K.a)(g,2),v=b[0],h=b[1],x=Object(a.useState)(!1),j=Object(K.a)(x,2),E=j[0],O=j[1],w=Object(a.useState)("challenge"),C=Object(K.a)(w,2),L=C[0],N=C[1],S=Object(a.useState)(null),G=Object(K.a)(S,2),I=G[0],F=G[1],U=Object(l.c)((function(n){return n.data.selectedChallenge.name})),_=Object(l.c)((function(n){return n.data.auth})),T=function(){return O(!1)},z=function(){return O(!0)},A={headers:{Authorization:"Basic ".concat("bWluZWNvZGU6YmUwYTNhM2U5MTJiNDZiZTQ2NjE5ZGZhN2ZlYTcxMzhmOTMzMTlhYg=="),Accept:"application/vnd.github.antiope-preview+json"}};U&&U!==L&&(N(U),c(""),F(null),h(!1),O(!1),s(""),m(!1));var Z=function(){var n=Object($.a)(Q.a.mark((function n(){return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(""),m(!0),n.next=4,mn.put("/contents/".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id,"/resolution.py"),I,A);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=function(){var n=Object($.a)(Q.a.mark((function n(){return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(""),m(!0),n.next=4,mn.put("/contents/".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id,"/resolution.py"),I,A);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=Object($.a)(Q.a.mark((function n(e){var t,a;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={message:"".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id),committer:{name:"minecodebot",email:"minecode.geral@gmail.com"},content:"".concat(B.a.encode(e))},n.prev=1,n.next=4,mn.get("/contents/".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id,"/resolution.py"),A);case 4:a=n.sent,t.sha="".concat(a.data.sha),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:F(t);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),P=function(){var n=Object($.a)(Q.a.mark((function n(){var e,t,a;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,mn.get("/contents/".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id,"/resolution.py"),A);case 3:e=n.sent,t={message:"".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id),committer:{name:"minecodebot",email:"minecode.geral@gmail.com"},content:"".concat(e.data.content)},F(t),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),a={message:"".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id),committer:{name:"minecodebot",email:"minecode.geral@gmail.com"},content:"".concat(B.a.encode("# Place your code here"))},F(a);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){P()}),[U]),r.a.createElement(cn,null,U&&U.split("/")[1].length>0?r.a.createElement(dn.a,{onDrop:function(n){h(!1),c(n.map((function(n){var e=new FileReader;return e.readAsDataURL(n),e.addEventListener("load",Object($.a)(Q.a.mark((function n(){var t,a,r;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=14;break}return t=e.result.split(",")[1],a={message:"".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id),committer:{name:"minecodebot",email:"minecode.geral@gmail.com"},content:"".concat(t)},n.prev=3,n.next=6,mn.get("/contents/".concat(null===U||void 0===U?void 0:U.split(" ").join("_"),"/").concat(_.user.id,"/resolution.py"),A);case 6:r=n.sent,a.sha="".concat(r.data.sha),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),console.log(n.t0);case 13:F(a);case 14:case"end":return n.stop()}}),n,null,[[3,10]])}))),!1),n.name})))}},(function(n){var e=n.getRootProps,a=n.getInputProps,c=n.isDragActive,o=n.isDragReject;return r.a.createElement(ln,null,U&&I?r.a.createElement(un,{debounceChangePeriod:100,mode:"python",theme:"dracula",onChange:M,name:"codeeditor1",fontSize:18,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,editorProps:{$blockScrolling:!0},value:B.a.decode(I.content),setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}):r.a.createElement(r.a.Fragment,null),I?r.a.createElement(on,{onClick:function(){D(),z()}},"Submit code"):r.a.createElement(r.a.Fragment,null),r.a.createElement("h2",null,"or"),r.a.createElement(sn,e(),r.a.createElement("input",a()),r.a.createElement("span",null,c?"\ud83d\udcc2":"\ud83d\udcc1"),r.a.createElement("p",null,t?r.a.createElement(r.a.Fragment,null,t):o?r.a.createElement(r.a.Fragment,null," Invalid file "):r.a.createElement(r.a.Fragment,null,"Drag & drop images, or click to select files"))),f?r.a.createElement(gn.a,{show:E,onHide:T,backdrop:"static"},r.a.createElement(gn.a.Header,{closeButton:!0},r.a.createElement(gn.a.Title,null,"Test in progress...")),r.a.createElement(gn.a.Body,null,r.a.createElement(cn,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{xs:12,className:"text-center"},r.a.createElement(bn.a,{animation:"border"})),r.a.createElement(k.a,{xs:12,className:"text-center"},r.a.createElement("p",null,"We are testing your solution... Soon as possibel, your pontuation will be upadated!!")))))):I&&!v&&t.length>0?r.a.createElement(on,{onClick:function(){Z(),z()}},"Submit file"):v&&u?r.a.createElement("p",null,u):r.a.createElement(r.a.Fragment,null))})):r.a.createElement(r.a.Fragment,null))}),hn=t(29);function xn(){var n=Object(d.a)(["\n    margin:5px;\n    width: 165px;\n    height:35px;\n    border-radius: 4px;\n    background: var(--link);\n    color:white;\n    border:0px transparent;\n    text-align: center;\n\n    &:hover {\n        background: var(--discord)\n    }\n"]);return xn=function(){return n},n}function jn(){var n=Object(d.a)(["\n    grid-area: LG;\n\n    background-color: var(--tertiary);\n"]);return jn=function(){return n},n}var En=p.default.div(jn()),On=p.default.button(xn()),yn=function(){var n=Object(l.c)((function(n){return n.data})),e=Object(l.c)((function(n){return n.data.auth.authenticated})),t=Object(l.c)((function(n){return n.data.selectedChallenge.name})),a=Object(l.b)();return r.a.createElement(x,null,r.a.createElement(j,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),e?r.a.createElement(vn,null):r.a.createElement(O,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{xs:12,className:"text-center"},r.a.createElement(E,null,"You need to ",r.a.createElement(hn.GoogleLogin,{clientId:"156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){var t={data:n};t.data.auth={authenticated:!0,user:{id:e.googleId,name:e.profileObj.givenName,surname:e.profileObj.familyName,image:e.profileObj.imageUrl},token:e.tokenId},a({type:"LOGIN",data:t})},onFailure:function(n){console.log(n),a({type:"BAD_RESPONSE",data:null})},cookiePolicy:"single_host_origin",isSignedIn:!0,render:function(n){return r.a.createElement(On,{onClick:n.onClick,disabled:n.disabled},"Sign In w/ Google")}})," to send your solution!"))))):r.a.createElement(r.a.Fragment,null)))};function kn(){var n=Object(d.a)(["\n\twidth: 32;\n\theight: 32px;\n\tflex-shrink: 0;\n\tborder-radius: 50%;\n\tbackground: var(--gray);\n\tmargin: 0 0 0 0px;\n"]);return kn=function(){return n},n}function wn(){var n=Object(d.a)(["\n\tmargin-top: 5px;\n\tpadding: 5px;\n\n\tdisplay: flex;\n\talign-items: center;\n\n\tcursor: pointer;\n\n\tborder-radius: 4px;\n\tbackground: transparent;\n\ttransition: background 0.2s;\n\t&:hover {\n\t\tbackground: rgba(255, 255, 255, 0.1);\n\t}\n\n\t> strong {\n\t\tmargin-left: 13px;\n\t\tfont-weight: 500;\n\t\tcolor: var(--white);\n\t\topacity: 0.7;\n\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t> span {\n\t\tmargin-left: 9px;\n\n\t\tbackground-color: var(--discord);\n\t\tcolor: var(--white);\n\t\tborder-radius: 4px;\n\t\tpadding: 4px 5px;\n\n\t\ttext-transform: uppercase;\n\t\tfont-weight: bold;\n\t\tfont-size: 11px;\n\t}\n"]);return wn=function(){return n},n}function Cn(){var n=Object(d.a)(["\n\tmargin-top: 20px;\n\n\ttext-transform: uppercase;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tcolor: var(--gray);\n"]);return Cn=function(){return n},n}function Ln(){var n=Object(d.a)(["\n\t@media (min-width: 1024px) {\n\t\tgrid-area: UL;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 3px 6px 0 16px;\n\t\tbackground-color: var(--secondary);\n\n\t\tmax-height: calc(100vh - 46px);\n\t\toverflow-y: scroll;\n\n\t\t::-webkit-scrollbar {\n\t\t\twidth: 4px;\n\t\t}\n\n\t\t::-webkit-scrollbar-thumb {\n\t\t\tbackground-color: var(--tertiary);\n\t\t\tborder-radius: 4px;\n\t\t}\n\n\t\t::-webkit-scrollbar-track {\n\t\t\tbackground-color: var(--secondary);\n\t\t}\n\t\tmax-height: calc(100vh - 46px);\n\t}\n\n\tdisplay: none;\n"]);return Ln=function(){return n},n}var Nn=p.default.div(Ln()),Sn=p.default.span(Cn()),Gn=p.default.div(wn()),In=p.default.img(kn()),Fn=function(n){var e=n.user,t=n.score;return r.a.createElement(Gn,null,r.a.createElement(In,{src:B.a.decode(e.imageUrl)}),r.a.createElement("strong",null,e.firstName," ",e.lastName),r.a.createElement("span",null,t))},Un=function(){var n=Object(l.c)((function(n){return n.data.selectedChallenge.name})),e=Object(l.c)((function(n){return n.data.globalScore})),t=Object(l.c)((function(n){return n.data.listOfUsers})),a=Object(l.c)((function(n){return n.data.challengeScore}));return r.a.createElement(Nn,null,n?r.a.createElement(Sn,null,n.split("/").join(" ").split("_").join(" ")):r.a.createElement(Sn,null,"Global"),a&&a.length>0&&t?a.map((function(n,e){var a=t.filter((function(e){return e.userId===n.userId})).pop();return a?r.a.createElement(Fn,{key:e,user:a,score:n.score}):r.a.createElement(r.a.Fragment,null)})):e&&t&&!n?e.map((function(n,e){var a=t.filter((function(e){return e.userId===n.userId})).pop();return a?r.a.createElement(Fn,{key:e,user:a,score:n.score}):r.a.createElement(r.a.Fragment,null)})):r.a.createElement(r.a.Fragment,null))};function _n(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 6px;\n\n  > span {\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 500;\n    color: var(--gray);\n  }\n"]);return _n=function(){return n},n}function Tn(){var n=Object(d.a)(["\n  grid-area: CL;\n\n  display: flex;\n  flex-direction: column;\n\n  padding: 24px 9.5px 0 16px;\n  background-color: var(--secondary);\n"]);return Tn=function(){return n},n}var zn=p.default.div(Tn()),An=p.default.div(_n()),Zn=t(212);function Dn(){var n=Object(d.a)(["\n  width: 21px;\n  height: 21px;\n  color: var(--green);\n"]);return Dn=function(){return n},n}function Mn(){var n=Object(d.a)(["\n  width: 20px;\n  height: 20px;\n\n  color: var(--symbol);\n"]);return Mn=function(){return n},n}function Pn(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  cursor: pointer;\n\n  padding: 5px 3px;\n  border-radius: 5px;\n\n  background-color: transparent;\n\n  transition: background-color 0.2s;\n\n  padding: 0 0 0 20px;\n\n  > div {\n    display: flex;  \n    justify-content: space-between;\n    align-items: center;\n  }\n\n  > div span {\n    margin-left: 5px;\n    color: var(--senary);\n\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  &:hover,\n  &.active {\n    background-color: var(--quinary);\n\n    > div span {\n      color: var(--white);\n    }\n  }\n"]);return Pn=function(){return n},n}var qn=p.default.div(Pn()),Bn=Object(p.default)(w.a)(Mn()),Rn=Object(p.default)(Zn.a)(Dn()),Yn=function(n){var e=n.challengeName,t=Object(l.c)((function(n){return n.data.selectedChallenge.name})),a=Object(l.c)((function(n){return n.data.challengeList}));return r.a.createElement(qn,{className:t&&e.split("/")[0]===t.split("/")[0].split(" ").join("_")&&e.split("/")[1]===t.split("/")[1].split(" ").join("_")?"active":""},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",null,r.a.createElement(Bn,null),e?r.a.createElement("span",null,H(e.split("/")[1])):r.a.createElement(r.a.Fragment,null)),a&&a.filter((function(n){return n.challengeId.toUpperCase()===e.split("/")[1].toUpperCase()&&n.contestId.toUpperCase()===e.split("/")[0].toUpperCase()})).length>0?r.a.createElement(Rn,null):r.a.createElement(r.a.Fragment,null)))},Hn=t(213);function Wn(){var n=Object(d.a)(["\n  width: 20px;\n  height: 20px;\n\n  color: var(--symbol);\n  margin: 0 5px;\n"]);return Wn=function(){return n},n}function Jn(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  cursor: pointer;\n\n  padding: 5px 3px;\n  border-radius: 5px;\n\n  background-color: transparent;\n\n  transition: background-color 0.2s;\n\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  > div span {\n    color: var(--senary);\n\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  &:hover,\n  &.active {\n    background-color: var(--quinary);\n\n    > div span {\n      color: var(--white);\n    }\n  }\n"]);return Jn=function(){return n},n}var Qn=p.default.div(Jn()),$n=Object(p.default)(Hn.a)(Wn()),Kn=function(n){var e=n.contestName,t=n.size,a=Object(l.c)((function(n){return n.data.auth})),c=Object(l.c)((function(n){return n.data.selectedChallenge.name})),o=Object(l.c)((function(n){return n.data.userScore})),i=Object(l.c)((function(n){return n.data.challengeList}));return r.a.createElement(Qn,{className:c&&e.split("/")[0]===c.split("/")[0].split(" ").join("_")?"active":""},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",null,r.a.createElement($n,null),e?r.a.createElement("span",null,H(e.split("/")[0])):r.a.createElement(r.a.Fragment,null)),i&&a.authenticated?o?r.a.createElement("span",null,i.filter((function(n){return n.contestId===e})).length,"/",t):r.a.createElement("span",null,"0/",t):r.a.createElement(r.a.Fragment,null)))},Vn=t(78);function Xn(n){var e=Object(Vn.a)(n,function(){var n=Object($.a)(Q.a.mark((function n(e){var t,a;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{Authorization:"Basic ".concat("bWluZWNvZGU6YmUwYTNhM2U5MTJiNDZiZTQ2NjE5ZGZhN2ZlYTcxMzhmOTMzMTlhYg=="),Accept:"application/vnd.github.preview+json"}},n.next=3,mn.get(e,t);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),{revalidateOnFocus:!0});return{data:e.data,error:e.error,mutate:e.mutate}}var ne=function(){var n=Object(l.b)(),e=Object(l.c)((function(n){return n.data})),t=Object(a.useState)(""),c=Object(K.a)(t,2),o=c[0],i=c[1],u=Xn('/git/trees/45a03b077a6c35310942f1f493a3a9c3f042f6c4?recursive="true"').data,s=Object(a.useCallback)((function(t){var a={data:e};a.data.selectedChallenge={name:"".concat(t)},n({type:"CHALLENGE",data:a})}),[n,e]);return r.a.createElement(zn,null,r.a.createElement(An,null,r.a.createElement("span",null,"Contests")),r.a.createElement("div",{id:"listOfContests"},null===u||void 0===u?void 0:u.tree.filter((function(n,e){return!n.path.includes(".github")&&(1===n.path.split("/").length||2===n.path.split("/").length&&"requirements.txt"!==n.path.split("/")[1])})).map((function(t,a){return r.a.createElement("div",{key:a},1===t.path.split("/").length?r.a.createElement("div",{key:a,id:a.toString(),onClick:function(){return function(t){if(o===t){i("");var a={data:e};a.data.selectedChallenge={name:null},n({type:"CHALLENGE",data:a})}else{i(t);var r={data:e};r.data.selectedChallenge={name:"".concat(t,"/")},n({type:"CHALLENGE",data:r})}}(t.path.split("/")[0])}},r.a.createElement(Kn,{contestName:t.path,size:u.tree.filter((function(n){return n.path.includes(t.path)&&2===n.path.split("/").length&&"requirements.txt"!==n.path.split("/")[1]})).length})):2===t.path.split("/").length&&o.includes(t.path.split("/")[0])?r.a.createElement("div",{key:a,id:a.toString(),className:t.path.split("/")[0],onClick:function(){return s(t.path)}},r.a.createElement(Yn,{challengeName:t.path})):r.a.createElement(r.a.Fragment,null))}))))},ee=fn.a.create({baseURL:"https://code-contest-backend.herokuapp.com/contests"}),te=function(){var n=Object(l.c)((function(n){return n.data})),e=Object(l.c)((function(n){return n.data.auth.authenticated})),t=Object(l.b)(),a=function(){var e=Object($.a)(Q.a.mark((function e(a){var r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={data:n}).data.auth={authenticated:!0,user:{id:a.googleId,name:a.profileObj.givenName,surname:a.profileObj.familyName,image:a.profileObj.imageUrl},token:a.tokenId},e.next=4,ee.post("/user/".concat(a.googleId,"/").concat(a.profileObj.givenName,"/").concat(a.profileObj.familyName,"/").concat(B.a.encode(a.profileObj.imageUrl)));case 4:t({type:"LOGIN",data:r});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(En,null,e?r.a.createElement(hn.GoogleLogout,{clientId:"156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){var e={data:n};e.data.auth={authenticated:!1,user:{id:null,name:null,surname:null,image:null},token:null},t({type:"LOGOUT",data:e})},className:"BtnGoogle",render:function(n){return r.a.createElement(On,{onClick:n.onClick,disabled:n.disabled},"Logout")}}):r.a.createElement(hn.GoogleLogin,{clientId:"156221636932-bvl7ocr3bhrkikgcqc99k4g1a1s0sla1.apps.googleusercontent.com",buttonText:"Login",onSuccess:a,onFailure:function(n){console.log(n),t({type:"BAD_RESPONSE",data:null})},cookiePolicy:"single_host_origin",isSignedIn:!0,render:function(n){return r.a.createElement(On,{onClick:n.onClick,disabled:n.disabled},"Sign In w/ Google")}}))};function ae(){var n=Object(d.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-end  \n"]);return ae=function(){return n},n}function re(){var n=Object(d.a)(["\n  width: 39px;\n  height: 39px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: var(--gray);\n  margin: 0 0 0 20px;\n"]);return re=function(){return n},n}function ce(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n"]);return ce=function(){return n},n}function oe(){var n=Object(d.a)(["\n  grid-area: LG;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  color: var(--white);\n  background-color: var(--tertiary);\n  padding: 20px;\n"]);return oe=function(){return n},n}var le=p.default.div(oe()),ie=p.default.div(ce()),ue=p.default.img(re()),se=p.default.div(ae()),de=function(){var n=Object(l.b)(),e=Object(l.c)((function(n){return n.data})),t=Object(l.c)((function(n){return n.data.auth})),c=Object(l.c)((function(n){return n.data.auth.user.id})),o=Object(l.c)((function(n){return n.data.selectedChallenge.name})),i=Xn("https://code-contest-backend.herokuapp.com/contests/global").data,u=Xn("https://code-contest-backend.herokuapp.com/contests/user").data,s=Xn("https://code-contest-backend.herokuapp.com/contests/global/".concat(o)).data,d=Xn("https://code-contest-backend.herokuapp.com/contests/".concat(c,"/").concat(o)).data,p=Xn("/contents/".concat(null===o||void 0===o?void 0:o.split(" ").join("_"),"/index.md")).data,f=Xn("https://code-contest-backend.herokuapp.com/contests/list/".concat(c)).data;return Object(a.useEffect)((function(){var t={data:e};t.data.globalScore=i||null,t.data.listOfUsers=u||null,t.data.challengeScore=s||null,t.data.userScore=d||null,t.data.challengeIndex=p||null,t.data.challengeList=f||null,n({type:"CHALLENGE",data:t})}),[i,u,s,d,p,f,n,e]),r.a.createElement(le,null,t.authenticated?r.a.createElement(ie,null,r.a.createElement("span",null,"Welcome, ",t.user.name,"!"),r.a.createElement(ue,{src:t.user.image})):r.a.createElement(r.a.Fragment,null),r.a.createElement(se,null,r.a.createElement(te,null)))},pe=function(){return r.a.createElement(m,null,r.a.createElement(de,null),r.a.createElement(ne,null),r.a.createElement(yn,null),r.a.createElement(Un,null))};function fe(){var n=Object(d.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html, body, #root {\n    height: 100%;\n  }\n  *, button, input {\n    border: 0;\n    outline: 0;\n    font-family: 'Roboto', sans-serif;\n  }\n  :root {\n    --primary: #36393f;\n    --secondary: #2f3136;\n    --tertiary: rgb(32,34,37);\n    --quaternary: #292b2f;\n    --quinary: #393d42;\n    --senary: #828386;\n    \n    --white: #fff;\n    --gray: #8a8c90;\n    --chat-input: rgb(64,68,75);\n    --symbol: #74777a;\n    --notification: #f84a4b;\n    --discord: #6e86d6;\n    --mention-detail: #f9a839;\n    --mention-message: #413f3f;\n    --link: #5d80d6;\n    --rocketseat: #6633cc;\n    --green: #149414;\n  }\n"]);return fe=function(){return n},n}var me=Object(p.createGlobalStyle)(fe());var ge=function(){return r.a.createElement(l.a,{store:s},r.a.createElement(pe,null),r.a.createElement(me,null))};t(203);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root"))},83:function(n,e,t){n.exports=t(204)}},[[83,1,2]]]);
//# sourceMappingURL=main.e85464a5.chunk.js.map