function SubmitThisForm(){$("#actionForm").valid()&&(openPopupManual("popup-loading",.8,!0),$("#actionForm").submit())}$.validator.addMethod("dategreaterthan",function(e,a,r){return Date.parse(e)>Date.parse($(r).val())}),$.validator.addMethod("localizedrequired",function(e,a,r){return""!=e}),$.validator.addMethod("localizedpropertiesmustmatchclienttrigger",function(e,a,r){var t=$("#"+r).val();return e==t}),$.validator.addMethod("localizedemail",function(e,a,r){var t=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return t.test(e)}),$.validator.addMethod("localizedrequiredbool",function(e,a,r){return a.checked}),$.validator.addMethod("lengthvalidator",function(e,a,r){var t=r.split(","),s=parseInt(t[0]),o=parseInt(t[1]),n=e.length;return o>=n&&n>=s}),$.validator.addMethod("regularexpression",function(e,a,r){var t=new RegExp(r);return t.test(e)}),$.validator.unobtrusive.adapters.add("localizedrequiredbool",["otherpropertyname"],function(e){e.rules.localizedrequiredbool="#"+e.params.otherpropertyname,e.messages.localizedrequiredbool=e.message}),$.validator.unobtrusive.adapters.add("localizedemail",["otherpropertyname"],function(e){e.rules.localizedemail="#"+e.params.otherpropertyname,e.messages.localizedemail=e.message}),$.validator.unobtrusive.adapters.add("dategreaterthan",["otherpropertyname"],function(e){e.rules.dategreaterthan="#"+e.params.otherpropertyname,e.messages.dategreaterthan=e.message}),$.validator.unobtrusive.adapters.add("localizedrequired",["otherpropertyname"],function(e){e.rules.localizedrequired=e.params.otherpropertyname,e.messages.localizedrequired=e.message}),$.validator.unobtrusive.adapters.add("localizedpropertiesmustmatchclienttrigger",["otherpropertyname"],function(e){e.rules.localizedpropertiesmustmatchclienttrigger=e.params.otherpropertyname,e.messages.localizedpropertiesmustmatchclienttrigger=e.message}),$.validator.unobtrusive.adapters.add("lengthvalidator",["otherpropertyname"],function(e){e.rules.lengthvalidator=e.params.otherpropertyname,e.messages.lengthvalidator=e.message}),$.validator.unobtrusive.adapters.add("regularexpression",["otherpropertyname"],function(e){e.rules.regularexpression=e.params.otherpropertyname,e.messages.regularexpression=e.message}),$(document).ready(function(){$(".password").passwordStrength({targetDiv:"#iSM",classes:Array("weak","medium","strong")})}),$.fn.passwordStrength=function(e){function a(e){var a=e.length;a<4&&(a=0),a>5&&(a=5);var r=e.replace(/[0-9]/g,""),t=e.length-r.length;t>3&&(t=3);var s=e.replace(/\W/g,""),o=e.length-s.length;o>3&&(o=3);var n=e.replace(/[A-Z]/g,""),i=e.length-n.length;i>3&&(i=3);var l=10*a-20+10*t+15*o+10*i;return l<0&&(l=0),l>100&&(l=100),l}return this.each(function(){var r=this;r.opts={},r.opts=$.extend({},$.fn.passwordStrength.defaults,e),r.div=$(r.opts.targetDiv),r.defaultClass=r.div.attr("class"),r.percents=r.opts.classes.length?100/r.opts.classes.length:100,v=$(this).keyup(function(){"undefined"==typeof el&&(this.el=$(this));var e=a(this.value),r=this.percents,t=Math.floor(e/r);100<=e&&(t=this.opts.classes.length-1),this.div.removeAttr("class").addClass(this.defaultClass).addClass(this.opts.classes[t])})})};
//# sourceMappingURL=maps/CustomMVC4Validation.js.map
