$(function(){
	parseURL(window.location.href);
});

//addShop获取超链接中的数据
function parseURL(url){
	var url1 = url.split("?")[1];
	console.log(url1);
	if(typeof(url1)=="undefined"){
		$.removeCookie("shopId");
		// $.removeCookie("personShopId");
		
		// $("#middleFunction").css("display","none");
		return;
	}
	url1 = decodeURI(decodeURI(location.search));
	var dataArr = url1.split("&");
	var look = dataArr[0].split("=")[1];
	if(look == "look"){
		$("input").attr("disabled","disabled");
		$(".buttonBackColor_Blue").css("display","none");
	}else{
		$("input").removeAttr("disabled");
		$(".buttonBackColor_Blue").css("display","block");
	}
	$.cookie("isPhoneRight","true");
	for(var i = 0;i<dataArr.length;i++){
		var data = dataArr[i];
		
		if(i == 1){
			var value = data.split("=")[1];
			$("#searchShopInput").val(value);
		}else if(i == 2){
			var value = data.split("=")[1];
			$.cookie("shopId",value);
		}else if(i == 8){
			var value = data.split("=")[1];
			$("#phoneNum").val(value);
		}else if(i == 9){
			var value = data.split("=")[1];
			$("#landlineNum").val(value);
		}else if(i == 3){
			var value = data.split("=")[1];
			$(".proText").text(value);
			$.cookie("city",value);
		}else if(i == 4){
			var value = data.split("=")[1];
			// $(".proText").text(value);
			$.cookie("proText",value);
		}else if(i == 10){
			var value = data.split("=")[1];
			$("#longitude").val(parseInt(value));
		}else if(i == 11){
			var value = data.split("=")[1];
			$("#latitude").val(parseInt(value));
		}else if(i == 5){
			var value = data.split("=")[1];
			$("#detailedAddress").val(value);
		}else if(i == 6){
			var value = data.split("=")[1];
			$("#openingHours").val(value);
		}else if(i == 7){
			var value = data.split("=")[1];
			$("#endHours").val(value);
		}else if(i == 0){
			var value = data.split("=")[1];
			console.log(value);
			$.cookie("operation",value);
		}
		// console.log(data);
	}
	console.log(url1);
}