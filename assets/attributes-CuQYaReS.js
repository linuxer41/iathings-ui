import{j as L,L as O,k as T}from"./runtime-CCPs69FA.js";import{f as C,g as V,d as B,h as E,n as I,j as M}from"./props-BNxVHmQm.js";function h(s){var i,r,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(i=0;i<a;i++)s[i]&&(r=h(s[i]))&&(t&&(t+=" "),t+=r)}else for(r in s)s[r]&&(t&&(t+=" "),t+=r);return t}function z(){for(var s,i,r=0,t="",a=arguments.length;r<a;r++)(s=arguments[r])&&(i=h(s))&&(t&&(t+=" "),t+=i);return t}function D(s){return typeof s=="object"?z(s):s??""}function G(s,i){i?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function P(s,i,r,t){var a=s.__attributes??(s.__attributes={});a[i]!==(a[i]=r)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[O]=r),r==null?s.removeAttribute(i):typeof r!="string"&&k(s).includes(i)?s[i]=r:s.setAttribute(i,r))}function q(s,i,r,t,a=!1,n=!1,R=!1){var e=i||{},d=s.tagName==="OPTION";for(var p in i)p in r||(r[p]=null);r.class&&(r.class=D(r.class)),t!==void 0&&(r.class=r.class?r.class+" "+t:t);var $=k(s),N=s.__attributes??(s.__attributes={});for(const f in r){let o=r[f];if(d&&f==="value"&&o==null){s.value=s.__value="",e[f]=o;continue}var y=e[f];if(o!==y){e[f]=o;var g=f[0]+f[1];if(g!=="$$"){if(g==="on"){const l={},_="$$"+f;let c=f.slice(2);var v=M(c);if(C(c)&&(c=c.slice(0,-7),l.capture=!0),!v&&y){if(o!=null)continue;s.removeEventListener(c,e[_],l),e[_]=null}if(o!=null)if(v)s[`__${c}`]=o,B([c]);else{let j=function(w){e[f].call(this,w)};e[_]=V(c,s,j,l)}else v&&(s[`__${c}`]=void 0)}else if(f==="style"&&o!=null)s.style.cssText=o+"";else if(f==="autofocus")E(s,!!o);else if(f==="__value"||f==="value"&&o!=null)s.value=s[f]=s.__value=o;else if(f==="selected"&&d)G(s,o);else{var u=f;a||(u=I(u));var A=u==="defaultValue"||u==="defaultChecked";if(o==null&&!n&&!A)if(N[f]=null,u==="value"||u==="checked"){let l=s;if(u==="value"){let _=l.defaultValue;l.removeAttribute(u),l.defaultValue=_}else{let _=l.defaultChecked;l.removeAttribute(u),l.defaultChecked=_}}else s.removeAttribute(f);else A||$.includes(u)&&(n||typeof o!="string")?s[u]=o:typeof o!="function"&&P(s,u,o)}f==="style"&&"__styles"in s&&(s.__styles={})}}}return e}var b=new Map;function k(s){var i=b.get(s.nodeName);if(i)return i;b.set(s.nodeName,i=[]);for(var r,t=s,a=Element.prototype;a!==t;){r=T(t);for(var n in r)r[n].set&&i.push(n);t=L(t)}return i}export{q as s};
