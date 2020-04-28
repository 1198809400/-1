var isPageInit = false;
$(function() {
	initDate(0,10);
	
});
//获取店铺信息
function initDate(beginNum,endNum) {
	var jsonData = {
		command: "get_shop_address", // 命令
		start_item: beginNum, // 默认从1开始
		request_items: endNum // 默认一次取10条
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
			var shopData = data.data;
			console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for(var i = 0; i < shopData.length; i++) {
				var num =beginNum+1;
				inHtml += "<tr class='mouseGesture'><td class='tableclick'>" + (num+i) + "</td>" +
					"<td class='tableclick'>" + shopData[i].name + "</td>" +
					"<td class='tableclick'>" + shopData[i].shop_id + "</td>" +
					"<td class='tableclick'>" + shopData[i].province + "</td>"+
					"<td class='tableclick'>" + shopData[i].city + "</td>";
				if(shopData[i].address == "" || shopData[i].address == null) {
					inHtml += "<td class='tableStyle_td_address tableclick'>--</td>";
				} else {
					inHtml += "<td class='tableStyle_td_address tableclick'>" + shopData[i].address + "</td>";
				}
				inHtml += "<td class='tableclick'>" + getLocalTime(shopData[i].opening_hours).split(" ")[1] + "-" + getLocalTime(shopData[i].closing_time).split(" ")[1] + "</td>" +
				//inHtml += "<td>" + shopData[i].opening_hours + "-" + shopData[i].closing_time + "</td>" +
					"<td class='tableclick'>" + getLocalTime(shopData[i].creation_time).split(" ")[0] + "</td>" +
					"<td>" +
					"<div class='editShop mouseGesture'>" +
					"<img src='img/map _edit备份.svg' />" +
					"</div>" +
					"<div class='deleteShop mouseGesture'>" +
					"<img src='img/3rd_trash_b备份 3.svg' />" +
					"</div>" +
					"</td></tr>" +
					"<input type='hidden' name='cellPhoneNum" + (i + 1) + "' value='" + shopData[i].cell_phone_num + "'/>" +
					"<input type='hidden' name='landlineNum" + (i + 1) + "' value='" + shopData[i].landline_num + "'/>" +
					"<input type='hidden' name='longitude" + (i + 1) + "' value='" + shopData[i].longitude + "'/>" +
					"<input type='hidden' name='latitude" + (i + 1) + "' value='" + shopData[i].latitude + "'/>" +
					"<input type='hidden' name='shopId" + (i + 1) + "' value='" + shopData[i].shop_id + "'/>";
					showEndNum = num+i;
			}	
			var tNumber = data.total_items;
			var cNumber = data.current_items;
			$("tbody").html(inHtml);
			if(!isPageInit){
				initPage(tNumber, endNum);
				isPageInit = true;
			}
			$(".dataText p .first").text(beginNum+1);
			$(".dataText p .end").text(showEndNum);
			$(".dataText p .allNumber").text(tNumber);
			var height1 = $("#middleFunction").height();
			console.log(height1);
			$("#leftMenu").height(parseInt(height1) + 24);
		}
	});
}
function initPage(tNumber, endNum) {
	// 初始化 分页
	var page_s1 = createPage('#pageNumber');
	// 设置分页
	setPage(page_s1, {
		pageTotal: tNumber, // 数据总条数   
		pageSize: endNum, // 每页显示条数
		pageCurrent: 1, //  当前页
		maxBtnNum: 9, // 最多按钮个数  （最少5个）
		change: function(e) { // 页数变化回调函数（返回当前页码）
			console.log("当前页数："+e);
			var begin = (e-1)*endNum;
			initDate(begin,endNum);
		},
	});
}