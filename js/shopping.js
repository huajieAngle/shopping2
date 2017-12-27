var _inp=document.getElementById("inp");
var _btn1=document.getElementById("btn1");
var _btn2=document.getElementById("btn2")
var _btn3=document.getElementById("btn3");     //评论
var _btn4=document.getElementById("btn4")      //产品详情
var _xiangqing=document.getElementById("xiangqing");
var _pinglun=document.getElementById("pinglun")
var str=1;
var index=0;
var _shang=document.getElementById("shang");
var _xia=document.getElementById("xia");
var _demo1=document.getElementsByClassName("demo1");
_btn1.onclick=function(){
	var _inp=document.getElementById("inp");
	if(parseInt(_inp.value)>0){
		_inp.value=parseInt(_inp.value)+str;
	}
}
_btn2.onclick=function(){
	var _inp=document.getElementById("inp");
	if(parseInt(_inp.value)>1){
		_inp.value=parseInt(_inp.value)-str;
	}
}
_btn4.onclick=function(){
	_xiangqing.style.display="block";
	_pinglun.style.display="none";
	_btn4.style="color:#ff6637;border-top:6px solid #ff6637";
	_btn3.style="color:#999;border-top:1px solid #e9e9e9";

}
_btn3.onclick=function(){
	_pinglun.style.display="block";
	_xiangqing.style.display="none";
	_btn3.style="color:#ff6637;border-top:6px solid #ff6637";
	_btn4.style="color:#999;border-top:1px solid #e9e9e9";
}
//_shang.onclick=function(){
//	if(index==0){
//		_demo1[index].style.display="none";
//		index=2;
//		_demo1[index].style.display="block";
//	}else{
//		_demo1[index].style.display="none";
//		_demo1[index-1].style.display="block";
//		index--;
//		
//	}
//}
//_xia.onclick=function(){
//	if(index==2){
//		_demo1[index].style.display="none";
//		index=0;
//		_demo1[index].style.display="block";
//	}else{
//		_demo1[index].style.display="none";
//		_demo1[index+1].style.display="block";
//		index++;
//		
//	}
//	}
 $(function(){
 	$(".sp span").click(function(){
 		$(this).css("border","2px solid #ff6637").siblings("span").css("border","");
 	})
 	$(".sl span").click(function(){
 		$(this).css("border","2px solid #ff6637").siblings("span").css("border","");
 	})	
 	//换图
 	$(".imgList li").click(function(){
			var $url = $(this).find("img").attr("src");    //img/list3/blue_one_small.jpg
			var $dotP = $url.lastIndexOf("_");//找.的位置
			var $start = $url.substring(0,$dotP);//截取.jpg之前的字符串 pro_img/green_one
			var $bigUr = $start + "_big.jpg";
			$("#bigImg").attr({"src":$url});
			$("#bigImg").attr({"jqimg":$bigUr});
		})
 	//放大镜插件的使用
 	$(".jqzoom").jqueryzoom({
				xzoom: 300,		//zoomed width default width
				yzoom: 300
		});
 	
 	
 	
 });
