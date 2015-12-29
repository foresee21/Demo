$(function(){
	//此方法的功能是选项卡的切换
	$("#card li").each(function(){
		$(this).click(function(){
			//找到当前节点的父节点再找到父节点的所有子节点并设置css属性
			$(this).parent().children("li").children("p").css({"background":"#fff","color":"#66CD00"})
			//找到当前节点的p子节点并设置css属性
			$(this).children("p").css({"background":"#66CD00","color":"#fff"});

			if($(this).text()=="会员登录"){
				$("#d_card").css({"display":"block"});
				$("#z_card").css({"display":"none"});
			}else if($(this).text()=="会员注册"){
				$("#d_card").css({"display":"none"});
				$("#z_card").css({"display":"block"});
			}
		});
	});

	$("#sub").click(function(){
		$.ajax({
			type:"GET",
			url:"../service.php?username="+$("#username_d").val()+"$password="+$("#pass_d").val(),
			dataType:"json",
			success:function(data){
				if(data.success){
					$("h3").html("登陆成功！！！");
					window.open(data.url,"登录成功的页面");
				}else{
					$("h3").html("出现错误");
				}
			},
			error:function(jqXHR){
				alert("发生错误"+jqXHR.status);
			}
		});
	});


	//对注册输入的验证
	var validator;                       //定义一个全局变量
	$(function(){
		validator = $("#z_form").validate({
			rules:{                      //与标签的name属性相关联,user,password等
				username_z:{
					required:true,       //必填
					minlength:6,         //最小长度
					maxlength:10         //最大长度
				},
				pass_z:{
					required:true,
					minlength:6,
					maxlength:12
				},
				repass_z:{
					required:true,
					equalTo:"#pass_z"  //利用选择器获取要与其相等的值
				}
			},
			messages:{
				username_z:{
					required:"还没有输入用户名！  ",       //必填
					minlength:"用户名最小为6位",
					maxlength:"用户名最大为10位"
				},
				pass_z:{
					required:"还没有输入密码！  ",
					minlength:"密码最小为6位",
					maxlength:"密码最大为12位"
				},
				repass_z:{
					required:"还没有再次输入密码！  ",
					equalTo:"两次输入不相等"  
				}
			},
			submitHandler:function(form){               //点击提交，通过验证后运行的函数
				console.log($(form).serialize());
				alert("通过验证啦！可以提交啦！");
				$.ajax({
					type:"GET",
					url:"../service.php?"+$(form).serialize(),
					dataType:"json",
					success:function(data){
						if(data.success){
							alert("登录成功！！！")
							window.open(data.url,"登录成功的页面");
						}else{
							$(data.msg).appendTo($("#z_line1").parent());
						}
					},
					error:function(jqXHR){
						alert("发生错误"+jqXHR.status);
					}
				});
			},
			invalidHandler:function(event,validator){   //点击提交，没通过验证运行的函数
				alert("还没通过验证~~~");
			},
			errorPlacement:function(error,element){
				error.appendTo(element.parent().parent());  
			},
			showErrors:function(errorMap,errorList){
				console.log(errorMap);   //errorMap显示的较简单
				console.log(errorList);  //errorList可以用来分析
				this.defaultShowErrors();//默认显示错误的方式
			}
		});
	});

	$("#add").click(function(){
		$.ajax({

		});
	})
});