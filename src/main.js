define([
    "skylark-langx",
    "skylark-domx-data",
	"./forms",
    "skylark-domx-velm",
    "skylark-domx-query",
    "./deserialize",
    "./serialize-array",
    "./serialize-object",
    "./serialize"
],function(langx,datax,forms,velm,$){

    // from ./data
    velm.delegate([
        "deserialize",
        "serializeArray",
        "serializeObject",
        "serialize"
    ], forms);

    $.fn.deserialize = $.wraps.wrapper_every_act(forms.deserialize, forms, forms.deserialize);
    $.fn.serializeArray = $.wraps.wrapper_map(forms.serializeArray, forms, forms.serializeArray,true);
    $.fn.serializeObject = $.wraps.wrapper_map(forms.serializeObject, forms, forms.serializeObject,true);
    $.fn.serialize = $.wraps.wrapper_value(forms.serialize, forms, forms.serialize);


/*
    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;
    var rcheckableType = ( /^(?:checkbox|radio)$/i );

    $.fn.serializeArray = function() {
        return this.map( function() {

            // Can add propHook for "elements" to filter or add form elements
            var elements = datax.prop(this, "elements" );
            return elements ? langx.makeArray( elements ) : this;
        } )
        .filter( function() {
            var type = this.type;

            // Use .is( ":disabled" ) so that fieldset[disabled] works
            return this.name && !$(this).is( ":disabled" ) &&
                rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                ( this.checked || !rcheckableType.test( type ) );
        } )
        .map( function( i, elem ) {
            var val = $(this).val();

            return val == null ?
                null :
                langx.isArray( val ) ?
                    langx.map( val, function( val ) {
                        return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                    } ) :
                    { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
        } ).get();
    };
*/

	return forms;
});