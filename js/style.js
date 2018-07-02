//init.js
var error = document.getElementById('error');
var musicArray =[];
function initMusic(){
    for(var i=0;i<1;i++){
        var music = document.getElementById('music0'+(i+1));
        musicArray.push(music);
        music.load();
    }
}

$('.zhua').click();


function ImgLoadingByFile(imgArray,loadPageID,loadTxtID,readyID,musicID,showpageID){
    if(sessionStorage.getItem("pageloaded")){
        $('#'+loadTxtID).html('100%');
        $('#'+loadTxtID).hide();
        $('#'+readyID).show();
        $('#'+loadPageID).one('click',function(){
            var timer = setTimeout(function(){
                $('.scaleOut').addClass('load-hide');
                $('#'+loadPageID).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $('#'+loadPageID).hide();
                    $('#'+showpageID).show();
                    Carousel.init();
                });

                initMusic();
                var player = document.getElementById(musicID);
                player.load();
                error.load();
                player.play();
                clearTimeout(timer);
            },500);
        });
    }else{
        var imgLoad = 0;
        if(imgArray.length>0){
            var imgTotal = imgArray.length;
            var percent = 0;
            var img = [];
            for(var i = 0;i<imgArray.length;i++){
                img[i] = new Image();
                img[i].src=imgArray[i];
                img[i].onload = function(){
                    imgLoad++;
                    percent = parseInt(imgLoad/imgTotal*100);
                    $('#'+loadTxtID).html(percent+'%');
                    if(percent>=100){
                      $('#'+loadTxtID).hide();
                        $('#'+readyID).show();
                        $('#'+loadPageID).one('click',function(){
                            var timer = setTimeout(function(){
                                initMusic();
                                var player = document.getElementById(musicID);
                                player.play();
                                error.load();
                                if(player.paused){
                                    player.play();
                                }
                                $('.scaleOut').addClass('load-hide');
                                $('#'+loadPageID).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                                    $('#'+loadPageID).hide();
                                    $('#'+showpageID).show();
                                    Carousel.init();
                                });
                                clearTimeout(timer);
                            },500);
                        });
                        sessionStorage.setItem("pageloaded", "true");
                    }
                }
            }
        }
    }
}


//页面rem
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
            // var clientWidth = $(".nwrapper").width();
        /*if (!clientWidth) return;*/
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(document).ready(function(e) {
$("body").css("visibility","visible");$("body").addClass("jbox");

$("input").focus(function(){
    $('#page-landscape').hide();
    $('#page-portrait').show();
});



});




setTimeout(function () {$("body").css("visibility","visible");$("body").addClass("jbox");}, 200);

//横屏 
function landscape(){
    //var w = window.innerWidth;
    //var h = window.innerHeight;
    var w = window.Utils.windowW();
    var h = window.Utils.windowH();
    $("body").css({"width":w,"height":h});
    $('#page-landscape').css({"width":w,"height":h});
    //$('#page-portrait').css({"width":w,"height":h});


    $('#page-landscape').show();
    $('#page-portrait').hide();
}
var firstInit = true;

