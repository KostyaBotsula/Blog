

function registration() {
    var email = $("#email-sign-up-form");
    var login = $("#login-sign-up-form");
    var password = $("#password-sign-up-form");
    var passwordRepeated = $("#password-repeat-sign-up-form");
    changePopover(email, login, password, passwordRepeated);

    if (isEmpty(email) && isEmpty(login) && isEmpty(password)) {
    if (checkRepeatedPassword(password, passwordRepeated) && checkEmail(email) && checkPassword(password)) {
        var data = {
            "email":email.val(),
            "login":login.val(),
            "password":password.val()
        };
        $.ajax({
            data : JSON.stringify(data),
            type: "POST",
            url: "http://localhost:8080/api/accounts",
            cache: false,
            contentType: "application/json",
            processData: false,
            success: function(json) {
                window.location = 'index.html';
            },
            error: function(data) {
                if (/login/.test(data.responseText)) {
                    login.attr('data-content','Данный логин уже занят.');
                    login.popover('toggle');
                }
            }
        });
    }
    }
}

function checkPassword(password) {
    const passwordRegExp = /\S{4,}/;
    if (!passwordRegExp.test(password.val())) {
        password.attr('data-content','Минимум 4 символа');
        password.popover('toggle');
        return false;
    }
    password.popover('hide');
    return true;
}

function checkRepeatedPassword(password1, password2) {
    if (password1.val() != password2.val()) {
        password2.popover('show');
        return false;
    }
    password2.popover('hide');
    return true;
}

function checkEmail(email) {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegExp.test(email.val())) {
        email.attr('data-content','Неверный e-mail.');
        email.popover('toggle');
        return false;
    }
    email.popover('hide');
    return true;
}

function isEmpty(input) {
    if (input.val() == "") {
        input.popover('show');
        return false;
    }
    input.popover('hide');
    return true;
}

function changePopover(email, login, password, passwordRepeated) {
    if (window.matchMedia('(max-width: 767px)').matches) {
        email.attr('data-placement','top');
        login.attr('data-placement','top');
        password.attr('data-placement','top');
        passwordRepeated.attr('data-placement','top');
    }
}