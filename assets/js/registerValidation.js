function submitRegisterForm() {
    $('#socialNetworkError').hide();
    var isValid = true;

    if (isUniqueEmail()) {
        $("#uniqueEmailError").hide();
    }
    else {
        isValid = false;
        $('#actionForm').valid();
        $("#uniqueEmailError").show();
    }

    if (isValid) {
        if ($('#actionForm').valid()) {
            openPopupManual('popup-loading', 0.8, true);
            $('#actionForm').submit();

        }
    }
}

function isUniqueEmail() {
    return isUniqueEmailRequest($('#Email').val());
}

function isUniqueEmailRequest(email) {
    var isValid = false;
    $.ajax({
        type: "POST",
        url: '/Account/IsUniqueEmail',
        dataType: "json",
        data: '&email=' + email,
        async: false,
        success: function (response) {
            isValid = response;
        }
    });
    return isValid;
}