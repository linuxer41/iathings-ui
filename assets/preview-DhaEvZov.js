import{v as S}from"./v4-CtRu48qb.js";import{o as x}from"./index-client-B8_Nf0GE.js";import{s as A,g as T}from"./runtime-CCPs69FA.js";var j=Object.defineProperty,I=(t,n)=>{for(var e in n)j(t,e,{get:n[e],enumerable:!0})};const{addons:k}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:V}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:w}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",C=`${B}/action-event`,M={depth:10,clearOnStoryChange:!0,limit:50},D=(t,n)=>{let e=Object.getPrototypeOf(t);return!e||n(e)?e:D(e,n)},N=t=>!!(typeof t=="object"&&t&&D(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),P=t=>{if(N(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let e=Object.getOwnPropertyDescriptor(n,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...e,value:Object.create(o.constructor.prototype)}),n}return t},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?S():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(t,n={}){let e={...M,...n},o=function(...g){var O,i;if(n.implicit){let c=(O="__STORYBOOK_PREVIEW__"in w?w.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(c){let r=!((i=window==null?void 0:window.FEATURES)!=null&&i.disallowImplicitActionsInRenderV8),s=new V({phase:c.phase,name:t,deprecated:r});if(r)console.warn(s);else throw s}}let f=k.getChannel(),u=F(),_=5,d=g.map(P),v=g.length>1?d:d[0],h={id:u,count:0,data:{name:t,args:v},options:{...e,maxDepth:_+(e.depth||3),allowFunction:e.allowFunction||!1}};f.emit(C,h)};return o.isAction=!0,o.implicit=n.implicit,o}var U={};I(U,{decorators:()=>J});function W(t){A("after-navigate-args",t)}function y(t){return[{subscribe(n){let e=T(t);return n(e),()=>{}}},n=>{A(t,n)}]}var[K,Y]=y("page-ctx"),[ee,z]=y("navigating-ctx"),[H,$]=y("updated-ctx");H.check=()=>{};var G=t=>typeof t=="function"?{callback:t,asRegex:!1}:t,q=(t,n)=>{var o,g,f,u,_;let e=((o=n.parameters)==null?void 0:o.sveltekit_experimental)??{};return Y((g=e==null?void 0:e.stores)==null?void 0:g.page),z((f=e==null?void 0:e.stores)==null?void 0:f.navigating),$((u=e==null?void 0:e.stores)==null?void 0:u.updated),W((_=e==null?void 0:e.navigation)==null?void 0:_.afterNavigate),x(()=>{let d=i=>{let c=i.composedPath().findLast(r=>r instanceof HTMLElement&&r.tagName==="A");if(c&&c instanceof HTMLAnchorElement){let r=c.getAttribute("href");if(!r)return;i.preventDefault();let s=()=>b("navigate")(r,i);if(!e.hrefs){s();return}let a=!0;Object.entries(e.hrefs).forEach(([l,E])=>{let{callback:p,asRegex:m}=G(E);(m?new RegExp(l).test(r):r===l)&&(a=!1,p==null||p(r,i))}),a&&s()}};function v(i,c,r){let s=[];return c.forEach(a=>{var E;let l=((E=e[i])==null?void 0:E[a])&&e[i][a]instanceof Function;if(l||r){let p=({detail:R=[]})=>{let L=Array.isArray(R)?R:[];(l?e[i][a]:b(a))(...L)},m=`storybook:${a}`;s.push({eventType:m,listener:p}),window.addEventListener(m,p)}}),()=>{s.forEach(({eventType:a,listener:l})=>{window.removeEventListener(a,l)})}}let h=v("navigation",["goto","invalidate","invalidateAll","pushState","replaceState"],!0),O=v("forms",["enhance"]);return window.addEventListener("click",d),()=>{window.removeEventListener("click",d),h(),O()}}),t()},J=[q];export{J as decorators};
