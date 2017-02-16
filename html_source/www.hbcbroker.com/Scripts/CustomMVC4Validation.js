/* File Created: January 16, 2012 */

// Value is the element to be validated, params is the array of name/value pairs of the parameters extracted from the HTML, element is the HTML element that the validator is attached to
$.validator.addMethod("dategreaterthan", function (value, element, params) {
    return Date.parse(value) > Date.parse($(params).val());
});

$.validator.addMethod("localizedrequired", function (value, element, params) {
   
     return value != "";
});

$.validator.addMethod("localizedpropertiesmustmatchclienttrigger", function (value, element, params) {
    var startvalue = $('#' + params).val();

    return (value == startvalue);
   
});

$.validator.addMethod("localizedemail", function (value, element, params) {   
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(value);

});

$.validator.addMethod("localizedrequiredbool", function (value, element, params) {

    return element.checked;

});

$.validator.addMethod("lengthvalidator", function (value, element, params) {
    var arr = params.split(',');
    var minLength = parseInt(arr[0]);
    var maxLength = parseInt(arr[1]);
    var currentLength = value.length;
    return maxLength >= currentLength && currentLength >= minLength;

});

$.validator.addMethod("regularexpression", function (value, element, params) {
    var filter = new RegExp(params);
    return filter.test(value);
});


$.validator.unobtrusive.adapters.add("localizedrequiredbool", ["otherpropertyname"], function (options) {
    options.rules["localizedrequiredbool"] = "#" + options.params.otherpropertyname;
    options.messages["localizedrequiredbool"] = options.message;
});


$.validator.unobtrusive.adapters.add("localizedemail", ["otherpropertyname"], function (options) {
    options.rules["localizedemail"] = "#" + options.params.otherpropertyname;
    options.messages["localizedemail"] = options.message;
});


$.validator.unobtrusive.adapters.add("dategreaterthan", ["otherpropertyname"], function (options) {
    options.rules["dategreaterthan"] = "#" + options.params.otherpropertyname;    
    options.messages["dategreaterthan"] = options.message;
});

$.validator.unobtrusive.adapters.add("localizedrequired", ["otherpropertyname"], function (options) {
    options.rules["localizedrequired"] =  options.params.otherpropertyname;
    options.messages["localizedrequired"] = options.message;
});

$.validator.unobtrusive.adapters.add("localizedpropertiesmustmatchclienttrigger", ["otherpropertyname"], function (options) {
    options.rules["localizedpropertiesmustmatchclienttrigger"] = options.params.otherpropertyname;
    options.messages["localizedpropertiesmustmatchclienttrigger"] = options.message;
});

$.validator.unobtrusive.adapters.add("lengthvalidator", ["otherpropertyname"], function (options) {
    options.rules["lengthvalidator"] = options.params.otherpropertyname;
    options.messages["lengthvalidator"] = options.message;
});

$.validator.unobtrusive.adapters.add("regularexpression", ["otherpropertyname"], function (options) {
    options.rules["regularexpression"] = options.params.otherpropertyname;
    options.messages["regularexpression"] = options.message;
});


function SubmitThisForm() {
    if ($('#actionForm').valid()) {
        openPopupManual('popup-loading', 0.8, true);
        $('#actionForm').submit();

    }
}


$(document).ready(function() {
    $('.password').passwordStrength({ targetDiv: '#iSM', classes: Array('weak', 'medium', 'strong') });
});


$.fn.passwordStrength = function (options) {
    return this.each(function () {
        var that = this; that.opts = {};
        that.opts = $.extend({}, $.fn.passwordStrength.defaults, options);

        that.div = $(that.opts.targetDiv);
        that.defaultClass = that.div.attr('class');

        that.percents = (that.opts.classes.length) ? 100 / that.opts.classes.length : 100;

        v = $(this)
		        .keyup(function () {
		            if (typeof el == "undefined")
		                this.el = $(this);
		            var s = getPasswordStrength(this.value);
		            var p = this.percents;
		            var t = Math.floor(s / p);

		            if (100 <= s)
		                t = this.opts.classes.length - 1;

		            this.div
				        .removeAttr('class')
				        .addClass(this.defaultClass)
				        .addClass(this.opts.classes[t]);

		        })
    });

    function getPasswordStrength(H) {
        var D = (H.length);
        if (D < 4) { D = 0 }
        if (D > 5) {
            D = 5
        }
        var F = H.replace(/[0-9]/g, "");
        var G = (H.length - F.length);
        if (G > 3) { G = 3 }
        var A = H.replace(/\W/g, "");
        var C = (H.length - A.length);
        if (C > 3) { C = 3 }
        var B = H.replace(/[A-Z]/g, "");
        var I = (H.length - B.length);
        if (I > 3) { I = 3 }
        var E = ((D * 10) - 20) + (G * 10) + (C * 15) + (I * 10);
        if (E < 0) { E = 0 }
        if (E > 100) { E = 100 }
        return E
    }
};