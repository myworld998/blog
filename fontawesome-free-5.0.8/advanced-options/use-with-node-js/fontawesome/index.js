// build time:Mon Mar 19 2018 23:34:47 GMT+0800 (CST)
(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?t(exports):typeof define==="function"&&define.amd?define(["exports"],t):t(e.fontawesome={})})(this,function(e){"use strict";var t=function Wt(){};var n={};var r={};var a=null;var i={mark:t,measure:t};try{if(typeof window!=="undefined")n=window;if(typeof document!=="undefined")r=document;if(typeof MutationObserver!=="undefined")a=MutationObserver;if(typeof performance!=="undefined")i=performance}catch(o){}var f=n.navigator||{};var s=f.userAgent;var l=s===undefined?"":s;var u=n;var c=r;var d=a;var m=i;var v=!!u.document;var g=!!c.documentElement&&!!c.head&&typeof c.addEventListener==="function"&&typeof c.createElement==="function";var h=~l.indexOf("MSIE")||~l.indexOf("Trident/");var p="___FONT_AWESOME___";var b=16;var y="fa";var w="svg-inline--fa";var x="data-fa-i2svg";var k="data-fa-pseudo-element";var C="fontawesome-i2svg";var N=function(){try{return process.env.NODE_ENV==="production"}catch(e){return false}}();var z=[1,2,3,4,5,6,7,8,9,10];var M=z.concat([11,12,13,14,15,16,17,18,19,20]);var A=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"];var O=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(z.map(function(e){return e+"x"})).concat(M.map(function(e){return"w-"+e}));var E=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}};var L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var S=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else{return Array.from(e)}};var P=u.FontAwesomeConfig||{};var T=Object.keys(P);var I=j({familyPrefix:y,replacementClass:w,autoReplaceSvg:true,autoAddCss:true,autoA11y:true,searchPseudoElements:false,observeMutations:true,keepOriginalSource:true,measurePerformance:false,showMissingIcons:true},P);if(!I.autoReplaceSvg)I.observeMutations=false;var D=j({},I);u.FontAwesomeConfig=D;function B(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=t.asNewDefault,r=n===undefined?false:n;var a=Object.keys(D);var i=r?function(e){return~a.indexOf(e)&&!~T.indexOf(e)}:function(e){return~a.indexOf(e)};Object.keys(e).forEach(function(t){if(i(t))D[t]=e[t]})}function X(e){B({autoReplaceSvg:e,observeMutations:e})}var R=u||{};if(!R[p])R[p]={};if(!R[p].styles)R[p].styles={};if(!R[p].hooks)R[p].hooks={};if(!R[p].shims)R[p].shims=[];var _=R[p];var H=[];var F=function Yt(){c.removeEventListener("DOMContentLoaded",Yt);W=1;H.map(function(e){return e()})};var W=false;if(g){W=(c.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(c.readyState);if(!W)c.addEventListener("DOMContentLoaded",F)}var Y=function(e){if(!g)return;W?setTimeout(e,0):H.push(e)};var V=b;var U={size:16,x:0,y:0,rotate:0,flipX:false,flipY:false};function q(e){return~O.indexOf(e)}function K(e){try{e()}catch(t){if(!N){throw t}}}function G(e){if(!e||!g){return}var t=c.createElement("style");t.setAttribute("type","text/css");t.innerHTML=e;var n=c.head.childNodes;var r=null;for(var a=n.length-1;a>-1;a--){var i=n[a];var o=(i.tagName||"").toUpperCase();if(["STYLE","LINK"].indexOf(o)>-1){r=i}}c.head.insertBefore(t,r);return e}var J=0;function Q(){J++;return J}function Z(e){var t=[];for(var n=(e||[]).length>>>0;n--;){t[n]=e[n]}return t}function $(e){if(e.classList){return Z(e.classList)}else{return(e.getAttribute("class")||"").split(" ").filter(function(e){return e})}}function ee(e,t){var n=t.split("-");var r=n[0];var a=n.slice(1).join("-");if(r===e&&a!==""&&!q(a)){return a}else{return null}}function te(e){return(""+e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ne(e){return Object.keys(e||{}).reduce(function(t,n){return t+(n+'="'+te(e[n])+'" ')},"").trim()}function re(e){return Object.keys(e||{}).reduce(function(t,n){return t+(n+": "+e[n]+";")},"")}function ae(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function ie(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;var a={transform:"translate("+n/2+" 256)"};var i="translate("+t.x*32+", "+t.y*32+") ";var o="scale("+t.size/16*(t.flipX?-1:1)+", "+t.size/16*(t.flipY?-1:1)+") ";var f="rotate("+t.rotate+" 0 0)";var s={transform:i+" "+o+" "+f};var l={transform:"translate("+r/2*-1+" -256)"};return{outer:a,inner:s,path:l}}function oe(e){var t=e.transform,n=e.width,r=n===undefined?b:n,a=e.height,i=a===undefined?b:a,o=e.startCentered,f=o===undefined?false:o;var s="";if(f&&h){s+="translate("+(t.x/V-r/2)+"em, "+(t.y/V-i/2)+"em) "}else if(f){s+="translate(calc(-50% + "+t.x/V+"em), calc(-50% + "+t.y/V+"em)) "}else{s+="translate("+t.x/V+"em, "+t.y/V+"em) "}s+="scale("+t.size/V*(t.flipX?-1:1)+", "+t.size/V*(t.flipY?-1:1)+") ";s+="rotate("+t.rotate+"deg) ";return s}var fe={x:0,y:0,width:"100%",height:"100%"};var se=function(e){var t=e.children,n=e.attributes,r=e.main,a=e.mask,i=e.transform;var o=r.width,f=r.icon;var s=a.width,l=a.icon;var u=ie({transform:i,containerWidth:s,iconWidth:o});var c={tag:"rect",attributes:j({},fe,{fill:"white"})};var d={tag:"g",attributes:j({},u.inner),children:[{tag:"path",attributes:j({},f.attributes,u.path,{fill:"black"})}]};var m={tag:"g",attributes:j({},u.outer),children:[d]};var v="mask-"+Q();var g="clip-"+Q();var h={tag:"mask",attributes:j({},fe,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[c,m]};var p={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:[l]},h]};t.push(p,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#"+g+")",mask:"url(#"+v+")"},fe)});return{children:t,attributes:n}};var le=function(e){var t=e.children,n=e.attributes,r=e.main,a=e.transform,i=e.styles;var o=re(i);if(o.length>0){n["style"]=o}if(ae(a)){var f=ie({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:j({},f.outer),children:[{tag:"g",attributes:j({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j({},r.icon.attributes,f.path)}]}]})}else{t.push(r.icon)}return{children:t,attributes:n}};var ue=function(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ae(o)&&n.found&&!r.found){var f=n.width,s=n.height;var l={x:f/s/2,y:.5};a["style"]=re(j({},i,{"transform-origin":l.x+o.x/16+"em "+(l.y+o.y/16)+"em"}))}return[{tag:"svg",attributes:a,children:t}]};var ce=function(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol;var o=i===true?t+"-"+D.familyPrefix+"-"+n:i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j({},a,{id:o}),children:r}]}]};function de(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,f=e.symbol,s=e.title,l=e.extra,u=e.watchable,c=u===undefined?false:u;var d=r.found?r:n,m=d.width,v=d.height;var g="fa-w-"+Math.ceil(m/v*16);var h=[D.replacementClass,i?D.familyPrefix+"-"+i:"",g].concat(l.classes).join(" ");var p={children:[],attributes:j({},l.attributes,{"data-prefix":a,"data-icon":i,"class":h,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+m+" "+v})};if(c){p.attributes[x]=""}if(s)p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-"+Q()},children:[s]});var b=j({},p,{prefix:a,iconName:i,main:n,mask:r,transform:o,symbol:f,styles:l.styles});var y=r.found&&n.found?se(b):le(b),w=y.children,k=y.attributes;b.children=w;b.attributes=k;if(f){return ce(b)}else{return ue(b)}}function me(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,f=e.watchable,s=f===undefined?false:f;var l=j({},o.attributes,i?{title:i}:{},{"class":o.classes.join(" ")});if(s){l[x]=""}var u=j({},o.styles);if(ae(a)){u["transform"]=oe({transform:a,startCentered:true,width:n,height:r});u["-webkit-transform"]=u["transform"]}var c=re(u);if(c.length>0){l["style"]=c}var d=[];d.push({tag:"span",attributes:l,children:[t]});if(i){d.push({tag:"span",attributes:{"class":"sr-only"},children:[i]})}return d}var ve=function Vt(){};var ge=D.measurePerformance&&m&&m.mark&&m.measure?m:{mark:ve,measure:ve};var he='FA "5.0.8"';var pe=function Ut(e){ge.mark(he+" "+e+" begins");return function(){return be(e)}};var be=function qt(e){ge.mark(he+" "+e+" ends");ge.measure(he+" "+e,he+" "+e+" begins",he+" "+e+" ends")};var ye={begin:pe,end:be};"use strict";var we=function Kt(e,t){return function(n,r,a,i){return e.call(t,n,r,a,i)}};"use strict";var xe=function Gt(e,t,n,r){var a=Object.keys(e),i=a.length,o=r!==undefined?we(t,r):t,f,s,l;if(n===undefined){f=1;l=e[a[0]]}else{f=0;l=n}for(;f<i;f++){s=a[f];l=o(l,e[s],s,e)}return l};var ke=_.styles;var Ce=_.shims;var Ne={};var ze={};var Me={};var Ae=function Jt(){var e=function n(e){return xe(ke,function(t,n,r){t[r]=xe(n,e,{});return t},{})};Ne=e(function(e,t,n){e[t[3]]=n;return e});ze=e(function(e,t,n){var r=t[2];e[n]=n;r.forEach(function(t){e[t]=n});return e});var t="far"in ke;Me=xe(Ce,function(e,n){var r=n[0];var a=n[1];var i=n[2];if(a==="far"&&!t){a="fas"}e[r]={prefix:a,iconName:i};return e},{})};Ae();function Oe(e,t){return Ne[e][t]}function Ee(e,t){return ze[e][t]}function Le(e){return Me[e]||{prefix:null,iconName:null}}var je=_.styles;var Se=function Qt(){return{prefix:null,iconName:null,rest:[]}};function Pe(e){return e.reduce(function(e,t){var n=ee(D.familyPrefix,t);if(je[t]){e.prefix=t}else if(n){var r=e.prefix==="fa"?Le(n):{};e.iconName=r.iconName||n;e.prefix=r.prefix||e.prefix}else if(t!==D.replacementClass&&t.indexOf("fa-w-")!==0){e.rest.push(t)}return e},Se())}function Te(e,t,n){if(e&&e[t]&&e[t][n]){return{prefix:t,iconName:n,icon:e[t][n]}}}function Ie(e){var t=e.tag,n=e.attributes,r=n===undefined?{}:n,a=e.children,i=a===undefined?[]:a;if(typeof e==="string"){return te(e)}else{return"<"+t+" "+ne(r)+">"+i.map(Ie).join("")+"</"+t+">"}}var De=function Zt(){};function Be(e){var t=e.getAttribute?e.getAttribute(x):null;return typeof t==="string"}function Xe(){if(D.autoReplaceSvg===true){return Re.replace}var e=Re[D.autoReplaceSvg];return e||Re.replace}var Re={replace:function $t(e){var t=e[0];var n=e[1];var r=n.map(function(e){return Ie(e)}).join("\n");if(t.parentNode&&t.outerHTML){t.outerHTML=r+(D.keepOriginalSource&&t.tagName.toLowerCase()!=="svg"?"<!-- "+t.outerHTML+" -->":"")}else if(t.parentNode){var a=document.createElement("span");t.parentNode.replaceChild(a,t);a.outerHTML=r}},nest:function en(e){var t=e[0];var n=e[1];if(~$(t).indexOf(D.replacementClass)){return Re.replace(e)}var r=new RegExp(D.familyPrefix+"-.*");delete n[0].attributes.style;var a=n[0].attributes.class.split(" ").reduce(function(e,t){if(t===D.replacementClass||t.match(r)){e.toSvg.push(t)}else{e.toNode.push(t)}return e},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" ");var i=n.map(function(e){return Ie(e)}).join("\n");t.setAttribute("class",a.toNode.join(" "));t.setAttribute(x,"");t.innerHTML=i}};function _e(e,t){var n=typeof t==="function"?t:De;if(e.length===0){n()}else{var r=u.requestAnimationFrame||function(e){return e()};r(function(){var t=Xe();var r=ye.begin("mutate");e.map(t);r();n()})}}var He=false;function Fe(e){He=true;e();He=false}var We=null;function Ye(e){if(!d)return;var t=e.treeCallback,n=e.nodeCallback,r=e.pseudoElementsCallback;We=new d(function(e){if(He)return;Z(e).forEach(function(e){if(e.type==="childList"&&e.addedNodes.length>0&&!Be(e.addedNodes[0])){if(D.searchPseudoElements){r(e.target)}t(e.target)}if(e.type==="attributes"&&e.target.parentNode&&D.searchPseudoElements){r(e.target.parentNode)}if(e.type==="attributes"&&Be(e.target)&&~A.indexOf(e.attributeName)){if(e.attributeName==="class"){var a=Pe($(e.target)),i=a.prefix,o=a.iconName;if(i)e.target.setAttribute("data-prefix",i);if(o)e.target.setAttribute("data-icon",o)}else{n(e.target)}}})});if(!g)return;We.observe(c.getElementsByTagName("body")[0],{childList:true,attributes:true,characterData:true,subtree:true})}function Ve(){if(!We)return;We.disconnect()}var Ue=function(e){var t=e.getAttribute("style");var n=[];if(t){n=t.split(";").reduce(function(e,t){var n=t.split(":");var r=n[0];var a=n.slice(1);if(r&&a.length>0){e[r]=a.join(":").trim()}return e},{})}return n};function qe(e){var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n).toString(16);t+=("000"+r).slice(-4)}return t}var Ke=function(e){var t=e.getAttribute("data-prefix");var n=e.getAttribute("data-icon");var r=e.innerText!==undefined?e.innerText.trim():"";var a=Pe($(e));if(t&&n){a.prefix=t;a.iconName=n}if(a.prefix&&r.length>1){a.iconName=Ee(a.prefix,e.innerText)}else if(a.prefix&&r.length===1){a.iconName=Oe(a.prefix,qe(e.innerText))}return a};var Ge=function tn(e){var t={size:16,x:0,y:0,flipX:false,flipY:false,rotate:0};if(!e){return t}else{return e.toLowerCase().split(" ").reduce(function(e,t){var n=t.toLowerCase().split("-");var r=n[0];var a=n.slice(1).join("-");if(r&&a==="h"){e.flipX=true;return e}if(r&&a==="v"){e.flipY=true;return e}a=parseFloat(a);if(isNaN(a)){return e}switch(r){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a;break}return e},t)}};var Je=function(e){return Ge(e.getAttribute("data-fa-transform"))};var Qe=function(e){var t=e.getAttribute("data-fa-symbol");return t===null?false:t===""?true:t};var Ze=function(e){var t=Z(e.attributes).reduce(function(e,t){if(e.name!=="class"&&e.name!=="style"){e[t.name]=t.value}return e},{});var n=e.getAttribute("title");if(D.autoA11y){if(n){t["aria-labelledby"]=D.replacementClass+"-title-"+Q()}else{t["aria-hidden"]="true"}}return t};var $e=function(e){var t=e.getAttribute("data-fa-mask");if(!t){return Se()}else{return Pe(t.split(" ").map(function(e){return e.trim()}))}};function et(e){var t=Ke(e),n=t.iconName,r=t.prefix,a=t.rest;var i=Ue(e);var o=Je(e);var f=Qe(e);var s=Ze(e);var l=$e(e);return{iconName:n,title:e.getAttribute("title"),prefix:r,transform:o,symbol:f,mask:l,extra:{classes:a,styles:i,attributes:s}}}function tt(e){this.name="MissingIcon";this.message=e||"Icon unavailable";this.stack=(new Error).stack}tt.prototype=Object.create(Error.prototype);tt.prototype.constructor=tt;var nt={fill:"currentColor"};var rt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};var at={tag:"path",attributes:j({},nt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})};var it=j({},rt,{attributeName:"opacity"});var ot={tag:"circle",attributes:j({},nt,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:j({},rt,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j({},it,{values:"1;0;1;1;0;1;"})}]};var ft={tag:"path",attributes:j({},nt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:j({},it,{values:"1;0;0;0;0;1;"})}]};var st={tag:"path",attributes:j({},nt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j({},it,{values:"0;0;1;1;0;0;"})}]};var lt={tag:"g",children:[at,ot,ft,st]};var ut=_.styles;var ct="fa-layers-text";var dt=/Font Awesome 5 (Solid|Regular|Light|Brands)/;var mt={Solid:"fas",Regular:"far",Light:"fal",Brands:"fab"};function vt(e,t){var n={found:false,width:512,height:512,icon:lt};if(e&&t&&ut[t]&&ut[t][e]){var r=ut[t][e];var a=r[0];var i=r[1];var o=r.slice(4);n={found:true,width:a,height:i,icon:{tag:"path",attributes:{fill:"currentColor",d:o[0]}}}}else if(e&&t&&!D.showMissingIcons){throw new tt("Icon is missing for prefix "+t+" with icon name "+e)}return n}function gt(e,t){var n=t.iconName,r=t.title,a=t.prefix,i=t.transform,o=t.symbol,f=t.mask,s=t.extra;return[e,de({icons:{main:vt(n,a),mask:vt(f.iconName,f.prefix)},prefix:a,iconName:n,transform:i,symbol:o,mask:f,title:r,extra:s,watchable:true})]}function ht(e,t){var n=t.title,r=t.transform,a=t.extra;var i=null;var o=null;if(h){var f=parseInt(getComputedStyle(e).fontSize,10);var s=e.getBoundingClientRect();i=s.width/f;o=s.height/f}if(D.autoA11y&&!n){a.attributes["aria-hidden"]="true"}return[e,me({content:e.innerHTML,width:i,height:o,transform:r,title:n,extra:a,watchable:true})]}function pt(e){var t=et(e);if(~t.extra.classes.indexOf(ct)){return ht(e,t)}else{return gt(e,t)}}function bt(e){if(typeof e.remove==="function"){e.remove()}else if(e&&e.parentNode){e.parentNode.removeChild(e)}}function yt(e){if(!g)return;var t=ye.begin("searchPseudoElements");Fe(function(){Z(e.querySelectorAll("*")).forEach(function(e){[":before",":after"].forEach(function(t){var n=u.getComputedStyle(e,t);var r=n.getPropertyValue("font-family").match(dt);var a=Z(e.children);var i=a.filter(function(e){return e.getAttribute(k)===t})[0];if(i){if(i.nextSibling&&i.nextSibling.textContent.indexOf(k)>-1){bt(i.nextSibling)}bt(i);i=null}if(r&&!i){var o=n.getPropertyValue("content");var f=c.createElement("i");f.setAttribute("class",""+mt[r[1]]);f.setAttribute(k,t);f.innerText=o.length===3?o.substr(1,1):o;if(t===":before"){e.insertBefore(f,e.firstChild)}else{e.appendChild(f)}}})})});t()}function wt(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(!g)return;var n=c.documentElement.classList;var r=function u(e){return n.add(C+"-"+e)};var a=function d(e){return n.remove(C+"-"+e)};var i=Object.keys(ut);var o=["."+ct+":not(["+x+"])"].concat(i.map(function(e){return"."+e+":not(["+x+"])"})).join(", ");if(o.length===0){return}var f=Z(e.querySelectorAll(o));if(f.length>0){r("pending");a("complete")}else{return}var s=ye.begin("onTree");var l=f.reduce(function(e,t){try{var n=pt(t);if(n){e.push(n)}}catch(r){if(!N){if(r instanceof tt){console.error(r)}}}return e},[]);s();_e(l,function(){r("active");r("complete");a("pending");if(typeof t==="function")t()})}function xt(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var n=pt(e);if(n){_e([n],t)}}var kt='svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n';var Ct=function(){var e=y;var t=w;var n=D.familyPrefix;var r=D.replacementClass;var a=kt;if(n!==e||r!==t){var i=new RegExp("\\."+e+"\\-","g");var o=new RegExp("\\."+t,"g");a=a.replace(i,"."+n+"-").replace(o,"."+r)}return a};function Nt(e,t){var n=Object.keys(t).reduce(function(e,n){var r=t[n];var a=!!r.icon;if(a){e[r.iconName]=r.icon}else{e[n]=r}return e},{});if(typeof _.hooks.addPack==="function"){_.hooks.addPack(e,n)}else{_.styles[e]=j({},_.styles[e]||{},n)}if(e==="fas"){Nt("fa",t)}}var zt=function(){function e(){E(this,e);this.definitions={}}L(e,[{key:"add",value:function t(){var e=this;for(var t=arguments.length,n=Array(t),r=0;r<t;r++){n[r]=arguments[r]}var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(t){e.definitions[t]=j({},e.definitions[t]||{},a[t]);Nt(t,a[t])})}},{key:"reset",value:function n(){this.definitions={}}},{key:"_pullDefinitions",value:function r(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;Object.keys(n).map(function(t){var r=n[t],a=r.prefix,i=r.iconName,o=r.icon;if(!e[a])e[a]={};e[a][i]=o});return e}}]);return e}();function Mt(e){var t=e[0];var n=e[1];var r=e.slice(4);return{found:true,width:t,height:n,icon:{tag:"path",attributes:{fill:"currentColor",d:r[0]}}}}var At=false;function Ot(){if(!D.autoAddCss){return}if(!At){G(Ct())}At=true}function Et(e,t){Object.defineProperty(e,"abstract",{get:t});Object.defineProperty(e,"html",{get:function n(){return e.abstract.map(function(e){return Ie(e)})}});Object.defineProperty(e,"node",{get:function r(){if(!g)return;var t=c.createElement("div");t.innerHTML=e.html;return t.children}});return e}function Lt(e){var t=e.prefix,n=t===undefined?"fa":t,r=e.iconName;if(!r)return;return Te(St.definitions,n,r)||Te(_.styles,n,r)}function jt(e){return function(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var r=(t||{}).icon?t:Lt(t||{});var a=n.mask;if(a){a=(a||{}).icon?a:Lt(a||{})}return e(r,j({},n,{mask:a}))}}var St=new zt;var Pt=function nn(){X(false);Ve()};var Tt={i2svg:function rn(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(g){Ot();var t=e.node,n=t===undefined?c:t,r=e.callback,a=r===undefined?function(){}:r;if(D.searchPseudoElements){yt(n)}wt(n,a)}},css:Ct,insertCss:function an(){G(Ct())}};var It={transform:function on(e){return Ge(e)}};var Dt=jt(function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=t.transform,r=n===undefined?U:n,a=t.symbol,i=a===undefined?false:a,o=t.mask,f=o===undefined?null:o,s=t.title,l=s===undefined?null:s,u=t.classes,c=u===undefined?[]:u,d=t.attributes,m=d===undefined?{}:d,v=t.styles,g=v===undefined?{}:v;if(!e)return;var h=e.prefix,p=e.iconName,b=e.icon;return Et(j({type:"icon"},e),function(){Ot();if(D.autoA11y){if(l){m["aria-labelledby"]=D.replacementClass+"-title-"+Q()}else{m["aria-hidden"]="true"}}return de({icons:{main:Mt(b),mask:f?Mt(f.icon):{found:false,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:j({},U,r),symbol:i,title:l,extra:{attributes:m,styles:g,classes:c}})})});var Bt=function fn(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=t.transform,r=n===undefined?U:n,a=t.title,i=a===undefined?null:a,o=t.classes,f=o===undefined?[]:o,s=t.attributes,l=s===undefined?{}:s,u=t.styles,c=u===undefined?{}:u;return Et({type:"text",content:e},function(){Ot();return me({content:e,transform:j({},U,r),title:i,extra:{attributes:l,styles:c,classes:[D.familyPrefix+"-layers-text"].concat(S(f))}})})};var Xt=function sn(e){return Et({type:"layer"},function(){Ot();var t=[];e(function(e){Array.isArray(e)?e.map(function(e){t=t.concat(e.abstract)}):t=t.concat(e.abstract)});return[{tag:"span",attributes:{"class":D.familyPrefix+"-layers"},children:t}]})};var Rt={noAuto:Pt,dom:Tt,library:St,parse:It,findIconDefinition:Lt,icon:Dt,text:Bt,layer:Xt};var _t=function ln(){if(g&&D.autoReplaceSvg)Rt.dom.i2svg({node:c})};function Ht(){if(v){if(!u.FontAwesome){u.FontAwesome=Rt}Y(function(){if(Object.keys(_.styles).length>0){_t()}if(D.observeMutations&&typeof MutationObserver==="function"){Ye({treeCallback:wt,nodeCallback:xt,pseudoElementsCallback:yt})}})}_.hooks=j({},_.hooks,{addPack:function e(t,n){_.styles[t]=j({},_.styles[t]||{},n);Ae();_t()},addShims:function t(e){var t;(t=_.shims).push.apply(t,S(e));Ae();_t()}})}Object.defineProperty(Rt,"config",{get:function un(){return D},set:function cn(e){B(e)}});if(g)K(Ht);var Ft=Rt.config;e.config=Ft;e["default"]=Rt;e.icon=Dt;e.noAuto=Pt;e.layer=Xt;e.text=Bt;e.library=St;e.dom=Tt;e.parse=It;e.findIconDefinition=Lt;
Object.defineProperty(e,"__esModule",{value:true})});
//rebuild by neat 