//竖屏 750 1190
function portrait02(){
    var w = window.Utils.windowW();
    var h = window.Utils.windowH();
    $("body").css({"width":w,"height":h});
    $('#page-portrait').css({"width":w,"height":h});
    $('#pageContainer').css({"width":w,"height":h});
    //$('.load-page').css({"width":w,"height":h});
    $('#page-landscape').hide();
    $('#page-portrait').show();
    $('.start').css({'left':113/750*w+'px','top':1068/1206*h+'px'});
    //初始化加载 
    if(firstInit){
        var imgFile = [
            // './css/ww.woff',
            // './css/ww.woff2',
            './img/index_bt.png',
            './img/index_btbj.png',
            './img/jb2.png',
            './img/jh1.png',
            './img/jh2.png',
            './img/jh3.png',
            './img/jh4.png',
            './img/jh5.png',
            './img/jh6.png',
            './img/jhjb.png',
            './img/jhomebj.jpg',
            './img/jhww.png',
            './img/jljn.png',
            './img/jphbt.png',
            './img/jwwxx.png',
            './img/jzxrs.png',
            './img/j_gb.png',
            './img/j_index_bf1.png',
            './img/j_index_bf2.png',
            './img/j_index_bf3.png',
            './img/j_index_bf4.png',
            './img/j_index_bl1.png',
            './img/j_index_bl2.png',
            './img/j_index_br1.png',
            './img/j_index_br2.png',
            './img/j_index_br3.png',
            './img/j_index_br4.png',
            './img/j_index_bt1.png',
            './img/j_index_bt2.png',
            './img/j_index_c.png',
            './img/j_index_f.png',
            './img/j_index_t.png',
            './img/j_index_tx.png',
            './img/j_mrjc_bj.jpg',
            './img/j_mrjc_tb1.png',
            './img/j_mrjc_tb2.png',
            './img/j_qzq.png',
            './img/j_wdbb_b.png',
            './img/j_wdbb_bj.png',
            './img/j_wdbb_bj2.png',
            './img/j_wdbb_bj3.png',
            './img/j_wdbb_bt.png',
            './img/j_wdbb_bt1.png',
            './img/j_wdbb_bt2.png',
            './img/j_wdbb_tbt1.png',
            './img/j_wdbb_tbt2.png',
            './img/kft.png',
            './img/qd2.png',
            './img/qdt.png',
            './img/sjxbj.jpg',
            './img/sjxbj_lq.png',
            './img/tt.png',
            './img/welcomebj.jpg',
            './img/youxi_bt2.png',
            './img/yqbj.png',
            './img/yqqw.png',
            './img/yq_hy.png',
            './img/yq_pyq.png',
            './img/yq_t.png',
            './img/yxff.png',
            './img/zhongjiang_a.png',
            './img/fangjian_close.png',
            './img/fh1.png',
            './img/fh2.png',
            './img/fh3.png',
            './img/goods_more_bj.png',
            './img/goods_more_textbj.png',
            './img/index_bt.png',
            './img/index_btbj.png',
            './img/js0.png',
            './img/js1.png',
            './img/js10.png',
            './img/js11.png',
            './img/js12.png',
            './img/js13.png',
            './img/js14.png',
            './img/js15.png',
            './img/js16.png',
            './img/js17.png',
            './img/js18.png',
            './img/js19.png',
            './img/js2.png',
            './img/js20.png',
            './img/js21.png',
            './img/js22.png',
            './img/js23.png',
            './img/js24.png',
            './img/js25.png',
            './img/js26.png',
            './img/js27.png',
            './img/js28.png',
            './img/js29.png',
            './img/js3.png',
            './img/js30.png',
            './img/js4.png',
            './img/js5.png',
            './img/js6.png',
            './img/js7.png',
            './img/js8.png',
            './img/js9.png',
            './img/js_bj.png',
            './img/js_fx.png',
            './img/js_go.png',
            './img/new_bg.jpg',
            './img/phb_btl.png',
            './img/phb_btl_a.png',
            './img/phb_btr.png',
            './img/phb_btr_a.png',
            './img/phb_jl.png',
            './img/phb_ww.png',
            './img/qd.png',
            './img/recharge1.png',
            './img/recharge2.png',
            './img/recharge3.png',
            './img/recharge4.png',
            './img/recharge5.png',
            './img/recharge_bj.png',
            './img/set_bj.png',
            './img/set_bz.png',
            './img/set_lxkf.png',
            './img/set_off.png',
            './img/set_off_a.png',
            './img/set_on.png',
            './img/set_on_a.png',
            './img/set_yx.png',
            './img/set_yy.png',
            './img/shou_l.png',
            './img/shou_r.png',
            './img/t_bj.png',
            './img/weal_img.png',
            './img/youxi_bt1.png',
            './img/youxi_bt2.png',
            './img/youxi_f1.png',
            './img/youxi_f2.png',
            './img/youxi_f3.png',
            './img/youxi_kuan.png',
            './img/youxi_shou1.png',
            './img/youxi_shou2.png',
            './img/youxi_topbj.png',
            './img/yx_bbj.png',
            './img/yx_cbj.png',
            './img/yx_frg.png',
            './img/zhongjiang.png',
            './img/zhongjiang_a.png',
            './img/zhua1.png',
            './img/zhua2.png',
            './img/zhua3.png',
            './img/zhua4.png',
            './img/zhua5.png',
            './img/zhua6.png',
            './img/zhua7.png',
            './img/zhua8.png',
        ];
        ImgLoadingByFile(imgFile,'loadingPage','img-loading-txt','readyGo','musicStar','pageContainer');
        firstInit = false;
    }

    
    //音乐
    // $(".open").click(function(){
    //     musicStar.pause();
    //     $(this).css("display","none");
    //     $(this).removeClass('show');
    //     $(".clock").css("display","block");
    // });
    // $(".clock").click(function(){
    //     musicStar.play();
    //     $(this).css("display","none");
    //     $(".open").addClass('show');
    //     $(".open").css("display","block");
    // });

}
(function() {
    "use strict";

    function Utils() {
    }

    Utils.isWeiXin = function(){
        return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
    };
    Utils.isQQ = function(){
        return navigator.userAgent.ua.match(/QQ\/([\d\.]+)/);
    };
    Utils.isQZone = function(){
        return navigator.userAgent.ua.indexOf("Qzone/") !== -1;
    };

    Utils.isIos = function() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    };
    Utils.isIPhone = function() {
        return navigator.userAgent.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
    };
    Utils.isIpad = function() {
        return navigator.userAgent.indexOf('iPad') > -1;
    };
    Utils.isAndroid = function() {
        var u = navigator.userAgent;
        return navigator.userAgent.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    };
    Utils.isMobile = function() {
        // var u = navigator.userAgent;
        return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i) != null;
    };

    // ## 屏幕方向
    Utils.isPortrait = function() {
        if (!Utils.isMobile()) {
            //alert(111);
            return true;

        }
        // 安卓版 微信里面 只用判断 width 和 height
        if (Utils.isAndroid() && Utils.isWeiXin()) {
            if (Utils.windowW() < Utils.windowH()) {
                //alert(22);
                return true;

            } else {
                //alert(331);
                return false;

            }
        }
        var orientation = window['orientation'];
        if (orientation||orientation==0) {
            if (orientation == 90 || orientation == -90) {
                //alert(4442);
                return false;

            }else{
                //alert(555111);
                return true;

            }
        } else {
            if (Utils.windowW() < Utils.windowH()) {
                //alert(666111);
                return true;

            } else {
                //alert(777111);
                return false;

            }
        }
    };
    // ## jquery 获取 window 的宽度
    Utils.windowW = function() {
        // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        return $(window).width();
    };
    // ## jquery 获取 window 的高度
    Utils.windowH = function() {
        return $(window).height();
    };
    window.Utils = Utils;
}());
$(function(){
    onResize();
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", onResize, false);
    }else{
        window.addEventListener( "resize", onResize, false);
    }
});

