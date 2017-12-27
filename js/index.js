var _nav1=document.getElementById("nav1");
var _listtop=document.getElementById("listtop");   //获取“全部商品分类id”
var _nav1_list=document.getElementsByClassName("nav1_list");//获取li 标签的ID
var _li=document.getElementsByTagName("li");
var _nav2=document.getElementsByClassName("nav2");//获取导航首页部分的id
var tt=1;
_listtop.onclick=function(){
	if(tt==1){ 
		_nav1_list[0].style.display="block";
		tt=0;
	}else if(tt==0){
		_nav1_list[0].style.display="none";
		tt=1;
	}
}
$(function(){
	$(".te .one").mouseover(function(){
		$(".icon1",$(this)).css("display","block");
	})
	$(".te .one").mouseout(function(){
		$(".icon1",$(this)).css("display","none");
		
	});	
		$(".te .two").mouseover(function(){
		$(".icon2",$(this)).css("display","block");
	})
		$(".te .two").mouseout(function(){
		$(".icon2",$(this)).css("display","none");
	})
		
		$(".te .three li").mouseover(function(){
		$(".icon3",$(this)).css("display","block");
		$(".icon4",$(this)).css("display","block");
	})
		$(".three li").mouseout(function(){
		$(".icon3",$(this)).css("display","none");
		$(".icon4",$(this)).css("display","none");
	})
});
