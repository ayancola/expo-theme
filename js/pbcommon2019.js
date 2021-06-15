var HOST_PUBLIC = window.HOST_PUBLIC || "//public.pbinfo.cn/";
//var HOST_PUBLIC = "//public.pbinfo.cn/";
var win = null;
var st = null;
//var HOST_PUBLIC = "./";

function loadCss(url) {
    var _css = document.createElement('link');
    _css.setAttribute('rel', 'stylesheet');
    _css.setAttribute('type', 'text/css');
    _css.setAttribute('href', url);
    document.getElementsByTagName("head")[0].appendChild(_css);
    //console.log(url);
    return true;
}

function loadScript(url, callback) {
    var _script = document.createElement('script');
    _script.setAttribute('charset', 'utf-8');
    _script.setAttribute('type', 'text/javascript');
    _script.setAttribute('src', url);
    document.getElementsByTagName("head")[0].appendChild(_script);
    if (_script.readyState) {
        _script.onreadystatechange = function () {
            if (_script.readyState == "loaded" || _script.readyState == "complete") {
                _script.onreadystatechange = null;
                typeof callback == 'function' ? callback() : "";
            }
        }
    } else {
        _script.onload = function () {
            typeof callback == 'function' ? callback() : "";
        }
    }
    //console.log(url);
    return true;
}

function setCss(R, Q) {
    var S = document.styleSheets;
    if (!S || S.length <= 0) {
        var P = document.createElement("STYLE");
        P.type = "text/css";
        var T = document.getElementsByTagName("HEAD")[0];
        T.appendChild(P)
    }
    S = S[S.length - 1];
    try {
        S.addRule(R, Q);
    } catch (e) {

        var l = S.length - 1;
        for (i = l; i >= 0; i--) {
            try {
                if (S[i].cssRules && S[i].cssRules.length == 0) {
                    S = S[i];
                    S.insertRule(R + " { " + Q + " }", S.cssRules.length);
                    break;
                }
            } catch (e) {

            }
        }
        //S.insertRule(R + " { " + Q + " }", S.cssRules.length);
    }
}
if (!window.layx) {
    loadScript(HOST_PUBLIC + "assets/js/layx/layx.js" + (window.JS_VER || "?" + Math.random()));
    loadCss(HOST_PUBLIC + 'assets/js/layx/layx.min.css');
    //document.write("<sc" + "ript type='text/java" + "script' src='" + HOST_PUBLIC + "assets/js/layx/layx.min.js'>"+"<"+"/sc" + "ript>");
    //document.write('<li'+'nk href="' + HOST_PUBLIC + 'assets/js/layx/layx.min.css" rel="styl'+'esheet" type="text/css" />');
}!(function (global) {
    var extend,
        _extend,
        _isObject;
    _isObject = function (o) {
        return Object.prototype.toString.call(o) === '[object Object]';
    };
    _extend = function self(destination, source) {
        var property;
        for (property in destination) {
            if (destination.hasOwnProperty(property)) {
                if (_isObject(destination[property]) && _isObject(source[property])) {
                    self(destination[property], source[property]);
                }
                if (source.hasOwnProperty(property)) {
                    continue;
                } else {
                    source[property] = destination[property];
                }
            }
        }
    };
    extend = function () {
        var arr = arguments,
            result = {},
            i;
        if (!arr.length)
            return {};
        for (i = arr.length - 1; i >= 0; i--) {
            if (_isObject(arr[i])) {
                _extend(arr[i], result);
            }
        }
        arr[0] = result;
        return result;
    };
    global.configClone = extend;
})(window);

