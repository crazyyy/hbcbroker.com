!function(e,a,t){function l(e){var a={},l=/^jQuery\d+$/;return t.each(e.attributes,function(e,t){t.specified&&!l.test(t.name)&&(a[t.name]=t.value)}),a}function r(e,l){var r=this,o=t(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),e===!0)return o[0].value=l;o.focus()}else r.value="",o.removeClass("placeholder"),r==a.activeElement&&r.select()}function o(){var e,a=this,o=t(a),d=this.id;if(""==a.value){if("password"==a.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(c){e=t("<input>").attr(t.extend(l(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":d}).bind("focus.placeholder",r),o.data({"placeholder-textinput":e,"placeholder-id":d}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",d).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var d,c,n="placeholder"in a.createElement("input"),i="placeholder"in a.createElement("textarea"),h=t.fn,u=t.valHooks;n&&i?(c=h.placeholder=function(){return this},c.input=c.textarea=!0):(c=h.placeholder=function(){var e=this;return e.filter((n?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},c.input=n,c.textarea=i,d={get:function(e){var a=t(e);return a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":e.value},set:function(e,l){var d=t(e);return d.data("placeholder-enabled")?(""==l?(e.value=l,e!=a.activeElement&&o.call(e)):d.hasClass("placeholder")?r.call(e,!0,l)||(e.value=l):e.value=l,d):e.value=l}},n||(u.input=d),i||(u.textarea=d),t(function(){t(a).delegate("form","submit.placeholder",function(){var e=t(".placeholder",this).each(r);setTimeout(function(){e.each(o)},10)})}),t(e).bind("beforeunload.placeholder",function(){t(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);
//# sourceMappingURL=maps/jquery_005.js.map
