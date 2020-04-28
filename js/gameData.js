var isPageLoad = false;
var startTime = 0;
var endTime = 0;
var num = 0;
var firstNum = 0;
$(function() {
	var myDate = new Date;
	var year = myDate.getFullYear(); //获取当前年
	var mon = myDate.getMonth() + 1; //获取当前月
	var date = myDate.getDate(); //获取当前日
	var beginNum = 1;
	var endNum = 10;
	$.cookie("beginNum", beginNum);
	$.cookie("endNum", endNum);
	var lastTime = 0;
	startTime = year + "-" + mon + "-" + date;
	initDate(beginNum, endNum, startTime, startTime);
	queryShopId();
	//鼠标悬浮效果
	$(".checkDay li").hover(function() {
		$(this).addClass("hoverli1");
	}, function() {
		$(this).removeClass("hoverli1");
	});
	//鼠标悬浮效果
	$(document).on("mouseover",".shopNameLi",function(){
		// alert(1);
		$(this).css("background","#E7F8FD");
	});
	//鼠标悬浮效果
	$(document).on("mouseout",".shopNameLi",function(){
		// alert(1);
		$(this).css("background","#FFFFFF");
	});
	
	//当点击输入框时
	$("#searchShopInput").click(function(event){
		event.stopPropagation();
		if($(".select").css("display") == 'none'){
			$(".select").css("display","block");
		}else{
			$(".select").css("display","none");
		}
	});
	//点击店铺列表时
	$(document).on("click",".shopNameLi",function(){
		console.log($(this).text());
		$("#searchShopInput").val($(this).text());
		shopId = $(this).find("#shopId").val();
		console.log(shopId);
		$.cookie("shopId",shopId);
		initDate(beginNum, endNum, startTime, startTime);
		$(".checkDay li").removeClass("hoverli");
		$(".checkDay li").eq(0).addClass("hoverli");
	});
	//点击网页时
	$(document).click(function() {
		$(".select").css("display","none");
	});
	//点击不同日期进行查询
	$(".checkDay li").click(function() {
		var text = $(this).text();
		// var thisLi = ;
		var index = $(this).index();
		$(".checkDay li").removeClass("hoverli");
		$(".checkDay li").eq(index).addClass("hoverli");
		switch (text) {
			case "今日":
				startTime = year + "-" + mon + "-" + date;
				endTime = year + "-" + mon + "-" + date;
				initDate(beginNum, endNum, startTime, startTime);
				isPageLoad = false;
				$("#pageNumber").html("");
				break;
			case "本周":

				break;
			case "本月":

				if (1 == parseInt(mon) || 3 == parseInt(mon) || 5 == parseInt(mon) || 7 == parseInt(mon) || 7 == parseInt(mon) ||
					8 == parseInt(mon) || 10 == parseInt(mon) || 12 == parseInt(mon)) {
					console.log(11);
					startTime = year + "-" + mon + "-01";
					endTime = year + "-" + mon + "-31";
					initDate(beginNum, endNum, startTime, endTime);
					isPageLoad = false;
					$("#pageNumber").html("");
				} else if (2 == parseInt(mon)) {
					startTime = year + "-" + mon + "-01";
					endTime = year + "-" + mon + "-28";
					initDate(beginNum, endNum, startTime, endTime);
					isPageLoad = false;
					$("#pageNumber").html("");
				} else {
					startTime = year + "-" + mon + "-01";
					endTime = year + "-" + mon + "-30";
					initDate(beginNum, endNum, startTime, endTime);
					isPageLoad = false;
					$("#pageNumber").html("");
				}
				break;
			case "全年":
				startTime = year + "-01-01";
				endTime = year + "-12-31";
				initDate(beginNum, endNum, startTime, endTime);
				isPageLoad = false;
				$("#pageNumber").html("");
				break;
			default:

		}
	});
});
function queryShopId(){
	var jsonData = {
		command: "get_shop_address", // 命令
		start_item: 0, // 默认从1开始
		request_items: 1000 // 默认一次取10条
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
			if (data.status == "succeed") {
				var shopData = data.data;
				var html = "";
				for (var i = 0; i < shopData.length; i++) {
					html += "<li class='shopNameLi'>"+shopData[i].name+"<input type='hidden' name='shopId' id='shopId' value='"+shopData[i].shop_id+"'></li>";
				}
				$(".select ul").html(html);
			}
		}
	});
}
//查询游戏开启记录详情
function initDate(beginNum, endNum, startTime, endTime) {
	firstNum = parseInt(beginNum + 9 / 10);
	if (firstNum == 0) {
		firstNum = 1;
	}
	var shopId = "";
	if($.cookie("personShopId") != "" ||$.cookie("shopId") != null ){
		shopId = $.cookie("shopId");
		console.log(shopId);
	}
	var jsonData = {
		"command": "get_game_history_detail", // 命令
		"shop_id": shopId, // 店铺id
		"start_time": startTime, // 开始时间
		"end_time": endTime, // 截止时间
		"start_item": beginNum, // 默认从1开始
		"request_items": endNum // 默认一次取10条
	};
	jsonData = JSON.stringify(jsonData);
	console.log(jsonData);
	$.ajax({
		// async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			console.log(data);
			var shopData = data.data;
			var inHtml = "";
			// var showEndNum = 1;
			// var num = 1;
			console.log(shopData.length);
			var showEndNum = 0;
			// for (var i = shopData.length - 1; i >= 0; i--) {
			console.log("showEndNum:-----" + showEndNum);
			for (var i = 0; i < shopData.length; i++) {
				
				inHtml += "<tr><td>" + firstNum + "</td>";
				inHtml += "<td>" + shopData[i].game_name + "</td>" +
					"<td>" + shopData[i].round_id + "</td>" +
					"<td>" + shopData[i].shop_name + "</td>" +
					"<td>" + shopData[i].city + "</td>" +
					"<td class='tableStyle_td_address'>" + shopData[i].nick_name + "</td>" +
					"<td>" + shopData[i].union_id + "</td>" +
					"<td>" + getLocalTime(shopData[i].start_time).split(" ")[0] + "</td>" +
					"<td>" + parseInt(
						parseInt(shopData[i].duration) / 60) + "分钟</td></tr>";
				firstNum++;
				showEndNum = firstNum;
			}
			var tNumber = data.total_items;
			var cNumber = data.current_items;
			console.log(inHtml)
			$("tbody").html(inHtml);

			firstNum = parseInt(beginNum + 9 / 10);
			if (firstNum == 0) {
				firstNum = 1;
			}
			if (!isPageLoad) {
				initPage(tNumber, endNum, startTime, endTime);
				isPageLoad = true;
			}
			$(".dataText p .first").text(firstNum);
			$(".dataText p .end").text(showEndNum - 1);
			$(".dataText p .allNumber").text(tNumber);
			var height1 = $("#middleFunction").height();
			console.log(height1);
			$("#leftMenu").height(parseInt(height1) + 24);
		}
	});
}

//初始化分页
function initPage(tNumber, endNum, startTime, endTime) {
	// 初始化 分页
	var page_s1 = createPage('#pageNumber');
	// 设置分页
	setPage(page_s1, {
		pageTotal: tNumber, // 数据总条数   
		pageSize: endNum, // 每页显示条数
		pageCurrent: 1, //  当前页
		maxBtnNum: 9, // 最多按钮个数  （最少5个）
		change: function(e) { // 页数变化回调函数（返回当前页码）
			console.log("change////////////*/*/*/*/*" + e);
			var beginNum = 0;
			if (endNum == 10) {
				beginNum = e * endNum - 9;
			}
			initDate(beginNum, endNum, startTime, endTime);
		},
	});
}
