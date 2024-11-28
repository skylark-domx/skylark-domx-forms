/**
 * skylark-domx-forms - The skylark html form library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-data","./forms","skylark-domx-velm","skylark-domx-query","./deserialize","./serialize-array","./serialize-object","./serialize"],function(e,r,a,i,l){return i.delegate(["deserialize","serializeArray","serializeObject","serialize"],a),l.fn.deserialize=l.wraps.wrapper_every_act(a.deserialize,a,a.deserialize),l.fn.serializeArray=l.wraps.wrapper_value(a.serializeArray,a,a.serializeArray,!0),l.fn.serializeObject=l.wraps.wrapper_value(a.serializeObject,a,a.serializeObject,!0),l.fn.serialize=l.wraps.wrapper_value(a.serialize,a,a.serialize),a});
//# sourceMappingURL=sourcemaps/main.js.map
