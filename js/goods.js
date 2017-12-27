			$(function(){
				var all;
				//增加一行
				$(".add").click(function(){
					var $clone = $(this).parents("tr").prev().clone(true);
					$(this).parents("tr").before($clone);
				});
				//全选
				$(".checkAll").click(function(){
					all = $(this).prop("checked");//全选按钮的状态
					$(".checkOne").prop("checked",all);
					total();
				});
				//单选 计算总价和数量
				$(".checkOne").click(function(){
					total();
				});
				
				total();
				//计算总价 和 数量
				function total(){
					var $number = 0,$sum = 0;
					$(".checkOne:checked").each(function(){  //遍历所有被选中的单选按钮
						$number += $(this).parents("tr").find(".num").val() * 1;//总件数
						$sum += $(this).parents("tr").find(".sPrice").html() * $(this).parents("tr").find(".num").val();
					});
					$(".other").find("b:first-child").html($number);
					$(".other").find("b:last-child").html($sum);
				}
				
				//左右按钮  数量增减
				$(".right").each(function(){
					$(this).click(function(){
						var $num = $(this).prev(".num").val() * 1; //获取当前点击的按钮的前一个兄弟input里的val值
						$num++;
						$(this).prev(".num").val($num);
						var $sPrice = $(this).parent().prev(".sPrice").html() * 1;//获取单价
						var $tPrice = $sPrice * $num;
						$(this).parent().next().html($tPrice);
						total();
					});
				});
				$(".left").each(function(){
					$(this).click(function(){
						var $num = $(this).next(".num").val() * 1; //获取当前点击的按钮的前一个兄弟input里的val值
						$num--;
						if($num <= 1){
							$num = 1;
						}
						$(this).next(".num").val($num);
						var $sPrice = $(this).parent().prev(".sPrice").html() * 1;//获取单价
						var $tPrice = $sPrice * $num;
						$(this).parent().next().html($tPrice);
						total();
					});
				});
				//删除单行
				$(".delOne").each(function(){
					$(this).click(function(){
						$(this).parents("tr").remove();
						total();
					});
				});
				//删除所有
				$(".delAll").click(function(){
					$(".checkOne:checked").each(function(){
						$(this).parents("tr").remove();
					});
					total();
				});
			});