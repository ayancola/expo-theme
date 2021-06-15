<?php
    include 'common/config.inc.php';

    $error = $_GET['e'];

    $isWeixin=strstr($_SERVER['HTTP_USER_AGENT'],'MicroMessenger');
    // if($isWeixin!==false){$error=-12;}
    //dg(strstr($_SERVER['HTTP_USER_AGENT'],'MicroMessenger'));
    
?>
<!doctype html>
<html>
<head>
    <title>建馆快速登录</title>
    <? include('head.php'); ?>
    <link href="css/index.css" rel="stylesheet" type="text/css">
    <link href="css/login.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="login-box white" id="login-box">
    <div class="fl">
        <div class="m">
            <div class="login">
                <p class="f-24 c-014bbf text-left">ALUMINIUM+ <br/>EXPO ONLINE</p>
                <h3 class="f-20 c-000 mt-5 text-left">建馆快速登录</h3>
                <div class="logintype_input mt-50">
                    
                    <!--<form action="/kaccount/index.php?l=1<? echo (isset($_GET['error']) && (int)$_GET['error'] != 0 ? "&error=".(int)$_GET['error'] : "").(isset($_GET['logout']) && (int)$_GET['logout'] != 0 ? "&logout=".(int)$_GET['logout'] : "");?>" id="form1" name="form1" method="post" onSubmit="return Check();">
                        <ul>
                        <? if($isWeixin!==false){?>
                            <li>请使用电脑浏览器打开，建议使用：谷歌浏览器，火狐浏览器，遨游浏览器4.9及360浏览器8.1版以上版本操作使用，不支持使用微信浏览器。</li>
                        <? }else{?>
                            <li>
                                <div class="input-box phone">
                                <input id="l_phone" type="tel" name="account" maxlength="11" value="" placeholder="请输入手机号码" oninput="if( this.value.length > 11 )  this.value = this.value.slice(0,11)" ></div>
                            </li>
                            <li class="yx_box">
                                <div class="input-box yzm">
                                    <input type="text" maxlength="5" id="cvcode" name="vCode" placeholder="请输入验证码">
                                    <div id="getvcode2" class="getvcode" onclick="sendRegSMSCode();">获取验证码</div>
                                </div>
                            </li>
                        <? }?>
                         -->
                            <!-- <li>
                                <div class="yz-btn"><a href="javascript:;" onclick="showSlidevode()">点击按钮进行验证</a></div>
                            </li> --><!--
                        </ul>
                        
                        <input type="submit" value="登录" class="ButtonV1" id="loginsend">
                        
                    </form>
                    <div id="ewm-login" >
                        <div class="ewm"><img src="<?php echo 'qrcode.php';?>" alt="" onclick='$(this).attr("src","qrcode.php?t=" + Math.random());'></div>
                        <p class="f-16 c-333 block mt-10">点击二维码进行刷新</p>
                        <p class="f-16 c-333 block mt-10">微信扫一扫登录</p>
                    </div>
                    <a href="/#joinform" class="f-14 mt-20 c-1f74f6 block">还没注册？马上免费入驻</a>
                    <a href="javascript:;" id="show-ewm" class="f-14 mt-10 c-1f74f6 block">微信登录</a>
                    <a href="javascript:;" id="phone-login" class="f-14 mt-10 c-1f74f6 block">验证码登录</a>
                    -->
                    <div class="newSiteAlert">
                        <style>
                        .newSiteAlert{color:#666;font-size:14px;line-height:1.75;}
                        .newSiteAlert a{text-align:center;line-height:35px}
                        </style>
                        <br>
                        <svg t="1616036553040" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3889" width="100" height="100"><path d="M64.218074 560.795033v404.038715" fill="#c6e7fb" p-id="3890"></path><path d="M844.200096 165.489976h-674.289776c-59.112737 0-107.030123 47.928089-107.030123 107.030124v625.419821s37.460543 82.948345 133.787654 37.460543l160.416749-100.972218h487.115496c59.102034 0 107.030123-47.928089 107.030123-107.030123v-454.878023c0-59.112737-47.928089-107.030123-107.030123-107.030124z m32.109037 561.908147c0 17.702782-14.406255 32.109037-32.109037 32.109037H335.475218L161.091038 869.266551c-9.761147 4.174175-15.786943 4.837762-18.644647 4.837762a10.360516 10.360516 0 0 1-4.645107-1.113114V272.5201c0-17.702782 14.406255-32.109037 32.109036-32.109037h674.289776c17.702782 0 32.109037 14.406255 32.109037 32.109037v454.878023z" fill="#c6e7fb" p-id="3891"></path><path d="M347.8479 453.786316a37.460543 37.460543 0 0 1 0-74.921086h353.199406a37.460543 37.460543 0 1 1 0 74.921086h-353.199406zM658.235257 579.11859a37.460543 37.460543 0 0 1-37.460543 37.460543H428.120493a37.460543 37.460543 0 1 1 0-74.921086h192.654221a37.460543 37.460543 0 0 1 37.460543 37.460543z" fill="#c6e7fb" p-id="3892"></path></svg>
                        <br>
                        <p>云展已全面升级，请点击以下按钮登录。</p>
                        <p><small>系统将在3秒后自动跳转...</small></p>
                        <p><a class="ButtonV1" href="https://www.albiz.cn/account/login">立即登录</a></p>
                        <script>
                            $(function () {
                                setTimeout(function(){
                                    window.location.href="https://www.albiz.cn/account/login";
                                },3000);
                            });
                        </script>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
</div>
<script src="js/login.js" type="text/javascript"></script>
<script src="/libs/Hprose/ajs/hprose.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    var client3 = new HproseHttpClient('./server.php?', ['tosendRegSMSCode','register','getQrcodeLogin']);
    var reg_phone = /^1\d{10}$/;
    var timer1, timer2 = null;
    var upLoadClicktag = 0;
    var Er = '<?php echo $error;?>';
    

    $(function () {
        switch(Er) {
            case '-4':
                kalert("展馆不存在！");
                break;
            case '-5':
                kalert("帐号不存在，请重新输入！");
                break;
            case '-3':
                kalert("你的帐号暂时被系统管理员禁用，请与系统管理员联系！");
                break;
            case '-10':
                kalert("验证码错误");
                break;
            // case '-12':
            //     kalert("请使用电脑浏览器打开");
            //     break;
        }
    });

        function sendRegSMSCode() {
            var tel = $("#l_phone").val();
            clearInterval(timer2);
            if ($('input[name="account"]').val() == '') {
                $('input[name="account"]').focus();
                kalert('请输入手机号码');
                return false;
            }
            if (reg_phone.test(tel) == false || tel.length != 11) {
                kalert('手机号码格式错误');
                return false;
            }

            var obj = $(".getvcode");
            
                obj.css("background", "#ff9e4f");
                obj.css("color", "#fff");
                obj.html("请稍等");
                setTimeout(function () {
                    obj.removeAttr("style");
                    obj.html("获取验证码");
                }, 1000);
            client3.tosendRegSMSCode(tel, function (result) {
                //console.log(result);
                if (result > 0) { //显示倒计时样式
                    obj.removeAttr("style");
                    time2 = 60;
                        kalert('短信验证码已发送');
                    timer2 = setInterval(function () {
                        if (time2 <= 0) {
                            obj.removeAttr("disabled").css("pointer-events", "auto");
                            obj.css("background", "#1f74f6");
                            obj.css("color", "#fff");
                            obj.html("重新发送");
                        } else {
                            obj.attr("disabled", true).css("pointer-events", "none");
                            obj.css("background", "#f5f5f5");
                            obj.css("color", "#818181");
                            obj.html("剩余" + (time2) + "秒");
                            time2--;
                        }
                    }, 1000);
                } else {
                    obj.removeAttr("style");
                   kalert("发送失败,请1分钟后再重试");
                     //kalert(result.msg);
                }
            });
        }
        //登录

        function Check(){
            //console.log(111);
            check_login('true', function () {

            });
        }
        /*$('#loginsend').on('click', function () {
            check_login('true', function () {
                var arr = {};
                arr['account'] = $('#l_phone').val();
                arr['vCode'] = $('#cvcode').val();

               /!* ajax("", arr, function (res) {
                    kalert("登录成功");
                    setTimeout(function () {
                        //window.location.href = "user_info.php";
                    }, 2000);
                }, function (res) {
                    kalert(res.msg);
                });*!/
               
               $.post('/kaccount/index.php',arr,function (result) {

               });
            });
        })*/

    function getQrcodeLogin() {
        client3.getQrcodeLogin(function (result) {
            if(result.codes > 0){
                var form = $("<form method='post' action='/kaccount/index.php'><input name='account' value='"+result.mobile+"'><input name='vCode' value='"+result.vCode+"'></form>");
                form.appendTo("body").submit().remove();
            }
        });
    }

    setInterval(function(){getQrcodeLogin();},5000);

</script>
</body>
</html>
