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

        
            var url = URLS.SERVER_URL + URLS.goodsType;
            var data = {};
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {
                   
                    if(k == 0){
                        html += "<div class='fanjian_tag_box active'";
                        hqnr(fl[k]['type_id']);
                    }
                    else{
                        html += "<div class='fanjian_tag_box'";
                    }
                   
                    html += "data-id="+ fl[k]['type_id'] +"><p><img src="+ fl[k]['wawa_picture'] + " ></p><span>"+fl[k]['type_name']+"</span></div>";
                    
                }
                $("#aj1_fl").empty().append(html);  
            };
            ajaxPost(url,data,success,error);


            
       

       // 返回首页
       $(".fanjian_close").click(function(){
            window.location.href="index.html";
       });

        // 房间分类切换
       $("#aj1_fl").on('click','.fanjian_tag_box',function(){
            var id = $(this).attr('data-id');
            $(".fanjian_tag_box").removeClass("active"); 
            $(this).addClass("active");
            hqnr(id);
        });

        function hqnr(a){
            var url = URLS.SERVER_URL + URLS.goodsTypeContent;
            var data = {};
            data["typeid"] = a;
            console.log(url+"?typeid="+a);
            
            var success = function(data){	
                var html = "";
                var fl = data;
                console.log(fl);
                for (var k = 0; k < fl.length; k++) {
                    html += "<div class='fanjian_main_box' data-id="+fl[k]['gameid']+"><img src="+ fl[k]['image'] + "><p><em>"+fl[k]['game']+"</em><span><img src='./img/jhjb.png'>抓取："+fl[k]['price']+"</span></p></div>";
                }
                $("#aj1_nr").empty().append(html);  
            };
            ajaxPost(url,data,success,error);
        }
       

        // 进入房间
        $("#aj1_nr").on('click','.fanjian_main_box',function(){
            var a = $(this).attr("data-id");
            console.log(a);
            window.location.href="youxi.html?id="+a;
        });

        

            
})