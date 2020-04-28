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
		"command": "get_game_history_detail", // 命令
		"shop_id": "", // 店铺id
		"start_time": "2020-01-01", // 开始时间
		"end_time": "2020-04-01" // 截止时间
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
			var num = 1;
			for (var i = 0; i < shopData.length; i++) {
				inHtml += "<tr><td>" + num + "</td>" +
					"<td>" + shopData[i].game_name + "</td>" +
					"<td>" + shopData[i].round_id + "</td>" +
					"<td>" + shopData[i].shop_name + "</td>" +
					"<td>" + shopData[i].city + "</td>" +
					"<td class='tableStyle_td_address'>" + shopData[i].nick_name + "</td>" +
					"<td>" + shopData[i].union_id + "</td>" +
					"<td>" + getLocalTime(shopData[i].start_time).split(" ")[0] + "</td>" +
					"<td>" + parseInt(parseInt(shopData[i].duration) / 60) + "分钟</td></tr>";
				showEndNum = num;
				num++;
			}
			var tNumber = data.total_items;
			var cNumber = data.current_items;
			// console.log(tNumber);
			// console.log(cNumber);
			// console.log(inHtml);
			$("tbody").html(inHtml);
			var height1 = $("#middleFunction").height();
			console.log(height1);
			$("#leftMenu").height(parseInt(height1) + 24);
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


