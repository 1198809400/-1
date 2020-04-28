$(function() {
	var beginNum = 1;
	var endNum = 10;
	var jsonData = {
		command: "get_shop_address", // 命令
		start_item: beginNum - 1, // 默认从1开始
		request_items: endNum // 默认一次取10条
	};
	jsonData = JSON.stringify(jsonData);
	// $.post("http://step.nihaofuture.cn",jsonData,
	// 	function(data, status) {
	// 		console.log("数据: \n" + data + "\n状态: " + status);
	// 	});
	$.ajax({
		async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			var shopData = data.data;
			console.log(data);
			// console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for (var i = 0; i < shopData.length; i++) {
				var num = i + 1;
				inHtml += "<tr><td>" + num + "</td>" +
					"<td>" + shopData[i].name + "</td>" +
					"<td>" + shopData[i].shop_id + "</td>" +
					"<td>" + shopData[i].province + "</td>" +
					"<td>" + shopData[i].city + "</td>";
					if(shopData[i].address == "" || shopData[i].address == null){
						inHtml += "<td class='tableStyle_td_address'>--</td>" ;
					}else{
						inHtml += "<td class='tableStyle_td_address'>"+shopData[i].address+"</td>" ;
					}
					inHtml += "<td>"+shopData[i].opening_hours+"-"+shopData[i].closing_time+"</td>" +
					"<td>" + 1 + "</td>" +
					"<td>" + 1 + "</td>" +
					"<td>"+getLocalTime(shopData[i].creation_time).split(" ")[0]+"</td>" +
					"<td>" +
					"<div class='editShop mouseGesture'>" +
					"<img src='http://127.0.0.1/futureHouTai/img/map _edit备份.svg' />" +
					"</div>" +
					"<div class='deleteShop mouseGesture'>" +
					"<img src='http://127.0.0.1/futureHouTai/img/3rd_trash_b备份 3.svg' />" +
					"</div>" +
					"</td></tr>" +
					"<input type='hidden' name='cellPhoneNum" + (i + 1) + "' value='" + shopData[i].cell_phone_num + "'/>" +
					"<input type='hidden' name='landlineNum" + (i + 1) + "' value='" + shopData[i].landlineNum + "'/>" +
					"<input type='hidden' name='longitude" + (i + 1) + "' value='" + shopData[i].longitude + "'/>" +
					"<input type='hidden' name='latitude" + (i + 1) + "' value='" + shopData[i].latitude + "'/>"+
					"<input type='hidden' name='shopId" + (i + 1) + "' value='" + shopData[i].shop_id + "'/>";
				showEndNum = num;
			}
			var tNumber = data.total_items;
			var cNumber = data.current_items;
			// console.log(tNumber);
			// console.log(cNumber);
			// console.log(inHtml);
			$("tbody").html(inHtml);
			
			$(".dataText p .first").text(beginNum);
			$(".dataText p .end").text(showEndNum);
			$(".dataText p .allNumber").text(tNumber);
			if (tNumber / endNum > 1) {
				var pageNum = parseInt(tNumber / endNum);
				if (tNumber % endNum != 0) {
					pageNum++;
				}
				var pageHtml = "<input type='hidden' value=" + beginNum +
					" name='pageNum' id='pageNum'/><input type='hidden' value=" + pageNum +
					" name='bigNum' id='bigNum'/><ul><li class='mouseGesture'>&lt;</li>";
				for (var i = 1; i <= pageNum; i++) {
					if (i == 1) {
						pageHtml += "<li class='mouseGesture currentPage'>" + i + "</li>";
					} else {
						pageHtml += "<li class='mouseGesture'>" + i + "</li>";
					}
				}
				pageHtml += "<li class='mouseGesture'>&gt;</li></ul>";
			}
			$("#pageNumber").html(pageHtml);
			var height1 = $("#middleFunction").height();
			console.log(height1);
			$("#leftMenu").height(parseInt(height1)+24);
		}
	});
});
