/**
 * skylark-domx-forms - The skylark html form library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals,define,require) {
  var isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define("skylark-domx-forms/forms",["skylark-langx/skylark"],function(e){return e.attach("domx.forms",{})}),define("skylark-domx-forms/deserialize",["skylark-langx/langx","skylark-domx-query","./forms"],function(u,c,e){function d(e,a,r){var i=r[e];void 0===i?r[e]=[a]:i.push(a)}var f={checked:["radio","checkbox"],selected:["option","select-one","select-multiple"],value:["button","color","date","datetime","datetime-local","email","hidden","month","number","password","range","reset","search","submit","tel","text","textarea","time","url","week"]};function m(e,a,r,i,n){o=((t=t=e).type||t.nodeName).toLowerCase(),l=void 0,u.each(f,function(e,a){if(-1<u.inArray(o,a))return l=e,!1});var t,o,l,s,c=l;"value"==c&&a==i?(e.value=r,n.call(e,r)):"checked"!=c&&"selected"!=c||(s=[],e.options?u.each(e.options,function(e,a){s.push(a)}):s.push(e),e.multiple&&0==i&&(e.selectedIndex=-1),u.each(s,function(e,a){a.value==r&&(a[c]=!0,n.call(a,r))}))}var k={change:u.noop,complete:u.noop};return e.deserialize=function(e,a,n){u.isFunction(n)&&(n={complete:n}),n=u.extend(k,n||{}),t=a,r={},i=/\+/g,u.isPlainObject(t)?(u.extend(r,t),u.each(r,function(e,a){u.isArray(a)||(r[e]=[a])})):u.isArray(t)?u.each(t,function(e,a){d(a.name,a.value,r)}):"string"==typeof t&&u.each(t.split("&"),function(e,a){a=a.split("=");d(decodeURIComponent(a[0].replace(i,"%20")),decodeURIComponent(a[1].replace(i,"%20")),r)}),a=r,t=e,o=n.filter,l={},t=c(e).map(function(){return this.elements?u.makeArray(this.elements):this}).filter(o||":input:not(:disabled)").get(),u.each(t,function(e,a){d(a.name,a,l)});var r,i,t,o,l,s=l;return u.each(a,function(e,a){u.each(s[e],function(r,i){u.each(a,function(e,a){m(i,r,a,e,n.change)})})}),n.complete.call(e),this}}),define("skylark-domx-forms/serialize-array",["skylark-langx/langx","skylark-domx-data","./forms"],function(t,o,e){return e.serializeArray=function(e){function r(e){if(vaule&&e.forEach)return e.forEach(r);a.push({name:i,value:e})}var i,n,a=[],e=e.elements||(t.isArrayLike(e)?e:[e]);return t.each(e,function(e,a){n=a.type,(i=a.name)&&"fieldset"!=a.nodeName.toLowerCase()&&!a.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||a.checked)&&r(o.val(a))}),a}}),define("skylark-domx-forms/serialize-object",["skylark-langx/langx","./forms","./serialize-array"],function(n,e,a){return e.serializeObject=function(e){var i={};return n.each(a(e),function(e,a){var r=a.name,a=a.value;i[r]=void 0===i[r]?a:n.isArray(i[r])?i[r].concat(a):[i[r],a]}),i}}),define("skylark-domx-forms/serialize",["skylark-langx/langx","./forms","./serialize-array"],function(e,a,r){return a.serialize=function(e){var a=[];return r(e).forEach(function(e){a.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),a.join("&")}}),define("skylark-domx-forms/main",["skylark-langx","skylark-domx-data","./forms","skylark-domx-velm","skylark-domx-query","./deserialize","./serialize-array","./serialize-object","./serialize"],function(e,a,r,i,n){return i.delegate(["deserialize","serializeArray","serializeObject","serialize"],r),n.fn.deserialize=n.wraps.wrapper_every_act(r.deserialize,r,r.deserialize),n.fn.serializeArray=n.wraps.wrapper_map(r.serializeArray,r,r.serializeArray,!0),n.fn.serializeObject=n.wraps.wrapper_map(r.serializeObject,r,r.serializeObject,!0),n.fn.serialize=n.wraps.wrapper_value(r.serialize,r,r.serialize),r}),define("skylark-domx-forms",["skylark-domx-forms/main"],function(e){return e});
},this,define,require);
//# sourceMappingURL=sourcemaps/skylark-domx-forms.js.map
