$(function(){
	$(".side>div").mouseover(function(){
		$(this).css("background-color","#ff6537")
		$(this).children("div").stop().fadeIn(500);
//		$(this).css("background-color","#ff6537")
		
	})
	$(".side>div").mouseout(function(){
		$(this).css("background-color","");
		$(this).children("div").stop().fadeOut(500);
	})
});
var _top=document.getElementsByClassName("top");
				_top[0].onclick=function(){
						document.documentElement.scrollTop=0;
						document.body.scrollTop=0;
//				
					
				}
	
//轮播
$(function(){
			var $index = 0,timer = null;
			var $len = $("ul.pic li").length;//获取li的长度
			$(".btn_right").click(function(){
				$index++;
				if($index >= $len){
					$index = 0;
				}
				showImg($index);
			});
			$(".btn_left").click(function(){
				$index--;
				if($index < 0){
					$index = $len - 1;
				}
				showImg($index);
			});
			//小圆点点击
			$(".dot span").click(function(){
				var $aIndex = $(this).index();//获取当前点击的小圆点的索引号
				$index = $aIndex;
				showImg($index);
			})
			
			function showImg(i){
				$(".dot span").eq(i).addClass("active").siblings("span").removeClass("active");
				$("ul.pic li").eq(i).stop(true,true).fadeIn(2000).siblings("li").stop(true,true).fadeOut(2000);
			}
			
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					$(".btn_right").trigger("click");
				},3000);
			}
			autoPlay();
			function stopPlay(){  //停止
				clearInterval(timer);
			}
			//鼠标放上去与移开
			$(".banner").hover(function(){
				stopPlay();
			},function(){
				autoPlay();
			});
		});