/**
 * skylark-domx-forms - The skylark html form library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-data","./forms"],function(i,o,e){return e.serializeArray=function(e){function r(e){if(e&&e.forEach)return e.forEach(r);a.push({name:n,value:e})}var n,t,a=[],e=e.elements||(i.isArrayLike(e)?e:[e]);return i.each(e,function(e,a){t=a.type,(n=a.name)&&"fieldset"!=a.nodeName.toLowerCase()&&!a.disabled&&"submit"!=t&&"reset"!=t&&"button"!=t&&"file"!=t&&("radio"!=t&&"checkbox"!=t||a.checked)&&r(o.val(a))}),a}});
//# sourceMappingURL=sourcemaps/serialize-array.js.map
