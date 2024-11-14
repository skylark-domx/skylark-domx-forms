/**
 * skylark-domx-forms - The skylark html form library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./forms","./serialize-array"],function(i,a,r){return a.serializeObject=function(a){var e={};return i.each(r(a),function(a,r){var n=r.name,r=r.value;e[n]=void 0===e[n]?r:i.isArray(e[n])?e[n].concat(r):[e[n],r]}),e}});
//# sourceMappingURL=sourcemaps/serialize-object.js.map