function  onResize() {
    if(Utils.isPortrait()){
        if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){

            var timer = setTimeout(function(){
                portrait02();

                clearTimeout(timer);
            },200);
        }else{
            portrait02();
        }
    } else {
        if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
            var timer = setTimeout(function(){
                landscape();
                clearTimeout(timer);
            },200);
        }else{
            landscape();
        }
    }
}



//接口地址
var URLS = {};
URLS.SERVER_URL = "http://ty.icecn.net/index/";
URLS.grabGoods = "Activity/grabGoods";//开始游戏  http://ty.icecn.net/index/Activity/grabGoods?userid=1&gameid=1&locationtype=1
URLS.grabUserPrice = "Activity/grabUserPrice";//扣钱 http://ty.icecn.net/index/Activity/grabUserPrice?userid=1&gameid=1
URLS.grabRoomUp = "Activity/grabRoomUp";//进入房间 http://ty.icecn.net/index/Activity/grabRoomUp?userid=1&gameid=1
URLS.goodsTypeData = "doll/goodsTypeData";//进入房间 http://ty.icecn.net/index/goods/goodsTypeData?gameid=1

URLS.goodsType = "doll/goodsType";//房间分类接口 http://ty.icecn.net/index/doll/goodsType
URLS.goodsTypeContent = "doll/goodsTypeContent";//房间内容接口 http://ty.icecn.net/index/doll/goodsTypeContent?typeid

