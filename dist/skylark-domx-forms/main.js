/**
 * skylark-domx-forms - The skylark html form library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-data","./forms","skylark-domx-velm","skylark-domx-query","./deserialize","./serialize-array","./serialize-object","./serialize"],function(e,r,a,i,s){return i.delegate(["deserialize","serializeArray","serializeObject","serialize"],a),s.fn.deserialize=s.wraps.wrapper_every_act(a.deserialize,a,a.deserialize),s.fn.serializeArray=s.wraps.wrapper_map(a.serializeArray,a,a.serializeArray,!0),s.fn.serializeObject=s.wraps.wrapper_map(a.serializeObject,a,a.serializeObject,!0),s.fn.serialize=s.wraps.wrapper_value(a.serialize,a,a.serialize),a});
//# sourceMappingURL=sourcemaps/main.js.map
