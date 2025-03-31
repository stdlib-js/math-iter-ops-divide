"use strict";var h=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var p=h(function(k,m){"use strict";var v=require("@stdlib/utils-define-nonenumerable-read-only-property"),y=require("@stdlib/assert-is-function"),b=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/assert-is-iterator-like"),f=require("@stdlib/symbol-iterator"),x=require("@stdlib/string-format");function l(){var i,u,a,s,n,e;if(a=arguments.length,a<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(i=[],u=[],e=0;e<a;e++)if(i.push(arguments[e]),q(arguments[e]))u.push(1);else if(b(arguments[e]))u.push(0);else throw new TypeError(x("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",e,arguments[e]));if(s={},v(s,"next",c),v(s,"return",d),f){for(e=0;e<a;e++)if(u[e]&&!y(i[e][f])){n=!0;break}n||v(s,f,g)}return n=!1,e=0,s;function c(){var t,r,o;if(n)return{done:!0};if(u[0]){if(r=i[0].next(),r.done)return n=!0,r;typeof r.value=="number"?t=r.value:t=NaN}else t=i[0];for(o=1;o<a;o++)if(u[o]){if(r=i[o].next(),r.done)return n=!0,r;typeof r.value=="number"?t/=r.value:t=NaN}else t/=i[o];return{value:t,done:!1}}function d(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function g(){var t,r;for(t=[],r=0;r<a;r++)u[r]?t.push(i[r][f]()):t.push(i[r]);return l.apply(null,t)}}m.exports=l});var w=p();module.exports=w;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