URLS.goodsSelf = "doll/goodsSelf";//我的娃娃 http://ty.icecn.net/index/doll/goodsSelf?userid=1
URLS.goodsGoldNotes = "doll/goodsGoldNotes";//提取记录 http://ty.icecn.net/index/doll/goodsGoldNotes?userid=1
URLS.goodsGoldPrice = "doll/goodsGoldPrice";//金币记录 http://ty.icecn.net/index/doll/goodsGoldPrice?userid=1
URLS.goodsGoldAction = "doll/goodsGoldAction";//娃娃提取 http://ty.icecn.net/index/doll/goodsGoldAction?userid=1&gameid=&name=&number=&address&textcon=
URLS.goodsGoldExchange = "doll/goodsGoldExchange";//娃娃兑换金币 http://ty.icecn.net/index/doll/goodsGoldExchange?userid=1&gameid=       ['code'=>1,'msg'=>'成功']   0失败

URLS.userIntegral = "Integral/userIntegral";//积分 http://ty.icecn.net/index/Integral/userIntegral?userid=1 
URLS.userIntegralImage = "Integral/userIntegralImage";//首页幻灯片 http://ty.icecn.net/index/Integral/userIntegralImage?userid=1 积分 + 头像 幻灯片
URLS.goodsCollege = "College/goodsCollege";//每日竞赛 http://ty.icecn.net/index/College/goodsCollege?userid=1
URLS.goodsLimit = "College/goodsLimit";//限时竞赛 http://ty.icecn.net/index/College/goodsLimit?userid=1
URLS.sign = "index/sign";//签到： http://ty.icecn.net/index/index/sign?userid=1 
URLS.signContinuous = "index/signContinuous";//连续签到： http://ty.icecn.net/index/index/signContinuous?userid=1 
URLS.userDayDask = "Invitation/userDayDask";//每日任务： http://ty.icecn.net/index/Invitation/userDayDask?userid=1
URLS.pullFriend = "Invitation/pullFriend";//邀请朋友： http://ty.icecn.net/index/Invitation/pullFriend 
URLS.userAllRanking = "Invitation/userAllRanking";//排行榜： http://ty.icecn.net/index/Invitation/userAllRanking?userid=1
URLS.userEmail = "Email/userEmail";//邮箱： http://ty.icecn.net/index/Email/userEmail 

URLS.userSerivce = "Email/userSerivce";//客服  http://ty.icecn.net/index/Email/userSerivce





//模拟数据
var userid = 1
// gameid = 1



//请求公用函数
function ajaxPost(url,data,success,error,timeout){
	//设置请求超时时间
	if(!timeout){
		timeout = 10000;
	}
	$.ajax({
		type: 'GET',
		timeout : timeout,
		url: url ,
		data: data ,
		success: function(data){
			success(data);
		} ,
		error : function(){
			alert("网络请求失败，请稍候再试");
		},
		dataType: 'json'
	});
}





//获取url
function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(decodeURIComponent(r[2]));
    }
    return null;
}

//实时积分查询
function shishijf(){
        var url = URLS.SERVER_URL + URLS.userIntegral;
        var my={};
        my["userid"] = userid;
        var data = my;
        var success = function(data){	
            $(".ssjf").html(data.value);
        };
        ajaxPost(url,data,success,error);
}

