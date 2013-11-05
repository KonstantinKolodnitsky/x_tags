/**
 * Created with JetBrains PhpStorm.
 * User: vadym
 * Date: 1/10/13
 * Time: 11:33 PM
 * To change this template use File | Settings | File Templates.
 */

(function($){

$.x_tags=function(){
	return $.x_tags;
}

$.fn.extend({x_tags:function(){
	var u=new $.x_tags;
	u.jquery=this;
	return u;
}});


$.x_tags._import=function(name,fn){
	$.x_tags[name]=function(){
		var ret=fn.apply($.x_tags,arguments);
		return ret?ret:$.x_tags;
	}
}

$.each({


    removeTagId: function(field_id,id) {
        field = $('#'+field_id);
        var arr = field.val().split(',');

        var new_arr = [];
        for(i in arr){
            if (arr[i] == id) {
                delete arr[i];
            } else {
                new_arr[arr[i]] = arr[i];
            }
        }

        var new_str = '';
        var count = 0;
        for (i in new_arr) {
            if (count !== 0) new_str = new_str + ',';
            new_str = new_str + i;
            count++;
        }
        field.val(new_str);
    },

    addTag: function(field_id,tag_obj) {
        field = $('#'+field_id);
        var obj = $.parseJSON(field.val());

        for(i in tag_obj){
            obj[i] = tag_obj[i];
        }

        field.val($.univ.toJSON(obj));
    },

    populateConnectedTagsField: function(field_id,form_id) {
        var field = $('#' + field_id);
        field.val('');
        $('.main-tag-lister .' + form_id).each( function(i,el) {
            if (i==0) {comma = ''} else {comma = ','};
            field.val(
                field.val() + comma + $(this).text()
            );
        })
    }

},$.x_tags._import);

})(jQuery);