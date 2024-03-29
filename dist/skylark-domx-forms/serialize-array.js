/**
 * skylark-domx-forms - The skylark html form library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-data","./forms"],function(e,a,n){return n.serializeArray=function(n){var r,t,i,o=[],s=function(e){if(e.forEach)return e.forEach(s);o.push({name:r,value:e})};return i=n.elements?n.elements:e.isArrayLike(n)?n:[n],e.each(i,function(e,n){t=n.type,(r=n.name)&&"fieldset"!=n.nodeName.toLowerCase()&&!n.disabled&&"submit"!=t&&"reset"!=t&&"button"!=t&&"file"!=t&&("radio"!=t&&"checkbox"!=t||n.checked)&&s(a.val(n))}),o}});
//# sourceMappingURL=sourcemaps/serialize-array.js.map