$(function(){

    // 关闭按钮
    $(".close,.goods_more_ok,.ok").click(function(){
        $(this).parent().parent().hide();
   
    });

    $(".paihang_close").click(function(){
        $(this).parent().hide();
    });

    


    //我的背包
    $(".j_index_bt2,.youxi_f2,.j_index_bl2").click(function(){
        wdbb(1);
    });

    function wdbb(a){
        if(a == 1){
            var url = URLS.SERVER_URL + URLS.goodsSelf;
            var my={};
            my["userid"] = userid;
            var data = my;
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {

                    html += "<div class='record_a'><p><img src="+ fl[k]['image'] + "><i>"+ fl[k]['name'] + "</i><i><b></b>"+ fl[k]['price'] + "</i></p><span><em class='tqww' data-id='"+fl[k]['gameid']+"'>娃娃提取</em><em  data-id='"+fl[k]['gameid']+"' class='wwdjb'>娃娃兑换金币</em></span></div>";
                    
                }
                $("#aj1_wdww").empty().append(html);
                $("#record").show();
                $(".record_main").hide();
                $(".record_main"+a).show();
            };
            ajaxPost(url,data,success,error);
        }else if(a == 2){
            var url = URLS.SERVER_URL + URLS.goodsGoldNotes;
            var my={};
            my["userid"] = userid;
            var data = my;
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {

                    html += "<div class='record_a2' data-id='"+ fl[k]['notesid'] + "'><img src="+ fl[k]['image'] + "><p><span>娃娃名称："+ fl[k]['name'] + "</span><span>兑换数量： "+ fl[k]['number'] + "</span></p></div>";

                }
                $("#aj1_tqjl").empty().append(html);
                $(".record_main").hide();
                $(".record_main"+a).show();
            };
            ajaxPost(url,data,success,error);

        }else{
            var url = URLS.SERVER_URL + URLS.goodsGoldPrice;
            var my={};
            my["userid"] = userid;
            var data = my;
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {
                    html += "<div class='record_a3' data-id='"+ fl[k]['id'] + "'>"+ fl[k]['uptime'] + "&nbsp;"+ fl[k]['number'] + "</div>";
                }
                $("#aj1_jbjl").empty().append(html);
                $(".record_main").hide();
                $(".record_main"+a).show();
            };
            ajaxPost(url,data,success,error);
        }
    }

        // 我的娃娃
    $(".j_record_boxtp").click(function(){
        var a = $(this).attr("data-id");
        // alert(a);
        $(".j_record_boxtp").removeClass("active");
        $(this).addClass("active");
        wdbb(a);
    }); 
    
        var xzww;
        //娃娃提取
       $("#aj1_wdww").on('click','.tqww',function(){
            xzww = $(this).attr('data-id');
            console.log(xzww);
            $("#tiqu").show();
            $(".tiqu_top2,.tiqu_bt2").hide();
            $(".tiqu_top,.tiqu_bt").show();
        });
       

        //娃娃提取确认
        $(".tiqu_bt").click(function(){

            var xm =$("#d1_xm").val();
            var sj =$("#ad1_sj").val();
            var dz =$("#ad1_dz").val();
            var bz =$("#ad1_bz").val();
            if(xm!=""&&sj!=""&&dz!=""){
                var url = URLS.SERVER_URL + URLS.goodsGoldAction;
                var my={};
                my["userid"] = userid;
                my["gameid"] = userid;
                my["name"] = sj;
                my["number"] = sj;
                my["address"] = dz;
                my["textcon"] = bz;

                var data = my;
                var success = function(data){	
                    if(data.code == 1){
                        $(".tiqu_top,.tiqu_bt").hide();
                        $(".tiqu_top2,.tiqu_bt2").show();
                    }else{
                        alert(data.msg);
                    }
                };
                ajaxPost(url,data,success,error);
            }
        });

        //娃娃提取完成
        $(".tiqu_bt2").click(function(){
            $("#tiqu").hide();
        });

        //娃娃兑换金币
       $("#aj1_wdww").on('click','.wwdjb',function(){
            var wwid = $(this).attr('data-id');
            var url = URLS.SERVER_URL + URLS.goodsGoldExchange;
                var my={};
                my["userid"] = userid;
                my["gameid"] = wwid;

                var data = my;
                var success = function(data){
                    alert(data.msg);
                    if(data.code == 1){
                       $(this).parent().parent().remove(); 
                    }
                };
                ajaxPost(url,data,success,error);
            
        });

        

        

})




