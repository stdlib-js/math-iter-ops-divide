// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(){var d,l,u,m,f,p;if((u=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(d=[],l=[],p=0;p<u;p++)if(d.push(arguments[p]),s(arguments[p]))l.push(1);else{if(!t(arguments[p]))throw new TypeError(i("0Hl4c",p,arguments[p]));l.push(0)}if(e(m={},"next",a),e(m,"return",h),n){for(p=0;p<u;p++)if(l[p]&&!r(d[p][n])){f=!0;break}f||e(m,n,j)}return f=!1,p=0,m;function a(){var e,r,t;if(f)return{done:!0};if(l[0]){if((r=d[0].next()).done)return f=!0,r;e="number"==typeof r.value?r.value:NaN}else e=d[0];for(t=1;t<u;t++)if(l[t]){if((r=d[t].next()).done)return f=!0,r;"number"==typeof r.value?e/=r.value:e=NaN}else e/=d[t];return{value:e,done:!1}}function h(e){return f=!0,arguments.length?{value:e,done:!0}:{done:!0}}function j(){var e,r;for(e=[],r=0;r<u;r++)l[r]?e.push(d[r][n]()):e.push(d[r]);return o.apply(null,e)}}export{o as default};
//# sourceMappingURL=index.mjs.map
