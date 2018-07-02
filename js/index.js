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


            var url = URLS.SERVER_URL + URLS.userIntegralImage;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                var html = "";
                var fl = data.ppt;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {
                    html += "<div class='swiper-slide' data-id="+fl[k]['imageid']+"><a href='"+ fl[k]['url'] + "' target='_blank'><img src='"+ fl[k]['address'] + "'></a></div>";
                }
                $("#aj1_hdp").empty().append(html);  
                var swiper = new Swiper('.swiper-container', {
                    autoplay: {
                        disableOnInteraction: false,
                      },
                      loop : true,
                    pagination: {
                      el: '.swiper-pagination',
                    },
                  });
                $("#aj1_picture").attr("src",data.img);
                $("#aj1_rema_number").html(data.value);

            };
            ajaxPost(url,data,success,error);
        

        
        // 抓娃娃
        $(".j_index_bt1,.goplay,.xsjsb").click(function(){
            window.location.href="fangjian.html";
        });

        
        function ajkf(){
            var url = URLS.SERVER_URL + URLS.userSerivce;
            var data = {};
            var success = function(data){	
                var fl = data;
                
                $(".kfnrbox").empty().append(fl.nr);    
                
            };
            ajaxPost(url,data,success,error); 
        }
        //联系客服
        $(".j_lxkf").click(function(){
            ajkf();
            $("#kefu").show();
        });



        var aaky3 = 1;
        //每日竞赛
        $(".j_index_br1").click(function(){
                var url = URLS.SERVER_URL + URLS.goodsCollege;
                var data = {};
                data["userid"] = userid;
                var success = function(data){	
                    var html = "";
                    var fl = data.alldata;
                    var sjsj = data.endtime;
                    console.log(fl);
                    var aa = 1;
                    for (var k = 0; k < fl.length; k++) {
    
                        html += "<div class='phb_l_a'><i>"+aa+"</i><img src='"+ fl[k]['image'] + "'><p><em>"+ fl[k]['name'] + "</em><i>抓取次数："+ fl[k]['number'] + "</i></p><span><img src='./img/phb_ww.png'></span></div>";
                        aa++;
                    }
    
                    $("#aj1_mrjs").empty().append(html);
                    if(data.above == 2){
                        $("#aj1_zjmrjsxsb").html("已上榜");
                    }else{
                        $("#aj1_zjmrjsxsb").html("未上榜");
                    }
                    $("#aj1_zjmrjsxm").html(data.username);
                    $("#aj1_zjmrjscs").html(data.ab_number);
                    $("#mrjs").show();
    
                    if(aaky3 == 1){
                    var current_Time = (Date.parse(new Date())) / 1000;
                    var expire = sjsj - current_Time;
                    var expireTime = function(expires){
                        if(expires > 0){
                            var second = expires;
                        }
                        else{
                            var second = "活动结束！";
                            return second;
                        }
                        var day = hour = min = "";
                        if(second>86400){
                            day = Math.floor(second/86400)+"天 ";
                            second = second%86400;
                        }
                        if(second>3600){
                            hour = Math.floor(second/3600)+"时 ";
                            second = second%3600;
                        }
                        if(second>60){
                            min = Math.floor(second/60)+"分 ";
                            second = second%60;
                        }
                        second = second+"秒";
                            return "活动倒计时：" + day+hour+min+second;
                    }
                    var timer = window.setInterval(function(){
                        $("#aj1_timemrjs").html(expireTime(expire--))
                        if(expire<0){
                            clearInterval(timer);
                        }
                    },1000)
                    };
                    aaky3 = 2;
                };
                ajaxPost(url,data,success,error); 
                
    
            
        });


        var aaky4 = 1;
        //限时竞赛
        $(".j_index_br2").click(function(){
            var url = URLS.SERVER_URL + URLS.goodsLimit;
                var data = {};
                data["userid"] = userid;
                var success = function(data){	
                    var html = "";

                    var sjsj = data.endtime;
console.log(data.endtime);

                   
                    var current_Time = (Date.parse(new Date())) / 1000;
                    var aa = sjsj - current_Time;

                    if(aa > 0){
                        $("#aj1_xsjsjz").html("进行中");
                    }else{
                        $("#aj1_xsjsjz").html("已截止");
                    }
                    $("#aj1_xsjslqsj").html(data.number);
                    $("#aj1_xsjswwtp").html(data.image);
                    $("#aj1_xsjsmc").html(data.game);
                    $("#aj1_xsjsnr").html(data.content);
                    $("#aj1_xsjslq").html(data.player);
                    $("#xsjs").show();
    
                    var current_Timea = (Date.parse(new Date())) / 1000;
                    var expire = sjsj - current_Timea;
                    if(aaky4 == 1){
                    var expireTime = function(expires){
                        if(expires > 0){
                            var second = expires;
                        }
                        else{
                            var second = "活动结束！";
                            return second;
                        }
                        var day = hour = min = "";
                        if(second>86400){
                            day = Math.floor(second/86400)+"天 ";
                            second = second%86400;
                        }
                        if(second>3600){
                            hour = Math.floor(second/3600)+"时 ";
                            second = second%3600;
                        }
                        if(second>60){
                            min = Math.floor(second/60)+"分 ";
                            second = second%60;
                        }
                        second = second+"秒";
                            return "活动倒计时：" + day+hour+min+second;
                    }
                    var timer = window.setInterval(function(){
                        $("#aj1_timexsjs").html(expireTime(expire--))
                        if(expire<0){
                            clearInterval(timer);
                        }
                    },1000)
                    };
                    aaky4 = 2;
                };
                ajaxPost(url,data,success,error); 
            
        });

        //签到弹出层
        $(".j_index_br3").click(function(){
            var url = URLS.SERVER_URL + URLS.signContinuous;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                $("#aj1_qdt").html(data.signday);
                $("#aj1_qdb").html(data.price);
                $("#qd").show();
            };
            ajaxPost(url,data,success,error); 
        });

        //签到按钮
        $(".qd_ibt").click(function(){
            var url = URLS.SERVER_URL + URLS.sign;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                alert(data.msg);
                if(code == 1){
                    $("#qd").hide();
                }
            };
            ajaxPost(url,data,success,error); 
        });

        

        //客服
        $(".j_index_br4").click(function(){
            ajkf();
            $("#kf").show();
        });

        //邀请有奖
        $(".j_index_bf1").click(function(){
            var url = URLS.SERVER_URL + URLS.pullFriend;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {

                    html += "<div class='phb_l_a phb_l_a3'><img src='"+ fl[k]['image'] + "'><p><em>邀请到"+ fl[k]['friend'] + "位好友</em><i>奖励金币"+ fl[k]['price'] + "</i></p><div class='yqqw'></div></div>";

                }
                $("#aj1_yq").empty().append(html);    
                $("#yq").show();
                
            };
            ajaxPost(url,data,success,error); 
            
        });


  
        var aakyi1 = 1;
        //每日任务
        $(".j_index_bf2").click(function(){
            var url = URLS.SERVER_URL + URLS.userDayDask;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                var html = "";
                var fl = data.data;
                var sjsj = data.endtime;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {

                    html += "<div class='rw_l_a'><img src='"+ fl[k]['image'] + "'><div class='rw_jd'><p>抓"+ fl[k]['number'] + "次娃娃</p><p>进度：<span><i style='width:"+ fl[k]['progress'] + "%;'></i></span></p></div><div class='yqqw'></div></div>";

                }

                $("#aj1_mrrw").empty().append(html);  
                $("#rw").show();

                if(aakyi1 == 1){
                var current_Time = (Date.parse(new Date())) / 1000;
                var expire = sjsj - current_Time;
                var expireTime = function(expires){
                    if(expires > 0){
                        var second = expires;
                    }
                    else{
                        var second = "活动结束！";
                        return second;
                    }
                    var day = hour = min = "";
                    if(second>86400){
                        day = Math.floor(second/86400)+"天 ";
                        second = second%86400;
                    }
                    if(second>3600){
                        hour = Math.floor(second/3600)+"时 ";
                        second = second%3600;
                    }
                    if(second>60){
                        min = Math.floor(second/60)+"分 ";
                        second = second%60;
                    }
                    second = second+"秒";
                        return "活动倒计时：" + day+hour+min+second;
                }
                var timer = window.setInterval(function(){
                    $("#aj1_mrrw_djs").html(expireTime(expire--))
                    if(expire<0){
                        clearInterval(timer);
                    }
                },1000)
                };
                aakyi1 = 2;
            };
            ajaxPost(url,data,success,error); 
            
        });

        var aaky2 = 1;
        //排行榜
        $(".j_index_bf3").click(function(){
            var url = URLS.SERVER_URL + URLS.userAllRanking;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                var html = "";
                var html2 = "";
                var fl = data.numberdata;
                var fr = data.richdata;
                var sjsj = data.endtime;
                console.log(fl);
                console.log(fr);
                var fla = 1;
                var fra = 1;
                for (var k = 0; k < fl.length; k++) {

                    html += "<div class='phb_l_a jphb_l_a'><i>"+fla+"</i><img src='"+ fl[k]['image'] + "'><p><em>"+ fl[k]['nickname'] + "</em><i>抓取次数："+ fl[k]['number'] + "</i></p><span><img src='./img/phb_ww.png'>";

                    if(fl[k]['code'] == 1){
                        html += "<b></b>";
                    }

                    html += "</span></div>";
                    fla++;

                }
                $("#phb_btl_box").empty().append(html);  
                for (var k = 0; k < fr.length; k++) {



                    html2 += "<div class='phb_l_a'><i class='fhicon fh"+fra+"'>"+fra+"</i><img src='"+ fr[k]['image'] + "'><p><em>"+ fr[k]['nickname'] + "</em><i>富豪指数 "+ fr[k]['price'] + "</i></p><span><img src='./img/jljn.png'><i>"+ fr[k]['price'] + "</i>";

                    if(fr[k]['code'] == 1){
                        html2 += "<b></b>";
                    }

                    html2 += "</span></div>";
                    fra++;

                }
                $("#phb_btr_box").empty().append(html2);

                $("#aj1_zrgj").html("<div class='zrgj_t'>昨日冠军</div><div class='zrgj_l'><img src='"+data.yesterday.image+"'><span>"+data.yesterday.nickname+"</span></div><div class='zrgj_r'><em>奖励：</em><img src='./img/weal_img.png'><em>x"+data.yesterday.giveprice+"</em></div>");


                $("#phb").show();
                if(aaky2 == 1){
                    var current_Time = (Date.parse(new Date())) / 1000;
                    var expire = sjsj - current_Time;
                    var expireTime = function(expires){
                        if(expires > 0){
                            var second = expires;
                        }
                        else{
                            var second = "活动结束！";
                            return second;
                        }
                        var day = hour = min = "";
                        if(second>86400){
                            day = Math.floor(second/86400)+"天 ";
                            second = second%86400;
                        }
                        if(second>3600){
                            hour = Math.floor(second/3600)+"时 ";
                            second = second%3600;
                        }
                        if(second>60){
                            min = Math.floor(second/60)+"分 ";
                            second = second%60;
                        }
                        second = second+"秒";
                            return "活动倒计时：" + day+hour+min+second;
                    }
                    var timer = window.setInterval(function(){
                        $("#aj1_phb_djs").html(expireTime(expire--))
                        if(expire<0){
                            clearInterval(timer);
                        }
                    },1000)
                    };
                aaky2 = 2;
               
               

            };
            ajaxPost(url,data,success,error); 
            
        });

        //收件箱
        $(".j_index_bf4").click(function(){
            var url = URLS.SERVER_URL + URLS.userEmail;
            var data = {};
            data["userid"] = userid;
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {
                    
                    html += "<div class='phb_l_a phb_l_a3'><img src='"+ fl[k]['image'] + "'><p><em>"+ fl[k]['datatime'] + "</em><i>抓"+ fl[k]['number'] + "次娃娃&nbsp;&nbsp;"+ fl[k]['price'] + "金币</i></p><div class='yqqw'></div></div>";

                }
                $("#aj1_sjx").empty().append(html);  
                $("#sjx").show();

            };
            ajaxPost(url,data,success,error); 
        });


        // 排行榜顶部按钮
        $(".phb_bt").click(function(){
            $(".phb_bt").removeClass("active");
            $(this).addClass("active");
            var a = $(this).attr("id");
            $(".phb_bt_box").hide();
            $("#"+a+"_box").show();
        });


        // 显示充值                
        $(".youxi_f3,.j_index_bl1").click(function(){
            $("#recharge").show();
       });
        


        // 点击充值                           
        $(".recharge_main a").click(function(){
            
        });  
           
})