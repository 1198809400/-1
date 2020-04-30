//控制登录
function loginData(){
	var isLogin = $.session.get("isLogin");
	console.log(isLogin);
	if(isLogin != "true"){
		window.location.href = "index.html";
	}
}