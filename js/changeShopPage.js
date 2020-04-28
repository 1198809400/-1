var endNum = 10;
var nowShowPage = 1;
var pageNumClick = 0;
var num = 0;

$(function() {
	$(document).on("click", "#pageNumber li", function() {
		num = 1;
		pageNumClick = $(this).text();
		console.log(pageNumClick);
		if (pageNumClick == "<") {
			// console.log("YES");
			if (nowShowPage != 1) {
				checkPage(-1);
				return;
			}
			return;
		} else if (pageNumClick == ">") {
			if (parseInt($("#pageNum").val()) != parseInt($("#bigNum").val())) {
				checkPage(1);
				return;
			}
			return;
		}
		if (pageNumClick == 1) {
			ShopGetData(1);
			return;
		}
		var giveBeginNum = parseInt(pageNumClick) * endNum - 9;
		num = giveBeginNum;
		ShopGetData(giveBeginNum);
	});
});

function checkPage(goOrBack) {
	pageNumClick = parseInt($("#pageNum").val()) + goOrBack;
	var giveBeginNum = parseInt(pageNumClick) * endNum - 9;
	num = giveBeginNum;
	ShopGetData(giveBeginNum);
}

function ShopGetData(giveBeginNum) {
	var beginNum = giveBeginNum;
	nowShowPage = pageNumClick;
	var jsonData = {
		command: "get_shop_address", // 命令
		start_item: beginNum - 1, // 默认从1开始
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
			// console.log(data);
			// console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for (var i = 0; i < shopData.length; i++) {

				inHtml += "<tr><td>" + num + "</td>" +
					"<td>" + shopData[i].name + "</td>" +
					"<td>" + shopData[i].shop_id + "</td>" +
					"<td>" + shopData[i].city + "</td>" +
					"<td>" + shopData[i].province + "</td>";
					if(shopData[i].address == "" || shopData[i].address == null){
						inHtml += "<td class='tableStyle_td_address'>--</td>" ;
					}else{
						inHtml += "<td class='tableStyle_td_address'>"+shopData[i].address+"</td>" ;
					}
					inHtml +="<td>"+shopData[i].opening_hours+"-"+shopData[i].closing_time+"</td>" +
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
				num += 1;
			}
			var tNumber = data.total_items;
			var cNumber = data.current_items;
			// console.log(tNumber);
			// console.log(cNumber);
			// console.log(inHtml);
			$("tbody").html(inHtml);
			var height1 = $("#middleFunction").height();
			console.log(height1);
			$("#leftMenu").height(parseInt(height1)+24);
			$(".dataText p .first").text(beginNum);
			$(".dataText p .end").text(showEndNum);
			$(".dataText p .allNumber").text(tNumber);
			// console.log(nowShowPage);
			$("#pageNum").val(nowShowPage);
			$("#pageNumber li").removeClass("currentPage");
			$("#pageNumber li").eq(nowShowPage).addClass("currentPage");
		}
	});
}