function kFrameGroup(groupWinArr, _selectIndex, _options) {
    if (window.layx) {
        layx.destroy('alertId');
        var defaults = {
            //id: "kFrame_id",
            mergeTitle: false,
            title: '',
            url: '',
            func: '',
            width: 800,
            height: 600,
            minWidth: 200,
            minHeight: 200,
            position: 'ct',
            statusBar: true,
            storeStatus: false,
            shadable: false, //遮罩、阻隔窗口
            shadeDestroy: false, //点击空白地方关闭
            alwaysOnTop: false, //是否置顶窗口
            stickMenu: false, // 可选，是否显示切换置顶按钮
            useFrameTitle: false, //自动获取iframe标题
            buttonKey: 'ctrl+enter'
        };
        var options = configClone(defaults, (_options || {}));
        var _saveBtn = (typeof options.saveBtn == 'undefined' ? 1 : options.saveBtn);
        if (typeof options.func == "function") {
            if (_saveBtn == 1) {
                options.buttons = [
                    {
                        label: '确定',
                        //id: 'submit',
                        callback: function (id, button, event) {
                            //Dg(id);
                            var frameId = _win.groupCurrentId;
                            //Dg(frameId);
                            var func = options['func'];
                            __win = layx.getGroupFrameContext(id, frameId);
                            //Dg(__win);
                            closeWinFlag = 1;
                            func(__win, id);
                        },
                        classes: 'custom-button'
                    },
                    
                    {
                        label: '刷新',
                        //id: 'refresh',
                        callback: function (id, button, event) {
                            var frameId = _win.groupCurrentId;
                            layx.reloadGroupFrame(id, frameId);
                        }
                    },
                    {
                        label: '取消',
                        //id: 'cancel',
                        callback: function (id, button, event) {
                            layx.destroy(id);
                        }
                    }
                ];
            } else {
                options.buttons = [
                    {
                        label: '确定',
                        //id: 'submit',
                        callback: function (id, button, event) {
                            //Dg(id);
                            var frameId = _win.groupCurrentId;
                            //Dg(frameId);
                            var func = options['func'];
                            __win = layx.getGroupFrameContext(id, frameId);
                            //Dg(__win);
                            closeWinFlag = 1;
                            func(__win, id);
                        },
                        classes: 'custom-button'
                    },
                    {
                        label: '刷新',
                        //id: 'refresh',
                        callback: function (id, button, event) {
                            var frameId = _win.groupCurrentId;
                            layx.reloadGroupFrame(id, frameId);
                        }
                    },
                    {
                        label: '取消',
                        //id: 'cancel',
                        callback: function (id, button, event) {
                            layx.destroy(id);
                        }
                    }
                ];
            }
        } else {
            if (options.buttons2) {
                options.buttons = options.buttons2;
            } else {
                options.buttons = [
                    {
                        label: '刷新',
                        //id: 'refresh',
                        callback: function (id, button, event) {
                            var frameId = _win.groupCurrentId;
                            layx.reloadGroupFrame(id, frameId);
                        }
                    },
                    {
                        label: '取消',
                        //id: 'cancel',
                        callback: function (id, button, event) {
                            layx.destroy(id);
                        }
                    }
                ];
            }
        }
        selectIndex = _selectIndex || 0;
        _win = layx.group('kFrameGroup_id', groupWinArr, selectIndex, options);
        return _win;
    } else {
        alert('未加载layx.js');
        return {};
    }
}

function kFrame(_options) {
    //console.log(window.layx);
    if (window.layx) {
        layx.destroy('alertId');

        var defaults = {
            id: "kFrame_id",
            title: '',
            url: '',
            func: '',
            width: 800,
            height: 600,
            minWidth: 200,
            minHeight: 200,
            position: 'ct',
            statusBar: true,
            storeStatus: false,
            shadable: false, //遮罩、阻隔窗口
            shadeDestroy: false, //点击空白地方关闭
            alwaysOnTop: false, //是否置顶窗口
            stickMenu: false, // 可选，是否显示切换置顶按钮
            useFrameTitle: false, //自动获取iframe标题
            buttonKey: 'ctrl+enter'
        };
        var _defaults = {};
        _options = _options || {};
        if (_options.top && _options.top == 1) {
            layx = top.layx;
            _defaults = {
                shadable: true,
                alwaysOnTop: true,
                stickMenu: false
            };
        }

        var options = configClone(defaults, _defaults, _options || {});
        var _id = options.id;
        var _title = options.title;
        var _url = options.url;
        var _saveBtn = (typeof options.saveBtn == 'undefined' ? 1 : options.saveBtn);

        var w = $(top.window).width(),
            h = $(top.window).height();
        if (options.width > w - 50) options.width = parseInt(w * 0.9);
        if (options.height > h - 20) options.height = parseInt(h * 0.85);

        if (typeof options.func == "function") {
            if (_saveBtn == 1) {
                options.buttons = [
                    {
                        label: '确定',
                        id: 'submit',
                        callback: function (id, button, event) {
                            var func = options['func'];
                            __win = layx.getFrameContext(id);
                            closeWinFlag = 1;
                            func(__win, id);
                        },
                        classes: 'custom-button'
                    },

                    {
                        label: '刷新',
                        id: 'refresh',
                        callback: function (id, button, event) {
                            layx.reloadFrame(id);
                        }
                    },
                    {
                        label: '取消',
                        id: 'cancel',
                        callback: function (id, button, event) {
                            layx.destroy(id);
                        }
                    }
                ];
            } else {
                options.buttons = [
                    {
                        label: '确定',
                        id: 'submit',
                        callback: function (id, button, event) {
                            var func = options['func'];
                            __win = layx.getFrameContext(id);
                            closeWinFlag = 1;
                            func(__win, id);
                        },
                        classes: 'custom-button'
                    },
                    {
                        label: '刷新',
                        id: 'refresh',
                        callback: function (id, button, event) {
                            layx.reloadFrame(id);
                        }
                    },
                    {
                        label: '取消',
                        id: 'cancel',
                        callback: function (id, button, event) {
                            layx.destroy(id);
                        }
                    }
                ];
            }
        } else {
            if (options.buttons2) {
                options.buttons = options.buttons2;
            } else {
                options.buttons = [
                    {
                        label: '刷新',
                        id: 'refresh',
                        callback: function (id, button, event) {
                            layx.reloadFrame(id);
                        }
                    },
                    {
                        label: '取消',
                        id: 'cancel',
                        callback: function (id, button, event) {
                            layx.destroy(id);
                        }
                    }
                ];
            }
        }
        _win = layx.iframe(_id, _title, _url, options);
        //console.log(_win);
        /*$(window).resize(function() {
        	var postion = layx.getCurrentPostion(_id);
        	//console.log(postion);
        	layx.setPosition(_id,postion,true);
        });*/
        return _win;
    } else {
        alert('未加载layx.js');
        return {};
    }
}

