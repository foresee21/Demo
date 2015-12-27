window.onload = function(){
	/*//图片轮播功能实现
	var wrap = $("#login_main"),
		pic = $("#imgs li"),
		list = $("#img_btn li"),
		index = 0,
		timer = null;

	// 定义并调用自动播放函数
    timer = setInterval(autoPlay,1000) ;

    // 鼠标划过整个容器时停止自动播放
    wrap.mouseover(function(){
    	clearInterval(timer) ;
    });
     // 鼠标离开整个容器时继续播放至下一张
    wrap.mouseout(function(){
        timer = setInterval(autoPlay,1000) ;
    });

    // 遍历所有数字导航实现划过切换至对应的图片
    list.mouseover(function(){
        clearInterval(timer) ;
        changePic(this.id) ;
    });

    function autoPlay(){
        if(index>=4){
            index = 0 ;
        }else{
            index++ ;
        }
        changePic(index) ;
     }

    function changePic(curIndex){
        pic.css({"display":"none"});
        list.addClass("") ;
        pic[curIndex].css({"display":"block"}) ;
        list[curIndex].addClass("on") ;
        
        index = curIndex ;
     }*/

     var wrap=document.getElementById('login_main'),
        pic=document.getElementById('imgs').getElementsByTagName('li'),
        list=document.getElementById('img_btn').getElementsByTagName('li'),
        index=0,
        timer=null;

      // 定义并调用自动播放函数
    timer = setInterval(autoPlay,1000) ;

     // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function(){
        clearInterval(timer) ;
    }
     // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function(){
        timer = setInterval(autoPlay,2000) ;
    }
     // 遍历所有数字导航实现划过切换至对应的图片
    for(var j=0;j<list.length;j++){
        list[j].id = j ;
        list[j].onmouseover = function(){
            clearInterval(timer) ;
            changePic(this.id) ;
        }
    }
     function autoPlay(){
        if(index>=2){
            index = 0 ;
        }else{
            index++ ;
        }
        changePic(index) ;
     }
     
     function changePic(curIndex){
        for(var i=0;i<list.length;i++){
            pic[i].style.display = "none" ;
            list[i].className = "" ;
        } 
        pic[curIndex].style.display = "block" ;
        list[curIndex].className = "on" ;
        
        index = curIndex ;
     }
}