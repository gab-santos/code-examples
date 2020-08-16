(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{120:function(n,e){},124:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(54),c=t.n(o),u=t(55),i=t.n(u),l=t(15),s=t(10),p=t(5),f=t.n(p),b=t(7),m=t(56),d=t.n(m).a.create({baseURL:"http://localhost:3000"}),g=t(1),h=t(2),v=t(57),O=t.n(v);function j(){var n=Object(g.a)(["\n  border: 0;\n  border-radius: 2px;\n  width: 100%;\n  height: 42px;\n  padding: 0 20px;\n  font-size: 16px;\n  font-weight: bold;\n  background: #f05a5b;\n  color: #fff;\n  cursor: pointer;\n\n  :hover {\n    background: #e14f50;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(g.a)(["\n  width: 100%;\n  background: #fff;\n  margin-top: 50px;\n  border-radius: 4px;\n  padding: 30px;\n"]);return x=function(){return n},n}function E(){var n=Object(g.a)(["\n  margin: 80px auto;\n  max-width: 450px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return E=function(){return n},n}function y(){var n=Object(g.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    min-height: 100%;\n  }\n\n  body, input, button {\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n    font-family: 'Roboto', Arial, Helvetica, sans-serif\n  }\n\n  body {\n    font-size: 14px;\n\n    background: #000 url(",") no-repeat;\n    background-size: cover;\n\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased !important\n  }\n"]);return y=function(){return n},n}var w=Object(h.a)(y(),O.a),C=h.b.div(E()),k=h.b.div(x()),S=h.b.button(j());function A(){var n=Object(g.a)([""]);return A=function(){return n},n}function R(){var n=Object(g.a)(["\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  height: 45px;\n  padding: 0 15px;\n  font-size: 16px;\n"]);return R=function(){return n},n}function z(){var n=Object(g.a)(["\n  font-size: 14px;\n  color: #444;\n  font-weight: bold;\n  margin-bottom: 8px;\n"]);return z=function(){return n},n}function I(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return n},n}function _(){var n=Object(g.a)(["\n  font-size: 22px;\n  line-height: 30px;\n  margin-bottom: 30px;\n"]);return _=function(){return n},n}var L=h.b.p(_()),F=h.b.form(I()),D=h.b.label(z()),T=h.b.input(R()),M=Object(h.b)(S)(A());function U(n){var e=n.history,t=Object(r.useState)(""),o=Object(b.a)(t,2),c=o[0],u=o[1],i=Object(r.useState)(!0),l=Object(b.a)(i,2),s=l[0],p=l[1];return Object(r.useEffect)((function(){if(localStorage.getItem("@AirCnC:user"))return e.push("/dashboard");p(!1)}),[e]),s?a.a.createElement("h1",null,"Loading..."):a.a.createElement(a.a.Fragment,null,a.a.createElement(L,null,"Ofereca ",a.a.createElement("strong",null,"spots")," para programadores e encontre"," ",a.a.createElement("strong",null,"talentos")," para sua empresa"),a.a.createElement(F,{onSubmit:function(n){var t,r;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,f.a.awrap(d.post("/sessions",{email:c}));case 3:t=a.sent,r=t.data._id,localStorage.setItem("@AirCnC:user",r),e.push("/dashboard");case 7:case"end":return a.stop()}}))}},a.a.createElement(D,{htmlFor:"email"},"E-MAIL *"),a.a.createElement(T,{id:"email",type:"email",placeholder:"Seu melhor e-mail",value:c,onChange:function(n){return u(n.target.value)}}),a.a.createElement(M,{type:"submit"},"Entrar")))}var J=t(64),V=t(60),q=t.n(V);function G(){var n=Object(g.a)(["\n  width: 100%;\n  justify-self: center;\n  font-size: 15px;\n  margin-top: 10px;\n  text-decoration: underline;\n\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n"]);return G=function(){return n},n}function B(){var n=Object(g.a)([""]);return B=function(){return n},n}function H(){var n=Object(g.a)([""]);return H=function(){return n},n}function N(){var n=Object(g.a)(["\n  font-size: 15px;\n  color: #999;\n"]);return N=function(){return n},n}function P(){var n=Object(g.a)(["\n  margin-top: 10px;\n  font-size: 24px;\n  color: #444;\n"]);return P=function(){return n},n}function Q(){var n=Object(g.a)(["\n  width: 100%;\n  height: 120px;\n  background-image: url(",");\n  background-size: cover;\n  border-radius: 4px;\n"]);return Q=function(){return n},n}function $(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return $=function(){return n},n}function K(){var n=Object(g.a)(["\n  width: 100%;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  margin-bottom: 30px;\n"]);return K=function(){return n},n}function W(){var n=Object(g.a)(["\n  color: #e55e5e;\n"]);return W=function(){return n},n}function X(){var n=Object(g.a)(["\n  margin-right: 10px;\n  margin-top: 10px;\n  border: 0;\n  font-weight: bold;\n  background: transparent;\n  color: #84c870;\n  cursor: pointer;\n"]);return X=function(){return n},n}function Y(){var n=Object(g.a)(["\n  line-height: 24px;\n  font-size: 16px;\n"]);return Y=function(){return n},n}function Z(){var n=Object(g.a)(["\n  margin-bottom: 15px;\n  list-style: none;\n"]);return Z=function(){return n},n}var nn=h.b.ul(Z()),en=h.b.li(Y()),tn=h.b.button(X()),rn=Object(h.b)(tn)(W()),an=h.b.ul(K()),on=h.b.li($()),cn=h.b.header(Q(),(function(n){return n.img})),un=h.b.strong(P()),ln=h.b.span(N()),sn=Object(h.b)(l.b)(H()),pn=Object(h.b)(S)(B()),fn=h.b.button(G());function bn(n){var e=n.history,t=Object(r.useState)([]),o=Object(b.a)(t,2),c=o[0],u=o[1],i=Object(r.useState)([]),l=Object(b.a)(i,2),s=l[0],p=l[1],m=Object(r.useState)(!0),g=Object(b.a)(m,2),h=g[0],v=g[1],O=localStorage.getItem("@AirCnC:user"),j=Object(r.useMemo)((function(){return q()("http://localhost:3000",{query:{user_id:O}})}),[O]);return Object(r.useEffect)((function(){j.on("booking_request",(function(n){return p([].concat(Object(J.a)(s),[n]))}))}),[j,s]),Object(r.useEffect)((function(){!function(){var n,t;f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=localStorage.getItem("@AirCnC:user")){r.next=3;break}return r.abrupt("return",e.push("/"));case 3:return r.next=5,f.a.awrap(d.get("/dashboard",{headers:{user_id:n}}));case 5:t=r.sent,u(t.data),v(!1);case 8:case"end":return r.stop()}}))}()}),[e]),h?a.a.createElement("h1",null,"Loading..."):a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,null,s.map((function(n){return a.a.createElement(en,{key:n._id},a.a.createElement("p",null,a.a.createElement("strong",null,n.user.email)," est\xe1 solicitando uma reserva em ",a.a.createElement("strong",null,n.spot.company)," para a data:"," ",a.a.createElement("strong",null,n.date),"."),a.a.createElement(tn,{onClick:function(){return e=n._id,f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(d.post("/booking/".concat(e,"/approvals")));case 3:p(s.filter((function(n){return n._id!==e}))),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("ERROR");case 9:case"end":return n.stop()}}),null,null,[[0,6]]);var e}},"ACEITAR"),a.a.createElement(rn,{onClick:function(){return e=n._id,f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(d.post("/booking/".concat(e,"/rejections")));case 3:p(s.filter((function(n){return n._id!==e}))),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("ERROR");case 9:case"end":return n.stop()}}),null,null,[[0,6]]);var e}},"REJEITAR"))}))),a.a.createElement(an,null,c.map((function(n){return a.a.createElement(on,{key:n._id},a.a.createElement(cn,{img:n.thumbnail_url}),a.a.createElement(un,null,n.company),a.a.createElement(ln,null,n.price?"R$ ".concat(n.price,"/dia"):"GRATUITO"))}))),a.a.createElement(sn,{to:"/new"},a.a.createElement(pn,null,"Cadastrar novo spot")),a.a.createElement(fn,{onClick:function(){return localStorage.removeItem("@AirCnC:user"),void e.push("/")}},"Sair"))}function mn(){var n=Object(g.a)(["\n  align-self: center;\n  font-size: 15px;\n  margin-top: 10px;\n"]);return mn=function(){return n},n}function dn(){var n=Object(g.a)([""]);return dn=function(){return n},n}function gn(){var n=Object(g.a)([""]);return gn=function(){return n},n}function hn(){var n=Object(g.a)(["\n  font-weight: normal;\n  color: #999;\n  font-size: 12px;\n"]);return hn=function(){return n},n}function vn(){var n=Object(g.a)([""]);return vn=function(){return n},n}function On(){var n=Object(g.a)(["\n  display: ",";\n  width: 50px;\n"]);return On=function(){return n},n}function jn(){var n=Object(g.a)(["\n  display: none;\n"]);return jn=function(){return n},n}function xn(){var n=Object(g.a)(["\n  margin-bottom: 20px;\n  border: ",";\n  background-size: cover;\n  cursor: pointer;\n  height: 160px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-image: url(",");\n"]);return xn=function(){return n},n}function En(){var n=Object(g.a)([""]);return En=function(){return n},n}var yn=Object(h.b)(F)(En()),wn=h.b.label(xn(),(function(n){return!n.img&&"1px dashed #ddd"}),(function(n){return n.img})),Cn=h.b.input(jn()),kn=h.b.img(On(),(function(n){return n.img&&"none"})),Sn=Object(h.b)(D)(vn()),An=h.b.span(hn()),Rn=Object(h.b)(T)(gn()),zn=Object(h.b)(M)(dn()),In=Object(h.b)(l.b)(mn()),_n=t(63),Ln=t.n(_n);function Fn(n){var e=n.history,t=Object(r.useState)(null),o=Object(b.a)(t,2),c=o[0],u=o[1],i=Object(r.useState)(""),l=Object(b.a)(i,2),s=l[0],p=l[1],m=Object(r.useState)(""),g=Object(b.a)(m,2),h=g[0],v=g[1],O=Object(r.useState)(""),j=Object(b.a)(O,2),x=j[0],E=j[1],y=Object(r.useState)(!0),w=Object(b.a)(y,2),C=w[0],k=w[1];Object(r.useEffect)((function(){if(!localStorage.getItem("@AirCnC:user"))return e.push("/");k(!1)}),[e]);var S=Object(r.useMemo)((function(){return c?URL.createObjectURL(c):null}),[c]);return C?a.a.createElement("h1",null,"Loading..."):a.a.createElement(yn,{onSubmit:function(n){var t,r;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),t=localStorage.getItem("@AirCnC:user"),(r=new FormData).append("thumbnail",c),r.append("company",s),r.append("techs",h),r.append("price",x),a.next=9,f.a.awrap(d.post("/spots",r,{headers:{user_id:t}}));case 9:e.push("/dashboard");case 10:case"end":return a.stop()}}))}},a.a.createElement(wn,{img:S},a.a.createElement(Cn,{type:"file",onChange:function(n){return u(n.target.files[0])}}),a.a.createElement(kn,{src:Ln.a,img:S,alt:"Select image"})),a.a.createElement(Sn,{htmlFor:"company"},"EMPRESA *"),a.a.createElement(Rn,{id:"company",placeholder:"Sua empresa incr\xedvel",value:s,onChange:function(n){return p(n.target.value)}}),a.a.createElement(Sn,{htmlFor:"techs"},"TECNOLOGIAS *",a.a.createElement(An,null,"(separdas por v\xedrgula)")),a.a.createElement(Rn,{id:"techs",placeholder:"Quais tecnologias usam?",value:h,onChange:function(n){return v(n.target.value)}}),a.a.createElement(Sn,{htmlFor:"price"},"VALOR DA DI\xc1RIA *",a.a.createElement(An,null,"(em branco para gratu\xedto)")),a.a.createElement(Rn,{id:"price",placeholder:"Valor cobrado por dia",value:x,onChange:function(n){return E(n.target.value)}}),a.a.createElement(zn,{type:"submit"},"Cadastrar"),a.a.createElement(In,{to:"/dashboard"},"Voltar"))}function Dn(){return a.a.createElement(l.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",exact:!0,component:U}),a.a.createElement(s.a,{path:"/dashboard",component:bn}),a.a.createElement(s.a,{path:"/new",component:Fn})))}c.a.render(a.a.createElement((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null),a.a.createElement(C,null,a.a.createElement("img",{src:i.a,alt:"Logo AirCnC",onClick:function(){}}),a.a.createElement(k,null,a.a.createElement(Dn,null))))}),null),document.getElementById("root"))},55:function(n,e,t){n.exports=t.p+"static/media/logo.74052802.svg"},57:function(n,e,t){n.exports=t.p+"static/media/background.83252e0a.jpg"},63:function(n,e,t){n.exports=t.p+"static/media/camera.6a6f4b6e.svg"},67:function(n,e,t){n.exports=t(124)}},[[67,1,2]]]);
//# sourceMappingURL=main.96a459a7.chunk.js.map