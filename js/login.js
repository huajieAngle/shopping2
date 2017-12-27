//$(function(){
//	$(".lolist input").eq(0).focus(function(){
//			$(".lolist span").eq(0).html("正在输入用户名");
//			$(".lolist span").eq(0).css("color","palegreen");
//			});
//			$(".lolist input").eq(0).blur(function(){
//				reg=/^[a-zA-Z]\w{3,15}$/;
//				if(reg.test($(this).val())==true){
//					$(".lolist span").eq(0).html("");
//				}else{
//					$(".lolist span").eq(0).html("输入格式错误");
//					$(".lolist span").eq(0).css("color","red");
//				}				
//			});
//	
//	$(".lolist input").eq(1).focus(function(){
//			$(".lolist span").eq(1).html("正在输入密码");
//			$(".lolist span").eq(1).css("color","palegreen");
//			});
//			$(".lolist input").eq(1).blur(function(){
//				var reg=/^\w{6,18}$/;
//				if(reg.test($(this).val())==true){
//					$(".lolist span").eq(1).html("");
//				}else{
//					$(".lolist span").eq(1).html("输入格式错误");
//					$(".lolist span").eq(1).css("color","red");
//				}	
//			});
//	
//	$(".lolist input").eq(2).focus(function(){
//			$(".lolist span").eq(2).html("正在输入密码");
//			$(".lolist span").eq(2).css("color","palegreen");
//			});
//			$(".lolist input").eq(2).blur(function(){
//				if($(this).val()==$("input").eq(2).val()&&$(this).val()){
//					$(".lolist span").eq(2).html("");
//				}else{
//					$(".lolist span").eq(2).html("请与密码保持一致");
//					$(".lolist span").eq(2).css("color","red");
//				}	
//			});
//	
//	$(".lolist input").eq(3).focus(function(){
//			$(".lolist span").eq(3).html("正在输入姓名");
//			$(".lolist span").eq(3).css("color","palegreen");
//			});
//			$(".lolist input").eq(3).blur(function(){
//				reg=/^([\u4e00-\u9fa5]){2,}$/;
//				if(reg.test($(this).val())==true){
//					$(".lolist span").eq(3).html("");
//				}else{
//					$(".lolist span").eq(3).html("输入格式错误");
//					$(".lolist span").eq(3).css("color","red");
//				}	
//			});
//	
//	$(".lolist input").eq(4).focus(function(){
//			$(".lolist span").eq(4).html("正在输入邮箱号");
//			$(".lolist span").eq(4).css("color","palegreen");
//			});
//			$(".lolist input").eq(4).blur(function(){
//				reg= /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
//				if(reg.test($(this).val())==true){
//					$(".lolist span").eq(4).html("");
//				}else{
//					$(".lolist span").eq(4).html("输入格式错误");
//					$(".lolist span").eq(4).css("color","red");
//				}	
//			});
//	
//	$(".lolist input").eq(5).focus(function(){
//			$(".lolist span").eq(5).html("正在输入手机号");
//			$(".lolist span").eq(5).css("color","palegreen");
//			});
//			$(".lolist input").eq(5).blur(function(){
//				reg= /^1\d{10}$/;
//				if(reg.test($(this).val())==true){
//					$(".lolist span").eq(5).html("");
//				}else{
//					$(".lolist span").eq(5).html("输入格式错误");
//					$(".lolist span").eq(5).css("color","red");
//				}	
//			});
//	
//	
//	
//});