function kContent(_title, loadfunc, okfunc, _options) {
    if (window.layx) {
        layx.destroy('alertId');
        var defaults = {
            id: "kContent_id",
            title: _title,
            width: 600,
            height: 400,
            minWidth: 200,
            minHeight: 100,
            position: 'ct',
            func: '',
            top: 0,
            statusBar: true,
            storeStatus: false,
            shadable: false, //遮罩、阻隔窗口
            shadeDestroy: false, //点击空白地方关闭
            alwaysOnTop: false, //是否置顶窗口
            stickMenu: false, // 可选，是否显示切换置顶按钮
            useFrameTitle: false, //自动获取iframe标题
            buttonKey: 'enter',
            buttons: [
                {
                    label: '确定',
                    callback: function (id, button, event) {
                        okfunc(id);
                    },
                    classes: 'custom-button'
                },
                {
                    label: '取消',
                    callback: function (id, button, event) {
                        if (typeof kContent_cancel_callback == "function") kContent_cancel_callback();
                        layx.destroy(id);
                    }
                }
            ]
        }
        var _defaults = {};
        _options = _options || {};
        if (_options.top && _options.top == 1) {
            layx = top.layx;
            _defaults = {
                shadable: true,
                alwaysOnTop: true,
                stickMenu: false
            };
        }
        var options = configClone(defaults, _defaults, _options || {});
        if (options.id != 'kContent_id') {
            options.floatTarget = GE(options.id);
            options.floatDirection = 'bottom';
        }
        var _id = options.id;
        var content = (typeof loadfunc == 'function' ? "正在载入......" : loadfunc);

        _win = layx.html(_id, _title, content, options);
        typeof loadfunc == 'function' ? loadfunc(_id) : "";
        return _win;
    } else {
        alert('未加载layx.js');
        return {};
    }
}

function vl(_msg, _t) {
    var msg = _msg || "数据正在处理中，请稍后";
    if (window.layx) {
        if (st != null) clearTimeout(st);
        layx.destroy('alertId');
        layx.load('loadId', msg);
        if (typeof _t == 'undefined') {
            st = setTimeout(function () {
                layx.destroy('loadId');
            }, 10000);
        }
    }
}

function hl() {
    if (window.layx) {
        layx.destroy('loadId');
    }
}

function kalert(msg, func) {
    if (window.layx) {
        layx.destroy('alertId');
        var tArr = (msg + '').split("@");
        msg = tArr[0];
        blurObj = tArr[1] || "";

        win = layx.msg(msg, {
            id: 'alertId',
            dialogIcon: 'warn',
            autodestroy: 3000,
            position: 'ct',
            width: 300,
            minHeight: 50,
            buttonKey: 'enter',
            event: {
                /*onexist: function (layxWindow, winform) {
                	layx.destroy(winform.id);
                }*/
                ondestroy: {
                    after: function () {
                        if (blurObj != '') {
                            if ($("#" + blurObj).length > 0) {
                                $("#" + blurObj).eq(0).focus();
                            }
                        }
                        typeof func == 'function' ? func() : "";
                    }
                }
            }
        }); //

    } else {
        alert(msg);
    }
}

