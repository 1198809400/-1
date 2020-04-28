//查询自己店铺的信息
function querySelfShopData(){
	var jsonData = {
		command: "get_shop_address", // 命令
		start_item: 0, // 默认从1开始
		request_items: 500 // 默认一次取10条
	};
	jsonData = JSON.stringify(jsonData);
	$.ajax({
		async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			for(var i = 0;i < data.data.length ; i++){
				if(data.data[i].shop_id == $.cookie("personShopId")){
					$("#searchShopInput").val(data.data[i].name);
					$("#detailedAddress").val(data.data[i].address);
					$("#longitude").val(data.data[i].longitude);
					$("#latitude").val(data.data[i].latitude);
					$("#phoneNum").val(data.data[i].cell_phone_num);
					$("#landlineNum").val(data.data[i].landline_num);
					$("#openingHours").val(getLocalTime(data.data[i].opening_hours).split(" ")[1]);
					$("#endHours").val(getLocalTime(data.data[i].closing_time).split(" ")[1]);
					$(".proText").text(data.data[i].city);
					$.cookie("city",data.data[i].city);
					$.cookie("proText",data.data[i].province);
				}
			}
		}
	});
}
