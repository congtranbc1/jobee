/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function(a,b){function ci(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cf(a){if(!b_[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";b_[a]=c}return b_[a]}function ce(a,b){var c={};d.each(cd.concat.apply([],cd.slice(0,b)),function(){c[this]=a});return c}function b$(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bZ(){try{return new a.XMLHttpRequest}catch(b){}}function bY(){d(a).unload(function(){for(var a in bW)bW[a](0,1)})}function bS(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bR(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bQ(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bs.test(a)?e(a,f):bQ(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bQ(a+"["+f+"]",b[f],c,e)}function bP(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bJ,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bP(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bP(a,c,d,e,"*",g));return l}function bO(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bD),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bq(a,b,c){var e=b==="width"?bk:bl,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function bc(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function bb(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function ba(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function _(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function $(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Q(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(L.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function P(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function H(a,b){return(a&&a!=="*"?a+".":"")+b.replace(t,"`").replace(u,"&")}function G(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p=[],q=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(r,"")===a.type?q.push(g.selector):t.splice(i--,1);f=d(a.target).closest(q,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){f=p[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function E(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function y(){return!0}function x(){return!1}function i(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function h(a,c,e){if(e===b&&a.nodeType===1){e=a.getAttribute("data-"+c);if(typeof e==="string"){try{e=e==="true"?!0:e==="false"?!1:e==="null"?null:d.isNaN(e)?g.test(e)?d.parseJSON(e):e:parseFloat(e)}catch(f){}d.data(a,c,e)}else e=b}return e}var c=a.document,d=function(){function G(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(G,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x,y,z=Object.prototype.toString,A=Object.prototype.hasOwnProperty,B=Array.prototype.push,C=Array.prototype.slice,D=String.prototype.trim,E=Array.prototype.indexOf,F={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length},toArray:function(){return C.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?B.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),x.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(C.apply(this,arguments),"slice",C.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;x.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=d._Deferred();if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",y,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",y),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&G()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):F[z.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!A.call(a,"constructor")&&!A.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||A.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:D?function(a){return a==null?"":D.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?B.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){F["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),E&&(d.inArray=function(a,b){return E.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?y=function(){c.removeEventListener("DOMContentLoaded",y,!1),d.ready()}:c.attachEvent&&(y=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",y),d.ready())});return d}(),e="then done fail isResolved isRejected promise".split(" "),f=[].slice;d.extend({_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),f;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(f)return f;f=a={}}var c=e.length;while(c--)a[e[c]]=b[e[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?f.call(arguments,0):c,--g||h.resolveWith(h,f.call(b,0))}}var b=arguments,c=0,e=b.length,g=e,h=e<=1&&a&&d.isFunction(a.promise)?a:d.Deferred();if(e>1){for(;c<e;c++)b[c]&&d.isFunction(b[c].promise)?b[c].promise().then(i(c),h.reject):--g;g||h.resolveWith(h,b)}else h!==a&&h.resolveWith(h,e?[a]:[]);return h.promise()}}),function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0,reliableMarginRight:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e)}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(a.style.width="1px",a.style.marginRight="0",d.support.reliableMarginRight=(parseInt(c.defaultView.getComputedStyle(a,null).marginRight,10)||0)===0),b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}}();var g=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!i(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,j=g?b[d.expando]:d.expando;if(!h[j])return;if(c){var k=e?h[j][f]:h[j];if(k){delete k[c];if(!i(k))return}}if(e){delete h[j][f];if(!i(h[j]))return}var l=h[j][f];d.support.deleteExpando||h!=a?delete h[j]:h[j]=null,l?(h[j]={},g||(h[j].toJSON=d.noop),h[j][f]=l):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var f=this[0].attributes,g;for(var i=0,j=f.length;i<j;i++)g=f[i].name,g.indexOf("data-")===0&&(g=g.substr(5),h(this[0],g,e[g]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=h(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var j=/[\n\t\r]/g,k=/\s+/,l=/\r/g,m=/^(?:href|src|style)$/,n=/^(?:button|input)$/i,o=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,q=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(k);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(k);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(j," ");for(var i=0,l=c.length;i<l;i++)h=h.replace(" "+c[i]+" "," ");g.className=d.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),i=b,j=a.split(k);while(f=j[g++])i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(j," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var j=i?f:0,k=i?f+1:h.length;j<k;j++){var m=h[j];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(q.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(l,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&q.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=m.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&n.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var k=a.getAttributeNode("tabIndex");return k&&k.specified?k.value:o.test(a.nodeName)||p.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var l=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return l===null?b:l}h&&(a[c]=e);return a[c]}});var r=/\.(.*)$/,s=/^(?:textarea|input|select)$/i,t=/\./g,u=/ /g,v=/[^\w\s.|`]/g,w=function(a){return a.replace(v,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=x;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(a){return typeof d!=="undefined"&&d.event.triggered!==a.type?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=x);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),w).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(r,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=a.type,l[m]())}catch(p){}k&&(l["on"+m]=k),d.event.triggered=b}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,H(a.origType,a.selector),d.extend({},a,{handler:G,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,H(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?y:x):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=y;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=y;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=y,this.stopPropagation()},isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x};var z=function(a){var b=a.relatedTarget;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},A=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?A:z,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?A:z)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&E("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&E("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var B,C=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},D=function D(a){var c=a.target,e,f;if(s.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=C(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:D,beforedeactivate:D,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&D.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&D.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",C(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in B)d.event.add(this,c+".specialChange",B[c]);return s.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return s.test(this.nodeName)}},B=d.event.special.change.filters,B.focus=B.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function f(a){var c=d.event.fix(a);c.type=b,c.originalEvent={},d.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var e=0;d.event.special[b]={setup:function(){e++===0&&c.addEventListener(a,f,!0)},teardown:function(){--e===0&&c.removeEventListener(a,f,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var F={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=r.exec(h),k="",j&&(k=j[0],h=h.replace(r,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(F[h]+k),h=h+k):h=(F[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)d.event.add(n[p],"live."+H(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+H(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"text"===c&&(b===c||b===null)},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var I=/Until$/,J=/^(?:parents|prevUntil|prevAll)/,K=/,/,L=/^.[^:#\[\.,]*$/,M=Array.prototype.slice,N=d.expr.match.POS,O={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(Q(this,a,!1),"not",a)},filter:function(a){return this.pushStack(Q(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=N.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(P(c[0])||P(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=M.call(arguments);I.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!O[a]?d.unique(f):f,(this.length>1||K.test(e))&&J.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var R=/ jQuery\d+="(?:\d+|null)"/g,S=/^\s+/,T=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,U=/<([\w:]+)/,V=/<tbody/i,W=/<|&#?\w+;/,X=/<(?:script|object|embed|option|style)/i,Y=/checked\s*(?:[^=]|=\s*.checked.)/i,Z={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td,d.support.htmlSerialize||(Z._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(R,""):null;if(typeof a!=="string"||X.test(a)||!d.support.leadingWhitespace&&S.test(a)||Z[(U.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(T,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&Y.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?$(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,bc)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!X.test(a[0])&&(d.support.checkClone||!Y.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){ba(a,e),f=bb(a),g=bb(e);for(h=0;f[h];++h)ba(f[h],g[h])}if(b){_(a,e);if(c){f=bb(a),g=bb(e);for(h=0;f[h];++h)_(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||W.test(i)){if(typeof i==="string"){i=i.replace(T,"<$1></$2>");var j=(U.exec(i)||["",""])[1].toLowerCase(),k=Z[j]||Z._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=V.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&S.test(i)&&m.insertBefore(b.createTextNode(S.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bd=/alpha\([^)]*\)/i,be=/opacity=([^)]*)/,bf=/-([a-z])/ig,bg=/([A-Z]|^ms)/g,bh=/^-?\d+(?:px)?$/i,bi=/^-?\d/,bj={position:"absolute",visibility:"hidden",display:"block"},bk=["Left","Right"],bl=["Top","Bottom"],bm,bn,bo,bp=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bm(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bm)return bm(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bf,bp)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bq(a,b,e):d.swap(a,bj,function(){f=bq(a,b,e)});if(f<=0){f=bm(a,b,b),f==="0px"&&bo&&(f=bo(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bh.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return be.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bd.test(f)?f.replace(bd,e):c.filter+" "+e}}),d(function(){d.support.reliableMarginRight||(d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){b?c=bm(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bn=function(a,c,e){var f,g,h;e=e.replace(bg,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bo=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bh.test(d)&&bi.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bm=bn||bo,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var br=/%20/g,bs=/\[\]$/,bt=/\r?\n/g,bu=/#.*$/,bv=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bw=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bx=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,by=/^(?:GET|HEAD)$/,bz=/^\/\//,bA=/\?/,bB=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bC=/^(?:select|textarea)/i,bD=/\s+/,bE=/([?&])_=[^&]*/,bF=/(^|\-)([a-z])/g,bG=function(a,b,c){return b+c.toUpperCase()},bH=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bI=d.fn.load,bJ={},bK={},bL,bM;try{bL=c.location.href}catch(bN){bL=c.createElement("a"),bL.href="",bL=bL.href}bM=bH.exec(bL.toLowerCase())||[],d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bI)return bI.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bB,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bC.test(this.nodeName)||bw.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bt,"\r\n")}}):{name:b.name,value:c.replace(bt,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bL,isLocal:bx.test(bM[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bO(bJ),ajaxTransport:bO(bK),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bR(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bS(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bF,bG)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bv.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bu,"").replace(bz,bM[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bD),e.crossDomain==null&&(q=bH.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bM[1]||q[2]!=bM[2]||(q[3]||(q[1]==="http:"?80:443))!=(bM[3]||(bM[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bP(bJ,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!by.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bA.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bE,"$1_="+w);e.url=x+(x===e.url?(bA.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bP(bK,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bQ(g,a[g],c,f);return e.join("&").replace(br,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bT=d.now(),bU=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bT++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bU.test(b.url)||f&&bU.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bU,l),b.url===j&&(f&&(k=k.replace(bU,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bV=d.now(),bW,bX;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bZ()||b$()}:bZ,bX=d.ajaxSettings.xhr(),d.support.ajax=!!bX,d.support.cors=bX&&"withCredentials"in bX,bX=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),!a.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bW[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bW||(bW={},bY()),h=bV++,g.onreadystatechange=bW[h]=c):c()},abort:function(){c&&c(0,1)}}}});var b_={},ca=/^(?:toggle|show|hide)$/,cb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cc,cd=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(ce("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cf(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ce("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(ce("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cf(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(ca.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=cb.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:ce("show",1),slideUp:ce("hide",1),slideToggle:ce("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!cc&&(cc=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(cc),cc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var cg=/^t(?:able|d|h)$/i,ch=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=ci(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!cg.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=(e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=ch.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!ch.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=ci(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=ci(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);

/**
 * Unobtrusive scripting adapter for jQuery
 *
 * Requires jQuery 1.4.4 or later.
 * https://github.com/rails/jquery-ujs

 * Uploading file using rails.js
 * =============================
 *
 * By default, browsers do not allow files to be uploaded via AJAX. As a result, if there are any non-blank file fields
 * in the remote form, this adapter aborts the AJAX submission and allows the form to submit through standard means.
 *
 * The `ajax:aborted:file` event allows you to bind your own handler to process the form submission however you wish.
 *
 * Ex:
 *     $('form').live('ajax:aborted:file', function(event, elements){
 *       // Implement own remote file-transfer handler here for non-blank file inputs passed in `elements`.
 *       // Returning false in this handler tells rails.js to disallow standard form submission
 *       return false;
 *     });
 *
 * The `ajax:aborted:file` event is fired when a file-type input is detected with a non-blank value.
 *
 * Third-party tools can use this hook to detect when an AJAX file upload is attempted, and then use
 * techniques like the iframe method to upload the file instead.
 *
 * Required fields in rails.js
 * ===========================
 *
 * If any blank required inputs (required="required") are detected in the remote form, the whole form submission
 * is canceled. Note that this is unlike file inputs, which still allow standard (non-AJAX) form submission.
 *
 * The `ajax:aborted:required` event allows you to bind your own handler to inform the user of blank required inputs.
 *
 * !! Note that Opera does not fire the form's submit event if there are blank required inputs, so this event may never
 *    get fired in Opera. This event is what causes other browsers to exhibit the same submit-aborting behavior.
 *
 * Ex:
 *     $('form').live('ajax:aborted:required', function(event, elements){
 *       // Returning false in this handler tells rails.js to submit the form anyway.
 *       // The blank required inputs are passed to this function in `elements`.
 *       return ! confirm("Would you like to submit the form with missing info?");
 *     });
 */

(function($) {
  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input:file',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data,
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

      if (rails.fire(element, 'ajax:before')) {

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else {
          method = element.data('method');
          url = element.attr('href');
          data = element.data('params') || null; 
       }

        rails.ajax({
          url: url, type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            // Thuc add
                        // show waiting
                        $('#loading').show();
            if (settings.dataType == undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            // Thuc add
              // hide waiting
              $('#loading').hide();
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          }
        });
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = link.attr('href'),
        method = link.data('method'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Adds disabled=disabled attribute
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.attr('disabled', 'disabled');
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Removes disabled attribute
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.removeAttr('disabled');
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input,
        selector = specifiedSelector || 'input,textarea';
      form.find(selector).each(function() {
        input = $(this);
        // Collect non-blank inputs if nonBlank option is true, otherwise, collect blank inputs
        if (nonBlank ? input.val() : !input.val()) {
          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    // find all the submit events directly bound to the form and
    // manually invoke them. If anyone returns false then stop the loop
    callFormSubmitBindings: function(form) {
      var events = form.data('events'), continuePropagation = true;
      if (events !== undefined && events['submit'] !== undefined) {
        $.each(events['submit'], function(i, obj){
          if (typeof obj.handler === 'function') return continuePropagation = obj.handler(obj.data);
        });
      }
      return continuePropagation;
    }
  };

  // ajaxPrefilter is a jQuery 1.5 feature
  if ('ajaxPrefilter' in $) {
    $.ajaxPrefilter(function(options, originalOptions, xhr){ rails.CSRFProtection(xhr); });
  } else {
    $(document).ajaxSend(function(e, xhr){ rails.CSRFProtection(xhr); });
  }

  $(rails.linkClickSelector).live('click.rails', function(e) {
    var link = $(this);
    if (!rails.allowAction(link)) return rails.stopEverything(e);
    // Thuc add
        if (link.attr('href') == "") return false;

    if (link.data('remote') !== undefined) {
      rails.handleRemote(link);
      return false;
    } else if (link.data('method')) {
      rails.handleMethod(link);
      return false;
    }
  });

  $(rails.formSubmitSelector).live('submit.rails', function(e) {
    var form = $(this),
      remote = form.data('remote') !== undefined,
      blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
      nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

    if (!rails.allowAction(form)) return rails.stopEverything(e);

    // skip other logic when required values are missing or file upload is present
    if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
      return rails.stopEverything(e);
    }

    if (remote) {
      if (nonBlankFileInputs) {
        return rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
      }

      // If browser does not support submit bubbling, then this live-binding will be called before direct
      // bindings. Therefore, we should directly call any direct bindings before remotely submitting form.
      if (!$.support.submitBubbles && rails.callFormSubmitBindings(form) === false) return rails.stopEverything(e);

      rails.handleRemote(form);
      return false;
    } else {
      // slight timeout so that the submit button gets properly serialized
      setTimeout(function(){ rails.disableFormElements(form); }, 13);
    }
  });

  $(rails.formInputClickSelector).live('click.rails', function(event) {
    var button = $(this);

    if (!rails.allowAction(button)) return rails.stopEverything(event);

    // register the pressed submit button
    var name = button.attr('name'),
      data = name ? {name:name, value:button.val()} : null;

    button.closest('form').data('ujs:submit-button', data);
  });

  $(rails.formSubmitSelector).live('ajax:beforeSend.rails', function(event) {
    if (this == event.target) rails.disableFormElements($(this));
  });

  $(rails.formSubmitSelector).live('ajax:complete.rails', function(event) {
    if (this == event.target) rails.enableFormElements($(this));
  });

})( jQuery );

/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});


/*
  html2canvas 0.5.0-alpha1 <http://html2canvas.hertzen.com>
  Copyright (c) 2015 Niklas von Hertzen

  Released under MIT License
*/

(function(window, document, exports, global, define, undefined){

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.0.1
 */

(function(){function r(a,b){n[l]=a;n[l+1]=b;l+=2;2===l&&A()}function s(a){return"function"===typeof a}function F(){return function(){process.nextTick(t)}}function G(){var a=0,b=new B(t),c=document.createTextNode("");b.observe(c,{characterData:!0});return function(){c.data=a=++a%2}}function H(){var a=new MessageChannel;a.port1.onmessage=t;return function(){a.port2.postMessage(0)}}function I(){return function(){setTimeout(t,1)}}function t(){for(var a=0;a<l;a+=2)(0,n[a])(n[a+1]),n[a]=void 0,n[a+1]=void 0;
l=0}function p(){}function J(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function K(a,b,c){r(function(a){var e=!1,f=J(c,b,function(c){e||(e=!0,b!==c?q(a,c):m(a,c))},function(b){e||(e=!0,g(a,b))});!e&&f&&(e=!0,g(a,f))},a)}function L(a,b){1===b.a?m(a,b.b):2===a.a?g(a,b.b):u(b,void 0,function(b){q(a,b)},function(b){g(a,b)})}function q(a,b){if(a===b)g(a,new TypeError("You cannot resolve a promise with itself"));else if("function"===typeof b||"object"===typeof b&&null!==b)if(b.constructor===a.constructor)L(a,
b);else{var c;try{c=b.then}catch(d){v.error=d,c=v}c===v?g(a,v.error):void 0===c?m(a,b):s(c)?K(a,b,c):m(a,b)}else m(a,b)}function M(a){a.f&&a.f(a.b);x(a)}function m(a,b){void 0===a.a&&(a.b=b,a.a=1,0!==a.e.length&&r(x,a))}function g(a,b){void 0===a.a&&(a.a=2,a.b=b,r(M,a))}function u(a,b,c,d){var e=a.e,f=e.length;a.f=null;e[f]=b;e[f+1]=c;e[f+2]=d;0===f&&a.a&&r(x,a)}function x(a){var b=a.e,c=a.a;if(0!==b.length){for(var d,e,f=a.b,g=0;g<b.length;g+=3)d=b[g],e=b[g+c],d?C(c,d,e,f):e(f);a.e.length=0}}function D(){this.error=
null}function C(a,b,c,d){var e=s(c),f,k,h,l;if(e){try{f=c(d)}catch(n){y.error=n,f=y}f===y?(l=!0,k=f.error,f=null):h=!0;if(b===f){g(b,new TypeError("A promises callback cannot return that same promise."));return}}else f=d,h=!0;void 0===b.a&&(e&&h?q(b,f):l?g(b,k):1===a?m(b,f):2===a&&g(b,f))}function N(a,b){try{b(function(b){q(a,b)},function(b){g(a,b)})}catch(c){g(a,c)}}function k(a,b,c,d){this.n=a;this.c=new a(p,d);this.i=c;this.o(b)?(this.m=b,this.d=this.length=b.length,this.l(),0===this.length?m(this.c,
this.b):(this.length=this.length||0,this.k(),0===this.d&&m(this.c,this.b))):g(this.c,this.p())}function h(a){O++;this.b=this.a=void 0;this.e=[];if(p!==a){if(!s(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof h))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");N(this,a)}}var E=Array.isArray?Array.isArray:function(a){return"[object Array]"===
Object.prototype.toString.call(a)},l=0,w="undefined"!==typeof window?window:{},B=w.MutationObserver||w.WebKitMutationObserver,w="undefined"!==typeof Uint8ClampedArray&&"undefined"!==typeof importScripts&&"undefined"!==typeof MessageChannel,n=Array(1E3),A;A="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)?F():B?G():w?H():I();var v=new D,y=new D;k.prototype.o=function(a){return E(a)};k.prototype.p=function(){return Error("Array Methods must be provided an Array")};k.prototype.l=
function(){this.b=Array(this.length)};k.prototype.k=function(){for(var a=this.length,b=this.c,c=this.m,d=0;void 0===b.a&&d<a;d++)this.j(c[d],d)};k.prototype.j=function(a,b){var c=this.n;"object"===typeof a&&null!==a?a.constructor===c&&void 0!==a.a?(a.f=null,this.g(a.a,b,a.b)):this.q(c.resolve(a),b):(this.d--,this.b[b]=this.h(a))};k.prototype.g=function(a,b,c){var d=this.c;void 0===d.a&&(this.d--,this.i&&2===a?g(d,c):this.b[b]=this.h(c));0===this.d&&m(d,this.b)};k.prototype.h=function(a){return a};
k.prototype.q=function(a,b){var c=this;u(a,void 0,function(a){c.g(1,b,a)},function(a){c.g(2,b,a)})};var O=0;h.all=function(a,b){return(new k(this,a,!0,b)).c};h.race=function(a,b){function c(a){q(e,a)}function d(a){g(e,a)}var e=new this(p,b);if(!E(a))return (g(e,new TypeError("You must pass an array to race.")), e);for(var f=a.length,h=0;void 0===e.a&&h<f;h++)u(this.resolve(a[h]),void 0,c,d);return e};h.resolve=function(a,b){if(a&&"object"===typeof a&&a.constructor===this)return a;var c=new this(p,b);
q(c,a);return c};h.reject=function(a,b){var c=new this(p,b);g(c,a);return c};h.prototype={constructor:h,then:function(a,b){var c=this.a;if(1===c&&!a||2===c&&!b)return this;var d=new this.constructor(p),e=this.b;if(c){var f=arguments[c-1];r(function(){C(c,d,f,e)})}else u(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}};var z={Promise:h,polyfill:function(){var a;a="undefined"!==typeof global?global:"undefined"!==typeof window&&window.document?window:self;"Promise"in a&&"resolve"in
a.Promise&&"reject"in a.Promise&&"all"in a.Promise&&"race"in a.Promise&&function(){var b;new a.Promise(function(a){b=a});return s(b)}()||(a.Promise=h)}};"function"===typeof define&&define.amd?define(function(){return z}):"undefined"!==typeof module&&module.exports?module.exports=z:"undefined"!==typeof this&&(this.ES6Promise=z);}).call(window);
if (window) {
    window.ES6Promise.polyfill();
}


if (typeof(document) === "undefined" || typeof(Object.create) !== "function" || typeof(document.createElement("canvas").getContext) !== "function") {
    (window || module.exports).html2canvas = function() {
        return Promise.reject("No canvas support");
    };
    return;
}

/*! https://mths.be/punycode v1.3.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		var labels = string.split(regexSeparators);
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

var html2canvasNodeAttribute = "data-html2canvas-node";
var html2canvasCanvasCloneAttribute = "data-html2canvas-canvas-clone";
var html2canvasCanvasCloneIndex = 0;
var html2canvasCloneIndex = 0;

window.html2canvas = function(nodeList, options) {
    var index = html2canvasCloneIndex++;
    options = options || {};
    if (options.logging) {
        window.html2canvas.logging = true;
        window.html2canvas.start = Date.now();
    }

    options.async = typeof(options.async) === "undefined" ? true : options.async;
    options.allowTaint = typeof(options.allowTaint) === "undefined" ? false : options.allowTaint;
    options.removeContainer = typeof(options.removeContainer) === "undefined" ? true : options.removeContainer;
    options.javascriptEnabled = typeof(options.javascriptEnabled) === "undefined" ? false : options.javascriptEnabled;
    options.imageTimeout = typeof(options.imageTimeout) === "undefined" ? 10000 : options.imageTimeout;
    options.renderer = typeof(options.renderer) === "function" ? options.renderer : CanvasRenderer;
    options.strict = !!options.strict;

    if (typeof(nodeList) === "string") {
        if (typeof(options.proxy) !== "string") {
            return Promise.reject("Proxy must be used when rendering url");
        }
        var width = options.width != null ? options.width : window.innerWidth;
        var height = options.height != null ? options.height : window.innerHeight;
        return loadUrlDocument(absoluteUrl(nodeList), options.proxy, document, width, height, options).then(function(container) {
            return renderWindow(container.contentWindow.document.documentElement, container, options, width, height);
        });
    }

    var node = ((nodeList === undefined) ? [document.documentElement] : ((nodeList.length) ? nodeList : [nodeList]))[0];
    node.setAttribute(html2canvasNodeAttribute + index, index);
    return renderDocument(node.ownerDocument, options, node.ownerDocument.defaultView.innerWidth, node.ownerDocument.defaultView.innerHeight, index).then(function(canvas) {
        if (typeof(options.onrendered) === "function") {
            log("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas");
            options.onrendered(canvas);
        }
        return canvas;
    });
};

window.html2canvas.punycode = this.punycode;
window.html2canvas.proxy = {};

function renderDocument(document, options, windowWidth, windowHeight, html2canvasIndex) {
    return createWindowClone(document, document, windowWidth, windowHeight, options, document.defaultView.pageXOffset, document.defaultView.pageYOffset).then(function(container) {
        log("Document cloned");
        var attributeName = html2canvasNodeAttribute + html2canvasIndex;
        var selector = "[" + attributeName + "='" + html2canvasIndex + "']";
        document.querySelector(selector).removeAttribute(attributeName);
        var clonedWindow = container.contentWindow;
        var node = clonedWindow.document.querySelector(selector);
        var oncloneHandler = (typeof(options.onclone) === "function") ? Promise.resolve(options.onclone(clonedWindow.document)) : Promise.resolve(true);
        return oncloneHandler.then(function() {
            return renderWindow(node, container, options, windowWidth, windowHeight);
        });
    });
}

function renderWindow(node, container, options, windowWidth, windowHeight) {
    var clonedWindow = container.contentWindow;
    var support = new Support(clonedWindow.document);
    var imageLoader = new ImageLoader(options, support);
    var bounds = getBounds(node);
    var width = options.type === "view" ? windowWidth : documentWidth(clonedWindow.document);
    var height = options.type === "view" ? windowHeight : documentHeight(clonedWindow.document);
    var renderer = new options.renderer(width, height, imageLoader, options, document);
    var parser = new NodeParser(node, renderer, support, imageLoader, options);
    return parser.ready.then(function() {
        log("Finished rendering");
        var canvas;

        if (options.type === "view") {
            canvas = crop(renderer.canvas, {width: renderer.canvas.width, height: renderer.canvas.height, top: 0, left: 0, x: 0, y: 0});
        } else if (node === clonedWindow.document.body || node === clonedWindow.document.documentElement || options.canvas != null) {
            canvas = renderer.canvas;
        } else {
            canvas = crop(renderer.canvas, {width:  options.width != null ? options.width : bounds.width, height: options.height != null ? options.height : bounds.height, top: bounds.top, left: bounds.left, x: clonedWindow.pageXOffset, y: clonedWindow.pageYOffset});
        }

        cleanupContainer(container, options);
        return canvas;
    });
}

function cleanupContainer(container, options) {
    if (options.removeContainer) {
        container.parentNode.removeChild(container);
        log("Cleaned up container");
    }
}

function crop(canvas, bounds) {
    var croppedCanvas = document.createElement("canvas");
    var x1 = Math.min(canvas.width - 1, Math.max(0, bounds.left));
    var x2 = Math.min(canvas.width, Math.max(1, bounds.left + bounds.width));
    var y1 = Math.min(canvas.height - 1, Math.max(0, bounds.top));
    var y2 = Math.min(canvas.height, Math.max(1, bounds.top + bounds.height));
    croppedCanvas.width = bounds.width;
    croppedCanvas.height =  bounds.height;
    log("Cropping canvas at:", "left:", bounds.left, "top:", bounds.top, "width:", (x2-x1), "height:", (y2-y1));
    log("Resulting crop with width", bounds.width, "and height", bounds.height, " with x", x1, "and y", y1);
    croppedCanvas.getContext("2d").drawImage(canvas, x1, y1, x2-x1, y2-y1, bounds.x, bounds.y, x2-x1, y2-y1);
    return croppedCanvas;
}

function documentWidth (doc) {
    return Math.max(
        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
    );
}

function documentHeight (doc) {
    return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    );
}

function smallImage() {
    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
}

function isIE9() {
    return document.documentMode && document.documentMode <= 9;
}

// https://github.com/niklasvh/html2canvas/issues/503
function cloneNodeIE9(node, javascriptEnabled) {
    var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);

    var child = node.firstChild;
    while(child) {
        if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
            clone.appendChild(cloneNodeIE9(child, javascriptEnabled));
        }
        child = child.nextSibling;
    }

    return clone;
}

function createWindowClone(ownerDocument, containerDocument, width, height, options, x ,y) {
    labelCanvasElements(ownerDocument);
    var documentElement = isIE9() ? cloneNodeIE9(ownerDocument.documentElement, options.javascriptEnabled) : ownerDocument.documentElement.cloneNode(true);
    var container = containerDocument.createElement("iframe");

    container.className = "html2canvas-container";
    container.style.visibility = "hidden";
    container.style.position = "fixed";
    container.style.left = "-10000px";
    container.style.top = "0px";
    container.style.border = "0";
    container.width = width;
    container.height = height;
    container.scrolling = "no"; // ios won't scroll without it
    containerDocument.body.appendChild(container);

    return new Promise(function(resolve) {
        var documentClone = container.contentWindow.document;

        cloneNodeValues(ownerDocument.documentElement, documentElement, "textarea");
        cloneNodeValues(ownerDocument.documentElement, documentElement, "select");

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
         if window url is about:blank, we can assign the url to current by writing onto the document
         */
        container.contentWindow.onload = container.onload = function() {
            var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0) {
                    cloneCanvasContents(ownerDocument, documentClone);
                    clearInterval(interval);
                    if (options.type === "view") {
                        container.contentWindow.scrollTo(x, y);
                    }
                    resolve(container);
                }
            }, 50);
        };

        documentClone.open();
        documentClone.write("<!DOCTYPE html><html></html>");
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(ownerDocument, x, y);
        documentClone.replaceChild(options.javascriptEnabled === true ? documentClone.adoptNode(documentElement) : removeScriptNodes(documentClone.adoptNode(documentElement)), documentClone.documentElement);
        documentClone.close();
    });
}

function cloneNodeValues(document, clone, nodeName) {
    var originalNodes = document.getElementsByTagName(nodeName);
    var clonedNodes = clone.getElementsByTagName(nodeName);
    var count = originalNodes.length;
    for (var i = 0; i < count; i++) {
        clonedNodes[i].value = originalNodes[i].value;
    }
}

function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
}

function loadUrlDocument(src, proxy, document, width, height, options) {
    return new Proxy(src, proxy, window.document).then(documentFromHTML(src)).then(function(doc) {
        return createWindowClone(doc, document, width, height, options, 0, 0);
    });
}

function documentFromHTML(src) {
    return function(html) {
        var parser = new DOMParser(), doc;
        try {
            doc = parser.parseFromString(html, "text/html");
        } catch(e) {
            log("DOMParser not supported, falling back to createHTMLDocument");
            doc = document.implementation.createHTMLDocument("");
            try {
                doc.open();
                doc.write(html);
                doc.close();
            } catch(ee) {
                log("createHTMLDocument write not supported, falling back to document.body.innerHTML");
                doc.body.innerHTML = html; // ie9 doesnt support writing to documentElement
            }
        }

        var b = doc.querySelector("base");
        if (!b || !b.href.host) {
            var base = doc.createElement("base");
            base.href = src;
            doc.head.insertBefore(base, doc.head.firstChild);
        }

        return doc;
    };
}


function labelCanvasElements(ownerDocument) {
    [].slice.call(ownerDocument.querySelectorAll("canvas"), 0).forEach(function(canvas) {
        canvas.setAttribute(html2canvasCanvasCloneAttribute, "canvas-" + html2canvasCanvasCloneIndex++);
    });
}

function cloneCanvasContents(ownerDocument, documentClone) {
    [].slice.call(ownerDocument.querySelectorAll("[" + html2canvasCanvasCloneAttribute + "]"), 0).forEach(function(canvas) {
        try {
            var clonedCanvas = documentClone.querySelector('[' + html2canvasCanvasCloneAttribute + '="' + canvas.getAttribute(html2canvasCanvasCloneAttribute) + '"]');
            if (clonedCanvas) {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                clonedCanvas.getContext("2d").putImageData(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            }
        } catch(e) {
            log("Unable to copy canvas content from", canvas, e);
        }
        canvas.removeAttribute(html2canvasCanvasCloneAttribute);
    });
}

function removeScriptNodes(parent) {
    [].slice.call(parent.childNodes, 0).filter(isElementNode).forEach(function(node) {
        if (node.tagName === "SCRIPT") {
            parent.removeChild(node);
        } else {
            removeScriptNodes(node);
        }
    });
    return parent;
}

function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}

function absoluteUrl(url) {
    var link = document.createElement("a");
    link.href = url;
    link.href = link.href;
    return link;
}

// http://dev.w3.org/csswg/css-color/

function Color(value) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = null;
    var result = this.fromArray(value) ||
        this.namedColor(value) ||
        this.rgb(value) ||
        this.rgba(value) ||
        this.hex6(value) ||
        this.hex3(value);
}

Color.prototype.darken = function(amount) {
    var a = 1 - amount;
    return  new Color([
        Math.round(this.r * a),
        Math.round(this.g * a),
        Math.round(this.b * a),
        this.a
    ]);
};

Color.prototype.isTransparent = function() {
    return this.a === 0;
};

Color.prototype.isBlack = function() {
    return this.r === 0 && this.g === 0 && this.b === 0;
};

Color.prototype.fromArray = function(array) {
    if (Array.isArray(array)) {
        this.r = Math.min(array[0], 255);
        this.g = Math.min(array[1], 255);
        this.b = Math.min(array[2], 255);
        if (array.length > 3) {
            this.a = array[3];
        }
    }

    return (Array.isArray(array));
};

var _hex3 = /^#([a-f0-9]{3})$/i;

Color.prototype.hex3 = function(value) {
    var match = null;
    if ((match = value.match(_hex3)) !== null) {
        this.r = parseInt(match[1][0] + match[1][0], 16);
        this.g = parseInt(match[1][1] + match[1][1], 16);
        this.b = parseInt(match[1][2] + match[1][2], 16);
    }
    return match !== null;
};

var _hex6 = /^#([a-f0-9]{6})$/i;

Color.prototype.hex6 = function(value) {
    var match = null;
    if ((match = value.match(_hex6)) !== null) {
        this.r = parseInt(match[1].substring(0, 2), 16);
        this.g = parseInt(match[1].substring(2, 4), 16);
        this.b = parseInt(match[1].substring(4, 6), 16);
    }
    return match !== null;
};


var _rgb = /^rgb\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3})\)$/;

Color.prototype.rgb = function(value) {
    var match = null;
    if ((match = value.match(_rgb)) !== null) {
        this.r = Number(match[1]);
        this.g = Number(match[2]);
        this.b = Number(match[3]);
    }
    return match !== null;
};

var _rgba = /^rgba\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3}) *, *(\d+\.?\d*)\)$/;

Color.prototype.rgba = function(value) {
    var match = null;
    if ((match = value.match(_rgba)) !== null) {
        this.r = Number(match[1]);
        this.g = Number(match[2]);
        this.b = Number(match[3]);
        this.a = Number(match[4]);
    }
    return match !== null;
};

Color.prototype.toString = function() {
    return this.a !== null && this.a !== 1 ?
    "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" :
    "rgb(" + [this.r, this.g, this.b].join(",") + ")";
};

Color.prototype.namedColor = function(value) {
    var color = colors[value.toLowerCase()];
    if (color) {
        this.r = color[0];
        this.g = color[1];
        this.b = color[2];
    } else if (value.toLowerCase() === "transparent") {
        this.r = this.g = this.b = this.a = 0;
        return true;
    }

    return !!color;
};

Color.prototype.isColor = true;

// JSON.stringify([].slice.call($$('.named-color-table tr'), 1).map(function(row) { return [row.childNodes[3].textContent, row.childNodes[5].textContent.trim().split(",").map(Number)] }).reduce(function(data, row) {data[row[0]] = row[1]; return data}, {}))
var colors = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
};


function DummyImageContainer(src) {
    this.src = src;
    log("DummyImageContainer for", src);
    if (!this.promise || !this.image) {
        log("Initiating DummyImageContainer");
        DummyImageContainer.prototype.image = new Image();
        var image = this.image;
        DummyImageContainer.prototype.promise = new Promise(function(resolve, reject) {
            image.onload = resolve;
            image.onerror = reject;
            image.src = smallImage();
            if (image.complete === true) {
                resolve(image);
            }
        });
    }
}

function Font(family, size) {
    var container = document.createElement('div'),
        img = document.createElement('img'),
        span = document.createElement('span'),
        sampleText = 'Hidden Text',
        baseline,
        middle;

    container.style.visibility = "hidden";
    container.style.fontFamily = family;
    container.style.fontSize = size;
    container.style.margin = 0;
    container.style.padding = 0;

    document.body.appendChild(container);

    img.src = smallImage();
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = family;
    span.style.fontSize = size;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(document.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(document.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;

    document.body.removeChild(container);

    this.baseline = baseline;
    this.lineWidth = 1;
    this.middle = middle;
}

function FontMetrics() {
    this.data = {};
}

FontMetrics.prototype.getMetrics = function(family, size) {
    if (this.data[family + "-" + size] === undefined) {
        this.data[family + "-" + size] = new Font(family, size);
    }
    return this.data[family + "-" + size];
};

function FrameContainer(container, sameOrigin, options) {
    this.image = null;
    this.src = container;
    var self = this;
    var bounds = getBounds(container);
    this.promise = (!sameOrigin ? this.proxyLoad(options.proxy, bounds, options) : new Promise(function(resolve) {
        if (container.contentWindow.document.URL === "about:blank" || container.contentWindow.document.documentElement == null) {
            container.contentWindow.onload = container.onload = function() {
                resolve(container);
            };
        } else {
            resolve(container);
        }
    })).then(function(container) {
        return html2canvas(container.contentWindow.document.documentElement, {type: 'view', width: container.width, height: container.height, proxy: options.proxy, javascriptEnabled: options.javascriptEnabled, removeContainer: options.removeContainer, allowTaint: options.allowTaint, imageTimeout: options.imageTimeout / 2});
    }).then(function(canvas) {
        return self.image = canvas;
    });
}

FrameContainer.prototype.proxyLoad = function(proxy, bounds, options) {
    var container = this.src;
    return loadUrlDocument(container.src, proxy, container.ownerDocument, bounds.width, bounds.height, options);
};

function GradientContainer(imageData) {
    this.src = imageData.value;
    this.colorStops = [];
    this.type = null;
    this.x0 = 0.5;
    this.y0 = 0.5;
    this.x1 = 0.5;
    this.y1 = 0.5;
    this.promise = Promise.resolve(true);
}

GradientContainer.prototype.TYPES = {
    LINEAR: 1,
    RADIAL: 2
};

function ImageContainer(src, cors) {
    this.src = src;
    this.image = new Image();
    var self = this;
    this.tainted = null;
    this.promise = new Promise(function(resolve, reject) {
        self.image.onload = resolve;
        self.image.onerror = reject;
        if (cors) {
            self.image.crossOrigin = "anonymous";
        }
        self.image.src = src;
        if (self.image.complete === true) {
            resolve(self.image);
        }
    });
}

function ImageLoader(options, support) {
    this.link = null;
    this.options = options;
    this.support = support;
    this.origin = this.getOrigin(window.location.href);
}

ImageLoader.prototype.findImages = function(nodes) {
    var images = [];
    nodes.reduce(function(imageNodes, container) {
        switch(container.node.nodeName) {
        case "IMG":
            return imageNodes.concat([{
                args: [container.node.src],
                method: "url"
            }]);
        case "svg":
        case "IFRAME":
            return imageNodes.concat([{
                args: [container.node],
                method: container.node.nodeName
            }]);
        }
        return imageNodes;
    }, []).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.findBackgroundImage = function(images, container) {
    container.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(images, this.loadImage), this);
    return images;
};

ImageLoader.prototype.addImage = function(images, callback) {
    return function(newImage) {
        newImage.args.forEach(function(image) {
            if (!this.imageExists(images, image)) {
                images.splice(0, 0, callback.call(this, newImage));
                log('Added image #' + (images.length), typeof(image) === "string" ? image.substring(0, 100) : image);
            }
        }, this);
    };
};

ImageLoader.prototype.hasImageBackground = function(imageData) {
    return imageData.method !== "none";
};

ImageLoader.prototype.loadImage = function(imageData) {
    if (imageData.method === "url") {
        var src = imageData.args[0];
        if (this.isSVG(src) && !this.support.svg && !this.options.allowTaint) {
            return new SVGContainer(src);
        } else if (src.match(/data:image\/.*;base64,/i)) {
            return new ImageContainer(src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ''), false);
        } else if (this.isSameOrigin(src) || this.options.allowTaint === true || this.isSVG(src)) {
            return new ImageContainer(src, false);
        } else if (this.support.cors && !this.options.allowTaint && this.options.useCORS) {
            return new ImageContainer(src, true);
        } else if (this.options.proxy) {
            return new ProxyImageContainer(src, this.options.proxy);
        } else {
            return new DummyImageContainer(src);
        }
    } else if (imageData.method === "linear-gradient") {
        return new LinearGradientContainer(imageData);
    } else if (imageData.method === "gradient") {
        return new WebkitGradientContainer(imageData);
    } else if (imageData.method === "svg") {
        return new SVGNodeContainer(imageData.args[0], this.support.svg);
    } else if (imageData.method === "IFRAME") {
        return new FrameContainer(imageData.args[0], this.isSameOrigin(imageData.args[0].src), this.options);
    } else {
        return new DummyImageContainer(imageData);
    }
};

ImageLoader.prototype.isSVG = function(src) {
    return src.substring(src.length - 3).toLowerCase() === "svg" || SVGContainer.prototype.isInline(src);
};

ImageLoader.prototype.imageExists = function(images, src) {
    return images.some(function(image) {
        return image.src === src;
    });
};

ImageLoader.prototype.isSameOrigin = function(url) {
    return (this.getOrigin(url) === this.origin);
};

ImageLoader.prototype.getOrigin = function(url) {
    var link = this.link || (this.link = document.createElement("a"));
    link.href = url;
    link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
    return link.protocol + link.hostname + link.port;
};

ImageLoader.prototype.getPromise = function(container) {
    return this.timeout(container, this.options.imageTimeout)['catch'](function() {
        var dummy = new DummyImageContainer(container.src);
        return dummy.promise.then(function(image) {
            container.image = image;
        });
    });
};

ImageLoader.prototype.get = function(src) {
    var found = null;
    return this.images.some(function(img) {
        return (found = img).src === src;
    }) ? found : null;
};

ImageLoader.prototype.fetch = function(nodes) {
    this.images = nodes.reduce(bind(this.findBackgroundImage, this), this.findImages(nodes));
    this.images.forEach(function(image, index) {
        image.promise.then(function() {
            log("Succesfully loaded image #"+ (index+1), image);
        }, function(e) {
            log("Failed loading image #"+ (index+1), image, e);
        });
    });
    this.ready = Promise.all(this.images.map(this.getPromise, this));
    log("Finished searching images");
    return this;
};

ImageLoader.prototype.timeout = function(container, timeout) {
    var timer;
    var promise = Promise.race([container.promise, new Promise(function(res, reject) {
        timer = setTimeout(function() {
            log("Timed out loading image", container);
            reject(container);
        }, timeout);
    })]).then(function(container) {
        clearTimeout(timer);
        return container;
    });
    promise['catch'](function() {
        clearTimeout(timer);
    });
    return promise;
};

function LinearGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = this.TYPES.LINEAR;

    var hasDirection = imageData.args[0].match(this.stepRegExp) === null;

    if (hasDirection) {
        imageData.args[0].split(" ").reverse().forEach(function(position) {
            switch(position) {
            case "left":
                this.x0 = 0;
                this.x1 = 1;
                break;
            case "top":
                this.y0 = 0;
                this.y1 = 1;
                break;
            case "right":
                this.x0 = 1;
                this.x1 = 0;
                break;
            case "bottom":
                this.y0 = 1;
                this.y1 = 0;
                break;
            case "to":
                var y0 = this.y0;
                var x0 = this.x0;
                this.y0 = this.y1;
                this.x0 = this.x1;
                this.x1 = x0;
                this.y1 = y0;
                break;
            }
        }, this);
    } else {
        this.y0 = 0;
        this.y1 = 1;
    }

    this.colorStops = imageData.args.slice(hasDirection ? 1 : 0).map(function(colorStop) {
        var colorStopMatch = colorStop.match(this.stepRegExp);
        return {
            color: new Color(colorStopMatch[1]),
            stop: colorStopMatch[3] === "%" ? colorStopMatch[2] / 100 : null
        };
    }, this);

    if (this.colorStops[0].stop === null) {
        this.colorStops[0].stop = 0;
    }

    if (this.colorStops[this.colorStops.length - 1].stop === null) {
        this.colorStops[this.colorStops.length - 1].stop = 1;
    }

    this.colorStops.forEach(function(colorStop, index) {
        if (colorStop.stop === null) {
            this.colorStops.slice(index).some(function(find, count) {
                if (find.stop !== null) {
                    colorStop.stop = ((find.stop - this.colorStops[index - 1].stop) / (count + 1)) + this.colorStops[index - 1].stop;
                    return true;
                } else {
                    return false;
                }
            }, this);
        }
    }, this);
}

LinearGradientContainer.prototype = Object.create(GradientContainer.prototype);

LinearGradientContainer.prototype.stepRegExp = /((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/;

function log() {
    if (window.html2canvas.logging && window.console && window.console.log) {
        Function.prototype.bind.call(window.console.log, (window.console)).apply(window.console, [(Date.now() - window.html2canvas.start) + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
    }
}

function NodeContainer(node, parent) {
    this.node = node;
    this.parent = parent;
    this.stack = null;
    this.bounds = null;
    this.borders = null;
    this.clip = [];
    this.backgroundClip = [];
    this.offsetBounds = null;
    this.visible = null;
    this.computedStyles = null;
    this.colors = {};
    this.styles = {};
    this.backgroundImages = null;
    this.transformData = null;
    this.transformMatrix = null;
    this.isPseudoElement = false;
    this.opacity = null;
}

NodeContainer.prototype.cloneTo = function(stack) {
    stack.visible = this.visible;
    stack.borders = this.borders;
    stack.bounds = this.bounds;
    stack.clip = this.clip;
    stack.backgroundClip = this.backgroundClip;
    stack.computedStyles = this.computedStyles;
    stack.styles = this.styles;
    stack.backgroundImages = this.backgroundImages;
    stack.opacity = this.opacity;
};

NodeContainer.prototype.getOpacity = function() {
    return this.opacity === null ? (this.opacity = this.cssFloat('opacity')) : this.opacity;
};

NodeContainer.prototype.assignStack = function(stack) {
    this.stack = stack;
    stack.children.push(this);
};

NodeContainer.prototype.isElementVisible = function() {
    return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : (
        this.css('display') !== "none" &&
        this.css('visibility') !== "hidden" &&
        !this.node.hasAttribute("data-html2canvas-ignore") &&
        (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
    );
};

NodeContainer.prototype.css = function(attribute) {
    if (!this.computedStyles) {
        this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null);
    }

    return this.styles[attribute] || (this.styles[attribute] = this.computedStyles[attribute]);
};

NodeContainer.prototype.prefixedCss = function(attribute) {
    var prefixes = ["webkit", "moz", "ms", "o"];
    var value = this.css(attribute);
    if (value === undefined) {
        prefixes.some(function(prefix) {
            value = this.css(prefix + attribute.substr(0, 1).toUpperCase() + attribute.substr(1));
            return value !== undefined;
        }, this);
    }
    return value === undefined ? null : value;
};

NodeContainer.prototype.computedStyle = function(type) {
    return this.node.ownerDocument.defaultView.getComputedStyle(this.node, type);
};

NodeContainer.prototype.cssInt = function(attribute) {
    var value = parseInt(this.css(attribute), 10);
    return (isNaN(value)) ? 0 : value; // borders in old IE are throwing 'medium' for demo.html
};

NodeContainer.prototype.color = function(attribute) {
    return this.colors[attribute] || (this.colors[attribute] = new Color(this.css(attribute)));
};

NodeContainer.prototype.cssFloat = function(attribute) {
    var value = parseFloat(this.css(attribute));
    return (isNaN(value)) ? 0 : value;
};

NodeContainer.prototype.fontWeight = function() {
    var weight = this.css("fontWeight");
    switch(parseInt(weight, 10)){
    case 401:
        weight = "bold";
        break;
    case 400:
        weight = "normal";
        break;
    }
    return weight;
};

NodeContainer.prototype.parseClip = function() {
    var matches = this.css('clip').match(this.CLIP);
    if (matches) {
        return {
            top: parseInt(matches[1], 10),
            right: parseInt(matches[2], 10),
            bottom: parseInt(matches[3], 10),
            left: parseInt(matches[4], 10)
        };
    }
    return null;
};

NodeContainer.prototype.parseBackgroundImages = function() {
    return this.backgroundImages || (this.backgroundImages = parseBackgrounds(this.css("backgroundImage")));
};

NodeContainer.prototype.cssList = function(property, index) {
    var value = (this.css(property) || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = value.trim().split(' ');
    if (value.length === 1) {
        value = [value[0], value[0]];
    }
    return value;
};

NodeContainer.prototype.parseBackgroundSize = function(bounds, image, index) {
    var size = this.cssList("backgroundSize", index);
    var width, height;

    if (isPercentage(size[0])) {
        width = bounds.width * parseFloat(size[0]) / 100;
    } else if (/contain|cover/.test(size[0])) {
        var targetRatio = bounds.width / bounds.height, currentRatio = image.width / image.height;
        return (targetRatio < currentRatio ^ size[0] === 'contain') ?  {width: bounds.height * currentRatio, height: bounds.height} : {width: bounds.width, height: bounds.width / currentRatio};
    } else {
        width = parseInt(size[0], 10);
    }

    if (size[0] === 'auto' && size[1] === 'auto') {
        height = image.height;
    } else if (size[1] === 'auto') {
        height = width / image.width * image.height;
    } else if (isPercentage(size[1])) {
        height =  bounds.height * parseFloat(size[1]) / 100;
    } else {
        height = parseInt(size[1], 10);
    }

    if (size[0] === 'auto') {
        width = height / image.height * image.width;
    }

    return {width: width, height: height};
};

NodeContainer.prototype.parseBackgroundPosition = function(bounds, image, index, backgroundSize) {
    var position = this.cssList('backgroundPosition', index);
    var left, top;

    if (isPercentage(position[0])){
        left = (bounds.width - (backgroundSize || image).width) * (parseFloat(position[0]) / 100);
    } else {
        left = parseInt(position[0], 10);
    }

    if (position[1] === 'auto') {
        top = left / image.width * image.height;
    } else if (isPercentage(position[1])){
        top =  (bounds.height - (backgroundSize || image).height) * parseFloat(position[1]) / 100;
    } else {
        top = parseInt(position[1], 10);
    }

    if (position[0] === 'auto') {
        left = top / image.height * image.width;
    }

    return {left: left, top: top};
};

NodeContainer.prototype.parseBackgroundRepeat = function(index) {
    return this.cssList("backgroundRepeat", index)[0];
};

NodeContainer.prototype.parseTextShadows = function() {
    var textShadow = this.css("textShadow");
    var results = [];

    if (textShadow && textShadow !== 'none') {
        var shadows = textShadow.match(this.TEXT_SHADOW_PROPERTY);
        for (var i = 0; shadows && (i < shadows.length); i++) {
            var s = shadows[i].match(this.TEXT_SHADOW_VALUES);
            results.push({
                color: new Color(s[0]),
                offsetX: s[1] ? parseFloat(s[1].replace('px', '')) : 0,
                offsetY: s[2] ? parseFloat(s[2].replace('px', '')) : 0,
                blur: s[3] ? s[3].replace('px', '') : 0
            });
        }
    }
    return results;
};

NodeContainer.prototype.parseTransform = function() {
    if (!this.transformData) {
        if (this.hasTransform()) {
            var offset = this.parseBounds();
            var origin = this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);
            origin[0] += offset.left;
            origin[1] += offset.top;
            this.transformData = {
                origin: origin,
                matrix: this.parseTransformMatrix()
            };
        } else {
            this.transformData = {
                origin: [0, 0],
                matrix: [1, 0, 0, 1, 0, 0]
            };
        }
    }
    return this.transformData;
};

NodeContainer.prototype.parseTransformMatrix = function() {
    if (!this.transformMatrix) {
        var transform = this.prefixedCss("transform");
        var matrix = transform ? parseMatrix(transform.match(this.MATRIX_PROPERTY)) : null;
        this.transformMatrix = matrix ? matrix : [1, 0, 0, 1, 0, 0];
    }
    return this.transformMatrix;
};

NodeContainer.prototype.parseBounds = function() {
    return this.bounds || (this.bounds = this.hasTransform() ? offsetBounds(this.node) : getBounds(this.node));
};

NodeContainer.prototype.hasTransform = function() {
    return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || (this.parent && this.parent.hasTransform());
};

NodeContainer.prototype.getValue = function() {
    var value = this.node.value || "";
    if (this.node.tagName === "SELECT") {
        value = selectionValue(this.node);
    } else if (this.node.type === "password") {
        value = Array(value.length + 1).join('\u2022'); // jshint ignore:line
    }
    return value.length === 0 ? (this.node.placeholder || "") : value;
};

NodeContainer.prototype.MATRIX_PROPERTY = /(matrix)\((.+)\)/;
NodeContainer.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
NodeContainer.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
NodeContainer.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;

function selectionValue(node) {
    var option = node.options[node.selectedIndex || 0];
    return option ? (option.text || "") : "";
}

function parseMatrix(match) {
    if (match && match[1] === "matrix") {
        return match[2].split(",").map(function(s) {
            return parseFloat(s.trim());
        });
    }
}

function isPercentage(value) {
    return value.toString().indexOf("%") !== -1;
}

function parseBackgrounds(backgroundImage) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        mode = 0, numParen = 0, quote, args;
    var appendResult = function() {
        if(method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }
            if (definition) {
                args.push(definition);
            }
            if (method.substr(0, 1) === '-' && (prefix_i = method.indexOf('-', 1 ) + 1) > 0) {
                prefix = method.substr(0, prefix_i);
                method = method.substr(prefix_i);
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args,
                image: null
            });
        }
        args = [];
        method = prefix = definition = block = '';
    };
    args = [];
    method = prefix = definition = block = '';
    backgroundImage.split("").forEach(function(c) {
        if (mode === 0 && whitespace.indexOf(c) > -1) {
            return;
        }
        switch(c) {
        case '"':
            if(!quote) {
                quote = c;
            } else if(quote === c) {
                quote = null;
            }
            break;
        case '(':
            if(quote) {
                break;
            } else if(mode === 0) {
                mode = 1;
                block += c;
                return;
            } else {
                numParen++;
            }
            break;
        case ')':
            if (quote) {
                break;
            } else if(mode === 1) {
                if(numParen === 0) {
                    mode = 0;
                    block += c;
                    appendResult();
                    return;
                } else {
                    numParen--;
                }
            }
            break;

        case ',':
            if (quote) {
                break;
            } else if(mode === 0) {
                appendResult();
                return;
            } else if (mode === 1) {
                if (numParen === 0 && !method.match(/^url$/i)) {
                    args.push(definition);
                    definition = '';
                    block += c;
                    return;
                }
            }
            break;
        }

        block += c;
        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
}

function removePx(str) {
    return str.replace("px", "");
}

function asFloat(str) {
    return parseFloat(str);
}

function getBounds(node) {
    if (node.getBoundingClientRect) {
        var clientRect = node.getBoundingClientRect();
        var width = node.offsetWidth == null ? clientRect.width : node.offsetWidth;
        return {
            top: clientRect.top,
            bottom: clientRect.bottom || (clientRect.top + clientRect.height),
            right: clientRect.left + width,
            left: clientRect.left,
            width:  width,
            height: node.offsetHeight == null ? clientRect.height : node.offsetHeight
        };
    }
    return {};
}

function offsetBounds(node) {
    var parent = node.offsetParent ? offsetBounds(node.offsetParent) : {top: 0, left: 0};

    return {
        top: node.offsetTop + parent.top,
        bottom: node.offsetTop + node.offsetHeight + parent.top,
        right: node.offsetLeft + parent.left + node.offsetWidth,
        left: node.offsetLeft + parent.left,
        width: node.offsetWidth,
        height: node.offsetHeight
    };
}

function NodeParser(element, renderer, support, imageLoader, options) {
    log("Starting NodeParser");
    this.renderer = renderer;
    this.options = options;
    this.range = null;
    this.support = support;
    this.renderQueue = [];
    this.stack = new StackingContext(true, 1, element.ownerDocument, null);
    var parent = new NodeContainer(element, null);
    if (options.background) {
        renderer.rectangle(0, 0, renderer.width, renderer.height, new Color(options.background));
    }
    if (element === element.ownerDocument.documentElement) {
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var canvasBackground = new NodeContainer(parent.color('backgroundColor').isTransparent() ? element.ownerDocument.body : element.ownerDocument.documentElement, null);
        renderer.rectangle(0, 0, renderer.width, renderer.height, canvasBackground.color('backgroundColor'));
    }
    parent.visibile = parent.isElementVisible();
    this.createPseudoHideStyles(element.ownerDocument);
    this.disableAnimations(element.ownerDocument);
    this.nodes = flatten([parent].concat(this.getChildren(parent)).filter(function(container) {
        return container.visible = container.isElementVisible();
    }).map(this.getPseudoElements, this));
    this.fontMetrics = new FontMetrics();
    log("Fetched nodes, total:", this.nodes.length);
    log("Calculate overflow clips");
    this.calculateOverflowClips();
    log("Start fetching images");
    this.images = imageLoader.fetch(this.nodes.filter(isElement));
    this.ready = this.images.ready.then(bind(function() {
        log("Images loaded, starting parsing");
        log("Creating stacking contexts");
        this.createStackingContexts();
        log("Sorting stacking contexts");
        this.sortStackingContexts(this.stack);
        this.parse(this.stack);
        log("Render queue created with " + this.renderQueue.length + " items");
        return new Promise(bind(function(resolve) {
            if (!options.async) {
                this.renderQueue.forEach(this.paint, this);
                resolve();
            } else if (typeof(options.async) === "function") {
                options.async.call(this, this.renderQueue, resolve);
            } else if (this.renderQueue.length > 0){
                this.renderIndex = 0;
                this.asyncRenderer(this.renderQueue, resolve);
            } else {
                resolve();
            }
        }, this));
    }, this));
}

NodeParser.prototype.calculateOverflowClips = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container)) {
            if (isPseudoElement(container)) {
                container.appendToDOM();
            }
            container.borders = this.parseBorders(container);
            var clip = (container.css('overflow') === "hidden") ? [container.borders.clip] : [];
            var cssClip = container.parseClip();
            if (cssClip && ["absolute", "fixed"].indexOf(container.css('position')) !== -1) {
                clip.push([["rect",
                        container.bounds.left + cssClip.left,
                        container.bounds.top + cssClip.top,
                        cssClip.right - cssClip.left,
                        cssClip.bottom - cssClip.top
                ]]);
            }
            container.clip = hasParentClip(container) ? container.parent.clip.concat(clip) : clip;
            container.backgroundClip = (container.css('overflow') !== "hidden") ? container.clip.concat([container.borders.clip]) : container.clip;
            if (isPseudoElement(container)) {
                container.cleanDOM();
            }
        } else if (isTextNode(container)) {
            container.clip = hasParentClip(container) ? container.parent.clip : [];
        }
        if (!isPseudoElement(container)) {
            container.bounds = null;
        }
    }, this);
};

function hasParentClip(container) {
    return container.parent && container.parent.clip.length;
}

NodeParser.prototype.asyncRenderer = function(queue, resolve, asyncTimer) {
    asyncTimer = asyncTimer || Date.now();
    this.paint(queue[this.renderIndex++]);
    if (queue.length === this.renderIndex) {
        resolve();
    } else if (asyncTimer + 20 > Date.now()) {
        this.asyncRenderer(queue, resolve, asyncTimer);
    } else {
        setTimeout(bind(function() {
            this.asyncRenderer(queue, resolve);
        }, this), 0);
    }
};

NodeParser.prototype.createPseudoHideStyles = function(document) {
    this.createStyles(document, '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }' +
        '.' + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
};

NodeParser.prototype.disableAnimations = function(document) {
    this.createStyles(document, '* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; ' +
        '-webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}');
};

NodeParser.prototype.createStyles = function(document, styles) {
    var hidePseudoElements = document.createElement('style');
    hidePseudoElements.innerHTML = styles;
    document.body.appendChild(hidePseudoElements);
};

NodeParser.prototype.getPseudoElements = function(container) {
    var nodes = [[container]];
    if (container.node.nodeType === Node.ELEMENT_NODE) {
        var before = this.getPseudoElement(container, ":before");
        var after = this.getPseudoElement(container, ":after");

        if (before) {
            nodes.push(before);
        }

        if (after) {
            nodes.push(after);
        }
    }
    return flatten(nodes);
};

function toCamelCase(str) {
    return str.replace(/(\-[a-z])/g, function(match){
        return match.toUpperCase().replace('-','');
    });
}

NodeParser.prototype.getPseudoElement = function(container, type) {
    var style = container.computedStyle(type);
    if(!style || !style.content || style.content === "none" || style.content === "-moz-alt-content" || style.display === "none") {
        return null;
    }

    var content = stripQuotes(style.content);
    var isImage = content.substr(0, 3) === 'url';
    var pseudoNode = document.createElement(isImage ? 'img' : 'html2canvaspseudoelement');
    var pseudoContainer = new PseudoElementContainer(pseudoNode, container, type);

    for (var i = style.length-1; i >= 0; i--) {
        var property = toCamelCase(style.item(i));
        pseudoNode.style[property] = style[property];
    }

    pseudoNode.className = PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

    if (isImage) {
        pseudoNode.src = parseBackgrounds(content)[0].args[0];
        return [pseudoContainer];
    } else {
        var text = document.createTextNode(content);
        pseudoNode.appendChild(text);
        return [pseudoContainer, new TextContainer(text, pseudoContainer)];
    }
};


NodeParser.prototype.getChildren = function(parentContainer) {
    return flatten([].filter.call(parentContainer.node.childNodes, renderableNode).map(function(node) {
        var container = [node.nodeType === Node.TEXT_NODE ? new TextContainer(node, parentContainer) : new NodeContainer(node, parentContainer)].filter(nonIgnoredElement);
        return node.nodeType === Node.ELEMENT_NODE && container.length && node.tagName !== "TEXTAREA" ? (container[0].isElementVisible() ? container.concat(this.getChildren(container[0])) : []) : container;
    }, this));
};

NodeParser.prototype.newStackingContext = function(container, hasOwnStacking) {
    var stack = new StackingContext(hasOwnStacking, container.getOpacity(), container.node, container.parent);
    container.cloneTo(stack);
    var parentStack = hasOwnStacking ? stack.getParentStack(this) : stack.parent.stack;
    parentStack.contexts.push(stack);
    container.stack = stack;
};

NodeParser.prototype.createStackingContexts = function() {
    this.nodes.forEach(function(container) {
        if (isElement(container) && (this.isRootElement(container) || hasOpacity(container) || isPositionedForStacking(container) || this.isBodyWithTransparentRoot(container) || container.hasTransform())) {
            this.newStackingContext(container, true);
        } else if (isElement(container) && ((isPositioned(container) && zIndex0(container)) || isInlineBlock(container) || isFloating(container))) {
            this.newStackingContext(container, false);
        } else {
            container.assignStack(container.parent.stack);
        }
    }, this);
};

NodeParser.prototype.isBodyWithTransparentRoot = function(container) {
    return container.node.nodeName === "BODY" && container.parent.color('backgroundColor').isTransparent();
};

NodeParser.prototype.isRootElement = function(container) {
    return container.parent === null;
};

NodeParser.prototype.sortStackingContexts = function(stack) {
    stack.contexts.sort(zIndexSort(stack.contexts.slice(0)));
    stack.contexts.forEach(this.sortStackingContexts, this);
};

NodeParser.prototype.parseTextBounds = function(container) {
    return function(text, index, textList) {
        if (container.parent.css("textDecoration").substr(0, 4) !== "none" || text.trim().length !== 0) {
            if (this.support.rangeBounds && !container.parent.hasTransform()) {
                var offset = textList.slice(0, index).join("").length;
                return this.getRangeBounds(container.node, offset, text.length);
            } else if (container.node && typeof(container.node.data) === "string") {
                var replacementNode = container.node.splitText(text.length);
                var bounds = this.getWrapperBounds(container.node, container.parent.hasTransform());
                container.node = replacementNode;
                return bounds;
            }
        } else if(!this.support.rangeBounds || container.parent.hasTransform()){
            container.node = container.node.splitText(text.length);
        }
        return {};
    };
};

NodeParser.prototype.getWrapperBounds = function(node, transform) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    var parent = node.parentNode,
        backupText = node.cloneNode(true);

    wrapper.appendChild(node.cloneNode(true));
    parent.replaceChild(wrapper, node);
    var bounds = transform ? offsetBounds(wrapper) : getBounds(wrapper);
    parent.replaceChild(backupText, wrapper);
    return bounds;
};

NodeParser.prototype.getRangeBounds = function(node, offset, length) {
    var range = this.range || (this.range = node.ownerDocument.createRange());
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return range.getBoundingClientRect();
};

function ClearTransform() {}

NodeParser.prototype.parse = function(stack) {
    // http://www.w3.org/TR/CSS21/visuren.html#z-index
    var negativeZindex = stack.contexts.filter(negativeZIndex); // 2. the child stacking contexts with negative stack levels (most negative first).
    var descendantElements = stack.children.filter(isElement);
    var descendantNonFloats = descendantElements.filter(not(isFloating));
    var nonInlineNonPositionedDescendants = descendantNonFloats.filter(not(isPositioned)).filter(not(inlineLevel)); // 3 the in-flow, non-inline-level, non-positioned descendants.
    var nonPositionedFloats = descendantElements.filter(not(isPositioned)).filter(isFloating); // 4. the non-positioned floats.
    var inFlow = descendantNonFloats.filter(not(isPositioned)).filter(inlineLevel); // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
    var stackLevel0 = stack.contexts.concat(descendantNonFloats.filter(isPositioned)).filter(zIndex0); // 6. the child stacking contexts with stack level 0 and the positioned descendants with stack level 0.
    var text = stack.children.filter(isTextNode).filter(hasText);
    var positiveZindex = stack.contexts.filter(positiveZIndex); // 7. the child stacking contexts with positive stack levels (least positive first).
    negativeZindex.concat(nonInlineNonPositionedDescendants).concat(nonPositionedFloats)
        .concat(inFlow).concat(stackLevel0).concat(text).concat(positiveZindex).forEach(function(container) {
            this.renderQueue.push(container);
            if (isStackingContext(container)) {
                this.parse(container);
                this.renderQueue.push(new ClearTransform());
            }
        }, this);
};

NodeParser.prototype.paint = function(container) {
    try {
        if (container instanceof ClearTransform) {
            this.renderer.ctx.restore();
        } else if (isTextNode(container)) {
            if (isPseudoElement(container.parent)) {
                container.parent.appendToDOM();
            }
            this.paintText(container);
            if (isPseudoElement(container.parent)) {
                container.parent.cleanDOM();
            }
        } else {
            this.paintNode(container);
        }
    } catch(e) {
        log(e);
        if (this.options.strict) {
            throw e;
        }
    }
};

NodeParser.prototype.paintNode = function(container) {
    if (isStackingContext(container)) {
        this.renderer.setOpacity(container.opacity);
        this.renderer.ctx.save();
        if (container.hasTransform()) {
            this.renderer.setTransform(container.parseTransform());
        }
    }

    if (container.node.nodeName === "INPUT" && container.node.type === "checkbox") {
        this.paintCheckbox(container);
    } else if (container.node.nodeName === "INPUT" && container.node.type === "radio") {
        this.paintRadio(container);
    } else {
        this.paintElement(container);
    }
};

NodeParser.prototype.paintElement = function(container) {
    var bounds = container.parseBounds();
    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.renderBackground(container, bounds, container.borders.borders.map(getWidth));
    }, this);

    this.renderer.clip(container.clip, function() {
        this.renderer.renderBorders(container.borders.borders);
    }, this);

    this.renderer.clip(container.backgroundClip, function() {
        switch (container.node.nodeName) {
        case "svg":
        case "IFRAME":
            var imgContainer = this.images.get(container.node);
            if (imgContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imgContainer);
            } else {
                log("Error loading <" + container.node.nodeName + ">", container.node);
            }
            break;
        case "IMG":
            var imageContainer = this.images.get(container.node.src);
            if (imageContainer) {
                this.renderer.renderImage(container, bounds, container.borders, imageContainer);
            } else {
                log("Error loading <img>", container.node.src);
            }
            break;
        case "CANVAS":
            this.renderer.renderImage(container, bounds, container.borders, {image: container.node});
            break;
        case "SELECT":
        case "INPUT":
        case "TEXTAREA":
            this.paintFormValue(container);
            break;
        }
    }, this);
};

NodeParser.prototype.paintCheckbox = function(container) {
    var b = container.parseBounds();

    var size = Math.min(b.width, b.height);
    var bounds = {width: size - 1, height: size - 1, top: b.top, left: b.left};
    var r = [3, 3];
    var radius = [r, r, r, r];
    var borders = [1,1,1,1].map(function(w) {
        return {color: new Color('#A5A5A5'), width: w};
    });

    var borderPoints = calculateCurvePoints(bounds, radius, borders);

    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.rectangle(bounds.left + 1, bounds.top + 1, bounds.width - 2, bounds.height - 2, new Color("#DEDEDE"));
        this.renderer.renderBorders(calculateBorders(borders, bounds, borderPoints, radius));
        if (container.node.checked) {
            this.renderer.font(new Color('#424242'), 'normal', 'normal', 'bold', (size - 3) + "px", 'arial');
            this.renderer.text("\u2714", bounds.left + size / 6, bounds.top + size - 1);
        }
    }, this);
};

NodeParser.prototype.paintRadio = function(container) {
    var bounds = container.parseBounds();

    var size = Math.min(bounds.width, bounds.height) - 2;

    this.renderer.clip(container.backgroundClip, function() {
        this.renderer.circleStroke(bounds.left + 1, bounds.top + 1, size, new Color('#DEDEDE'), 1, new Color('#A5A5A5'));
        if (container.node.checked) {
            this.renderer.circle(Math.ceil(bounds.left + size / 4) + 1, Math.ceil(bounds.top + size / 4) + 1, Math.floor(size / 2), new Color('#424242'));
        }
    }, this);
};

NodeParser.prototype.paintFormValue = function(container) {
    var value = container.getValue();
    if (value.length > 0) {
        var document = container.node.ownerDocument;
        var wrapper = document.createElement('html2canvaswrapper');
        var properties = ['lineHeight', 'textAlign', 'fontFamily', 'fontWeight', 'fontSize', 'color',
            'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom',
            'width', 'height', 'borderLeftStyle', 'borderTopStyle', 'borderLeftWidth', 'borderTopWidth',
            'boxSizing', 'whiteSpace', 'wordWrap'];

        properties.forEach(function(property) {
            try {
                wrapper.style[property] = container.css(property);
            } catch(e) {
                // Older IE has issues with "border"
                log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
            }
        });
        var bounds = container.parseBounds();
        wrapper.style.position = "fixed";
        wrapper.style.left = bounds.left + "px";
        wrapper.style.top = bounds.top + "px";
        wrapper.textContent = value;
        document.body.appendChild(wrapper);
        this.paintText(new TextContainer(wrapper.firstChild, container));
        document.body.removeChild(wrapper);
    }
};

NodeParser.prototype.paintText = function(container) {
    container.applyTextTransform();
    var characters = window.html2canvas.punycode.ucs2.decode(container.node.data);
    var textList = (!this.options.letterRendering || noLetterSpacing(container)) && !hasUnicode(container.node.data) ? getWords(characters) : characters.map(function(character) {
        return window.html2canvas.punycode.ucs2.encode([character]);
    });

    var weight = container.parent.fontWeight();
    var size = container.parent.css('fontSize');
    var family = container.parent.css('fontFamily');
    var shadows = container.parent.parseTextShadows();

    this.renderer.font(container.parent.color('color'), container.parent.css('fontStyle'), container.parent.css('fontVariant'), weight, size, family);
    if (shadows.length) {
        // TODO: support multiple text shadows
        this.renderer.fontShadow(shadows[0].color, shadows[0].offsetX, shadows[0].offsetY, shadows[0].blur);
    } else {
        this.renderer.clearShadow();
    }

    this.renderer.clip(container.parent.clip, function() {
        textList.map(this.parseTextBounds(container), this).forEach(function(bounds, index) {
            if (bounds) {
                this.renderer.text(textList[index], bounds.left, bounds.bottom);
                this.renderTextDecoration(container.parent, bounds, this.fontMetrics.getMetrics(family, size));
            }
        }, this);
    }, this);
};

NodeParser.prototype.renderTextDecoration = function(container, bounds, metrics) {
    switch(container.css("textDecoration").split(" ")[0]) {
    case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        this.renderer.rectangle(bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, container.color("color"));
        break;
    case "overline":
        this.renderer.rectangle(bounds.left, Math.round(bounds.top), bounds.width, 1, container.color("color"));
        break;
    case "line-through":
        // TODO try and find exact position for line-through
        this.renderer.rectangle(bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, container.color("color"));
        break;
    }
};

var borderColorTransforms = {
    inset: [
        ["darken", 0.60],
        ["darken", 0.10],
        ["darken", 0.10],
        ["darken", 0.60]
    ]
};

NodeParser.prototype.parseBorders = function(container) {
    var nodeBounds = container.parseBounds();
    var radius = getBorderRadiusData(container);
    var borders = ["Top", "Right", "Bottom", "Left"].map(function(side, index) {
        var style = container.css('border' + side + 'Style');
        var color = container.color('border' + side + 'Color');
        if (style === "inset" && color.isBlack()) {
            color = new Color([255, 255, 255, color.a]); // this is wrong, but
        }
        var colorTransform = borderColorTransforms[style] ? borderColorTransforms[style][index] : null;
        return {
            width: container.cssInt('border' + side + 'Width'),
            color: colorTransform ? color[colorTransform[0]](colorTransform[1]) : color,
            args: null
        };
    });
    var borderPoints = calculateCurvePoints(nodeBounds, radius, borders);

    return {
        clip: this.parseBackgroundClip(container, borderPoints, borders, radius, nodeBounds),
        borders: calculateBorders(borders, nodeBounds, borderPoints, radius)
    };
};

function calculateBorders(borders, nodeBounds, borderPoints, radius) {
    return borders.map(function(border, borderSide) {
        if (border.width > 0) {
            var bx = nodeBounds.left;
            var by = nodeBounds.top;
            var bw = nodeBounds.width;
            var bh = nodeBounds.height - (borders[2].width);

            switch(borderSide) {
            case 0:
                // top border
                bh = borders[0].width;
                border.args = drawSide({
                        c1: [bx, by],
                        c2: [bx + bw, by],
                        c3: [bx + bw - borders[1].width, by + bh],
                        c4: [bx + borders[3].width, by + bh]
                    }, radius[0], radius[1],
                    borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
                break;
            case 1:
                // right border
                bx = nodeBounds.left + nodeBounds.width - (borders[1].width);
                bw = borders[1].width;

                border.args = drawSide({
                        c1: [bx + bw, by],
                        c2: [bx + bw, by + bh + borders[2].width],
                        c3: [bx, by + bh],
                        c4: [bx, by + borders[0].width]
                    }, radius[1], radius[2],
                    borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
                break;
            case 2:
                // bottom border
                by = (by + nodeBounds.height) - (borders[2].width);
                bh = borders[2].width;
                border.args = drawSide({
                        c1: [bx + bw, by + bh],
                        c2: [bx, by + bh],
                        c3: [bx + borders[3].width, by],
                        c4: [bx + bw - borders[3].width, by]
                    }, radius[2], radius[3],
                    borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
                break;
            case 3:
                // left border
                bw = borders[3].width;
                border.args = drawSide({
                        c1: [bx, by + bh + borders[2].width],
                        c2: [bx, by],
                        c3: [bx + bw, by + borders[0].width],
                        c4: [bx + bw, by + bh]
                    }, radius[3], radius[0],
                    borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
                break;
            }
        }
        return border;
    });
}

NodeParser.prototype.parseBackgroundClip = function(container, borderPoints, borders, radius, bounds) {
    var backgroundClip = container.css('backgroundClip'),
        borderArgs = [];

    switch(backgroundClip) {
    case "content-box":
    case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

    default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
};

function getCurvePoints(x, y, r1, r2) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = (r1) * kappa, // control point offset horizontal
        oy = (r2) * kappa, // control point offset vertical
        xm = x + r1, // x-middle
        ym = y + r2; // y-middle
    return {
        topLeft: bezierCurve({x: x, y: ym}, {x: x, y: ym - oy}, {x: xm - ox, y: y}, {x: xm, y: y}),
        topRight: bezierCurve({x: x, y: y}, {x: x + ox,y: y}, {x: xm, y: ym - oy}, {x: xm, y: ym}),
        bottomRight: bezierCurve({x: xm, y: y}, {x: xm, y: y + oy}, {x: x + ox, y: ym}, {x: x, y: ym}),
        bottomLeft: bezierCurve({x: xm, y: ym}, {x: xm - ox, y: ym}, {x: x, y: y + oy}, {x: x, y:y})
    };
}

function calculateCurvePoints(bounds, borderRadius, borders) {
    var x = bounds.left,
        y = bounds.top,
        width = bounds.width,
        height = bounds.height,

        tlh = borderRadius[0][0],
        tlv = borderRadius[0][1],
        trh = borderRadius[1][0],
        trv = borderRadius[1][1],
        brh = borderRadius[2][0],
        brv = borderRadius[2][1],
        blh = borderRadius[3][0],
        blv = borderRadius[3][1];

    var topWidth = width - trh,
        rightHeight = height - brv,
        bottomWidth = width - brh,
        leftHeight = height - blv;

    return {
        topLeftOuter: getCurvePoints(x, y, tlh, tlv).topLeft.subdivide(0.5),
        topLeftInner: getCurvePoints(x + borders[3].width, y + borders[0].width, Math.max(0, tlh - borders[3].width), Math.max(0, tlv - borders[0].width)).topLeft.subdivide(0.5),
        topRightOuter: getCurvePoints(x + topWidth, y, trh, trv).topRight.subdivide(0.5),
        topRightInner: getCurvePoints(x + Math.min(topWidth, width + borders[3].width), y + borders[0].width, (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width, trv - borders[0].width).topRight.subdivide(0.5),
        bottomRightOuter: getCurvePoints(x + bottomWidth, y + rightHeight, brh, brv).bottomRight.subdivide(0.5),
        bottomRightInner: getCurvePoints(x + Math.min(bottomWidth, width - borders[3].width), y + Math.min(rightHeight, height + borders[0].width), Math.max(0, brh - borders[1].width),  brv - borders[2].width).bottomRight.subdivide(0.5),
        bottomLeftOuter: getCurvePoints(x, y + leftHeight, blh, blv).bottomLeft.subdivide(0.5),
        bottomLeftInner: getCurvePoints(x + borders[3].width, y + leftHeight, Math.max(0, blh - borders[3].width), blv - borders[2].width).bottomLeft.subdivide(0.5)
    };
}

function bezierCurve(start, startControl, endControl, end) {
    var lerp = function (a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t
        };
    };

    return {
        start: start,
        startControl: startControl,
        endControl: endControl,
        end: end,
        subdivide: function(t) {
            var ab = lerp(start, startControl, t),
                bc = lerp(startControl, endControl, t),
                cd = lerp(endControl, end, t),
                abbc = lerp(ab, bc, t),
                bccd = lerp(bc, cd, t),
                dest = lerp(abbc, bccd, t);
            return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
        },
        curveTo: function(borderArgs) {
            borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
        },
        curveToReversed: function(borderArgs) {
            borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
        }
    };
}

function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
        outer1[1].curveTo(borderArgs);
    } else {
        borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
        outer2[0].curveTo(borderArgs);
        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
        inner2[0].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
        inner1[1].curveToReversed(borderArgs);
    } else {
        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
}

function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
        corner1[0].curveTo(borderArgs);
        corner1[1].curveTo(borderArgs);
    } else {
        borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
}

function negativeZIndex(container) {
    return container.cssInt("zIndex") < 0;
}

function positiveZIndex(container) {
    return container.cssInt("zIndex") > 0;
}

function zIndex0(container) {
    return container.cssInt("zIndex") === 0;
}

function inlineLevel(container) {
    return ["inline", "inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function isStackingContext(container) {
    return (container instanceof StackingContext);
}

function hasText(container) {
    return container.node.data.trim().length > 0;
}

function noLetterSpacing(container) {
    return (/^(normal|none|0px)$/.test(container.parent.css("letterSpacing")));
}

function getBorderRadiusData(container) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
        var value = container.css('border' + side + 'Radius');
        var arr = value.split(" ");
        if (arr.length <= 1) {
            arr[1] = arr[0];
        }
        return arr.map(asInt);
    });
}

function renderableNode(node) {
    return (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE);
}

function isPositionedForStacking(container) {
    var position = container.css("position");
    var zIndex = (["absolute", "relative", "fixed"].indexOf(position) !== -1) ? container.css("zIndex") : "auto";
    return zIndex !== "auto";
}

function isPositioned(container) {
    return container.css("position") !== "static";
}

function isFloating(container) {
    return container.css("float") !== "none";
}

function isInlineBlock(container) {
    return ["inline-block", "inline-table"].indexOf(container.css("display")) !== -1;
}

function not(callback) {
    var context = this;
    return function() {
        return !callback.apply(context, arguments);
    };
}

function isElement(container) {
    return container.node.nodeType === Node.ELEMENT_NODE;
}

function isPseudoElement(container) {
    return container.isPseudoElement === true;
}

function isTextNode(container) {
    return container.node.nodeType === Node.TEXT_NODE;
}

function zIndexSort(contexts) {
    return function(a, b) {
        return (a.cssInt("zIndex") + (contexts.indexOf(a) / contexts.length)) - (b.cssInt("zIndex") + (contexts.indexOf(b) / contexts.length));
    };
}

function hasOpacity(container) {
    return container.getOpacity() < 1;
}

function bind(callback, context) {
    return function() {
        return callback.apply(context, arguments);
    };
}

function asInt(value) {
    return parseInt(value, 10);
}

function getWidth(border) {
    return border.width;
}

function nonIgnoredElement(nodeContainer) {
    return (nodeContainer.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(nodeContainer.node.nodeName) === -1);
}

function flatten(arrays) {
    return [].concat.apply([], arrays);
}

function stripQuotes(content) {
    var first = content.substr(0, 1);
    return (first === content.substr(content.length - 1) && first.match(/'|"/)) ? content.substr(1, content.length - 2) : content;
}

function getWords(characters) {
    var words = [], i = 0, onWordBoundary = false, word;
    while(characters.length) {
        if (isWordBoundary(characters[i]) === onWordBoundary) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(window.html2canvas.punycode.ucs2.encode(word));
            }
            onWordBoundary =! onWordBoundary;
            i = 0;
        } else {
            i++;
        }

        if (i >= characters.length) {
            word = characters.splice(0, i);
            if (word.length) {
                words.push(window.html2canvas.punycode.ucs2.encode(word));
            }
        }
    }
    return words;
}

function isWordBoundary(characterCode) {
    return [
        32, // <space>
        13, // \r
        10, // \n
        9, // \t
        45 // -
    ].indexOf(characterCode) !== -1;
}

function hasUnicode(string) {
    return (/[^\u0000-\u00ff]/).test(string);
}

function Proxy(src, proxyUrl, document) {
    if (!proxyUrl) {
        return Promise.reject("No proxy configured");
    }
    var callback = createCallback(supportsCORS);
    var url = createProxyUrl(proxyUrl, src, callback);

    return supportsCORS ? XHR(url) : (jsonp(document, url, callback).then(function(response) {
        return decode64(response.content);
    }));
}
var proxyCount = 0;

var supportsCORS = ('withCredentials' in new XMLHttpRequest());
var supportsCORSImage = ('crossOrigin' in new Image());

function ProxyURL(src, proxyUrl, document) {
    var callback = createCallback(supportsCORSImage);
    var url = createProxyUrl(proxyUrl, src, callback);
    return (supportsCORSImage ? Promise.resolve(url) : jsonp(document, url, callback).then(function(response) {
        return "data:" + response.type + ";base64," + response.content;
    }));
}

function jsonp(document, url, callback) {
    return new Promise(function(resolve, reject) {
        var s = document.createElement("script");
        var cleanup = function() {
            delete window.html2canvas.proxy[callback];
            document.body.removeChild(s);
        };
        window.html2canvas.proxy[callback] = function(response) {
            cleanup();
            resolve(response);
        };
        s.src = url;
        s.onerror = function(e) {
            cleanup();
            reject(e);
        };
        document.body.appendChild(s);
    });
}

function createCallback(useCORS) {
    return !useCORS ? "html2canvas_" + Date.now() + "_" + (++proxyCount) + "_" + Math.round(Math.random() * 100000) : "";
}

function createProxyUrl(proxyUrl, src, callback) {
    return proxyUrl + "?url=" + encodeURIComponent(src) + (callback.length ? "&callback=html2canvas.proxy." + callback : "");
}

function ProxyImageContainer(src, proxy) {
    var script = document.createElement("script");
    var link = document.createElement("a");
    link.href = src;
    src = link.href;
    this.src = src;
    this.image = new Image();
    var self = this;
    this.promise = new Promise(function(resolve, reject) {
        self.image.crossOrigin = "Anonymous";
        self.image.onload = resolve;
        self.image.onerror = reject;

        new ProxyURL(src, proxy, document).then(function(url) {
            self.image.src = url;
        })['catch'](reject);
    });
}

function PseudoElementContainer(node, parent, type) {
    NodeContainer.call(this, node, parent);
    this.isPseudoElement = true;
    this.before = type === ":before";
}

PseudoElementContainer.prototype.cloneTo = function(stack) {
    PseudoElementContainer.prototype.cloneTo.call(this, stack);
    stack.isPseudoElement = true;
    stack.before = this.before;
};

PseudoElementContainer.prototype = Object.create(NodeContainer.prototype);

PseudoElementContainer.prototype.appendToDOM = function() {
    if (this.before) {
        this.parent.node.insertBefore(this.node, this.parent.node.firstChild);
    } else {
        this.parent.node.appendChild(this.node);
    }
    this.parent.node.className += " " + this.getHideClass();
};

PseudoElementContainer.prototype.cleanDOM = function() {
    this.node.parentNode.removeChild(this.node);
    this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
};

PseudoElementContainer.prototype.getHideClass = function() {
    return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
};

PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
PseudoElementContainer.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";

function Renderer(width, height, images, options, document) {
    this.width = width;
    this.height = height;
    this.images = images;
    this.options = options;
    this.document = document;
}

Renderer.prototype.renderImage = function(container, bounds, borderData, imageContainer) {
    var paddingLeft = container.cssInt('paddingLeft'),
        paddingTop = container.cssInt('paddingTop'),
        paddingRight = container.cssInt('paddingRight'),
        paddingBottom = container.cssInt('paddingBottom'),
        borders = borderData.borders;

    var width = bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight);
    var height = bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom);
    this.drawImage(
        imageContainer,
        0,
        0,
        imageContainer.image.width || width,
        imageContainer.image.height || height,
        bounds.left + paddingLeft + borders[3].width,
        bounds.top + paddingTop + borders[0].width,
        width,
        height
    );
};

Renderer.prototype.renderBackground = function(container, bounds, borderData) {
    if (bounds.height > 0 && bounds.width > 0) {
        this.renderBackgroundColor(container, bounds);
        this.renderBackgroundImage(container, bounds, borderData);
    }
};

Renderer.prototype.renderBackgroundColor = function(container, bounds) {
    var color = container.color("backgroundColor");
    if (!color.isTransparent()) {
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, color);
    }
};

Renderer.prototype.renderBorders = function(borders) {
    borders.forEach(this.renderBorder, this);
};

Renderer.prototype.renderBorder = function(data) {
    if (!data.color.isTransparent() && data.args !== null) {
        this.drawShape(data.args, data.color);
    }
};

Renderer.prototype.renderBackgroundImage = function(container, bounds, borderData) {
    var backgroundImages = container.parseBackgroundImages();
    backgroundImages.reverse().forEach(function(backgroundImage, index, arr) {
        switch(backgroundImage.method) {
        case "url":
            var image = this.images.get(backgroundImage.args[0]);
            if (image) {
                this.renderBackgroundRepeating(container, bounds, image, arr.length - (index+1), borderData);
            } else {
                log("Error loading background-image", backgroundImage.args[0]);
            }
            break;
        case "linear-gradient":
        case "gradient":
            var gradientImage = this.images.get(backgroundImage.value);
            if (gradientImage) {
                this.renderBackgroundGradient(gradientImage, bounds, borderData);
            } else {
                log("Error loading background-image", backgroundImage.args[0]);
            }
            break;
        case "none":
            break;
        default:
            log("Unknown background-image type", backgroundImage.args[0]);
        }
    }, this);
};

Renderer.prototype.renderBackgroundRepeating = function(container, bounds, imageContainer, index, borderData) {
    var size = container.parseBackgroundSize(bounds, imageContainer.image, index);
    var position = container.parseBackgroundPosition(bounds, imageContainer.image, index, size);
    var repeat = container.parseBackgroundRepeat(index);
    switch (repeat) {
    case "repeat-x":
    case "repeat no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + borderData[3], bounds.top + position.top + borderData[0], 99999, size.height, borderData);
        break;
    case "repeat-y":
    case "no-repeat repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + borderData[0], size.width, 99999, borderData);
        break;
    case "no-repeat":
        this.backgroundRepeatShape(imageContainer, position, size, bounds, bounds.left + position.left + borderData[3], bounds.top + position.top + borderData[0], size.width, size.height, borderData);
        break;
    default:
        this.renderBackgroundRepeat(imageContainer, position, size, {top: bounds.top, left: bounds.left}, borderData[3], borderData[0]);
        break;
    }
};

function StackingContext(hasOwnStacking, opacity, element, parent) {
    NodeContainer.call(this, element, parent);
    this.ownStacking = hasOwnStacking;
    this.contexts = [];
    this.children = [];
    this.opacity = (this.parent ? this.parent.stack.opacity : 1) * opacity;
}

StackingContext.prototype = Object.create(NodeContainer.prototype);

StackingContext.prototype.getParentStack = function(context) {
    var parentStack = (this.parent) ? this.parent.stack : null;
    return parentStack ? (parentStack.ownStacking ? parentStack : parentStack.getParentStack(context)) : context.stack;
};

function Support(document) {
    this.rangeBounds = this.testRangeBounds(document);
    this.cors = this.testCORS();
    this.svg = this.testSVG();
}

Support.prototype.testRangeBounds = function(document) {
    var range, testElement, rangeBounds, rangeHeight, support = false;

    if (document.createRange) {
        range = document.createRange();
        if (range.getBoundingClientRect) {
            testElement = document.createElement('boundtest');
            testElement.style.height = "123px";
            testElement.style.display = "block";
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            rangeBounds = range.getBoundingClientRect();
            rangeHeight = rangeBounds.height;

            if (rangeHeight === 123) {
                support = true;
            }
            document.body.removeChild(testElement);
        }
    }

    return support;
};

Support.prototype.testCORS = function() {
    return typeof((new Image()).crossOrigin) !== "undefined";
};

Support.prototype.testSVG = function() {
    var img = new Image();
    var canvas = document.createElement("canvas");
    var ctx =  canvas.getContext("2d");
    img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch(e) {
        return false;
    }
    return true;
};

function SVGContainer(src) {
    this.src = src;
    this.image = null;
    var self = this;

    this.promise = this.hasFabric().then(function() {
        return (self.isInline(src) ? Promise.resolve(self.inlineFormatting(src)) : XHR(src));
    }).then(function(svg) {
        return new Promise(function(resolve) {
            html2canvas.fabric.loadSVGFromString(svg, self.createCanvas.call(self, resolve));
        });
    });
}

SVGContainer.prototype.hasFabric = function() {
    return !html2canvas.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve();
};

SVGContainer.prototype.inlineFormatting = function(src) {
    return (/^data:image\/svg\+xml;base64,/.test(src)) ? this.decode64(this.removeContentType(src)) : this.removeContentType(src);
};

SVGContainer.prototype.removeContentType = function(src) {
    return src.replace(/^data:image\/svg\+xml(;base64)?,/,'');
};

SVGContainer.prototype.isInline = function(src) {
    return (/^data:image\/svg\+xml/i.test(src));
};

SVGContainer.prototype.createCanvas = function(resolve) {
    var self = this;
    return function (objects, options) {
        var canvas = new html2canvas.fabric.StaticCanvas('c');
        self.image = canvas.lowerCanvasEl;
        canvas
            .setWidth(options.width)
            .setHeight(options.height)
            .add(html2canvas.fabric.util.groupSVGElements(objects, options))
            .renderAll();
        resolve(canvas.lowerCanvasEl);
    };
};

SVGContainer.prototype.decode64 = function(str) {
    return (typeof(window.atob) === "function") ? window.atob(str) : decode64(str);
};

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function decode64(base64) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var len = base64.length, i, encoded1, encoded2, encoded3, encoded4, byte1, byte2, byte3;

    var output = "";

    for (i = 0; i < len; i+=4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i+1]);
        encoded3 = chars.indexOf(base64[i+2]);
        encoded4 = chars.indexOf(base64[i+3]);

        byte1 = (encoded1 << 2) | (encoded2 >> 4);
        byte2 = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        byte3 = ((encoded3 & 3) << 6) | encoded4;
        if (encoded3 === 64) {
            output += String.fromCharCode(byte1);
        } else if (encoded4 === 64 || encoded4 === -1) {
            output += String.fromCharCode(byte1, byte2);
        } else{
            output += String.fromCharCode(byte1, byte2, byte3);
        }
    }

    return output;
}

function SVGNodeContainer(node, native) {
    this.src = node;
    this.image = null;
    var self = this;

    this.promise = native ? new Promise(function(resolve, reject) {
        self.image = new Image();
        self.image.onload = resolve;
        self.image.onerror = reject;
        self.image.src = "data:image/svg+xml," + (new XMLSerializer()).serializeToString(node);
        if (self.image.complete === true) {
            resolve(self.image);
        }
    }) : this.hasFabric().then(function() {
        return new Promise(function(resolve) {
            html2canvas.fabric.parseSVGDocument(node, self.createCanvas.call(self, resolve));
        });
    });
}

SVGNodeContainer.prototype = Object.create(SVGContainer.prototype);

function TextContainer(node, parent) {
    NodeContainer.call(this, node, parent);
}

TextContainer.prototype = Object.create(NodeContainer.prototype);

TextContainer.prototype.applyTextTransform = function() {
    this.node.data = this.transform(this.parent.css("textTransform"));
};

TextContainer.prototype.transform = function(transform) {
    var text = this.node.data;
    switch(transform){
        case "lowercase":
            return text.toLowerCase();
        case "capitalize":
            return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, capitalize);
        case "uppercase":
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }
}

function WebkitGradientContainer(imageData) {
    GradientContainer.apply(this, arguments);
    this.type = (imageData.args[0] === "linear") ? this.TYPES.LINEAR : this.TYPES.RADIAL;
}

WebkitGradientContainer.prototype = Object.create(GradientContainer.prototype);

function XHR(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });
}

function CanvasRenderer(width, height) {
    Renderer.apply(this, arguments);
    this.canvas = this.options.canvas || this.document.createElement("canvas");
    if (!this.options.canvas) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    this.ctx = this.canvas.getContext("2d");
    this.taintCtx = this.document.createElement("canvas").getContext("2d");
    this.ctx.textBaseline = "bottom";
    this.variables = {};
    log("Initialized CanvasRenderer with size", width, "x", height);
}

CanvasRenderer.prototype = Object.create(Renderer.prototype);

CanvasRenderer.prototype.setFillStyle = function(fillStyle) {
    this.ctx.fillStyle = typeof(fillStyle) === "object" && !!fillStyle.isColor ? fillStyle.toString() : fillStyle;
    return this.ctx;
};

CanvasRenderer.prototype.rectangle = function(left, top, width, height, color) {
    this.setFillStyle(color).fillRect(left, top, width, height);
};

CanvasRenderer.prototype.circle = function(left, top, size, color) {
    this.setFillStyle(color);
    this.ctx.beginPath();
    this.ctx.arc(left + size / 2, top + size / 2, size / 2, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};

CanvasRenderer.prototype.circleStroke = function(left, top, size, color, stroke, strokeColor) {
    this.circle(left, top, size, color);
    this.ctx.strokeStyle = strokeColor.toString();
    this.ctx.stroke();
};

CanvasRenderer.prototype.drawShape = function(shape, color) {
    this.shape(shape);
    this.setFillStyle(color).fill();
};

CanvasRenderer.prototype.taints = function(imageContainer) {
    if (imageContainer.tainted === null) {
        this.taintCtx.drawImage(imageContainer.image, 0, 0);
        try {
            this.taintCtx.getImageData(0, 0, 1, 1);
            imageContainer.tainted = false;
        } catch(e) {
            this.taintCtx = document.createElement("canvas").getContext("2d");
            imageContainer.tainted = true;
        }
    }

    return imageContainer.tainted;
};

CanvasRenderer.prototype.drawImage = function(imageContainer, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (!this.taints(imageContainer) || this.options.allowTaint) {
        this.ctx.drawImage(imageContainer.image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
};

CanvasRenderer.prototype.clip = function(shapes, callback, context) {
    this.ctx.save();
    shapes.filter(hasEntries).forEach(function(shape) {
        this.shape(shape).clip();
    }, this);
    callback.call(context);
    this.ctx.restore();
};

CanvasRenderer.prototype.shape = function(shape) {
    this.ctx.beginPath();
    shape.forEach(function(point, index) {
        if (point[0] === "rect") {
            this.ctx.rect.apply(this.ctx, point.slice(1));
        } else {
            this.ctx[(index === 0) ? "moveTo" : point[0] + "To" ].apply(this.ctx, point.slice(1));
        }
    }, this);
    this.ctx.closePath();
    return this.ctx;
};

CanvasRenderer.prototype.font = function(color, style, variant, weight, size, family) {
    this.setFillStyle(color).font = [style, variant, weight, size, family].join(" ").split(",")[0];
};

CanvasRenderer.prototype.fontShadow = function(color, offsetX, offsetY, blur) {
    this.setVariable("shadowColor", color.toString())
        .setVariable("shadowOffsetY", offsetX)
        .setVariable("shadowOffsetX", offsetY)
        .setVariable("shadowBlur", blur);
};

CanvasRenderer.prototype.clearShadow = function() {
    this.setVariable("shadowColor", "rgba(0,0,0,0)");
};

CanvasRenderer.prototype.setOpacity = function(opacity) {
    this.ctx.globalAlpha = opacity;
};

CanvasRenderer.prototype.setTransform = function(transform) {
    this.ctx.translate(transform.origin[0], transform.origin[1]);
    this.ctx.transform.apply(this.ctx, transform.matrix);
    this.ctx.translate(-transform.origin[0], -transform.origin[1]);
};

CanvasRenderer.prototype.setVariable = function(property, value) {
    if (this.variables[property] !== value) {
        this.variables[property] = this.ctx[property] = value;
    }

    return this;
};

CanvasRenderer.prototype.text = function(text, left, bottom) {
    this.ctx.fillText(text, left, bottom);
};

CanvasRenderer.prototype.backgroundRepeatShape = function(imageContainer, backgroundPosition, size, bounds, left, top, width, height, borderData) {
    var shape = [
        ["line", Math.round(left), Math.round(top)],
        ["line", Math.round(left + width), Math.round(top)],
        ["line", Math.round(left + width), Math.round(height + top)],
        ["line", Math.round(left), Math.round(height + top)]
    ];
    this.clip([shape], function() {
        this.renderBackgroundRepeat(imageContainer, backgroundPosition, size, bounds, borderData[3], borderData[0]);
    }, this);
};

CanvasRenderer.prototype.renderBackgroundRepeat = function(imageContainer, backgroundPosition, size, bounds, borderLeft, borderTop) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left + borderLeft), offsetY = Math.round(bounds.top + backgroundPosition.top + borderTop);
    this.setFillStyle(this.ctx.createPattern(this.resizeImage(imageContainer, size), "repeat"));
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
};

CanvasRenderer.prototype.renderBackgroundGradient = function(gradientImage, bounds) {
    if (gradientImage instanceof LinearGradientContainer) {
        var gradient = this.ctx.createLinearGradient(
            bounds.left + bounds.width * gradientImage.x0,
            bounds.top + bounds.height * gradientImage.y0,
            bounds.left +  bounds.width * gradientImage.x1,
            bounds.top +  bounds.height * gradientImage.y1);
        gradientImage.colorStops.forEach(function(colorStop) {
            gradient.addColorStop(colorStop.stop, colorStop.color.toString());
        });
        this.rectangle(bounds.left, bounds.top, bounds.width, bounds.height, gradient);
    }
};

CanvasRenderer.prototype.resizeImage = function(imageContainer, size) {
    var image = imageContainer.image;
    if(image.width === size.width && image.height === size.height) {
        return image;
    }

    var ctx, canvas = document.createElement('canvas');
    canvas.width = size.width;
    canvas.height = size.height;
    ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height );
    return canvas;
};

function hasEntries(array) {
    return array.length > 0;
}

}).call({}, typeof(window) !== "undefined" ? window : undefined, typeof(document) !== "undefined" ? document : undefined);

/*
  html2canvas 0.5.0-alpha1 <http://html2canvas.hertzen.com>
  Copyright (c) 2015 Niklas von Hertzen

  Released under MIT License
*/

(function(window, document, exports, undefined){

/* build: `node build.js modules=text,serialization,parser,gradient,pattern,shadow,freedrawing,image_filters,serialization no-es5-compat minifier=uglifyjs` */
/*! Fabric.js Copyright 2008-2014, Printio (Juriy Zaytsev, Maxim Chernyak) */

var fabric = fabric || { version: "1.4.11" };
if (typeof exports !== 'undefined') {
  exports.fabric = fabric;
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  fabric.document = document;
  fabric.window = window;
}
else {
  // assume we're running under node.js when document/window are not present
  fabric.document = require("jsdom")
    .jsdom("<!DOCTYPE html><html><head></head><body></body></html>");

  fabric.window = fabric.document.createWindow();
}

/**
 * True when in environment that supports touch events
 * @type boolean
 */
fabric.isTouchSupported = "ontouchstart" in fabric.document.documentElement;

/**
 * True when in environment that's probably Node.js
 * @type boolean
 */
fabric.isLikelyNode = typeof Buffer !== 'undefined' &&
                      typeof window === 'undefined';


/**
 * Attributes parsed from all SVG elements
 * @type array
 */
fabric.SHARED_ATTRIBUTES = [
  "display",
  "transform",
  "fill", "fill-opacity", "fill-rule",
  "opacity",
  "stroke", "stroke-dasharray", "stroke-linecap",
  "stroke-linejoin", "stroke-miterlimit",
  "stroke-opacity", "stroke-width"
];

/**
 * Pixel per Inch as a default value set to 96. Can be changed for more realistic conversion.
 */
fabric.DPI = 96;


/*!
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 */

var Cufon = (function() {

  /** @ignore */
  var api = function() {
    return api.replace.apply(null, arguments);
  };

  /** @ignore */
  var DOM = api.DOM = {

    ready: (function() {

      var complete = false, readyStatus = { loaded: 1, complete: 1 };

      var queue = [], /** @ignore */ perform = function() {
        if (complete) return;
        complete = true;
        for (var fn; fn = queue.shift(); fn());
      };

      // Gecko, Opera, WebKit r26101+

      if (fabric.document.addEventListener) {
        fabric.document.addEventListener('DOMContentLoaded', perform, false);
        fabric.window.addEventListener('pageshow', perform, false); // For cached Gecko pages
      }

      // Old WebKit, Internet Explorer

      if (!fabric.window.opera && fabric.document.readyState) (function() {
        readyStatus[fabric.document.readyState] ? perform() : setTimeout(arguments.callee, 10);
      })();

      // Internet Explorer

      if (fabric.document.readyState && fabric.document.createStyleSheet) (function() {
        try {
          fabric.document.body.doScroll('left');
          perform();
        }
        catch (e) {
          setTimeout(arguments.callee, 1);
        }
      })();

      addEvent(fabric.window, 'load', perform); // Fallback

      return function(listener) {
        if (!arguments.length) perform();
        else complete ? listener() : queue.push(listener);
      };

    })()

  };

  /** @ignore */
  var CSS = api.CSS = /** @ignore */ {

    /** @ignore */
    Size: function(value, base) {

      this.value = parseFloat(value);
      this.unit = String(value).match(/[a-z%]*$/)[0] || 'px';

      /** @ignore */
      this.convert = function(value) {
        return value / base * this.value;
      };

      /** @ignore */
      this.convertFrom = function(value) {
        return value / this.value * base;
      };

      /** @ignore */
      this.toString = function() {
        return this.value + this.unit;
      };

    },

    /** @ignore */
    getStyle: function(el) {
      return new Style(el.style);
      /*
      var view = document.defaultView;
      if (view && view.getComputedStyle) return new Style(view.getComputedStyle(el, null));
      if (el.currentStyle) return new Style(el.currentStyle);
      return new Style(el.style);
      */
    },

    quotedList: cached(function(value) {
      // doesn't work properly with empty quoted strings (""), but
      // it's not worth the extra code.
      var list = [], re = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g, match;
      while (match = re.exec(value)) list.push(match[3] || match[1]);
      return list;
    }),

    ready: (function() {

      var complete = false;

      var queue = [], perform = function() {
        complete = true;
        for (var fn; fn = queue.shift(); fn());
      };

      // Safari 2 does not include <style> elements in document.styleSheets.
      // Safari 2 also does not support Object.prototype.propertyIsEnumerable.

      var styleElements = Object.prototype.propertyIsEnumerable ? elementsByTagName('style') : { length: 0 };
      var linkElements = elementsByTagName('link');

      DOM.ready(function() {
        // These checks are actually only needed for WebKit-based browsers, but don't really hurt other browsers.
        var linkStyles = 0, link;
        for (var i = 0, l = linkElements.length; link = linkElements[i], i < l; ++i) {
          // WebKit does not load alternate stylesheets.
          if (!link.disabled && link.rel.toLowerCase() == 'stylesheet') ++linkStyles;
        }
        if (fabric.document.styleSheets.length >= styleElements.length + linkStyles) perform();
        else setTimeout(arguments.callee, 10);
      });

      return function(listener) {
        if (complete) listener();
        else queue.push(listener);
      };

    })(),

    /** @ignore */
    supports: function(property, value) {
      var checker = fabric.document.createElement('span').style;
      if (checker[property] === undefined) return false;
      checker[property] = value;
      return checker[property] === value;
    },

    /** @ignore */
    textAlign: function(word, style, position, wordCount) {
      if (style.get('textAlign') == 'right') {
        if (position > 0) word = ' ' + word;
      }
      else if (position < wordCount - 1) word += ' ';
      return word;
    },

    /** @ignore */
    textDecoration: function(el, style) {
      if (!style) style = this.getStyle(el);
      var types = {
        underline: null,
        overline: null,
        'line-through': null
      };
      for (var search = el; search.parentNode && search.parentNode.nodeType == 1; ) {
        var foundAll = true;
        for (var type in types) {
          if (types[type]) continue;
          if (style.get('textDecoration').indexOf(type) != -1) types[type] = style.get('color');
          foundAll = false;
        }
        if (foundAll) break; // this is rather unlikely to happen
        style = this.getStyle(search = search.parentNode);
      }
      return types;
    },

    textShadow: cached(function(value) {
      if (value == 'none') return null;
      var shadows = [], currentShadow = {}, result, offCount = 0;
      var re = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
      while (result = re.exec(value)) {
        if (result[0] == ',') {
          shadows.push(currentShadow);
          currentShadow = {}, offCount = 0;
        }
        else if (result[1]) {
          currentShadow.color = result[1];
        }
        else {
          currentShadow[[ 'offX', 'offY', 'blur' ][offCount++]] = result[2];
        }
      }
      shadows.push(currentShadow);
      return shadows;
    }),

    color: cached(function(value) {
      var parsed = {};
      parsed.color = value.replace(/^rgba\((.*?),\s*([\d.]+)\)/, function($0, $1, $2) {
        parsed.opacity = parseFloat($2);
        return 'rgb(' + $1 + ')';
      });
      return parsed;
    }),

    /** @ignore */
    textTransform: function(text, style) {
      return text[{
        uppercase: 'toUpperCase',
        lowercase: 'toLowerCase'
      }[style.get('textTransform')] || 'toString']();
    }

  };

  function Font(data) {

    var face = this.face = data.face;
    this.glyphs = data.glyphs;
    this.w = data.w;
    this.baseSize = parseInt(face['units-per-em'], 10);

    this.family = face['font-family'].toLowerCase();
    this.weight = face['font-weight'];
    this.style = face['font-style'] || 'normal';

    this.viewBox = (function () {
      var parts = face.bbox.split(/\s+/);
      var box = {
        minX: parseInt(parts[0], 10),
        minY: parseInt(parts[1], 10),
        maxX: parseInt(parts[2], 10),
        maxY: parseInt(parts[3], 10)
      };
      box.width = box.maxX - box.minX,
      box.height = box.maxY - box.minY;
      /** @ignore */
      box.toString = function() {
        return [ this.minX, this.minY, this.width, this.height ].join(' ');
      };
      return box;
    })();

    this.ascent = -parseInt(face.ascent, 10);
    this.descent = -parseInt(face.descent, 10);

    this.height = -this.ascent + this.descent;

  }

  function FontFamily() {

    var styles = {}, mapping = {
      oblique: 'italic',
      italic: 'oblique'
    };

    this.add = function(font) {
      (styles[font.style] || (styles[font.style] = {}))[font.weight] = font;
    };

    /** @ignore */
    this.get = function(style, weight) {
      var weights = styles[style] || styles[mapping[style]]
        || styles.normal || styles.italic || styles.oblique;
      if (!weights) return null;
      // we don't have to worry about "bolder" and "lighter"
      // because IE's currentStyle returns a numeric value for it,
      // and other browsers use the computed value anyway
      weight = {
        normal: 400,
        bold: 700
      }[weight] || parseInt(weight, 10);
      if (weights[weight]) return weights[weight];
      // http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight
      // Gecko uses x99/x01 for lighter/bolder
      var up = {
        1: 1,
        99: 0
      }[weight % 100], alts = [], min, max;
      if (up === undefined) up = weight > 400;
      if (weight == 500) weight = 400;
      for (var alt in weights) {
        alt = parseInt(alt, 10);
        if (!min || alt < min) min = alt;
        if (!max || alt > max) max = alt;
        alts.push(alt);
      }
      if (weight < min) weight = min;
      if (weight > max) weight = max;
      alts.sort(function(a, b) {
        return (up
          ? (a > weight && b > weight) ? a < b : a > b
          : (a < weight && b < weight) ? a > b : a < b) ? -1 : 1;
      });
      return weights[alts[0]];
    };

  }

  function HoverHandler() {

    function contains(node, anotherNode) {
      if (node.contains) return node.contains(anotherNode);
      return node.compareDocumentPosition(anotherNode) & 16;
    }

    function onOverOut(e) {
      var related = e.relatedTarget;
      if (!related || contains(this, related)) return;
      trigger(this);
    }

    function onEnterLeave(e) {
      trigger(this);
    }

    function trigger(el) {
      // A timeout is needed so that the event can actually "happen"
      // before replace is triggered. This ensures that styles are up
      // to date.
      setTimeout(function() {
        api.replace(el, sharedStorage.get(el).options, true);
      }, 10);
    }

    this.attach = function(el) {
      if (el.onmouseenter === undefined) {
        addEvent(el, 'mouseover', onOverOut);
        addEvent(el, 'mouseout', onOverOut);
      }
      else {
        addEvent(el, 'mouseenter', onEnterLeave);
        addEvent(el, 'mouseleave', onEnterLeave);
      }
    };

  }

  function Storage() {

    var map = {}, at = 0;

    function identify(el) {
      return el.cufid || (el.cufid = ++at);
    }

    /** @ignore */
    this.get = function(el) {
      var id = identify(el);
      return map[id] || (map[id] = {});
    };

  }

  function Style(style) {

    var custom = {}, sizes = {};

    this.get = function(property) {
      return custom[property] != undefined ? custom[property] : style[property];
    };

    this.getSize = function(property, base) {
      return sizes[property] || (sizes[property] = new CSS.Size(this.get(property), base));
    };

    this.extend = function(styles) {
      for (var property in styles) custom[property] = styles[property];
      return this;
    };

  }

  function addEvent(el, type, listener) {
    if (el.addEventListener) {
      el.addEventListener(type, listener, false);
    }
    else if (el.attachEvent) {
      el.attachEvent('on' + type, function() {
        return listener.call(el, fabric.window.event);
      });
    }
  }

  function attach(el, options) {
    var storage = sharedStorage.get(el);
    if (storage.options) return el;
    if (options.hover && options.hoverables[el.nodeName.toLowerCase()]) {
      hoverHandler.attach(el);
    }
    storage.options = options;
    return el;
  }

  function cached(fun) {
    var cache = {};
    return function(key) {
      if (!cache.hasOwnProperty(key)) cache[key] = fun.apply(null, arguments);
      return cache[key];
    };
  }

  function getFont(el, style) {
    if (!style) style = CSS.getStyle(el);
    var families = CSS.quotedList(style.get('fontFamily').toLowerCase()), family;
    for (var i = 0, l = families.length; i < l; ++i) {
      family = families[i];
      if (fonts[family]) return fonts[family].get(style.get('fontStyle'), style.get('fontWeight'));
    }
    return null;
  }

  function elementsByTagName(query) {
    return fabric.document.getElementsByTagName(query);
  }

  function merge() {
    var merged = {}, key;
    for (var i = 0, l = arguments.length; i < l; ++i) {
      for (key in arguments[i]) merged[key] = arguments[i][key];
    }
    return merged;
  }

  function process(font, text, style, options, node, el) {

    var separate = options.separate;
    if (separate == 'none') return engines[options.engine].apply(null, arguments);
    var fragment = fabric.document.createDocumentFragment(), processed;
    var parts = text.split(separators[separate]), needsAligning = (separate == 'words');
    if (needsAligning && HAS_BROKEN_REGEXP) {
      // @todo figure out a better way to do this
      if (/^\s/.test(text)) parts.unshift('');
      if (/\s$/.test(text)) parts.push('');
    }
    for (var i = 0, l = parts.length; i < l; ++i) {
      processed = engines[options.engine](font,
        needsAligning ? CSS.textAlign(parts[i], style, i, l) : parts[i],
        style, options, node, el, i < l - 1);
      if (processed) fragment.appendChild(processed);
    }
    return fragment;
  }

  /** @ignore */
  function replaceElement(el, options) {
    var font, style, nextNode, redraw;
    for (var node = attach(el, options).firstChild; node; node = nextNode) {
      nextNode = node.nextSibling;
      redraw = false;
      if (node.nodeType == 1) {
        if (!node.firstChild) continue;
        if (!/cufon/.test(node.className)) {
          arguments.callee(node, options);
          continue;
        }
        else redraw = true;
      }
      if (!style) style = CSS.getStyle(el).extend(options);
      if (!font) font = getFont(el, style);

      if (!font) continue;
      if (redraw) {
        engines[options.engine](font, null, style, options, node, el);
        continue;
      }
      var text = node.data;
      //for some reason, the carriage return is not stripped by IE but "\n" is, so let's keep \r as a new line marker...
      if (typeof G_vmlCanvasManager != 'undefined') {
          text = text.replace(/\r/g, "\n");
      }
      if (text === '') continue;
      var processed = process(font, text, style, options, node, el);
      if (processed) node.parentNode.replaceChild(processed, node);
      else node.parentNode.removeChild(node);
    }
  }

  var HAS_BROKEN_REGEXP = ' '.split(/\s+/).length == 0;

  var sharedStorage = new Storage();
  var hoverHandler = new HoverHandler();
  var replaceHistory = [];

  var engines = {}, fonts = {}, defaultOptions = {
    engine: null,
    //fontScale: 1,
    //fontScaling: false,
    hover: false,
    hoverables: {
      a: true
    },
    printable: true,
    //rotation: 0,
    //selectable: false,
    selector: (
        fabric.window.Sizzle
      ||  (fabric.window.jQuery && function(query) { return jQuery(query); }) // avoid noConflict issues
      ||  (fabric.window.dojo && dojo.query)
      ||  (fabric.window.$$ && function(query) { return $$(query); })
      ||  (fabric.window.$ && function(query) { return $(query); })
      ||  (fabric.document.querySelectorAll && function(query) { return fabric.document.querySelectorAll(query); })
      ||  elementsByTagName
    ),
    separate: 'words', // 'none' and 'characters' are also accepted
    textShadow: 'none'
  };

  var separators = {
    words: /\s+/,
    characters: ''
  };

  /** @ignore */
  api.now = function() {
    DOM.ready();
    return api;
  };

  /** @ignore */
  api.refresh = function() {
    var currentHistory = replaceHistory.splice(0, replaceHistory.length);
    for (var i = 0, l = currentHistory.length; i < l; ++i) {
      api.replace.apply(null, currentHistory[i]);
    }
    return api;
  };

  /** @ignore */
  api.registerEngine = function(id, engine) {
    if (!engine) return api;
    engines[id] = engine;
    return api.set('engine', id);
  };

  /** @ignore */
  api.registerFont = function(data) {
    var font = new Font(data), family = font.family;
    if (!fonts[family]) fonts[family] = new FontFamily();
    fonts[family].add(font);
    return api.set('fontFamily', '"' + family + '"');
  };

  /** @ignore */
  api.replace = function(elements, options, ignoreHistory) {
    options = merge(defaultOptions, options);
    if (!options.engine) return api; // there's no browser support so we'll just stop here
    if (typeof options.textShadow == 'string' && options.textShadow)
      options.textShadow = CSS.textShadow(options.textShadow);
    if (!ignoreHistory) replaceHistory.push(arguments);
    if (elements.nodeType || typeof elements == 'string') elements = [ elements ];
    CSS.ready(function() {
      for (var i = 0, l = elements.length; i < l; ++i) {
        var el = elements[i];
        if (typeof el == 'string') api.replace(options.selector(el), options, true);
        else replaceElement(el, options);
      }
    });
    return api;
  };

  /** @ignore */
  api.replaceElement = function(el, options) {
    options = merge(defaultOptions, options);
    if (typeof options.textShadow == 'string' && options.textShadow)
      options.textShadow = CSS.textShadow(options.textShadow);
    return replaceElement(el, options);
  };

  api.engines = engines;
  api.fonts = fonts;
  /** @ignore */
  api.getOptions = function() {
    return merge(defaultOptions);
  };

  /** @ignore */
  api.set = function(option, value) {
    defaultOptions[option] = value;
    return api;
  };

  return api;

})();

Cufon.registerEngine('canvas', (function() {

  // Safari 2 doesn't support .apply() on native methods
  var HAS_INLINE_BLOCK = Cufon.CSS.supports('display', 'inline-block');

  // Firefox 2 w/ non-strict doctype (almost standards mode)
  var HAS_BROKEN_LINEHEIGHT = !HAS_INLINE_BLOCK && (fabric.document.compatMode == 'BackCompat' || /frameset|transitional/i.test(fabric.document.doctype.publicId));

  var styleSheet = fabric.document.createElement('style');
  styleSheet.type = 'text/css';

    var textNode = fabric.document.createTextNode(
        '.cufon-canvas{text-indent:0}' +
        '@media screen,projection{' +
          '.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle' +
          (HAS_BROKEN_LINEHEIGHT
            ? ''
            : ';font-size:1px;line-height:1px') +
          '}.cufon-canvas .cufon-alt{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden}' +
          (HAS_INLINE_BLOCK
            ? '.cufon-canvas canvas{position:relative}'
            : '.cufon-canvas canvas{position:absolute}') +
        '}' +
        '@media print{' +
          '.cufon-canvas{padding:0 !important}' +
          '.cufon-canvas canvas{display:none}' +
          '.cufon-canvas .cufon-alt{display:inline}' +
        '}'
      )

  try {
      styleSheet.appendChild(textNode);
  } catch(e) {
      //IE8- can't do this...
      styleSheet.setAttribute("type", "text/css");
      styleSheet.styleSheet.cssText = textNode.data;
  }
  fabric.document.getElementsByTagName('head')[0].appendChild(styleSheet);

  function generateFromVML(path, context) {
    var atX = 0, atY = 0;
    var code = [], re = /([mrvxe])([^a-z]*)/g, match;
    generate: for (var i = 0; match = re.exec(path); ++i) {
      var c = match[2].split(',');
      switch (match[1]) {
        case 'v':
          code[i] = { m: 'bezierCurveTo', a: [ atX + ~~c[0], atY + ~~c[1], atX + ~~c[2], atY + ~~c[3], atX += ~~c[4], atY += ~~c[5] ] };
          break;
        case 'r':
          code[i] = { m: 'lineTo', a: [ atX += ~~c[0], atY += ~~c[1] ] };
          break;
        case 'm':
          code[i] = { m: 'moveTo', a: [ atX = ~~c[0], atY = ~~c[1] ] };
          break;
        case 'x':
          code[i] = { m: 'closePath', a: [] };
          break;
        case 'e':
          break generate;
      }
      context[code[i].m].apply(context, code[i].a);
    }
    return code;
  }

  function interpret(code, context) {
    for (var i = 0, l = code.length; i < l; ++i) {
      var line = code[i];
      context[line.m].apply(context, line.a);
    }
  }

  return function(font, text, style, options, node, el) {

    var redraw = (text === null);

    var viewBox = font.viewBox;

    var size = style.getSize('fontSize', font.baseSize);

    var letterSpacing = style.get('letterSpacing');
    letterSpacing = (letterSpacing == 'normal') ? 0 : size.convertFrom(parseInt(letterSpacing, 10));

    var expandTop = 0, expandRight = 0, expandBottom = 0, expandLeft = 0;
    var shadows = options.textShadow, shadowOffsets = [];

    Cufon.textOptions.shadowOffsets = [ ];
    Cufon.textOptions.shadows = null;

    if (shadows) {
      Cufon.textOptions.shadows = shadows;
      for (var i = 0, l = shadows.length; i < l; ++i) {
        var shadow = shadows[i];
        var x = size.convertFrom(parseFloat(shadow.offX));
        var y = size.convertFrom(parseFloat(shadow.offY));
        shadowOffsets[i] = [ x, y ];
        //if (y < expandTop) expandTop = y;
        //if (x > expandRight) expandRight = x;
        //if (y > expandBottom) expandBottom = y;
        //if (x < expandLeft) expandLeft = x;
      }
    }

    var chars = Cufon.CSS.textTransform(redraw ? node.alt : text, style).split('');

    var width = 0, lastWidth = null;

    var maxWidth = 0, lines = 1, lineWidths = [ ];
    for (var i = 0, l = chars.length; i < l; ++i) {
      if (chars[i] === '\n') {
        lines++;
        if (width > maxWidth) {
          maxWidth = width;
        }
        lineWidths.push(width);
        width = 0;
        continue;
      }
      var glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (!glyph) continue;
      width += lastWidth = Number(glyph.w || font.w) + letterSpacing;
    }
    lineWidths.push(width);

    width = Math.max(maxWidth, width);

    var lineOffsets = [ ];
    for (var i = lineWidths.length; i--; ) {
      lineOffsets[i] = width - lineWidths[i];
    }

    if (lastWidth === null) return null; // there's nothing to render

    expandRight += (viewBox.width - lastWidth);
    expandLeft += viewBox.minX;

    var wrapper, canvas;

    if (redraw) {
      wrapper = node;
      canvas = node.firstChild;
    }
    else {
      wrapper = fabric.document.createElement('span');
      wrapper.className = 'cufon cufon-canvas';
      wrapper.alt = text;

      canvas = fabric.document.createElement('canvas');
      wrapper.appendChild(canvas);

      if (options.printable) {
        var print = fabric.document.createElement('span');
        print.className = 'cufon-alt';
        print.appendChild(fabric.document.createTextNode(text));
        wrapper.appendChild(print);
      }
    }

    var wStyle = wrapper.style;
    var cStyle = canvas.style || { };

    var height = size.convert(viewBox.height - expandTop + expandBottom);
    var roundedHeight = Math.ceil(height);
    var roundingFactor = roundedHeight / height;

    canvas.width = Math.ceil(size.convert(width + expandRight - expandLeft) * roundingFactor);
    canvas.height = roundedHeight;

    expandTop += viewBox.minY;

    cStyle.top = Math.round(size.convert(expandTop - font.ascent)) + 'px';
    cStyle.left = Math.round(size.convert(expandLeft)) + 'px';

    var _width = Math.ceil(size.convert(width * roundingFactor));
    var wrapperWidth = _width + 'px';
    var _height = size.convert(font.height);
    var totalLineHeight = (options.lineHeight - 1) * size.convert(-font.ascent / 5) * (lines - 1);

    Cufon.textOptions.width = _width;
    Cufon.textOptions.height = (_height * lines) + totalLineHeight;
    Cufon.textOptions.lines = lines;
    Cufon.textOptions.totalLineHeight = totalLineHeight;

    if (HAS_INLINE_BLOCK) {
      wStyle.width = wrapperWidth;
      wStyle.height = _height + 'px';
    }
    else {
      wStyle.paddingLeft = wrapperWidth;
      wStyle.paddingBottom = (_height - 1) + 'px';
    }

    var g = Cufon.textOptions.context || canvas.getContext('2d'),
        scale = roundedHeight / viewBox.height;

    Cufon.textOptions.fontAscent = font.ascent * scale;
    Cufon.textOptions.boundaries = null;

    for (var offsets = Cufon.textOptions.shadowOffsets, i = shadowOffsets.length; i--; ) {
      offsets[i] = [ shadowOffsets[i][0] * scale, shadowOffsets[i][1] * scale ];
    }

    g.save();
    g.scale(scale, scale);

    g.translate(
      // we're at the center of an object and need to jump to the top left corner
      // where first character is to be drawn
      -expandLeft - ((1/scale * canvas.width) / 2) + (Cufon.fonts[font.family].offsetLeft || 0),
      -expandTop - ((Cufon.textOptions.height / scale) / 2) + (Cufon.fonts[font.family].offsetTop || 0)
    );

    g.lineWidth = font.face['underline-thickness'];

    g.save();

    function line(y, color) {
      g.strokeStyle = color;

      g.beginPath();

      g.moveTo(0, y);
      g.lineTo(width, y);

      g.stroke();
    }

    var textDecoration = Cufon.getTextDecoration(options),
        isItalic = options.fontStyle === 'italic';

    function renderBackground() {
      g.save();

      var left = 0, lineNum = 0, boundaries = [{ left: 0 }];

      if (options.backgroundColor) {
        g.save();
        g.fillStyle = options.backgroundColor;
        g.translate(0, font.ascent);
        g.fillRect(0, 0, width + 10, (-font.ascent + font.descent) * lines);
        g.restore();
      }

      if (options.textAlign === 'right') {
        g.translate(lineOffsets[lineNum], 0);
        boundaries[0].left = lineOffsets[lineNum] * scale;
      }
      else if (options.textAlign === 'center') {
        g.translate(lineOffsets[lineNum] / 2, 0);
        boundaries[0].left = lineOffsets[lineNum] / 2 * scale;
      }

      for (var i = 0, l = chars.length; i < l; ++i) {
        if (chars[i] === '\n') {

          lineNum++;

          var topOffset = -font.ascent - ((font.ascent / 5) * options.lineHeight);
          var boundary = boundaries[boundaries.length - 1];
          var nextBoundary = { left: 0 };

          boundary.width = left * scale;
          boundary.height = (-font.ascent + font.descent) * scale;

          if (options.textAlign === 'right') {
            g.translate(-width, topOffset);
            g.translate(lineOffsets[lineNum], 0);
            nextBoundary.left = lineOffsets[lineNum] * scale;
          }
          else if (options.textAlign === 'center') {
            // offset to the start of text in previous line AND half of its offset
            // (essentially moving caret to the left edge of bounding box)
            g.translate(-left - (lineOffsets[lineNum - 1] / 2), topOffset);
            g.translate(lineOffsets[lineNum] / 2, 0);
            nextBoundary.left = lineOffsets[lineNum] / 2 * scale;
          }
          else {
            g.translate(-left, topOffset);
          }

          /* push next boundary (for the next line) */
          boundaries.push(nextBoundary);

          left = 0;

          continue;
        }
        var glyph = font.glyphs[chars[i]] || font.missingGlyph;
        if (!glyph) continue;

        var charWidth = Number(glyph.w || font.w) + letterSpacing;

        // only draw text-background when there's some kind of value
        if (options.textBackgroundColor) {
          g.save();
          g.fillStyle = options.textBackgroundColor;
          g.translate(0, font.ascent);
          g.fillRect(0, 0, charWidth + 10, -font.ascent + font.descent);
          g.restore();
        }

        g.translate(charWidth, 0);
        left += charWidth;

        if (i == l-1) {
          boundaries[boundaries.length - 1].width = left * scale;
          boundaries[boundaries.length - 1].height = (-font.ascent + font.descent) * scale;
        }
      }
      g.restore();

      Cufon.textOptions.boundaries = boundaries;
    }

    function renderText(color) {
      g.fillStyle = color || Cufon.textOptions.color || style.get('color');

      var left = 0, lineNum = 0;

      if (options.textAlign === 'right') {
        g.translate(lineOffsets[lineNum], 0);
      }
      else if (options.textAlign === 'center') {
        g.translate(lineOffsets[lineNum] / 2, 0);
      }

      for (var i = 0, l = chars.length; i < l; ++i) {
        if (chars[i] === '\n') {

          lineNum++;

          var topOffset = -font.ascent - ((font.ascent / 5) * options.lineHeight);

          if (options.textAlign === 'right') {
            g.translate(-width, topOffset);
            g.translate(lineOffsets[lineNum], 0);
          }
          else if (options.textAlign === 'center') {
            // offset to the start of text in previous line AND half of its offset
            // (essentially moving caret to the left edge of bounding box)
            g.translate(-left - (lineOffsets[lineNum - 1] / 2), topOffset);
            g.translate(lineOffsets[lineNum] / 2, 0);
          }
          else {
            g.translate(-left, topOffset);
          }

          left = 0;

          continue;
        }
        var glyph = font.glyphs[chars[i]] || font.missingGlyph;
        if (!glyph) continue;

        var charWidth = Number(glyph.w || font.w) + letterSpacing;

        if (textDecoration) {
          g.save();
          g.strokeStyle = g.fillStyle;

          // add 2x more thickness — closer to SVG rendering
          g.lineWidth += g.lineWidth;

          g.beginPath();
          if (textDecoration.underline) {
            g.moveTo(0, -font.face['underline-position'] + 0.5);
            g.lineTo(charWidth, -font.face['underline-position'] + 0.5);
          }
          if (textDecoration.overline) {
            g.moveTo(0, font.ascent + 0.5);
            g.lineTo(charWidth, font.ascent + 0.5);
          }
          if (textDecoration['line-through']) {
            g.moveTo(0, -font.descent + 0.5);
            g.lineTo(charWidth, -font.descent + 0.5);
          }
          g.stroke();
          g.restore();
        }

        if (isItalic) {
          g.save();
          g.transform(1, 0, -0.25, 1, 0, 0);
        }

        g.beginPath();
        if (glyph.d) {
          if (glyph.code) interpret(glyph.code, g);
          else glyph.code = generateFromVML('m' + glyph.d, g);
        }

        g.fill();

        if (options.strokeStyle) {
          g.closePath();
          g.save();
          g.lineWidth = options.strokeWidth;
          g.strokeStyle = options.strokeStyle;
          g.stroke();
          g.restore();
        }

        if (isItalic) {
          g.restore();
        }

        g.translate(charWidth, 0);
        left += charWidth;
      }
    }

    g.save();
    renderBackground();
    if (shadows) {
      for (var i = 0, l = shadows.length; i < l; ++i) {
        var shadow = shadows[i];
        g.save();
        g.translate.apply(g, shadowOffsets[i]);
        renderText(shadow.color);
        g.restore();
      }
    }
    renderText();
    g.restore();
    g.restore();
    g.restore();

    return wrapper;

  };

})());

Cufon.registerEngine('vml', (function() {

  if (!fabric.document.namespaces) return;

  var canvasEl = fabric.document.createElement('canvas');
  if (canvasEl && canvasEl.getContext && canvasEl.getContext.apply) return;

  if (fabric.document.namespaces.cvml == null) {
    fabric.document.namespaces.add('cvml', 'urn:schemas-microsoft-com:vml');
  }

  var check = fabric.document.createElement('cvml:shape');
  check.style.behavior = 'url(#default#VML)';
  if (!check.coordsize) return; // VML isn't supported
  check = null;

  fabric.document.write('<style type="text/css">' +
    '.cufon-vml-canvas{text-indent:0}' +
    '@media screen{' +
      'cvml\\:shape,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute}' +
      '.cufon-vml-canvas{position:absolute;text-align:left}' +
      '.cufon-vml{display:inline-block;position:relative;vertical-align:middle}' +
      '.cufon-vml .cufon-alt{position:absolute;left:-10000in;font-size:1px}' +
      'a .cufon-vml{cursor:pointer}' +
    '}' +
    '@media print{' +
      '.cufon-vml *{display:none}' +
      '.cufon-vml .cufon-alt{display:inline}' +
    '}' +
  '</style>');

  function getFontSizeInPixels(el, value) {
    return getSizeInPixels(el, /(?:em|ex|%)$/i.test(value) ? '1em' : value);
  }

  // Original by Dead Edwards.
  // Combined with getFontSizeInPixels it also works with relative units.
  function getSizeInPixels(el, value) {
    if (/px$/i.test(value)) return parseFloat(value);
    var style = el.style.left, runtimeStyle = el.runtimeStyle.left;
    el.runtimeStyle.left = el.currentStyle.left;
    el.style.left = value;
    var result = el.style.pixelLeft;
    el.style.left = style;
    el.runtimeStyle.left = runtimeStyle;
    return result;
  }

  return function(font, text, style, options, node, el, hasNext) {
    var redraw = (text === null);

    if (redraw) text = node.alt;

    // @todo word-spacing, text-decoration

    var viewBox = font.viewBox;

    var size = style.computedFontSize ||
      (style.computedFontSize = new Cufon.CSS.Size(getFontSizeInPixels(el, style.get('fontSize')) + 'px', font.baseSize));

    var letterSpacing = style.computedLSpacing;

    if (letterSpacing == undefined) {
      letterSpacing = style.get('letterSpacing');
      style.computedLSpacing = letterSpacing =
        (letterSpacing == 'normal') ? 0 : ~~size.convertFrom(getSizeInPixels(el, letterSpacing));
    }

    var wrapper, canvas;

    if (redraw) {
      wrapper = node;
      canvas = node.firstChild;
    }
    else {
      wrapper = fabric.document.createElement('span');
      wrapper.className = 'cufon cufon-vml';
      wrapper.alt = text;

      canvas = fabric.document.createElement('span');
      canvas.className = 'cufon-vml-canvas';
      wrapper.appendChild(canvas);

      if (options.printable) {
        var print = fabric.document.createElement('span');
        print.className = 'cufon-alt';
        print.appendChild(fabric.document.createTextNode(text));
        wrapper.appendChild(print);
      }

      // ie6, for some reason, has trouble rendering the last VML element in the document.
      // we can work around this by injecting a dummy element where needed.
      // @todo find a better solution
      if (!hasNext) wrapper.appendChild(fabric.document.createElement('cvml:shape'));
    }

    var wStyle = wrapper.style;
    var cStyle = canvas.style;

    var height = size.convert(viewBox.height), roundedHeight = Math.ceil(height);
    var roundingFactor = roundedHeight / height;
    var minX = viewBox.minX, minY = viewBox.minY;

    cStyle.height = roundedHeight;
    cStyle.top = Math.round(size.convert(minY - font.ascent));
    cStyle.left = Math.round(size.convert(minX));

    wStyle.height = size.convert(font.height) + 'px';

    var textDecoration = Cufon.getTextDecoration(options);

    var color = style.get('color');

    var chars = Cufon.CSS.textTransform(text, style).split('');

    var width = 0, offsetX = 0, advance = null;

    var glyph, shape, shadows = options.textShadow;

    // pre-calculate width
    for (var i = 0, k = 0, l = chars.length; i < l; ++i) {
      glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (glyph) width += advance = ~~(glyph.w || font.w) + letterSpacing;
    }

    if (advance === null) return null;

    var fullWidth = -minX + width + (viewBox.width - advance);

    var shapeWidth = size.convert(fullWidth * roundingFactor), roundedShapeWidth = Math.round(shapeWidth);

    var coordSize = fullWidth + ',' + viewBox.height, coordOrigin;
    var stretch = 'r' + coordSize + 'nsnf';

    for (i = 0; i < l; ++i) {

      glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (!glyph) continue;

      if (redraw) {
        // some glyphs may be missing so we can't use i
        shape = canvas.childNodes[k];
        if (shape.firstChild) shape.removeChild(shape.firstChild); // shadow
      }
      else {
        shape = fabric.document.createElement('cvml:shape');
        canvas.appendChild(shape);
      }

      shape.stroked = 'f';
      shape.coordsize = coordSize;
      shape.coordorigin = coordOrigin = (minX - offsetX) + ',' + minY;
      shape.path = (glyph.d ? 'm' + glyph.d + 'xe' : '') + 'm' + coordOrigin + stretch;
      shape.fillcolor = color;

      // it's important to not set top/left or IE8 will grind to a halt
      var sStyle = shape.style;
      sStyle.width = roundedShapeWidth;
      sStyle.height = roundedHeight;

      if (shadows) {
        // due to the limitations of the VML shadow element there
        // can only be two visible shadows. opacity is shared
        // for all shadows.
        var shadow1 = shadows[0], shadow2 = shadows[1];
        var color1 = Cufon.CSS.color(shadow1.color), color2;
        var shadow = fabric.document.createElement('cvml:shadow');
        shadow.on = 't';
        shadow.color = color1.color;
        shadow.offset = shadow1.offX + ',' + shadow1.offY;
        if (shadow2) {
          color2 = Cufon.CSS.color(shadow2.color);
          shadow.type = 'double';
          shadow.color2 = color2.color;
          shadow.offset2 = shadow2.offX + ',' + shadow2.offY;
        }
        shadow.opacity = color1.opacity || (color2 && color2.opacity) || 1;
        shape.appendChild(shadow);
      }

      offsetX += ~~(glyph.w || font.w) + letterSpacing;

      ++k;

    }

    wStyle.width = Math.max(Math.ceil(size.convert(width * roundingFactor)), 0);

    return wrapper;

  };

})());

Cufon.getTextDecoration = function(options) {
  return {
    underline: options.textDecoration === 'underline',
    overline: options.textDecoration === 'overline',
    'line-through': options.textDecoration === 'line-through'
  };
};

if (typeof exports != 'undefined') {
  exports.Cufon = Cufon;
}


/*
    json2.js
    2014-02-04

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx,
        escapable,
        gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


(function(){

  /**
   * @private
   * @param {String} eventName
   * @param {Function} handler
   */
  function _removeEventListener(eventName, handler) {
    if (!this.__eventListeners[eventName]) {
      return;
    }

    if (handler) {
      fabric.util.removeFromArray(this.__eventListeners[eventName], handler);
    }
    else {
      this.__eventListeners[eventName].length = 0;
    }
  }

  /**
   * Observes specified event
   * @deprecated `observe` deprecated since 0.8.34 (use `on` instead)
   * @memberOf fabric.Observable
   * @alias on
   * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
   * @param {Function} handler Function that receives a notification when an event of the specified type occurs
   * @return {Self} thisArg
   * @chainable
   */
  function observe(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = { };
    }
    // one object with key/value pairs was passed
    if (arguments.length === 1) {
      for (var prop in eventName) {
        this.on(prop, eventName[prop]);
      }
    }
    else {
      if (!this.__eventListeners[eventName]) {
        this.__eventListeners[eventName] = [ ];
      }
      this.__eventListeners[eventName].push(handler);
    }
    return this;
  }

  /**
   * Stops event observing for a particular event handler. Calling this method
   * without arguments removes all handlers for all events
   * @deprecated `stopObserving` deprecated since 0.8.34 (use `off` instead)
   * @memberOf fabric.Observable
   * @alias off
   * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
   * @param {Function} handler Function to be deleted from EventListeners
   * @return {Self} thisArg
   * @chainable
   */
  function stopObserving(eventName, handler) {
    if (!this.__eventListeners) {
      return;
    }

    // remove all key/value pairs (event name -> event handler)
    if (arguments.length === 0) {
      this.__eventListeners = { };
    }
    // one object with key/value pairs was passed
    else if (arguments.length === 1 && typeof arguments[0] === 'object') {
      for (var prop in eventName) {
        _removeEventListener.call(this, prop, eventName[prop]);
      }
    }
    else {
      _removeEventListener.call(this, eventName, handler);
    }
    return this;
  }

  /**
   * Fires event with an optional options object
   * @deprecated `fire` deprecated since 1.0.7 (use `trigger` instead)
   * @memberOf fabric.Observable
   * @alias trigger
   * @param {String} eventName Event name to fire
   * @param {Object} [options] Options object
   * @return {Self} thisArg
   * @chainable
   */
  function fire(eventName, options) {
    if (!this.__eventListeners) {
      return;
    }

    var listenersForEvent = this.__eventListeners[eventName];
    if (!listenersForEvent) {
      return;
    }

    for (var i = 0, len = listenersForEvent.length; i < len; i++) {
      // avoiding try/catch for perf. reasons
      listenersForEvent[i].call(this, options || { });
    }
    return this;
  }

  /**
   * @namespace fabric.Observable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#events}
   * @see {@link http://fabricjs.com/events/|Events demo}
   */
  fabric.Observable = {
    observe: observe,
    stopObserving: stopObserving,
    fire: fire,

    on: observe,
    off: stopObserving,
    trigger: fire
  };
})();


/**
 * @namespace fabric.Collection
 */
fabric.Collection = {

  /**
   * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
   * Objects should be instances of (or inherit from) fabric.Object
   * @param {...fabric.Object} object Zero or more fabric instances
   * @return {Self} thisArg
   */
  add: function () {
    this._objects.push.apply(this._objects, arguments);
    for (var i = 0, length = arguments.length; i < length; i++) {
      this._onObjectAdded(arguments[i]);
    }
    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
   * An object should be an instance of (or inherit from) fabric.Object
   * @param {Object} object Object to insert
   * @param {Number} index Index to insert object at
   * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
   * @return {Self} thisArg
   * @chainable
   */
  insertAt: function (object, index, nonSplicing) {
    var objects = this.getObjects();
    if (nonSplicing) {
      objects[index] = object;
    }
    else {
      objects.splice(index, 0, object);
    }
    this._onObjectAdded(object);
    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
   * @param {...fabric.Object} object Zero or more fabric instances
   * @return {Self} thisArg
   * @chainable
   */
  remove: function() {
    var objects = this.getObjects(),
        index;

    for (var i = 0, length = arguments.length; i < length; i++) {
      index = objects.indexOf(arguments[i]);

      // only call onObjectRemoved if an object was actually removed
      if (index !== -1) {
        objects.splice(index, 1);
        this._onObjectRemoved(arguments[i]);
      }
    }

    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Executes given function for each object in this group
   * @param {Function} callback
   *                   Callback invoked with current object as first argument,
   *                   index - as second and an array of all objects - as third.
   *                   Iteration happens in reverse order (for performance reasons).
   *                   Callback is invoked in a context of Global Object (e.g. `window`)
   *                   when no `context` argument is given
   *
   * @param {Object} context Context (aka thisObject)
   * @return {Self} thisArg
   */
  forEachObject: function(callback, context) {
    var objects = this.getObjects(),
        i = objects.length;
    while (i--) {
      callback.call(context, objects[i], i, objects);
    }
    return this;
  },

  /**
   * Returns an array of children objects of this instance
   * Type parameter introduced in 1.3.10
   * @param {String} [type] When specified, only objects of this type are returned
   * @return {Array}
   */
  getObjects: function(type) {
    if (typeof type === 'undefined') {
      return this._objects;
    }
    return this._objects.filter(function(o) {
      return o.type === type;
    });
  },

  /**
   * Returns object at specified index
   * @param {Number} index
   * @return {Self} thisArg
   */
  item: function (index) {
    return this.getObjects()[index];
  },

  /**
   * Returns true if collection contains no objects
   * @return {Boolean} true if collection is empty
   */
  isEmpty: function () {
    return this.getObjects().length === 0;
  },

  /**
   * Returns a size of a collection (i.e: length of an array containing its objects)
   * @return {Number} Collection size
   */
  size: function() {
    return this.getObjects().length;
  },

  /**
   * Returns true if collection contains an object
   * @param {Object} object Object to check against
   * @return {Boolean} `true` if collection contains an object
   */
  contains: function(object) {
    return this.getObjects().indexOf(object) > -1;
  },

  /**
   * Returns number representation of a collection complexity
   * @return {Number} complexity
   */
  complexity: function () {
    return this.getObjects().reduce(function (memo, current) {
      memo += current.complexity ? current.complexity() : 0;
      return memo;
    }, 0);
  }
};


(function(global) {

  var sqrt = Math.sqrt,
      atan2 = Math.atan2,
      PiBy180 = Math.PI / 180;

  /**
   * @namespace fabric.util
   */
  fabric.util = {

    /**
     * Removes value from an array.
     * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
     * @static
     * @memberOf fabric.util
     * @param {Array} array
     * @param {Any} value
     * @return {Array} original array
     */
    removeFromArray: function(array, value) {
      var idx = array.indexOf(value);
      if (idx !== -1) {
        array.splice(idx, 1);
      }
      return array;
    },

    /**
     * Returns random number between 2 specified ones.
     * @static
     * @memberOf fabric.util
     * @param {Number} min lower limit
     * @param {Number} max upper limit
     * @return {Number} random value (between min and max)
     */
    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Transforms degrees to radians.
     * @static
     * @memberOf fabric.util
     * @param {Number} degrees value in degrees
     * @return {Number} value in radians
     */
    degreesToRadians: function(degrees) {
      return degrees * PiBy180;
    },

    /**
     * Transforms radians to degrees.
     * @static
     * @memberOf fabric.util
     * @param {Number} radians value in radians
     * @return {Number} value in degrees
     */
    radiansToDegrees: function(radians) {
      return radians / PiBy180;
    },

    /**
     * Rotates `point` around `origin` with `radians`
     * @static
     * @memberOf fabric.util
     * @param {fabric.Point} point The point to rotate
     * @param {fabric.Point} origin The origin of the rotation
     * @param {Number} radians The radians of the angle for the rotation
     * @return {fabric.Point} The new rotated point
     */
    rotatePoint: function(point, origin, radians) {
      var sin = Math.sin(radians),
          cos = Math.cos(radians);

      point.subtractEquals(origin);

      var rx = point.x * cos - point.y * sin,
          ry = point.x * sin + point.y * cos;

      return new fabric.Point(rx, ry).addEquals(origin);
    },

    /**
     * Apply transform t to point p
     * @static
     * @memberOf fabric.util
     * @param  {fabric.Point} p The point to transform
     * @param  {Array} t The transform
     * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
     * @return {fabric.Point} The transformed point
     */
    transformPoint: function(p, t, ignoreOffset) {
      if (ignoreOffset) {
        return new fabric.Point(
          t[0] * p.x + t[1] * p.y,
          t[2] * p.x + t[3] * p.y
        );
      }
      return new fabric.Point(
        t[0] * p.x + t[1] * p.y + t[4],
        t[2] * p.x + t[3] * p.y + t[5]
      );
    },

    /**
     * Invert transformation t
     * @static
     * @memberOf fabric.util
     * @param {Array} t The transform
     * @return {Array} The inverted transform
     */
    invertTransform: function(t) {
      var r = t.slice(),
          a = 1 / (t[0] * t[3] - t[1] * t[2]);
      r = [a * t[3], -a * t[1], -a * t[2], a * t[0], 0, 0];
      var o = fabric.util.transformPoint({ x: t[4], y: t[5] }, r);
      r[4] = -o.x;
      r[5] = -o.y;
      return r;
    },

    /**
     * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
     * @static
     * @memberOf fabric.util
     * @param {Number|String} number number to operate on
     * @param {Number} fractionDigits number of fraction digits to "leave"
     * @return {Number}
     */
    toFixed: function(number, fractionDigits) {
      return parseFloat(Number(number).toFixed(fractionDigits));
    },

    /**
     * Converts from attribute value to pixel value if applicable.
     * Returns converted pixels or original value not converted.
     * @param {Number|String} value number to operate on
     * @return {Number|String}
     */
    parseUnit: function(value) {
      var unit = /\D{0,2}$/.exec(value),
          number = parseFloat(value);

      switch (unit[0]) {
        case 'mm':
          return number * fabric.DPI / 25.4;

        case 'cm':
          return number * fabric.DPI / 2.54;

        case 'in':
          return number * fabric.DPI;

        case 'pt':
          return number * fabric.DPI / 72; // or * 4 / 3

        case 'pc':
          return number * fabric.DPI / 72 * 12; // or * 16

        default:
          return number;
      }
    },

    /**
     * Function which always returns `false`.
     * @static
     * @memberOf fabric.util
     * @return {Boolean}
     */
    falseFunction: function() {
      return false;
    },

    /**
      * Returns klass "Class" object of given namespace
      * @memberOf fabric.util
      * @param {String} type Type of object (eg. 'circle')
      * @param {String} namespace Namespace to get klass "Class" object from
      * @return {Object} klass "Class"
      */
    getKlass: function(type, namespace) {
      // capitalize first letter only
      type = fabric.util.string.camelize(type.charAt(0).toUpperCase() + type.slice(1));
      return fabric.util.resolveNamespace(namespace)[type];
    },

    /**
     * Returns object of given namespace
     * @memberOf fabric.util
     * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
     * @return {Object} Object for given namespace (default fabric)
     */
    resolveNamespace: function(namespace) {
      if (!namespace) {
        return fabric;
      }

      var parts = namespace.split('.'),
          len = parts.length,
          obj = global || fabric.window;

      for (var i = 0; i < len; ++i) {
        obj = obj[parts[i]];
      }

      return obj;
    },

    /**
     * Loads image element from given url and passes it to a callback
     * @memberOf fabric.util
     * @param {String} url URL representing an image
     * @param {Function} callback Callback; invoked with loaded image
     * @param {Any} [context] Context to invoke callback in
     * @param {Object} [crossOrigin] crossOrigin value to set image element to
     */
    loadImage: function(url, callback, context, crossOrigin) {
      if (!url) {
        callback && callback.call(context, url);
        return;
      }

      var img = fabric.util.createImage();

      /** @ignore */
      img.onload = function () {
        callback && callback.call(context, img);
        img = img.onload = img.onerror = null;
      };

      /** @ignore */
      img.onerror = function() {
        fabric.log('Error loading ' + img.src);
        callback && callback.call(context, null, true);
        img = img.onload = img.onerror = null;
      };

      // data-urls appear to be buggy with crossOrigin
      // https://github.com/kangax/fabric.js/commit/d0abb90f1cd5c5ef9d2a94d3fb21a22330da3e0a#commitcomment-4513767
      // see https://code.google.com/p/chromium/issues/detail?id=315152
      //     https://bugzilla.mozilla.org/show_bug.cgi?id=935069
      if (url.indexOf('data') !== 0 && typeof crossOrigin !== 'undefined') {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
    },

    /**
     * Creates corresponding fabric instances from their object representations
     * @static
     * @memberOf fabric.util
     * @param {Array} objects Objects to enliven
     * @param {Function} callback Callback to invoke when all objects are created
     * @param {String} namespace Namespace to get klass "Class" object from
     * @param {Function} reviver Method for further parsing of object elements,
     * called after each fabric object created.
     */
    enlivenObjects: function(objects, callback, namespace, reviver) {
      objects = objects || [ ];

      function onLoaded() {
        if (++numLoadedObjects === numTotalObjects) {
          callback && callback(enlivenedObjects);
        }
      }

      var enlivenedObjects = [ ],
          numLoadedObjects = 0,
          numTotalObjects = objects.length;

      if (!numTotalObjects) {
        callback && callback(enlivenedObjects);
        return;
      }

      objects.forEach(function (o, index) {
        // if sparse array
        if (!o || !o.type) {
          onLoaded();
          return;
        }
        var klass = fabric.util.getKlass(o.type, namespace);
        if (klass.async) {
          klass.fromObject(o, function (obj, error) {
            if (!error) {
              enlivenedObjects[index] = obj;
              reviver && reviver(o, enlivenedObjects[index]);
            }
            onLoaded();
          });
        }
        else {
          enlivenedObjects[index] = klass.fromObject(o);
          reviver && reviver(o, enlivenedObjects[index]);
          onLoaded();
        }
      });
    },

    /**
     * Groups SVG elements (usually those retrieved from SVG document)
     * @static
     * @memberOf fabric.util
     * @param {Array} elements SVG elements to group
     * @param {Object} [options] Options object
     * @return {fabric.Object|fabric.PathGroup}
     */
    groupSVGElements: function(elements, options, path) {
      var object;

      object = new fabric.PathGroup(elements, options);

      if (typeof path !== 'undefined') {
        object.setSourcePath(path);
      }
      return object;
    },

    /**
     * Populates an object with properties of another object
     * @static
     * @memberOf fabric.util
     * @param {Object} source Source object
     * @param {Object} destination Destination object
     * @return {Array} properties Propertie names to include
     */
    populateWithProperties: function(source, destination, properties) {
      if (properties && Object.prototype.toString.call(properties) === '[object Array]') {
        for (var i = 0, len = properties.length; i < len; i++) {
          if (properties[i] in source) {
            destination[properties[i]] = source[properties[i]];
          }
        }
      }
    },

    /**
     * Draws a dashed line between two points
     *
     * This method is used to draw dashed line around selection area.
     * See <a href="http://stackoverflow.com/questions/4576724/dotted-stroke-in-canvas">dotted stroke in canvas</a>
     *
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Number} x  start x coordinate
     * @param {Number} y start y coordinate
     * @param {Number} x2 end x coordinate
     * @param {Number} y2 end y coordinate
     * @param {Array} da dash array pattern
     */
    drawDashedLine: function(ctx, x, y, x2, y2, da) {
      var dx = x2 - x,
          dy = y2 - y,
          len = sqrt(dx * dx + dy * dy),
          rot = atan2(dy, dx),
          dc = da.length,
          di = 0,
          draw = true;

      ctx.save();
      ctx.translate(x, y);
      ctx.moveTo(0, 0);
      ctx.rotate(rot);

      x = 0;
      while (len > x) {
        x += da[di++ % dc];
        if (x > len) {
          x = len;
        }
        ctx[draw ? 'lineTo' : 'moveTo'](x, 0);
        draw = !draw;
      }

      ctx.restore();
    },

    /**
     * Creates canvas element and initializes it via excanvas if necessary
     * @static
     * @memberOf fabric.util
     * @param {CanvasElement} [canvasEl] optional canvas element to initialize;
     * when not given, element is created implicitly
     * @return {CanvasElement} initialized canvas element
     */
    createCanvasElement: function(canvasEl) {
      canvasEl || (canvasEl = fabric.document.createElement('canvas'));
      //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      if (!canvasEl.getContext && typeof G_vmlCanvasManager !== 'undefined') {
        G_vmlCanvasManager.initElement(canvasEl);
      }
      //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      return canvasEl;
    },

    /**
     * Creates image element (works on client and node)
     * @static
     * @memberOf fabric.util
     * @return {HTMLImageElement} HTML image element
     */
    createImage: function() {
      return fabric.isLikelyNode
        ? new (require('canvas').Image)()
        : fabric.document.createElement('img');
    },

    /**
     * Creates accessors (getXXX, setXXX) for a "class", based on "stateProperties" array
     * @static
     * @memberOf fabric.util
     * @param {Object} klass "Class" to create accessors for
     */
    createAccessors: function(klass) {
      var proto = klass.prototype;

      for (var i = proto.stateProperties.length; i--; ) {

        var propName = proto.stateProperties[i],
            capitalizedPropName = propName.charAt(0).toUpperCase() + propName.slice(1),
            setterName = 'set' + capitalizedPropName,
            getterName = 'get' + capitalizedPropName;

        // using `new Function` for better introspection
        if (!proto[getterName]) {
          proto[getterName] = (function(property) {
            return new Function('return this.get("' + property + '")');
          })(propName);
        }
        if (!proto[setterName]) {
          proto[setterName] = (function(property) {
            return new Function('value', 'return this.set("' + property + '", value)');
          })(propName);
        }
      }
    },

    /**
     * @static
     * @memberOf fabric.util
     * @param {fabric.Object} receiver Object implementing `clipTo` method
     * @param {CanvasRenderingContext2D} ctx Context to clip
     */
    clipContext: function(receiver, ctx) {
      ctx.save();
      ctx.beginPath();
      receiver.clipTo(ctx);
      ctx.clip();
    },

    /**
     * Multiply matrix A by matrix B to nest transformations
     * @static
     * @memberOf fabric.util
     * @param  {Array} matrixA First transformMatrix
     * @param  {Array} matrixB Second transformMatrix
     * @return {Array} The product of the two transform matrices
     */
    multiplyTransformMatrices: function(matrixA, matrixB) {
      // Matrix multiply matrixA * matrixB
      var a = [
        [matrixA[0], matrixA[2], matrixA[4]],
        [matrixA[1], matrixA[3], matrixA[5]],
        [0,          0,          1         ]
      ],

      b = [
        [matrixB[0], matrixB[2], matrixB[4]],
        [matrixB[1], matrixB[3], matrixB[5]],
        [0,          0,          1         ]
      ],

      result = [];

      for (var r = 0; r < 3; r++) {
        result[r] = [];
        for (var c = 0; c < 3; c++) {
          var sum = 0;
          for (var k = 0; k < 3; k++) {
            sum += a[r][k] * b[k][c];
          }

          result[r][c] = sum;
        }
      }

      return [
        result[0][0],
        result[1][0],
        result[0][1],
        result[1][1],
        result[0][2],
        result[1][2]
      ];
    },

    /**
     * Returns string representation of function body
     * @param {Function} fn Function to get body of
     * @return {String} Function body
     */
    getFunctionBody: function(fn) {
      return (String(fn).match(/function[^{]*\{([\s\S]*)\}/) || {})[1];
    },

    /**
     * Returns true if context has transparent pixel
     * at specified location (taking tolerance into account)
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Number} x x coordinate
     * @param {Number} y y coordinate
     * @param {Number} tolerance Tolerance
     */
    isTransparent: function(ctx, x, y, tolerance) {

      // If tolerance is > 0 adjust start coords to take into account.
      // If moves off Canvas fix to 0
      if (tolerance > 0) {
        if (x > tolerance) {
          x -= tolerance;
        }
        else {
          x = 0;
        }
        if (y > tolerance) {
          y -= tolerance;
        }
        else {
          y = 0;
        }
      }

      var _isTransparent = true,
          imageData = ctx.getImageData(x, y, (tolerance * 2) || 1, (tolerance * 2) || 1);

      // Split image data - for tolerance > 1, pixelDataSize = 4;
      for (var i = 3, l = imageData.data.length; i < l; i += 4) {
        var temp = imageData.data[i];
        _isTransparent = temp <= 0;
        if (_isTransparent === false) {
          break; // Stop if colour found
        }
      }

      imageData = null;

      return _isTransparent;
    }
  };

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  var arcToSegmentsCache = { },
      segmentToBezierCache = { },
      _join = Array.prototype.join;

  /* Adapted from http://dxr.mozilla.org/mozilla-central/source/content/svg/content/src/nsSVGPathDataParser.cpp
   * by Andrea Bogazzi code is under MPL. if you don't have a copy of the license you can take it here
   * http://mozilla.org/MPL/2.0/
   */
  function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
    var argsString = _join.call(arguments);
    if (arcToSegmentsCache[argsString]) {
      return arcToSegmentsCache[argsString];
    }

    var PI = Math.PI, th = rotateX * (PI / 180),
        sinTh = Math.sin(th),
        cosTh = Math.cos(th),
        fromX = 0, fromY = 0;

    rx = Math.abs(rx);
    ry = Math.abs(ry);

    var px = -cosTh * toX - sinTh * toY,
        py = -cosTh * toY + sinTh * toX,
        rx2 = rx * rx, ry2 = ry * ry, py2 = py * py, px2 = px * px,
        pl = 4 * rx2 * ry2 - rx2 * py2 - ry2 * px2,
        root = 0;

    if (pl < 0) {
      var s = Math.sqrt(1 - 0.25 * pl/(rx2 * ry2));
      rx *= s;
      ry *= s;
    }
    else {
      root = (large === sweep ? -0.5 : 0.5) *
              Math.sqrt( pl /(rx2 * py2 + ry2 * px2));
    }

    var cx = root * rx * py / ry,
        cy = -root * ry * px / rx,
        cx1 = cosTh * cx - sinTh * cy + toX / 2,
        cy1 = sinTh * cx + cosTh * cy + toY / 2,
        mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry),
        dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);

    if (sweep === 0 && dtheta > 0) {
      dtheta -= 2 * PI;
    }
    else if (sweep === 1 && dtheta < 0) {
      dtheta += 2 * PI;
    }

    // Convert into cubic bezier segments <= 90deg
    var segments = Math.ceil(Math.abs(dtheta / (PI * 0.5))),
        result = [], mDelta = dtheta / segments,
        mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2),
        th3 = mTheta + mDelta;

    for (var i = 0; i < segments; i++) {
      result[i] = segmentToBezier(mTheta, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY);
      fromX = result[i][4];
      fromY = result[i][5];
      mTheta += mDelta;
      th3 += mDelta;
    }
    arcToSegmentsCache[argsString] = result;
    return result;
  }

  function segmentToBezier(th2, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY) {
    var argsString2 = _join.call(arguments);
    if (segmentToBezierCache[argsString2]) {
      return segmentToBezierCache[argsString2];
    }

    var costh2 = Math.cos(th2),
        sinth2 = Math.sin(th2),
        costh3 = Math.cos(th3),
        sinth3 = Math.sin(th3),
        toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1,
        toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1,
        cp1X = fromX + mT * ( - cosTh * rx * sinth2 - sinTh * ry * costh2),
        cp1Y = fromY + mT * ( - sinTh * rx * sinth2 + cosTh * ry * costh2),
        cp2X = toX + mT * ( cosTh * rx * sinth3 + sinTh * ry * costh3),
        cp2Y = toY + mT * ( sinTh * rx * sinth3 - cosTh * ry * costh3);

    segmentToBezierCache[argsString2] = [
      cp1X, cp1Y,
      cp2X, cp2Y,
      toX, toY
    ];
    return segmentToBezierCache[argsString2];
  }

  /*
  * Private
  */
  function calcVectorAngle(ux, uy, vx, vy) {
    var ta = Math.atan2(uy, ux),
        tb = Math.atan2(vy, vx);
    if (tb >= ta) {
      return tb - ta;
    }
    else {
      return 2 * Math.PI - (ta - tb);
    }
  }

  /**
   * Draws arc
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} fx
   * @param {Number} fy
   * @param {Array} coords
   */
  fabric.util.drawArc = function(ctx, fx, fy, coords) {
    var rx = coords[0],
        ry = coords[1],
        rot = coords[2],
        large = coords[3],
        sweep = coords[4],
        tx = coords[5],
        ty = coords[6],
        segs = [[ ], [ ], [ ], [ ]],
        segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

    for (var i = 0, len = segsNorm.length; i < len; i++) {
      segs[i][0] = segsNorm[i][0] + fx;
      segs[i][1] = segsNorm[i][1] + fy;
      segs[i][2] = segsNorm[i][2] + fx;
      segs[i][3] = segsNorm[i][3] + fy;
      segs[i][4] = segsNorm[i][4] + fx;
      segs[i][5] = segsNorm[i][5] + fy;
      ctx.bezierCurveTo.apply(ctx, segs[i]);
    }
  };
})();


(function() {

  var slice = Array.prototype.slice;

  

  /**
   * Invokes method on all items in a given array
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} method Name of a method to invoke
   * @return {Array}
   */
  function invoke(array, method) {
    var args = slice.call(arguments, 2), result = [ ];
    for (var i = 0, len = array.length; i < len; i++) {
      result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
    }
    return result;
  }

  /**
   * Finds maximum value in array (not necessarily "first" one)
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   * @return {Any}
   */
  function max(array, byProperty) {
    return find(array, byProperty, function(value1, value2) {
      return value1 >= value2;
    });
  }

  /**
   * Finds minimum value in array (not necessarily "first" one)
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   * @return {Any}
   */
  function min(array, byProperty) {
    return find(array, byProperty, function(value1, value2) {
      return value1 < value2;
    });
  }

  /**
   * @private
   */
  function find(array, byProperty, condition) {
    if (!array || array.length === 0) {
      return;
    }

    var i = array.length - 1,
        result = byProperty ? array[i][byProperty] : array[i];
    if (byProperty) {
      while (i--) {
        if (condition(array[i][byProperty], result)) {
          result = array[i][byProperty];
        }
      }
    }
    else {
      while (i--) {
        if (condition(array[i], result)) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /**
   * @namespace fabric.util.array
   */
  fabric.util.array = {
    invoke: invoke,
    min: min,
    max: max
  };

})();


(function(){

  /**
   * Copies all enumerable properties of one object to another
   * @memberOf fabric.util.object
   * @param {Object} destination Where to copy to
   * @param {Object} source Where to copy from
   * @return {Object}
   */
  function extend(destination, source) {
    // JScript DontEnum bug is not taken care of
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  }

  /**
   * Creates an empty object and copies all enumerable properties of another object to it
   * @memberOf fabric.util.object
   * @param {Object} object Object to clone
   * @return {Object}
   */
  function clone(object) {
    return extend({ }, object);
  }

  /** @namespace fabric.util.object */
  fabric.util.object = {
    extend: extend,
    clone: clone
  };

})();


(function() {

  

  /**
   * Camelizes a string
   * @memberOf fabric.util.string
   * @param {String} string String to camelize
   * @return {String} Camelized version of a string
   */
  function camelize(string) {
    return string.replace(/-+(.)?/g, function(match, character) {
      return character ? character.toUpperCase() : '';
    });
  }

  /**
   * Capitalizes a string
   * @memberOf fabric.util.string
   * @param {String} string String to capitalize
   * @param {Boolean} [firstLetterOnly] If true only first letter is capitalized
   * and other letters stay untouched, if false first letter is capitalized
   * and other letters are converted to lowercase.
   * @return {String} Capitalized version of a string
   */
  function capitalize(string, firstLetterOnly) {
    return string.charAt(0).toUpperCase() +
      (firstLetterOnly ? string.slice(1) : string.slice(1).toLowerCase());
  }

  /**
   * Escapes XML in a string
   * @memberOf fabric.util.string
   * @param {String} string String to escape
   * @return {String} Escaped version of a string
   */
  function escapeXml(string) {
    return string.replace(/&/g, '&amp;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&apos;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;');
  }

  /**
   * String utilities
   * @namespace fabric.util.string
   */
  fabric.util.string = {
    camelize: camelize,
    capitalize: capitalize,
    escapeXml: escapeXml
  };
}());





(function() {

  var slice = Array.prototype.slice, emptyFunction = function() { },

      IS_DONTENUM_BUGGY = (function(){
        for (var p in { toString: 1 }) {
          if (p === 'toString') {
            return false;
          }
        }
        return true;
      })(),

      /** @ignore */
      addMethods = function(klass, source, parent) {
        for (var property in source) {

          if (property in klass.prototype &&
              typeof klass.prototype[property] === 'function' &&
              (source[property] + '').indexOf('callSuper') > -1) {

            klass.prototype[property] = (function(property) {
              return function() {

                var superclass = this.constructor.superclass;
                this.constructor.superclass = parent;
                var returnValue = source[property].apply(this, arguments);
                this.constructor.superclass = superclass;

                if (property !== 'initialize') {
                  return returnValue;
                }
              };
            })(property);
          }
          else {
            klass.prototype[property] = source[property];
          }

          if (IS_DONTENUM_BUGGY) {
            if (source.toString !== Object.prototype.toString) {
              klass.prototype.toString = source.toString;
            }
            if (source.valueOf !== Object.prototype.valueOf) {
              klass.prototype.valueOf = source.valueOf;
            }
          }
        }
      };

  function Subclass() { }

  function callSuper(methodName) {
    var fn = this.constructor.superclass.prototype[methodName];
    return (arguments.length > 1)
      ? fn.apply(this, slice.call(arguments, 1))
      : fn.call(this);
  }

  /**
   * Helper for creation of "classes".
   * @memberOf fabric.util
   * @param {Function} [parent] optional "Class" to inherit from
   * @param {Object} [properties] Properties shared by all instances of this class
   *                  (be careful modifying objects defined here as this would affect all instances)
   */
  function createClass() {
    var parent = null,
        properties = slice.call(arguments, 0);

    if (typeof properties[0] === 'function') {
      parent = properties.shift();
    }
    function klass() {
      this.initialize.apply(this, arguments);
    }

    klass.superclass = parent;
    klass.subclasses = [ ];

    if (parent) {
      Subclass.prototype = parent.prototype;
      klass.prototype = new Subclass();
      parent.subclasses.push(klass);
    }
    for (var i = 0, length = properties.length; i < length; i++) {
      addMethods(klass, properties[i], parent);
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = emptyFunction;
    }
    klass.prototype.constructor = klass;
    klass.prototype.callSuper = callSuper;
    return klass;
  }

  fabric.util.createClass = createClass;
})();


(function () {

  var unknown = 'unknown';

  /* EVENT HANDLING */

  function areHostMethods(object) {
    var methodNames = Array.prototype.slice.call(arguments, 1),
        t, i, len = methodNames.length;
    for (i = 0; i < len; i++) {
      t = typeof object[methodNames[i]];
      if (!(/^(?:function|object|unknown)$/).test(t)) {
        return false;
      }
    }
    return true;
  }

  /** @ignore */
  var getElement,
      setElement,
      getUniqueId = (function () {
        var uid = 0;
        return function (element) {
          return element.__uniqueID || (element.__uniqueID = 'uniqueID__' + uid++);
        };
      })();

  (function () {
    var elements = { };
    /** @ignore */
    getElement = function (uid) {
      return elements[uid];
    };
    /** @ignore */
    setElement = function (uid, element) {
      elements[uid] = element;
    };
  })();

  function createListener(uid, handler) {
    return {
      handler: handler,
      wrappedHandler: createWrappedHandler(uid, handler)
    };
  }

  function createWrappedHandler(uid, handler) {
    return function (e) {
      handler.call(getElement(uid), e || fabric.window.event);
    };
  }

  function createDispatcher(uid, eventName) {
    return function (e) {
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          handlersForEvent[i].call(this, e || fabric.window.event);
        }
      }
    };
  }

  var shouldUseAddListenerRemoveListener = (
        areHostMethods(fabric.document.documentElement, 'addEventListener', 'removeEventListener') &&
        areHostMethods(fabric.window, 'addEventListener', 'removeEventListener')),

      shouldUseAttachEventDetachEvent = (
        areHostMethods(fabric.document.documentElement, 'attachEvent', 'detachEvent') &&
        areHostMethods(fabric.window, 'attachEvent', 'detachEvent')),

      // IE branch
      listeners = { },

      // DOM L0 branch
      handlers = { },

      addListener, removeListener;

  if (shouldUseAddListenerRemoveListener) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      element.removeEventListener(eventName, handler, false);
    };
  }

  else if (shouldUseAttachEventDetachEvent) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      setElement(uid, element);
      if (!listeners[uid]) {
        listeners[uid] = { };
      }
      if (!listeners[uid][eventName]) {
        listeners[uid][eventName] = [ ];

      }
      var listener = createListener(uid, handler);
      listeners[uid][eventName].push(listener);
      element.attachEvent('on' + eventName, listener.wrappedHandler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element), listener;
      if (listeners[uid] && listeners[uid][eventName]) {
        for (var i = 0, len = listeners[uid][eventName].length; i < len; i++) {
          listener = listeners[uid][eventName][i];
          if (listener && listener.handler === handler) {
            element.detachEvent('on' + eventName, listener.wrappedHandler);
            listeners[uid][eventName][i] = null;
          }
        }
      }
    };
  }
  else {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (!handlers[uid]) {
        handlers[uid] = { };
      }
      if (!handlers[uid][eventName]) {
        handlers[uid][eventName] = [ ];
        var existingHandler = element['on' + eventName];
        if (existingHandler) {
          handlers[uid][eventName].push(existingHandler);
        }
        element['on' + eventName] = createDispatcher(uid, eventName);
      }
      handlers[uid][eventName].push(handler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          if (handlersForEvent[i] === handler) {
            handlersForEvent.splice(i, 1);
          }
        }
      }
    };
  }

  /**
   * Adds an event listener to an element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.addListener = addListener;

  /**
   * Removes an event listener from an element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.removeListener = removeListener;

  /**
   * Cross-browser wrapper for getting event's coordinates
   * @memberOf fabric.util
   * @param {Event} event Event object
   * @param {HTMLCanvasElement} upperCanvasEl &lt;canvas> element on which object selection is drawn
   */
  function getPointer(event, upperCanvasEl) {
    event || (event = fabric.window.event);

    var element = event.target ||
                  (typeof event.srcElement !== unknown ? event.srcElement : null),

        scroll = fabric.util.getScrollLeftTop(element, upperCanvasEl);

    return {
      x: pointerX(event) + scroll.left,
      y: pointerY(event) + scroll.top
    };
  }

  var pointerX = function(event) {
    // looks like in IE (<9) clientX at certain point (apparently when mouseup fires on VML element)
    // is represented as COM object, with all the consequences, like "unknown" type and error on [[Get]]
    // need to investigate later
    return (typeof event.clientX !== unknown ? event.clientX : 0);
  },

  pointerY = function(event) {
    return (typeof event.clientY !== unknown ? event.clientY : 0);
  };

  function _getPointer(event, pageProp, clientProp) {
    var touchProp = event.type === 'touchend' ? 'changedTouches' : 'touches';

    return (event[touchProp] && event[touchProp][0]
      ? (event[touchProp][0][pageProp] - (event[touchProp][0][pageProp] - event[touchProp][0][clientProp]))
        || event[clientProp]
      : event[clientProp]);
  }

  if (fabric.isTouchSupported) {
    pointerX = function(event) {
      return _getPointer(event, 'pageX', 'clientX');
    };
    pointerY = function(event) {
      return _getPointer(event, 'pageY', 'clientY');
    };
  }

  fabric.util.getPointer = getPointer;

  fabric.util.object.extend(fabric.util, fabric.Observable);

})();


(function () {

  /**
   * Cross-browser wrapper for setting element's style
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {HTMLElement} Element that was passed as a first argument
   */
  function setStyle(element, styles) {
    var elementStyle = element.style;
    if (!elementStyle) {
      return element;
    }
    if (typeof styles === 'string') {
      element.style.cssText += ';' + styles;
      return styles.indexOf('opacity') > -1
        ? setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1])
        : element;
    }
    for (var property in styles) {
      if (property === 'opacity') {
        setOpacity(element, styles[property]);
      }
      else {
        var normalizedProperty = (property === 'float' || property === 'cssFloat')
          ? (typeof elementStyle.styleFloat === 'undefined' ? 'cssFloat' : 'styleFloat')
          : property;
        elementStyle[normalizedProperty] = styles[property];
      }
    }
    return element;
  }

  var parseEl = fabric.document.createElement('div'),
      supportsOpacity = typeof parseEl.style.opacity === 'string',
      supportsFilters = typeof parseEl.style.filter === 'string',
      reOpacity = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,

      /** @ignore */
      setOpacity = function (element) { return element; };

  if (supportsOpacity) {
    /** @ignore */
    setOpacity = function(element, value) {
      element.style.opacity = value;
      return element;
    };
  }
  else if (supportsFilters) {
    /** @ignore */
    setOpacity = function(element, value) {
      var es = element.style;
      if (element.currentStyle && !element.currentStyle.hasLayout) {
        es.zoom = 1;
      }
      if (reOpacity.test(es.filter)) {
        value = value >= 0.9999 ? '' : ('alpha(opacity=' + (value * 100) + ')');
        es.filter = es.filter.replace(reOpacity, value);
      }
      else {
        es.filter += ' alpha(opacity=' + (value * 100) + ')';
      }
      return element;
    };
  }

  fabric.util.setStyle = setStyle;

})();


(function() {

  var _slice = Array.prototype.slice;

  /**
   * Takes id and returns an element with that id (if one exists in a document)
   * @memberOf fabric.util
   * @param {String|HTMLElement} id
   * @return {HTMLElement|null}
   */
  function getById(id) {
    return typeof id === 'string' ? fabric.document.getElementById(id) : id;
  }

  var sliceCanConvertNodelists,
      /**
       * Converts an array-like object (e.g. arguments or NodeList) to an array
       * @memberOf fabric.util
       * @param {Object} arrayLike
       * @return {Array}
       */
      toArray = function(arrayLike) {
        return _slice.call(arrayLike, 0);
      };

  try {
    sliceCanConvertNodelists = toArray(fabric.document.childNodes) instanceof Array;
  }
  catch (err) { }

  if (!sliceCanConvertNodelists) {
    toArray = function(arrayLike) {
      var arr = new Array(arrayLike.length), i = arrayLike.length;
      while (i--) {
        arr[i] = arrayLike[i];
      }
      return arr;
    };
  }

  /**
   * Creates specified element with specified attributes
   * @memberOf fabric.util
   * @param {String} tagName Type of an element to create
   * @param {Object} [attributes] Attributes to set on an element
   * @return {HTMLElement} Newly created element
   */
  function makeElement(tagName, attributes) {
    var el = fabric.document.createElement(tagName);
    for (var prop in attributes) {
      if (prop === 'class') {
        el.className = attributes[prop];
      }
      else if (prop === 'for') {
        el.htmlFor = attributes[prop];
      }
      else {
        el.setAttribute(prop, attributes[prop]);
      }
    }
    return el;
  }

  /**
   * Adds class to an element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to add class to
   * @param {String} className Class to add to an element
   */
  function addClass(element, className) {
    if (element && (' ' + element.className + ' ').indexOf(' ' + className + ' ') === -1) {
      element.className += (element.className ? ' ' : '') + className;
    }
  }

  /**
   * Wraps element with another element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to wrap
   * @param {HTMLElement|String} wrapper Element to wrap with
   * @param {Object} [attributes] Attributes to set on a wrapper
   * @return {HTMLElement} wrapper
   */
  function wrapElement(element, wrapper, attributes) {
    if (typeof wrapper === 'string') {
      wrapper = makeElement(wrapper, attributes);
    }
    if (element.parentNode) {
      element.parentNode.replaceChild(wrapper, element);
    }
    wrapper.appendChild(element);
    return wrapper;
  }

  /**
   * Returns element scroll offsets
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to operate on
   * @param {HTMLElement} upperCanvasEl Upper canvas element
   * @return {Object} Object with left/top values
   */
  function getScrollLeftTop(element, upperCanvasEl) {

    var firstFixedAncestor,
        origElement,
        left = 0,
        top = 0,
        docElement = fabric.document.documentElement,
        body = fabric.document.body || {
          scrollLeft: 0, scrollTop: 0
        };

    origElement = element;

    while (element && element.parentNode && !firstFixedAncestor) {

      element = element.parentNode;

      if (element !== fabric.document &&
          fabric.util.getElementStyle(element, 'position') === 'fixed') {
        firstFixedAncestor = element;
      }

      if (element !== fabric.document &&
          origElement !== upperCanvasEl &&
          fabric.util.getElementStyle(element, 'position') === 'absolute') {
        left = 0;
        top = 0;
      }
      else if (element === fabric.document) {
        left = body.scrollLeft || docElement.scrollLeft || 0;
        top = body.scrollTop ||  docElement.scrollTop || 0;
      }
      else {
        left += element.scrollLeft || 0;
        top += element.scrollTop || 0;
      }
    }

    return { left: left, top: top };
  }

  /**
   * Returns offset for a given element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get offset for
   * @return {Object} Object with "left" and "top" properties
   */
  function getElementOffset(element) {
    var docElem,
        doc = element && element.ownerDocument,
        box = { left: 0, top: 0 },
        offset = { left: 0, top: 0 },
        scrollLeftTop,
        offsetAttributes = {
          borderLeftWidth: 'left',
          borderTopWidth:  'top',
          paddingLeft:     'left',
          paddingTop:      'top'
        };

    if (!doc) {
      return { left: 0, top: 0 };
    }

    for (var attr in offsetAttributes) {
      offset[offsetAttributes[attr]] += parseInt(getElementStyle(element, attr), 10) || 0;
    }

    docElem = doc.documentElement;
    if ( typeof element.getBoundingClientRect !== 'undefined' ) {
      box = element.getBoundingClientRect();
    }

    scrollLeftTop = fabric.util.getScrollLeftTop(element, null);

    return {
      left: box.left + scrollLeftTop.left - (docElem.clientLeft || 0) + offset.left,
      top: box.top + scrollLeftTop.top - (docElem.clientTop || 0)  + offset.top
    };
  }

  /**
  * Returns style attribute value of a given element
  * @memberOf fabric.util
  * @param {HTMLElement} element Element to get style attribute for
  * @param {String} attr Style attribute to get for element
  * @return {String} Style attribute value of the given element.
  */
  var getElementStyle;
  if (fabric.document.defaultView && fabric.document.defaultView.getComputedStyle) {
    getElementStyle = function(element, attr) {
      return fabric.document.defaultView.getComputedStyle(element, null)[attr];
    };
  }
  else {
    getElementStyle = function(element, attr) {
      var value = element.style[attr];
      if (!value && element.currentStyle) {
        value = element.currentStyle[attr];
      }
      return value;
    };
  }

  (function () {
    var style = fabric.document.documentElement.style,
        selectProp = 'userSelect' in style
          ? 'userSelect'
          : 'MozUserSelect' in style
            ? 'MozUserSelect'
            : 'WebkitUserSelect' in style
              ? 'WebkitUserSelect'
              : 'KhtmlUserSelect' in style
                ? 'KhtmlUserSelect'
                : '';

    /**
     * Makes element unselectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make unselectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementUnselectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = fabric.util.falseFunction;
      }
      if (selectProp) {
        element.style[selectProp] = 'none';
      }
      else if (typeof element.unselectable === 'string') {
        element.unselectable = 'on';
      }
      return element;
    }

    /**
     * Makes element selectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make selectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementSelectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = null;
      }
      if (selectProp) {
        element.style[selectProp] = '';
      }
      else if (typeof element.unselectable === 'string') {
        element.unselectable = '';
      }
      return element;
    }

    fabric.util.makeElementUnselectable = makeElementUnselectable;
    fabric.util.makeElementSelectable = makeElementSelectable;
  })();

  (function() {

    /**
     * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
     * @memberOf fabric.util
     * @param {String} url URL of a script to load
     * @param {Function} callback Callback to execute when script is finished loading
     */
    function getScript(url, callback) {
      var headEl = fabric.document.getElementsByTagName('head')[0],
          scriptEl = fabric.document.createElement('script'),
          loading = true;

      /** @ignore */
      scriptEl.onload = /** @ignore */ scriptEl.onreadystatechange = function(e) {
        if (loading) {
          if (typeof this.readyState === 'string' &&
              this.readyState !== 'loaded' &&
              this.readyState !== 'complete') {
            return;
          }
          loading = false;
          callback(e || fabric.window.event);
          scriptEl = scriptEl.onload = scriptEl.onreadystatechange = null;
        }
      };
      scriptEl.src = url;
      headEl.appendChild(scriptEl);
      // causes issue in Opera
      // headEl.removeChild(scriptEl);
    }

    fabric.util.getScript = getScript;
  })();

  fabric.util.getById = getById;
  fabric.util.toArray = toArray;
  fabric.util.makeElement = makeElement;
  fabric.util.addClass = addClass;
  fabric.util.wrapElement = wrapElement;
  fabric.util.getScrollLeftTop = getScrollLeftTop;
  fabric.util.getElementOffset = getElementOffset;
  fabric.util.getElementStyle = getElementStyle;

})();


(function(){

  function addParamToUrl(url, param) {
    return url + (/\?/.test(url) ? '&' : '?') + param;
  }

  var makeXHR = (function() {
    var factories = [
      function() { return new ActiveXObject('Microsoft.XMLHTTP'); },
      function() { return new ActiveXObject('Msxml2.XMLHTTP'); },
      function() { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); },
      function() { return new XMLHttpRequest(); }
    ];
    for (var i = factories.length; i--; ) {
      try {
        var req = factories[i]();
        if (req) {
          return factories[i];
        }
      }
      catch (err) { }
    }
  })();

  function emptyFn() { }

  /**
   * Cross-browser abstraction for sending XMLHttpRequest
   * @memberOf fabric.util
   * @param {String} url URL to send XMLHttpRequest to
   * @param {Object} [options] Options object
   * @param {String} [options.method="GET"]
   * @param {Function} options.onComplete Callback to invoke when request is completed
   * @return {XMLHttpRequest} request
   */
  function request(url, options) {

    options || (options = { });

    var method = options.method ? options.method.toUpperCase() : 'GET',
        onComplete = options.onComplete || function() { },
        xhr = makeXHR(),
        body;

    /** @ignore */
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        onComplete(xhr);
        xhr.onreadystatechange = emptyFn;
      }
    };

    if (method === 'GET') {
      body = null;
      if (typeof options.parameters === 'string') {
        url = addParamToUrl(url, options.parameters);
      }
    }

    xhr.open(method, url, true);

    if (method === 'POST' || method === 'PUT') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    xhr.send(body);
    return xhr;
  }

  fabric.util.request = request;
})();


/**
 * Wrapper around `console.log` (when available)
 * @param {Any} [values] Values to log
 */
fabric.log = function() { };

/**
 * Wrapper around `console.warn` (when available)
 * @param {Any} [values] Values to log as a warning
 */
fabric.warn = function() { };

if (typeof console !== 'undefined') {
  ['log', 'warn'].forEach(function(methodName) {
    if (typeof console[methodName] !== 'undefined' && console[methodName].apply) {
      fabric[methodName] = function() {
        return console[methodName].apply(console, arguments);
      };
    }
  });
}


(function(global) {

  'use strict';

  /**
   * @name fabric
   * @namespace
   */

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      capitalize = fabric.util.string.capitalize,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed,
      parseUnit = fabric.util.parseUnit,
      multiplyTransformMatrices = fabric.util.multiplyTransformMatrices,

      attributesMap = {
        cx:                   'left',
        x:                    'left',
        r:                    'radius',
        cy:                   'top',
        y:                    'top',
        display:              'visible',
        visibility:           'visible',
        transform:            'transformMatrix',
        'fill-opacity':       'fillOpacity',
        'fill-rule':          'fillRule',
        'font-family':        'fontFamily',
        'font-size':          'fontSize',
        'font-style':         'fontStyle',
        'font-weight':        'fontWeight',
        'stroke-dasharray':   'strokeDashArray',
        'stroke-linecap':     'strokeLineCap',
        'stroke-linejoin':    'strokeLineJoin',
        'stroke-miterlimit':  'strokeMiterLimit',
        'stroke-opacity':     'strokeOpacity',
        'stroke-width':       'strokeWidth',
        'text-decoration':    'textDecoration',
        'text-anchor':        'originX'
      },

      colorAttributes = {
        stroke: 'strokeOpacity',
        fill:   'fillOpacity'
      };

  function normalizeAttr(attr) {
    // transform attribute names
    if (attr in attributesMap) {
      return attributesMap[attr];
    }
    return attr;
  }

  function normalizeValue(attr, value, parentAttributes) {
    var isArray = Object.prototype.toString.call(value) === '[object Array]',
        parsed;

    if ((attr === 'fill' || attr === 'stroke') && value === 'none') {
      value = '';
    }
    else if (attr === 'fillRule') {
      value = (value === 'evenodd') ? 'destination-over' : value;
    }
    else if (attr === 'strokeDashArray') {
      value = value.replace(/,/g, ' ').split(/\s+/).map(function(n) {
        return parseInt(n);
      });
    }
    else if (attr === 'transformMatrix') {
      if (parentAttributes && parentAttributes.transformMatrix) {
        value = multiplyTransformMatrices(
          parentAttributes.transformMatrix, fabric.parseTransformAttribute(value));
      }
      else {
        value = fabric.parseTransformAttribute(value);
      }
    }
    else if (attr === 'visible') {
      value = (value === 'none' || value === 'hidden') ? false : true;
      // display=none on parent element always takes precedence over child element
      if (parentAttributes && parentAttributes.visible === false) {
        value = false;
      }
    }
    else if (attr === 'originX' /* text-anchor */) {
      value = value === 'start' ? 'left' : value === 'end' ? 'right' : 'center';
    }
    else {
      parsed = isArray ? value.map(parseUnit) : parseUnit(value);
    }

    return (!isArray && isNaN(parsed) ? value : parsed);
  }

  /**
   * @private
   * @param {Object} attributes Array of attributes to parse
   */
  function _setStrokeFillOpacity(attributes) {
    for (var attr in colorAttributes) {

      if (!attributes[attr] || typeof attributes[colorAttributes[attr]] === 'undefined') {
        continue;
      }

      if (attributes[attr].indexOf('url(') === 0) {
        continue;
      }

      var color = new fabric.Color(attributes[attr]);
      attributes[attr] = color.setAlpha(toFixed(color.getAlpha() * attributes[colorAttributes[attr]], 2)).toRgba();
    }
    return attributes;
  }

  /**
   * Parses "transform" attribute, returning an array of values
   * @static
   * @function
   * @memberOf fabric
   * @param {String} attributeValue String containing attribute value
   * @return {Array} Array of 6 elements representing transformation matrix
   */
  fabric.parseTransformAttribute = (function() {
    function rotateMatrix(matrix, args) {
      var angle = args[0];

      matrix[0] = Math.cos(angle);
      matrix[1] = Math.sin(angle);
      matrix[2] = -Math.sin(angle);
      matrix[3] = Math.cos(angle);
    }

    function scaleMatrix(matrix, args) {
      var multiplierX = args[0],
          multiplierY = (args.length === 2) ? args[1] : args[0];

      matrix[0] = multiplierX;
      matrix[3] = multiplierY;
    }

    function skewXMatrix(matrix, args) {
      matrix[2] = args[0];
    }

    function skewYMatrix(matrix, args) {
      matrix[1] = args[0];
    }

    function translateMatrix(matrix, args) {
      matrix[4] = args[0];
      if (args.length === 2) {
        matrix[5] = args[1];
      }
    }

    // identity matrix
    var iMatrix = [
          1, // a
          0, // b
          0, // c
          1, // d
          0, // e
          0  // f
        ],

        // == begin transform regexp
        number = '(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)',

        commaWsp = '(?:\\s+,?\\s*|,\\s*)',

        skewX = '(?:(skewX)\\s*\\(\\s*(' + number + ')\\s*\\))',

        skewY = '(?:(skewY)\\s*\\(\\s*(' + number + ')\\s*\\))',

        rotate = '(?:(rotate)\\s*\\(\\s*(' + number + ')(?:' +
                    commaWsp + '(' + number + ')' +
                    commaWsp + '(' + number + '))?\\s*\\))',

        scale = '(?:(scale)\\s*\\(\\s*(' + number + ')(?:' +
                    commaWsp + '(' + number + '))?\\s*\\))',

        translate = '(?:(translate)\\s*\\(\\s*(' + number + ')(?:' +
                    commaWsp + '(' + number + '))?\\s*\\))',

        matrix = '(?:(matrix)\\s*\\(\\s*' +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' +
                  '\\s*\\))',

        transform = '(?:' +
                    matrix + '|' +
                    translate + '|' +
                    scale + '|' +
                    rotate + '|' +
                    skewX + '|' +
                    skewY +
                    ')',

        transforms = '(?:' + transform + '(?:' + commaWsp + transform + ')*' + ')',

        transformList = '^\\s*(?:' + transforms + '?)\\s*$',

        // http://www.w3.org/TR/SVG/coords.html#TransformAttribute
        reTransformList = new RegExp(transformList),
        // == end transform regexp

        reTransform = new RegExp(transform, 'g');

    return function(attributeValue) {

      // start with identity matrix
      var matrix = iMatrix.concat(),
          matrices = [ ];

      // return if no argument was given or
      // an argument does not match transform attribute regexp
      if (!attributeValue || (attributeValue && !reTransformList.test(attributeValue))) {
        return matrix;
      }

      attributeValue.replace(reTransform, function(match) {

        var m = new RegExp(transform).exec(match).filter(function (match) {
              return (match !== '' && match != null);
            }),
            operation = m[1],
            args = m.slice(2).map(parseFloat);

        switch (operation) {
          case 'translate':
            translateMatrix(matrix, args);
            break;
          case 'rotate':
            args[0] = fabric.util.degreesToRadians(args[0]);
            rotateMatrix(matrix, args);
            break;
          case 'scale':
            scaleMatrix(matrix, args);
            break;
          case 'skewX':
            skewXMatrix(matrix, args);
            break;
          case 'skewY':
            skewYMatrix(matrix, args);
            break;
          case 'matrix':
            matrix = args;
            break;
        }

        // snapshot current matrix into matrices array
        matrices.push(matrix.concat());
        // reset
        matrix = iMatrix.concat();
      });

      var combinedMatrix = matrices[0];
      while (matrices.length > 1) {
        matrices.shift();
        combinedMatrix = fabric.util.multiplyTransformMatrices(combinedMatrix, matrices[0]);
      }
      return combinedMatrix;
    };
  })();

  function parseFontDeclaration(value, oStyle) {

    // TODO: support non-px font size
    var match = value.match(/(normal|italic)?\s*(normal|small-caps)?\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\s*(\d+)px(?:\/(normal|[\d\.]+))?\s+(.*)/);

    if (!match) {
      return;
    }

    var fontStyle = match[1],
        // font variant is not used
        // fontVariant = match[2],
        fontWeight = match[3],
        fontSize = match[4],
        lineHeight = match[5],
        fontFamily = match[6];

    if (fontStyle) {
      oStyle.fontStyle = fontStyle;
    }
    if (fontWeight) {
      oStyle.fontWeight = isNaN(parseFloat(fontWeight)) ? fontWeight : parseFloat(fontWeight);
    }
    if (fontSize) {
      oStyle.fontSize = parseFloat(fontSize);
    }
    if (fontFamily) {
      oStyle.fontFamily = fontFamily;
    }
    if (lineHeight) {
      oStyle.lineHeight = lineHeight === 'normal' ? 1 : lineHeight;
    }
  }

  /**
   * @private
   */
  function parseStyleString(style, oStyle) {
    var attr, value;
    style.replace(/;$/, '').split(';').forEach(function (chunk) {
      var pair = chunk.split(':');

      attr = normalizeAttr(pair[0].trim().toLowerCase());
      value = normalizeValue(attr, pair[1].trim());

      if (attr === 'font') {
        parseFontDeclaration(value, oStyle);
      }
      else {
        oStyle[attr] = value;
      }
    });
  }

  /**
   * @private
   */
  function parseStyleObject(style, oStyle) {
    var attr, value;
    for (var prop in style) {
      if (typeof style[prop] === 'undefined') {
        continue;
      }

      attr = normalizeAttr(prop.toLowerCase());
      value = normalizeValue(attr, style[prop]);

      if (attr === 'font') {
        parseFontDeclaration(value, oStyle);
      }
      else {
        oStyle[attr] = value;
      }
    }
  }

  /**
   * @private
   */
  function getGlobalStylesForElement(element) {
    var styles = { };

    for (var rule in fabric.cssRules) {
      if (elementMatchesRule(element, rule.split(' '))) {
        for (var property in fabric.cssRules[rule]) {
          styles[property] = fabric.cssRules[rule][property];
        }
      }
    }
    return styles;
  }

  /**
   * @private
   */
  function elementMatchesRule(element, selectors) {
    var firstMatching, parentMatching = true;
    //start from rightmost selector.
    firstMatching = selectorMatches(element, selectors.pop());
    if (firstMatching && selectors.length) {
      parentMatching = doesSomeParentMatch(element, selectors);
    }
    return firstMatching && parentMatching && (selectors.length === 0);
  }

  function doesSomeParentMatch(element, selectors) {
    var selector, parentMatching = true;
    while (element.parentNode && element.parentNode.nodeType === 1 && selectors.length) {
      if (parentMatching) {
        selector = selectors.pop();
      }
      element = element.parentNode;
      parentMatching = selectorMatches(element, selector);
    }
    return selectors.length === 0;
  }
  /**
   * @private
   */
  function selectorMatches(element, selector) {
    var nodeName = element.nodeName,
        classNames = element.getAttribute('class'),
        id = element.getAttribute('id'), matcher;
    // i check if a selector matches slicing away part from it.
    // if i get empty string i should match
    matcher = new RegExp('^' + nodeName, 'i');
    selector = selector.replace(matcher, '');
    if (id && selector.length) {
      matcher = new RegExp('#' + id + '(?![a-zA-Z\\-]+)', 'i');
      selector = selector.replace(matcher, '');
    }
    if (classNames && selector.length) {
      classNames = classNames.split(' ');
      for (var i = classNames.length; i--;) {
        matcher = new RegExp('\\.' + classNames[i] + '(?![a-zA-Z\\-]+)', 'i');
        selector = selector.replace(matcher, '');
      }
    }
    return selector.length === 0;
  }

  /**
   * @private
   */
  function parseUseDirectives(doc) {
    var nodelist = doc.getElementsByTagName('use');
    while (nodelist.length) {
      var el = nodelist[0],
          xlink = el.getAttribute('xlink:href').substr(1),
          x = el.getAttribute('x') || 0,
          y = el.getAttribute('y') || 0,
          el2 = doc.getElementById(xlink).cloneNode(true),
          currentTrans = (el.getAttribute('transform') || '') + ' translate(' + x + ', ' + y + ')',
          parentNode;

      for (var j = 0, attrs = el.attributes, l = attrs.length; j < l; j++) {
        var attr = attrs.item(j);
        if (attr.nodeName === 'x' || attr.nodeName === 'y' || attr.nodeName === 'xlink:href') {
          continue;
        }

        if (attr.nodeName === 'transform') {
          currentTrans = currentTrans + ' ' + attr.nodeValue;
        }
        else {
          el2.setAttribute(attr.nodeName, attr.nodeValue);
        }
      }

      el2.setAttribute('transform', currentTrans);
      el2.removeAttribute('id');
      parentNode = el.parentNode;
      parentNode.replaceChild(el2, el);
    }
  }

  /**
   * Add a <g> element that envelop all SCG elements and makes the viewbox transformMatrix descend on all elements
   */
  function addSvgTransform(doc, matrix) {
    matrix[3] = matrix[0] = (matrix[0] > matrix[3] ? matrix[3] : matrix[0]);
    if (!(matrix[0] !== 1 || matrix[3] !== 1 || matrix[4] !== 0 || matrix[5] !== 0)) {
      return;
    }
    // default is to preserve aspect ratio
    // preserveAspectRatio attribute to be implemented
    var el = doc.ownerDocument.createElement('g');
    while (doc.firstChild != null) {
      el.appendChild(doc.firstChild);
    }
    el.setAttribute('transform','matrix(' + matrix[0] + ' ' + matrix[1] + ' ' + matrix[2] + ' ' + matrix[3] + ' ' + matrix[4] + ' ' + matrix[5] + ')');
    doc.appendChild(el);
  }

  /**
   * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
   * @static
   * @function
   * @memberOf fabric
   * @param {SVGDocument} doc SVG document to parse
   * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
   * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
   */
  fabric.parseSVGDocument = (function() {

    var reAllowedSVGTagNames = /^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/,

        // http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
        // \d doesn't quite cut it (as we need to match an actual float number)

        // matches, e.g.: +14.56e-12, etc.
        reNum = '(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)',

        reViewBoxAttrValue = new RegExp(
          '^' +
          '\\s*(' + reNum + '+)\\s*,?' +
          '\\s*(' + reNum + '+)\\s*,?' +
          '\\s*(' + reNum + '+)\\s*,?' +
          '\\s*(' + reNum + '+)\\s*' +
          '$'
        );

    function hasAncestorWithNodeName(element, nodeName) {
      while (element && (element = element.parentNode)) {
        if (nodeName.test(element.nodeName)) {
          return true;
        }
      }
      return false;
    }

    return function(doc, callback, reviver) {
      if (!doc) {
        return;
      }
      var startTime = new Date();

      parseUseDirectives(doc);
      /* http://www.w3.org/TR/SVG/struct.html#SVGElementWidthAttribute
      *  as per spec, width and height attributes are to be considered
      *  100% if no value is specified.
      */
      var viewBoxAttr = doc.getAttribute('viewBox'),
          widthAttr = parseUnit(doc.getAttribute('width') || '100%'),
          heightAttr = parseUnit(doc.getAttribute('height') || '100%'),
          viewBoxWidth,
          viewBoxHeight;

      if (viewBoxAttr && (viewBoxAttr = viewBoxAttr.match(reViewBoxAttrValue))) {
        var minX = parseFloat(viewBoxAttr[1]),
            minY = parseFloat(viewBoxAttr[2]),
            scaleX = 1, scaleY = 1;
        viewBoxWidth = parseFloat(viewBoxAttr[3]);
        viewBoxHeight = parseFloat(viewBoxAttr[4]);
        if (widthAttr && widthAttr !== viewBoxWidth ) {
          scaleX = widthAttr / viewBoxWidth;
        }
        if (heightAttr && heightAttr !== viewBoxHeight) {
          scaleY = heightAttr / viewBoxHeight;
        }
        addSvgTransform(doc, [scaleX, 0, 0, scaleY, scaleX * -minX, scaleY * -minY]);
      }

      var descendants = fabric.util.toArray(doc.getElementsByTagName('*'));

      if (descendants.length === 0 && fabric.isLikelyNode) {
        // we're likely in node, where "o3-xml" library fails to gEBTN("*")
        // https://github.com/ajaxorg/node-o3-xml/issues/21
        descendants = doc.selectNodes('//*[name(.)!="svg"]');
        var arr = [ ];
        for (var i = 0, len = descendants.length; i < len; i++) {
          arr[i] = descendants[i];
        }
        descendants = arr;
      }

      var elements = descendants.filter(function(el) {
        return reAllowedSVGTagNames.test(el.tagName) &&
              !hasAncestorWithNodeName(el, /^(?:pattern|defs)$/); // http://www.w3.org/TR/SVG/struct.html#DefsElement
      });

      if (!elements || (elements && !elements.length)) {
        callback && callback([], {});
        return;
      }

      var options = {
        width: widthAttr ? widthAttr : viewBoxWidth,
        height: heightAttr ? heightAttr : viewBoxHeight,
        widthAttr: widthAttr,
        heightAttr: heightAttr
      };

      fabric.gradientDefs = fabric.getGradientDefs(doc);
      fabric.cssRules = fabric.getCSSRules(doc);
      // Precedence of rules:   style > class > attribute

      fabric.parseElements(elements, function(instances) {
        fabric.documentParsingTime = new Date() - startTime;
        if (callback) {
          callback(instances, options);
        }
      }, clone(options), reviver);
    };
  })();

   /**
    * Used for caching SVG documents (loaded via `fabric.Canvas#loadSVGFromURL`)
    * @namespace
    */
  var svgCache = {

    /**
    * @param {String} name
    * @param {Function} callback
    */
    has: function (name, callback) {
      callback(false);
    },

    get: function () {
      /* NOOP */
    },

    set: function () {
      /* NOOP */
    }
  };

  /**
   * @private
   */
  function _enlivenCachedObject(cachedObject) {

    var objects = cachedObject.objects,
        options = cachedObject.options;

    objects = objects.map(function (o) {
      return fabric[capitalize(o.type)].fromObject(o);
    });

    return ({ objects: objects, options: options });
  }

  /**
   * @private
   */
  function _createSVGPattern(markup, canvas, property) {
    if (canvas[property] && canvas[property].toSVG) {
      markup.push(
        '<pattern x="0" y="0" id="', property, 'Pattern" ',
          'width="', canvas[property].source.width,
          '" height="', canvas[property].source.height,
          '" patternUnits="userSpaceOnUse">',
        '<image x="0" y="0" ',
        'width="', canvas[property].source.width,
        '" height="', canvas[property].source.height,
        '" xlink:href="', canvas[property].source.src,
        '"></image></pattern>'
      );
    }
  }

  extend(fabric, {

    /**
     * Parses an SVG document, returning all of the gradient declarations found in it
     * @static
     * @function
     * @memberOf fabric
     * @param {SVGDocument} doc SVG document to parse
     * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
     */
    getGradientDefs: function(doc) {
      var linearGradientEls = doc.getElementsByTagName('linearGradient'),
          radialGradientEls = doc.getElementsByTagName('radialGradient'),
          el, i, j = 0, id, xlink, elList = [ ],
          gradientDefs = { }, idsToXlinkMap = { };

      elList.length = linearGradientEls.length + radialGradientEls.length;
      i = linearGradientEls.length;
      while (i--) {
        elList[j++] = linearGradientEls[i];
      }
      i = radialGradientEls.length;
      while (i--) {
        elList[j++] = radialGradientEls[i];
      }

      while (j--) {
        el = elList[j];
        xlink = el.getAttribute('xlink:href');
        id = el.getAttribute('id');
        if (xlink) {
          idsToXlinkMap[id] = xlink.substr(1);
        }
        gradientDefs[id] = el;
      }

      for (id in idsToXlinkMap) {
        var el2 = gradientDefs[idsToXlinkMap[id]].cloneNode(true);
        el = gradientDefs[id];
        while (el2.firstChild) {
          el.appendChild(el2.firstChild);
        }
      }
      return gradientDefs;
    },

    /**
     * Returns an object of attributes' name/value, given element and an array of attribute names;
     * Parses parent "g" nodes recursively upwards.
     * @static
     * @memberOf fabric
     * @param {DOMElement} element Element to parse
     * @param {Array} attributes Array of attributes to parse
     * @return {Object} object containing parsed attributes' names/values
     */
    parseAttributes: function(element, attributes) {

      if (!element) {
        return;
      }

      var value,
          parentAttributes = { };

      // if there's a parent container (`g` or `a` or `symbol` node), parse its attributes recursively upwards
      if (element.parentNode && /^symbol|[g|a]$/i.test(element.parentNode.nodeName)) {
        parentAttributes = fabric.parseAttributes(element.parentNode, attributes);
      }

      var ownAttributes = attributes.reduce(function(memo, attr) {
        value = element.getAttribute(attr);
        if (value) {
          attr = normalizeAttr(attr);
          value = normalizeValue(attr, value, parentAttributes);

          memo[attr] = value;
        }
        return memo;
      }, { });

      // add values parsed from style, which take precedence over attributes
      // (see: http://www.w3.org/TR/SVG/styling.html#UsingPresentationAttributes)
      ownAttributes = extend(ownAttributes,
        extend(getGlobalStylesForElement(element), fabric.parseStyleAttribute(element)));

      return _setStrokeFillOpacity(extend(parentAttributes, ownAttributes));
    },

    /**
     * Transforms an array of svg elements to corresponding fabric.* instances
     * @static
     * @memberOf fabric
     * @param {Array} elements Array of elements to parse
     * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
     * @param {Object} [options] Options object
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    parseElements: function(elements, callback, options, reviver) {
      new fabric.ElementsParser(elements, callback, options, reviver).parse();
    },

    /**
     * Parses "style" attribute, retuning an object with values
     * @static
     * @memberOf fabric
     * @param {SVGElement} element Element to parse
     * @return {Object} Objects with values parsed from style attribute of an element
     */
    parseStyleAttribute: function(element) {
      var oStyle = { },
          style = element.getAttribute('style');

      if (!style) {
        return oStyle;
      }

      if (typeof style === 'string') {
        parseStyleString(style, oStyle);
      }
      else {
        parseStyleObject(style, oStyle);
      }

      return oStyle;
    },

    /**
     * Parses "points" attribute, returning an array of values
     * @static
     * @memberOf fabric
     * @param {String} points points attribute string
     * @return {Array} array of points
     */
    parsePointsAttribute: function(points) {

      // points attribute is required and must not be empty
      if (!points) {
        return null;
      }

      // replace commas with whitespace and remove bookending whitespace
      points = points.replace(/,/g, ' ').trim();

      points = points.split(/\s+/);
      var parsedPoints = [ ], i, len;

      i = 0;
      len = points.length;
      for (; i < len; i+=2) {
        parsedPoints.push({
          x: parseFloat(points[i]),
          y: parseFloat(points[i + 1])
        });
      }

      // odd number of points is an error
      // if (parsedPoints.length % 2 !== 0) {
        // return null;
      // }

      return parsedPoints;
    },

    /**
     * Returns CSS rules for a given SVG document
     * @static
     * @function
     * @memberOf fabric
     * @param {SVGDocument} doc SVG document to parse
     * @return {Object} CSS rules of this document
     */
    getCSSRules: function(doc) {
      var styles = doc.getElementsByTagName('style'),
          allRules = { }, rules;

      // very crude parsing of style contents
      for (var i = 0, len = styles.length; i < len; i++) {
        var styleContents = styles[0].textContent;

        // remove comments
        styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, '');

        rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
        rules = rules.map(function(rule) { return rule.trim(); });

        rules.forEach(function(rule) {

          var match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/),
          ruleObj = { }, declaration = match[2].trim(),
          propertyValuePairs = declaration.replace(/;$/, '').split(/\s*;\s*/);

          for (var i = 0, len = propertyValuePairs.length; i < len; i++) {
            var pair = propertyValuePairs[i].split(/\s*:\s*/),
                property = normalizeAttr(pair[0]),
                value = normalizeValue(property,pair[1],pair[0]);
            ruleObj[property] = value;
          }
          rule = match[1];
          rule.split(',').forEach(function(_rule) {
            allRules[_rule.trim()] = fabric.util.object.clone(ruleObj);
          });
        });
      }
      return allRules;
    },

    /**
     * Takes url corresponding to an SVG document, and parses it into a set of fabric objects. Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
     * @memberof fabric
     * @param {String} url
     * @param {Function} callback
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    loadSVGFromURL: function(url, callback, reviver) {

      url = url.replace(/^\n\s*/, '').trim();
      svgCache.has(url, function (hasUrl) {
        if (hasUrl) {
          svgCache.get(url, function (value) {
            var enlivedRecord = _enlivenCachedObject(value);
            callback(enlivedRecord.objects, enlivedRecord.options);
          });
        }
        else {
          new fabric.util.request(url, {
            method: 'get',
            onComplete: onComplete
          });
        }
      });

      function onComplete(r) {

        var xml = r.responseXML;
        if (xml && !xml.documentElement && fabric.window.ActiveXObject && r.responseText) {
          xml = new ActiveXObject('Microsoft.XMLDOM');
          xml.async = 'false';
          //IE chokes on DOCTYPE
          xml.loadXML(r.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,''));
        }
        if (!xml || !xml.documentElement) {
          return;
        }

        fabric.parseSVGDocument(xml.documentElement, function (results, options) {
          svgCache.set(url, {
            objects: fabric.util.array.invoke(results, 'toObject'),
            options: options
          });
          callback(results, options);
        }, reviver);
      }
    },

    /**
     * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
     * @memberof fabric
     * @param {String} string
     * @param {Function} callback
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    loadSVGFromString: function(string, callback, reviver) {
      string = string.trim();
      var doc;
      if (typeof DOMParser !== 'undefined') {
        var parser = new DOMParser();
        if (parser && parser.parseFromString) {
          doc = parser.parseFromString(string, 'text/xml');
        }
      }
      else if (fabric.window.ActiveXObject) {
        doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.async = 'false';
        //IE chokes on DOCTYPE
        doc.loadXML(string.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,''));
      }

      fabric.parseSVGDocument(doc.documentElement, function (results, options) {
        callback(results, options);
      }, reviver);
    },

    /**
     * Creates markup containing SVG font faces
     * @param {Array} objects Array of fabric objects
     * @return {String}
     */
    createSVGFontFacesMarkup: function(objects) {
      var markup = '';

      for (var i = 0, len = objects.length; i < len; i++) {
        if (objects[i].type !== 'text' || !objects[i].path) {
          continue;
        }

        markup += [
          //jscs:disable validateIndentation
          '@font-face {',
            'font-family: ', objects[i].fontFamily, '; ',
            'src: url(\'', objects[i].path, '\')',
          '}'
          //jscs:enable validateIndentation
        ].join('');
      }

      if (markup) {
        markup = [
          //jscs:disable validateIndentation
          '<style type="text/css">',
            '<![CDATA[',
              markup,
            ']]>',
          '</style>'
          //jscs:enable validateIndentation
        ].join('');
      }

      return markup;
    },

    /**
     * Creates markup containing SVG referenced elements like patterns, gradients etc.
     * @param {fabric.Canvas} canvas instance of fabric.Canvas
     * @return {String}
     */
    createSVGRefElementsMarkup: function(canvas) {
      var markup = [ ];

      _createSVGPattern(markup, canvas, 'backgroundColor');
      _createSVGPattern(markup, canvas, 'overlayColor');

      return markup.join('');
    }
  });

})(typeof exports !== 'undefined' ? exports : this);


fabric.ElementsParser = function(elements, callback, options, reviver) {
  this.elements = elements;
  this.callback = callback;
  this.options = options;
  this.reviver = reviver;
};

fabric.ElementsParser.prototype.parse = function() {
  this.instances = new Array(this.elements.length);
  this.numElements = this.elements.length;

  this.createObjects();
};

fabric.ElementsParser.prototype.createObjects = function() {
  for (var i = 0, len = this.elements.length; i < len; i++) {
    (function(_this, i) {
      setTimeout(function() {
        _this.createObject(_this.elements[i], i);
      }, 0);
    })(this, i);
  }
};

fabric.ElementsParser.prototype.createObject = function(el, index) {
  var klass = fabric[fabric.util.string.capitalize(el.tagName)];
  if (klass && klass.fromElement) {
    try {
      this._createObject(klass, el, index);
    }
    catch (err) {
      fabric.log(err);
    }
  }
  else {
    this.checkIfDone();
  }
};

fabric.ElementsParser.prototype._createObject = function(klass, el, index) {
  if (klass.async) {
    klass.fromElement(el, this.createCallback(index, el), this.options);
  }
  else {
    var obj = klass.fromElement(el, this.options);
    this.resolveGradient(obj, 'fill');
    this.resolveGradient(obj, 'stroke');
    this.reviver && this.reviver(el, obj);
    this.instances[index] = obj;
    this.checkIfDone();
  }
};

fabric.ElementsParser.prototype.createCallback = function(index, el) {
  var _this = this;
  return function(obj) {
    _this.resolveGradient(obj, 'fill');
    _this.resolveGradient(obj, 'stroke');
    _this.reviver && _this.reviver(el, obj);
    _this.instances[index] = obj;
    _this.checkIfDone();
  };
};

fabric.ElementsParser.prototype.resolveGradient = function(obj, property) {

  var instanceFillValue = obj.get(property);
  if (!(/^url\(/).test(instanceFillValue)) {
    return;
  }
  var gradientId = instanceFillValue.slice(5, instanceFillValue.length - 1);
  if (fabric.gradientDefs[gradientId]) {
    obj.set(property,
      fabric.Gradient.fromElement(fabric.gradientDefs[gradientId], obj));
  }
};

fabric.ElementsParser.prototype.checkIfDone = function() {
  if (--this.numElements === 0) {
    this.instances = this.instances.filter(function(el) {
      return el != null;
    });
    this.callback(this.instances);
  }
};


(function(global) {

  'use strict';

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Point) {
    fabric.warn('fabric.Point is already defined');
    return;
  }

  fabric.Point = Point;

  /**
   * Point class
   * @class fabric.Point
   * @memberOf fabric
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @return {fabric.Point} thisArg
   */
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype = /** @lends fabric.Point.prototype */ {

    constructor: Point,

    /**
     * Adds another point to this one and returns another one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point instance with added values
     */
    add: function (that) {
      return new Point(this.x + that.x, this.y + that.y);
    },

    /**
     * Adds another point to this one
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    addEquals: function (that) {
      this.x += that.x;
      this.y += that.y;
      return this;
    },

    /**
     * Adds value to this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point} new Point with added value
     */
    scalarAdd: function (scalar) {
      return new Point(this.x + scalar, this.y + scalar);
    },

    /**
     * Adds value to this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    scalarAddEquals: function (scalar) {
      this.x += scalar;
      this.y += scalar;
      return this;
    },

    /**
     * Subtracts another point from this point and returns a new one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point object with subtracted values
     */
    subtract: function (that) {
      return new Point(this.x - that.x, this.y - that.y);
    },

    /**
     * Subtracts another point from this point
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    subtractEquals: function (that) {
      this.x -= that.x;
      this.y -= that.y;
      return this;
    },

    /**
     * Subtracts value from this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    scalarSubtract: function (scalar) {
      return new Point(this.x - scalar, this.y - scalar);
    },

    /**
     * Subtracts value from this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    scalarSubtractEquals: function (scalar) {
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },

    /**
     * Miltiplies this point by a value and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    multiply: function (scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    },

    /**
     * Miltiplies this point by a value
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    multiplyEquals: function (scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    /**
     * Divides this point by a value and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    divide: function (scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    },

    /**
     * Divides this point by a value
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     */
    divideEquals: function (scalar) {
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },

    /**
     * Returns true if this point is equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    eq: function (that) {
      return (this.x === that.x && this.y === that.y);
    },

    /**
     * Returns true if this point is less than another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lt: function (that) {
      return (this.x < that.x && this.y < that.y);
    },

    /**
     * Returns true if this point is less than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lte: function (that) {
      return (this.x <= that.x && this.y <= that.y);
    },

    /**

     * Returns true if this point is greater another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gt: function (that) {
      return (this.x > that.x && this.y > that.y);
    },

    /**
     * Returns true if this point is greater than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gte: function (that) {
      return (this.x >= that.x && this.y >= that.y);
    },

    /**
     * Returns new point which is the result of linear interpolation with this one and another one
     * @param {fabric.Point} that
     * @param {Number} t
     * @return {fabric.Point}
     */
    lerp: function (that, t) {
      return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    },

    /**
     * Returns distance from this point and another one
     * @param {fabric.Point} that
     * @return {Number}
     */
    distanceFrom: function (that) {
      var dx = this.x - that.x,
          dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Returns the point between this point and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    midPointFrom: function (that) {
      return new Point(this.x + (that.x - this.x)/2, this.y + (that.y - this.y)/2);
    },

    /**
     * Returns a new point which is the min of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    min: function (that) {
      return new Point(Math.min(this.x, that.x), Math.min(this.y, that.y));
    },

    /**
     * Returns a new point which is the max of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    max: function (that) {
      return new Point(Math.max(this.x, that.x), Math.max(this.y, that.y));
    },

    /**
     * Returns string representation of this point
     * @return {String}
     */
    toString: function () {
      return this.x + ',' + this.y;
    },

    /**
     * Sets x/y of this point
     * @param {Number} x
     * @return {Number} y
     */
    setXY: function (x, y) {
      this.x = x;
      this.y = y;
    },

    /**
     * Sets x/y of this point from another point
     * @param {fabric.Point} that
     */
    setFromPoint: function (that) {
      this.x = that.x;
      this.y = that.y;
    },

    /**
     * Swaps x/y of this point and another point
     * @param {fabric.Point} that
     */
    swap: function (that) {
      var x = this.x,
          y = this.y;
      this.x = that.x;
      this.y = that.y;
      that.x = x;
      that.y = y;
    }
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */
  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Intersection) {
    fabric.warn('fabric.Intersection is already defined');
    return;
  }

  /**
   * Intersection class
   * @class fabric.Intersection
   * @memberOf fabric
   * @constructor
   */
  function Intersection(status) {
    this.status = status;
    this.points = [];
  }

  fabric.Intersection = Intersection;

  fabric.Intersection.prototype = /** @lends fabric.Intersection.prototype */ {

    /**
     * Appends a point to intersection
     * @param {fabric.Point} point
     */
    appendPoint: function (point) {
      this.points.push(point);
    },

    /**
     * Appends points to intersection
     * @param {Array} points
     */
    appendPoints: function (points) {
      this.points = this.points.concat(points);
    }
  };

  /**
   * Checks if one line intersects another
   * @static
   * @param {fabric.Point} a1
   * @param {fabric.Point} a2
   * @param {fabric.Point} b1
   * @param {fabric.Point} b2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectLineLine = function (a1, a2, b1, b2) {
    var result,
        uaT = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
        ubT = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
        uB = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (uB !== 0) {
      var ua = uaT / uB,
          ub = ubT / uB;
      if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
        result = new Intersection('Intersection');
        result.points.push(new fabric.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
      }
      else {
        result = new Intersection();
      }
    }
    else {
      if (uaT === 0 || ubT === 0) {
        result = new Intersection('Coincident');
      }
      else {
        result = new Intersection('Parallel');
      }
    }
    return result;
  };

  /**
   * Checks if line intersects polygon
   * @static
   * @param {fabric.Point} a1
   * @param {fabric.Point} a2
   * @param {Array} points
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectLinePolygon = function(a1,a2,points){
    var result = new Intersection(),
        length = points.length;

    for (var i = 0; i < length; i++) {
      var b1 = points[i],
          b2 = points[(i + 1) % length],
          inter = Intersection.intersectLineLine(a1, a2, b1, b2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

  /**
   * Checks if polygon intersects another polygon
   * @static
   * @param {Array} points1
   * @param {Array} points2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectPolygonPolygon = function (points1, points2) {
    var result = new Intersection(),
        length = points1.length;

    for (var i = 0; i < length; i++) {
      var a1 = points1[i],
          a2 = points1[(i + 1) % length],
          inter = Intersection.intersectLinePolygon(a1, a2, points2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

  /**
   * Checks if polygon intersects rectangle
   * @static
   * @param {Array} points
   * @param {Number} r1
   * @param {Number} r2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectPolygonRectangle = function (points, r1, r2) {
    var min = r1.min(r2),
        max = r1.max(r2),
        topRight = new fabric.Point(max.x, min.y),
        bottomLeft = new fabric.Point(min.x, max.y),
        inter1 = Intersection.intersectLinePolygon(min, topRight, points),
        inter2 = Intersection.intersectLinePolygon(topRight, max, points),
        inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points),
        inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points),
        result = new Intersection();

    result.appendPoints(inter1.points);
    result.appendPoints(inter2.points);
    result.appendPoints(inter3.points);
    result.appendPoints(inter4.points);

    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Color) {
    fabric.warn('fabric.Color is already defined.');
    return;
  }

  /**
   * Color class
   * The purpose of {@link fabric.Color} is to abstract and encapsulate common color operations;
   * {@link fabric.Color} is a constructor and creates instances of {@link fabric.Color} objects.
   *
   * @class fabric.Color
   * @param {String} color optional in hex or rgb(a) format
   * @return {fabric.Color} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#colors}
   */
  function Color(color) {
    if (!color) {
      this.setSource([0, 0, 0, 1]);
    }
    else {
      this._tryParsingColor(color);
    }
  }

  fabric.Color = Color;

  fabric.Color.prototype = /** @lends fabric.Color.prototype */ {

    /**
     * @private
     * @param {String|Array} color Color value to parse
     */
    _tryParsingColor: function(color) {
      var source;

      if (color in Color.colorNameMap) {
        color = Color.colorNameMap[color];
      }

      if (color === 'transparent') {
        this.setSource([255,255,255,0]);
        return;
      }

      source = Color.sourceFromHex(color);

      if (!source) {
        source = Color.sourceFromRgb(color);
      }
      if (!source) {
        source = Color.sourceFromHsl(color);
      }
      if (source) {
        this.setSource(source);
      }
    },

    /**
     * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
     * @private
     * @param {Number} r Red color value
     * @param {Number} g Green color value
     * @param {Number} b Blue color value
     * @return {Array} Hsl color
     */
    _rgbToHsl: function(r, g, b) {
      r /= 255, g /= 255, b /= 255;

      var h, s, l,
          max = fabric.util.array.max([r, g, b]),
          min = fabric.util.array.min([r, g, b]);

      l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      }
      else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [
        Math.round(h * 360),
        Math.round(s * 100),
        Math.round(l * 100)
      ];
    },

    /**
     * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @return {Array}
     */
    getSource: function() {
      return this._source;
    },

    /**
     * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @param {Array} source
     */
    setSource: function(source) {
      this._source = source;
    },

    /**
     * Returns color represenation in RGB format
     * @return {String} ex: rgb(0-255,0-255,0-255)
     */
    toRgb: function() {
      var source = this.getSource();
      return 'rgb(' + source[0] + ',' + source[1] + ',' + source[2] + ')';
    },

    /**
     * Returns color represenation in RGBA format
     * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
     */
    toRgba: function() {
      var source = this.getSource();
      return 'rgba(' + source[0] + ',' + source[1] + ',' + source[2] + ',' + source[3] + ')';
    },

    /**
     * Returns color represenation in HSL format
     * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
     */
    toHsl: function() {
      var source = this.getSource(),
          hsl = this._rgbToHsl(source[0], source[1], source[2]);

      return 'hsl(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%)';
    },

    /**
     * Returns color represenation in HSLA format
     * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
     */
    toHsla: function() {
      var source = this.getSource(),
          hsl = this._rgbToHsl(source[0], source[1], source[2]);

      return 'hsla(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%,' + source[3] + ')';
    },

    /**
     * Returns color represenation in HEX format
     * @return {String} ex: FF5555
     */
    toHex: function() {
      var source = this.getSource(), r, g, b;

      r = source[0].toString(16);
      r = (r.length === 1) ? ('0' + r) : r;

      g = source[1].toString(16);
      g = (g.length === 1) ? ('0' + g) : g;

      b = source[2].toString(16);
      b = (b.length === 1) ? ('0' + b) : b;

      return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    },

    /**
     * Gets value of alpha channel for this color
     * @return {Number} 0-1
     */
    getAlpha: function() {
      return this.getSource()[3];
    },

    /**
     * Sets value of alpha channel for this color
     * @param {Number} alpha Alpha value 0-1
     * @return {fabric.Color} thisArg
     */
    setAlpha: function(alpha) {
      var source = this.getSource();
      source[3] = alpha;
      this.setSource(source);
      return this;
    },

    /**
     * Transforms color to its grayscale representation
     * @return {fabric.Color} thisArg
     */
    toGrayscale: function() {
      var source = this.getSource(),
          average = parseInt((source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0), 10),
          currentAlpha = source[3];
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Transforms color to its black and white representation
     * @param {Number} threshold
     * @return {fabric.Color} thisArg
     */
    toBlackWhite: function(threshold) {
      var source = this.getSource(),
          average = (source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0),
          currentAlpha = source[3];

      threshold = threshold || 127;

      average = (Number(average) < Number(threshold)) ? 0 : 255;
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Overlays color with another color
     * @param {String|fabric.Color} otherColor
     * @return {fabric.Color} thisArg
     */
    overlayWith: function(otherColor) {
      if (!(otherColor instanceof Color)) {
        otherColor = new Color(otherColor);
      }

      var result = [],
          alpha = this.getAlpha(),
          otherAlpha = 0.5,
          source = this.getSource(),
          otherSource = otherColor.getSource();

      for (var i = 0; i < 3; i++) {
        result.push(Math.round((source[i] * (1 - otherAlpha)) + (otherSource[i] * otherAlpha)));
      }

      result[3] = alpha;
      this.setSource(result);
      return this;
    }
  };

  /**
   * Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgba(255, 100, 10, 0.5), rgba( 255 , 100 , 10 , 0.5 ), rgb(1,1,1), rgba(100%, 60%, 10%, 0.5))
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/;

  /**
   * Regex matching color in HSL or HSLA formats (ex: hsl(200, 80%, 10%), hsla(300, 50%, 80%, 0.5), hsla( 300 , 50% , 80% , 0.5 ))
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/;

  /**
   * Regex matching color in HEX format (ex: #FF5555, 010155, aff)
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reHex = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;

  /**
   * Map of the 17 basic color names with HEX code
   * @static
   * @field
   * @memberOf fabric.Color
   * @see: http://www.w3.org/TR/CSS2/syndata.html#color-units
   */
  fabric.Color.colorNameMap = {
    aqua:    '#00FFFF',
    black:   '#000000',
    blue:    '#0000FF',
    fuchsia: '#FF00FF',
    gray:    '#808080',
    green:   '#008000',
    lime:    '#00FF00',
    maroon:  '#800000',
    navy:    '#000080',
    olive:   '#808000',
    orange:  '#FFA500',
    purple:  '#800080',
    red:     '#FF0000',
    silver:  '#C0C0C0',
    teal:    '#008080',
    white:   '#FFFFFF',
    yellow:  '#FFFF00'
  };

  /**
   * @private
   * @param {Number} p
   * @param {Number} q
   * @param {Number} t
   * @return {Number}
   */
  function hue2rgb(p, q, t){
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1/6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1/2) {
      return q;
    }
    if (t < 2/3) {
      return p + (q - p) * (2/3 - t) * 6;
    }
    return p;
  }

  /**
   * Returns new color object, when given a color in RGB format
   * @memberOf fabric.Color
   * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
   * @return {fabric.Color}
   */
  fabric.Color.fromRgb = function(color) {
    return Color.fromSource(Color.sourceFromRgb(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
   * @memberOf fabric.Color
   * @param {String} color Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
   * @return {Array} source
   */
  fabric.Color.sourceFromRgb = function(color) {
    var match = color.match(Color.reRGBa);
    if (match) {
      var r = parseInt(match[1], 10) / (/%$/.test(match[1]) ? 100 : 1) * (/%$/.test(match[1]) ? 255 : 1),
          g = parseInt(match[2], 10) / (/%$/.test(match[2]) ? 100 : 1) * (/%$/.test(match[2]) ? 255 : 1),
          b = parseInt(match[3], 10) / (/%$/.test(match[3]) ? 100 : 1) * (/%$/.test(match[3]) ? 255 : 1);

      return [
        parseInt(r, 10),
        parseInt(g, 10),
        parseInt(b, 10),
        match[4] ? parseFloat(match[4]) : 1
      ];
    }
  };

  /**
   * Returns new color object, when given a color in RGBA format
   * @static
   * @function
   * @memberOf fabric.Color
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromRgba = Color.fromRgb;

  /**
   * Returns new color object, when given a color in HSL format
   * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
   * @memberOf fabric.Color
   * @return {fabric.Color}
   */
  fabric.Color.fromHsl = function(color) {
    return Color.fromSource(Color.sourceFromHsl(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
   * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
   * @memberOf fabric.Color
   * @param {String} color Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
   * @return {Array} source
   * @see http://http://www.w3.org/TR/css3-color/#hsl-color
   */
  fabric.Color.sourceFromHsl = function(color) {
    var match = color.match(Color.reHSLa);
    if (!match) {
      return;
    }

    var h = (((parseFloat(match[1]) % 360) + 360) % 360) / 360,
        s = parseFloat(match[2]) / (/%$/.test(match[2]) ? 100 : 1),
        l = parseFloat(match[3]) / (/%$/.test(match[3]) ? 100 : 1),
        r, g, b;

    if (s === 0) {
      r = g = b = l;
    }
    else {
      var q = l <= 0.5 ? l * (s + 1) : l + s - l * s,
          p = l * 2 - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255),
      match[4] ? parseFloat(match[4]) : 1
    ];
  };

  /**
   * Returns new color object, when given a color in HSLA format
   * @static
   * @function
   * @memberOf fabric.Color
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromHsla = Color.fromHsl;

  /**
   * Returns new color object, when given a color in HEX format
   * @static
   * @memberOf fabric.Color
   * @param {String} color Color value ex: FF5555
   * @return {fabric.Color}
   */
  fabric.Color.fromHex = function(color) {
    return Color.fromSource(Color.sourceFromHex(color));
  };

  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
   * @static
   * @memberOf fabric.Color
   * @param {String} color ex: FF5555
   * @return {Array} source
   */
  fabric.Color.sourceFromHex = function(color) {
    if (color.match(Color.reHex)) {
      var value = color.slice(color.indexOf('#') + 1),
          isShortNotation = (value.length === 3),
          r = isShortNotation ? (value.charAt(0) + value.charAt(0)) : value.substring(0, 2),
          g = isShortNotation ? (value.charAt(1) + value.charAt(1)) : value.substring(2, 4),
          b = isShortNotation ? (value.charAt(2) + value.charAt(2)) : value.substring(4, 6);

      return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
        1
      ];
    }
  };

  /**
   * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
   * @static
   * @memberOf fabric.Color
   * @param {Array} source
   * @return {fabric.Color}
   */
  fabric.Color.fromSource = function(source) {
    var oColor = new Color();
    oColor.setSource(source);
    return oColor;
  };

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  /* _FROM_SVG_START_ */
  function getColorStop(el) {
    var style = el.getAttribute('style'),
        offset = el.getAttribute('offset'),
        color, colorAlpha, opacity;

    // convert percents to absolute values
    offset = parseFloat(offset) / (/%$/.test(offset) ? 100 : 1);
    offset = offset < 0 ? 0 : offset > 1 ? 1 : offset;
    if (style) {
      var keyValuePairs = style.split(/\s*;\s*/);

      if (keyValuePairs[keyValuePairs.length - 1] === '') {
        keyValuePairs.pop();
      }

      for (var i = keyValuePairs.length; i--; ) {

        var split = keyValuePairs[i].split(/\s*:\s*/),
            key = split[0].trim(),
            value = split[1].trim();

        if (key === 'stop-color') {
          color = value;
        }
        else if (key === 'stop-opacity') {
          opacity = value;
        }
      }
    }

    if (!color) {
      color = el.getAttribute('stop-color') || 'rgb(0,0,0)';
    }
    if (!opacity) {
      opacity = el.getAttribute('stop-opacity');
    }

    color = new fabric.Color(color);
    colorAlpha = color.getAlpha();
    opacity = isNaN(parseFloat(opacity)) ? 1 : parseFloat(opacity);
    opacity *= colorAlpha;

    return {
      offset: offset,
      color: color.toRgb(),
      opacity: opacity
    };
  }

  function getLinearCoords(el) {
    return {
      x1: el.getAttribute('x1') || 0,
      y1: el.getAttribute('y1') || 0,
      x2: el.getAttribute('x2') || '100%',
      y2: el.getAttribute('y2') || 0
    };
  }

  function getRadialCoords(el) {
    return {
      x1: el.getAttribute('fx') || el.getAttribute('cx') || '50%',
      y1: el.getAttribute('fy') || el.getAttribute('cy') || '50%',
      r1: 0,
      x2: el.getAttribute('cx') || '50%',
      y2: el.getAttribute('cy') || '50%',
      r2: el.getAttribute('r') || '50%'
    };
  }
  /* _FROM_SVG_END_ */

  /**
   * Gradient class
   * @class fabric.Gradient
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#gradients}
   * @see {@link fabric.Gradient#initialize} for constructor definition
   */
  fabric.Gradient = fabric.util.createClass(/** @lends fabric.Gradient.prototype */ {

    /**
     * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
     * @type Number
     * @default 0
     */
    offsetX: 0,

    /**
     * Vertical offset for aligning gradients coming from SVG when outside pathgroups
     * @type Number
     * @default 0
     */
    offsetY: 0,

    /**
     * Constructor
     * @param {Object} [options] Options object with type, coords, gradientUnits and colorStops
     * @return {fabric.Gradient} thisArg
     */
    initialize: function(options) {
      options || (options = { });

      var coords = { };

      this.id = fabric.Object.__uid++;
      this.type = options.type || 'linear';

      coords = {
        x1: options.coords.x1 || 0,
        y1: options.coords.y1 || 0,
        x2: options.coords.x2 || 0,
        y2: options.coords.y2 || 0
      };

      if (this.type === 'radial') {
        coords.r1 = options.coords.r1 || 0;
        coords.r2 = options.coords.r2 || 0;
      }
      this.coords = coords;
      this.colorStops = options.colorStops.slice();
      if (options.gradientTransform) {
        this.gradientTransform = options.gradientTransform;
      }
      this.offsetX = options.offsetX || this.offsetX;
      this.offsetY = options.offsetY || this.offsetY;
    },

    /**
     * Adds another colorStop
     * @param {Object} colorStop Object with offset and color
     * @return {fabric.Gradient} thisArg
     */
    addColorStop: function(colorStop) {
      for (var position in colorStop) {
        var color = new fabric.Color(colorStop[position]);
        this.colorStops.push({
          offset: position,
          color: color.toRgb(),
          opacity: color.getAlpha()
        });
      }
      return this;
    },

    /**
     * Returns object representation of a gradient
     * @return {Object}
     */
    toObject: function() {
      return {
        type: this.type,
        coords: this.coords,
        colorStops: this.colorStops,
        offsetX: this.offsetX,
        offsetY: this.offsetY
      };
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an gradient
     * @param {Object} object Object to create a gradient for
     * @param {Boolean} normalize Whether coords should be normalized
     * @return {String} SVG representation of an gradient (linear/radial)
     */
    toSVG: function(object) {
      var coords = fabric.util.object.clone(this.coords),
          markup, commonAttributes;

      // colorStops must be sorted ascending
      this.colorStops.sort(function(a, b) {
        return a.offset - b.offset;
      });

      if (!(object.group && object.group.type === 'path-group')) {
        for (var prop in coords) {
          if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
            coords[prop] += this.offsetX - object.width / 2;
          }
          else if (prop === 'y1' || prop === 'y2') {
            coords[prop] += this.offsetY - object.height / 2;
          }
        }
      }

      commonAttributes = 'id="SVGID_' + this.id +
                     '" gradientUnits="userSpaceOnUse"';
      if (this.gradientTransform) {
        commonAttributes += ' gradientTransform="matrix(' + this.gradientTransform.join(' ') + ')" ';
      }
      if (this.type === 'linear') {
        markup = [
          //jscs:disable validateIndentation
          '<linearGradient ',
            commonAttributes,
            ' x1="', coords.x1,
            '" y1="', coords.y1,
            '" x2="', coords.x2,
            '" y2="', coords.y2,
          '">\n'
          //jscs:enable validateIndentation
        ];
      }
      else if (this.type === 'radial') {
        markup = [
          //jscs:disable validateIndentation
          '<radialGradient ',
            commonAttributes,
            ' cx="', coords.x2,
            '" cy="', coords.y2,
            '" r="', coords.r2,
            '" fx="', coords.x1,
            '" fy="', coords.y1,
          '">\n'
          //jscs:enable validateIndentation
        ];
      }

      for (var i = 0; i < this.colorStops.length; i++) {
        markup.push(
          //jscs:disable validateIndentation
          '<stop ',
            'offset="', (this.colorStops[i].offset * 100) + '%',
            '" style="stop-color:', this.colorStops[i].color,
            (this.colorStops[i].opacity != null ? ';stop-opacity: ' + this.colorStops[i].opacity : ';'),
          '"/>\n'
          //jscs:enable validateIndentation
        );
      }

      markup.push((this.type === 'linear' ? '</linearGradient>\n' : '</radialGradient>\n'));

      return markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns an instance of CanvasGradient
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @return {CanvasGradient}
     */
    toLive: function(ctx) {
      var gradient;

      if (!this.type) {
        return;
      }

      if (this.type === 'linear') {
        gradient = ctx.createLinearGradient(
          this.coords.x1, this.coords.y1, this.coords.x2, this.coords.y2);
      }
      else if (this.type === 'radial') {
        gradient = ctx.createRadialGradient(
          this.coords.x1, this.coords.y1, this.coords.r1, this.coords.x2, this.coords.y2, this.coords.r2);
      }

      for (var i = 0, len = this.colorStops.length; i < len; i++) {
        var color = this.colorStops[i].color,
            opacity = this.colorStops[i].opacity,
            offset = this.colorStops[i].offset;

        if (typeof opacity !== 'undefined') {
          color = new fabric.Color(color).setAlpha(opacity).toRgba();
        }
        gradient.addColorStop(parseFloat(offset), color);
      }

      return gradient;
    }
  });

  fabric.util.object.extend(fabric.Gradient, {

    /* _FROM_SVG_START_ */
    /**
     * Returns {@link fabric.Gradient} instance from an SVG element
     * @static
     * @memberof fabric.Gradient
     * @param {SVGGradientElement} el SVG gradient element
     * @param {fabric.Object} instance
     * @return {fabric.Gradient} Gradient instance
     * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
     * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
     */
    fromElement: function(el, instance) {

      /**
       *  @example:
       *
       *  <linearGradient id="linearGrad1">
       *    <stop offset="0%" stop-color="white"/>
       *    <stop offset="100%" stop-color="black"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <linearGradient id="linearGrad2">
       *    <stop offset="0" style="stop-color:rgb(255,255,255)"/>
       *    <stop offset="1" style="stop-color:rgb(0,0,0)"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <radialGradient id="radialGrad1">
       *    <stop offset="0%" stop-color="white" stop-opacity="1" />
       *    <stop offset="50%" stop-color="black" stop-opacity="0.5" />
       *    <stop offset="100%" stop-color="white" stop-opacity="1" />
       *  </radialGradient>
       *
       *  OR
       *
       *  <radialGradient id="radialGrad2">
       *    <stop offset="0" stop-color="rgb(255,255,255)" />
       *    <stop offset="0.5" stop-color="rgb(0,0,0)" />
       *    <stop offset="1" stop-color="rgb(255,255,255)" />
       *  </radialGradient>
       *
       */

      var colorStopEls = el.getElementsByTagName('stop'),
          type = (el.nodeName === 'linearGradient' ? 'linear' : 'radial'),
          gradientUnits = el.getAttribute('gradientUnits') || 'objectBoundingBox',
          gradientTransform = el.getAttribute('gradientTransform'),
          colorStops = [],
          coords = { }, ellipseMatrix;

      if (type === 'linear') {
        coords = getLinearCoords(el);
      }
      else if (type === 'radial') {
        coords = getRadialCoords(el);
      }

      for (var i = colorStopEls.length; i--; ) {
        colorStops.push(getColorStop(colorStopEls[i]));
      }

      ellipseMatrix = _convertPercentUnitsToValues(instance, coords, gradientUnits);

      var gradient = new fabric.Gradient({
        type: type,
        coords: coords,
        colorStops: colorStops,
        offsetX: -instance.left,
        offsetY: -instance.top
      });

      if (gradientTransform || ellipseMatrix !== '') {
        gradient.gradientTransform = fabric.parseTransformAttribute((gradientTransform || '') + ellipseMatrix);
      }
      return gradient;
    },
    /* _FROM_SVG_END_ */

    /**
     * Returns {@link fabric.Gradient} instance from its object representation
     * @static
     * @memberof fabric.Gradient
     * @param {Object} obj
     * @param {Object} [options] Options object
     */
    forObject: function(obj, options) {
      options || (options = { });
      _convertPercentUnitsToValues(obj, options.coords, 'userSpaceOnUse');
      return new fabric.Gradient(options);
    }
  });

  /**
   * @private
   */
  function _convertPercentUnitsToValues(object, options, gradientUnits) {
    var propValue, addFactor = 0, multFactor = 1, ellipseMatrix = '';
    for (var prop in options) {
      propValue = parseFloat(options[prop], 10);
      if (typeof options[prop] === 'string' && /^\d+%$/.test(options[prop])) {
        multFactor = 0.01;
      }
      else {
        multFactor = 1;
      }
      if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
        multFactor *= gradientUnits === 'objectBoundingBox' ? object.width : 1;
        addFactor = gradientUnits === 'objectBoundingBox' ? object.left || 0 : 0;
      }
      else if (prop === 'y1' || prop === 'y2') {
        multFactor *= gradientUnits === 'objectBoundingBox' ? object.height : 1;
        addFactor = gradientUnits === 'objectBoundingBox' ? object.top || 0 : 0;
      }
      options[prop] = propValue * multFactor + addFactor;
    }
    if (object.type === 'ellipse' && options.r2 !== null && gradientUnits === 'objectBoundingBox' && object.rx !== object.ry) {
      var scaleFactor = object.ry/object.rx;
      ellipseMatrix = ' scale(1, ' + scaleFactor + ')';
      if (options.y1) {
        options.y1 /= scaleFactor;
      }
      if (options.y2) {
        options.y2 /= scaleFactor;
      }
    }
    return ellipseMatrix;
  }
})();


/**
 * Pattern class
 * @class fabric.Pattern
 * @see {@link http://fabricjs.com/patterns/|Pattern demo}
 * @see {@link http://fabricjs.com/dynamic-patterns/|DynamicPattern demo}
 * @see {@link fabric.Pattern#initialize} for constructor definition
 */
fabric.Pattern = fabric.util.createClass(/** @lends fabric.Pattern.prototype */ {

  /**
   * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
   * @type String
   * @default
   */
  repeat: 'repeat',

  /**
   * Pattern horizontal offset from object's left/top corner
   * @type Number
   * @default
   */
  offsetX: 0,

  /**
   * Pattern vertical offset from object's left/top corner
   * @type Number
   * @default
   */
  offsetY: 0,

  /**
   * Constructor
   * @param {Object} [options] Options object
   * @return {fabric.Pattern} thisArg
   */
  initialize: function(options) {
    options || (options = { });

    this.id = fabric.Object.__uid++;

    if (options.source) {
      if (typeof options.source === 'string') {
        // function string
        if (typeof fabric.util.getFunctionBody(options.source) !== 'undefined') {
          this.source = new Function(fabric.util.getFunctionBody(options.source));
        }
        else {
          // img src string
          var _this = this;
          this.source = fabric.util.createImage();
          fabric.util.loadImage(options.source, function(img) {
            _this.source = img;
          });
        }
      }
      else {
        // img element
        this.source = options.source;
      }
    }
    if (options.repeat) {
      this.repeat = options.repeat;
    }
    if (options.offsetX) {
      this.offsetX = options.offsetX;
    }
    if (options.offsetY) {
      this.offsetY = options.offsetY;
    }
  },

  /**
   * Returns object representation of a pattern
   * @return {Object} Object representation of a pattern instance
   */
  toObject: function() {

    var source;

    // callback
    if (typeof this.source === 'function') {
      source = String(this.source);
    }
    // <img> element
    else if (typeof this.source.src === 'string') {
      source = this.source.src;
    }

    return {
      source: source,
      repeat: this.repeat,
      offsetX: this.offsetX,
      offsetY: this.offsetY
    };
  },

  /* _TO_SVG_START_ */
  /**
   * Returns SVG representation of a pattern
   * @param {fabric.Object} object
   * @return {String} SVG representation of a pattern
   */
  toSVG: function(object) {
    var patternSource = typeof this.source === 'function' ? this.source() : this.source,
        patternWidth = patternSource.width / object.getWidth(),
        patternHeight = patternSource.height / object.getHeight(),
        patternImgSrc = '';

    if (patternSource.src) {
      patternImgSrc = patternSource.src;
    }
    else if (patternSource.toDataURL) {
      patternImgSrc = patternSource.toDataURL();
    }

    return '<pattern id="SVGID_' + this.id +
                  '" x="' + this.offsetX +
                  '" y="' + this.offsetY +
                  '" width="' + patternWidth +
                  '" height="' + patternHeight + '">' +
             '<image x="0" y="0"' +
                    ' width="' + patternSource.width +
                    '" height="' + patternSource.height +
                    '" xlink:href="' + patternImgSrc +
             '"></image>' +
           '</pattern>';
  },
  /* _TO_SVG_END_ */

  /**
   * Returns an instance of CanvasPattern
   * @param {CanvasRenderingContext2D} ctx Context to create pattern
   * @return {CanvasPattern}
   */
  toLive: function(ctx) {
    var source = typeof this.source === 'function'
      ? this.source()
      : this.source;

    // if the image failed to load, return, and allow rest to continue loading
    if (!source) {
      return '';
    }

    // if an image
    if (typeof source.src !== 'undefined') {
      if (!source.complete) {
        return '';
      }
      if (source.naturalWidth === 0 || source.naturalHeight === 0) {
        return '';
      }
    }
    return ctx.createPattern(source, this.repeat);
  }
});


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Shadow) {
    fabric.warn('fabric.Shadow is already defined.');
    return;
  }

  /**
   * Shadow class
   * @class fabric.Shadow
   * @see {@link http://fabricjs.com/shadows/|Shadow demo}
   * @see {@link fabric.Shadow#initialize} for constructor definition
   */
  fabric.Shadow = fabric.util.createClass(/** @lends fabric.Shadow.prototype */ {

    /**
     * Shadow color
     * @type String
     * @default
     */
    color: 'rgb(0,0,0)',

    /**
     * Shadow blur
     * @type Number
     */
    blur: 0,

    /**
     * Shadow horizontal offset
     * @type Number
     * @default
     */
    offsetX: 0,

    /**
     * Shadow vertical offset
     * @type Number
     * @default
     */
    offsetY: 0,

    /**
     * Whether the shadow should affect stroke operations
     * @type Boolean
     * @default
     */
    affectStroke: false,

    /**
     * Indicates whether toObject should include default values
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Constructor
     * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetX properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px, "2px 2px 10px rgba(0,0,0,0.2)")
     * @return {fabric.Shadow} thisArg
     */
    initialize: function(options) {

      if (typeof options === 'string') {
        options = this._parseShadow(options);
      }

      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.id = fabric.Object.__uid++;
    },

    /**
     * @private
     * @param {String} shadow Shadow value to parse
     * @return {Object} Shadow object with color, offsetX, offsetY and blur
     */
    _parseShadow: function(shadow) {
      var shadowStr = shadow.trim(),
          offsetsAndBlur = fabric.Shadow.reOffsetsAndBlur.exec(shadowStr) || [ ],
          color = shadowStr.replace(fabric.Shadow.reOffsetsAndBlur, '') || 'rgb(0,0,0)';

      return {
        color: color.trim(),
        offsetX: parseInt(offsetsAndBlur[1], 10) || 0,
        offsetY: parseInt(offsetsAndBlur[2], 10) || 0,
        blur: parseInt(offsetsAndBlur[3], 10) || 0
      };
    },

    /**
     * Returns a string representation of an instance
     * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
     * @return {String} Returns CSS3 text-shadow declaration
     */
    toString: function() {
      return [this.offsetX, this.offsetY, this.blur, this.color].join('px ');
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of a shadow
     * @param {fabric.Object} object
     * @return {String} SVG representation of a shadow
     */
    toSVG: function(object) {
      var mode = 'SourceAlpha';

      if (object && (object.fill === this.color || object.stroke === this.color)) {
        mode = 'SourceGraphic';
      }

      return (
        '<filter id="SVGID_' + this.id + '" y="-40%" height="180%">' +
          '<feGaussianBlur in="' + mode + '" stdDeviation="' +
            (this.blur ? this.blur / 3 : 0) +
          '"></feGaussianBlur>' +
          '<feOffset dx="' + this.offsetX + '" dy="' + this.offsetY + '"></feOffset>' +
          '<feMerge>' +
            '<feMergeNode></feMergeNode>' +
            '<feMergeNode in="SourceGraphic"></feMergeNode>' +
          '</feMerge>' +
        '</filter>');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns object representation of a shadow
     * @return {Object} Object representation of a shadow instance
     */
    toObject: function() {
      if (this.includeDefaultValues) {
        return {
          color: this.color,
          blur: this.blur,
          offsetX: this.offsetX,
          offsetY: this.offsetY
        };
      }
      var obj = { }, proto = fabric.Shadow.prototype;
      if (this.color !== proto.color) {
        obj.color = this.color;
      }
      if (this.blur !== proto.blur) {
        obj.blur = this.blur;
      }
      if (this.offsetX !== proto.offsetX) {
        obj.offsetX = this.offsetX;
      }
      if (this.offsetY !== proto.offsetY) {
        obj.offsetY = this.offsetY;
      }
      return obj;
    }
  });

  /**
   * Regex matching shadow offsetX, offsetY and blur (ex: "2px 2px 10px rgba(0,0,0,0.2)", "rgb(0,255,0) 2px 2px")
   * @static
   * @field
   * @memberOf fabric.Shadow
   */
  fabric.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/;

})(typeof exports !== 'undefined' ? exports : this);


(function () {

  'use strict';

  if (fabric.StaticCanvas) {
    fabric.warn('fabric.StaticCanvas is already defined.');
    return;
  }

  // aliases for faster resolution
  var extend = fabric.util.object.extend,
      getElementOffset = fabric.util.getElementOffset,
      removeFromArray = fabric.util.removeFromArray,

      CANVAS_INIT_ERROR = new Error('Could not initialize `canvas` element');

  /**
   * Static canvas class
   * @class fabric.StaticCanvas
   * @mixes fabric.Collection
   * @mixes fabric.Observable
   * @see {@link http://fabricjs.com/static_canvas/|StaticCanvas demo}
   * @see {@link fabric.StaticCanvas#initialize} for constructor definition
   * @fires before:render
   * @fires after:render
   * @fires canvas:cleared
   * @fires object:added
   * @fires object:removed
   */
  fabric.StaticCanvas = fabric.util.createClass(/** @lends fabric.StaticCanvas.prototype */ {

    /**
     * Constructor
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(el, options) {
      options || (options = { });

      this._initStatic(el, options);
      fabric.StaticCanvas.activeInstance = this;
    },

    /**
     * Background color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
     * @type {(String|fabric.Pattern)}
     * @default
     */
    backgroundColor: '',

    /**
     * Background image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundImage}.
     * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity"
     * and "backgroundImageStretch" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#opacity}, {@link fabric.Image#width} and {@link fabric.Image#height}.
     * @type fabric.Image
     * @default
     */
    backgroundImage: null,

    /**
     * Overlay color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
     * @since 1.3.9
     * @type {(String|fabric.Pattern)}
     * @default
     */
    overlayColor: '',

    /**
     * Overlay image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayImage}.
     * <b>Backwards incompatibility note:</b> The "overlayImageLeft"
     * and "overlayImageTop" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#left} and {@link fabric.Image#top}.
     * @type fabric.Image
     * @default
     */
    overlayImage: null,

    /**
     * Indicates whether toObject/toDatalessObject should include default values
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Indicates whether objects' state should be saved
     * @type Boolean
     * @default
     */
    stateful: true,

    /**
     * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove} should also re-render canvas.
     * Disabling this option could give a great performance boost when adding/removing a lot of objects to/from canvas at once
     * (followed by a manual rendering after addition/deletion)
     * @type Boolean
     * @default
     */
    renderOnAddRemove: true,

    /**
     * Function that determines clipping of entire canvas area
     * Being passed context as first argument. See clipping canvas area in {@link https://github.com/kangax/fabric.js/wiki/FAQ}
     * @type Function
     * @default
     */
    clipTo: null,

    /**
     * Indicates whether object controls (borders/controls) are rendered above overlay image
     * @type Boolean
     * @default
     */
    controlsAboveOverlay: false,

    /**
     * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
     * @type Boolean
     * @default
     */
    allowTouchScrolling: false,

    /**
     * Indicates whether this canvas will use image smoothing, this is on by default in browsers
     * @type Boolean
     * @default
     */
    imageSmoothingEnabled: true,

    /**
     * The transformation (in the format of Canvas transform) which focuses the viewport
     * @type Array
     * @default
     */
    viewportTransform: [1, 0, 0, 1, 0, 0],

    /**
     * Callback; invoked right before object is about to be scaled/rotated
     */
    onBeforeScaleRotate: function () {
      /* NOOP */
    },

    /**
     * @private
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     */
    _initStatic: function(el, options) {
      this._objects = [];

      this._createLowerCanvas(el);
      this._initOptions(options);
      this._setImageSmoothing();

      if (options.overlayImage) {
        this.setOverlayImage(options.overlayImage, this.renderAll.bind(this));
      }
      if (options.backgroundImage) {
        this.setBackgroundImage(options.backgroundImage, this.renderAll.bind(this));
      }
      if (options.backgroundColor) {
        this.setBackgroundColor(options.backgroundColor, this.renderAll.bind(this));
      }
      if (options.overlayColor) {
        this.setOverlayColor(options.overlayColor, this.renderAll.bind(this));
      }
      this.calcOffset();
    },

    /**
     * Calculates canvas element offset relative to the document
     * This method is also attached as "resize" event handler of window
     * @return {fabric.Canvas} instance
     * @chainable
     */
    calcOffset: function () {
      this._offset = getElementOffset(this.lowerCanvasEl);
      return this;
    },

    /**
     * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
     * @param {Function} callback callback to invoke when image is loaded and set as an overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
     * @example <caption>Normal overlayImage with left/top = 0</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   // Needed to position overlayImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>overlayImage with different properties</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
     * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img) {
     *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
     *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
     * });
     * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   width: canvas.width,
     *   height: canvas.height,
     *   // Needed to position overlayImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     */
    setOverlayImage: function (image, callback, options) {
      return this.__setBgOverlayImage('overlayImage', image, callback, options);
    },

    /**
     * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
     * @param {Function} callback Callback to invoke when image is loaded and set as background
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/YH9yD/|jsFiddle demo}
     * @example <caption>Normal backgroundImage with left/top = 0</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   // Needed to position backgroundImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>backgroundImage with different properties</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
     * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img) {
     *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
     *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
     * });
     * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   width: canvas.width,
     *   height: canvas.height,
     *   // Needed to position backgroundImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     */
    setBackgroundImage: function (image, callback, options) {
      return this.__setBgOverlayImage('backgroundImage', image, callback, options);
    },

    /**
     * Sets {@link fabric.StaticCanvas#overlayColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
     * @example <caption>Normal overlayColor - color value</caption>
     * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as overlayColor</caption>
     * canvas.setOverlayColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
     * }, canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
     * canvas.setOverlayColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
     *   repeat: 'repeat',
     *   offsetX: 200,
     *   offsetY: 100
     * }, canvas.renderAll.bind(canvas));
     */
    setOverlayColor: function(overlayColor, callback) {
      return this.__setBgOverlayColor('overlayColor', overlayColor, callback);
    },

    /**
     * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
     * @example <caption>Normal backgroundColor - color value</caption>
     * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as backgroundColor</caption>
     * canvas.setBackgroundColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
     * }, canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
     * canvas.setBackgroundColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
     *   repeat: 'repeat',
     *   offsetX: 200,
     *   offsetY: 100
     * }, canvas.renderAll.bind(canvas));
     */
    setBackgroundColor: function(backgroundColor, callback) {
      return this.__setBgOverlayColor('backgroundColor', backgroundColor, callback);
    },

    /**
     * @private
     * @see {@link http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-imagesmoothingenabled|WhatWG Canvas Standard}
     */
    _setImageSmoothing: function(){
      var ctx = this.getContext();

      ctx.imageSmoothingEnabled       = this.imageSmoothingEnabled;
      ctx.webkitImageSmoothingEnabled = this.imageSmoothingEnabled;
      ctx.mozImageSmoothingEnabled    = this.imageSmoothingEnabled;
      ctx.msImageSmoothingEnabled     = this.imageSmoothingEnabled;
      ctx.oImageSmoothingEnabled      = this.imageSmoothingEnabled;
    },

    /**
     * @private
     * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
     * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
     * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
     * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
     */
    __setBgOverlayImage: function(property, image, callback, options) {
      if (typeof image === 'string') {
        fabric.util.loadImage(image, function(img) {
          this[property] = new fabric.Image(img, options);
          callback && callback();
        }, this);
      }
      else {
        this[property] = image;
        callback && callback();
      }

      return this;
    },

    /**
     * @private
     * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
     * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
     * @param {(Object|String|null)} color Object with pattern information, color value or null
     * @param {Function} [callback] Callback is invoked when color is set
     */
    __setBgOverlayColor: function(property, color, callback) {
      if (color && color.source) {
        var _this = this;
        fabric.util.loadImage(color.source, function(img) {
          _this[property] = new fabric.Pattern({
            source: img,
            repeat: color.repeat,
            offsetX: color.offsetX,
            offsetY: color.offsetY
          });
          callback && callback();
        });
      }
      else {
        this[property] = color;
        callback && callback();
      }

      return this;
    },

    /**
     * @private
     */
    _createCanvasElement: function() {
      var element = fabric.document.createElement('canvas');
      if (!element.style) {
        element.style = { };
      }
      if (!element) {
        throw CANVAS_INIT_ERROR;
      }
      this._initCanvasElement(element);
      return element;
    },

    /**
     * @private
     * @param {HTMLElement} element
     */
    _initCanvasElement: function(element) {
      fabric.util.createCanvasElement(element);

      if (typeof element.getContext === 'undefined') {
        throw CANVAS_INIT_ERROR;
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initOptions: function (options) {
      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.width = this.width || parseInt(this.lowerCanvasEl.width, 10) || 0;
      this.height = this.height || parseInt(this.lowerCanvasEl.height, 10) || 0;

      if (!this.lowerCanvasEl.style) {
        return;
      }

      this.lowerCanvasEl.width = this.width;
      this.lowerCanvasEl.height = this.height;

      this.lowerCanvasEl.style.width = this.width + 'px';
      this.lowerCanvasEl.style.height = this.height + 'px';

      this.viewportTransform = this.viewportTransform.slice();
    },

    /**
     * Creates a bottom canvas
     * @private
     * @param {HTMLElement} [canvasEl]
     */
    _createLowerCanvas: function (canvasEl) {
      this.lowerCanvasEl = fabric.util.getById(canvasEl) || this._createCanvasElement();
      this._initCanvasElement(this.lowerCanvasEl);

      fabric.util.addClass(this.lowerCanvasEl, 'lower-canvas');

      if (this.interactive) {
        this._applyCanvasStyle(this.lowerCanvasEl);
      }

      this.contextContainer = this.lowerCanvasEl.getContext('2d');
    },

    /**
     * Returns canvas width (in px)
     * @return {Number}
     */
    getWidth: function () {
      return this.width;
    },

    /**
     * Returns canvas height (in px)
     * @return {Number}
     */
    getHeight: function () {
      return this.height;
    },

    /**
     * Sets width of this canvas instance
     * @param {Number|String} value                         Value to set width to
     * @param {Object}        [options]                     Options object
     * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
     * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setWidth: function (value, options) {
      return this.setDimensions({ width: value }, options);
    },

    /**
     * Sets height of this canvas instance
     * @param {Number|String} value                         Value to set height to
     * @param {Object}        [options]                     Options object
     * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
     * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setHeight: function (value, options) {
      return this.setDimensions({ height: value }, options);
    },

    /**
     * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
     * @param {Object}        dimensions                    Object with width/height properties
     * @param {Number|String} [dimensions.width]            Width of canvas element
     * @param {Number|String} [dimensions.height]           Height of canvas element
     * @param {Object}        [options]                     Options object
     * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
     * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setDimensions: function (dimensions, options) {
      var cssValue;

      options = options || {};

      for (var prop in dimensions) {
        cssValue = dimensions[prop];

        if (!options.cssOnly) {
          this._setBackstoreDimension(prop, dimensions[prop]);
          cssValue += 'px';
        }

        if (!options.backstoreOnly) {
          this._setCssDimension(prop, cssValue);
        }
      }

      if (!options.cssOnly) {
        this.renderAll();
      }

      this.calcOffset();

      return this;
    },

    /**
     * Helper for setting width/height
     * @private
     * @param {String} prop property (width|height)
     * @param {Number} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setBackstoreDimension: function (prop, value) {
      this.lowerCanvasEl[prop] = value;

      if (this.upperCanvasEl) {
        this.upperCanvasEl[prop] = value;
      }

      if (this.cacheCanvasEl) {
        this.cacheCanvasEl[prop] = value;
      }

      this[prop] = value;

      return this;
    },

    /**
     * Helper for setting css width/height
     * @private
     * @param {String} prop property (width|height)
     * @param {String} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setCssDimension: function (prop, value) {
      this.lowerCanvasEl.style[prop] = value;

      if (this.upperCanvasEl) {
        this.upperCanvasEl.style[prop] = value;
      }

      if (this.wrapperEl) {
        this.wrapperEl.style[prop] = value;
      }

      return this;
    },

    /**
     * Returns canvas zoom level
     * @return {Number}
     */
    getZoom: function () {
      return Math.sqrt(this.viewportTransform[0] * this.viewportTransform[3]);
    },

    /**
     * Sets viewport transform of this canvas instance
     * @param {Array} vpt the transform in the form of context.transform
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setViewportTransform: function (vpt) {
      this.viewportTransform = vpt;
      this.renderAll();
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._objects[i].setCoords();
      }
      return this;
    },

    /**
     * Sets zoom level of this canvas instance, zoom centered around point
     * @param {fabric.Point} point to zoom with respect to
     * @param {Number} value to set zoom to, less than 1 zooms out
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    zoomToPoint: function (point, value) {
      // TODO: just change the scale, preserve other transformations
      var before = point;
      point = fabric.util.transformPoint(point, fabric.util.invertTransform(this.viewportTransform));
      this.viewportTransform[0] = value;
      this.viewportTransform[3] = value;
      var after = fabric.util.transformPoint(point, this.viewportTransform);
      this.viewportTransform[4] += before.x - after.x;
      this.viewportTransform[5] += before.y - after.y;
      this.renderAll();
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._objects[i].setCoords();
      }
      return this;
    },

    /**
     * Sets zoom level of this canvas instance
     * @param {Number} value to set zoom to, less than 1 zooms out
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setZoom: function (value) {
      this.zoomToPoint(new fabric.Point(0, 0), value);
      return this;
    },

    /**
     * Pan viewport so as to place point at top left corner of canvas
     * @param {fabric.Point} point to move to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    absolutePan: function (point) {
      this.viewportTransform[4] = -point.x;
      this.viewportTransform[5] = -point.y;
      this.renderAll();
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._objects[i].setCoords();
      }
      return this;
    },

    /**
     * Pans viewpoint relatively
     * @param {fabric.Point} point (position vector) to move by
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    relativePan: function (point) {
      return this.absolutePan(new fabric.Point(
        -point.x - this.viewportTransform[4],
        -point.y - this.viewportTransform[5]
      ));
    },

    /**
     * Returns &lt;canvas> element corresponding to this instance
     * @return {HTMLCanvasElement}
     */
    getElement: function () {
      return this.lowerCanvasEl;
    },

    /**
     * Returns currently selected object, if any
     * @return {fabric.Object}
     */
    getActiveObject: function() {
      return null;
    },

    /**
     * Returns currently selected group of object, if any
     * @return {fabric.Group}
     */
    getActiveGroup: function() {
      return null;
    },

    /**
     * Given a context, renders an object on that context
     * @param {CanvasRenderingContext2D} ctx Context to render object on
     * @param {fabric.Object} object Object to render
     * @private
     */
    _draw: function (ctx, object) {
      if (!object) {
        return;
      }

      ctx.save();
      var v = this.viewportTransform;
      ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      object.render(ctx);
      ctx.restore();
      if (!this.controlsAboveOverlay) {
        object._renderControls(ctx);
      }
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was added
     */
    _onObjectAdded: function(obj) {
      this.stateful && obj.setupState();
      obj.canvas = this;
      obj.setCoords();
      this.fire('object:added', { target: obj });
      obj.fire('added');
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was removed
     */
    _onObjectRemoved: function(obj) {
      // removing active object should fire "selection:cleared" events
      if (this.getActiveObject() === obj) {
        this.fire('before:selection:cleared', { target: obj });
        this._discardActiveObject();
        this.fire('selection:cleared');
      }

      this.fire('object:removed', { target: obj });
      obj.fire('removed');
    },

    /**
     * Clears specified context of canvas element
     * @param {CanvasRenderingContext2D} ctx Context to clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clearContext: function(ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
      return this;
    },

    /**
     * Returns context of canvas where objects are drawn
     * @return {CanvasRenderingContext2D}
     */
    getContext: function () {
      return this.contextContainer;
    },

    /**
     * Clears all contexts (background, main, top) of an instance
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear: function () {
      this._objects.length = 0;
      if (this.discardActiveGroup) {
        this.discardActiveGroup();
      }
      if (this.discardActiveObject) {
        this.discardActiveObject();
      }
      this.clearContext(this.contextContainer);
      if (this.contextTop) {
        this.clearContext(this.contextTop);
      }
      this.fire('canvas:cleared');
      this.renderAll();
      return this;
    },

    /**
     * Renders both the top canvas and the secondary container canvas.
     * @param {Boolean} [allOnTop] Whether we want to force all images to be rendered on the top canvas
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll: function (allOnTop) {
      var canvasToDrawOn = this[(allOnTop === true && this.interactive) ? 'contextTop' : 'contextContainer'],
          activeGroup = this.getActiveGroup();

      if (this.contextTop && this.selection && !this._groupSelector) {
        this.clearContext(this.contextTop);
      }

      if (!allOnTop) {
        this.clearContext(canvasToDrawOn);
      }

      this.fire('before:render');

      if (this.clipTo) {
        fabric.util.clipContext(this, canvasToDrawOn);
      }

      this._renderBackground(canvasToDrawOn);
      this._renderObjects(canvasToDrawOn, activeGroup);
      this._renderActiveGroup(canvasToDrawOn, activeGroup);

      if (this.clipTo) {
        canvasToDrawOn.restore();
      }

      this._renderOverlay(canvasToDrawOn);

      if (this.controlsAboveOverlay && this.interactive) {
        this.drawControls(canvasToDrawOn);
      }

      this.fire('after:render');

      return this;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {fabric.Group} activeGroup
     */
    _renderObjects: function(ctx, activeGroup) {
      var i, length;

      // fast path
      if (!activeGroup) {
        for (i = 0, length = this._objects.length; i < length; ++i) {
          this._draw(ctx, this._objects[i]);
        }
      }
      else {
        for (i = 0, length = this._objects.length; i < length; ++i) {
          if (this._objects[i] && !activeGroup.contains(this._objects[i])) {
            this._draw(ctx, this._objects[i]);
          }
        }
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {fabric.Group} activeGroup
     */
    _renderActiveGroup: function(ctx, activeGroup) {

      // delegate rendering to group selection (if one exists)
      if (activeGroup) {

        //Store objects in group preserving order, then replace
        var sortedObjects = [];
        this.forEachObject(function (object) {
          if (activeGroup.contains(object)) {
            sortedObjects.push(object);
          }
        });
        activeGroup._set('objects', sortedObjects);
        this._draw(ctx, activeGroup);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderBackground: function(ctx) {
      if (this.backgroundColor) {
        ctx.fillStyle = this.backgroundColor.toLive
          ? this.backgroundColor.toLive(ctx)
          : this.backgroundColor;

        ctx.fillRect(
          this.backgroundColor.offsetX || 0,
          this.backgroundColor.offsetY || 0,
          this.width,
          this.height);
      }
      if (this.backgroundImage) {
        this._draw(ctx, this.backgroundImage);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderOverlay: function(ctx) {
      if (this.overlayColor) {
        ctx.fillStyle = this.overlayColor.toLive
          ? this.overlayColor.toLive(ctx)
          : this.overlayColor;

        ctx.fillRect(
          this.overlayColor.offsetX || 0,
          this.overlayColor.offsetY || 0,
          this.width,
          this.height);
      }
      if (this.overlayImage) {
        this._draw(ctx, this.overlayImage);
      }
    },

    /**
     * Method to render only the top canvas.
     * Also used to render the group selection box.
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    renderTop: function () {
      var ctx = this.contextTop || this.contextContainer;
      this.clearContext(ctx);

      // we render the top context - last object
      if (this.selection && this._groupSelector) {
        this._drawSelection();
      }

      // delegate rendering to group selection if one exists
      // used for drawing selection borders/controls
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.render(ctx);
      }

      this._renderOverlay(ctx);

      this.fire('after:render');

      return this;
    },

    /**
     * Returns coordinates of a center of canvas.
     * Returned value is an object with top and left properties
     * @return {Object} object with "top" and "left" number values
     */
    getCenter: function () {
      return {
        top: this.getHeight() / 2,
        left: this.getWidth() / 2
      };
    },

    /**
     * Centers object horizontally.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center horizontally
     * @return {fabric.Canvas} thisArg
     */
    centerObjectH: function (object) {
      this._centerObject(object, new fabric.Point(this.getCenter().left, object.getCenterPoint().y));
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObjectV: function (object) {
      this._centerObject(object, new fabric.Point(object.getCenterPoint().x, this.getCenter().top));
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically and horizontally.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObject: function(object) {
      var center = this.getCenter();

      this._centerObject(object, new fabric.Point(center.left, center.top));
      this.renderAll();
      return this;
    },

    /**
     * @private
     * @param {fabric.Object} object Object to center
     * @param {fabric.Point} center Center point
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    _centerObject: function(object, center) {
      object.setPositionByOrigin(center, 'center', 'center');
      return this;
    },

    /**
     * Returs dataless JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {String} json string
     */
    toDatalessJSON: function (propertiesToInclude) {
      return this.toDatalessObject(propertiesToInclude);
    },

    /**
     * Returns object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return this._toObjectMethod('toObject', propertiesToInclude);
    },

    /**
     * Returns dataless object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject: function (propertiesToInclude) {
      return this._toObjectMethod('toDatalessObject', propertiesToInclude);
    },

    /**
     * @private
     */
    _toObjectMethod: function (methodName, propertiesToInclude) {

      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        this.discardActiveGroup();
      }

      var data = {
        objects: this._toObjects(methodName, propertiesToInclude)
      };

      extend(data, this.__serializeBgOverlay());

      fabric.util.populateWithProperties(this, data, propertiesToInclude);

      if (activeGroup) {
        this.setActiveGroup(new fabric.Group(activeGroup.getObjects(), {
          originX: 'center',
          originY: 'center'
        }));
        activeGroup.forEachObject(function(o) {
          o.set('active', true);
        });

        if (this._currentTransform) {
          this._currentTransform.target = this.getActiveGroup();
        }
      }

      return data;
    },

    /**
     * @private
     */
    _toObjects: function(methodName, propertiesToInclude) {
      return this.getObjects().map(function(instance) {
        return this._toObject(instance, methodName, propertiesToInclude);
      }, this);
    },

    /**
     * @private
     */
    _toObject: function(instance, methodName, propertiesToInclude) {
      var originalValue;

      if (!this.includeDefaultValues) {
        originalValue = instance.includeDefaultValues;
        instance.includeDefaultValues = false;
      }
      var object = instance[methodName](propertiesToInclude);
      if (!this.includeDefaultValues) {
        instance.includeDefaultValues = originalValue;
      }
      return object;
    },

    /**
     * @private
     */
    __serializeBgOverlay: function() {
      var data = {
        background: (this.backgroundColor && this.backgroundColor.toObject)
          ? this.backgroundColor.toObject()
          : this.backgroundColor
      };

      if (this.overlayColor) {
        data.overlay = this.overlayColor.toObject
          ? this.overlayColor.toObject()
          : this.overlayColor;
      }
      if (this.backgroundImage) {
        data.backgroundImage = this.backgroundImage.toObject();
      }
      if (this.overlayImage) {
        data.overlayImage = this.overlayImage.toObject();
      }

      return data;
    },

    /* _TO_SVG_START_ */
    /**
     * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
     * a zoomed canvas will then produce zoomed SVG output.
     * @type Boolean
     * @default
     */
    svgViewportTransformation: true,

    /**
     * Returns SVG representation of canvas
     * @function
     * @param {Object} [options] Options object for SVG output
     * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
     * @param {Object} [options.viewBox] SVG viewbox object
     * @param {Number} [options.viewBox.x] x-cooridnate of viewbox
     * @param {Number} [options.viewBox.y] y-coordinate of viewbox
     * @param {Number} [options.viewBox.width] Width of viewbox
     * @param {Number} [options.viewBox.height] Height of viewbox
     * @param {String} [options.encoding=UTF-8] Encoding of SVG output
     * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
     * @return {String} SVG string
     * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#serialization}
     * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
     * @example <caption>Normal SVG output</caption>
     * var svg = canvas.toSVG();
     * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
     * var svg = canvas.toSVG({suppressPreamble: true});
     * @example <caption>SVG output with viewBox attribute</caption>
     * var svg = canvas.toSVG({
     *   viewBox: {
     *     x: 100,
     *     y: 100,
     *     width: 200,
     *     height: 300
     *   }
     * });
     * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
     * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
     * @example <caption>Modify SVG output with reviver function</caption>
     * var svg = canvas.toSVG(null, function(svg) {
     *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
     * });
     */
    toSVG: function(options, reviver) {
      options || (options = { });

      var markup = [];

      this._setSVGPreamble(markup, options);
      this._setSVGHeader(markup, options);

      this._setSVGBgOverlayColor(markup, 'backgroundColor');
      this._setSVGBgOverlayImage(markup, 'backgroundImage');

      this._setSVGObjects(markup, reviver);

      this._setSVGBgOverlayColor(markup, 'overlayColor');
      this._setSVGBgOverlayImage(markup, 'overlayImage');

      markup.push('</svg>');

      return markup.join('');
    },

    /**
     * @private
     */
    _setSVGPreamble: function(markup, options) {
      if (!options.suppressPreamble) {
        markup.push(
          '<?xml version="1.0" encoding="', (options.encoding || 'UTF-8'), '" standalone="no" ?>',
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
              '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
        );
      }
    },

    /**
     * @private
     */
    _setSVGHeader: function(markup, options) {
      var width, height, vpt;

      if (options.viewBox) {
        width = options.viewBox.width;
        height = options.viewBox.height;
      }
      else {
        width = this.width;
        height = this.height;
        if (!this.svgViewportTransformation) {
          vpt = this.viewportTransform;
          width /= vpt[0];
          height /= vpt[3];
        }
      }

      markup.push(
        '<svg ',
          'xmlns="http://www.w3.org/2000/svg" ',
          'xmlns:xlink="http://www.w3.org/1999/xlink" ',
          'version="1.1" ',
          'width="', width, '" ',
          'height="', height, '" ',
          (this.backgroundColor && !this.backgroundColor.toLive
            ? 'style="background-color: ' + this.backgroundColor + '" '
            : null),
          (options.viewBox
              ? 'viewBox="' +
                options.viewBox.x + ' ' +
                options.viewBox.y + ' ' +
                options.viewBox.width + ' ' +
                options.viewBox.height + '" '
              : null),
          'xml:space="preserve">',
        '<desc>Created with Fabric.js ', fabric.version, '</desc>',
        '<defs>',
          fabric.createSVGFontFacesMarkup(this.getObjects()),
          fabric.createSVGRefElementsMarkup(this),
        '</defs>'
      );
    },

    /**
     * @private
     */
    _setSVGObjects: function(markup, reviver) {
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        this.discardActiveGroup();
      }
      for (var i = 0, objects = this.getObjects(), len = objects.length; i < len; i++) {
        markup.push(objects[i].toSVG(reviver));
      }
      if (activeGroup) {
        this.setActiveGroup(new fabric.Group(activeGroup.getObjects()));
        activeGroup.forEachObject(function(o) {
          o.set('active', true);
        });
      }
    },

    /**
     * @private
     */
    _setSVGBgOverlayImage: function(markup, property) {
      if (this[property] && this[property].toSVG) {
        markup.push(this[property].toSVG());
      }
    },

    /**
     * @private
     */
    _setSVGBgOverlayColor: function(markup, property) {
      if (this[property] && this[property].source) {
        markup.push(
          '<rect x="', this[property].offsetX, '" y="', this[property].offsetY, '" ',
            'width="',
              (this[property].repeat === 'repeat-y' || this[property].repeat === 'no-repeat'
                ? this[property].source.width
                : this.width),
            '" height="',
              (this[property].repeat === 'repeat-x' || this[property].repeat === 'no-repeat'
                ? this[property].source.height
                : this.height),
            '" fill="url(#' + property + 'Pattern)"',
          '></rect>'
        );
      }
      else if (this[property] && property === 'overlayColor') {
        markup.push(
          '<rect x="0" y="0" ',
            'width="', this.width,
            '" height="', this.height,
            '" fill="', this[property], '"',
          '></rect>'
        );
      }
    },
    /* _TO_SVG_END_ */

    /**
     * Moves an object to the bottom of the stack of drawn objects
     * @param {fabric.Object} object Object to send to back
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendToBack: function (object) {
      removeFromArray(this._objects, object);
      this._objects.unshift(object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Moves an object to the top of the stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringToFront: function (object) {
      removeFromArray(this._objects, object);
      this._objects.push(object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Moves an object down in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendBackwards: function (object, intersecting) {
      var idx = this._objects.indexOf(object);

      // if object is not on the bottom of stack
      if (idx !== 0) {
        var newIdx = this._findNewLowerIndex(object, idx, intersecting);

        removeFromArray(this._objects, object);
        this._objects.splice(newIdx, 0, object);
        this.renderAll && this.renderAll();
      }
      return this;
    },

    /**
     * @private
     */
    _findNewLowerIndex: function(object, idx, intersecting) {
      var newIdx;

      if (intersecting) {
        newIdx = idx;

        // traverse down the stack looking for the nearest intersecting object
        for (var i = idx - 1; i >= 0; --i) {

          var isIntersecting = object.intersectsWithObject(this._objects[i]) ||
                               object.isContainedWithinObject(this._objects[i]) ||
                               this._objects[i].isContainedWithinObject(object);

          if (isIntersecting) {
            newIdx = i;
            break;
          }
        }
      }
      else {
        newIdx = idx - 1;
      }

      return newIdx;
    },

    /**
     * Moves an object up in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringForward: function (object, intersecting) {
      var idx = this._objects.indexOf(object);

      // if object is not on top of stack (last item in an array)
      if (idx !== this._objects.length - 1) {
        var newIdx = this._findNewUpperIndex(object, idx, intersecting);

        removeFromArray(this._objects, object);
        this._objects.splice(newIdx, 0, object);
        this.renderAll && this.renderAll();
      }
      return this;
    },

    /**
     * @private
     */
    _findNewUpperIndex: function(object, idx, intersecting) {
      var newIdx;

      if (intersecting) {
        newIdx = idx;

        // traverse up the stack looking for the nearest intersecting object
        for (var i = idx + 1; i < this._objects.length; ++i) {

          var isIntersecting = object.intersectsWithObject(this._objects[i]) ||
                               object.isContainedWithinObject(this._objects[i]) ||
                               this._objects[i].isContainedWithinObject(object);

          if (isIntersecting) {
            newIdx = i;
            break;
          }
        }
      }
      else {
        newIdx = idx + 1;
      }

      return newIdx;
    },

    /**
     * Moves an object to specified level in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Number} index Position to move to
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    moveTo: function (object, index) {
      removeFromArray(this._objects, object);
      this._objects.splice(index, 0, object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Clears a canvas element and removes all event listeners
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose: function () {
      this.clear();
      this.interactive && this.removeListeners();
      return this;
    },

    /**
     * Returns a string representation of an instance
     * @return {String} string representation of an instance
     */
    toString: function () {
      return '#<fabric.Canvas (' + this.complexity() + '): ' +
               '{ objects: ' + this.getObjects().length + ' }>';
    }
  });

  extend(fabric.StaticCanvas.prototype, fabric.Observable);
  extend(fabric.StaticCanvas.prototype, fabric.Collection);
  extend(fabric.StaticCanvas.prototype, fabric.DataURLExporter);

  extend(fabric.StaticCanvas, /** @lends fabric.StaticCanvas */ {

    /**
     * @static
     * @type String
     * @default
     */
    EMPTY_JSON: '{"objects": [], "background": "white"}',

    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     *
     * @param {String} methodName Method to check support for;
     *                            Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
     * @return {Boolean | null} `true` if method is supported (or at least exists),
     *                          `null` if canvas element or context can not be initialized
     */
    supports: function (methodName) {
      var el = fabric.util.createCanvasElement();

      if (!el || !el.getContext) {
        return null;
      }

      var ctx = el.getContext('2d');
      if (!ctx) {
        return null;
      }

      switch (methodName) {

        case 'getImageData':
          return typeof ctx.getImageData !== 'undefined';

        case 'setLineDash':
          return typeof ctx.setLineDash !== 'undefined';

        case 'toDataURL':
          return typeof el.toDataURL !== 'undefined';

        case 'toDataURLWithQuality':
          try {
            el.toDataURL('image/jpeg', 0);
            return true;
          }
          catch (e) { }
          return false;

        default:
          return null;
      }
    }
  });

  /**
   * Returns JSON representation of canvas
   * @function
   * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
   * @return {String} JSON string
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#serialization}
   * @see {@link http://jsfiddle.net/fabricjs/pec86/|jsFiddle demo}
   * @example <caption>JSON without additional properties</caption>
   * var json = canvas.toJSON();
   * @example <caption>JSON with additional properties included</caption>
   * var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling']);
   * @example <caption>JSON without default values</caption>
   * canvas.includeDefaultValues = false;
   * var json = canvas.toJSON();
   */
  fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject;

})();


/**
 * BaseBrush class
 * @class fabric.BaseBrush
 * @see {@link http://fabricjs.com/freedrawing/|Freedrawing demo}
 */
fabric.BaseBrush = fabric.util.createClass(/** @lends fabric.BaseBrush.prototype */ {

  /**
   * Color of a brush
   * @type String
   * @default
   */
  color:            'rgb(0, 0, 0)',

  /**
   * Width of a brush
   * @type Number
   * @default
   */
  width:            1,

  /**
   * Shadow object representing shadow of this shape.
   * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
   * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
   * @type fabric.Shadow
   * @default
   */
  shadow:          null,

  /**
   * Line endings style of a brush (one of "butt", "round", "square")
   * @type String
   * @default
   */
  strokeLineCap:    'round',

  /**
   * Corner style of a brush (one of "bevil", "round", "miter")
   * @type String
   * @default
   */
  strokeLineJoin:   'round',

  /**
   * Sets shadow of an object
   * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
   * @return {fabric.Object} thisArg
   * @chainable
   */
  setShadow: function(options) {
    this.shadow = new fabric.Shadow(options);
    return this;
  },

  /**
   * Sets brush styles
   * @private
   */
  _setBrushStyles: function() {
    var ctx = this.canvas.contextTop;

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.lineCap = this.strokeLineCap;
    ctx.lineJoin = this.strokeLineJoin;
  },

  /**
   * Sets brush shadow styles
   * @private
   */
  _setShadow: function() {
    if (!this.shadow) {
      return;
    }

    var ctx = this.canvas.contextTop;

    ctx.shadowColor = this.shadow.color;
    ctx.shadowBlur = this.shadow.blur;
    ctx.shadowOffsetX = this.shadow.offsetX;
    ctx.shadowOffsetY = this.shadow.offsetY;
  },

  /**
   * Removes brush shadow styles
   * @private
   */
  _resetShadow: function() {
    var ctx = this.canvas.contextTop;

    ctx.shadowColor = '';
    ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
  }
});


(function() {

  var utilMin = fabric.util.array.min,
      utilMax = fabric.util.array.max;

  /**
   * PencilBrush class
   * @class fabric.PencilBrush
   * @extends fabric.BaseBrush
   */
  fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.PencilBrush.prototype */ {

    /**
     * Constructor
     * @param {fabric.Canvas} canvas
     * @return {fabric.PencilBrush} Instance of a pencil brush
     */
    initialize: function(canvas) {
      this.canvas = canvas;
      this._points = [ ];
    },

    /**
     * Inovoked on mouse down
     * @param {Object} pointer
     */
    onMouseDown: function(pointer) {
      this._prepareForDrawing(pointer);
      // capture coordinates immediately
      // this allows to draw dots (when movement never occurs)
      this._captureDrawingPath(pointer);
      this._render();
    },

    /**
     * Inovoked on mouse move
     * @param {Object} pointer
     */
    onMouseMove: function(pointer) {
      this._captureDrawingPath(pointer);
      // redraw curve
      // clear top canvas
      this.canvas.clearContext(this.canvas.contextTop);
      this._render();
    },

    /**
     * Invoked on mouse up
     */
    onMouseUp: function() {
      this._finalizeAndAddPath();
    },

    /**
     * @private
     * @param {Object} pointer Actual mouse position related to the canvas.
     */
    _prepareForDrawing: function(pointer) {

      var p = new fabric.Point(pointer.x, pointer.y);

      this._reset();
      this._addPoint(p);

      this.canvas.contextTop.moveTo(p.x, p.y);
    },

    /**
     * @private
     * @param {fabric.Point} point Point to be added to points array
     */
    _addPoint: function(point) {
      this._points.push(point);
    },

    /**
     * Clear points array and set contextTop canvas style.
     * @private
     */
    _reset: function() {
      this._points.length = 0;

      this._setBrushStyles();
      this._setShadow();
    },

    /**
     * @private
     * @param {Object} pointer Actual mouse position related to the canvas.
     */
    _captureDrawingPath: function(pointer) {
      var pointerPoint = new fabric.Point(pointer.x, pointer.y);
      this._addPoint(pointerPoint);
    },

    /**
     * Draw a smooth path on the topCanvas using quadraticCurveTo
     * @private
     */
    _render: function() {
      var ctx  = this.canvas.contextTop,
          v = this.canvas.viewportTransform,
          p1 = this._points[0],
          p2 = this._points[1];

      ctx.save();
      ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      ctx.beginPath();

      //if we only have 2 points in the path and they are the same
      //it means that the user only clicked the canvas without moving the mouse
      //then we should be drawing a dot. A path isn't drawn between two identical dots
      //that's why we set them apart a bit
      if (this._points.length === 2 && p1.x === p2.x && p1.y === p2.y) {
        p1.x -= 0.5;
        p2.x += 0.5;
      }
      ctx.moveTo(p1.x, p1.y);

      for (var i = 1, len = this._points.length; i < len; i++) {
        // we pick the point between pi + 1 & pi + 2 as the
        // end point and p1 as our control point.
        var midPoint = p1.midPointFrom(p2);
        ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);

        p1 = this._points[i];
        p2 = this._points[i + 1];
      }
      // Draw last line as a straight line while
      // we wait for the next point to be able to calculate
      // the bezier control point
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
      ctx.restore();
    },

    /**
     * Return an SVG path based on our captured points and their bounding box
     * @private
     */
    _getSVGPathData: function() {
      this.box = this.getPathBoundingBox(this._points);
      return this.convertPointsToSVGPath(
        this._points, this.box.minX, this.box.minY);
    },

     /**
      * Returns bounding box of a path based on given points
      * @param {Array} points Array of points
      * @return {Object} Object with minX, minY, maxX, maxY
      */
    getPathBoundingBox: function(points) {
      var xBounds = [],
          yBounds = [],
          p1 = points[0],
          p2 = points[1],
          startPoint = p1;

      for (var i = 1, len = points.length; i < len; i++) {
        var midPoint = p1.midPointFrom(p2);
        // with startPoint, p1 as control point, midpoint as end point
        xBounds.push(startPoint.x);
        xBounds.push(midPoint.x);
        yBounds.push(startPoint.y);
        yBounds.push(midPoint.y);

        p1 = points[i];
        p2 = points[i + 1];
        startPoint = midPoint;
      }

      xBounds.push(p1.x);
      yBounds.push(p1.y);

      return {
        minX: utilMin(xBounds),
        minY: utilMin(yBounds),
        maxX: utilMax(xBounds),
        maxY: utilMax(yBounds)
      };
    },

    /**
     * Converts points to SVG path
     * @param {Array} points Array of points
     * @param {Number} minX
     * @param {Number} minY
     * @return {String} SVG path
     */
    convertPointsToSVGPath: function(points, minX, minY) {
      var path = [],
          p1 = new fabric.Point(points[0].x - minX, points[0].y - minY),
          p2 = new fabric.Point(points[1].x - minX, points[1].y - minY);

      path.push('M ', points[0].x - minX, ' ', points[0].y - minY, ' ');
      for (var i = 1, len = points.length; i < len; i++) {
        var midPoint = p1.midPointFrom(p2);
        // p1 is our bezier control point
        // midpoint is our endpoint
        // start point is p(i-1) value.
        path.push('Q ', p1.x, ' ', p1.y, ' ', midPoint.x, ' ', midPoint.y, ' ');
        p1 = new fabric.Point(points[i].x - minX, points[i].y - minY);
        if ((i + 1) < points.length) {
          p2 = new fabric.Point(points[i + 1].x - minX, points[i + 1].y - minY);
        }
      }
      path.push('L ', p1.x, ' ', p1.y, ' ');
      return path;
    },

    /**
     * Creates fabric.Path object to add on canvas
     * @param {String} pathData Path data
     * @return {fabric.Path} Path to add on canvas
     */
    createPath: function(pathData) {
      var path = new fabric.Path(pathData);
      path.fill = null;
      path.stroke = this.color;
      path.strokeWidth = this.width;
      path.strokeLineCap = this.strokeLineCap;
      path.strokeLineJoin = this.strokeLineJoin;

      if (this.shadow) {
        this.shadow.affectStroke = true;
        path.setShadow(this.shadow);
      }

      return path;
    },

    /**
     * On mouseup after drawing the path on contextTop canvas
     * we use the points captured to create an new fabric path object
     * and add it to the fabric canvas.
     */
    _finalizeAndAddPath: function() {
      var ctx = this.canvas.contextTop;
      ctx.closePath();

      var pathData = this._getSVGPathData().join('');
      if (pathData === 'M 0 0 Q 0 0 0 0 L 0 0') {
        // do not create 0 width/height paths, as they are
        // rendered inconsistently across browsers
        // Firefox 4, for example, renders a dot,
        // whereas Chrome 10 renders nothing
        this.canvas.renderAll();
        return;
      }

      // set path origin coordinates based on our bounding box
      var originLeft = this.box.minX  + (this.box.maxX - this.box.minX) / 2,
          originTop = this.box.minY  + (this.box.maxY - this.box.minY) / 2;

      this.canvas.contextTop.arc(originLeft, originTop, 3, 0, Math.PI * 2, false);

      var path = this.createPath(pathData);
      path.set({
        left: originLeft,
        top: originTop,
        originX: 'center',
        originY: 'center'
      });

      this.canvas.add(path);
      path.setCoords();

      this.canvas.clearContext(this.canvas.contextTop);
      this._resetShadow();
      this.canvas.renderAll();

      // fire event 'path' created
      this.canvas.fire('path:created', { path: path });
    }
  });
})();


/**
 * CircleBrush class
 * @class fabric.CircleBrush
 */
fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.CircleBrush.prototype */ {

  /**
   * Width of a brush
   * @type Number
   * @default
   */
  width: 10,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {fabric.CircleBrush} Instance of a circle brush
   */
  initialize: function(canvas) {
    this.canvas = canvas;
    this.points = [ ];
  },
  /**
  * Invoked inside on mouse down and mouse move
  * @param {Object} pointer
  */
  drawDot: function(pointer) {
    var point = this.addPoint(pointer),
        ctx = this.canvas.contextTop,
        v = this.canvas.viewportTransform;
    ctx.save();
    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);

    ctx.fillStyle = point.fill;
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  },

  /**
   * Invoked on mouse down
   */
  onMouseDown: function(pointer) {
    this.points.length = 0;
    this.canvas.clearContext(this.canvas.contextTop);
    this._setShadow();
    this.drawDot(pointer);
  },

  /**
   * Invoked on mouse move
   * @param {Object} pointer
   */
  onMouseMove: function(pointer) {
    this.drawDot(pointer);
  },

  /**
   * Invoked on mouse up
   */
  onMouseUp: function() {
    var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;

    var circles = [ ];

    for (var i = 0, len = this.points.length; i < len; i++) {
      var point = this.points[i],
          circle = new fabric.Circle({
            radius: point.radius,
            left: point.x,
            top: point.y,
            originX: 'center',
            originY: 'center',
            fill: point.fill
          });

      this.shadow && circle.setShadow(this.shadow);

      circles.push(circle);
    }
    var group = new fabric.Group(circles, { originX: 'center', originY: 'center' });
    group.canvas = this.canvas;

    this.canvas.add(group);
    this.canvas.fire('path:created', { path: group });

    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
    this.canvas.renderAll();
  },

  /**
   * @param {Object} pointer
   * @return {fabric.Point} Just added pointer point
   */
  addPoint: function(pointer) {
    var pointerPoint = new fabric.Point(pointer.x, pointer.y),

        circleRadius = fabric.util.getRandomInt(
                        Math.max(0, this.width - 20), this.width + 20) / 2,

        circleColor = new fabric.Color(this.color)
                        .setAlpha(fabric.util.getRandomInt(0, 100) / 100)
                        .toRgba();

    pointerPoint.radius = circleRadius;
    pointerPoint.fill = circleColor;

    this.points.push(pointerPoint);

    return pointerPoint;
  }
});


/**
 * SprayBrush class
 * @class fabric.SprayBrush
 */
fabric.SprayBrush = fabric.util.createClass( fabric.BaseBrush, /** @lends fabric.SprayBrush.prototype */ {

  /**
   * Width of a spray
   * @type Number
   * @default
   */
  width:              10,

  /**
   * Density of a spray (number of dots per chunk)
   * @type Number
   * @default
   */
  density:            20,

  /**
   * Width of spray dots
   * @type Number
   * @default
   */
  dotWidth:           1,

  /**
   * Width variance of spray dots
   * @type Number
   * @default
   */
  dotWidthVariance:   1,

  /**
   * Whether opacity of a dot should be random
   * @type Boolean
   * @default
   */
  randomOpacity:        false,

  /**
   * Whether overlapping dots (rectangles) should be removed (for performance reasons)
   * @type Boolean
   * @default
   */
  optimizeOverlapping:  true,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {fabric.SprayBrush} Instance of a spray brush
   */
  initialize: function(canvas) {
    this.canvas = canvas;
    this.sprayChunks = [ ];
  },

  /**
   * Invoked on mouse down
   * @param {Object} pointer
   */
  onMouseDown: function(pointer) {
    this.sprayChunks.length = 0;
    this.canvas.clearContext(this.canvas.contextTop);
    this._setShadow();

    this.addSprayChunk(pointer);
    this.render();
  },

  /**
   * Invoked on mouse move
   * @param {Object} pointer
   */
  onMouseMove: function(pointer) {
    this.addSprayChunk(pointer);
    this.render();
  },

  /**
   * Invoked on mouse up
   */
  onMouseUp: function() {
    var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;

    var rects = [ ];

    for (var i = 0, ilen = this.sprayChunks.length; i < ilen; i++) {
      var sprayChunk = this.sprayChunks[i];

      for (var j = 0, jlen = sprayChunk.length; j < jlen; j++) {

        var rect = new fabric.Rect({
          width: sprayChunk[j].width,
          height: sprayChunk[j].width,
          left: sprayChunk[j].x + 1,
          top: sprayChunk[j].y + 1,
          originX: 'center',
          originY: 'center',
          fill: this.color
        });

        this.shadow && rect.setShadow(this.shadow);
        rects.push(rect);
      }
    }

    if (this.optimizeOverlapping) {
      rects = this._getOptimizedRects(rects);
    }

    var group = new fabric.Group(rects, { originX: 'center', originY: 'center' });
    group.canvas = this.canvas;

    this.canvas.add(group);
    this.canvas.fire('path:created', { path: group });

    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
    this.canvas.renderAll();
  },

    /**
     * @private
     * @param {Array} rects
     */
  _getOptimizedRects: function(rects) {

    // avoid creating duplicate rects at the same coordinates
    var uniqueRects = { }, key;

    for (var i = 0, len = rects.length; i < len; i++) {
      key = rects[i].left + '' + rects[i].top;
      if (!uniqueRects[key]) {
        uniqueRects[key] = rects[i];
      }
    }
    var uniqueRectsArray = [ ];
    for (key in uniqueRects) {
      uniqueRectsArray.push(uniqueRects[key]);
    }

    return uniqueRectsArray;
  },

  /**
   * Renders brush
   */
  render: function() {
    var ctx = this.canvas.contextTop;
    ctx.fillStyle = this.color;

    var v = this.canvas.viewportTransform;
    ctx.save();
    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);

    for (var i = 0, len = this.sprayChunkPoints.length; i < len; i++) {
      var point = this.sprayChunkPoints[i];
      if (typeof point.opacity !== 'undefined') {
        ctx.globalAlpha = point.opacity;
      }
      ctx.fillRect(point.x, point.y, point.width, point.width);
    }
    ctx.restore();
  },

  /**
   * @param {Object} pointer
   */
  addSprayChunk: function(pointer) {
    this.sprayChunkPoints = [ ];

    var x, y, width, radius = this.width / 2;

    for (var i = 0; i < this.density; i++) {

      x = fabric.util.getRandomInt(pointer.x - radius, pointer.x + radius);
      y = fabric.util.getRandomInt(pointer.y - radius, pointer.y + radius);

      if (this.dotWidthVariance) {
        width = fabric.util.getRandomInt(
          // bottom clamp width to 1
          Math.max(1, this.dotWidth - this.dotWidthVariance),
          this.dotWidth + this.dotWidthVariance);
      }
      else {
        width = this.dotWidth;
      }

      var point = new fabric.Point(x, y);
      point.width = width;

      if (this.randomOpacity) {
        point.opacity = fabric.util.getRandomInt(0, 100) / 100;
      }

      this.sprayChunkPoints.push(point);
    }

    this.sprayChunks.push(this.sprayChunkPoints);
  }
});


/**
 * PatternBrush class
 * @class fabric.PatternBrush
 * @extends fabric.BaseBrush
 */
fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, /** @lends fabric.PatternBrush.prototype */ {

  getPatternSrc: function() {

    var dotWidth = 20,
        dotDistance = 5,
        patternCanvas = fabric.document.createElement('canvas'),
        patternCtx = patternCanvas.getContext('2d');

    patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;

    patternCtx.fillStyle = this.color;
    patternCtx.beginPath();
    patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
    patternCtx.closePath();
    patternCtx.fill();

    return patternCanvas;
  },

  getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace('this.color', '"' + this.color + '"');
  },

  /**
   * Creates "pattern" instance property
   */
  getPattern: function() {
    return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), 'repeat');
  },

  /**
   * Sets brush styles
   */
  _setBrushStyles: function() {
    this.callSuper('_setBrushStyles');
    this.canvas.contextTop.strokeStyle = this.getPattern();
  },

  /**
   * Creates path
   */
  createPath: function(pathData) {
    var path = this.callSuper('createPath', pathData);
    path.stroke = new fabric.Pattern({
      source: this.source || this.getPatternSrcFunction()
    });
    return path;
  }
});


fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
   * @param {Object} [options] Options object
   * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
   * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
   * @param {Number} [options.multiplier=1] Multiplier to scale by
   * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
   * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
   * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
   * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
   * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
   * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
   * @example <caption>Generate jpeg dataURL with lower quality</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'jpeg',
   *   quality: 0.8
   * });
   * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'png',
   *   left: 100,
   *   top: 100,
   *   width: 200,
   *   height: 200
   * });
   * @example <caption>Generate double scaled png dataURL</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'png',
   *   multiplier: 2
   * });
   */
  toDataURL: function (options) {
    options || (options = { });

    var format = options.format || 'png',
        quality = options.quality || 1,
        multiplier = options.multiplier || 1,
        cropping = {
          left: options.left,
          top: options.top,
          width: options.width,
          height: options.height
        };

    if (multiplier !== 1) {
      return this.__toDataURLWithMultiplier(format, quality, cropping, multiplier);
    }
    else {
      return this.__toDataURL(format, quality, cropping);
    }
  },

  /**
   * @private
   */
  __toDataURL: function(format, quality, cropping) {

    this.renderAll(true);

    var canvasEl = this.upperCanvasEl || this.lowerCanvasEl,
        croppedCanvasEl = this.__getCroppedCanvas(canvasEl, cropping);

    // to avoid common confusion https://github.com/kangax/fabric.js/issues/806
    if (format === 'jpg') {
      format = 'jpeg';
    }

    var data = (fabric.StaticCanvas.supports('toDataURLWithQuality'))
              ? (croppedCanvasEl || canvasEl).toDataURL('image/' + format, quality)
              : (croppedCanvasEl || canvasEl).toDataURL('image/' + format);

    this.contextTop && this.clearContext(this.contextTop);
    this.renderAll();

    if (croppedCanvasEl) {
      croppedCanvasEl = null;
    }

    return data;
  },

  /**
   * @private
   */
  __getCroppedCanvas: function(canvasEl, cropping) {

    var croppedCanvasEl,
        croppedCtx,
        shouldCrop = 'left' in cropping ||
                     'top' in cropping ||
                     'width' in cropping ||
                     'height' in cropping;

    if (shouldCrop) {

      croppedCanvasEl = fabric.util.createCanvasElement();
      croppedCtx = croppedCanvasEl.getContext('2d');

      croppedCanvasEl.width = cropping.width || this.width;
      croppedCanvasEl.height = cropping.height || this.height;

      croppedCtx.drawImage(canvasEl, -cropping.left || 0, -cropping.top || 0);
    }

    return croppedCanvasEl;
  },

  /**
   * @private
   */
  __toDataURLWithMultiplier: function(format, quality, cropping, multiplier) {

    var origWidth = this.getWidth(),
        origHeight = this.getHeight(),
        scaledWidth = origWidth * multiplier,
        scaledHeight = origHeight * multiplier,
        activeObject = this.getActiveObject(),
        activeGroup = this.getActiveGroup(),

        ctx = this.contextTop || this.contextContainer;

    if (multiplier > 1) {
      this.setWidth(scaledWidth).setHeight(scaledHeight);
    }
    ctx.scale(multiplier, multiplier);

    if (cropping.left) {
      cropping.left *= multiplier;
    }
    if (cropping.top) {
      cropping.top *= multiplier;
    }
    if (cropping.width) {
      cropping.width *= multiplier;
    }
    else if (multiplier < 1) {
      cropping.width = scaledWidth;
    }
    if (cropping.height) {
      cropping.height *= multiplier;
    }
    else if (multiplier < 1) {
      cropping.height = scaledHeight;
    }

    if (activeGroup) {
      // not removing group due to complications with restoring it with correct state afterwords
      this._tempRemoveBordersControlsFromGroup(activeGroup);
    }
    else if (activeObject && this.deactivateAll) {
      this.deactivateAll();
    }

    this.renderAll(true);

    var data = this.__toDataURL(format, quality, cropping);

    // restoring width, height for `renderAll` to draw
    // background properly (while context is scaled)
    this.width = origWidth;
    this.height = origHeight;

    ctx.scale(1 / multiplier,  1 / multiplier);
    this.setWidth(origWidth).setHeight(origHeight);

    if (activeGroup) {
      this._restoreBordersControlsOnGroup(activeGroup);
    }
    else if (activeObject && this.setActiveObject) {
      this.setActiveObject(activeObject);
    }

    this.contextTop && this.clearContext(this.contextTop);
    this.renderAll();

    return data;
  },

  /**
   * Exports canvas element to a dataurl image (allowing to change image size via multiplier).
   * @deprecated since 1.0.13
   * @param {String} format (png|jpeg)
   * @param {Number} multiplier
   * @param {Number} quality (0..1)
   * @return {String}
   */
  toDataURLWithMultiplier: function (format, multiplier, quality) {
    return this.toDataURL({
      format: format,
      multiplier: multiplier,
      quality: quality
    });
  },

  /**
   * @private
   */
  _tempRemoveBordersControlsFromGroup: function(group) {
    group.origHasControls = group.hasControls;
    group.origBorderColor = group.borderColor;

    group.hasControls = true;
    group.borderColor = 'rgba(0,0,0,0)';

    group.forEachObject(function(o) {
      o.origBorderColor = o.borderColor;
      o.borderColor = 'rgba(0,0,0,0)';
    });
  },

  /**
   * @private
   */
  _restoreBordersControlsOnGroup: function(group) {
    group.hideControls = group.origHideControls;
    group.borderColor = group.origBorderColor;

    group.forEachObject(function(o) {
      o.borderColor = o.origBorderColor;
      delete o.origBorderColor;
    });
  }
});


fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Populates canvas with data from the specified dataless JSON.
   * JSON format must conform to the one of {@link fabric.Canvas#toDatalessJSON}
   * @deprecated since 1.2.2
   * @param {String|Object} json JSON string or object
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: {@link fabric.Image})
   *                            are initialized
   * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
   * @return {fabric.Canvas} instance
   * @chainable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#deserialization}
   */
  loadFromDatalessJSON: function (json, callback, reviver) {
    return this.loadFromJSON(json, callback, reviver);
  },

  /**
   * Populates canvas with data from the specified JSON.
   * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
   * @param {String|Object} json JSON string or object
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: {@link fabric.Image})
   *                            are initialized
   * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
   * @return {fabric.Canvas} instance
   * @chainable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#deserialization}
   * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
   * @example <caption>loadFromJSON</caption>
   * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
   * @example <caption>loadFromJSON with reviver</caption>
   * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
   *   // `o` = json object
   *   // `object` = fabric.Object instance
   *   // ... do some stuff ...
   * });
   */
  loadFromJSON: function (json, callback, reviver) {
    if (!json) {
      return;
    }

    // serialize if it wasn't already
    var serialized = (typeof json === 'string')
      ? JSON.parse(json)
      : json;

    this.clear();

    var _this = this;
    this._enlivenObjects(serialized.objects, function () {
      _this._setBgOverlay(serialized, callback);
    }, reviver);

    return this;
  },

  /**
   * @private
   * @param {Object} serialized Object with background and overlay information
   * @param {Function} callback Invoked after all background and overlay images/patterns loaded
   */
  _setBgOverlay: function(serialized, callback) {
    var _this = this,
        loaded = {
          backgroundColor: false,
          overlayColor: false,
          backgroundImage: false,
          overlayImage: false
        };

    if (!serialized.backgroundImage && !serialized.overlayImage && !serialized.background && !serialized.overlay) {
      callback && callback();
      return;
    }

    var cbIfLoaded = function () {
      if (loaded.backgroundImage && loaded.overlayImage && loaded.backgroundColor && loaded.overlayColor) {
        _this.renderAll();
        callback && callback();
      }
    };

    this.__setBgOverlay('backgroundImage', serialized.backgroundImage, loaded, cbIfLoaded);
    this.__setBgOverlay('overlayImage', serialized.overlayImage, loaded, cbIfLoaded);
    this.__setBgOverlay('backgroundColor', serialized.background, loaded, cbIfLoaded);
    this.__setBgOverlay('overlayColor', serialized.overlay, loaded, cbIfLoaded);

    cbIfLoaded();
  },

  /**
   * @private
   * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
   * @param {(Object|String)} value Value to set
   * @param {Object} loaded Set loaded property to true if property is set
   * @param {Object} callback Callback function to invoke after property is set
   */
  __setBgOverlay: function(property, value, loaded, callback) {
    var _this = this;

    if (!value) {
      loaded[property] = true;
      return;
    }

    if (property === 'backgroundImage' || property === 'overlayImage') {
      fabric.Image.fromObject(value, function(img) {
        _this[property] = img;
        loaded[property] = true;
        callback && callback();
      });
    }
    else {
      this['set' + fabric.util.string.capitalize(property, true)](value, function() {
        loaded[property] = true;
        callback && callback();
      });
    }
  },

  /**
   * @private
   * @param {Array} objects
   * @param {Function} callback
   * @param {Function} [reviver]
   */
  _enlivenObjects: function (objects, callback, reviver) {
    var _this = this;

    if (!objects || objects.length === 0) {
      callback && callback();
      return;
    }

    var renderOnAddRemove = this.renderOnAddRemove;
    this.renderOnAddRemove = false;

    fabric.util.enlivenObjects(objects, function(enlivenedObjects) {
      enlivenedObjects.forEach(function(obj, index) {
        _this.insertAt(obj, index, true);
      });

      _this.renderOnAddRemove = renderOnAddRemove;
      callback && callback();
    }, null, reviver);
  },

  /**
   * @private
   * @param {String} format
   * @param {Function} callback
   */
  _toDataURL: function (format, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURL(format));
    });
  },

  /**
   * @private
   * @param {String} format
   * @param {Number} multiplier
   * @param {Function} callback
   */
  _toDataURLWithMultiplier: function (format, multiplier, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURLWithMultiplier(format, multiplier));
    });
  },

  /**
   * Clones canvas instance
   * @param {Object} [callback] Receives cloned instance as a first argument
   * @param {Array} [properties] Array of properties to include in the cloned canvas and children
   */
  clone: function (callback, properties) {
    var data = JSON.stringify(this.toJSON(properties));
    this.cloneWithoutData(function(clone) {
      clone.loadFromJSON(data, function() {
        callback && callback(clone);
      });
    });
  },

  /**
   * Clones canvas instance without cloning existing data.
   * This essentially copies canvas dimensions, clipping properties, etc.
   * but leaves data empty (so that you can populate it with your own)
   * @param {Object} [callback] Receives cloned instance as a first argument
   */
  cloneWithoutData: function(callback) {
    var el = fabric.document.createElement('canvas');

    el.width = this.getWidth();
    el.height = this.getHeight();

    var clone = new fabric.Canvas(el);
    clone.clipTo = this.clipTo;
    if (this.backgroundImage) {
      clone.setBackgroundImage(this.backgroundImage.src, function() {
        clone.renderAll();
        callback && callback(clone);
      });
      clone.backgroundImageOpacity = this.backgroundImageOpacity;
      clone.backgroundImageStretch = this.backgroundImageStretch;
    }
    else {
      callback && callback(clone);
    }
  }
});


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      toFixed = fabric.util.toFixed,
      capitalize = fabric.util.string.capitalize,
      degreesToRadians = fabric.util.degreesToRadians,
      supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Object) {
    return;
  }

  /**
   * Root object class from which all 2d shape classes inherit from
   * @class fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#objects}
   * @see {@link fabric.Object#initialize} for constructor definition
   *
   * @fires added
   * @fires removed
   *
   * @fires selected
   * @fires modified
   * @fires rotating
   * @fires scaling
   * @fires moving
   *
   * @fires mousedown
   * @fires mouseup
   */
  fabric.Object = fabric.util.createClass(/** @lends fabric.Object.prototype */ {

    /**
     * Retrieves object's {@link fabric.Object#clipTo|clipping function}
     * @method getClipTo
     * @memberOf fabric.Object.prototype
     * @return {Function}
     */

    /**
     * Sets object's {@link fabric.Object#clipTo|clipping function}
     * @method setClipTo
     * @memberOf fabric.Object.prototype
     * @param {Function} clipTo Clipping function
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#transformMatrix|transformMatrix}
     * @method getTransformMatrix
     * @memberOf fabric.Object.prototype
     * @return {Array} transformMatrix
     */

    /**
     * Sets object's {@link fabric.Object#transformMatrix|transformMatrix}
     * @method setTransformMatrix
     * @memberOf fabric.Object.prototype
     * @param {Array} transformMatrix
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#visible|visible} state
     * @method getVisible
     * @memberOf fabric.Object.prototype
     * @return {Boolean} True if visible
     */

    /**
     * Sets object's {@link fabric.Object#visible|visible} state
     * @method setVisible
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value visible value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#shadow|shadow}
     * @method getShadow
     * @memberOf fabric.Object.prototype
     * @return {Object} Shadow instance
     */

    /**
     * Retrieves object's {@link fabric.Object#stroke|stroke}
     * @method getStroke
     * @memberOf fabric.Object.prototype
     * @return {String} stroke value
     */

    /**
     * Sets object's {@link fabric.Object#stroke|stroke}
     * @method setStroke
     * @memberOf fabric.Object.prototype
     * @param {String} value stroke value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#strokeWidth|strokeWidth}
     * @method getStrokeWidth
     * @memberOf fabric.Object.prototype
     * @return {Number} strokeWidth value
     */

    /**
     * Sets object's {@link fabric.Object#strokeWidth|strokeWidth}
     * @method setStrokeWidth
     * @memberOf fabric.Object.prototype
     * @param {Number} value strokeWidth value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#originX|originX}
     * @method getOriginX
     * @memberOf fabric.Object.prototype
     * @return {String} originX value
     */

    /**
     * Sets object's {@link fabric.Object#originX|originX}
     * @method setOriginX
     * @memberOf fabric.Object.prototype
     * @param {String} value originX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#originY|originY}
     * @method getOriginY
     * @memberOf fabric.Object.prototype
     * @return {String} originY value
     */

    /**
     * Sets object's {@link fabric.Object#originY|originY}
     * @method setOriginY
     * @memberOf fabric.Object.prototype
     * @param {String} value originY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#fill|fill}
     * @method getFill
     * @memberOf fabric.Object.prototype
     * @return {String} Fill value
     */

    /**
     * Sets object's {@link fabric.Object#fill|fill}
     * @method setFill
     * @memberOf fabric.Object.prototype
     * @param {String} value Fill value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#opacity|opacity}
     * @method getOpacity
     * @memberOf fabric.Object.prototype
     * @return {Number} Opacity value (0-1)
     */

    /**
     * Sets object's {@link fabric.Object#opacity|opacity}
     * @method setOpacity
     * @memberOf fabric.Object.prototype
     * @param {Number} value Opacity value (0-1)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#angle|angle} (in degrees)
     * @method getAngle
     * @memberOf fabric.Object.prototype
     * @return {Number}
     */

    /**
     * Sets object's {@link fabric.Object#angle|angle}
     * @method setAngle
     * @memberOf fabric.Object.prototype
     * @param {Number} value Angle value (in degrees)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#top|top position}
     * @method getTop
     * @memberOf fabric.Object.prototype
     * @return {Number} Top value (in pixels)
     */

    /**
     * Sets object's {@link fabric.Object#top|top position}
     * @method setTop
     * @memberOf fabric.Object.prototype
     * @param {Number} value Top value (in pixels)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#left|left position}
     * @method getLeft
     * @memberOf fabric.Object.prototype
     * @return {Number} Left value (in pixels)
     */

    /**
     * Sets object's {@link fabric.Object#left|left position}
     * @method setLeft
     * @memberOf fabric.Object.prototype
     * @param {Number} value Left value (in pixels)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#scaleX|scaleX} value
     * @method getScaleX
     * @memberOf fabric.Object.prototype
     * @return {Number} scaleX value
     */

    /**
     * Sets object's {@link fabric.Object#scaleX|scaleX} value
     * @method setScaleX
     * @memberOf fabric.Object.prototype
     * @param {Number} value scaleX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#scaleY|scaleY} value
     * @method getScaleY
     * @memberOf fabric.Object.prototype
     * @return {Number} scaleY value
     */

    /**
     * Sets object's {@link fabric.Object#scaleY|scaleY} value
     * @method setScaleY
     * @memberOf fabric.Object.prototype
     * @param {Number} value scaleY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#flipX|flipX} value
     * @method getFlipX
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipX value
     */

    /**
     * Sets object's {@link fabric.Object#flipX|flipX} value
     * @method setFlipX
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value flipX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#flipY|flipY} value
     * @method getFlipY
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipY value
     */

    /**
     * Sets object's {@link fabric.Object#flipY|flipY} value
     * @method setFlipY
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value flipY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Type of an object (rect, circle, path, etc.)
     * @type String
     * @default
     */
    type:                     'object',

    /**
     * Horizontal origin of transformation of an object (one of "left", "right", "center")
     * @type String
     * @default
     */
    originX:                  'left',

    /**
     * Vertical origin of transformation of an object (one of "top", "bottom", "center")
     * @type String
     * @default
     */
    originY:                  'top',

    /**
     * Top position of an object. Note that by default it's relative to object center. You can change this by setting originY={top/center/bottom}
     * @type Number
     * @default
     */
    top:                      0,

    /**
     * Left position of an object. Note that by default it's relative to object center. You can change this by setting originX={left/center/right}
     * @type Number
     * @default
     */
    left:                     0,

    /**
     * Object width
     * @type Number
     * @default
     */
    width:                    0,

    /**
     * Object height
     * @type Number
     * @default
     */
    height:                   0,

    /**
     * Object scale factor (horizontal)
     * @type Number
     * @default
     */
    scaleX:                   1,

    /**
     * Object scale factor (vertical)
     * @type Number
     * @default
     */
    scaleY:                   1,

    /**
     * When true, an object is rendered as flipped horizontally
     * @type Boolean
     * @default
     */
    flipX:                    false,

    /**
     * When true, an object is rendered as flipped vertically
     * @type Boolean
     * @default
     */
    flipY:                    false,

    /**
     * Opacity of an object
     * @type Number
     * @default
     */
    opacity:                  1,

    /**
     * Angle of rotation of an object (in degrees)
     * @type Number
     * @default
     */
    angle:                    0,

    /**
     * Size of object's controlling corners (in pixels)
     * @type Number
     * @default
     */
    cornerSize:               12,

    /**
     * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
     * @type Boolean
     * @default
     */
    transparentCorners:       true,

    /**
     * Default cursor value used when hovering over this object on canvas
     * @type String
     * @default
     */
    hoverCursor:              null,

    /**
     * Padding between object and its controlling borders (in pixels)
     * @type Number
     * @default
     */
    padding:                  0,

    /**
     * Color of controlling borders of an object (when it's active)
     * @type String
     * @default
     */
    borderColor:              'rgba(102,153,255,0.75)',

    /**
     * Color of controlling corners of an object (when it's active)
     * @type String
     * @default
     */
    cornerColor:              'rgba(102,153,255,0.5)',

    /**
     * When true, this object will use center point as the origin of transformation
     * when being scaled via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredScaling:          false,

    /**
     * When true, this object will use center point as the origin of transformation
     * when being rotated via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredRotation:         true,

    /**
     * Color of object's fill
     * @type String
     * @default
     */
    fill:                     'rgb(0,0,0)',

    /**
     * Fill rule used to fill an object
     * @type String
     * @default
     */
    fillRule:                 'source-over',

    /**
     * Background color of an object. Only works with text objects at the moment.
     * @type String
     * @default
     */
    backgroundColor:          '',

    /**
     * When defined, an object is rendered via stroke and this property specifies its color
     * @type String
     * @default
     */
    stroke:                   null,

    /**
     * Width of a stroke used to render this object
     * @type Number
     * @default
     */
    strokeWidth:              1,

    /**
     * Array specifying dash pattern of an object's stroke (stroke must be defined)
     * @type Array
     */
    strokeDashArray:          null,

    /**
     * Line endings style of an object's stroke (one of "butt", "round", "square")
     * @type String
     * @default
     */
    strokeLineCap:            'butt',

    /**
     * Corner style of an object's stroke (one of "bevil", "round", "miter")
     * @type String
     * @default
     */
    strokeLineJoin:           'miter',

    /**
     * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
     * @type Number
     * @default
     */
    strokeMiterLimit:         10,

    /**
     * Shadow object representing shadow of this shape
     * @type fabric.Shadow
     * @default
     */
    shadow:                   null,

    /**
     * Opacity of object's controlling borders when object is active and moving
     * @type Number
     * @default
     */
    borderOpacityWhenMoving:  0.4,

    /**
     * Scale factor of object's controlling borders
     * @type Number
     * @default
     */
    borderScaleFactor:        1,

    /**
     * Transform matrix (similar to SVG's transform matrix)
     * @type Array
     */
    transformMatrix:          null,

    /**
     * Minimum allowed scale value of an object
     * @type Number
     * @default
     */
    minScaleLimit:            0.01,

    /**
     * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
     * But events still fire on it.
     * @type Boolean
     * @default
     */
    selectable:               true,

    /**
     * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
     * @type Boolean
     * @default
     */
    evented:                  true,

    /**
     * When set to `false`, an object is not rendered on canvas
     * @type Boolean
     * @default
     */
    visible:                  true,

    /**
     * When set to `false`, object's controls are not displayed and can not be used to manipulate object
     * @type Boolean
     * @default
     */
    hasControls:              true,

    /**
     * When set to `false`, object's controlling borders are not rendered
     * @type Boolean
     * @default
     */
    hasBorders:               true,

    /**
     * When set to `false`, object's controlling rotating point will not be visible or selectable
     * @type Boolean
     * @default
     */
    hasRotatingPoint:         true,

    /**
     * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`)
     * @type Number
     * @default
     */
    rotatingPointOffset:      40,

    /**
     * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
     * @type Boolean
     * @default
     */
    perPixelTargetFind:       false,

    /**
     * When `false`, default object's values are not included in its serialization
     * @type Boolean
     * @default
     */
    includeDefaultValues:     true,

    /**
     * Function that determines clipping of an object (context is passed as a first argument)
     * Note that context origin is at the object's center point (not left/top corner)
     * @type Function
     */
    clipTo:                   null,

    /**
     * When `true`, object horizontal movement is locked
     * @type Boolean
     * @default
     */
    lockMovementX:            false,

    /**
     * When `true`, object vertical movement is locked
     * @type Boolean
     * @default
     */
    lockMovementY:            false,

    /**
     * When `true`, object rotation is locked
     * @type Boolean
     * @default
     */
    lockRotation:             false,

    /**
     * When `true`, object horizontal scaling is locked
     * @type Boolean
     * @default
     */
    lockScalingX:             false,

    /**
     * When `true`, object vertical scaling is locked
     * @type Boolean
     * @default
     */
    lockScalingY:             false,

    /**
     * When `true`, object non-uniform scaling is locked
     * @type Boolean
     * @default
     */
    lockUniScaling:           false,

    /**
     * When `true`, object cannot be flipped by scaling into negative values
     * @type Boolean
     * @default
     */

    lockScalingFlip:          false,
    /**
     * List of properties to consider when checking if state
     * of an object is changed (fabric.Object#hasStateChanged)
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties:  (
      'top left width height scaleX scaleY flipX flipY originX originY transformMatrix ' +
      'stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit ' +
      'angle opacity fill fillRule shadow clipTo visible backgroundColor'
    ).split(' '),

    /**
     * Constructor
     * @param {Object} [options] Options object
     */
    initialize: function(options) {
      if (options) {
        this.setOptions(options);
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initGradient: function(options) {
      if (options.fill && options.fill.colorStops && !(options.fill instanceof fabric.Gradient)) {
        this.set('fill', new fabric.Gradient(options.fill));
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initPattern: function(options) {
      if (options.fill && options.fill.source && !(options.fill instanceof fabric.Pattern)) {
        this.set('fill', new fabric.Pattern(options.fill));
      }
      if (options.stroke && options.stroke.source && !(options.stroke instanceof fabric.Pattern)) {
        this.set('stroke', new fabric.Pattern(options.stroke));
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initClipping: function(options) {
      if (!options.clipTo || typeof options.clipTo !== 'string') {
        return;
      }

      var functionBody = fabric.util.getFunctionBody(options.clipTo);
      if (typeof functionBody !== 'undefined') {
        this.clipTo = new Function('ctx', functionBody);
      }
    },

    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    setOptions: function(options) {
      for (var prop in options) {
        this.set(prop, options[prop]);
      }
      this._initGradient(options);
      this._initPattern(options);
      this._initClipping(options);
    },

    /**
     * Transforms context when rendering an object
     * @param {CanvasRenderingContext2D} ctx Context
     * @param {Boolean} fromLeft When true, context is transformed to object's top/left corner. This is used when rendering text on Node
     */
    transform: function(ctx, fromLeft) {
      if (this.group) {
        this.group.transform(ctx, fromLeft);
      }
      ctx.globalAlpha = this.opacity;

      var center = fromLeft ? this._getLeftTopCoords() : this.getCenterPoint();
      ctx.translate(center.x, center.y);
      ctx.rotate(degreesToRadians(this.angle));
      ctx.scale(
        this.scaleX * (this.flipX ? -1 : 1),
        this.scaleY * (this.flipY ? -1 : 1)
      );
    },

    /**
     * Returns an object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS,

          object = {
            type:               this.type,
            originX:            this.originX,
            originY:            this.originY,
            left:               toFixed(this.left, NUM_FRACTION_DIGITS),
            top:                toFixed(this.top, NUM_FRACTION_DIGITS),
            width:              toFixed(this.width, NUM_FRACTION_DIGITS),
            height:             toFixed(this.height, NUM_FRACTION_DIGITS),
            fill:               (this.fill && this.fill.toObject) ? this.fill.toObject() : this.fill,
            stroke:             (this.stroke && this.stroke.toObject) ? this.stroke.toObject() : this.stroke,
            strokeWidth:        toFixed(this.strokeWidth, NUM_FRACTION_DIGITS),
            strokeDashArray:    this.strokeDashArray,
            strokeLineCap:      this.strokeLineCap,
            strokeLineJoin:     this.strokeLineJoin,
            strokeMiterLimit:   toFixed(this.strokeMiterLimit, NUM_FRACTION_DIGITS),
            scaleX:             toFixed(this.scaleX, NUM_FRACTION_DIGITS),
            scaleY:             toFixed(this.scaleY, NUM_FRACTION_DIGITS),
            angle:              toFixed(this.getAngle(), NUM_FRACTION_DIGITS),
            flipX:              this.flipX,
            flipY:              this.flipY,
            opacity:            toFixed(this.opacity, NUM_FRACTION_DIGITS),
            shadow:             (this.shadow && this.shadow.toObject) ? this.shadow.toObject() : this.shadow,
            visible:            this.visible,
            clipTo:             this.clipTo && String(this.clipTo),
            backgroundColor:    this.backgroundColor
          };

      if (!this.includeDefaultValues) {
        object = this._removeDefaultValues(object);
      }

      fabric.util.populateWithProperties(this, object, propertiesToInclude);

      return object;
    },

    /**
     * Returns (dataless) object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toDatalessObject: function(propertiesToInclude) {
      // will be overwritten by subclasses
      return this.toObject(propertiesToInclude);
    },

    /**
     * @private
     * @param {Object} object
     */
    _removeDefaultValues: function(object) {
      var prototype = fabric.util.getKlass(object.type).prototype,
          stateProperties = prototype.stateProperties;

      stateProperties.forEach(function(prop) {
        if (object[prop] === prototype[prop]) {
          delete object[prop];
        }
      });

      return object;
    },

    /**
     * Returns a string representation of an instance
     * @return {String}
     */
    toString: function() {
      return '#<fabric.' + capitalize(this.type) + '>';
    },

    /**
     * Basic getter
     * @param {String} property Property name
     * @return {Any} value of a property
     */
    get: function(property) {
      return this[property];
    },

    /**
     * @private
     */
    _setObject: function(obj) {
      for (var prop in obj) {
        this._set(prop, obj[prop]);
      }
    },

    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(key, value) {
      if (typeof key === 'object') {
        this._setObject(key);
      }
      else {
        if (typeof value === 'function' && key !== 'clipTo') {
          this._set(key, value(this.get(key)));
        }
        else {
          this._set(key, value);
        }
      }
      return this;
    },

    /**
     * @private
     * @param {String} key
     * @param {Any} value
     * @return {fabric.Object} thisArg
     */
    _set: function(key, value) {
      var shouldConstrainValue = (key === 'scaleX' || key === 'scaleY');

      if (shouldConstrainValue) {
        value = this._constrainScale(value);
      }
      if (key === 'scaleX' && value < 0) {
        this.flipX = !this.flipX;
        value *= -1;
      }
      else if (key === 'scaleY' && value < 0) {
        this.flipY = !this.flipY;
        value *= -1;
      }
      else if (key === 'width' || key === 'height') {
        this.minScaleLimit = toFixed(Math.min(0.1, 1/Math.max(this.width, this.height)), 2);
      }
      else if (key === 'shadow' && value && !(value instanceof fabric.Shadow)) {
        value = new fabric.Shadow(value);
      }

      this[key] = value;

      return this;
    },

    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(property) {
      var value = this.get(property);
      if (typeof value === 'boolean') {
        this.set(property, !value);
      }
      return this;
    },

    /**
     * Sets sourcePath of an object
     * @param {String} value Value to set sourcePath to
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setSourcePath: function(value) {
      this.sourcePath = value;
      return this;
    },

    /**
     * Retrieves viewportTransform from Object's canvas if possible
     * @method getViewportTransform
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipY value // TODO
     */
    getViewportTransform: function() {
      if (this.canvas && this.canvas.viewportTransform) {
        return this.canvas.viewportTransform;
      }
      return [1, 0, 0, 1, 0, 0];
    },

    /**
     * Renders an object on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function(ctx, noTransform) {
      // do not render if width/height are zeros or object is not visible
      if (this.width === 0 || this.height === 0 || !this.visible) {
        return;
      }

      ctx.save();

      //setup fill rule for current object
      this._setupFillRule(ctx);

      this._transform(ctx, noTransform);
      this._setStrokeStyles(ctx);
      this._setFillStyles(ctx);

      if (this.group && this.group.type === 'path-group') {
        ctx.translate(-this.group.width/2, -this.group.height/2);
        var m = this.transformMatrix;
        if (m) {
          ctx.transform.apply(ctx, m);
        }
      }
      ctx.globalAlpha = this.group ? (ctx.globalAlpha * this.opacity) : this.opacity;
      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      this._render(ctx, noTransform);
      this.clipTo && ctx.restore();
      this._removeShadow(ctx);
      this._restoreFillRule(ctx);

      ctx.restore();
    },

    _transform: function(ctx, noTransform) {
      var m = this.transformMatrix;

      if (m && !this.group) {
        ctx.setTransform.apply(ctx, m);
      }
      if (!noTransform) {
        this.transform(ctx);
      }
    },

    _setStrokeStyles: function(ctx) {
      if (this.stroke) {
        ctx.lineWidth = this.strokeWidth;
        ctx.lineCap = this.strokeLineCap;
        ctx.lineJoin = this.strokeLineJoin;
        ctx.miterLimit = this.strokeMiterLimit;
        ctx.strokeStyle = this.stroke.toLive
          ? this.stroke.toLive(ctx)
          : this.stroke;
      }
    },

    _setFillStyles: function(ctx) {
      if (this.fill) {
        ctx.fillStyle = this.fill.toLive
          ? this.fill.toLive(ctx)
          : this.fill;
      }
    },

    /**
     * Renders controls and borders for the object
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _renderControls: function(ctx, noTransform) {
      var vpt = this.getViewportTransform();

      ctx.save();
      if (this.active && !noTransform) {
        var center;
        if (this.group) {
          center = fabric.util.transformPoint(this.group.getCenterPoint(), vpt);
          ctx.translate(center.x, center.y);
          ctx.rotate(degreesToRadians(this.group.angle));
        }
        center = fabric.util.transformPoint(this.getCenterPoint(), vpt, null != this.group);
        if (this.group) {
          center.x *= this.group.scaleX;
          center.y *= this.group.scaleY;
        }
        ctx.translate(center.x, center.y);
        ctx.rotate(degreesToRadians(this.angle));
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setShadow: function(ctx) {
      if (!this.shadow) {
        return;
      }

      ctx.shadowColor = this.shadow.color;
      ctx.shadowBlur = this.shadow.blur;
      ctx.shadowOffsetX = this.shadow.offsetX;
      ctx.shadowOffsetY = this.shadow.offsetY;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _removeShadow: function(ctx) {
      if (!this.shadow) {
        return;
      }

      ctx.shadowColor = '';
      ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderFill: function(ctx) {
      if (!this.fill) {
        return;
      }

      ctx.save();
      if (this.fill.toLive) {
        ctx.translate(
          -this.width / 2 + this.fill.offsetX || 0,
          -this.height / 2 + this.fill.offsetY || 0);
      }
      if (this.fill.gradientTransform) {
        var g = this.fill.gradientTransform;
        ctx.transform.apply(ctx, g);
      }
      if (this.fillRule === 'destination-over') {
        ctx.fill('evenodd');
      }
      else {
        ctx.fill();
      }
      ctx.restore();
      if (this.shadow && !this.shadow.affectStroke) {
        this._removeShadow(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderStroke: function(ctx) {
      if (!this.stroke || this.strokeWidth === 0) {
        return;
      }

      ctx.save();
      if (this.strokeDashArray) {
        // Spec requires the concatenation of two copies the dash list when the number of elements is odd
        if (1 & this.strokeDashArray.length) {
          this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
        }

        if (supportsLineDash) {
          ctx.setLineDash(this.strokeDashArray);
          this._stroke && this._stroke(ctx);
        }
        else {
          this._renderDashedStroke && this._renderDashedStroke(ctx);
        }
        ctx.stroke();
      }
      else {
        if (this.stroke.gradientTransform) {
          var g = this.stroke.gradientTransform;
          ctx.transform.apply(ctx, g);
        }
        this._stroke ? this._stroke(ctx) : ctx.stroke();
      }
      this._removeShadow(ctx);
      ctx.restore();
    },

    /**
     * Clones an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {fabric.Object} clone of an instance
     */
    clone: function(callback, propertiesToInclude) {
      if (this.constructor.fromObject) {
        return this.constructor.fromObject(this.toObject(propertiesToInclude), callback);
      }
      return new fabric.Object(this.toObject(propertiesToInclude));
    },

    /**
     * Creates an instance of fabric.Image out of an object
     * @param {Function} callback callback, invoked with an instance as a first argument
     * @return {fabric.Object} thisArg
     */
    cloneAsImage: function(callback) {
      var dataUrl = this.toDataURL();
      fabric.util.loadImage(dataUrl, function(img) {
        if (callback) {
          callback(new fabric.Image(img));
        }
      });
      return this;
    },

    /**
     * Converts an object into a data-url-like string
     * @param {Object} options Options object
     * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
     * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
     * @param {Number} [options.multiplier=1] Multiplier to scale by
     * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
     * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
     * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
     * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
     * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
     */
    toDataURL: function(options) {
      options || (options = { });

      var el = fabric.util.createCanvasElement(),
          boundingRect = this.getBoundingRect();

      el.width = boundingRect.width;
      el.height = boundingRect.height;

      fabric.util.wrapElement(el, 'div');
      var canvas = new fabric.Canvas(el);

      // to avoid common confusion https://github.com/kangax/fabric.js/issues/806
      if (options.format === 'jpg') {
        options.format = 'jpeg';
      }

      if (options.format === 'jpeg') {
        canvas.backgroundColor = '#fff';
      }

      var origParams = {
        active: this.get('active'),
        left: this.getLeft(),
        top: this.getTop()
      };

      this.set('active', false);
      this.setPositionByOrigin(new fabric.Point(el.width / 2, el.height / 2), 'center', 'center');

      var originalCanvas = this.canvas;
      canvas.add(this);
      var data = canvas.toDataURL(options);

      this.set(origParams).setCoords();
      this.canvas = originalCanvas;

      canvas.dispose();
      canvas = null;

      return data;
    },

    /**
     * Returns true if specified type is identical to the type of an instance
     * @param {String} type Type to check against
     * @return {Boolean}
     */
    isType: function(type) {
      return this.type === type;
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 0;
    },

    /**
     * Returns a JSON representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} JSON
     */
    toJSON: function(propertiesToInclude) {
      // delegate, not alias
      return this.toObject(propertiesToInclude);
    },

    /**
     * Sets gradient (fill or stroke) of an object
     * <b>Backwards incompatibility note:</b> This method was named "setGradientFill" until v1.1.0
     * @param {String} property Property name 'stroke' or 'fill'
     * @param {Object} [options] Options object
     * @param {String} [options.type] Type of gradient 'radial' or 'linear'
     * @param {Number} [options.x1=0] x-coordinate of start point
     * @param {Number} [options.y1=0] y-coordinate of start point
     * @param {Number} [options.x2=0] x-coordinate of end point
     * @param {Number} [options.y2=0] y-coordinate of end point
     * @param {Number} [options.r1=0] Radius of start point (only for radial gradients)
     * @param {Number} [options.r2=0] Radius of end point (only for radial gradients)
     * @param {Object} [options.colorStops] Color stops object eg. {0: 'ff0000', 1: '000000'}
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/58y8b/|jsFiddle demo}
     * @example <caption>Set linear gradient</caption>
     * object.setGradient('fill', {
     *   type: 'linear',
     *   x1: -object.width / 2,
     *   y1: 0,
     *   x2: object.width / 2,
     *   y2: 0,
     *   colorStops: {
     *     0: 'red',
     *     0.5: '#005555',
     *     1: 'rgba(0,0,255,0.5)'
     *   }
     * });
     * canvas.renderAll();
     * @example <caption>Set radial gradient</caption>
     * object.setGradient('fill', {
     *   type: 'radial',
     *   x1: 0,
     *   y1: 0,
     *   x2: 0,
     *   y2: 0,
     *   r1: object.width / 2,
     *   r2: 10,
     *   colorStops: {
     *     0: 'red',
     *     0.5: '#005555',
     *     1: 'rgba(0,0,255,0.5)'
     *   }
     * });
     * canvas.renderAll();
     */
    setGradient: function(property, options) {
      options || (options = { });

      var gradient = { colorStops: [] };

      gradient.type = options.type || (options.r1 || options.r2 ? 'radial' : 'linear');
      gradient.coords = {
        x1: options.x1,
        y1: options.y1,
        x2: options.x2,
        y2: options.y2
      };

      if (options.r1 || options.r2) {
        gradient.coords.r1 = options.r1;
        gradient.coords.r2 = options.r2;
      }

      for (var position in options.colorStops) {
        var color = new fabric.Color(options.colorStops[position]);
        gradient.colorStops.push({
          offset: position,
          color: color.toRgb(),
          opacity: color.getAlpha()
        });
      }

      return this.set(property, fabric.Gradient.forObject(this, gradient));
    },

    /**
     * Sets pattern fill of an object
     * @param {Object} options Options object
     * @param {(String|HTMLImageElement)} options.source Pattern source
     * @param {String} [options.repeat=repeat] Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
     * @param {Number} [options.offsetX=0] Pattern horizontal offset from object's left/top corner
     * @param {Number} [options.offsetY=0] Pattern vertical offset from object's left/top corner
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/QT3pa/|jsFiddle demo}
     * @example <caption>Set pattern</caption>
     * fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
     *   object.setPatternFill({
     *     source: img,
     *     repeat: 'repeat'
     *   });
     *   canvas.renderAll();
     * });
     */
    setPatternFill: function(options) {
      return this.set('fill', new fabric.Pattern(options));
    },

    /**
     * Sets {@link fabric.Object#shadow|shadow} of an object
     * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
     * @param {String} [options.color=rgb(0,0,0)] Shadow color
     * @param {Number} [options.blur=0] Shadow blur
     * @param {Number} [options.offsetX=0] Shadow horizontal offset
     * @param {Number} [options.offsetY=0] Shadow vertical offset
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/7gvJG/|jsFiddle demo}
     * @example <caption>Set shadow with string notation</caption>
     * object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
     * canvas.renderAll();
     * @example <caption>Set shadow with object notation</caption>
     * object.setShadow({
     *   color: 'red',
     *   blur: 10,
     *   offsetX: 20,
     *   offsetY: 20
     * });
     * canvas.renderAll();
     */
    setShadow: function(options) {
      return this.set('shadow', options ? new fabric.Shadow(options) : null);
    },

    /**
     * Sets "color" of an instance (alias of `set('fill', &hellip;)`)
     * @param {String} color Color value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setColor: function(color) {
      this.set('fill', color);
      return this;
    },

    /**
     * Sets "angle" of an instance
     * @param {Number} angle Angle value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setAngle: function(angle) {
      var shouldCenterOrigin = (this.originX !== 'center' || this.originY !== 'center') && this.centeredRotation;

      if (shouldCenterOrigin) {
        this._setOriginToCenter();
      }

      this.set('angle', angle);

      if (shouldCenterOrigin) {
        this._resetOrigin();
      }

      return this;
    },

    /**
     * Centers object horizontally on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    centerH: function () {
      this.canvas.centerObjectH(this);
      return this;
    },

    /**
     * Centers object vertically on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    centerV: function () {
      this.canvas.centerObjectV(this);
      return this;
    },

    /**
     * Centers object vertically and horizontally on canvas to which is was added last
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    center: function () {
      this.canvas.centerObject(this);
      return this;
    },

    /**
     * Removes object from canvas to which it was added last
     * @return {fabric.Object} thisArg
     * @chainable
     */
    remove: function() {
      this.canvas.remove(this);
      return this;
    },

    /**
     * Returns coordinates of a pointer relative to an object
     * @param {Event} e Event to operate upon
     * @param {Object} [pointer] Pointer to operate upon (instead of event)
     * @return {Object} Coordinates of a pointer (x, y)
     */
    getLocalPointer: function(e, pointer) {
      pointer = pointer || this.canvas.getPointer(e);
      var objectLeftTop = this.translateToOriginPoint(this.getCenterPoint(), 'left', 'top');
      return {
        x: pointer.x - objectLeftTop.x,
        y: pointer.y - objectLeftTop.y
      };
    },

    /**
     * Sets canvas globalCompositeOperation for specific object
     * custom composition operation for the particular object can be specifed using fillRule property
     * @param {CanvasRenderingContext2D} ctx Rendering canvas context
     */
    _setupFillRule: function (ctx) {
      if (this.fillRule) {
        this._prevFillRule = ctx.globalCompositeOperation;
        ctx.globalCompositeOperation = this.fillRule;
      }
    },

    /**
     * Restores previously saved canvas globalCompositeOperation after obeject rendering
     * @param {CanvasRenderingContext2D} ctx Rendering canvas context
     */
    _restoreFillRule: function (ctx) {
      if (this.fillRule && this._prevFillRule) {
        ctx.globalCompositeOperation = this._prevFillRule;
      }
    }
  });

  fabric.util.createAccessors(fabric.Object);

  /**
   * Alias for {@link fabric.Object.prototype.setAngle}
   * @alias rotate -> setAngle
   * @memberof fabric.Object
   */
  fabric.Object.prototype.rotate = fabric.Object.prototype.setAngle;

  extend(fabric.Object.prototype, fabric.Observable);

  /**
   * Defines the number of fraction digits to use when serializing object values.
   * You can use it to increase/decrease precision of such values like left, top, scaleX, scaleY, etc.
   * @static
   * @memberof fabric.Object
   * @constant
   * @type Number
   */
  fabric.Object.NUM_FRACTION_DIGITS = 2;

  /**
   * Unique id used internally when creating SVG elements
   * @static
   * @memberof fabric.Object
   * @type Number
   */
  fabric.Object.__uid = 0;

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  var degreesToRadians = fabric.util.degreesToRadians;

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToCenterPoint: function(point, originX, originY) {
      var cx = point.x,
          cy = point.y,
          strokeWidth = this.stroke ? this.strokeWidth : 0;

      if (originX === 'left') {
        cx = point.x + (this.getWidth() + strokeWidth * this.scaleX) / 2;
      }
      else if (originX === 'right') {
        cx = point.x - (this.getWidth() + strokeWidth * this.scaleX) / 2;
      }

      if (originY === 'top') {
        cy = point.y + (this.getHeight() + strokeWidth * this.scaleY) / 2;
      }
      else if (originY === 'bottom') {
        cy = point.y - (this.getHeight() + strokeWidth * this.scaleY) / 2;
      }

      // Apply the reverse rotation to the point (it's already scaled properly)
      return fabric.util.rotatePoint(new fabric.Point(cx, cy), point, degreesToRadians(this.angle));
    },

    /**
     * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
     * @param {fabric.Point} center The point which corresponds to center of the object
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToOriginPoint: function(center, originX, originY) {
      var x = center.x,
          y = center.y,
          strokeWidth = this.stroke ? this.strokeWidth : 0;

      // Get the point coordinates
      if (originX === 'left') {
        x = center.x - (this.getWidth() + strokeWidth * this.scaleX) / 2;
      }
      else if (originX === 'right') {
        x = center.x + (this.getWidth() + strokeWidth * this.scaleX) / 2;
      }
      if (originY === 'top') {
        y = center.y - (this.getHeight() + strokeWidth * this.scaleY) / 2;
      }
      else if (originY === 'bottom') {
        y = center.y + (this.getHeight() + strokeWidth * this.scaleY) / 2;
      }

      // Apply the rotation to the point (it's already scaled properly)
      return fabric.util.rotatePoint(new fabric.Point(x, y), center, degreesToRadians(this.angle));
    },

    /**
     * Returns the real center coordinates of the object
     * @return {fabric.Point}
     */
    getCenterPoint: function() {
      var leftTop = new fabric.Point(this.left, this.top);
      return this.translateToCenterPoint(leftTop, this.originX, this.originY);
    },

    /**
     * Returns the coordinates of the object based on center coordinates
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @return {fabric.Point}
     */
    // getOriginPoint: function(center) {
    //   return this.translateToOriginPoint(center, this.originX, this.originY);
    // },

    /**
     * Returns the coordinates of the object as if it has a different origin
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    getPointByOrigin: function(originX, originY) {
      var center = this.getCenterPoint();
      return this.translateToOriginPoint(center, originX, originY);
    },

    /**
     * Returns the point in local coordinates
     * @param {fabric.Point} point The point relative to the global coordinate system
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    toLocalPoint: function(point, originX, originY) {
      var center = this.getCenterPoint(),
          strokeWidth = this.stroke ? this.strokeWidth : 0,
          x, y;

      if (originX && originY) {
        if (originX === 'left') {
          x = center.x - (this.getWidth() + strokeWidth * this.scaleX) / 2;
        }
        else if (originX === 'right') {
          x = center.x + (this.getWidth() + strokeWidth * this.scaleX) / 2;
        }
        else {
          x = center.x;
        }

        if (originY === 'top') {
          y = center.y - (this.getHeight() + strokeWidth * this.scaleY) / 2;
        }
        else if (originY === 'bottom') {
          y = center.y + (this.getHeight() + strokeWidth * this.scaleY) / 2;
        }
        else {
          y = center.y;
        }
      }
      else {
        x = this.left;
        y = this.top;
      }

      return fabric.util.rotatePoint(new fabric.Point(point.x, point.y), center, -degreesToRadians(this.angle))
        .subtractEquals(new fabric.Point(x, y));
    },

    /**
     * Returns the point in global coordinates
     * @param {fabric.Point} The point relative to the local coordinate system
     * @return {fabric.Point}
     */
    // toGlobalPoint: function(point) {
    //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
    // },

    /**
     * Sets the position of the object taking into consideration the object's origin
     * @param {fabric.Point} pos The new position of the object
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {void}
     */
    setPositionByOrigin: function(pos, originX, originY) {
      var center = this.translateToCenterPoint(pos, originX, originY),
          position = this.translateToOriginPoint(center, this.originX, this.originY);

      this.set('left', position.x);
      this.set('top', position.y);
    },

    /**
     * @param {String} to One of 'left', 'center', 'right'
     */
    adjustPosition: function(to) {
      var angle = degreesToRadians(this.angle),
          hypotHalf = this.getWidth() / 2,
          xHalf = Math.cos(angle) * hypotHalf,
          yHalf = Math.sin(angle) * hypotHalf,
          hypotFull = this.getWidth(),
          xFull = Math.cos(angle) * hypotFull,
          yFull = Math.sin(angle) * hypotFull;

      if (this.originX === 'center' && to === 'left' ||
          this.originX === 'right' && to === 'center') {
        // move half left
        this.left -= xHalf;
        this.top -= yHalf;
      }
      else if (this.originX === 'left' && to === 'center' ||
               this.originX === 'center' && to === 'right') {
        // move half right
        this.left += xHalf;
        this.top += yHalf;
      }
      else if (this.originX === 'left' && to === 'right') {
        // move full right
        this.left += xFull;
        this.top += yFull;
      }
      else if (this.originX === 'right' && to === 'left') {
        // move full left
        this.left -= xFull;
        this.top -= yFull;
      }

      this.setCoords();
      this.originX = to;
    },

    /**
     * Sets the origin/position of the object to it's center point
     * @private
     * @return {void}
     */
    _setOriginToCenter: function() {
      this._originalOriginX = this.originX;
      this._originalOriginY = this.originY;

      var center = this.getCenterPoint();

      this.originX = 'center';
      this.originY = 'center';

      this.left = center.x;
      this.top = center.y;
    },

    /**
     * Resets the origin/position of the object to it's original origin
     * @private
     * @return {void}
     */
    _resetOrigin: function() {
      var originPoint = this.translateToOriginPoint(
        this.getCenterPoint(),
        this._originalOriginX,
        this._originalOriginY);

      this.originX = this._originalOriginX;
      this.originY = this._originalOriginY;

      this.left = originPoint.x;
      this.top = originPoint.y;

      this._originalOriginX = null;
      this._originalOriginY = null;
    },

    /**
     * @private
     */
    _getLeftTopCoords: function() {
      return this.translateToOriginPoint(this.getCenterPoint(), 'left', 'center');
    }
  });

})();


(function() {

  var degreesToRadians = fabric.util.degreesToRadians;

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * Object containing coordinates of object's controls
     * @type Object
     * @default
     */
    oCoords: null,

    /**
     * Checks if object intersects with an area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @return {Boolean} true if object intersects with an area formed by 2 points
     */
    intersectsWithRect: function(pointTL, pointBR) {
      var oCoords = this.oCoords,
          tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br = new fabric.Point(oCoords.br.x, oCoords.br.y),
          intersection = fabric.Intersection.intersectPolygonRectangle(
            [tl, tr, br, bl],
            pointTL,
            pointBR
          );
      return intersection.status === 'Intersection';
    },

    /**
     * Checks if object intersects with another object
     * @param {Object} other Object to test
     * @return {Boolean} true if object intersects with another object
     */
    intersectsWithObject: function(other) {
      // extracts coords
      function getCoords(oCoords) {
        return {
          tl: new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr: new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl: new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br: new fabric.Point(oCoords.br.x, oCoords.br.y)
        };
      }
      var thisCoords = getCoords(this.oCoords),
          otherCoords = getCoords(other.oCoords),
          intersection = fabric.Intersection.intersectPolygonPolygon(
            [thisCoords.tl, thisCoords.tr, thisCoords.br, thisCoords.bl],
            [otherCoords.tl, otherCoords.tr, otherCoords.br, otherCoords.bl]
          );

      return intersection.status === 'Intersection';
    },

    /**
     * Checks if object is fully contained within area of another object
     * @param {Object} other Object to test
     * @return {Boolean} true if object is fully contained within area of another object
     */
    isContainedWithinObject: function(other) {
      var boundingRect = other.getBoundingRect(),
          point1 = new fabric.Point(boundingRect.left, boundingRect.top),
          point2 = new fabric.Point(boundingRect.left + boundingRect.width, boundingRect.top + boundingRect.height);

      return this.isContainedWithinRect(point1, point2);
    },

    /**
     * Checks if object is fully contained within area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @return {Boolean} true if object is fully contained within area formed by 2 points
     */
    isContainedWithinRect: function(pointTL, pointBR) {
      var boundingRect = this.getBoundingRect();

      return (
        boundingRect.left >= pointTL.x &&
        boundingRect.left + boundingRect.width <= pointBR.x &&
        boundingRect.top >= pointTL.y &&
        boundingRect.top + boundingRect.height <= pointBR.y
      );
    },

    /**
     * Checks if point is inside the object
     * @param {fabric.Point} point Point to check against
     * @return {Boolean} true if point is inside the object
     */
    containsPoint: function(point) {
      var lines = this._getImageLines(this.oCoords),
          xPoints = this._findCrossPoints(point, lines);

      // if xPoints is odd then point is inside the object
      return (xPoints !== 0 && xPoints % 2 === 1);
    },

    /**
     * Method that returns an object with the object edges in it, given the coordinates of the corners
     * @private
     * @param {Object} oCoords Coordinates of the object corners
     */
    _getImageLines: function(oCoords) {
      return {
        topline: {
          o: oCoords.tl,
          d: oCoords.tr
        },
        rightline: {
          o: oCoords.tr,
          d: oCoords.br
        },
        bottomline: {
          o: oCoords.br,
          d: oCoords.bl
        },
        leftline: {
          o: oCoords.bl,
          d: oCoords.tl
        }
      };
    },

    /**
     * Helper method to determine how many cross points are between the 4 object edges
     * and the horizontal line determined by a point on canvas
     * @private
     * @param {fabric.Point} point Point to check
     * @param {Object} oCoords Coordinates of the object being evaluated
     */
    _findCrossPoints: function(point, oCoords) {
      var b1, b2, a1, a2, xi, yi,
          xcount = 0,
          iLine;

      for (var lineKey in oCoords) {
        iLine = oCoords[lineKey];
        // optimisation 1: line below point. no cross
        if ((iLine.o.y < point.y) && (iLine.d.y < point.y)) {
          continue;
        }
        // optimisation 2: line above point. no cross
        if ((iLine.o.y >= point.y) && (iLine.d.y >= point.y)) {
          continue;
        }
        // optimisation 3: vertical line case
        if ((iLine.o.x === iLine.d.x) && (iLine.o.x >= point.x)) {
          xi = iLine.o.x;
          yi = point.y;
        }
        // calculate the intersection point
        else {
          b1 = 0;
          b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
          a1 = point.y - b1 * point.x;
          a2 = iLine.o.y - b2 * iLine.o.x;

          xi = - (a1 - a2) / (b1 - b2);
          yi = a1 + b1 * xi;
        }
        // dont count xi < point.x cases
        if (xi >= point.x) {
          xcount += 1;
        }
        // optimisation 4: specific for square images
        if (xcount === 2) {
          break;
        }
      }
      return xcount;
    },

    /**
     * Returns width of an object's bounding rectangle
     * @deprecated since 1.0.4
     * @return {Number} width value
     */
    getBoundingRectWidth: function() {
      return this.getBoundingRect().width;
    },

    /**
     * Returns height of an object's bounding rectangle
     * @deprecated since 1.0.4
     * @return {Number} height value
     */
    getBoundingRectHeight: function() {
      return this.getBoundingRect().height;
    },

    /**
     * Returns coordinates of object's bounding rectangle (left, top, width, height)
     * @return {Object} Object with left, top, width, height properties
     */
    getBoundingRect: function() {
      this.oCoords || this.setCoords();

      var xCoords = [this.oCoords.tl.x, this.oCoords.tr.x, this.oCoords.br.x, this.oCoords.bl.x],
          minX = fabric.util.array.min(xCoords),
          maxX = fabric.util.array.max(xCoords),
          width = Math.abs(minX - maxX),

          yCoords = [this.oCoords.tl.y, this.oCoords.tr.y, this.oCoords.br.y, this.oCoords.bl.y],
          minY = fabric.util.array.min(yCoords),
          maxY = fabric.util.array.max(yCoords),
          height = Math.abs(minY - maxY);

      return {
        left: minX,
        top: minY,
        width: width,
        height: height
      };
    },

    /**
     * Returns width of an object
     * @return {Number} width value
     */
    getWidth: function() {
      return this.width * this.scaleX;
    },

    /**
     * Returns height of an object
     * @return {Number} height value
     */
    getHeight: function() {
      return this.height * this.scaleY;
    },

    /**
     * Makes sure the scale is valid and modifies it if necessary
     * @private
     * @param {Number} value
     * @return {Number}
     */
    _constrainScale: function(value) {
      if (Math.abs(value) < this.minScaleLimit) {
        if (value < 0) {
          return -this.minScaleLimit;
        }
        else {
          return this.minScaleLimit;
        }
      }
      return value;
    },

    /**
     * Scales an object (equally by x and y)
     * @param {Number} value Scale factor
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scale: function(value) {
      value = this._constrainScale(value);

      if (value < 0) {
        this.flipX = !this.flipX;
        this.flipY = !this.flipY;
        value *= -1;
      }

      this.scaleX = value;
      this.scaleY = value;
      this.setCoords();
      return this;
    },

    /**
     * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
     * @param {Number} value New width value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToWidth: function(value) {
      // adjust to bounding rect factor so that rotated shapes would fit as well
      var boundingRectFactor = this.getBoundingRectWidth() / this.getWidth();
      return this.scale(value / this.width / boundingRectFactor);
    },

    /**
     * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
     * @param {Number} value New height value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToHeight: function(value) {
      // adjust to bounding rect factor so that rotated shapes would fit as well
      var boundingRectFactor = this.getBoundingRectHeight() / this.getHeight();
      return this.scale(value / this.height / boundingRectFactor);
    },

    /**
     * Sets corner position coordinates based on current angle, width and height
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setCoords: function() {
      var strokeWidth = this.strokeWidth > 1 ? this.strokeWidth : 0,
          theta = degreesToRadians(this.angle),
          vpt = this.getViewportTransform(),
          f = function (p) {
            return fabric.util.transformPoint(p, vpt);
          },
          w = this.width,
          h = this.height,
          capped = this.strokeLineCap === 'round' || this.strokeLineCap === 'square',
          vLine = this.type === 'line' && this.width === 1,
          hLine = this.type === 'line' && this.height === 1,
          strokeW = (capped && hLine) || this.type !== 'line',
          strokeH = (capped && vLine) || this.type !== 'line';

      if (vLine) {
        w = strokeWidth;
      }
      else if (hLine) {
        h = strokeWidth;
      }
      if (strokeW) {
        w += strokeWidth;
      }
      if (strokeH) {
        h += strokeWidth;
      }
      this.currentWidth = w * this.scaleX;
      this.currentHeight = h * this.scaleY;

      // If width is negative, make postive. Fixes path selection issue
      if (this.currentWidth < 0) {
        this.currentWidth = Math.abs(this.currentWidth);
      }

      var _hypotenuse = Math.sqrt(
            Math.pow(this.currentWidth / 2, 2) +
            Math.pow(this.currentHeight / 2, 2)),

          _angle = Math.atan(isFinite(this.currentHeight / this.currentWidth) ? this.currentHeight / this.currentWidth : 0),

          // offset added for rotate and scale actions
          offsetX = Math.cos(_angle + theta) * _hypotenuse,
          offsetY = Math.sin(_angle + theta) * _hypotenuse,
          sinTh = Math.sin(theta),
          cosTh = Math.cos(theta),
          coords = this.getCenterPoint(),
          wh = new fabric.Point(this.currentWidth, this.currentHeight),
          _tl =   new fabric.Point(coords.x - offsetX, coords.y - offsetY),
          _tr =   new fabric.Point(_tl.x + (wh.x * cosTh),   _tl.y + (wh.x * sinTh)),
          _bl =   new fabric.Point(_tl.x - (wh.y * sinTh),   _tl.y + (wh.y * cosTh)),
          _mt =   new fabric.Point(_tl.x + (wh.x/2 * cosTh), _tl.y + (wh.x/2 * sinTh)),
          tl  = f(_tl),
          tr  = f(_tr),
          br  = f(new fabric.Point(_tr.x - (wh.y * sinTh),   _tr.y + (wh.y * cosTh))),
          bl  = f(_bl),
          ml  = f(new fabric.Point(_tl.x - (wh.y/2 * sinTh), _tl.y + (wh.y/2 * cosTh))),
          mt  = f(_mt),
          mr  = f(new fabric.Point(_tr.x - (wh.y/2 * sinTh), _tr.y + (wh.y/2 * cosTh))),
          mb  = f(new fabric.Point(_bl.x + (wh.x/2 * cosTh), _bl.y + (wh.x/2 * sinTh))),
          mtr = f(new fabric.Point(_mt.x, _mt.y)),

          // padding
          padX = Math.cos(_angle + theta) * this.padding * Math.sqrt(2),
          padY = Math.sin(_angle + theta) * this.padding * Math.sqrt(2);

      tl = tl.add(new fabric.Point(-padX, -padY));
      tr = tr.add(new fabric.Point(padY, -padX));
      br = br.add(new fabric.Point(padX, padY));
      bl = bl.add(new fabric.Point(-padY, padX));
      ml = ml.add(new fabric.Point((-padX - padY) / 2, (-padY + padX) / 2));
      mt = mt.add(new fabric.Point((padY - padX) / 2, -(padY + padX) / 2));
      mr = mr.add(new fabric.Point((padY + padX) / 2, (padY - padX) / 2));
      mb = mb.add(new fabric.Point((padX - padY) / 2, (padX + padY) / 2));
      mtr = mtr.add(new fabric.Point((padY - padX) / 2, -(padY + padX) / 2));

      // debugging

      // setTimeout(function() {
      //   canvas.contextTop.fillStyle = 'green';
      //   canvas.contextTop.fillRect(mb.x, mb.y, 3, 3);
      //   canvas.contextTop.fillRect(bl.x, bl.y, 3, 3);
      //   canvas.contextTop.fillRect(br.x, br.y, 3, 3);
      //   canvas.contextTop.fillRect(tl.x, tl.y, 3, 3);
      //   canvas.contextTop.fillRect(tr.x, tr.y, 3, 3);
      //   canvas.contextTop.fillRect(ml.x, ml.y, 3, 3);
      //   canvas.contextTop.fillRect(mr.x, mr.y, 3, 3);
      //   canvas.contextTop.fillRect(mt.x, mt.y, 3, 3);
      // }, 50);

      this.oCoords = {
        // corners
        tl: tl, tr: tr, br: br, bl: bl,
        // middle
        ml: ml, mt: mt, mr: mr, mb: mb,
        // rotating point
        mtr: mtr
      };

      // set coordinates of the draggable boxes in the corners used to scale/rotate the image
      this._setCornerCoords && this._setCornerCoords();

      return this;
    }
  });
})();


fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Moves an object to the bottom of the stack of drawn objects
   * @return {fabric.Object} thisArg
   * @chainable
   */
  sendToBack: function() {
    if (this.group) {
      fabric.StaticCanvas.prototype.sendToBack.call(this.group, this);
    }
    else {
      this.canvas.sendToBack(this);
    }
    return this;
  },

  /**
   * Moves an object to the top of the stack of drawn objects
   * @return {fabric.Object} thisArg
   * @chainable
   */
  bringToFront: function() {
    if (this.group) {
      fabric.StaticCanvas.prototype.bringToFront.call(this.group, this);
    }
    else {
      this.canvas.bringToFront(this);
    }
    return this;
  },

  /**
   * Moves an object down in stack of drawn objects
   * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  sendBackwards: function(intersecting) {
    if (this.group) {
      fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, intersecting);
    }
    else {
      this.canvas.sendBackwards(this, intersecting);
    }
    return this;
  },

  /**
   * Moves an object up in stack of drawn objects
   * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  bringForward: function(intersecting) {
    if (this.group) {
      fabric.StaticCanvas.prototype.bringForward.call(this.group, this, intersecting);
    }
    else {
      this.canvas.bringForward(this, intersecting);
    }
    return this;
  },

  /**
   * Moves an object to specified level in stack of drawn objects
   * @param {Number} index New position of object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  moveTo: function(index) {
    if (this.group) {
      fabric.StaticCanvas.prototype.moveTo.call(this.group, this, index);
    }
    else {
      this.canvas.moveTo(this, index);
    }
    return this;
  }
});


/* _TO_SVG_START_ */
fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Returns styles-string for svg-export
   * @return {String}
   */
  getSvgStyles: function() {

    var fill = this.fill
          ? (this.fill.toLive ? 'url(#SVGID_' + this.fill.id + ')' : this.fill)
          : 'none',
        fillRule = (this.fillRule === 'destination-over' ? 'evenodd' : this.fillRule),
        stroke = this.stroke
          ? (this.stroke.toLive ? 'url(#SVGID_' + this.stroke.id + ')' : this.stroke)
          : 'none',

        strokeWidth = this.strokeWidth ? this.strokeWidth : '0',
        strokeDashArray = this.strokeDashArray ? this.strokeDashArray.join(' ') : '',
        strokeLineCap = this.strokeLineCap ? this.strokeLineCap : 'butt',
        strokeLineJoin = this.strokeLineJoin ? this.strokeLineJoin : 'miter',
        strokeMiterLimit = this.strokeMiterLimit ? this.strokeMiterLimit : '4',
        opacity = typeof this.opacity !== 'undefined' ? this.opacity : '1',

        visibility = this.visible ? '' : ' visibility: hidden;',
        filter = this.shadow && this.type !== 'text' ? 'filter: url(#SVGID_' + this.shadow.id + ');' : '';

    return [
      'stroke: ', stroke, '; ',
      'stroke-width: ', strokeWidth, '; ',
      'stroke-dasharray: ', strokeDashArray, '; ',
      'stroke-linecap: ', strokeLineCap, '; ',
      'stroke-linejoin: ', strokeLineJoin, '; ',
      'stroke-miterlimit: ', strokeMiterLimit, '; ',
      'fill: ', fill, '; ',
      'fill-rule: ', fillRule, '; ',
      'opacity: ', opacity, ';',
      filter,
      visibility
    ].join('');
  },

  /**
   * Returns transform-string for svg-export
   * @return {String}
   */
  getSvgTransform: function() {
    if (this.group) {
      return '';
    }
    var toFixed = fabric.util.toFixed,
        angle = this.getAngle(),
        vpt = !this.canvas || this.canvas.svgViewportTransformation ? this.getViewportTransform() : [1, 0, 0, 1, 0, 0],
        center = fabric.util.transformPoint(this.getCenterPoint(), vpt),

        NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS,

        translatePart = this.type === 'path-group' ? '' : 'translate(' +
                          toFixed(center.x, NUM_FRACTION_DIGITS) +
                          ' ' +
                          toFixed(center.y, NUM_FRACTION_DIGITS) +
                        ')',

        anglePart = angle !== 0
          ? (' rotate(' + toFixed(angle, NUM_FRACTION_DIGITS) + ')')
          : '',

        scalePart = (this.scaleX === 1 && this.scaleY === 1 && vpt[0] === 1 && vpt[3] === 1)
          ? '' :
          (' scale(' +
            toFixed(this.scaleX * vpt[0], NUM_FRACTION_DIGITS) +
            ' ' +
            toFixed(this.scaleY * vpt[3], NUM_FRACTION_DIGITS) +
          ')'),

        addTranslateX = this.type === 'path-group' ? this.width * vpt[0] : 0,

        flipXPart = this.flipX ? ' matrix(-1 0 0 1 ' + addTranslateX + ' 0) ' : '',

        addTranslateY = this.type === 'path-group' ? this.height * vpt[3] : 0,

        flipYPart = this.flipY ? ' matrix(1 0 0 -1 0 ' + addTranslateY + ')' : '';

    return [
      translatePart, anglePart, scalePart, flipXPart, flipYPart
    ].join('');
  },

  /**
   * Returns transform-string for svg-export from the transform matrix of single elements
   * @return {String}
   */
  getSvgTransformMatrix: function() {
    return this.transformMatrix ? ' matrix(' + this.transformMatrix.join(' ') + ')' : '';
  },

  /**
   * @private
   */
  _createBaseSVGMarkup: function() {
    var markup = [ ];

    if (this.fill && this.fill.toLive) {
      markup.push(this.fill.toSVG(this, false));
    }
    if (this.stroke && this.stroke.toLive) {
      markup.push(this.stroke.toSVG(this, false));
    }
    if (this.shadow) {
      markup.push(this.shadow.toSVG(this));
    }
    return markup;
  }
});
/* _TO_SVG_END_ */


/*
  Depends on `stateProperties`
*/
fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Returns true if object state (one of its state properties) was changed
   * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
   */
  hasStateChanged: function() {
    return this.stateProperties.some(function(prop) {
      return this.get(prop) !== this.originalState[prop];
    }, this);
  },

  /**
   * Saves state of an object
   * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
   * @return {fabric.Object} thisArg
   */
  saveState: function(options) {
    this.stateProperties.forEach(function(prop) {
      this.originalState[prop] = this.get(prop);
    }, this);

    if (options && options.stateProperties) {
      options.stateProperties.forEach(function(prop) {
        this.originalState[prop] = this.get(prop);
      }, this);
    }

    return this;
  },

  /**
   * Setups state of an object
   * @return {fabric.Object} thisArg
   */
  setupState: function() {
    this.originalState = { };
    this.saveState();

    return this;
  }
});


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      coordProps = { x1: 1, x2: 1, y1: 1, y2: 1 },
      supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Line) {
    fabric.warn('fabric.Line is already defined');
    return;
  }

  /**
   * Line class
   * @class fabric.Line
   * @extends fabric.Object
   * @see {@link fabric.Line#initialize} for constructor definition
   */
  fabric.Line = fabric.util.createClass(fabric.Object, /** @lends fabric.Line.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'line',

    /**
     * x value or first line edge
     * @type Number
     * @default
     */
    x1: 0,

    /**
     * y value or first line edge
     * @type Number
     * @default
     */
    y1: 0,

    /**
     * x value or second line edge
     * @type Number
     * @default
     */
    x2: 0,

    /**
     * y value or second line edge
     * @type Number
     * @default
     */
    y2: 0,

    /**
     * Constructor
     * @param {Array} [points] Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Line} thisArg
     */
    initialize: function(points, options) {
      options = options || { };

      if (!points) {
        points = [0, 0, 0, 0];
      }

      this.callSuper('initialize', options);

      this.set('x1', points[0]);
      this.set('y1', points[1]);
      this.set('x2', points[2]);
      this.set('y2', points[3]);

      this._setWidthHeight(options);
    },

    /**
     * @private
     * @param {Object} [options] Options
     */
    _setWidthHeight: function(options) {
      options || (options = { });

      this.width = Math.abs(this.x2 - this.x1) || 1;
      this.height = Math.abs(this.y2 - this.y1) || 1;

      this.left = 'left' in options
        ? options.left
        : this._getLeftToOriginX();

      this.top = 'top' in options
        ? options.top
        : this._getTopToOriginY();
    },

    /**
     * @private
     * @param {String} key
     * @param {Any} value
     */
    _set: function(key, value) {
      this[key] = value;
      if (typeof coordProps[key] !== 'undefined') {
        this._setWidthHeight();
      }
      return this;
    },

    /**
     * @private
     * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
     */
    _getLeftToOriginX: makeEdgeToOriginGetter(
      { // property names
        origin: 'originX',
        axis1: 'x1',
        axis2: 'x2',
        dimension: 'width'
      },
      { // possible values of origin
        nearest: 'left',
        center: 'center',
        farthest: 'right'
      }
    ),

    /**
     * @private
     * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
     */
    _getTopToOriginY: makeEdgeToOriginGetter(
      { // property names
        origin: 'originY',
        axis1: 'y1',
        axis2: 'y2',
        dimension: 'height'
      },
      { // possible values of origin
        nearest: 'top',
        center: 'center',
        farthest: 'bottom'
      }
    ),

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();

      if (noTransform) {
        //  Line coords are distances from left-top of canvas to origin of line.
        //
        //  To render line in a path-group, we need to translate them to
        //  distances from center of path-group to center of line.
        var cp = this.getCenterPoint();
        ctx.translate(
          cp.x,
          cp.y
        );
      }

      if (!this.strokeDashArray || this.strokeDashArray && supportsLineDash) {

        // move from center (of virtual box) to its left/top corner
        // we can't assume x1, y1 is top left and x2, y2 is bottom right
        var xMult = this.x1 <= this.x2 ? -1 : 1,
            yMult = this.y1 <= this.y2 ? -1 : 1;

        ctx.moveTo(
          this.width === 1 ? 0 : (xMult * this.width / 2),
          this.height === 1 ? 0 : (yMult * this.height / 2));

        ctx.lineTo(
          this.width === 1 ? 0 : (xMult * -1 * this.width / 2),
          this.height === 1 ? 0 : (yMult * -1 * this.height / 2));
      }

      ctx.lineWidth = this.strokeWidth;

      // TODO: test this
      // make sure setting "fill" changes color of a line
      // (by copying fillStyle to strokeStyle, since line is stroked, not filled)
      var origStrokeStyle = ctx.strokeStyle;
      ctx.strokeStyle = this.stroke || ctx.fillStyle;
      this.stroke && this._renderStroke(ctx);
      ctx.strokeStyle = origStrokeStyle;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var
        xMult = this.x1 <= this.x2 ? -1 : 1,
        yMult = this.y1 <= this.y2 ? -1 : 1,
        x = this.width === 1 ? 0 : xMult * this.width / 2,
        y = this.height === 1 ? 0 : yMult * this.height / 2;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, -x, -y, this.strokeDashArray);
      ctx.closePath();
    },

    /**
     * Returns object representation of an instance
     * @methd toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        x1: this.get('x1'),
        y1: this.get('y1'),
        x2: this.get('x2'),
        y2: this.get('y2')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), addTranslate = '';
      if (!this.group) {
        var x = - this.width / 2 - (this.x1 > this.x2 ? this.x2 : this.x1),
            y = - this.height / 2 - (this.y1 > this.y2 ? this.y2 : this.y1);
        addTranslate = 'translate(' + x + ', ' + y + ') ';
      }
      markup.push(
        '<line ',
          'x1="', this.x1,
          '" y1="', this.y1,
          '" x2="', this.x2,
          '" y2="', this.y2,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(), addTranslate,
          this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Line.fromElement})
   * @static
   * @memberOf fabric.Line
   * @see http://www.w3.org/TR/SVG/shapes.html#LineElement
   */
  fabric.Line.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x1 y1 x2 y2'.split(' '));

  /**
   * Returns fabric.Line instance from an SVG element
   * @static
   * @memberOf fabric.Line
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromElement = function(element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Line.ATTRIBUTE_NAMES),
        points = [
          parsedAttributes.x1 || 0,
          parsedAttributes.y1 || 0,
          parsedAttributes.x2 || 0,
          parsedAttributes.y2 || 0
        ];
    return new fabric.Line(points, extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Line instance from an object representation
   * @static
   * @memberOf fabric.Line
   * @param {Object} object Object to create an instance from
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromObject = function(object) {
    var points = [object.x1, object.y1, object.x2, object.y2];
    return new fabric.Line(points, object);
  };

  /**
   * Produces a function that calculates distance from canvas edge to Line origin.
   */
  function makeEdgeToOriginGetter(propertyNames, originValues) {
    var origin = propertyNames.origin,
        axis1 = propertyNames.axis1,
        axis2 = propertyNames.axis2,
        dimension = propertyNames.dimension,
        nearest = originValues.nearest,
        center = originValues.center,
        farthest = originValues.farthest;

    return function() {
      switch (this.get(origin)) {
      case nearest:
        return Math.min(this.get(axis1), this.get(axis2));
      case center:
        return Math.min(this.get(axis1), this.get(axis2)) + (0.5 * this.get(dimension));
      case farthest:
        return Math.max(this.get(axis1), this.get(axis2));
      }
    };

  }

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Circle) {
    fabric.warn('fabric.Circle is already defined.');
    return;
  }

  /**
   * Circle class
   * @class fabric.Circle
   * @extends fabric.Object
   * @see {@link fabric.Circle#initialize} for constructor definition
   */
  fabric.Circle = fabric.util.createClass(fabric.Object, /** @lends fabric.Circle.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'circle',

    /**
     * Radius of this circle
     * @type Number
     * @default
     */
    radius: 0,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {fabric.Circle} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);
      this.set('radius', options.radius || 0);
    },

    /**
     * @private
     * @param {String} key
     * @param {Any} value
     * @return {fabric.Circle} thisArg
     */
    _set: function(key, value) {
      this.callSuper('_set', key, value);

      if (key === 'radius') {
        this.setRadius(value);
      }

      return this;
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        radius: this.get('radius')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = 0, y = 0;
      if (this.group) {
        x = this.left + this.radius;
        y = this.top + this.radius;
      }
      markup.push(
        '<circle ',
          'cx="' + x + '" cy="' + y + '" ',
          'r="', this.radius,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          ' ', this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      ctx.arc(noTransform ? this.left + this.radius : 0, noTransform ? this.top + this.radius : 0, this.radius, 0, piBy2, false);
      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusX: function() {
      return this.get('radius') * this.get('scaleX');
    },

    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusY: function() {
      return this.get('radius') * this.get('scaleY');
    },

    /**
     * Sets radius of an object (and updates width accordingly)
     * @return {Number}
     */
    setRadius: function(value) {
      this.radius = value;
      this.set('width', value * 2).set('height', value * 2);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
   * @static
   * @memberOf fabric.Circle
   * @see: http://www.w3.org/TR/SVG/shapes.html#CircleElement
   */
  fabric.Circle.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('cx cy r'.split(' '));

  /**
   * Returns {@link fabric.Circle} instance from an SVG element
   * @static
   * @memberOf fabric.Circle
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @throws {Error} If value of `r` attribute is missing or invalid
   * @return {fabric.Circle} Instance of fabric.Circle
   */
  fabric.Circle.fromElement = function(element, options) {
    options || (options = { });

    var parsedAttributes = fabric.parseAttributes(element, fabric.Circle.ATTRIBUTE_NAMES);

    if (!isValidRadius(parsedAttributes)) {
      throw new Error('value of `r` attribute is required and can not be negative');
    }

    parsedAttributes.left = parsedAttributes.left || 0;
    parsedAttributes.top = parsedAttributes.top || 0;

    var obj = new fabric.Circle(extend(parsedAttributes, options));

    obj.left -= obj.radius;
    obj.top -= obj.radius;
    return obj;
  };

  /**
   * @private
   */
  function isValidRadius(attributes) {
    return (('radius' in attributes) && (attributes.radius > 0));
  }
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Circle} instance from an object representation
   * @static
   * @memberOf fabric.Circle
   * @param {Object} object Object to create an instance from
   * @return {Object} Instance of fabric.Circle
   */
  fabric.Circle.fromObject = function(object) {
    return new fabric.Circle(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Triangle) {
    fabric.warn('fabric.Triangle is already defined');
    return;
  }

  /**
   * Triangle class
   * @class fabric.Triangle
   * @extends fabric.Object
   * @return {fabric.Triangle} thisArg
   * @see {@link fabric.Triangle#initialize} for constructor definition
   */
  fabric.Triangle = fabric.util.createClass(fabric.Object, /** @lends fabric.Triangle.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'triangle',

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('width', options.width || 100)
          .set('height', options.height || 100);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;

      ctx.beginPath();
      ctx.moveTo(-widthBy2, heightBy2);
      ctx.lineTo(0, -heightBy2);
      ctx.lineTo(widthBy2, heightBy2);
      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, -widthBy2, heightBy2, 0, -heightBy2, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, 0, -heightBy2, widthBy2, heightBy2, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, widthBy2, heightBy2, -widthBy2, heightBy2, this.strokeDashArray);
      ctx.closePath();
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(),
          widthBy2 = this.width / 2,
          heightBy2 = this.height / 2,
          points = [
            -widthBy2 + ' ' + heightBy2,
            '0 ' + -heightBy2,
            widthBy2 + ' ' + heightBy2
          ]
          .join(',');

      markup.push(
        '<polygon ',
          'points="', points,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Returns fabric.Triangle instance from an object representation
   * @static
   * @memberOf fabric.Triangle
   * @param {Object} object Object to create an instance from
   * @return {Object} instance of Canvas.Triangle
   */
  fabric.Triangle.fromObject = function(object) {
    return new fabric.Triangle(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global){

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Ellipse) {
    fabric.warn('fabric.Ellipse is already defined.');
    return;
  }

  /**
   * Ellipse class
   * @class fabric.Ellipse
   * @extends fabric.Object
   * @return {fabric.Ellipse} thisArg
   * @see {@link fabric.Ellipse#initialize} for constructor definition
   */
  fabric.Ellipse = fabric.util.createClass(fabric.Object, /** @lends fabric.Ellipse.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'ellipse',

    /**
     * Horizontal radius
     * @type Number
     * @default
     */
    rx:   0,

    /**
     * Vertical radius
     * @type Number
     * @default
     */
    ry:   0,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {fabric.Ellipse} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('rx', options.rx || 0);
      this.set('ry', options.ry || 0);

      this.set('width', this.get('rx') * 2);
      this.set('height', this.get('ry') * 2);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        rx: this.get('rx'),
        ry: this.get('ry')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = 0, y = 0;
      if (this.group) {
        x = this.left + this.rx;
        y = this.top + this.ry;
      }
      markup.push(
        '<ellipse ',
          'cx="', x, '" cy="', y, '" ',
          'rx="', this.rx,
          '" ry="', this.ry,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      ctx.save();
      ctx.transform(1, 0, 0, this.ry/this.rx, 0, 0);
      ctx.arc(noTransform ? this.left + this.rx : 0, noTransform ? (this.top + this.ry) * this.rx/this.ry : 0, this.rx, 0, piBy2, false);
      ctx.restore();
      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
   * @static
   * @memberOf fabric.Ellipse
   * @see http://www.w3.org/TR/SVG/shapes.html#EllipseElement
   */
  fabric.Ellipse.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('cx cy rx ry'.split(' '));

  /**
   * Returns {@link fabric.Ellipse} instance from an SVG element
   * @static
   * @memberOf fabric.Ellipse
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromElement = function(element, options) {
    options || (options = { });

    var parsedAttributes = fabric.parseAttributes(element, fabric.Ellipse.ATTRIBUTE_NAMES);

    parsedAttributes.left = parsedAttributes.left || 0;
    parsedAttributes.top = parsedAttributes.top || 0;

    var ellipse = new fabric.Ellipse(extend(parsedAttributes, options));

    ellipse.top -= ellipse.ry;
    ellipse.left -= ellipse.rx;
    return ellipse;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Ellipse} instance from an object representation
   * @static
   * @memberOf fabric.Ellipse
   * @param {Object} object Object to create an instance from
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromObject = function(object) {
    return new fabric.Ellipse(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  if (fabric.Rect) {
    console.warn('fabric.Rect is already defined');
    return;
  }

  var stateProperties = fabric.Object.prototype.stateProperties.concat();
  stateProperties.push('rx', 'ry', 'x', 'y');

  /**
   * Rectangle class
   * @class fabric.Rect
   * @extends fabric.Object
   * @return {fabric.Rect} thisArg
   * @see {@link fabric.Rect#initialize} for constructor definition
   */
  fabric.Rect = fabric.util.createClass(fabric.Object, /** @lends fabric.Rect.prototype */ {

    /**
     * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties: stateProperties,

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'rect',

    /**
     * Horizontal border radius
     * @type Number
     * @default
     */
    rx:   0,

    /**
     * Vertical border radius
     * @type Number
     * @default
     */
    ry:   0,

    /**
     * Used to specify dash pattern for stroke on this object
     * @type Array
     */
    strokeDashArray: null,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);
      this._initRxRy();

    },

    /**
     * Initializes rx/ry attributes
     * @private
     */
    _initRxRy: function() {
      if (this.rx && !this.ry) {
        this.ry = this.rx;
      }
      else if (this.ry && !this.rx) {
        this.rx = this.ry;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx, noTransform) {

      // optimize 1x1 case (used in spray brush)
      if (this.width === 1 && this.height === 1) {
        ctx.fillRect(0, 0, 1, 1);
        return;
      }

      var rx = this.rx ? Math.min(this.rx, this.width / 2) : 0,
          ry = this.ry ? Math.min(this.ry, this.height / 2) : 0,
          w = this.width,
          h = this.height,
          x = noTransform ? this.left : -this.width / 2,
          y = noTransform ? this.top : -this.height / 2,
          isRounded = rx !== 0 || ry !== 0,
          k = 1 - 0.5522847498 /* "magic number" for bezier approximations of arcs (http://itc.ktu.lt/itc354/Riskus354.pdf) */;

      ctx.beginPath();

      ctx.moveTo(x + rx, y);

      ctx.lineTo(x + w - rx, y);
      isRounded && ctx.bezierCurveTo(x + w - k * rx, y, x + w, y + k * ry, x + w, y + ry);

      ctx.lineTo(x + w, y + h - ry);
      isRounded && ctx.bezierCurveTo(x + w, y + h - k * ry, x + w - k * rx, y + h, x + w - rx, y + h);

      ctx.lineTo(x + rx, y + h);
      isRounded && ctx.bezierCurveTo(x + k * rx, y + h, x, y + h - k * ry, x, y + h - ry);

      ctx.lineTo(x, y + ry);
      isRounded && ctx.bezierCurveTo(x, y + k * ry, x + k * rx, y, x + rx, y);

      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, x + w, y, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y, x + w, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y + h, x, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x, y + h, x, y, this.strokeDashArray);
      ctx.closePath();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        rx: this.get('rx') || 0,
        ry: this.get('ry') || 0
      });
      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }
      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = this.left, y = this.top;
      if (!this.group) {
        x = -this.width / 2;
        y = -this.height / 2;
      }
      markup.push(
        '<rect ',
          'x="', x, '" y="', y,
          '" rx="', this.get('rx'), '" ry="', this.get('ry'),
          '" width="', this.width, '" height="', this.height,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          this.getSvgTransformMatrix(),
        '"/>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
   * @static
   * @memberOf fabric.Rect
   * @see: http://www.w3.org/TR/SVG/shapes.html#RectElement
   */
  fabric.Rect.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x y rx ry width height'.split(' '));

  /**
   * Returns {@link fabric.Rect} instance from an SVG element
   * @static
   * @memberOf fabric.Rect
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Rect} Instance of fabric.Rect
   */
  fabric.Rect.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options = options || { };

    var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);

    parsedAttributes.left = parsedAttributes.left || 0;
    parsedAttributes.top  = parsedAttributes.top  || 0;

    return new fabric.Rect(extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Rect} instance from an object representation
   * @static
   * @memberOf fabric.Rect
   * @param {Object} object Object to create an instance from
   * @return {Object} instance of fabric.Rect
   */
  fabric.Rect.fromObject = function(object) {
    return new fabric.Rect(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      toFixed = fabric.util.toFixed;

  if (fabric.Polyline) {
    fabric.warn('fabric.Polyline is already defined');
    return;
  }

  /**
   * Polyline class
   * @class fabric.Polyline
   * @extends fabric.Object
   * @see {@link fabric.Polyline#initialize} for constructor definition
   */
  fabric.Polyline = fabric.util.createClass(fabric.Object, /** @lends fabric.Polyline.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'polyline',

    /**
     * Points array
     * @type Array
     * @default
     */
    points: null,

    /**
     * Constructor
     * @param {Array} points Array of points (where each point is an object with x and y)
     * @param {Object} [options] Options object
     * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
     * @return {fabric.Polyline} thisArg
     * @example
     * var poly = new fabric.Polyline([
     *     { x: 10, y: 10 },
     *     { x: 50, y: 30 },
     *     { x: 40, y: 70 },
     *     { x: 60, y: 50 },
     *     { x: 100, y: 150 },
     *     { x: 40, y: 100 }
     *   ], {
     *   stroke: 'red',
     *   left: 100,
     *   top: 100
     * });
     */
    initialize: function(points, options) {
      options = options || { };
      this.set('points', points);
      this.callSuper('initialize', options);
      this._calcDimensions();
    },

    /**
     * @private
     */
    _calcDimensions: function() {
      return fabric.Polygon.prototype._calcDimensions.call(this);
    },

    /**
     * @private
     */
    _applyPointOffset: function() {
      return fabric.Polygon.prototype._applyPointOffset.call(this);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return fabric.Polygon.prototype.toObject.call(this, propertiesToInclude);
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var points = [],
          markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }

      markup.push(
        '<polyline ',
          'points="', points.join(''),
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          ' ', this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var point;
      ctx.beginPath();

      if (this._applyPointOffset) {
        if (!(this.group && this.group.type === 'path-group')) {
          this._applyPointOffset();
        }
        this._applyPointOffset = null;
      }

      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var p1, p2;

      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        p1 = this.points[i];
        p2 = this.points[i + 1] || p1;
        fabric.util.drawDashedLine(ctx, p1.x, p1.y, p2.x, p2.y, this.strokeDashArray);
      }
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.get('points').length;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Polyline.fromElement})
   * @static
   * @memberOf fabric.Polyline
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement
   */
  fabric.Polyline.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();

  /**
   * Returns fabric.Polyline instance from an SVG element
   * @static
   * @memberOf fabric.Polyline
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Polyline} Instance of fabric.Polyline
   */
  fabric.Polyline.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polyline.ATTRIBUTE_NAMES);

    if (points === null) {
      return null;
    }

    return new fabric.Polyline(points, fabric.util.object.extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Polyline instance from an object representation
   * @static
   * @memberOf fabric.Polyline
   * @param {Object} object Object to create an instance from
   * @return {fabric.Polyline} Instance of fabric.Polyline
   */
  fabric.Polyline.fromObject = function(object) {
    var points = object.points;
    return new fabric.Polyline(points, object, true);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      toFixed = fabric.util.toFixed;

  if (fabric.Polygon) {
    fabric.warn('fabric.Polygon is already defined');
    return;
  }

  /**
   * Polygon class
   * @class fabric.Polygon
   * @extends fabric.Object
   * @see {@link fabric.Polygon#initialize} for constructor definition
   */
  fabric.Polygon = fabric.util.createClass(fabric.Object, /** @lends fabric.Polygon.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'polygon',

    /**
     * Points array
     * @type Array
     * @default
     */
    points: null,

    /**
     * Constructor
     * @param {Array} points Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Polygon} thisArg
     */
    initialize: function(points, options) {
      options = options || { };
      this.points = points;
      this.callSuper('initialize', options);
      this._calcDimensions();
    },

    /**
     * @private
     */
    _calcDimensions: function() {

      var points = this.points,
          minX = min(points, 'x'),
          minY = min(points, 'y'),
          maxX = max(points, 'x'),
          maxY = max(points, 'y');

      this.width = (maxX - minX) || 1;
      this.height = (maxY - minY) || 1;

      this.left = minX,
      this.top = minY;
    },

    /**
     * @private
     */
    _applyPointOffset: function() {
      // change points to offset polygon into a bounding box
      // executed one time
      this.points.forEach(function(p) {
        p.x -= (this.left + this.width / 2);
        p.y -= (this.top + this.height / 2);
      }, this);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        points: this.points.concat()
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var points = [],
          markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }

      markup.push(
        '<polygon ',
          'points="', points.join(''),
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          ' ', this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var point;
      ctx.beginPath();

      if (this._applyPointOffset) {
        if (!(this.group && this.group.type === 'path-group')) {
          this._applyPointOffset();
        }
        this._applyPointOffset = null;
      }

      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      this._renderFill(ctx);
      if (this.stroke || this.strokeDashArray) {
        ctx.closePath();
        this._renderStroke(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var p1, p2;

      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        p1 = this.points[i];
        p2 = this.points[i + 1] || this.points[0];
        fabric.util.drawDashedLine(ctx, p1.x, p1.y, p2.x, p2.y, this.strokeDashArray);
      }
      ctx.closePath();
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.points.length;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
   * @static
   * @memberOf fabric.Polygon
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolygonElement
   */
  fabric.Polygon.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();

  /**
   * Returns {@link fabric.Polygon} instance from an SVG element
   * @static
   * @memberOf fabric.Polygon
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Polygon} Instance of fabric.Polygon
   */
  fabric.Polygon.fromElement = function(element, options) {
    if (!element) {
      return null;
    }

    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polygon.ATTRIBUTE_NAMES);

    if (points === null) {
      return null;
    }

    return new fabric.Polygon(points, extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Polygon instance from an object representation
   * @static
   * @memberOf fabric.Polygon
   * @param {Object} object Object to create an instance from
   * @return {fabric.Polygon} Instance of fabric.Polygon
   */
  fabric.Polygon.fromObject = function(object) {
    return new fabric.Polygon(object.points, object, true);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      extend = fabric.util.object.extend,
      _toString = Object.prototype.toString,
      drawArc = fabric.util.drawArc,
      commandLengths = {
        m: 2,
        l: 2,
        h: 1,
        v: 1,
        c: 6,
        s: 4,
        q: 4,
        t: 2,
        a: 7
      },
      repeatedCommands = {
        m: 'l',
        M: 'L'
      };

  if (fabric.Path) {
    fabric.warn('fabric.Path is already defined');
    return;
  }

  /**
   * @private
   */
  function getX(item) {
    if (item[0] === 'H') {
      return item[1];
    }
    return item[item.length - 2];
  }

  /**
   * @private
   */
  function getY(item) {
    if (item[0] === 'V') {
      return item[1];
    }
    return item[item.length - 1];
  }

  /**
   * Path class
   * @class fabric.Path
   * @extends fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#path_and_pathgroup}
   * @see {@link fabric.Path#initialize} for constructor definition
   */
  fabric.Path = fabric.util.createClass(fabric.Object, /** @lends fabric.Path.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'path',

    /**
     * Array of path points
     * @type Array
     * @default
     */
    path: null,

    /**
     * Constructor
     * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Object} [options] Options object
     * @return {fabric.Path} thisArg
     */
    initialize: function(path, options) {
      options = options || { };

      this.setOptions(options);

      if (!path) {
        throw new Error('`path` argument is required');
      }

      var fromArray = _toString.call(path) === '[object Array]';

      this.path = fromArray
        ? path
        // one of commands (m,M,l,L,q,Q,c,C,etc.) followed by non-command characters (i.e. command values)
        : path.match && path.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);

      if (!this.path) {
        return;
      }

      if (!fromArray) {
        this.path = this._parsePath();
      }
      this._initializePath(options);

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initializePath: function (options) {
      var isWidthSet = 'width' in options && options.width != null,
          isHeightSet = 'height' in options && options.width != null,
          isLeftSet = 'left' in options,
          isTopSet = 'top' in options,
          origLeft = isLeftSet ? this.left : 0,
          origTop = isTopSet ? this.top : 0;

      if (!isWidthSet || !isHeightSet) {
        extend(this, this._parseDimensions());
        if (isWidthSet) {
          this.width = options.width;
        }
        if (isHeightSet) {
          this.height = options.height;
        }
      }
      else { //Set center location relative to given height/width if not specified
        if (!isTopSet) {
          this.top = this.height / 2;
        }
        if (!isLeftSet) {
          this.left = this.width / 2;
        }
      }
      this.pathOffset = this.pathOffset ||
                        // Save top-left coords as offset
                        this._calculatePathOffset(origLeft, origTop);
    },

    /**
     * @private
     * @param {Number} origLeft Original left position
     * @param {Number} origTop  Original top position
     */
    _calculatePathOffset: function (origLeft, origTop) {
      return {
        x: this.left - origLeft - (this.width / 2),
        y: this.top - origTop - (this.height / 2)
      };
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render path on
     */
    _render: function(ctx, noTransform) {
      var current, // current instruction
          previous = null,
          subpathStartX = 0,
          subpathStartY = 0,
          x = 0, // current x
          y = 0, // current y
          controlX = 0, // current control point x
          controlY = 0, // current control point y
          tempX,
          tempY,
          tempControlX,
          tempControlY,
          l = -((this.width / 2) + this.pathOffset.x),
          t = -((this.height / 2) + this.pathOffset.y);

      if (noTransform) {
        l += this.width / 2;
        t += this.height / 2;
      }

      for (var i = 0, len = this.path.length; i < len; ++i) {

        current = this.path[i];

        switch (current[0]) { // first letter

          case 'l': // lineto, relative
            x += current[1];
            y += current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'L': // lineto, absolute
            x = current[1];
            y = current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'h': // horizontal lineto, relative
            x += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'H': // horizontal lineto, absolute
            x = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'v': // vertical lineto, relative
            y += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'V': // verical lineto, absolute
            y = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'm': // moveTo, relative
            x += current[1];
            y += current[2];
            subpathStartX = x;
            subpathStartY = y;
            ctx.moveTo(x + l, y + t);
            break;

          case 'M': // moveTo, absolute
            x = current[1];
            y = current[2];
            subpathStartX = x;
            subpathStartY = y;
            ctx.moveTo(x + l, y + t);
            break;

          case 'c': // bezierCurveTo, relative
            tempX = x + current[5];
            tempY = y + current[6];
            controlX = x + current[3];
            controlY = y + current[4];
            ctx.bezierCurveTo(
              x + current[1] + l, // x1
              y + current[2] + t, // y1
              controlX + l, // x2
              controlY + t, // y2
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'C': // bezierCurveTo, absolute
            x = current[5];
            y = current[6];
            controlX = current[3];
            controlY = current[4];
            ctx.bezierCurveTo(
              current[1] + l,
              current[2] + t,
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 's': // shorthand cubic bezierCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            // calculate reflection of previous control points
            controlX = controlX ? (2 * x - controlX) : x;
            controlY = controlY ? (2 * y - controlY) : y;

            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              x + current[1] + l,
              y + current[2] + t,
              tempX + l,
              tempY + t
            );
            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = x + current[1];
            controlY = y + current[2];

            x = tempX;
            y = tempY;
            break;

          case 'S': // shorthand cubic bezierCurveTo, absolute
            tempX = current[3];
            tempY = current[4];
            // calculate reflection of previous control points
            controlX = 2 * x - controlX;
            controlY = 2 * y - controlY;
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;

            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = current[1];
            controlY = current[2];

            break;

          case 'q': // quadraticCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            controlX = x + current[1];
            controlY = y + current[2];

            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'Q': // quadraticCurveTo, absolute
            tempX = current[3];
            tempY = current[4];

            ctx.quadraticCurveTo(
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            controlX = current[1];
            controlY = current[2];
            break;

          case 't': // shorthand quadraticCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[1];
            tempY = y + current[2];

            if (previous[0].match(/[QqTt]/) === null) {
              // If there is no previous command or if the previous command was not a Q, q, T or t,
              // assume the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else if (previous[0] === 't') {
              // calculate reflection of previous control points for t
              controlX = 2 * x - tempControlX;
              controlY = 2 * y - tempControlY;
            }
            else if (previous[0] === 'q') {
              // calculate reflection of previous control points for q
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }

            tempControlX = controlX;
            tempControlY = controlY;

            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            controlX = x + current[1];
            controlY = y + current[2];
            break;

          case 'T':
            tempX = current[1];
            tempY = current[2];

            // calculate reflection of previous control points
            controlX = 2 * x - controlX;
            controlY = 2 * y - controlY;
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'a':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + x + l,
              current[7] + y + t
            ]);
            x += current[6];
            y += current[7];
            break;

          case 'A':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + l,
              current[7] + t
            ]);
            x = current[6];
            y = current[7];
            break;

          case 'z':
          case 'Z':
            x = subpathStartX;
            y = subpathStartY;
            ctx.closePath();
            break;
        }
        previous = current;
      }
    },

    /**
     * Renders path on a specified context
     * @param {CanvasRenderingContext2D} ctx context to render path on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function(ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();
      if (noTransform) {
        ctx.translate(-this.width/2, -this.height/2);
      }
      var m = this.transformMatrix;

      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (!noTransform) {
        this.transform(ctx);
      }
      this._setStrokeStyles(ctx);
      this._setFillStyles(ctx);
      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      ctx.beginPath();
      ctx.globalAlpha = this.group ? (ctx.globalAlpha * this.opacity) : this.opacity;
      this._render(ctx, noTransform);
      this._renderFill(ctx);
      this._renderStroke(ctx);
      this.clipTo && ctx.restore();
      this._removeShadow(ctx);
      ctx.restore();
    },

    /**
     * Returns string representation of an instance
     * @return {String} string representation of an instance
     */
    toString: function() {
      return '#<fabric.Path (' + this.complexity() +
        '): { "top": ' + this.top + ', "left": ' + this.left + ' }>';
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var o = extend(this.callSuper('toObject', propertiesToInclude), {
        path: this.path.map(function(item) { return item.slice() }),
        pathOffset: this.pathOffset
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      if (this.transformMatrix) {
        o.transformMatrix = this.transformMatrix;
      }
      return o;
    },

    /**
     * Returns dataless object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject: function(propertiesToInclude) {
      var o = this.toObject(propertiesToInclude);
      if (this.sourcePath) {
        o.path = this.sourcePath;
      }
      delete o.sourcePath;
      return o;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var chunks = [],
          markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.path.length; i < len; i++) {
        chunks.push(this.path[i].join(' '));
      }
      var path = chunks.join(' ');

      markup.push(
        //jscs:disable validateIndentation
        '<path ',
          'd="', path,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          this.getSvgTransformMatrix(), '" stroke-linecap="round" ',
        '/>\n'
        //jscs:enable validateIndentation
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns number representation of an instance complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.path.length;
    },

    /**
     * @private
     */
    _parsePath: function() {
      var result = [ ],
          coords = [ ],
          currentPath,
          parsed,
          re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/ig,
          match,
          coordsStr;

      for (var i = 0, coordsParsed, len = this.path.length; i < len; i++) {
        currentPath = this.path[i];

        coordsStr = currentPath.slice(1).trim();
        coords.length = 0;

        while ((match = re.exec(coordsStr))) {
          coords.push(match[0]);
        }

        coordsParsed = [ currentPath.charAt(0) ];

        for (var j = 0, jlen = coords.length; j < jlen; j++) {
          parsed = parseFloat(coords[j]);
          if (!isNaN(parsed)) {
            coordsParsed.push(parsed);
          }
        }

        var command = coordsParsed[0],
            commandLength = commandLengths[command.toLowerCase()],
            repeatedCommand = repeatedCommands[command] || command;

        if (coordsParsed.length - 1 > commandLength) {
          for (var k = 1, klen = coordsParsed.length; k < klen; k += commandLength) {
            result.push([ command ].concat(coordsParsed.slice(k, k + commandLength)));
            command = repeatedCommand;
          }
        }
        else {
          result.push(coordsParsed);
        }
      }

      return result;
    },

    /**
     * @private
     */
    _parseDimensions: function() {
      var aX = [],
          aY = [],
          previous = { };

      this.path.forEach(function(item, i) {
        this._getCoordsFromCommand(item, i, aX, aY, previous);
      }, this);

      var minX = min(aX),
          minY = min(aY),
          maxX = max(aX),
          maxY = max(aY),
          deltaX = maxX - minX,
          deltaY = maxY - minY,

          o = {
            left: this.left + (minX + deltaX / 2),
            top: this.top + (minY + deltaY / 2),
            width: deltaX,
            height: deltaY
          };

      return o;
    },

    _getCoordsFromCommand: function(item, i, aX, aY, previous) {
      var isLowerCase = false;

      if (item[0] !== 'H') {
        previous.x = (i === 0) ? getX(item) : getX(this.path[i - 1]);
      }
      if (item[0] !== 'V') {
        previous.y = (i === 0) ? getY(item) : getY(this.path[i - 1]);
      }

      // lowercased letter denotes relative position;
      // transform to absolute
      if (item[0] === item[0].toLowerCase()) {
        isLowerCase = true;
      }

      var xy = this._getXY(item, isLowerCase, previous),
          val;

      val = parseInt(xy.x, 10);
      if (!isNaN(val)) {
        aX.push(val);
      }

      val = parseInt(xy.y, 10);
      if (!isNaN(val)) {
        aY.push(val);
      }
    },

    _getXY: function(item, isLowerCase, previous) {

      // last 2 items in an array of coordinates are the actualy x/y (except H/V), collect them
      // TODO (kangax): support relative h/v commands

      var x = isLowerCase
        ? previous.x + getX(item)
        : item[0] === 'V'
          ? previous.x
          : getX(item),

          y = isLowerCase
            ? previous.y + getY(item)
            : item[0] === 'H'
              ? previous.y
              : getY(item);

      return { x: x, y: y };
    }
  });

  /**
   * Creates an instance of fabric.Path from an object
   * @static
   * @memberOf fabric.Path
   * @param {Object} object
   * @param {Function} callback Callback to invoke when an fabric.Path instance is created
   */
  fabric.Path.fromObject = function(object, callback) {
    if (typeof object.path === 'string') {
      fabric.loadSVGFromURL(object.path, function (elements) {
        var path = elements[0],
            pathUrl = object.path;

        delete object.path;

        fabric.util.object.extend(path, object);
        path.setSourcePath(pathUrl);

        callback(path);
      });
    }
    else {
      callback(new fabric.Path(object.path, object));
    }
  };

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Path.fromElement`)
   * @static
   * @memberOf fabric.Path
   * @see http://www.w3.org/TR/SVG/paths.html#PathElement
   */
  fabric.Path.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat(['d']);

  /**
   * Creates an instance of fabric.Path from an SVG <path> element
   * @static
   * @memberOf fabric.Path
   * @param {SVGElement} element to parse
   * @param {Function} callback Callback to invoke when an fabric.Path instance is created
   * @param {Object} [options] Options object
   */
  fabric.Path.fromElement = function(element, callback, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Path.ATTRIBUTE_NAMES);
    callback && callback(new fabric.Path(parsedAttributes.d, extend(parsedAttributes, options)));
  };
  /* _FROM_SVG_END_ */

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.Path
   * @type Boolean
   * @default
   */
  fabric.Path.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      invoke = fabric.util.array.invoke,
      parentToObject = fabric.Object.prototype.toObject;

  if (fabric.PathGroup) {
    fabric.warn('fabric.PathGroup is already defined');
    return;
  }

  /**
   * Path group class
   * @class fabric.PathGroup
   * @extends fabric.Path
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#path_and_pathgroup}
   * @see {@link fabric.PathGroup#initialize} for constructor definition
   */
  fabric.PathGroup = fabric.util.createClass(fabric.Path, /** @lends fabric.PathGroup.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'path-group',

    /**
     * Fill value
     * @type String
     * @default
     */
    fill: '',

    /**
     * Constructor
     * @param {Array} paths
     * @param {Object} [options] Options object
     * @return {fabric.PathGroup} thisArg
     */
    initialize: function(paths, options) {

      options = options || { };
      this.paths = paths || [ ];

      for (var i = this.paths.length; i--; ) {
        this.paths[i].group = this;
      }

      this.setOptions(options);

      if (options.widthAttr) {
        this.scaleX = options.widthAttr / options.width;
      }
      if (options.heightAttr) {
        this.scaleY = options.heightAttr / options.height;
      }

      this.setCoords();

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * Renders this group on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render this instance on
     */
    render: function(ctx) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();

      var m = this.transformMatrix;

      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      this.transform(ctx);

      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      for (var i = 0, l = this.paths.length; i < l; ++i) {
        this.paths[i].render(ctx, true);
      }
      this.clipTo && ctx.restore();
      this._removeShadow(ctx);
      ctx.restore();
    },

    /**
     * Sets certain property to a certain value
     * @param {String} prop
     * @param {Any} value
     * @return {fabric.PathGroup} thisArg
     */
    _set: function(prop, value) {

      if (prop === 'fill' && value && this.isSameColor()) {
        var i = this.paths.length;
        while (i--) {
          this.paths[i]._set(prop, value);
        }
      }

      return this.callSuper('_set', prop, value);
    },

    /**
     * Returns object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var o = extend(parentToObject.call(this, propertiesToInclude), {
        paths: invoke(this.getObjects(), 'toObject', propertiesToInclude)
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      return o;
    },

    /**
     * Returns dataless object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} dataless object representation of an instance
     */
    toDatalessObject: function(propertiesToInclude) {
      var o = this.toObject(propertiesToInclude);
      if (this.sourcePath) {
        o.paths = this.sourcePath;
      }
      return o;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var objects = this.getObjects(),
          translatePart = 'translate(' + this.left + ' ' + this.top + ')',
          markup = [
            //jscs:disable validateIndentation
            '<g ',
              'style="', this.getSvgStyles(), '" ',
              'transform="', translatePart, this.getSvgTransform(), '" ',
            '>\n'
            //jscs:enable validateIndentation
          ];

      for (var i = 0, len = objects.length; i < len; i++) {
        markup.push(objects[i].toSVG(reviver));
      }
      markup.push('</g>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns a string representation of this path group
     * @return {String} string representation of an object
     */
    toString: function() {
      return '#<fabric.PathGroup (' + this.complexity() +
        '): { top: ' + this.top + ', left: ' + this.left + ' }>';
    },

    /**
     * Returns true if all paths in this group are of same color
     * @return {Boolean} true if all paths are of the same color (`fill`)
     */
    isSameColor: function() {
      var firstPathFill = (this.getObjects()[0].get('fill') || '').toLowerCase();
      return this.getObjects().every(function(path) {
        return (path.get('fill') || '').toLowerCase() === firstPathFill;
      });
    },

    /**
     * Returns number representation of object's complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.paths.reduce(function(total, path) {
        return total + ((path && path.complexity) ? path.complexity() : 0);
      }, 0);
    },

    /**
     * Returns all paths in this path group
     * @return {Array} array of path objects included in this path group
     */
    getObjects: function() {
      return this.paths;
    }
  });

  /**
   * Creates fabric.PathGroup instance from an object representation
   * @static
   * @memberOf fabric.PathGroup
   * @param {Object} object Object to create an instance from
   * @param {Function} callback Callback to invoke when an fabric.PathGroup instance is created
   */
  fabric.PathGroup.fromObject = function(object, callback) {
    if (typeof object.paths === 'string') {
      fabric.loadSVGFromURL(object.paths, function (elements) {

        var pathUrl = object.paths;
        delete object.paths;

        var pathGroup = fabric.util.groupSVGElements(elements, object, pathUrl);

        callback(pathGroup);
      });
    }
    else {
      fabric.util.enlivenObjects(object.paths, function(enlivenedObjects) {
        delete object.paths;
        callback(new fabric.PathGroup(enlivenedObjects, object));
      });
    }
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.PathGroup
   * @type Boolean
   * @default
   */
  fabric.PathGroup.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global){

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      invoke = fabric.util.array.invoke;

  if (fabric.Group) {
    return;
  }

  // lock-related properties, for use in fabric.Group#get
  // to enable locking behavior on group
  // when one of its objects has lock-related properties set
  var _lockProperties = {
    lockMovementX:  true,
    lockMovementY:  true,
    lockRotation:   true,
    lockScalingX:   true,
    lockScalingY:   true,
    lockUniScaling: true
  };

  /**
   * Group class
   * @class fabric.Group
   * @extends fabric.Object
   * @mixes fabric.Collection
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3/#groups}
   * @see {@link fabric.Group#initialize} for constructor definition
   */
  fabric.Group = fabric.util.createClass(fabric.Object, fabric.Collection, /** @lends fabric.Group.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'group',

    /**
     * Constructor
     * @param {Object} objects Group objects
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(objects, options) {
      options = options || { };

      this._objects = objects || [];
      for (var i = this._objects.length; i--; ) {
        this._objects[i].group = this;
      }

      this.originalState = { };
      this.callSuper('initialize');

      this._calcBounds();
      this._updateObjectsCoords();

      if (options) {
        extend(this, options);
      }
      this._setOpacityIfSame();

      this.setCoords();
      this.saveCoords();
    },

    /**
     * @private
     */
    _updateObjectsCoords: function() {
      this.forEachObject(this._updateObjectCoords, this);
    },

    /**
     * @private
     */
    _updateObjectCoords: function(object) {
      var objectLeft = object.getLeft(),
          objectTop = object.getTop();

      object.set({
        originalLeft: objectLeft,
        originalTop: objectTop,
        left: objectLeft - this.left,
        top: objectTop - this.top
      });

      object.setCoords();

      // do not display corners of objects enclosed in a group
      object.__origHasControls = object.hasControls;
      object.hasControls = false;
    },

    /**
     * Returns string represenation of a group
     * @return {String}
     */
    toString: function() {
      return '#<fabric.Group: (' + this.complexity() + ')>';
    },

    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    addWithUpdate: function(object) {
      this._restoreObjectsState();
      if (object) {
        this._objects.push(object);
        object.group = this;
      }
      // since _restoreObjectsState set objects inactive
      this.forEachObject(this._setObjectActive, this);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * @private
     */
    _setObjectActive: function(object) {
      object.set('active', true);
      object.group = this;
    },

    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    removeWithUpdate: function(object) {
      this._moveFlippedObject(object);
      this._restoreObjectsState();

      // since _restoreObjectsState set objects inactive
      this.forEachObject(this._setObjectActive, this);

      this.remove(object);
      this._calcBounds();
      this._updateObjectsCoords();

      return this;
    },

    /**
     * @private
     */
    _onObjectAdded: function(object) {
      object.group = this;
    },

    /**
     * @private
     */
    _onObjectRemoved: function(object) {
      delete object.group;
      object.set('active', false);
    },

    /**
     * Properties that are delegated to group objects when reading/writing
     * @param {Object} delegatedProperties
     */
    delegatedProperties: {
      fill:             true,
      opacity:          true,
      fontFamily:       true,
      fontWeight:       true,
      fontSize:         true,
      fontStyle:        true,
      lineHeight:       true,
      textDecoration:   true,
      textAlign:        true,
      backgroundColor:  true
    },

    /**
     * @private
     */
    _set: function(key, value) {
      if (key in this.delegatedProperties) {
        var i = this._objects.length;
        this[key] = value;
        while (i--) {
          this._objects[i].set(key, value);
        }
      }
      else {
        this[key] = value;
      }
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        objects: invoke(this._objects, 'toObject', propertiesToInclude)
      });
    },

    /**
     * Renders instance on a given context
     * @param {CanvasRenderingContext2D} ctx context to render instance on
     */
    render: function(ctx) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();
      this.clipTo && fabric.util.clipContext(this, ctx);

      // the array is now sorted in order of highest first, so start from end
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._renderObject(this._objects[i], ctx);
      }

      this.clipTo && ctx.restore();

      ctx.restore();
    },

    /**
     * Renders controls and borders for the object
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _renderControls: function(ctx, noTransform) {
      this.callSuper('_renderControls', ctx, noTransform);
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._objects[i]._renderControls(ctx);
      }
    },

    /**
     * @private
     */
    _renderObject: function(object, ctx) {
      var originalHasRotatingPoint = object.hasRotatingPoint;

      // do not render if object is not visible
      if (!object.visible) {
        return;
      }

      object.hasRotatingPoint = false;

      object.render(ctx);

      object.hasRotatingPoint = originalHasRotatingPoint;
    },

    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @private
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState: function() {
      this._objects.forEach(this._restoreObjectState, this);
      return this;
    },

    /**
     * Moves a flipped object to the position where it's displayed
     * @private
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _moveFlippedObject: function(object) {
      var oldOriginX = object.get('originX'),
          oldOriginY = object.get('originY'),
          center = object.getCenterPoint();

      object.set({
        originX: 'center',
        originY: 'center',
        left: center.x,
        top: center.y
      });

      this._toggleFlipping(object);

      var newOrigin = object.getPointByOrigin(oldOriginX, oldOriginY);

      object.set({
        originX: oldOriginX,
        originY: oldOriginY,
        left: newOrigin.x,
        top: newOrigin.y
      });

      return this;
    },

    /**
     * @private
     */
    _toggleFlipping: function(object) {
      if (this.flipX) {
        object.toggle('flipX');
        object.set('left', -object.get('left'));
        object.setAngle(-object.getAngle());
      }
      if (this.flipY) {
        object.toggle('flipY');
        object.set('top', -object.get('top'));
        object.setAngle(-object.getAngle());
      }
    },

    /**
     * Restores original state of a specified object in group
     * @private
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _restoreObjectState: function(object) {
      this._setObjectPosition(object);

      object.setCoords();
      object.hasControls = object.__origHasControls;
      delete object.__origHasControls;
      object.set('active', false);
      object.setCoords();
      delete object.group;

      return this;
    },

    /**
     * @private
     */
    _setObjectPosition: function(object) {
      var groupLeft = this.getLeft(),
          groupTop = this.getTop(),
          rotated = this._getRotatedLeftTop(object);

      object.set({
        angle: object.getAngle() + this.getAngle(),
        left: groupLeft + rotated.left,
        top: groupTop + rotated.top,
        scaleX: object.get('scaleX') * this.get('scaleX'),
        scaleY: object.get('scaleY') * this.get('scaleY')
      });
    },

    /**
     * @private
     */
    _getRotatedLeftTop: function(object) {
      var groupAngle = this.getAngle() * (Math.PI / 180);
      return {
        left: (-Math.sin(groupAngle) * object.getTop() * this.get('scaleY') +
                Math.cos(groupAngle) * object.getLeft() * this.get('scaleX')),

        top:  (Math.cos(groupAngle) * object.getTop() * this.get('scaleY') +
               Math.sin(groupAngle) * object.getLeft() * this.get('scaleX'))
      };
    },

    /**
     * Destroys a group (restoring state of its objects)
     * @return {fabric.Group} thisArg
     * @chainable
     */
    destroy: function() {
      this._objects.forEach(this._moveFlippedObject, this);
      return this._restoreObjectsState();
    },

    /**
     * Saves coordinates of this instance (to be used together with `hasMoved`)
     * @saveCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    saveCoords: function() {
      this._originalLeft = this.get('left');
      this._originalTop = this.get('top');
      return this;
    },

    /**
     * Checks whether this group was moved (since `saveCoords` was called last)
     * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
     */
    hasMoved: function() {
      return this._originalLeft !== this.get('left') ||
             this._originalTop !== this.get('top');
    },

    /**
     * Sets coordinates of all group objects
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setObjectsCoords: function() {
      this.forEachObject(function(object) {
        object.setCoords();
      });
      return this;
    },

    /**
     * @private
     */
    _setOpacityIfSame: function() {
      var objects = this.getObjects(),
          firstValue = objects[0] ? objects[0].get('opacity') : 1,
          isSameOpacity = objects.every(function(o) {
            return o.get('opacity') === firstValue;
          });

      if (isSameOpacity) {
        this.opacity = firstValue;
      }
    },

    /**
     * @private
     */
    _calcBounds: function(onlyWidthHeight) {
      var aX = [],
          aY = [],
          o;

      for (var i = 0, len = this._objects.length; i < len; ++i) {
        o = this._objects[i];
        o.setCoords();
        for (var prop in o.oCoords) {
          aX.push(o.oCoords[prop].x);
          aY.push(o.oCoords[prop].y);
        }
      }

      this.set(this._getBounds(aX, aY, onlyWidthHeight));
    },

    /**
     * @private
     */
    _getBounds: function(aX, aY, onlyWidthHeight) {
      var ivt = fabric.util.invertTransform(this.getViewportTransform()),
          minXY = fabric.util.transformPoint(new fabric.Point(min(aX), min(aY)), ivt),
          maxXY = fabric.util.transformPoint(new fabric.Point(max(aX), max(aY)), ivt),
          obj = {
            width: (maxXY.x - minXY.x) || 0,
            height: (maxXY.y - minXY.y) || 0
          };

      if (!onlyWidthHeight) {
        obj.left = (minXY.x + maxXY.x) / 2 || 0;
        obj.top = (minXY.y + maxXY.y) / 2 || 0;
      }
      return obj;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = [
        //jscs:disable validateIndentation
        '<g ',
          'transform="', this.getSvgTransform(),
        '">\n'
        //jscs:enable validateIndentation
      ];

      for (var i = 0, len = this._objects.length; i < len; i++) {
        markup.push(this._objects[i].toSVG(reviver));
      }

      markup.push('</g>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns requested property
     * @param {String} prop Property to get
     * @return {Any}
     */
    get: function(prop) {
      if (prop in _lockProperties) {
        if (this[prop]) {
          return this[prop];
        }
        else {
          for (var i = 0, len = this._objects.length; i < len; i++) {
            if (this._objects[i][prop]) {
              return true;
            }
          }
          return false;
        }
      }
      else {
        if (prop in this.delegatedProperties) {
          return this._objects[0] && this._objects[0].get(prop);
        }
        return this[prop];
      }
    }
  });

  /**
   * Returns {@link fabric.Group} instance from an object representation
   * @static
   * @memberOf fabric.Group
   * @param {Object} object Object to create a group from
   * @param {Function} [callback] Callback to invoke when an group instance is created
   * @return {fabric.Group} An instance of fabric.Group
   */
  fabric.Group.fromObject = function(object, callback) {
    fabric.util.enlivenObjects(object.objects, function(enlivenedObjects) {
      delete object.objects;
      callback && callback(new fabric.Group(enlivenedObjects, object));
    });
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.Group
   * @type Boolean
   * @default
   */
  fabric.Group.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var extend = fabric.util.object.extend;

  if (!global.fabric) {
    global.fabric = { };
  }

  if (global.fabric.Image) {
    fabric.warn('fabric.Image is already defined.');
    return;
  }

  /**
   * Image class
   * @class fabric.Image
   * @extends fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#images}
   * @see {@link fabric.Image#initialize} for constructor definition
   */
  fabric.Image = fabric.util.createClass(fabric.Object, /** @lends fabric.Image.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'image',

    /**
     * crossOrigin value (one of "", "anonymous", "allow-credentials")
     * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
     * @type String
     * @default
     */
    crossOrigin: '',

    /**
     * Constructor
     * @param {HTMLImageElement | String} element Image element
     * @param {Object} [options] Options object
     * @return {fabric.Image} thisArg
     */
    initialize: function(element, options) {
      options || (options = { });

      this.filters = [ ];

      this.callSuper('initialize', options);

      this._initElement(element, options);
      this._initConfig(options);

      if (options.filters) {
        this.filters = options.filters;
        this.applyFilters();
      }
    },

    /**
     * Returns image element which this instance if based on
     * @return {HTMLImageElement} Image element
     */
    getElement: function() {
      return this._element;
    },

    /**
     * Sets image element for this instance to a specified one.
     * If filters defined they are applied to new image.
     * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
     * @param {HTMLImageElement} element
     * @param {Function} [callback] Callback is invoked when all filters have been applied and new image is generated
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setElement: function(element, callback) {
      this._element = element;
      this._originalElement = element;
      this._initConfig();

      if (this.filters.length !== 0) {
        this.applyFilters(callback);
      }

      return this;
    },

    /**
     * Sets crossOrigin value (on an instance and corresponding image element)
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setCrossOrigin: function(value) {
      this.crossOrigin = value;
      this._element.crossOrigin = value;

      return this;
    },

    /**
     * Returns original size of an image
     * @return {Object} Object with "width" and "height" properties
     */
    getOriginalSize: function() {
      var element = this.getElement();
      return {
        width: element.width,
        height: element.height
      };
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _stroke: function(ctx) {
      ctx.save();
      this._setStrokeStyles(ctx);
      ctx.beginPath();
      ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
      ctx.closePath();
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height;

      ctx.save();
      this._setStrokeStyles(ctx);

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, x + w, y, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y, x + w, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y + h, x, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x, y + h, x, y, this.strokeDashArray);
      ctx.closePath();
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        src: this._originalElement.src || this._originalElement._src,
        filters: this.filters.map(function(filterObj) {
          return filterObj && filterObj.toObject();
        }),
        crossOrigin: this.crossOrigin
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = [], x = -this.width / 2, y = -this.height / 2;
      if (this.group) {
        x = this.left;
        y = this.top;
      }
      markup.push(
        '<g transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '">\n',
          '<image xlink:href="', this.getSvgSrc(),
            '" x="', x, '" y="', y,
            '" style="', this.getSvgStyles(),
            // we're essentially moving origin of transformation from top/left corner to the center of the shape
            // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
            // so that object's center aligns with container's left/top
            '" width="', this.width,
            '" height="', this.height,
            '" preserveAspectRatio="none"',
          '></image>\n'
      );

      if (this.stroke || this.strokeDashArray) {
        var origFill = this.fill;
        this.fill = null;
        markup.push(
          '<rect ',
            'x="', x, '" y="', y,
            '" width="', this.width, '" height="', this.height,
            '" style="', this.getSvgStyles(),
          '"/>\n'
        );
        this.fill = origFill;
      }

      markup.push('</g>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns source of an image
     * @return {String} Source of an image
     */
    getSrc: function() {
      if (this.getElement()) {
        return this.getElement().src || this.getElement()._src;
      }
    },

    /**
     * Returns string representation of an instance
     * @return {String} String representation of an instance
     */
    toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    },

    /**
     * Returns a clone of an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    clone: function(callback, propertiesToInclude) {
      this.constructor.fromObject(this.toObject(propertiesToInclude), callback);
    },

    /**
     * Applies filters assigned to this image (from "filters" array)
     * @mthod applyFilters
     * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
     * @return {fabric.Image} thisArg
     * @chainable
     */
    applyFilters: function(callback) {

      if (!this._originalElement) {
        return;
      }

      if (this.filters.length === 0) {
        this._element = this._originalElement;
        callback && callback();
        return;
      }

      var imgEl = this._originalElement,
          canvasEl = fabric.util.createCanvasElement(),
          replacement = fabric.util.createImage(),
          _this = this;

      canvasEl.width = imgEl.width;
      canvasEl.height = imgEl.height;

      canvasEl.getContext('2d').drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);

      this.filters.forEach(function(filter) {
        filter && filter.applyTo(canvasEl);
      });

       /** @ignore */

      replacement.width = imgEl.width;
      replacement.height = imgEl.height;

      if (fabric.isLikelyNode) {
        replacement.src = canvasEl.toBuffer(undefined, fabric.Image.pngCompression);

        // onload doesn't fire in some node versions, so we invoke callback manually
        _this._element = replacement;
        callback && callback();
      }
      else {
        replacement.onload = function() {
          _this._element = replacement;
          callback && callback();
          replacement.onload = canvasEl = imgEl = null;
        };
        replacement.src = canvasEl.toDataURL('image/png');
      }

      return this;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx, noTransform) {
      this._element &&
      ctx.drawImage(
        this._element,
        noTransform ? this.left : -this.width/2,
        noTransform ? this.top : -this.height/2,
        this.width,
        this.height
      );
      this._renderStroke(ctx);
    },

    /**
     * @private
     */
    _resetWidthHeight: function() {
      var element = this.getElement();

      this.set('width', element.width);
      this.set('height', element.height);
    },

    /**
     * The Image class's initialization method. This method is automatically
     * called by the constructor.
     * @private
     * @param {HTMLImageElement|String} element The element representing the image
     */
    _initElement: function(element) {
      this.setElement(fabric.util.getById(element));
      fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initConfig: function(options) {
      options || (options = { });
      this.setOptions(options);
      this._setWidthHeight(options);
      if (this._element && this.crossOrigin) {
        this._element.crossOrigin = this.crossOrigin;
      }
    },

    /**
     * @private
     * @param {Object} object Object with filters property
     * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
     */
    _initFilters: function(object, callback) {
      if (object.filters && object.filters.length) {
        fabric.util.enlivenObjects(object.filters, function(enlivenedObjects) {
          callback && callback(enlivenedObjects);
        }, 'fabric.Image.filters');
      }
      else {
        callback && callback();
      }
    },

    /**
     * @private
     * @param {Object} [options] Object with width/height properties
     */
    _setWidthHeight: function(options) {
      this.width = 'width' in options
        ? options.width
        : (this.getElement()
            ? this.getElement().width || 0
            : 0);

      this.height = 'height' in options
        ? options.height
        : (this.getElement()
            ? this.getElement().height || 0
            : 0);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Default CSS class name for canvas
   * @static
   * @type String
   * @default
   */
  fabric.Image.CSS_CANVAS = 'canvas-img';

  /**
   * Alias for getSrc
   * @static
   */
  fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc;

  /**
   * Creates an instance of fabric.Image from its object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when an image instance is created
   */
  fabric.Image.fromObject = function(object, callback) {
    fabric.util.loadImage(object.src, function(img) {
      fabric.Image.prototype._initFilters.call(object, object, function(filters) {
        object.filters = filters || [ ];
        var instance = new fabric.Image(img, object);
        callback && callback(instance);
      });
    }, null, object.crossOrigin);
  };

  /**
   * Creates an instance of fabric.Image from an URL string
   * @static
   * @param {String} url URL to create an image from
   * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
   * @param {Object} [imgOptions] Options object
   */
  fabric.Image.fromURL = function(url, callback, imgOptions) {
    fabric.util.loadImage(url, function(img) {
      callback(new fabric.Image(img, imgOptions));
    }, null, imgOptions && imgOptions.crossOrigin);
  };

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Image.fromElement})
   * @static
   * @see {@link http://www.w3.org/TR/SVG/struct.html#ImageElement}
   */
  fabric.Image.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x y width height xlink:href'.split(' '));

  /**
   * Returns {@link fabric.Image} instance from an SVG element
   * @static
   * @param {SVGElement} element Element to parse
   * @param {Function} callback Callback to execute when fabric.Image object is created
   * @param {Object} [options] Options object
   * @return {fabric.Image} Instance of fabric.Image
   */
  fabric.Image.fromElement = function(element, callback, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Image.ATTRIBUTE_NAMES);

    fabric.Image.fromURL(parsedAttributes['xlink:href'], callback,
      extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
  };
  /* _FROM_SVG_END_ */

  /**
   * Indicates that instances of this type are async
   * @static
   * @type Boolean
   * @default
   */
  fabric.Image.async = true;

  /**
   * Indicates compression level used when generating PNG under Node (in applyFilters). Any of 0-9
   * @static
   * @type Number
   * @default
   */
  fabric.Image.pngCompression = 1;

})(typeof exports !== 'undefined' ? exports : this);


/**
 * @namespace fabric.Image.filters
 * @memberOf fabric.Image
 * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#image_filters}
 * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
 */
fabric.Image.filters = fabric.Image.filters || { };

/**
 * Root filter class from which all filter classes inherit from
 * @class fabric.Image.filters.BaseFilter
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.BaseFilter = fabric.util.createClass(/** @lends fabric.Image.filters.BaseFilter.prototype */ {

  /**
   * Filter type
   * @param {String} type
   * @default
   */
  type: 'BaseFilter',

  /**
   * Returns object representation of an instance
   * @return {Object} Object representation of an instance
   */
  toObject: function() {
    return { type: this.type };
  },

  /**
   * Returns a JSON representation of an instance
   * @return {Object} JSON
   */
  toJSON: function() {
    // delegate, not alias
    return this.toObject();
  }
});


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Brightness filter class
   * @class fabric.Image.filters.Brightness
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Brightness#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Brightness({
   *   brightness: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Brightness = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Brightness.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Brightness',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Brightness.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.brightness=0] Value to brighten the image up (0..255)
     */
    initialize: function(options) {
      options = options || { };
      this.brightness = options.brightness || 0;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          brightness = this.brightness;

      for (var i = 0, len = data.length; i < len; i += 4) {
        data[i] += brightness;
        data[i + 1] += brightness;
        data[i + 2] += brightness;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        brightness: this.brightness
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Brightness} Instance of fabric.Image.filters.Brightness
   */
  fabric.Image.filters.Brightness.fromObject = function(object) {
    return new fabric.Image.filters.Brightness(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Adapted from <a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/">html5rocks article</a>
   * @class fabric.Image.filters.Convolute
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Convolute#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example <caption>Sharpen filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 0, -1,  0,
   *            -1,  5, -1,
   *             0, -1,  0 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Blur filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 1/9, 1/9, 1/9,
   *             1/9, 1/9, 1/9,
   *             1/9, 1/9, 1/9 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Emboss filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 1,   1,  1,
   *             1, 0.7, -1,
   *            -1,  -1, -1 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Emboss filter with opaqueness</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   opaque: true,
   *   matrix: [ 1,   1,  1,
   *             1, 0.7, -1,
   *            -1,  -1, -1 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Convolute = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Convolute.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Convolute',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Convolute.prototype
     * @param {Object} [options] Options object
     * @param {Boolean} [options.opaque=false] Opaque value (true/false)
     * @param {Array} [options.matrix] Filter matrix
     */
    initialize: function(options) {
      options = options || { };

      this.opaque = options.opaque;
      this.matrix = options.matrix || [
        0, 0, 0,
        0, 1, 0,
        0, 0, 0
      ];

      var canvasEl = fabric.util.createCanvasElement();
      this.tmpCtx = canvasEl.getContext('2d');
    },

    /**
     * @private
     */
    _createImageData: function(w, h) {
      return this.tmpCtx.createImageData(w, h);
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {

      var weights = this.matrix,
          context = canvasEl.getContext('2d'),
          pixels = context.getImageData(0, 0, canvasEl.width, canvasEl.height),

          side = Math.round(Math.sqrt(weights.length)),
          halfSide = Math.floor(side/2),
          src = pixels.data,
          sw = pixels.width,
          sh = pixels.height,

          // pad output by the convolution matrix
          w = sw,
          h = sh,
          output = this._createImageData(w, h),

          dst = output.data,

          // go through the destination image pixels
          alphaFac = this.opaque ? 1 : 0;

      for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
          var sy = y,
              sx = x,
              dstOff = (y * w + x) * 4,
              // calculate the weighed sum of the source image pixels that
              // fall under the convolution matrix
              r = 0, g = 0, b = 0, a = 0;

          for (var cy = 0; cy < side; cy++) {
            for (var cx = 0; cx < side; cx++) {

              var scy = sy + cy - halfSide,
                  scx = sx + cx - halfSide;

              /* jshint maxdepth:5 */
              if (scy < 0 || scy > sh || scx < 0 || scx > sw) {
                continue;
              }

              var srcOff = (scy * sw + scx) * 4,
                  wt = weights[cy * side + cx];

              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
              a += src[srcOff + 3] * wt;
            }
          }
          dst[dstOff] = r;
          dst[dstOff + 1] = g;
          dst[dstOff + 2] = b;
          dst[dstOff + 3] = a + alphaFac * (255 - a);
        }
      }

      context.putImageData(output, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        opaque: this.opaque,
        matrix: this.matrix
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Convolute} Instance of fabric.Image.filters.Convolute
   */
  fabric.Image.filters.Convolute.fromObject = function(object) {
    return new fabric.Image.filters.Convolute(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * GradientTransparency filter class
   * @class fabric.Image.filters.GradientTransparency
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.GradientTransparency#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.GradientTransparency({
   *   threshold: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.GradientTransparency = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.GradientTransparency.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'GradientTransparency',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.GradientTransparency.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.threshold=100] Threshold value
     */
    initialize: function(options) {
      options = options || { };
      this.threshold = options.threshold || 100;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          threshold = this.threshold,
          total = data.length;

      for (var i = 0, len = data.length; i < len; i += 4) {
        data[i + 3] = threshold + 255 * (total - i) / total;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        threshold: this.threshold
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.GradientTransparency} Instance of fabric.Image.filters.GradientTransparency
   */
  fabric.Image.filters.GradientTransparency.fromObject = function(object) {
    return new fabric.Image.filters.GradientTransparency(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Grayscale image filter class
   * @class fabric.Image.filters.Grayscale
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Grayscale();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Grayscale = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Grayscale.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Grayscale',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Grayscale.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          len = imageData.width * imageData.height * 4,
          index = 0,
          average;

      while (index < len) {
        average = (data[index] + data[index + 1] + data[index + 2]) / 3;
        data[index]     = average;
        data[index + 1] = average;
        data[index + 2] = average;
        index += 4;
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Grayscale} Instance of fabric.Image.filters.Grayscale
   */
  fabric.Image.filters.Grayscale.fromObject = function() {
    return new fabric.Image.filters.Grayscale();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Invert filter class
   * @class fabric.Image.filters.Invert
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Invert();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Invert = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Invert.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Invert',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Invert.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i;

      for (i = 0; i < iLen; i+=4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Invert} Instance of fabric.Image.filters.Invert
   */
  fabric.Image.filters.Invert.fromObject = function() {
    return new fabric.Image.filters.Invert();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Mask filter class
   * See http://resources.aleph-1.com/mask/
   * @class fabric.Image.filters.Mask
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Mask#initialize} for constructor definition
   */
  fabric.Image.filters.Mask = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Mask.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Mask',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Mask.prototype
     * @param {Object} [options] Options object
     * @param {fabric.Image} [options.mask] Mask image object
     * @param {Number} [options.channel=0] Rgb channel (0, 1, 2 or 3)
     */
    initialize: function(options) {
      options = options || { };

      this.mask = options.mask;
      this.channel = [ 0, 1, 2, 3 ].indexOf(options.channel) > -1 ? options.channel : 0;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      if (!this.mask) {
        return;
      }

      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          maskEl = this.mask.getElement(),
          maskCanvasEl = fabric.util.createCanvasElement(),
          channel = this.channel,
          i,
          iLen = imageData.width * imageData.height * 4;

      maskCanvasEl.width = maskEl.width;
      maskCanvasEl.height = maskEl.height;

      maskCanvasEl.getContext('2d').drawImage(maskEl, 0, 0, maskEl.width, maskEl.height);

      var maskImageData = maskCanvasEl.getContext('2d').getImageData(0, 0, maskEl.width, maskEl.height),
          maskData = maskImageData.data;

      for (i = 0; i < iLen; i += 4) {
        data[i + 3] = maskData[i + channel];
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        mask: this.mask.toObject(),
        channel: this.channel
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when a mask filter instance is created
   */
  fabric.Image.filters.Mask.fromObject = function(object, callback) {
    fabric.util.loadImage(object.mask.src, function(img) {
      object.mask = new fabric.Image(img, object.mask);
      callback && callback(new fabric.Image.filters.Mask(object));
    });
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @type Boolean
   * @default
   */
  fabric.Image.filters.Mask.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Noise filter class
   * @class fabric.Image.filters.Noise
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Noise#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Noise({
   *   noise: 700
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Noise = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Noise.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Noise',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Noise.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.noise=0] Noise value
     */
    initialize: function(options) {
      options = options || { };
      this.noise = options.noise || 0;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          noise = this.noise, rand;

      for (var i = 0, len = data.length; i < len; i += 4) {

        rand = (0.5 - Math.random()) * noise;

        data[i] += rand;
        data[i + 1] += rand;
        data[i + 2] += rand;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        noise: this.noise
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Noise} Instance of fabric.Image.filters.Noise
   */
  fabric.Image.filters.Noise.fromObject = function(object) {
    return new fabric.Image.filters.Noise(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Pixelate filter class
   * @class fabric.Image.filters.Pixelate
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Pixelate#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Pixelate({
   *   blocksize: 8
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Pixelate = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Pixelate.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Pixelate',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Pixelate.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.blocksize=4] Blocksize for pixelate
     */
    initialize: function(options) {
      options = options || { };
      this.blocksize = options.blocksize || 4;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = imageData.height,
          jLen = imageData.width,
          index, i, j, r, g, b, a;

      for (i = 0; i < iLen; i += this.blocksize) {
        for (j = 0; j < jLen; j += this.blocksize) {

          index = (i * 4) * jLen + (j * 4);

          r = data[index];
          g = data[index + 1];
          b = data[index + 2];
          a = data[index + 3];

          /*
           blocksize: 4

           [1,x,x,x,1]
           [x,x,x,x,1]
           [x,x,x,x,1]
           [x,x,x,x,1]
           [1,1,1,1,1]
           */

          for (var _i = i, _ilen = i + this.blocksize; _i < _ilen; _i++) {
            for (var _j = j, _jlen = j + this.blocksize; _j < _jlen; _j++) {
              index = (_i * 4) * jLen + (_j * 4);
              data[index] = r;
              data[index + 1] = g;
              data[index + 2] = b;
              data[index + 3] = a;
            }
          }
        }
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        blocksize: this.blocksize
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Pixelate} Instance of fabric.Image.filters.Pixelate
   */
  fabric.Image.filters.Pixelate.fromObject = function(object) {
    return new fabric.Image.filters.Pixelate(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Remove white filter class
   * @class fabric.Image.filters.RemoveWhite
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.RemoveWhite#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.RemoveWhite({
   *   threshold: 40,
   *   distance: 140
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.RemoveWhite = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.RemoveWhite.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'RemoveWhite',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.RemoveWhite.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.threshold=30] Threshold value
     * @param {Number} [options.distance=20] Distance value
     */
    initialize: function(options) {
      options = options || { };
      this.threshold = options.threshold || 30;
      this.distance = options.distance || 20;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          threshold = this.threshold,
          distance = this.distance,
          limit = 255 - threshold,
          abs = Math.abs,
          r, g, b;

      for (var i = 0, len = data.length; i < len; i += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        if (r > limit &&
            g > limit &&
            b > limit &&
            abs(r - g) < distance &&
            abs(r - b) < distance &&
            abs(g - b) < distance
        ) {
          data[i + 3] = 1;
        }
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        threshold: this.threshold,
        distance: this.distance
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.RemoveWhite} Instance of fabric.Image.filters.RemoveWhite
   */
  fabric.Image.filters.RemoveWhite.fromObject = function(object) {
    return new fabric.Image.filters.RemoveWhite(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Sepia filter class
   * @class fabric.Image.filters.Sepia
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Sepia();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Sepia = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Sepia.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sepia',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Sepia.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i, avg;

      for (i = 0; i < iLen; i+=4) {
        avg = 0.3  * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
        data[i] = avg + 100;
        data[i + 1] = avg + 50;
        data[i + 2] = avg + 255;
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Sepia} Instance of fabric.Image.filters.Sepia
   */
  fabric.Image.filters.Sepia.fromObject = function() {
    return new fabric.Image.filters.Sepia();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Sepia2 filter class
   * @class fabric.Image.filters.Sepia2
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Sepia2();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Sepia2 = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Sepia2.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sepia2',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Sepia.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i, r, g, b;

      for (i = 0; i < iLen; i+=4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        data[i] = (r * 0.393 + g * 0.769 + b * 0.189 ) / 1.351;
        data[i + 1] = (r * 0.349 + g * 0.686 + b * 0.168 ) / 1.203;
        data[i + 2] = (r * 0.272 + g * 0.534 + b * 0.131 ) / 2.140;
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Sepia2} Instance of fabric.Image.filters.Sepia2
   */
  fabric.Image.filters.Sepia2.fromObject = function() {
    return new fabric.Image.filters.Sepia2();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Tint filter class
   * Adapted from <a href="https://github.com/mezzoblue/PaintbrushJS">https://github.com/mezzoblue/PaintbrushJS</a>
   * @class fabric.Image.filters.Tint
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Tint#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters/|ImageFilters demo}
   * @example <caption>Tint filter with hex color and opacity</caption>
   * var filter = new fabric.Image.filters.Tint({
   *   color: '#3513B0',
   *   opacity: 0.5
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Tint filter with rgba color</caption>
   * var filter = new fabric.Image.filters.Tint({
   *   color: 'rgba(53, 21, 176, 0.5)'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Tint = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Tint.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Tint',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Tint.prototype
     * @param {Object} [options] Options object
     * @param {String} [options.color=#000000] Color to tint the image with
     * @param {Number} [options.opacity] Opacity value that controls the tint effect's transparency (0..1)
     */
    initialize: function(options) {
      options = options || { };

      this.color = options.color || '#000000';
      this.opacity = typeof options.opacity !== 'undefined'
                      ? options.opacity
                      : new fabric.Color(this.color).getAlpha();
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i,
          tintR, tintG, tintB,
          r, g, b, alpha1,
          source;

      source = new fabric.Color(this.color).getSource();

      tintR = source[0] * this.opacity;
      tintG = source[1] * this.opacity;
      tintB = source[2] * this.opacity;

      alpha1 = 1 - this.opacity;

      for (i = 0; i < iLen; i+=4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        // alpha compositing
        data[i] = tintR + r * alpha1;
        data[i + 1] = tintG + g * alpha1;
        data[i + 2] = tintB + b * alpha1;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        color: this.color,
        opacity: this.opacity
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Tint} Instance of fabric.Image.filters.Tint
   */
  fabric.Image.filters.Tint.fromObject = function(object) {
    return new fabric.Image.filters.Tint(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Multiply filter class
   * Adapted from <a href="http://www.laurenscorijn.com/articles/colormath-basics">http://www.laurenscorijn.com/articles/colormath-basics</a>
   * @class fabric.Image.filters.Multiply
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @example <caption>Multiply filter with hex color</caption>
   * var filter = new fabric.Image.filters.Multiply({
   *   color: '#F0F'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Multiply filter with rgb color</caption>
   * var filter = new fabric.Image.filters.Multiply({
   *   color: 'rgb(53, 21, 176)'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Multiply = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Multiply.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Multiply',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Multiply.prototype
     * @param {Object} [options] Options object
     * @param {String} [options.color=#000000] Color to multiply the image pixels with
     */
    initialize: function(options) {
      options = options || { };

      this.color = options.color || '#000000';
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i,
          source;

      source = new fabric.Color(this.color).getSource();

      for (i = 0; i < iLen; i+=4) {
        data[i] *= source[0] / 255;
        data[i + 1] *= source[1] / 255;
        data[i + 2] *= source[2] / 255;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        color: this.color
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Multiply} Instance of fabric.Image.filters.Multiply
   */
  fabric.Image.filters.Multiply.fromObject = function(object) {
    return new fabric.Image.filters.Multiply(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global){
  'use strict';

  var fabric = global.fabric;

  /**
   * Color Blend filter class
   * @class fabric.Image.filter.Blend
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @example
   * var filter = new fabric.Image.filters.Blend({
   *  color: '#000',
   *  mode: 'multiply'
   * });
   *
   * var filter = new fabric.Image.filters.Blend({
   *  image: fabricImageObject,
   *  mode: 'multiply',
   *  alpha: 0.5
   * });

   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Blend = fabric.util.createClass({
    type: 'Blend',

    initialize: function(options){
      options = options || {};
      this.color = options.color || '#000';
      this.image = options.image || false;
      this.mode = options.mode || 'multiply';
      this.alpha = options.alpha || 1;
    },

    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          tr, tg, tb,
          r, g, b,
          source,
          isImage = false;

      if (this.image) {
        // Blend images
        isImage = true;

        var _el = fabric.util.createCanvasElement();
        _el.width = this.image.width;
        _el.height = this.image.height;

        var tmpCanvas = new fabric.StaticCanvas(_el);
        tmpCanvas.add(this.image);
        var context2 =  tmpCanvas.getContext('2d');
        source = context2.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height).data;
      }
      else {
        // Blend color
        source = new fabric.Color(this.color).getSource();

        tr = source[0] * this.alpha;
        tg = source[1] * this.alpha;
        tb = source[2] * this.alpha;
      }

      for (var i = 0, len = data.length; i < len; i += 4) {

        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        if (isImage) {
          tr = source[i] * this.alpha;
          tg = source[i + 1] * this.alpha;
          tb = source[i + 2] * this.alpha;
        }

        switch (this.mode) {
          case 'multiply':
            data[i] = r * tr / 255;
            data[i + 1] = g * tg / 255;
            data[i + 2] = b * tb / 255;
            break;
          case 'screen':
            data[i] = 1 - (1 - r) * (1 - tr);
            data[i + 1] = 1 - (1 - g) * (1 - tg);
            data[i + 2] = 1 - (1 - b) * (1 - tb);
            break;
          case 'add':
            data[i] = Math.min(255, r + tr);
            data[i + 1] = Math.min(255, g + tg);
            data[i + 2] = Math.min(255, b + tb);
            break;
          case 'diff':
          case 'difference':
            data[i] = Math.abs(r - tr);
            data[i + 1] = Math.abs(g - tg);
            data[i + 2] = Math.abs(b - tb);
            break;
          case 'subtract':
            var _r = r - tr,
                _g = g - tg,
                _b = b - tb;

            data[i] = (_r < 0) ? 0 : _r;
            data[i + 1] = (_g < 0) ? 0 : _g;
            data[i + 2] = (_b < 0) ? 0 : _b;
            break;
          case 'darken':
            data[i] = Math.min(r, tr);
            data[i + 1] = Math.min(g, tg);
            data[i + 2] = Math.min(b, tb);
            break;
          case 'lighten':
            data[i] = Math.max(r, tr);
            data[i + 1] = Math.max(g, tg);
            data[i + 2] = Math.max(b, tb);
            break;
        }
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  fabric.Image.filters.Blend.fromObject = function(object) {
    return new fabric.Image.filters.Blend(object);
  };
})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed,
      supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Text) {
    fabric.warn('fabric.Text is already defined');
    return;
  }

  var stateProperties = fabric.Object.prototype.stateProperties.concat();
  stateProperties.push(
    'fontFamily',
    'fontWeight',
    'fontSize',
    'text',
    'textDecoration',
    'textAlign',
    'fontStyle',
    'lineHeight',
    'textBackgroundColor',
    'useNative',
    'path'
  );

  /**
   * Text class
   * @class fabric.Text
   * @extends fabric.Object
   * @return {fabric.Text} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#text}
   * @see {@link fabric.Text#initialize} for constructor definition
   */
  fabric.Text = fabric.util.createClass(fabric.Object, /** @lends fabric.Text.prototype */ {

    /**
     * Properties which when set cause object to change dimensions
     * @type Object
     * @private
     */
    _dimensionAffectingProps: {
      fontSize: true,
      fontWeight: true,
      fontFamily: true,
      textDecoration: true,
      fontStyle: true,
      lineHeight: true,
      stroke: true,
      strokeWidth: true,
      text: true
    },

    /**
     * @private
     */
    _reNewline: /\r?\n/,

    /**
     * Retrieves object's fontSize
     * @method getFontSize
     * @memberOf fabric.Text.prototype
     * @return {String} Font size (in pixels)
     */

    /**
     * Sets object's fontSize
     * @method setFontSize
     * @memberOf fabric.Text.prototype
     * @param {Number} fontSize Font size (in pixels)
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontWeight
     * @method getFontWeight
     * @memberOf fabric.Text.prototype
     * @return {(String|Number)} Font weight
     */

    /**
     * Sets object's fontWeight
     * @method setFontWeight
     * @memberOf fabric.Text.prototype
     * @param {(Number|String)} fontWeight Font weight
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontFamily
     * @method getFontFamily
     * @memberOf fabric.Text.prototype
     * @return {String} Font family
     */

    /**
     * Sets object's fontFamily
     * @method setFontFamily
     * @memberOf fabric.Text.prototype
     * @param {String} fontFamily Font family
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's text
     * @method getText
     * @memberOf fabric.Text.prototype
     * @return {String} text
     */

    /**
     * Sets object's text
     * @method setText
     * @memberOf fabric.Text.prototype
     * @param {String} text Text
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textDecoration
     * @method getTextDecoration
     * @memberOf fabric.Text.prototype
     * @return {String} Text decoration
     */

    /**
     * Sets object's textDecoration
     * @method setTextDecoration
     * @memberOf fabric.Text.prototype
     * @param {String} textDecoration Text decoration
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontStyle
     * @method getFontStyle
     * @memberOf fabric.Text.prototype
     * @return {String} Font style
     */

    /**
     * Sets object's fontStyle
     * @method setFontStyle
     * @memberOf fabric.Text.prototype
     * @param {String} fontStyle Font style
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's lineHeight
     * @method getLineHeight
     * @memberOf fabric.Text.prototype
     * @return {Number} Line height
     */

    /**
     * Sets object's lineHeight
     * @method setLineHeight
     * @memberOf fabric.Text.prototype
     * @param {Number} lineHeight Line height
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textAlign
     * @method getTextAlign
     * @memberOf fabric.Text.prototype
     * @return {String} Text alignment
     */

    /**
     * Sets object's textAlign
     * @method setTextAlign
     * @memberOf fabric.Text.prototype
     * @param {String} textAlign Text alignment
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textBackgroundColor
     * @method getTextBackgroundColor
     * @memberOf fabric.Text.prototype
     * @return {String} Text background color
     */

    /**
     * Sets object's textBackgroundColor
     * @method setTextBackgroundColor
     * @memberOf fabric.Text.prototype
     * @param {String} textBackgroundColor Text background color
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Type of an object
     * @type String
     * @default
     */
    type:                 'text',

    /**
     * Font size (in pixels)
     * @type Number
     * @default
     */
    fontSize:             40,

    /**
     * Font weight (e.g. bold, normal, 400, 600, 800)
     * @type {(Number|String)}
     * @default
     */
    fontWeight:           'normal',

    /**
     * Font family
     * @type String
     * @default
     */
    fontFamily:           'Times New Roman',

    /**
     * Text decoration Possible values: "", "underline", "overline" or "line-through".
     * @type String
     * @default
     */
    textDecoration:       '',

    /**
     * Text alignment. Possible values: "left", "center", or "right".
     * @type String
     * @default
     */
    textAlign:            'left',

    /**
     * Font style . Possible values: "", "normal", "italic" or "oblique".
     * @type String
     * @default
     */
    fontStyle:            '',

    /**
     * Line height
     * @type Number
     * @default
     */
    lineHeight:           1.3,

    /**
     * Background color of text lines
     * @type String
     * @default
     */
    textBackgroundColor:  '',

    /**
     * URL of a font file, when using Cufon
     * @type String | null
     * @default
     */
    path:                 null,

    /**
     * Indicates whether canvas native text methods should be used to render text (otherwise, Cufon is used)
     * @type Boolean
     * @default
     */
    useNative:            true,

    /**
     * List of properties to consider when checking if
     * state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties:      stateProperties,

    /**
     * When defined, an object is rendered via stroke and this property specifies its color.
     * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
     * @type String
     * @default
     */
    stroke:               null,

    /**
     * Shadow object representing shadow of this shape.
     * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
     * @type fabric.Shadow
     * @default
     */
    shadow:               null,

    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     * @return {fabric.Text} thisArg
     */
    initialize: function(text, options) {
      options = options || { };

      this.text = text;
      this.__skipDimension = true;
      this.setOptions(options);
      this.__skipDimension = false;
      this._initDimensions();
    },

    /**
     * Renders text object on offscreen canvas, so that it would get dimensions
     * @private
     */
    _initDimensions: function() {
      if (this.__skipDimension) {
        return;
      }
      var canvasEl = fabric.util.createCanvasElement();
      this._render(canvasEl.getContext('2d'));
    },

    /**
     * Returns string representation of an instance
     * @return {String} String representation of text object
     */
    toString: function() {
      return '#<fabric.Text (' + this.complexity() +
        '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {

      if (typeof Cufon === 'undefined' || this.useNative === true) {
        this._renderViaNative(ctx);
      }
      else {
        this._renderViaCufon(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderViaNative: function(ctx) {
      var textLines = this.text.split(this._reNewline);

      this._setTextStyles(ctx);

      this.width = this._getTextWidth(ctx, textLines);
      this.height = this._getTextHeight(ctx, textLines);

      this.clipTo && fabric.util.clipContext(this, ctx);

      this._renderTextBackground(ctx, textLines);
      this._translateForTextAlign(ctx);
      this._renderText(ctx, textLines);

      if (this.textAlign !== 'left' && this.textAlign !== 'justify') {
        ctx.restore();
      }

      this._renderTextDecoration(ctx, textLines);
      this.clipTo && ctx.restore();

      this._setBoundaries(ctx, textLines);
      this._totalLineHeight = 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderText: function(ctx, textLines) {
      ctx.save();
      this._setShadow(ctx);
      this._setupFillRule(ctx);
      this._renderTextFill(ctx, textLines);
      this._renderTextStroke(ctx, textLines);
      this._restoreFillRule(ctx);
      this._removeShadow(ctx);
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _translateForTextAlign: function(ctx) {
      if (this.textAlign !== 'left' && this.textAlign !== 'justify') {
        ctx.save();
        ctx.translate(this.textAlign === 'center' ? (this.width / 2) : this.width, 0);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _setBoundaries: function(ctx, textLines) {
      this._boundaries = [ ];

      for (var i = 0, len = textLines.length; i < len; i++) {

        var lineWidth = this._getLineWidth(ctx, textLines[i]),
            lineLeftOffset = this._getLineLeftOffset(lineWidth);

        this._boundaries.push({
          height: this.fontSize * this.lineHeight,
          width: lineWidth,
          left: lineLeftOffset
        });
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setTextStyles: function(ctx) {
      this._setFillStyles(ctx);
      this._setStrokeStyles(ctx);
      ctx.textBaseline = 'alphabetic';
      if (!this.skipTextAlign) {
        ctx.textAlign = this.textAlign;
      }
      ctx.font = this._getFontDeclaration();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     * @return {Number} Height of fabric.Text object
     */
    _getTextHeight: function(ctx, textLines) {
      return this.fontSize * textLines.length * this.lineHeight;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     * @return {Number} Maximum width of fabric.Text object
     */
    _getTextWidth: function(ctx, textLines) {
      var maxWidth = ctx.measureText(textLines[0] || '|').width;

      for (var i = 1, len = textLines.length; i < len; i++) {
        var currentLineWidth = ctx.measureText(textLines[i]).width;
        if (currentLineWidth > maxWidth) {
          maxWidth = currentLineWidth;
        }
      }
      return maxWidth;
    },

    /**
     * @private
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} chars Chars to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     */
    _renderChars: function(method, ctx, chars, left, top) {
      ctx[method](chars, left, top);
    },

    /**
     * @private
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Text to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     * @param {Number} lineIndex Index of a line in a text
     */
    _renderTextLine: function(method, ctx, line, left, top, lineIndex) {
      // lift the line by quarter of fontSize
      top -= this.fontSize / 4;

      // short-circuit
      if (this.textAlign !== 'justify') {
        this._renderChars(method, ctx, line, left, top, lineIndex);
        return;
      }

      var lineWidth = ctx.measureText(line).width,
          totalWidth = this.width;

      if (totalWidth > lineWidth) {
        // stretch the line
        var words = line.split(/\s+/),
            wordsWidth = ctx.measureText(line.replace(/\s+/g, '')).width,
            widthDiff = totalWidth - wordsWidth,
            numSpaces = words.length - 1,
            spaceWidth = widthDiff / numSpaces,
            leftOffset = 0;

        for (var i = 0, len = words.length; i < len; i++) {
          this._renderChars(method, ctx, words[i], left + leftOffset, top, lineIndex);
          leftOffset += ctx.measureText(words[i]).width + spaceWidth;
        }
      }
      else {
        this._renderChars(method, ctx, line, left, top, lineIndex);
      }
    },

    /**
     * @private
     * @return {Number} Left offset
     */
    _getLeftOffset: function() {
      if (fabric.isLikelyNode) {
        return 0;
      }
      return -this.width / 2;
    },

    /**
     * @private
     * @return {Number} Top offset
     */
    _getTopOffset: function() {
      return -this.height / 2;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextFill: function(ctx, textLines) {
      if (!this.fill && !this._skipFillStrokeCheck) {
        return;
      }

      this._boundaries = [ ];
      var lineHeights = 0;

      for (var i = 0, len = textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);
        lineHeights += heightOfLine;

        this._renderTextLine(
          'fillText',
          ctx,
          textLines[i],
          this._getLeftOffset(),
          this._getTopOffset() + lineHeights,
          i
        );
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextStroke: function(ctx, textLines) {
      if ((!this.stroke || this.strokeWidth === 0) && !this._skipFillStrokeCheck) {
        return;
      }

      var lineHeights = 0;

      ctx.save();
      if (this.strokeDashArray) {
        // Spec requires the concatenation of two copies the dash list when the number of elements is odd
        if (1 & this.strokeDashArray.length) {
          this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
        }
        supportsLineDash && ctx.setLineDash(this.strokeDashArray);
      }

      ctx.beginPath();
      for (var i = 0, len = textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);
        lineHeights += heightOfLine;

        this._renderTextLine(
          'strokeText',
          ctx,
          textLines[i],
          this._getLeftOffset(),
          this._getTopOffset() + lineHeights,
          i
        );
      }
      ctx.closePath();
      ctx.restore();
    },

    _getHeightOfLine: function() {
      return this.fontSize * this.lineHeight;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextBackground: function(ctx, textLines) {
      this._renderTextBoxBackground(ctx);
      this._renderTextLinesBackground(ctx, textLines);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextBoxBackground: function(ctx) {
      if (!this.backgroundColor) {
        return;
      }

      ctx.save();
      ctx.fillStyle = this.backgroundColor;

      ctx.fillRect(
        this._getLeftOffset(),
        this._getTopOffset(),
        this.width,
        this.height
      );

      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextLinesBackground: function(ctx, textLines) {
      if (!this.textBackgroundColor) {
        return;
      }

      ctx.save();
      ctx.fillStyle = this.textBackgroundColor;

      for (var i = 0, len = textLines.length; i < len; i++) {

        if (textLines[i] !== '') {

          var lineWidth = this._getLineWidth(ctx, textLines[i]),
              lineLeftOffset = this._getLineLeftOffset(lineWidth);

          ctx.fillRect(
            this._getLeftOffset() + lineLeftOffset,
            this._getTopOffset() + (i * this.fontSize * this.lineHeight),
            lineWidth,
            this.fontSize * this.lineHeight
          );
        }
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {Number} lineWidth Width of text line
     * @return {Number} Line left offset
     */
    _getLineLeftOffset: function(lineWidth) {
      if (this.textAlign === 'center') {
        return (this.width - lineWidth) / 2;
      }
      if (this.textAlign === 'right') {
        return this.width - lineWidth;
      }
      return 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Text line
     * @return {Number} Line width
     */
    _getLineWidth: function(ctx, line) {
      return this.textAlign === 'justify'
        ? this.width
        : ctx.measureText(line).width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} textLines Array of all text lines
     */
    _renderTextDecoration: function(ctx, textLines) {
      if (!this.textDecoration) {
        return;
      }

      // var halfOfVerticalBox = this.originY === 'top' ? 0 : this._getTextHeight(ctx, textLines) / 2;
      var halfOfVerticalBox = this._getTextHeight(ctx, textLines) / 2,
          _this = this;

      /** @ignore */
      function renderLinesAtOffset(offset) {
        for (var i = 0, len = textLines.length; i < len; i++) {

          var lineWidth = _this._getLineWidth(ctx, textLines[i]),
              lineLeftOffset = _this._getLineLeftOffset(lineWidth);

          ctx.fillRect(
            _this._getLeftOffset() + lineLeftOffset,
            ~~((offset + (i * _this._getHeightOfLine(ctx, i, textLines))) - halfOfVerticalBox),
            lineWidth,
            1);
        }
      }

      if (this.textDecoration.indexOf('underline') > -1) {
        renderLinesAtOffset(this.fontSize * this.lineHeight);
      }
      if (this.textDecoration.indexOf('line-through') > -1) {
        renderLinesAtOffset(this.fontSize * this.lineHeight - this.fontSize / 2);
      }
      if (this.textDecoration.indexOf('overline') > -1) {
        renderLinesAtOffset(this.fontSize * this.lineHeight - this.fontSize);
      }
    },

    /**
     * @private
     */
    _getFontDeclaration: function() {
      return [
        // node-canvas needs "weight style", while browsers need "style weight"
        (fabric.isLikelyNode ? this.fontWeight : this.fontStyle),
        (fabric.isLikelyNode ? this.fontStyle : this.fontWeight),
        this.fontSize + 'px',
        (fabric.isLikelyNode ? ('"' + this.fontFamily + '"') : this.fontFamily)
      ].join(' ');
    },

    /**
     * Renders text instance on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    render: function(ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();
      this._transform(ctx, noTransform);

      var m = this.transformMatrix,
          isInPathGroup = this.group && this.group.type === 'path-group';

      if (isInPathGroup) {
        ctx.translate(-this.group.width/2, -this.group.height/2);
      }
      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (isInPathGroup) {
        ctx.translate(this.left, this.top);
      }
      this._render(ctx);
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        text:                 this.text,
        fontSize:             this.fontSize,
        fontWeight:           this.fontWeight,
        fontFamily:           this.fontFamily,
        fontStyle:            this.fontStyle,
        lineHeight:           this.lineHeight,
        textDecoration:       this.textDecoration,
        textAlign:            this.textAlign,
        path:                 this.path,
        textBackgroundColor:  this.textBackgroundColor,
        useNative:            this.useNative
      });
      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }
      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = [ ],
          textLines = this.text.split(this._reNewline),
          offsets = this._getSVGLeftTopOffsets(textLines),
          textAndBg = this._getSVGTextAndBg(offsets.lineTop, offsets.textLeft, textLines),
          shadowSpans = this._getSVGShadows(offsets.lineTop, textLines);

      // move top offset by an ascent
      offsets.textTop += (this._fontAscent ? ((this._fontAscent / 5) * this.lineHeight) : 0);

      this._wrapSVGTextAndBg(markup, textAndBg, shadowSpans, offsets);

      return reviver ? reviver(markup.join('')) : markup.join('');
    },

    /**
     * @private
     */
    _getSVGLeftTopOffsets: function(textLines) {
      var lineTop = this.useNative
            ? this.fontSize * this.lineHeight
            : (-this._fontAscent - ((this._fontAscent / 5) * this.lineHeight)),

          textLeft = -(this.width/2),
          textTop = this.useNative
            ? this.fontSize - 1
            : (this.height/2) - (textLines.length * this.fontSize) - this._totalLineHeight;

      return {
        textLeft: textLeft + (this.group && this.group.type === 'path-group' ? this.left : 0),
        textTop: textTop + (this.group && this.group.type === 'path-group' ? this.top : 0),
        lineTop: lineTop
      };
    },

    /**
     * @private
     */
    _wrapSVGTextAndBg: function(markup, textAndBg, shadowSpans, offsets) {
      markup.push(
        '<g transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '">\n',
          textAndBg.textBgRects.join(''),
          '<text ',
            (this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g,'\'') + '" ': ''),
            (this.fontSize ? 'font-size="' + this.fontSize + '" ': ''),
            (this.fontStyle ? 'font-style="' + this.fontStyle + '" ': ''),
            (this.fontWeight ? 'font-weight="' + this.fontWeight + '" ': ''),
            (this.textDecoration ? 'text-decoration="' + this.textDecoration + '" ': ''),
            'style="', this.getSvgStyles(), '" ',
            /* svg starts from left/bottom corner so we normalize height */
            'transform="translate(', toFixed(offsets.textLeft, 2), ' ', toFixed(offsets.textTop, 2), ')">',
            shadowSpans.join(''),
            textAndBg.textSpans.join(''),
          '</text>\n',
        '</g>\n'
      );
    },

    /**
     * @private
     * @param {Number} lineHeight
     * @param {Array} textLines Array of all text lines
     * @return {Array}
     */
    _getSVGShadows: function(lineHeight, textLines) {
      var shadowSpans = [],
          i, len,
          lineTopOffsetMultiplier = 1;

      if (!this.shadow || !this._boundaries) {
        return shadowSpans;
      }

      for (i = 0, len = textLines.length; i < len; i++) {
        if (textLines[i] !== '') {
          var lineLeftOffset = (this._boundaries && this._boundaries[i]) ? this._boundaries[i].left : 0;
          shadowSpans.push(
            '<tspan x="',
            toFixed((lineLeftOffset + lineTopOffsetMultiplier) + this.shadow.offsetX, 2),
            ((i === 0 || this.useNative) ? '" y' : '" dy'), '="',
            toFixed(this.useNative
              ? ((lineHeight * i) - this.height / 2 + this.shadow.offsetY)
              : (lineHeight + (i === 0 ? this.shadow.offsetY : 0)), 2),
            '" ',
            this._getFillAttributes(this.shadow.color), '>',
            fabric.util.string.escapeXml(textLines[i]),
          '</tspan>');
          lineTopOffsetMultiplier = 1;
        }
        else {
          // in some environments (e.g. IE 7 & 8) empty tspans are completely ignored, using a lineTopOffsetMultiplier
          // prevents empty tspans
          lineTopOffsetMultiplier++;
        }
      }

      return shadowSpans;
    },

    /**
     * @private
     * @param {Number} lineHeight
     * @param {Number} textLeftOffset Text left offset
     * @param {Array} textLines Array of all text lines
     * @return {Object}
     */
    _getSVGTextAndBg: function(lineHeight, textLeftOffset, textLines) {
      var textSpans = [ ],
          textBgRects = [ ],
          lineTopOffsetMultiplier = 1;

      // bounding-box background
      this._setSVGBg(textBgRects);

      // text and text-background
      for (var i = 0, len = textLines.length; i < len; i++) {
        if (textLines[i] !== '') {
          this._setSVGTextLineText(textLines[i], i, textSpans, lineHeight, lineTopOffsetMultiplier, textBgRects);
          lineTopOffsetMultiplier = 1;
        }
        else {
          // in some environments (e.g. IE 7 & 8) empty tspans are completely ignored, using a lineTopOffsetMultiplier
          // prevents empty tspans
          lineTopOffsetMultiplier++;
        }

        if (!this.textBackgroundColor || !this._boundaries) {
          continue;
        }

        this._setSVGTextLineBg(textBgRects, i, textLeftOffset, lineHeight);
      }

      return {
        textSpans: textSpans,
        textBgRects: textBgRects
      };
    },

    _setSVGTextLineText: function(textLine, i, textSpans, lineHeight, lineTopOffsetMultiplier) {
      var lineLeftOffset = (this._boundaries && this._boundaries[i])
        ? toFixed(this._boundaries[i].left, 2)
        : 0;

      textSpans.push(
        '<tspan x="',
          lineLeftOffset, '" ',
          (i === 0 || this.useNative ? 'y' : 'dy'), '="',
          toFixed(this.useNative
            ? ((lineHeight * i) - this.height / 2)
            : (lineHeight * lineTopOffsetMultiplier), 2), '" ',
          // doing this on <tspan> elements since setting opacity
          // on containing <text> one doesn't work in Illustrator
          this._getFillAttributes(this.fill), '>',
          fabric.util.string.escapeXml(textLine),
        '</tspan>'
      );
    },

    _setSVGTextLineBg: function(textBgRects, i, textLeftOffset, lineHeight) {
      textBgRects.push(
        '<rect ',
          this._getFillAttributes(this.textBackgroundColor),
          ' x="',
          toFixed(textLeftOffset + this._boundaries[i].left, 2),
          '" y="',
          /* an offset that seems to straighten things out */
          toFixed((lineHeight * i) - this.height / 2, 2),
          '" width="',
          toFixed(this._boundaries[i].width, 2),
          '" height="',
          toFixed(this._boundaries[i].height, 2),
        '"></rect>\n');
    },

    _setSVGBg: function(textBgRects) {
      if (this.backgroundColor && this._boundaries) {
        textBgRects.push(
          '<rect ',
            this._getFillAttributes(this.backgroundColor),
            ' x="',
            toFixed(-this.width / 2, 2),
            '" y="',
            toFixed(-this.height / 2, 2),
            '" width="',
            toFixed(this.width, 2),
            '" height="',
            toFixed(this.height, 2),
          '"></rect>');
      }
    },

    /**
     * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
     * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
     *
     * @private
     * @param {Any} value
     * @return {String}
     */
    _getFillAttributes: function(value) {
      var fillColor = (value && typeof value === 'string') ? new fabric.Color(value) : '';
      if (!fillColor || !fillColor.getSource() || fillColor.getAlpha() === 1) {
        return 'fill="' + value + '"';
      }
      return 'opacity="' + fillColor.getAlpha() + '" fill="' + fillColor.setAlpha(1).toRgb() + '"';
    },
    /* _TO_SVG_END_ */

    /**
     * Sets specified property to a specified value
     * @param {String} key
     * @param {Any} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    _set: function(key, value) {
      if (key === 'fontFamily' && this.path) {
        this.path = this.path.replace(/(.*?)([^\/]*)(\.font\.js)/, '$1' + value + '$3');
      }
      this.callSuper('_set', key, value);

      if (key in this._dimensionAffectingProps) {
        this._initDimensions();
        this.setCoords();
      }
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Text.fromElement})
   * @static
   * @memberOf fabric.Text
   * @see: http://www.w3.org/TR/SVG/text.html#TextElement
   */
  fabric.Text.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat(
    'x y dx dy font-family font-style font-weight font-size text-decoration text-anchor'.split(' '));

  /**
   * Default SVG font size
   * @static
   * @memberOf fabric.Text
   */
  fabric.Text.DEFAULT_SVG_FONT_SIZE = 16;

  /**
   * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
   * @static
   * @memberOf fabric.Text
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Text} Instance of fabric.Text
   */
  fabric.Text.fromElement = function(element, options) {
    if (!element) {
      return null;
    }

    var parsedAttributes = fabric.parseAttributes(element, fabric.Text.ATTRIBUTE_NAMES);
    options = fabric.util.object.extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes);

    if ('dx' in parsedAttributes) {
      options.left += parsedAttributes.dx;
    }
    if ('dy' in parsedAttributes) {
      options.top += parsedAttributes.dy;
    }
    if (!('fontSize' in options)) {
      options.fontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
    }

    if (!options.originX) {
      options.originX = 'left';
    }

    var text = new fabric.Text(element.textContent, options),
        /*
          Adjust positioning:
            x/y attributes in SVG correspond to the bottom-left corner of text bounding box
            top/left properties in Fabric correspond to center point of text bounding box
        */
        offX = 0;

    if (text.originX === 'left') {
      offX = text.getWidth() / 2;
    }
    if (text.originX === 'right') {
      offX = -text.getWidth() / 2;
    }
    text.set({
      left: text.getLeft() + offX,
      top: text.getTop() - text.getHeight() / 2
    });

    return text;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Text instance from an object representation
   * @static
   * @memberOf fabric.Text
   * @param {Object} object Object to create an instance from
   * @return {fabric.Text} Instance of fabric.Text
   */
  fabric.Text.fromObject = function(object) {
    return new fabric.Text(object.text, clone(object));
  };

  fabric.util.createAccessors(fabric.Text);

})(typeof exports !== 'undefined' ? exports : this);


}).call({}, window, document, html2canvas);





$(document).ready(function() {
	console.log('okk, captcha start');
	
	// capture();
	
	// console.log('done');
	
/////////////////////////////////////////

    // function capture() {
        // $('#img_captcha').html2canvas({
            // onrendered: function (canvas) {
                // //Set hidden field's value to image data (base-64 string)
                // var data = canvas.toDataURL("image/png");
                // $('#img_val').val(data);
//                 
                // console.log(data);
//                 
                // //Submit the form manually
                // // document.getElementById("myForm").submit();
            // }
        // });
    // }




/////////////////////////////////////////////////

// var element = $("#html-content-holder"); // global variable
var element = $("#img_captcha"); // global variable

var getCanvas; // global variable

    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    });
    
    
    $("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    console.log(newData);
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
});


});



// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function maxWindow() {
	/*window.moveTo(0, 0);

	if (document.all) {
		top.window.resizeTo(screen.availWidth, screen.availHeight);
	} else if (document.layers || document.getElementById) {
		if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
			top.window.outerHeight = screen.availHeight;
			top.window.outerWidth = screen.availWidth;
		}
	}*/
}

// get token
function getToken(){
	csrf_token = $('meta[name=csrf-token]').attr('content');
	csrf_param = $('meta[name=csrf-param]').attr('content');
	return csrf_param + '=' + csrf_token;	
}

// add (len - number.length) zero before
// ex: addZeroBefore(10, 4) =>  0010
function addZeroBefore(number, len){
	sNumber = number + '';
	if(sNumber.length < len){
		zero = '';
		for(i=0; i < (len - sNumber.length); i++){
			zero += '0';
		}
		sNumber = zero + sNumber;
	}
	return sNumber
}