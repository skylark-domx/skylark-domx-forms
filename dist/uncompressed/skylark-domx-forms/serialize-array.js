define([
  "skylark-langx/langx",
  "skylark-domx-data",
  "./forms"
],function(langx,datax,forms){
    function serializeArray(formElm) {
        var name, type, result = [],
            add = function(value) {
                if (value.forEach) return value.forEach(add)
                result.push({ name: name, value: value })
            },
            elements;
        if (formElm.elements) {
            elements = formElm.elements;
        } else if (langx.isArrayLike(formElm)) {
            elements = formElm;
        } else {
            elements = [formElm];
        }
        langx.each(elements, function(_, field) {
            type = field.type, name = field.name
            if (name && field.nodeName.toLowerCase() != 'fieldset' &&
                !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
                ((type != 'radio' && type != 'checkbox') || field.checked))
                add(datax.val(field))
        })
        return result
    };

    return forms.serializeArray = serializeArray;
});
