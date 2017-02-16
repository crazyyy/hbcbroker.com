function submitLoginForm() {
    if (isValidLogin()) {
        $("#loginError").hide();
        $("#loginForm").submit();
    }
    else {
        $("#loginError").show();
    }
}

function isValidLogin() {
    var isValid = false;
    $.ajax({
        type: "POST",
        url: '/account/IsValidLogin',
        dataType: "json",
        data: '&userName=' + $('#UserName').val() + '&password=' + $('#LoginPassword').val(),
        async: false,
        success: function (response) {
            isValid = response;
        }
    });

    return isValid;
}

function submitMobileLoginForm() {
    if (isValidLoginMobile()) {
        $("#loginErrorMobile").hide();
        $("#mobileLoginForm").submit();
    }
    else {
        $("#loginErrorMobile").show();
    }
}

function isValidLoginMobile() {
    var isValid = false;
    $.ajax({
        type: "POST",
        url: '/account/IsValidLogin',
        dataType: "json",
        data: '&userName=' + $('#UserNameMobile').val() + '&password=' + $('#LoginPasswordMobile').val(),
        async: false,
        success: function (response) {
            isValid = response;
        }
    });

    return isValid;
}