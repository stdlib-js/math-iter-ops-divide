// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(){var d,l,u,f,m,p;if((u=arguments.length)<2)throw new Error(i("0Zh0I"));for(d=[],l=[],p=0;p<u;p++)if(d.push(arguments[p]),n(arguments[p]))l.push(1);else{if(!t(arguments[p]))throw new TypeError(i("0Zh4P",p,arguments[p]));l.push(0)}if(e(f={},"next",(function(){var e,r,t;if(m)return{done:!0};if(l[0]){if((r=d[0].next()).done)return m=!0,r;e="number"==typeof r.value?r.value:NaN}else e=d[0];for(t=1;t<u;t++)if(l[t]){if((r=d[t].next()).done)return m=!0,r;"number"==typeof r.value?e/=r.value:e=NaN}else e/=d[t];return{value:e,done:!1}})),e(f,"return",(function(e){if(m=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s){for(p=0;p<u;p++)if(l[p]&&!r(d[p][s])){m=!0;break}m||e(f,s,(function(){var e,r;for(e=[],r=0;r<u;r++)l[r]?e.push(d[r][s]()):e.push(d[r]);return o.apply(null,e)}))}return m=!1,p=0,f}export{o as default};
//# sourceMappingURL=index.mjs.map
