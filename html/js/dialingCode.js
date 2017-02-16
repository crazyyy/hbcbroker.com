function getDialingCode(){$("#PhoneAreaCode").val(""),$.post("/Tools/GetDialingCode?country="+$("#Country").val(),function(o){""!=$("#Country").val()&&""!=o&&null!=o&&$("#PhoneAreaCode").val(o)})}$(document).ready(function(){getDialingCode()});
//# sourceMappingURL=maps/dialingCode.js.map
