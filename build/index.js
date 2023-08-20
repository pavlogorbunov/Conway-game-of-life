(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t,n){let i=0;for(let o=-1;o<=1;++o)for(let r=-1;r<=1;++r)e+o>=0&&e+o<n.length&&t+r>=0&&t+r<n[e+o].length&&(i+=n[e+o][t+r]);return i-=n[e][t],i}e.r(t),e.d(t,{AA:()=>a,BIGGLIDER:()=>h,DIAMOND4812:()=>m,FIG8:()=>v,GLIDER1:()=>i,ORNAMENT1:()=>d,PENTADECATHLON:()=>s,PINWHEEL:()=>l,SPACESHIP1:()=>g,STAR:()=>u,addFigure:()=>_,addFourGliders:()=>L,addTwoBigGliders:()=>y,addTwoSpaceShips1:()=>E});const i={scheme:[[1,1,1],[0,0,1],[0,1,0]],position:["left","bottom"],margin:1},o={scheme:[[0,1,0],[0,0,1],[1,1,1]],position:["left","top"],margin:1},r={scheme:[[0,1,0],[1,0,0],[1,1,1]],position:["right","top"],margin:1},c={scheme:[[1,1,1],[1,0,0],[0,1,0]],position:["right","bottom"],margin:1},s={scheme:[[0,0,1,0,0,0,0,1,0,0],[1,1,0,1,1,1,1,0,1,1],[0,0,1,0,0,0,0,1,0,0]],position:["center","center"],margin:2},l={scheme:[[0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[1,1,0,1,0,0,0,0,1,0,0,0],[1,1,0,1,0,0,1,0,1,0,0,0],[0,0,0,1,0,0,0,1,1,0,1,1],[0,0,0,1,0,1,0,0,1,0,1,1],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0]],position:["center","center"],margin:2},d={scheme:[[1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,0,1,1],[0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0],[1,1,0,1,1,1,1,1,1],[1,1,0,1,1,1,1,1,1]],position:["center","center"],margin:2},a={scheme:[[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,1,0,1,0,0,1,0,1,0],[1,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1],[0,1,0,1,0,0,1,0,1,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,0,1,1,0,0,0,0]],position:["center","center"],margin:2},m={scheme:[[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0]],position:["center","center"],margin:2},h={scheme:[[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0],[0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0],[0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1],[0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0]],position:["right","bottom"],margin:2},f={scheme:[...h.scheme].map((e=>[...e].reverse())).reverse(),position:["left","top"],margin:2},u={scheme:[[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,0,0,0,1,0,1,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0],[1,1,0,0,0,0,0,0,0,0,0,1,1],[0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,1,0,0,0,1,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,1,1,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0]],position:["center","center"],margin:2},g={scheme:[[0,1,1,1,1],[1,0,0,0,1],[0,0,0,0,1],[1,0,0,1,0]],position:["left","center"],margin:2},p={scheme:[...g.scheme].map((e=>[...e].reverse())),position:["right","center"],margin:2},v={scheme:[[1,1,1,0,0,0],[1,1,1,0,0,0],[1,1,1,0,0,0],[0,0,0,1,1,1],[0,0,0,1,1,1],[0,0,0,1,1,1]],position:["center","center"],margin:2};function E(e){_(g,e),_(p,e)}function y(e){_(h,e),_(f,e)}function L(e){_(i,e),_(o,e),_(r,e),_(c,e)}function _(e,t){let n,i;(t.length<=e.scheme.length+2*e.margin||t[0].length<=e.scheme[0].length+2*e.margin)&&alert("Добавление невозможно. Для добавления необходимо уменьшить масштаб поля."),"left"===e.position[0]&&(n=e.margin),"right"===e.position[0]&&(n=t[0].length-e.margin-e.scheme[0].length),"center"===e.position[0]&&(n=Math.floor(t[0].length/2)-Math.floor(e.scheme[0].length/2)),"top"===e.position[1]&&(i=e.margin),"bottom"===e.position[1]&&(i=t.length-e.margin-e.scheme.length),"center"===e.position[1]&&(i=Math.floor(t.length/2)-Math.floor(e.scheme.length/2)),e.scheme.forEach(((e,o)=>{e.forEach(((e,r)=>{t[i+o][n+r]=e}))}))}function b(e){e.classList.toggle("cell_active"),1===w[e.i][e.j]?w[e.i][e.j]=0:w[e.i][e.j]=1}function I(e){M||1!==e.buttons||b(e.target)}function S(e){clearInterval(e)}function B(e){M=!M,M?(x.classList.remove("field_edit"),J.classList.add("header__button_active"),J.innerText="СТОП",P=setInterval((()=>{w=function(e){if(JSON.parse(JSON.stringify(e))===JSON.parse(JSON.stringify([[]])))return e;let t=JSON.parse(JSON.stringify(e)),i=function(e){let t=[];for(let i=0;i<e.length;++i){t.push([]);for(let o=0;o<e[0].length;++o)t[i][o]=n(i,o,e)}return t}(t);return function(e,t){const n=[];for(let i=0;i<e.length;++i){n.push([]);for(let o=0;o<e[i].length;++o)0===e[i][o]&&3===t[i][o]?n[i][o]=1:1===e[i][o]&&(t[i][o]<2||t[i][o]>3)?n[i][o]=0:n[i][o]=e[i][o]}return n}(t,i)}(w),A(w)}),100)):(x.classList.add("field_edit"),J.classList.remove("header__button_active"),J.innerText="СТАРТ",S(P))}function T(){for(M&&(x.classList.add("field_edit"),J.classList.remove("header__button_active"),J.innerText="СТАРТ",M=!1,S(P));x.firstChild;)x.removeChild(x.firstChild);C()}function C(){M&&(x.classList.add("field_edit"),J.classList.remove("header__button_active"),J.innerText="СТАРТ",M=!1,S(P));const e=Math.floor(x.offsetWidth/j);k=x.offsetWidth/e;const t=Math.floor((window.innerHeight-x.getBoundingClientRect().top-G.getBoundingClientRect().height)/j);R=(window.innerHeight-x.getBoundingClientRect().top-G.getBoundingClientRect().height)/t,w=[];for(let n=0;n<t;++n)w.push(Array(e).fill(0));A(w)}function A(e){for(;x.firstChild;)x.removeChild(x.firstChild);e.forEach(((e,t)=>{e.forEach(((e,n)=>{const i=document.createElement("div");i.classList.add("cell"),1===e&&i.classList.add("cell_active"),i.style.height=R+"px",i.style.width=k+"px",i.i=t,i.j=n,i.addEventListener("mouseover",I),x.appendChild(i)}))}))}function O(){Array.from(F).forEach((e=>e.classList.add("popup_hidden")))}function N(e){e.classList.remove("popup_hidden")}let w=[],P={},M=!1,j=18,k=j,R=j;const x=document.getElementById("field"),G=document.getElementById("footer"),J=document.getElementById("playButton"),D=document.getElementById("clearButton"),H=document.getElementById("+"),q=document.getElementById("-"),F=document.querySelectorAll(".popup"),W=document.getElementById("infoPopup"),z=document.getElementById("infoPopupOpen"),K=document.querySelectorAll(".popup__close"),Q=document.getElementById("configurations"),U=document.getElementById("configurationsPopup"),V=document.querySelectorAll(".configuration");C(),x.addEventListener("mousedown",(function(e){M||b(e.target)})),J.addEventListener("click",B),D.addEventListener("click",T),H.addEventListener("click",(function(){for(M&&(x.classList.add("field_edit"),J.classList.remove("header__button_active"),J.innerText="СТАРТ",M=!1,S(P));x.firstChild;)x.removeChild(x.firstChild);j+=2,setTimeout(C,500)})),q.addEventListener("click",(function(){j-=2,setTimeout(C,500)})),z.addEventListener("click",(function(){M&&B(),N(W)})),Q.addEventListener("click",(function(){M&&B(),N(U)})),Array.from(K).forEach((e=>{e.addEventListener("click",O)})),Array.from(V).forEach((e=>{e.addEventListener("click",(()=>{!function(e){O(),"function"==typeof t[e]?t[e](w):"object"==typeof t[e]&&_(t[e],w),A(w)}(e.id)}))})),window.addEventListener("resize",(()=>{T(),C(),setTimeout(C,250),setTimeout(T,300)}))})();