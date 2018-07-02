$(function() {

        // var url = URLS.SERVER_URL + URLS.chance;
        // var my={};
        // my["id"] = user_openid;
        // var data = my;
        // var type = "GET";
        // //成功回调函数
        // var success = function(data){
        //     if(data.code == "0"){
        //     }       
        // };
        // ajaxPost(url,data,type,success);

        //url中获取游戏id
        var gameid;
        if (GetQueryString("id")) {
            gameid = GetQueryString("id");
        }

        //ajax获取后台页面数据
        var url = URLS.SERVER_URL + URLS.grabRoomUp;
        var my={};
        my["userid"] = userid;
        my["gameid"] = gameid;
        var data = my;
        var success = function(data){
            console.log(data);
            $("#aj1_picture").attr('src',data.picture);
            $(".aj1_wawa_picture").attr('src',data.wawa_picture);
            $("#aj1_rema_number").html(data.rema_number);
            $("#aj1_need_number").html(data.need_number);
            $("#aj1_people").html(data.people);
            $("#aj1_wawa_name").html(data.wawa_name);
        };
        ajaxPost(url,data,success);

  
        //播放背景音乐
        setTimeout(() => {
            musicStar.play(); 
        }, 1000);
        

        //我的背包
        $(".j_index_bt2,.youxi_f2,.j_index_bl2").click(function(){
            $("#record").show();
        });

        //联系客服
        $(".j_lxkf").click(function(){
            $("#kefu").show();
        });

        // 我的娃娃
        $(".j_record_boxtp").click(function(){
            var a = $(this).attr("data-id");
            // alert(a);
            $(".j_record_boxtp").removeClass("active");
            $(this).addClass("active");
            $(".record_main").hide();
            $(".record_main"+a).show();
        });

        //娃娃提取
        $(".tqww").click(function(){
            $("#tiqu").show();
            $(".tiqu_top2,.tiqu_bt2").hide();
            $(".tiqu_top,.tiqu_bt").show();
            
        });

        //娃娃提取确认
        $(".tiqu_bt").click(function(){
            $(".tiqu_top,.tiqu_bt").hide();
            $(".tiqu_top2,.tiqu_bt2").show();
        });

        //娃娃提取完成
        $(".tiqu_bt2").click(function(){
            $("#tiqu").hide();
        });


        // 返回房间页面
        $(".yxff,.youxi_bt1").click(function() {
            window.history.go(-1);
        });

        // 显示充值                
        $(".youxi_f3,.j_index_bl1").click(function(){
            $("#recharge").show();
       });
        

        // 显示娃娃详情
        $(".youxi_r1").click(function(){
            //ajax获取后台页面数据
            var url = URLS.SERVER_URL + URLS.goodsTypeData;
            var my={};
            my["gameid"] = gameid;
            var data = my;
            var success = function(data){
                console.log(data);
                $("#aj2_wawa_picture").attr('src',data.wawa_picture);
                $("#aj2_wawa_name").html(data.wawa_name);
                $("#aj2_wawa_size").html(data.wawa_size);
                $("#goods_more").show();
            };
            ajaxPost(url,data,success);
            
        });


        // 娃娃详情确定按钮
        $(".goods_more_ok").click(function(){
            $(".goods_more").hide();
        });

        
        // 显示设置
        $(".youxi_f1").click(function(){
            $("#set").show();
        });

        // 设置页面控制按钮
        $(".set_bt i").click(function(){
            $(this).addClass("active");
            $(this).siblings("i").removeClass("active");
            if($('#set_yy_off').hasClass('active')) {
                musicStar.pause();
            }
        });

        // 拨打客服
        $(".set_lxkf").click(function(){
            var tel = $(this).attr("data-tel");
            window.location.href = 'tel://' + date;
        });

        // 点击充值                           
        $(".recharge_main a").click(function(){
            
        });  



















        
    

        //游戏页面
        var Carousel = {
            data:{
                count:0,//数量
                totalWidth:0,//总宽度
                countArray:[0,1,2,3,4,5,6,7,8,9],
                itemWidth:0,//单个宽度
                margin:0,//外边距
                posterWidth:0,//总共的宽度
                speed:23,//移动速度
                timer:null,//移动定时器
                itemArray:null,//子元素数组
                itemLeft:[],//子元素的左定位
                flag:true,
                catched:false,//是否抓到
                result:null,//结果
                timeout:false,
                canvas:document.createElement('canvas'),//画布
                ctx:null,//画板
                ratio:1,//手机像素
                w:null,//页面宽
                h:null,//页面高
                head:null,//头像
                imgData:null,
            },
        }

        var countdown=30;

        //开始游戏
        $(".youxi_bt2").click(function(){
            musicStar.play(); 
            //ajax获取后台是否中
            var server_ok = 0;
            var url = URLS.SERVER_URL + URLS.grabUserPrice;
            var my={};
            my["userid"] = userid;
            my["gameid"] = gameid;
            var data = my;
            var success = function(data){
                server_ok = data.code;
                console.log(`扣钱是否成功code：${server_ok}`);
                if(server_ok == 1){
                    ksxg();
                    shishijf();
                }else{
                    alert(data.msg);
                }  
            };
            ajaxPost(url,data,success);

            function ksxg(){
        
                $('.zhua').removeClass('zhuadown').removeClass('zhuaup').removeClass('zhualeft').removeClass('zhuaOutUp');
                $(".youxi_wwmain img").removeClass("img-slideUp").removeClass("img-slideleft").removeClass("img-slideOutUp").removeClass("img-slideOutUp2");
                $(".js_time em").addClass("js_time30");
                $(".ks_box,.yx_fbt,.youxi_btbox").hide();
                $(".js_box").show();

                countdown=30;
                
                function settime(val) {
                    if (countdown == 0) {
                        $(".js_box").hide();
                        $(".ks_box,.yx_fbt,.youxi_btbox").show();
                    } else {
                        $(".js_time em").removeClass();
                        $(".js_time em").addClass("js_time"+countdown);
                        countdown--;
                        setTimeout(function() {
                            settime(val)
                        },1000)
                    }
            
                }

                settime();
            }

            
            
        });


       //移动手柄
       var  zhua_shou_background_size =  $(".zhua").css("background-size");
       var  yy_top_size =  "7.15";


        var t;
        var cancelTimeout = function() {
            if(t) {
                clearTimeout(t);
                t = null;
            }
        };



        var pointert = document.querySelector('.pointert');

        pointert.addEventListener('touchstart', function(e) {
            t = setInterval(function() {
                console.log(zhua_shou_background_size);
                zhua_shou_background_size = parseInt(zhua_shou_background_size.replace("%",""));
                if(zhua_shou_background_size >= 81){
                    zhua_shou_background_size = zhua_shou_background_size - 1 + "%";
                    $(".zhua").css("background-size",zhua_shou_background_size);
                    yy_top_size = Number(yy_top_size.replace("rem",""));
                    var aa = yy_top_size - .05;
                    yy_top_size = aa + "rem";
                    console.log(yy_top_size);$(".yy").css("top",yy_top_size);
                }else{
                    zhua_shou_background_size = zhua_shou_background_size + "%";
                }
               
            }, 50);
            e.preventDefault();
            return false;
        });
        pointert.addEventListener('touchend', cancelTimeout);
        pointert.addEventListener('touchcancel', cancelTimeout);


        var pointerf = document.querySelector('.pointerf');
        pointerf.addEventListener('touchstart', function(e) {
            t = setInterval(function() {
                console.log(zhua_shou_background_size);
                zhua_shou_background_size = parseInt(zhua_shou_background_size.replace("%",""));
                if(zhua_shou_background_size <= 99){
                    zhua_shou_background_size = zhua_shou_background_size + 1 + "%";
                    $(".zhua").css("background-size",zhua_shou_background_size);
                    yy_top_size = Number(yy_top_size.replace("rem",""));
                    var aa = yy_top_size + .05;
                    yy_top_size = aa + "rem";
                    
                    console.log(yy_top_size);$(".yy").css("top",yy_top_size);
                }else{
                    zhua_shou_background_size = zhua_shou_background_size + "%";
                }

            }, 50);
            e.preventDefault();
            return false;
        });
        pointerf.addEventListener('touchend', cancelTimeout);
        pointerf.addEventListener('touchcancel', cancelTimeout);

       
        $(".pointert").on("tap",function(){ 
                console.log(zhua_shou_background_size);
                    zhua_shou_background_size = parseInt(zhua_shou_background_size.replace("%",""));
                    if(zhua_shou_background_size >= 81){
                        zhua_shou_background_size = zhua_shou_background_size - 1 + "%";
                        $(".zhua").css("background-size",zhua_shou_background_size);
                        yy_top_size = Number(yy_top_size.replace("rem",""));
                        var aa = yy_top_size - .05;

                        yy_top_size = aa + "rem";
                        console.log(yy_top_size);$(".yy").css("top",yy_top_size);
                    }else{
                        zhua_shou_background_size = zhua_shou_background_size + "%";
                    }
        });
        $(".pointerf").on("tap",function(){ 
            console.log(zhua_shou_background_size);
                    zhua_shou_background_size = parseInt(zhua_shou_background_size.replace("%",""));
                    if(zhua_shou_background_size <= 99){
                        zhua_shou_background_size = zhua_shou_background_size + 1 + "%";
                        $(".zhua").css("background-size",zhua_shou_background_size);
                        yy_top_size = Number(yy_top_size.replace("rem",""));
                        var aa = yy_top_size + .05;

                        yy_top_size = aa + "rem";
                        console.log(yy_top_size);$(".yy").css("top",yy_top_size);
                    }else{
                        zhua_shou_background_size = zhua_shou_background_size + "%";
                    }
        });
        
        var  zhua_shou_background_left =  "0";

        // 点击向左
        var pointerl = document.querySelector('.pointerl');
        pointerl.addEventListener('touchstart', function(e) {
            t = setInterval(function() {
                zhua_shou_background_left = zhua_shou_background_left.replace("rem","");
                if(zhua_shou_background_left >= 0){
                    var aa = zhua_shou_background_left - .1;
                    aa = aa.toFixed(1);
                    zhua_shou_background_left = aa + "rem";
                    $(".zhua,.yy").css("left",zhua_shou_background_left);
                }else{
                    zhua_shou_background_left = zhua_shou_background_left + "rem";
                }

            }, 50);
            e.preventDefault();
            return false;
        });
        pointerl.addEventListener('touchend', cancelTimeout);
        pointerl.addEventListener('touchcancel', cancelTimeout); 

        // 点击向右
                var pointerr = document.querySelector('.pointerr');
                pointerr.addEventListener('touchstart', function(e) {
                    t = setInterval(function() {
                        zhua_shou_background_left = Number(zhua_shou_background_left.replace("rem",""));
                        if(zhua_shou_background_left <= 4.5){
                            var aa = zhua_shou_background_left + .1;
                            aa = aa.toFixed(1);
                            zhua_shou_background_left = aa + "rem";
                            $(".zhua,.yy").css("left",zhua_shou_background_left);
                        }else{
                            zhua_shou_background_left = zhua_shou_background_left + "rem";
                        }

                    }, 50);
                    e.preventDefault();
                    return false;
                });
                pointerr.addEventListener('touchend', cancelTimeout);
                pointerr.addEventListener('touchcancel', cancelTimeout); 

        $(".pointerl").on("tap",function(){ 
                    zhua_shou_background_left = zhua_shou_background_left.replace("rem","");
                    
                        if(zhua_shou_background_left >= 0){
                            var aa = zhua_shou_background_left - .1;
                            aa = aa.toFixed(1);
                            zhua_shou_background_left = aa + "rem";
                            $(".zhua,.yy").css("left",zhua_shou_background_left);
                        }else{
                            zhua_shou_background_left = zhua_shou_background_left + "rem";
                        }
        });
        $(".pointerr").on("tap",function(){ 
                zhua_shou_background_left = Number(zhua_shou_background_left.replace("rem",""));
                    if(zhua_shou_background_left <= 4.5){
                        var aa = zhua_shou_background_left + .1;
                        aa = aa.toFixed(1);
                        zhua_shou_background_left = aa + "rem";
                        $(".zhua,.yy").css("left",zhua_shou_background_left);
                    }else{
                        zhua_shou_background_left = zhua_shou_background_left + "rem";
                    }
            
        });

        // 测试概率用
        var aaaa=0;

        // 角度0不对1对
        // var jiaodu = 0;
        // 开始抓取
        $(".js_go").click(function(){

            Carousel.data.timeout = true;
            clearTimeout(Carousel.data.timer);
            Carousel.data.timer = null;

            var zleft = parseFloat($('.zhua').css('left'));
            var fs1 = parseFloat($('html').css('font-size'))*1.25*0.5656;
            var fs1_1 = parseFloat($('html').css('font-size'))*3.25*0.5656;
            var fs1_2 = parseFloat($('html').css('font-size'))*5.25*0.5656;

            var fs2 = parseFloat($('html').css('font-size'))*7.3*0.5656;

            var fs1_3 = parseFloat($('html').css('font-size'))*2*0.5656;
            var fs1_4 = parseFloat($('html').css('font-size'))*4*0.5656;
            var fs1_5 = parseFloat($('html').css('font-size'))*6.5*0.5656;
            var fs1_6 = parseFloat($('html').css('font-size'))*7.3*0.5656;

            var zwidth = parseFloat($('.zhua').css('background-size'));

            console.log("zleft:"+fs1,"zwidth:"+fs2);
            console.log(zleft);
             //判断是否抓到
                if(fs1<=zleft && zleft<=fs2){
                    // console.log("中")
                    // jiaodu = 1;
                    //抓到娃娃
                    if(zleft>= fs1 && zleft<=fs1_1 && zwidth<=89){
                        Carousel.data.catched = true;
                        Carousel.data.result = 1;
                    }
                    if(zleft>= fs1_1 && zleft<=fs1_2 && zwidth<=89){
                        Carousel.data.catched = true;
                        Carousel.data.result = 2;
                    }
                    if(zleft>= fs1_2 && zleft<=fs2 && zwidth<=89){
                        Carousel.data.catched = true;
                        Carousel.data.result = 3;
                    }

                    if(zleft>= fs1_3 && zleft<=fs1_4 && zwidth>=94){
                        Carousel.data.catched = true;
                        Carousel.data.result = 4;
                    }
                    if(zleft>= fs1_5 && zleft<=fs1_6 && zwidth>=94){
                        Carousel.data.catched = true;
                        Carousel.data.result = 5;
                    }
                    console.log(`角度Carousel.data.catched：${Carousel.data.catched},哪个娃娃Carousel.data.result：${Carousel.data.result}`);
                }

            //ajax获取后台是否中
            var server_zhong = 0;
            var url = URLS.SERVER_URL + URLS.grabGoods;
            var my={};
            my["userid"] = userid;
            my["gameid"] = gameid;
            if(Carousel.data.catched){
                my["locationtype"] = 1;
            }else{
                my["locationtype"] = 0;
            }
            var data = my;
            var success = function(data){
                console.log(data);
                server_zhong = data.code;
                console.log(`后台返回是否中code：${server_zhong}`);//显示是否中

                ksxg();
                
            };
            if(Carousel.data.catched){
            ajaxPost(url,data,success);
            }else{
                no_hava();
            }


            function ksxg(){
                console.log(`角度Carousel.data.catched：${Carousel.data.catched},后台返回是否中code：${server_zhong}`);//显示是否中
                
                if(Carousel.data.catched == true && server_zhong == "1"){
                    //aaaa++;
                    //抓到后结果页显示动画
                    console.log("zhongdonghua");

                    $('.zhua').removeClass('zhuamove').addClass('zhuadown');

                    //抓抓取动画
                    var timer01 = setTimeout(function(){
                        $('.zhua').removeClass('zhuadown').addClass('zhuashou');
                        //暂停背景音乐

                        musicStar.pause();

                        var timer03 = setTimeout(function(){
                            $('.zhua').removeClass('zhuashou').addClass('zhuaup');//向下抓
                            //爸爸出去
                            $('.people0'+Carousel.data.result).addClass('img-slideUp');

                            clearTimeout(timer03);
                            timer03 = null;
                        },800);

                        var timer00 = setTimeout(function(){
                            $('.zhua').removeClass('zhuaup').addClass('zhualeft');
                            $('.yy').addClass('yy_hf');
                            // if(aaaa>=3){
                                $('.people0'+Carousel.data.result).removeClass('img-slideUp').addClass('img-slideleft');
                            // }else{
                            //     $('.people0'+Carousel.data.result).removeClass('img-slideUp').addClass('img-slideOutUp2');
                            // }

                            clearTimeout(timer00);
                            timer00 = null;
                        },1800);


                        var timer02  = setTimeout(function(){
                            $('.zhua').removeClass('zhuaup');//向下抓
                            //爸爸被抓到向上走
                            if(aaaa>=3){
                                //抓取成功
                                $('.people0'+Carousel.data.result).removeClass('img-slideleft').addClass('img-slideOutUp');
                                $('.people0'+Carousel.data.result).remove();//去掉娃娃
                            }else{
                            }
                            $('.zhua').removeClass('zhualeft').addClass('zhuaOutUp');
                            
                            clearTimeout(timer02);
                            timer02 = null;
                        },3000);
                        cg();

                        // if(Carousel.data.result!=null&&Carousel.data.result!=""&&aaaa>=3){
                        //     cg();
                        // }else{
                        //     no_cg();
                        // }


                        clearTimeout(timer01);
                        timer01 = null;

                    },1000);

                }else{
                    
                    no_hava();

                }
            }

            //没有成功动画
            function no_hava(){
                console.log("myouzhongdonghua");

                //没有抓到后结果页显示动画
                $('.zhua').removeClass('zhuamove').addClass('zhuadown');

                var timershow = setTimeout(function(){
                    $('.zhua').removeClass('zhuadown').addClass('zhuashou');
                    //暂停背景音乐
                    //musicStar.pause();
                    var timer03 = setTimeout(function() {
                        $('.zhua').removeClass('zhuashou').addClass('zhuaup');//向下抓
                        clearTimeout(timer03);
                        timer03 = null;
                    },800);
                    clearTimeout(timershow);
                    timershow = null;
                },1000);
                no_cg();
            }
            //弹出没抓到弹框
            function no_cg(){
            var timer05 = setTimeout(function(){
                        if($('#set_yx_on').hasClass('active')) {
                            error.play();
                        }
                        $(".zhongjiang_morebox").removeClass("active");
                        $('#zhongjiang').show();
                        clearTimeout(timer05);
                        timer05 = null;
                },3000);
            }

            //弹出抓到弹框
            function cg(){
                        var timer05 = setTimeout(function(){
                            if($('#set_yx_on').hasClass('active')) {
                                music01.play();
                            }
                            $(".zhongjiang_morebox").addClass("active");
                            $('#zhongjiang').show();
                            clearTimeout(timer05);
                            timer05 = null;
                            $(".youxi_wwmain img").removeClass("img-slideUp").removeClass("img-slideleft").removeClass("img-slideOutUp").removeClass("img-slideOutUp2");
                        },4000); 
            }  

           //关闭弹窗重新开抓
            $('#zhongjiang').click(function(){
                    $('.zhua').removeClass('zhuadown').removeClass('zhuaup').removeClass('zhualeft').removeClass('zhuaOutUp');
                    $(this).hide();
                    if(!error.paused){
                        error.pause();
                    }
                    if(!music01.paused){
                        music01.pause();
                    }
                    Carousel.data.result = null;
                    if($('#set_yy_on').hasClass('active')) {
                        musicStar.play();
                    }else{
                        musicStar.pause();
                    }

                    $(".js_box").hide();
                    countdown=0;
                    $(".zhua,.yy").css("left","0rem");
                    zhua_shou_background_left =  "0";
                    $(".ks_box,.yx_fbt,.youxi_btbox").show();
                    $('.yy').removeClass('yy_hf');


            })

                
                
        });


            
})