function kconfirm(msg, func, _options, func_cancel) {
    if (window.layx) {
        layx.destroy('alertId');
        layx.confirm('', msg, null, {
            id: "confirmId",
            buttonKey: 'enter',
            buttons: [
                {
                    label: '确定',
                    callback: function (id, button, event) {
                        layx.destroy("confirmId");
                        (typeof func == 'function') ? func(): "";
                    }
                },
                {
                    label: '关闭',
                    callback: function (id, button, event) {
                        (typeof func_cancel == 'function') ? func_cancel(): "";
                        layx.destroy("confirmId");
                    }
                }
            ]
        });
    } else {
        if (confirm(msg) == true) {
            (typeof func == 'function') ? func(): "";
        } else {
            (typeof func_cancel == 'function') ? func_cancel(): "";
        }
    }
}

function ktip(msg, target, func) {
    if (window.layx) {
        //layx.ktip(msg, target,func, _options)
        layx.destroy('alertId');
        kconfirm(msg, func, {
            floatTarget: GE(target),
            floatDirection: 'bottom'
        });
    } else {
        if (confirm(msg) == true) {
            (typeof func == 'function') ? func(): "";
        }
    }
}

function closeWin(id) {
    if (window.layx && closeWinFlag == 1) {
        layx.destroy(id);
    }
}

function checkMobile(str) {
    var re = /^1\d{10}$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

function GE(s) {
    return typeof s == 'object' ? s : document.getElementById(s);
}

function Obj(str) {
    return document.form1.elements[str];
}

function Val(str) {
    return trim(Obj(str).value);
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//刷新自己函数
function rfresh(n) {
    setTimeout(function () {
        window.location.reload();
    }, n || 2000);
}

function vLoading() {
    $("body").append(
        "<div id='mark'><i class='ace-icon fa fa-spinner fa-spin bigger-800 white pb_icon_center'></i></div>");
    st = window.setTimeout(function () {
        if ($("#mark").length > 0) $("#mark").remove();
    }, 5000);
}

function hLoading() {
    if (st != null) clearTimeout(st);
    $("#mark").remove();
}

function getPbFieldsVal(target, _spilt, _force) {
    var arr = {}
    var tArr = {};
    var radioObj = {};
    var is_break = 0;
    var spilt = _spilt || ",";
    var force = _force || 0;
    target.each(function (index, element) {
        var field = $(this).attr('name');
        var type = $(this).attr('type');

        if (typeof field != 'undefined' && field != "" && !$(this).prop("disabled")) //
        {
            var val = $.trim($(this).val());
            var pbRequireAlert = $(this).attr("pbRequireAlert") || "";
            var pbDefaultVal = $(this).attr("pbDefaultVal") || "";
            var pbFocusId = $(this).attr("pbFocusId") || "";

            if (((pbRequireAlert != "" && val == '') || (pbDefaultVal != '' && pbDefaultVal == val)) && force ==
                0) {
                arr['tips'] = pbRequireAlert;
                $(this).attr("readonly") == true ? "" : (pbFocusId != '' && $("#" + $(this).attr("pbFocusId")).length >
                0 ? arr['focus'] = $("#" + $(this).attr("pbFocusId")) : arr['focus'] = this);
                is_break = 1;
                return false; //中断循环
            }
            if (field.indexOf("[]") > -1) {
                var _field = field.replace("[]", "");
                typeof tArr[_field] == 'undefined' ? tArr[_field] = [] : "";
                if (type == 'checkbox') {
                    $(this).prop("checked") ? tArr[_field].push(val) : "";
                } else {
                    tArr[_field].push(val);
                }
            } else if (type == 'checkbox') {
                $(this).prop("checked") ? arr[field] = val : arr[field] = "";
            } else if (type == 'radio') {
                //console.log(this.checked);
                if ($(this).is(":checked")) {
                    arr[field] = val;
                }
                if (pbRequireAlert != "") {
                    radioObj[field] = pbRequireAlert;
                }
            } else {
                arr[field] = val;
                //console.log(field + " | " +val);
            }
        }
    });
    if (is_break == 0) //全部过晒再检查radio,以后再优化
    {
        for (var field in radioObj) {
            if (typeof arr[field] == 'undefined') {
                arr['tips'] = radioObj[field];
                //arr['focus'] = "#" + $("input[name='" + field + "']").attr("id");
                //arr['focus'] = $("input[name='" + field + "']");
                break;
            }
        }
    }
    for (var field in tArr) {
        arr[field] = tArr[field].join(spilt);
    }
    return arr;
}

function getPbValArr() {
    var arr = getPbFieldsVal($(".pb_fields"));
    //console.log(arr);
    return arr;
}

function _getPbValArr(dataArr, field, _spilt) {
    var spilt = _spilt || ",";
    var tArr = dataArr[field].split(spilt);
    var a = [];
    for (var k in tArr) {
        if ($.trim(tArr[k]) != '') {
            a.push($.trim(tArr[k]));
        }
    }
    return a.join(spilt);
}

function Dg(s) {
    console.log(s);
}