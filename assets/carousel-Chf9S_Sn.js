import{r as s,R as Y}from"./react-Drobi48b.js";var I={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=s,$=Symbol.for("react.element"),J=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,X=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function T(n,e,r){var t,o={},a=null,c=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)G.call(e,t)&&!ee.hasOwnProperty(t)&&(o[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:$,type:n,key:a,ref:c,props:o,_owner:X.current}}_.Fragment=J;_.jsx=T;_.jsxs=T;I.exports=_;var u=I.exports,ne=Object.defineProperty,te=Object.defineProperties,re=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,L=(n,e,r)=>e in n?ne(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,C=(n,e)=>{for(var r in e||(e={}))oe.call(e,r)&&L(n,r,e[r]);if(M)for(var r of M(e))ae.call(e,r)&&L(n,r,e[r]);return n},se=(n,e)=>te(n,re(e)),B=Y.createContext({}),ie=B.Provider,A=()=>s.useContext(B);function ue(n,e,r=!0){const t=s.useRef();s.useEffect(()=>{t.current=n},[n]),s.useEffect(()=>{if(r&&e!==null){const o=setInterval(()=>{t.current&&t.current()},e);return()=>clearInterval(o)}},[e,r])}function ce({totalPages:n,wrapMode:e}){const[r,t]=s.useState(0);return{currentPage:r,goToPage:i=>{i<0||i>=n||t(i)},goForward:()=>{t(e==="wrap"?i=>(i+1)%n:i=>Math.min(i+1,n-1))},goBack:()=>{t(e==="wrap"?i=>(i-1+n)%n:i=>Math.max(i-1,0))}}}function le(n,e){const r=s.useRef();return s.useCallback((...t)=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{n(...t)},e)},[n,e])}function R(n,e){return new Array(n).fill(0).map((r,t)=>t*e)}function de(n){let e=0;return n.map(r=>e+=r)}function fe(n,e){return n.reduce((r,t)=>Math.abs(t-e)<Math.abs(r-e)?t:r)}function x(...n){return n.filter(Boolean).join(" ")}var W=()=>typeof window<"u";function pe(n){const[e,r]=s.useState();return s.useEffect(()=>{if(!n.current)return;const t=n.current,o=new ResizeObserver(()=>r(t.getBoundingClientRect()));return o.observe(t),()=>{o.unobserve(t)}},[n]),e}function ve({element:n,scrollDistance:e}){const[r,t]=s.useState(0),[o,a]=s.useState(R(r,0)),c=pe(n);return s.useEffect(()=>{var i;const d=n.current;if(!(d&&c))return;const p=d.scrollWidth,v=d.offsetWidth,b=p-v;if(v!==0)switch(e){case"screen":{const l=Math.round(p/v);t(l),a(R(l,v));break}case"slide":{const l=((i=d.querySelector("#nuka-wrapper"))==null?void 0:i.children)||[],E=Array.from(l).map(h=>h.offsetWidth),m=de([0,...E.slice(0,-1)]),P=m.findIndex(h=>h>=b)+1;t(P),a(m);break}default:if(typeof e=="number"&&e>0){const l=Math.ceil(b/e)+1;t(l),a(R(l,e))}}},[n,e,c]),{totalPages:r,scrollOffset:o}}function me({element:n,enabled:e}){const[r,t]=s.useState(!1),o=n==null?void 0:n.current;return s.useEffect(()=>{if(o&&o.addEventListener&&e){const a=()=>t(!0),c=()=>t(!1);return o.addEventListener("mouseover",a),o.addEventListener("mouseout",c),()=>{o.removeEventListener("mouseover",a),o.removeEventListener("mouseout",c)}}},[o,e]),r}function he({element:n,enabled:e,goForward:r,goBack:t}){const o=n==null?void 0:n.current;s.useEffect(()=>{if(o&&e){const a=c=>{c.key==="ArrowLeft"?t():c.key==="ArrowRight"&&r()};return o.addEventListener("keydown",a),()=>o.removeEventListener("keydown",a)}},[e,t,r,o])}var D="(prefers-reduced-motion: no-preference)",ge=()=>W()?!window.matchMedia(D).matches:!0;function we({enabled:n}){const[e,r]=s.useState(ge);return s.useEffect(()=>{if(!(W()&&n))return;const t=window.matchMedia(D),o=a=>{r(!a.matches)};return t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[n]),e}function be(){const{currentPage:n,totalPages:e,wrapMode:r,goBack:t,goForward:o}=A(),a=r!=="nowrap",c=a||n>0,i=a||n<e-1,d=x("nuka-nav-button","nuka-nav-button-prev",c&&"nuka-nav-button-enabled"),p=x("nuka-nav-button","nuka-nav-button-next",i&&"nuka-nav-button-enabled");return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:d,onClick:t,children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:u.jsx("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})})}),u.jsx("div",{className:p,onClick:o,children:u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentcolor",children:u.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})})]})}var ke=()=>{const{totalPages:n,currentPage:e,goToPage:r}=A(),t=o=>x("nuka-page-indicator",e===o?"nuka-page-indicator-active":"");return u.jsx("div",{className:"nuka-page-container","data-testid":"pageIndicatorContainer",children:[...Array(n)].map((o,a)=>u.jsx("button",{onClick:()=>r(a),className:t(a),children:u.jsx("span",{className:"nuka-hidden",children:a+1})},a))})};function ye(n,{insertAt:e}={}){if(typeof document>"u")return;const r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}ye(`.nuka-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.nuka-container {
  position: relative;
}
.nuka-slide-container {
  position: relative;
}
.nuka-overflow {
  overflow: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nuka-overflow::-webkit-scrollbar {
  display: none;
}
.nuka-wrapper {
  display: flex;
}
.nuka-nav-button {
  position: absolute;
  top: calc(50% - 2rem);
  margin: 1rem;
  display: none;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  background-color: rgba(146, 148, 151, 0.5);
  color: white;
  border-radius: 9999px;
  font-size: 1rem;
  user-select: none;
}
.nuka-nav-button.nuka-nav-button-prev {
  left: 0;
  margin-right: 1rem;
}
.nuka-nav-button.nuka-nav-button-next {
  right: 0;
  margin-left: 1rem;
}
.nuka-nav-button:hover {
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-nav-button-enabled {
  display: block;
}
.nuka-container-auto-hide .nuka-nav-button {
  display: none;
}
.nuka-container-auto-hide:hover .nuka-nav-button-enabled {
  display: block;
}
.nuka-page-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.nuka-page-indicator {
  width: 0.75rem;
  height: 0.75rem;
  cursor: pointer;
  border-radius: 9999px;
  border-style: none;
  background-color: rgba(146, 148, 151, 0.65);
}
.nuka-page-indicator.nuka-page-indicator-active,
.nuka-page-indicator.nuka-page-indicator-active:hover {
  background-color: rgb(229 231 235 / 1);
}
.nuka-page-indicator:hover {
  background-color: rgb(229 231 235 / 1);
}
`);var xe={arrows:u.jsx(be,{}),autoplay:!1,autoplayInterval:3e3,dots:u.jsx(ke,{}),id:"nuka-carousel",keyboard:!0,scrollDistance:"screen",showArrows:!1,showDots:!1,swiping:!0,wrapMode:"nowrap"},_e=s.forwardRef((n,e)=>{const r=C(C({},xe),n),{afterSlide:t,arrows:o,autoplay:a,autoplayInterval:c,beforeSlide:i,children:d,className:p,dots:v,id:b,keyboard:l,scrollDistance:E,showArrows:m,showDots:P,swiping:h,title:O,wrapMode:F}=r,N=s.useRef(null),f=s.useRef(null),{totalPages:S,scrollOffset:g}=ve({element:f,scrollDistance:E}),{currentPage:j,goBack:k,goForward:w,goToPage:y}=ce({totalPages:S,wrapMode:F}),H=le(()=>{if(!f.current)return;const Q=f.current.scrollLeft,V=g.indexOf(fe(g,Q));y(V)},100);he({element:N,enabled:l,goForward:w,goBack:k}),s.useImperativeHandle(e,()=>({goForward:w,goBack:k,goToPage:y}),[w,k,y]);const q=me({element:f,enabled:a}),z=we({enabled:a});ue(w,c,a&&!(q||z)),s.useEffect(()=>{f.current&&(i&&i(),f.current.scrollLeft=g[j],t&&setTimeout(()=>t(),0))},[j,g,i,t]);const U=x("nuka-container",m==="hover"&&"nuka-container-auto-hide",p),K=se(C({},r),{totalPages:S,currentPage:j,scrollOffset:g,goBack:k,goForward:w,goToPage:y});return u.jsxs(ie,{value:K,children:[u.jsxs("div",{className:U,"aria-labelledby":"nuka-carousel-heading",tabIndex:l?0:void 0,ref:N,id:b,children:[O&&u.jsx("h3",{id:"nuka-carousel-heading",className:"nuka-hidden",children:O}),u.jsxs("div",{className:"nuka-slide-container",children:[u.jsx("div",{className:"nuka-overflow",ref:f,onTouchMove:H,id:"nuka-overflow","data-testid":"nuka-overflow",style:{touchAction:h?"pan-x":"none"},children:u.jsx("div",{className:"nuka-wrapper",id:"nuka-wrapper","data-testid":"nuka-wrapper",children:d})}),m&&o]})]}),P&&v]})});_e.displayName="Carousel";export{_e as C,u as j};
