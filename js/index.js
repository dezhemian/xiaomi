window.onload = function(){
	       //轮番效果
			var num = 0;
			carousel = document.getElementById('carousel');
			left = document.getElementById('left');
			right = document.getElementById('right');
			lunboImg = document.getElementById('lunbo-img');
			dot = document.getElementsByClassName('ui-page-link');
			var imgUrl = ['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg','imgs/4.jpg','imgs/5.jpg'];
			var timer;
			//初始化
			function fnTab(){
				lunboImg.src = imgUrl[num];
				for (var i = 0; i < dot.length; i++) {
					dot[i].className = 'ui-page-link';
				}
				dot[num].className = 'ui-page-link active';
			}
			//定时器自动播放
			function autoPlay(){
				timer = setInterval(function(){
					num++;
					num %= imgUrl.length;
					fnTab();
				},3000)
			}

			setTimeout(autoPlay,1000);
			carousel.onmouseover = function(){
				clearInterval(timer);
			}
			carousel.onmouseout = autoPlay;
			left.onclick = function(){
				num--;
				if (num == 1) {
					num = imgUrl.length - 1;
				}
				fnTab();
			}
			right.onclick = function(){
				num ++;
				if (num == 5) {
					num = 0;
				}
				fnTab();
			}
			for (var i = 0; i < dot.length; i++) {
				dot[i].index = i;

				dot[i].onmouseover = function(){
					num = this.index;
					fnTab();
				}
			}
			//回到顶部效果
			var obtn = document.getElementById("btn");
		    var clientHeight = document.documentElement.clientHeight;
		    var timer = null;
		    var isTop = true;
		    window.onscroll = function(){
		        var osTop =document.documentElement.scrollTop ||document.body.scrollTop;
		        if(osTop >= clientHeight){//是否到第二屏
		            obtn.style.display = "block";
		        }else{
		            obtn.style.display = "none";
		        }
		        if(!isTop){
		            clearInterval(timer);
		        }
		        else{
		            isTop = false;//看是否不到顶部
		        }
		    }
		    obtn.onclick = function(){
		        timer = setInterval(function(){//定时器
		         var osTop =document.documentElement.scrollTop ||document.body.scrollTop;//获取滚动条高度，
		         var ispeed =Math.floor(osTop/6) ;//向下锁存，例如10.9=10；10.1=10；
		        document.documentElement.scrollTop = document.body.scrollTop  = osTop -ispeed;//滑动
		        isTop=true;
		        if(osTop ==0){
		            clearInterval(timer);//是否到顶部
		           }
		        },30)
		        
		    }
}