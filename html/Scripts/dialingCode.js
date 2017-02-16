$(document).ready(function () {
    getDialingCode();
});

function getDialingCode() {
    $('#PhoneAreaCode').val('');
    $.post('/Tools/GetDialingCode?country=' + $('#Country').val(), function (data) {
             if($('#Country').val() != '' && data != '' && data!=null) {
                 $('#PhoneAreaCode').val(data);
            }
    });
}

