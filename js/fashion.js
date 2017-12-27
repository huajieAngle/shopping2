$(function(){
	$(".wi .left").mouseover(function(){
		$(".icon1",$(this)).css("display","block");
	})
	$(".wi .left").mouseout(function(){
		$(".icon1",$(this)).css("display","none");	
	});	
	$(".wi .right .zuo").mouseover(function(){
		$(".icon2",$(this)).css("display","block");
	})
	$(".wi .right .zuo").mouseout(function(){
		$(".icon2",$(this)).css("display","none");	
	});	
	$(".wi .right .you").mouseover(function(){
		$(".icon3",$(this)).css("display","block");
	})
	$(".wi .right .you").mouseout(function(){
		$(".icon3",$(this)).css("display","none");	
	});	
	
});
