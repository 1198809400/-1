$(function(){
	var autoLogin = $.cookie("isAutoLogin");
	if(autoLogin == "true"){
		var userName = $.cookie("userName");
		var password = $.cookie("password");
		login(userName,password,autoLogin);
	}
	//点击登录控制输入
	$(".loginButton").click(function(){
		var userName = $("input[name='userName']").val();
		var password = $("input[name='password']").val();
		if(userName == "" || userName == null){
			alert("请输入用户名");
			return;
		}
		if(password == "" || password == null){
			alert("请输入密码");
			return;
		}
		var isAutoLogin = $("input[name='isAutoLogin']").is(":checked");
		login(userName,password,isAutoLogin);
	});
})

//登录函数
function login(userName,password,isAutoLogin){
	var json = {
	    "command" : "log_in",       // 命令
	    "user_name":userName,             // 用户名
	    "password": password              // 密码
	};
	jsonData = JSON.stringify(json);
	$.ajax({
		async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		// contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success:function(data){
			console.log(data);
			
			if(data.status == "succeed"){
				$.cookie("userName",userName);
				if(data.data[0].result == 1){
					$.cookie("rolePerson","1");
					$.cookie("personShopId",undefined);
					window.location.href = "index1.html";
				}else if(data.data[0].result == 2){
					$.cookie("rolePerson","2");
					$.cookie("personShopId",undefined);
					window.location.href = "index1.html";
				}else if(data.data[0].result == 3){
					$.cookie("personShopId",data.data[0].shop_id);
					window.location.href = "ShopownerAddShop.html";
				}else if(data.data[0].result == 4){
					$.cookie("personShopId",data.data[0].shop_id);
					window.location.href = "ShopPersonVIP.html";
				}else{
					
				}
				$.session.set("isLogin","true");
				if(isAutoLogin){
					$.cookie("isAutoLogin","true");
					$.cookie("userName",userName);
					$.cookie("password",password);
				}
				
			}else{
				alert("账号或密码错误，请重新输入");
			}
		}
	});
}