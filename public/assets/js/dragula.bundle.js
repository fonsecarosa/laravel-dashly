(self.webpackChunkdashly=self.webpackChunkdashly||[]).push([[483],{2584:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},8514:(e,t,n)=>{"use strict";var r=n(6115);e.exports=function(e,t,n){e&&r((function(){e.apply(n||null,t||[])}))}},5229:(e,t,n)=>{"use strict";var r=n(2584),o=n(8514);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var u=(i[t]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!u.length)throw 1===i.length?i[0]:i;return u.forEach((function(r){n.async?o(r,i,c):r.apply(c,i),r._once&&e.off(t,r)})),e}},e}},1808:(e,t,n)=>{"use strict";var r=n(9638),o=n(4874),i=n.g.document,u=function(e,t,n,r){return e.addEventListener(t,n,r)},c=function(e,t,n,r){return e.removeEventListener(t,n,r)},a=[];function l(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<a.length;r++)if((o=a[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=a[r].wrapper;return a.splice(r,1),o}}n.g.addEventListener||(u=function(e,t,r){return e.attachEvent("on"+t,function(e,t,r){var o=l(e,t,r)||function(e,t,r){return function(t){var o=t||n.g.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}(e,0,r);return a.push({wrapper:o,element:e,type:t,fn:r}),o}(e,t,r))},c=function(e,t,n){var r=l(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:u,remove:c,fabricate:function(e,t,n){var u=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(u):e.fireEvent("on"+t,u)}}},4874:(e,t,n)=>{"use strict";var r=[],o="",i=/^on/;for(o in n.g)i.test(o)&&r.push(o.slice(2));e.exports=r},9638:(e,t,n)=>{var r=n.g.CustomEvent;e.exports=function(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},9425:e=>{"use strict";var t={},n="(?:^|\\s)",r="(?:\\s|$)";function o(e){var o=t[e];return o?o.lastIndex=0:t[e]=o=new RegExp(n+e+r,"g"),o}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}},7137:(e,t,n)=>{"use strict";var r=n(5229),o=n(1808),i=n(9425),u=document,c=u.documentElement;function a(e,t,r,i){n.g.navigator.pointerEnabled?o[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[r],i):n.g.navigator.msPointerEnabled?o[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[r],i):(o[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[r],i),o[t](e,r,i))}function l(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function f(e,t){return void 0!==n.g[t]?n.g[t]:c.clientHeight?c[e]:u.body[e]}function v(e,t,n){var r,o=(e=e||{}).className||"";return e.className+=" gu-hide",r=u.elementFromPoint(t,n),e.className=o,r}function s(){return!1}function d(){return!0}function m(e){return e.width||e.right-e.left}function p(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===u?null:e.parentNode}function h(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||b(e)}function b(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||b(g(e))))}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function E(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,b,S,C,w,x,T,N,O,X,Y;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var B,P=null,I=t||{};void 0===I.moves&&(I.moves=d),void 0===I.accepts&&(I.accepts=d),void 0===I.invalid&&(I.invalid=function(){return!1}),void 0===I.containers&&(I.containers=e||[]),void 0===I.isContainer&&(I.isContainer=s),void 0===I.copy&&(I.copy=!1),void 0===I.copySortSource&&(I.copySortSource=!1),void 0===I.revertOnSpill&&(I.revertOnSpill=!1),void 0===I.removeOnSpill&&(I.removeOnSpill=!1),void 0===I.direction&&(I.direction="vertical"),void 0===I.ignoreInputTextSelection&&(I.ignoreInputTextSelection=!0),void 0===I.mirrorContainer&&(I.mirrorContainer=u.body);var M=r({containers:I.containers,start:function(e){var t=K(e);t&&U(t)},end:_,cancel:q,remove:$,destroy:function(){D(!0),H({})},canMove:function(e){return!!K(e)},dragging:!1});return!0===I.removeOnSpill&&M.on("over",(function(e){i.rm(e,"gu-hide")})).on("out",(function(e){M.dragging&&i.add(e,"gu-hide")})),D(),M;function k(e){return-1!==M.containers.indexOf(e)||I.isContainer(e)}function D(e){var t=e?"remove":"add";a(c,t,"mousedown",F),a(c,t,"mouseup",H)}function R(e){a(c,e?"remove":"add","mousemove",j)}function A(e){var t=e?"remove":"add";o[t](c,"selectstart",L),o[t](c,"click",L)}function L(e){B&&e.preventDefault()}function F(e){if(x=e.clientX,T=e.clientY,!(1!==l(e)||e.metaKey||e.ctrlKey)){var t=e.target,n=K(t);n&&(B=n,R(),"mousedown"===e.type&&(h(t)?t.focus():e.preventDefault()))}}function j(e){if(B)if(0!==l(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-x)<=(I.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-T)<=(I.slideFactorY||0))){if(I.ignoreInputTextSelection){var t=E("clientX",e)||0,r=E("clientY",e)||0;if(h(u.elementFromPoint(t,r)))return}var o=B;R(!0),A(),_(),U(o);var v,s={left:(v=S.getBoundingClientRect()).left+f("scrollLeft","pageXOffset"),top:v.top+f("scrollTop","pageYOffset")};C=E("pageX",e)-s.left,w=E("pageY",e)-s.top,i.add(X||S,"gu-transit"),function(){if(n)return;var e=S.getBoundingClientRect();(n=S.cloneNode(!0)).style.width=m(e)+"px",n.style.height=p(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),I.mirrorContainer.appendChild(n),a(c,"add","mousemove",W),i.add(I.mirrorContainer,"gu-unselectable"),M.emit("cloned",n,S,"mirror")}(),W(e)}}else H({})}function K(e){if(!(M.dragging&&n||k(e))){for(var t=e;g(e)&&!1===k(g(e));){if(I.invalid(e,t))return;if(!(e=g(e)))return}var r=g(e);if(r)if(!I.invalid(e,t))if(I.moves(e,r,t,y(e)))return{item:e,source:r}}}function U(e){var t,n;t=e.item,n=e.source,("boolean"==typeof I.copy?I.copy:I.copy(t,n))&&(X=e.item.cloneNode(!0),M.emit("cloned",X,e.item,"copy")),b=e.source,S=e.item,N=O=y(e.item),M.dragging=!0,M.emit("drag",S,b)}function _(){if(M.dragging){var e=X||S;V(e,g(e))}}function z(){B=!1,R(!0),A(!0)}function H(e){if(z(),M.dragging){var t=X||S,r=E("clientX",e)||0,o=E("clientY",e)||0,i=Q(v(n,r,o),r,o);i&&(X&&I.copySortSource||!X||i!==b)?V(t,i):I.removeOnSpill?$():q()}}function V(e,t){var n=g(e);X&&I.copySortSource&&t===b&&n.removeChild(S),J(t)?M.emit("cancel",e,b,b):M.emit("drop",e,t,b,O),G()}function $(){if(M.dragging){var e=X||S,t=g(e);t&&t.removeChild(e),M.emit(X?"cancel":"remove",e,t,b),G()}}function q(e){if(M.dragging){var t=arguments.length>0?e:I.revertOnSpill,n=X||S,r=g(n),o=J(r);!1===o&&t&&(X?r&&r.removeChild(X):b.insertBefore(n,N)),o||t?M.emit("cancel",n,b,b):M.emit("drop",n,r,b,O),G()}}function G(){var e=X||S;z(),n&&(i.rm(I.mirrorContainer,"gu-unselectable"),a(c,"remove","mousemove",W),g(n).removeChild(n),n=null),e&&i.rm(e,"gu-transit"),Y&&clearTimeout(Y),M.dragging=!1,P&&M.emit("out",e,P,b),M.emit("dragend",e),b=S=X=N=O=Y=P=null}function J(e,t){var r;return r=void 0!==t?t:n?O:y(X||S),e===b&&r===N}function Q(e,t,n){for(var r=e;r&&!o();)r=g(r);return r;function o(){if(!1===k(r))return!1;var o=Z(r,e),i=ee(r,o,t,n);return!!J(r,i)||I.accepts(S,r,b,i)}}function W(e){if(n){e.preventDefault();var t=E("clientX",e)||0,r=E("clientY",e)||0,o=t-C,i=r-w;n.style.left=o+"px",n.style.top=i+"px";var u=X||S,c=v(n,t,r),a=Q(c,t,r),l=null!==a&&a!==P;(l||null===a)&&(P&&m("out"),P=a,l&&m("over"));var f=g(u);if(a!==b||!X||I.copySortSource){var s,d=Z(a,c);if(null!==d)s=ee(a,d,t,r);else{if(!0!==I.revertOnSpill||X)return void(X&&f&&f.removeChild(u));s=N,a=b}(null===s&&l||s!==u&&s!==y(u))&&(O=s,a.insertBefore(u,s),M.emit("shadow",u,a,b))}else f&&f.removeChild(u)}function m(e){M.emit(e,u,P,b)}}function Z(e,t){for(var n=t;n!==e&&g(n)!==e;)n=g(n);return n===c?null:n}function ee(e,t,n,r){var o="horizontal"===I.direction,i=t!==e?function(){var e=t.getBoundingClientRect();if(o)return u(n>e.left+m(e)/2);return u(r>e.top+p(e)/2)}():function(){var t,i,u,c=e.children.length;for(t=0;t<c;t++){if(u=(i=e.children[t]).getBoundingClientRect(),o&&u.left+u.width/2>n)return i;if(!o&&u.top+u.height/2>r)return i}return null}();return i;function u(e){return e?y(t):t}}}},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t}}]);