import{s as z,n as O}from"../chunks/scheduler.BvLojk_z.js";import{S as F,i as G,e as k,b as B,s as P,c as C,d as T,f as S,g,h as j,m as J,n as M,j as D,k as N,o as W,l as A,p as K,q as U}from"../chunks/index.BWBw-11p.js";function H(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function I(s,f,l){const c=s.slice();return c[15]=f[l],c[17]=l,c}function V(s){let f,l=s[5](s[15])+"",c,t,a,m;function i(){return s[8](s[17])}return{c(){f=k("button"),c=B(l),t=P(),this.h()},l(o){f=C(o,"BUTTON",{class:!0});var h=T(f);c=S(h,l),t=j(h),h.forEach(g),this.h()},h(){M(f,"class","border border-black w-1/3 h-36 text-center text-4xl font-bold hover:bg-yellow-200"),U(f,"bg-gray-400",(s[1]==1,s[7](s[3],s[17])))},m(o,h){D(o,f,h),N(f,c),N(f,t),a||(m=W(f,"click",i),a=!0)},p(o,h){s=o,h&1&&l!==(l=s[5](s[15])+"")&&A(c,l),h&138&&U(f,"bg-gray-400",(s[1]==1,s[7](s[3],s[17])))},d(o){o&&g(f),a=!1,m()}}}function L(s){let f,l,c,t,a="リセット",m,i,o=s[1]==1?"○":"×",h,p,_,b,w,v,d=H(s[0]),r=[];for(let n=0;n<d.length;n+=1)r[n]=V(I(s,d,n));return{c(){f=k("h1"),l=B(s[2]),c=P(),t=k("button"),t.textContent=a,m=P(),i=k("span"),h=B(o),p=B("の手番です"),_=P(),b=k("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){f=C(n,"H1",{class:!0});var e=T(f);l=S(e,s[2]),e.forEach(g),c=j(n),t=C(n,"BUTTON",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-1i7sbj8"&&(t.textContent=a),m=j(n),i=C(n,"SPAN",{class:!0});var u=T(i);h=S(u,o),p=S(u,"の手番です"),u.forEach(g),_=j(n),b=C(n,"DIV",{class:!0});var E=T(b);for(let q=0;q<r.length;q+=1)r[q].l(E);E.forEach(g),this.h()},h(){M(f,"class","text-6xl"),M(t,"class","bg-blue-700 text-white rounded-md py-4 px-8 my-4"),M(i,"class","text-xl"),M(b,"class","flex flex-wrap")},m(n,e){D(n,f,e),N(f,l),D(n,c,e),D(n,t,e),D(n,m,e),D(n,i,e),N(i,h),N(i,p),D(n,_,e),D(n,b,e);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(b,null);w||(v=W(t,"click",s[4]),w=!0)},p(n,[e]){if(e&4&&A(l,n[2]),e&2&&o!==(o=n[1]==1?"○":"×")&&A(h,o),e&235){d=H(n[0]);let u;for(u=0;u<d.length;u+=1){const E=I(n,d,u);r[u]?r[u].p(E,e):(r[u]=V(E),r[u].c(),r[u].m(b,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=d.length}},i:O,o:O,d(n){n&&(g(f),g(c),g(t),g(m),g(i),g(_),g(b)),K(r,n),w=!1,v()}}}function Q(s,f,l){const c=()=>[0,0,0,0,0,0,0,0,0];let t=c(),a=1,m="tic tac toe",i=!1,o=[];const h=()=>{l(0,t=c()),l(1,a=1),l(2,m="tic tac toe"),l(3,o=[]),i=!1},p=()=>{a==1?l(1,a=2):l(1,a=1)},_=e=>e==1?"○":e==2?"×":"",b=()=>{if(w(1)){l(2,m=_(1)+"の勝ちです"),i=!0;return}if(w(2)){l(2,m=_(2)+"の勝ちです"),i=!0;return}l(2,m="tic tac toe")},w=e=>t[0]==e&&t[1]==e&&t[2]==e||t[3]==e&&t[4]==e&&t[5]==e||t[6]==e&&t[7]==e&&t[8]==e||t[0]==e&&t[3]==e&&t[6]==e||t[1]==e&&t[4]==e&&t[7]==e||t[2]==e&&t[5]==e&&t[8]==e||t[0]==e&&t[4]==e&&t[8]==e||t[2]==e&&t[4]==e&&t[6]==e,v=e=>{if(o.length>=6){const u=o.shift();l(3,o),u!=null&&l(0,t[u]=0,t)}o.push(e),l(3,o)},d=e=>{i||t[e]==0&&(v(e),l(0,t[e]=a,t),p(),b())};return[t,a,m,o,h,_,d,(e,u)=>e.length<=5?!1:e[0]==u?(console.log("aaaa"),!0):!1,e=>{d(e)}]}class Y extends F{constructor(f){super(),G(this,f,Q,L,z,{})}}export{Y as component};
