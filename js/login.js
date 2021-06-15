/*$('.register-btn').click(function () {
    $('.login-btn').removeClass('c-orange');
    $('.register-btn').addClass('c-orange');
    $('.forgot').hide();
    $('.login').hide();
    $('.register').fadeIn();
});*/

/*function getLoginCode(){
    ajax("getLoginCode", {}, function (res) {
        var img = res.data.img;
        $(".logintype_ewm .ewm img").attr("src", img);
        login_token = res.data.token;
        check_scaning();
    }, function (res) {
        kalert(res.msg);
    });
}*/
/*
$(".resetewm").click(function () {
    clearInterval(time3);
    getLoginCode();
    $('.logintype_input').hide();
    $('.logintype_ewm').fadeIn();
});*/
/*$('.changeInput').click(function () {
    $('.logintype_ewm').hide();
    $('.logintype_input').fadeIn();
});*/
    $('#ewm-login').hide();
    $('#phone-login').hide();
    $('#phone-login').click(function () {
        $('#ewm-login').hide();
        $('#show-ewm').show();
        $('#phone-login').hide();
        $('#form1').show();
    });
    $('#show-ewm').click(function () {
        $('#show-ewm').hide();
        $('#phone-login').show();
        $('#form1').hide();
        $('#ewm-login').show();
    })

/*$('.login-btn').click(function () {
    $('.login-btn').addClass('c-orange');
    $('.register-btn').removeClass('c-orange');
    $('.forgot').hide();
    $('.register').hide();
    $('.login').fadeIn();
});

$('#forgot-pwd').click(function () {
    $('.login-btn').removeClass('c-orange');
    $('.register-btn').removeClass('c-orange');
    $('.register').hide();
    $('.login').hide();
    $('.forgot').fadeIn();
});*/

function rePosition() {
    var div1 = document.getElementById('login-box');
    div1.style.left = (window.innerWidth - div1.offsetWidth) / 2 + 'px';
    div1.style.top = (window.innerHeight - div1.offsetHeight) / 2 + 'px';
}

rePosition();


var reg_pwd = /[\u4e00-\u9fa5]/ig;
var reg_phone = /^1[3456789]\d{9}$/;
var reg_worknum = /^\d{7,}$/;
var time3 = null;

function check_scaning() {
    if (login_token !== '') {
        time3 = setInterval(function () {
            ajax("check_login_qrcode", {"token": login_token}, function (res) {
                if (res.data.status == 0) {
                    kalert(res.data.msg);
                    clearInterval(time3);
                } else if (res.data.status == 3) {
                    kalert(res.data.msg);
                    clearInterval(time3);
                } else if (res.data.status == 2) {
                    clearInterval(time3);
                    kalert("扫码登录成功");
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
            }, function (res) {
                kalert(res.data.msg);
                clearInterval(time3);
            })
        }, 1000);
    }
}

function check_login(Slidevode, fun) {
    $('.m li>div').css("border-color", "");
    var l_Tel = $('#l_phone').val();
    if ($('#l_phone').val() == '') {
        $('#l_phone').parent().css("border-color", "#f5811a");
        kalert('请输入手机号码');
        return false;
    }
    else if (reg_phone.test(l_Tel) == false || l_Tel.length != 11) {
        $('#l_phone').parent().css("border-color", "#f5811a");
        kalert('请输入正确手机号码');
        return false;
    }
    else {
        fun();
    }
}

function check_Pwd(fun) {
    $('.m li>div').css("border-color", "");
    var l_Tel = $('#c_phone').val();
    if ($('#c_phone').val() == '') {
        $('#c_phone').parent().css("border-color", "#f5811a");
        kalert('请输入手机号码');
        return false;
    }
    else if (reg_phone.test(l_Tel) == false || l_Tel.length != 11) {
        $('#c_phone').parent().css("border-color", "#f5811a");
        kalert('请输入正确手机号码');
        return false;
    }
    else if ($("#cvcode").val() == "") {
        $('#cvcode').parent().css("border-color", "#f5811a");
        kalert('请输入短信验证码');
        return false;
    }
    else if ($('#c_pwd').val() == '') {
        $('#c_pwd').parent().css("border-color", "#f5811a");
        kalert('请输入新密码');
        return false;
    }
    else if (reg_pwd.test($('#c_pwd').val())) {
        kalert('密码英文或数字组合');
        return false;
    }
    else if ($('#c_qrpwd').val() == '') {
        $('#c_qrpwd').parent().css("border-color", "#f5811a");
        kalert('请再次输入新密码');
        return false;
    }
    else if ($('#c_qrpwd').val() != $('#c_pwd').val()) {
        $('#c_qrpwd').parent().css("border-color", "#f5811a");
        kalert('两次输入密码不一致');
        return false;
    }
    else {
        fun();
    }
}

function check_registered(fun) {
    $('.m li>div').css("border-color", "");
    var r_Tel = $('#r_phone').val();
    var w_num = $('#worknum').val();

    if ($('#u_name').val() == '') {
        $('#u_name').parent().css("border-color", "#f5811a");
        kalert('请输入用户名');
        return false;
    }
    else if ($('#r_phone').val() == '') {
        $('#r_phone').parent().css("border-color", "#f5811a");
        kalert('请输入手机号码');
        return false;
    }
    else if (reg_phone.test(r_Tel) == false || r_Tel.length != 11) {
        $('#r_phone').parent().css("border-color", "#f5811a");
        kalert('请输入正确手机号码');
        return false;
    } else if ($("#vcode").val() == "") {
        $('#vcode').parent().css("border-color", "#f5811a");
        kalert("请输入手机验证码");
        return false;
    }

    
    else if ($('#r_pwd').val() == '') {
        $('#r_pwd').parent().css("border-color", "#f5811a");
        kalert('请输入账号密码');
        return false;
    }
    // else if($('#r_pwd').val().length<6 || reg_pwd.test($('#r_pwd').val())){
    //     kalert('密码最少为6位的英文或数字');
    //     return false;
    // }
    else if ($('#r_qrpwd').val() == '') {
        $('#r_qrpwd').parent().css("border-color", "#f5811a");
        kalert('请确认输入密码');
        return false;
    }
    else if ($('#r_qrpwd').val() != $('#r_pwd').val()) {
        $('#r_qrpwd').parent().css("border-color", "#f5811a");
        kalert('两次输入密码不一致');
        return false;
    }
    else if ($("#vcode").val() == "") {
        $('#vcode').parent().css("border-color", "#f5811a");
        kalert('请输入短信验证码');
        return false;
    }
    else {
        fun();
    }
}
