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
			if(parseInt($("#pageNum").val()) != parseInt($("#bigNum").val())){
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
function checkPage(goOrBack){
	pageNumClick = parseInt($("#pageNum").val())+goOrBack;
	var giveBeginNum = parseInt(pageNumClick) * endNum - 9;
	num = giveBeginNum;
	ShopGetData(giveBeginNum);
}
function ShopGetData(giveBeginNum) {
	var beginNum = giveBeginNum;
	nowShowPage = pageNumClick;
	var jsonData = {
		command: "get_members", // 命令
		start_item: beginNum-1, // 默认从1开始
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
			var VIPData = data.data;
			// console.log(data);
			// console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for (var i = 0; i < VIPData.length; i++) {
				var gradeLv = "";
				if(VIPData[i].grade_id == 0){
					gradeLv = "普通会员";
				}else if(VIPData[i].grade_id == 1){
					gradeLv = "银卡会员";
				}else{
					gradeLv = "金卡会员";
				}
				var phoneNum = VIPData[i].phone_num;
				if(phoneNum == "" || phoneNum == null){
					phoneNum = "--";
				}
				var province = VIPData[i].province;
				if(province == "" || province == null){
					province = "--";
				}
				var city = VIPData[i].city;
				if(city == "" || city == null){
					city = "--";
				}
				var country = VIPData[i].country;
				if(country == "" || country == null){
					country = "--";
				}
				inHtml += "<tr><td>"+num+"</td>"+
								"<td>"+VIPData[i].name+"</td>"+
								"<td>"+phoneNum+"</td>"+
								"<td>"+gradeLv+"</td>"+
								"<td>"+VIPData[i].union_id+"</td>"+
								"<td>"+VIPData[i].nick_name+"</td>"+
								"<td>--</td>"+
								"<td>"+province+"</td>"+
								"<td>"+city+"</td>"+
								"<td>"+country+"</td>"+
								"<td>"+getLocalTime(VIPData[i].attention_time).split(" ")[0]+"</td>"+
								
								"<td>"+
									"<div class='editShop mouseGesture'>"+
										"<img src='http://127.0.0.1/futureHouTai/img/map _edit备份.svg' />"+
									"</div>"+
									"<div class='deleteShop mouseGesture'>"+
										"<img src='http://127.0.0.1/futureHouTai/img/3rd_trash_b备份 3.svg' />"+
									"</div>"+
								"</td></tr>";
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
