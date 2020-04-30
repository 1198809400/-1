var main1IsLoad = false;
var main2IsLoad = false;
var main3IsLoad = false;
var main4IsLoad = false;

$(function() {
	//获取当前时间
	var myDate = new Date;
	var year = myDate.getFullYear(); //获取当前年
	var mon = myDate.getMonth() + 1; //获取当前月
	var date = myDate.getDate(); //获取当前日
	//声明shopId变量
	var shopId = undefined;
	$.cookie('shopId',undefined);
	//鼠标悬浮效果
	$(document).on("mouseover", ".shopNameLi", function() {
		// alert(1);
		$(this).css("background", "#E7F8FD");
	});
	//鼠标悬浮效果
	$(document).on("mouseout", ".shopNameLi", function() {
		// alert(1);
		$(this).css("background", "#FFFFFF");
	});

	//当点击输入框时
	$("#searchShopInput").click(function(event) {
		event.stopPropagation();
		if($(".select").css("display") == 'none') {
			$(".select").css("display", "block");
		} else {
			$(".select").css("display", "none");
		}
	});

	//点击网页时
	$(document).click(function() {
		$(".select").css("display", "none");
	});
	//点击店铺列表时
	$(document).on("click", ".shopNameLi", function() {
		console.log($(this).text());
		$("#searchShopInput").val($(this).text());
		shopId = $(this).find("#shopId").val();
		console.log(shopId);
		$.cookie("shopId",shopId);
		allMoneyNum = 0;
		singleExperienceAggregateAmount = 0; // 单次体验
		discountCoupon = 0; //优惠券
		internal = 0; //店员开启
		moreExperience = 0; //不限次数
		singleExperience = 0;
		moreExperienceAggregateAmount = 0;
		initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + date);
		getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + date);
	});
	//获取shopId并判断
	if($.cookie("personShopId") != "" || $.cookie("personShopId") != null || $.cookie("personShopId") != undefined) {
		shopId = $.cookie("personShopId");
		console.log(shopId);
	}
	allMoneyNum = 0;
	singleExperienceAggregateAmount = 0; // 单次体验
	discountCoupon = 0; //优惠券
	internal = 0; //店员开启
	moreExperience = 0; //不限次数
	singleExperience = 0;
	moreExperienceAggregateAmount = 0;
	if(1 == parseInt(mon) || 3 == parseInt(mon) || 5 == parseInt(mon) || 7 == parseInt(mon)  ||
		8 == parseInt(mon) || 10 == parseInt(mon) || 12 == parseInt(mon)) {
			if(date == 31 && mon != 12){
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
			}else if(date != 31 && mon != 12){
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
			}else if(date == 31 && mon == 12){
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, (year + 1) + "-01-01");
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, (year + 1)+ "-01-01");
			}else{
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
			}
		
	} else if(2 == parseInt(mon)) {
		if(year % 4 == 0){
			if(date == 29){
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
			}else{
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
			}
		}else{
			if(date == 28){
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
			}else{
				//调用游戏开启次数函数
				getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
				//调用店铺流水函数
				initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
			}
		}
		
	} else {
		if(date == 30){
			//调用游戏开启次数函数
			getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
			//调用店铺流水函数
			initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
		}else{
			//调用游戏开启次数函数
			getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
			//调用店铺流水函数
			initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
		}
	}
	
	$("#today").fadeIn();
	$("#week").fadeOut();
	$("#month").fadeOut();
	$("#year").fadeOut();
	$("#beginTime").click(function(){
		allMoneyNum = 0;
		singleExperienceAggregateAmount = 0; // 单次体验
		discountCoupon = 0; //优惠券
		internal = 0; //店员开启
		moreExperience = 0; //不限次数
		singleExperience = 0;
		moreExperienceAggregateAmount = 0;
		console.log("变变变")
	});
	$("#endTime").click(function(){
		allMoneyNum = 0;
		singleExperienceAggregateAmount = 0; // 单次体验
		discountCoupon = 0; //优惠券
		internal = 0; //店员开启
		moreExperience = 0; //不限次数
		singleExperience = 0;
		moreExperienceAggregateAmount = 0;
	});
	//tab框点击标题时
	$(".seletion li").click(function() {
		var text = $(this).text();
		// var thisLi = ;
		var index = $(this).index();
		$(".seletion li").removeClass("choose");
		$(".seletion li").eq(index).addClass("choose");

		switch(text) {
			case "今日":
				beginTime = year + "-" + mon + "-" + date;
				endTime = year + "-" + mon + "-" + (date+1);
				$(".moneyAb").text("￥" + $.cookie("main1Money"));
				$(".moneyAll p:nth-of-type(2)").text("￥" + $.cookie("main1Money"));
				$("#today").fadeIn();
				$("#week").fadeOut();
				$("#month").fadeOut();
				$("#year").fadeOut();
				console.log(main1IsLoad);
				allMoneyNum = 0;
				singleExperienceAggregateAmount = 0; // 单次体验
				discountCoupon = 0; //优惠券
				internal = 0; //店员开启
				moreExperience = 0; //不限次数
				singleExperience = 0;
				moreExperienceAggregateAmount = 0;
				if(1 == parseInt(mon) || 3 == parseInt(mon) || 5 == parseInt(mon) || 7 == parseInt(mon)  ||
					8 == parseInt(mon) || 10 == parseInt(mon) || 12 == parseInt(mon)) {
						if(date == 31 && mon != 12){
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
						}else if(date != 31 && mon != 12){
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
						}else if(date == 31 && mon == 12){
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, (year + 1) + "-01-01");
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, (year + 1)+ "-01-01");
						}else{
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
						}
					
				} else if(2 == parseInt(mon)) {
					if(year % 4 == 0){
						if(date == 29){
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
						}else{
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
						}
					}else{
						if(date == 28){
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
						}else{
							//调用游戏开启次数函数
							getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
							//调用店铺流水函数
							initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
						}
					}
					
				} else {
					if(date == 30){
						//调用游戏开启次数函数
						getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
						//调用店铺流水函数
						initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + (mon+1) + "-01");
					}else{
						//调用游戏开启次数函数
						getDataForNum("bar", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
						//调用店铺流水函数
						initShopIdDate("main1", shopId, year + "-" + mon + "-" + date, year + "-" + mon + "-" + (date+1));
					}
				}
				break;
			case "本周":
				$(".moneyAb").text("￥" + $.cookie("main2Money"));
				$(".moneyAll p:nth-of-type(2)").text("￥" + $.cookie("main2Money"));
				$("#today").fadeOut();
				$("#week").fadeIn();
				$("#month").fadeOut();
				$("#year").fadeOut();
				allMoneyNum = 0;
				singleExperienceAggregateAmount = 0; // 单次体验
				discountCoupon = 0; //优惠券
				internal = 0; //店员开启
				moreExperience = 0; //不限次数
				singleExperience = 0;
				moreExperienceAggregateAmount = 0;
				var arr = getWeekDay(year + "-" + mon + "-" + date);
				console.log(arr);
				if(!main2IsLoad)
					initShopIdDate("main2", shopId, arr[0], arr[6]);
				getDataForNum("bar", shopId, arr[0], arr[6]);
				break;
			case "本月":
				$(".moneyAb").text("￥" + $.cookie("main3Money"));
				$(".moneyAll p:nth-of-type(2)").text("￥" + $.cookie("main3Money"));
				$("#today").fadeOut();
				$("#week").fadeOut();
				$("#month").fadeIn();
				$("#year").fadeOut();
				allMoneyNum = 0;
				singleExperienceAggregateAmount = 0; // 单次体验
				discountCoupon = 0; //优惠券
				internal = 0; //店员开启
				moreExperience = 0; //不限次数
				singleExperience = 0;
				moreExperienceAggregateAmount = 0;
				if(!main3IsLoad) {
					if(1 == parseInt(mon) || 3 == parseInt(mon) || 5 == parseInt(mon) || 7 == parseInt(mon) || 7 == parseInt(mon) ||
						8 == parseInt(mon) || 10 == parseInt(mon) || 12 == parseInt(mon)) {
						initShopIdDate("main3", shopId, year + "-" + mon + "-01",  year + "-" + (mon+1)+ "-01");
						getDataForNum("bar", shopId, year + "-" + mon + "-01",  year + "-" + (mon+1)+ "-01");
					} else if(2 == parseInt(mon)) {
						if(year % 4 == 0){
							initShopIdDate("main3", shopId, year + "-" + mon + "-01", year + "-" + (mon+1)+ "-01");
							getDataForNum("bar", shopId, year + "-" + mon + "-01",  year + "-" + (mon+1)+ "-01");
						}else{
							initShopIdDate("main3", shopId, year + "-" + mon + "-01",  year + "-" + (mon+1)+ "-01");
							getDataForNum("bar", shopId, year + "-" + mon + "-01",  year + "-" + (mon+1)+ "-01");
						}
						
					} else {
						initShopIdDate("main3", shopId, year + "-" + mon + "-01", year + "-" + (mon+1)+ "-01");
						getDataForNum("bar", shopId, year + "-" + mon + "-01", year + "-" + (mon+1)+ "-01");
					}
				}
				break;
			case "全年":
				$(".moneyAb").text("￥" + $.cookie("main4Money"));
				$(".moneyAll p:nth-of-type(2)").text("￥" + $.cookie("main4Money"));
				$("#today").fadeOut();
				$("#week").fadeOut();
				$("#month").fadeOut();
				$("#year").fadeIn();
				allMoneyNum = 0;
				singleExperienceAggregateAmount = 0; // 单次体验
				discountCoupon = 0; //优惠券
				internal = 0; //店员开启
				moreExperience = 0; //不限次数
				singleExperience = 0;
				moreExperienceAggregateAmount = 0;
				if(!main4IsLoad)
					// initShopIdDate(year + "-" + mon + "-" + date, year + "-" + mon + "-" + date);
					initShopIdDate("main4", shopId, year + "-01-01", (year+1)+ "-01-01");
				getDataForNum("bar", shopId, year + "-01-01", (year+1) + "-01-01");
				break;
			default:
				break;
		}
	});

	//鼠标悬浮效果
	$(".seletion li").hover(function() {
		$(this).addClass("choose1");
	}, function() {
		$(this).removeClass("choose1");
	});
	var startTime = 0;
	var lastTime = 0;
	var height = $("#allContainer").height();
	$("#leftMenu").height(height);

});

//初始化柱状图
function initBar(myChart, shopId, arrTitle, arrData) {
	console.log(arrTitle);
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById(myChart));
	// 指定图表的配置项和数据
	var option = {
		textStyle: {
			fontSize: 12,
			fontWeight: 500,
			color: "#8A8E91"
		},
		// barWidth: 40,
		grid: {
			left: '40',
			top: '10',
		},
		// barHeight:500,
		tooltip: {},
		xAxis: {
			axisTick: {
				show: false,
			},
			data: arrTitle
		},
		dataRange: {
			// itemHeight: 500
		},
		itemStyle: {
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				offset: 0,
				color: '#755ED3'
			}, {
				offset: 1,
				color: '#877DFF'
			}])
		},
		yAxis: {
			axisTick: {
				show: false,
			},
			interval: 200,
			// data: [0, 200, 400, 600, 800, 1000, 1200]
		},
		series: [{
			// barGap: '-100%',
			name: '销量',
			type: 'bar',
			data: arrData,
			// itemHeight: 50
		}]
	};

	myChart.setOption(option);
}

//获取游戏开启次数函数
function getDataForNum(myChart, shopId, beginTime, endTime) {
	// var myChart = echarts.init(document.getElementById(idName));
	// myChart.showLoading();
	if(typeof(shopId) == "undefined" || shopId == "null") {
		shopId = "";
	}
	var singleExperienceAggregateAmount = 0;
	var discountCoupon = 0;
	var internal = 0;
	var moreExperience = 0;
	var jsonData = {
		"command": "get_game_history", // 命令
		"shop_id": shopId, // 店铺id 为空时是查询所有
		"start_time": beginTime, // beginTime, // 开始时间
		"end_time": endTime //endTime, // 结束时间
	};
	console.log(jsonData);
	jsonData = JSON.stringify(jsonData);
	var arr = [];
	$.ajax({
		// async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			console.log(data);
			var i = 0;
			$.each(data, function(key, value) {
				console.log(key + "-->" + value);
				if(value == "[object Object]") {
					arr = ["王者荣耀,0", "求生之路,0", "独木桥,0", "迷宫,0", "反恐精英,0", "军团要塞,0"];
					return;
				}
				if(key == "status") {
					return;
				}
				arr[i] = key + "," + value;
				i++;
			});
			bubbleSort(arr);
			var arrTitle = [];
			var arrData = [];
			var html = "";
			for(var i = 0; i < arr.length; i++) {
				console.log(arr[i]);
				arrTitle[i] = arr[i].split(",")[0];
				arrData[i] = arr[i].split(",")[1];
				if(i == 0) {
					html += "<li>" +
						"<span class='No1 No'>1</span>" +
						"<p class='gameName'>" + arr[i].split(",")[0] + "</p>" +
						"<p class='openNumber'><span>" + arr[i].split(",")[1] + "</span>台</p>" +
						"</li>";
				} else if(i == 1) {
					html += "<li>" +
						"<span class='No2 No'>2</span>" +
						"<p class='gameName'>" + arr[i].split(",")[0] + "</p>" +
						"<p class='openNumber'><span>" + arr[i].split(",")[1] + "</span>台</p>" +
						"</li>";
				} else if(i == 2) {
					html += "<li>" +
						"<span class='No3 No'>3</span>" +
						"<p class='gameName'>" + arr[i].split(",")[0] + "</p>" +
						"<p class='openNumber'><span>" + arr[i].split(",")[1] + "</span>台</p>" +
						"</li>";
				} else if(i == 3 || i == 4 || i == 5) {
					html += "<li>" +
						"<span class='noLast No'>" + (i + 1) + "</span>" +
						"<p class='gameName'>" + arr[i].split(",")[0] + "</p>" +
						"<p class='openNumber'><span>" + arr[i].split(",")[1] + "</span>台</p>" +
						"</li>";
				}
			}
			$(".gameNumber ul").html(html);
			initBar(myChart, shopId, arrTitle, arrData);
		}
	});
}

//冒泡排序
function bubbleSort(arr) {
	var exchange;
	for(var i = arr.length - 1; i > 0; i--) {
		exchange = false;
		for(var j = 0; j < i; j++) {
			if(parseInt(arr[j].split(",")[1]) < parseInt(arr[j + 1].split(",")[1])) {
				var swap = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
				exchange = true;
			}
		}
		if(!exchange) return;
		console.log(1);
	}

}

//初始化饼状图
function init(myChart, idName, singleExperienceAggregateAmount, discountCoupon, internal, moreExperience) {
	myChart.showLoading();
	var option = {
		textStyle: {
			color: "#8C95A4",
			fontSize: 16,
		},
		series: [{
			top: 25,
			color: ['#5BE8DF', '#4184FF', '#FE6E7D', '#7350EB'],
			name: '1',
			type: 'pie', // 设置图表类型为饼图
			radius: ['50%', '85%'], // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
			data: [ // 数据数组，name 为数据项名称，value 为数据项值
				{
					value: moreExperience,
					name: '不限次数',
					label: {
						show: true,
					},
					labelLine: {
						show: true
					},
				},
				{
					value: internal,
					name: '店员开启',
					label: {
						show: true,
					},
					labelLine: {
						show: true
					},
				},
				{
					value: discountCoupon,
					name: '优惠券',
					label: {
						show: true,
					},
					labelLine: {
						length: 20,
						show: true
					},
				},
				{
					value: singleExperienceAggregateAmount,
					name: '单次体验',
					label: {
						show: true,
					},
					labelLine: {
						length: 40,
						show: true
					},
				}
			],
			itemStyle: {
				normal: {
					shadowBlur: 5,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	}
	var opt = option.series[0];
	// lineHide(opt);
	myChart.hideLoading();
	myChart.setOption(option);

}

//声明所需的全局变量
var arrMoney = [];
var allMoneyNum = 0;
var singleExperienceAggregateAmount = 0; // 单次体验
var discountCoupon = 0; //优惠券
var internal = 0; //店员开启
var moreExperience = 0; //不限次数
var singleExperience = 0;
var moreExperienceAggregateAmount = 0;

//获取shopId并查询计算每个店铺的流水以及所有店铺的总流水
function initShopIdDate(idName, shopId, beginTime, endTime) {
	// console.log(shopId.length);
	// if (shopId != null || shopId != "") {
	// 	console.log("jin");
	// 	return;
	// }
	var myChart = echarts.init(document.getElementById(idName));
	myChart.showLoading();
	if($.cookie("shopId") != undefined) {
		console.log(shopId);
		getDataForAllMoney(myChart, idName, shopId,"", beginTime, endTime);
		console.log("测试");
		return;
	}
	console.log(shopId);

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
			if(data.status == "succeed") {
				var sss = "500";
				console.log(parseInt(sss));
				var shopData = data.data;
				var html = "";
				for(var i = 0; i < shopData.length; i++) {
					// shopData[i].shop_id shopData[i].name
					html += "<li class='shopNameLi'>" + shopData[i].name + "<input type='hidden' name='shopId' id='shopId' value='" + shopData[i].shop_id + "'></li>";
					// console.log(getDataForAllMoney(shopData[i].shop_id, beginTime, endTime));
					// console.log(arrMoney);

				}
				$(".select ul").html(html);
				for(var i = 0; i < shopData.length; i++) {
					// shopData[i].shop_id shopData[i].name
					// console.log(getDataForAllMoney(shopData[i].shop_id, beginTime, endTime));
					console.log(beginTime, endTime);
					getDataForAllMoney(myChart, idName, shopData[i].shop_id, "", beginTime, endTime);
					// console.log(arrMoney);

				}

			}
		}
	});
}

//根据店铺ID查询店铺流水并计算所有店铺总流水
function getDataForAllMoney(myChart, idName, shopId, shopName, beginTime, endTime) {
	var jsonData = {
		"command": "get_cash", // 命令
		"shop_id": shopId, // 店铺id 为空时是查询所有
		"start_time": beginTime, // 开始时间
		"end_time": endTime // 结束时间
	};
	console.log(jsonData);
	jsonData = JSON.stringify(jsonData);
	// console.log(jsonData);
	$.ajax({
		// async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			console.log(data);
			if(data.status == "succeed") {
				allMoneyNum += parseInt(data.aggregate_amount); // 总金额
				discountCoupon += parseInt(data.discount_coupon); // 优惠券体验
				internal += parseInt(data.internal); // 店员
				moreExperience += parseInt(data.more_experience); // 多次体验
				moreExperienceAggregateAmount += parseInt(data.more_experience_aggregate_amount); // 多次体验金额
				singleExperience += parseInt(data.single_experience); // 单次体验
				singleExperienceAggregateAmount += parseInt(data.single_experience_aggregate_amount); // 单次体验金额
				console.log(allMoneyNum);

				$(".moneyAb").text("￥" + allMoneyNum);

				init(myChart, idName, singleExperienceAggregateAmount, discountCoupon, internal, moreExperience);
				if(idName == "main1") {
					$.cookie("main1Money", allMoneyNum);
					$("#today .data").find(".data1").eq(0).find(".frequency").text(singleExperience + "次");
					$("#today .data").find(".data1").eq(0).find(".money").text("￥" + singleExperienceAggregateAmount);
					$("#today .data").find(".data1").eq(1).find(".frequency").text(moreExperience + "次");
					$("#today .data").find(".data1").eq(1).find(".money").text("￥" + moreExperienceAggregateAmount);
					$("#today .data").find(".data1").eq(2).find(".frequency").text(discountCoupon + "次");
					$("#today .data").find(".data1").eq(2).find(".money").text("￥0");
					$("#today .data").find(".data1").eq(3).find(".frequency").text(internal + "次");
					$("#today .data").find(".data1").eq(3).find(".money").text("￥0");
					$("#today .moneyAll p:nth-of-type(2)").text("￥" + allMoneyNum);
					// main1IsLoad = true;
				} else if(idName == "main2") {
					$.cookie("main2Money", allMoneyNum);
					$("#week .data").find(".data1").eq(0).find(".frequency").text(singleExperience + "次");
					$("#week .data").find(".data1").eq(0).find(".money").text("￥" + singleExperienceAggregateAmount);
					$("#week .data").find(".data1").eq(1).find(".frequency").text(moreExperience + "次");
					$("#week .data").find(".data1").eq(1).find(".money").text("￥" + moreExperienceAggregateAmount);
					$("#week .data").find(".data1").eq(2).find(".frequency").text(discountCoupon + "次");
					$("#week .data").find(".data1").eq(2).find(".money").text("￥0");
					$("#week .data").find(".data1").eq(3).find(".frequency").text(internal + "次");
					$("#week .data").find(".data1").eq(3).find(".money").text("￥0");
					$("#week .moneyAll p:nth-of-type(2)").text("￥" + allMoneyNum);
					// main2IsLoad = true;
				} else if(idName == "main3") {
					$.cookie("main3Money", allMoneyNum);
					$("#month .data").find(".data1").eq(0).find(".frequency").text(singleExperience + "次");
					$("#month .data").find(".data1").eq(0).find(".money").text("￥" + singleExperienceAggregateAmount);
					$("#month .data").find(".data1").eq(1).find(".frequency").text(moreExperience + "次");
					$("#month .data").find(".data1").eq(1).find(".money").text("￥" + moreExperienceAggregateAmount);
					$("#month .data").find(".data1").eq(2).find(".frequency").text(discountCoupon + "次");
					$("#month .data").find(".data1").eq(2).find(".money").text("￥0");
					$("#month .data").find(".data1").eq(3).find(".frequency").text(internal + "次");
					$("#month .data").find(".data1").eq(3).find(".money").text("￥0");
					$("#month .moneyAll p:nth-of-type(2)").text("￥" + allMoneyNum);
					// main3IsLoad = true;
				} else if(idName == "main4") {
					$.cookie("main4Money", allMoneyNum);
					$("#year .data").find(".data1").eq(0).find(".frequency").text(singleExperience + "次");
					$("#year .data").find(".data1").eq(0).find(".money").text("￥" + singleExperienceAggregateAmount);
					$("#year .data").find(".data1").eq(1).find(".frequency").text(moreExperience + "次");
					$("#year .data").find(".data1").eq(1).find(".money").text("￥" + moreExperienceAggregateAmount);
					$("#year .data").find(".data1").eq(2).find(".frequency").text(discountCoupon + "次");
					$("#year .data").find(".data1").eq(2).find(".money").text("￥0");
					$("#year .data").find(".data1").eq(3).find(".frequency").text(internal + "次");
					$("#year .data").find(".data1").eq(3).find(".money").text("￥0");
					$("#year .data .moneyAll p:nth-of-type(2)").text("￥" + allMoneyNum);
					// main4IsLoad = true;
				}
			}
		}
	});
}

function lineHide(opt) {
	jQuery.each(opt.data, function(i, item) {
		if(parseInt(item.value) < 100) {
			item.labelLine.show = false;
			item.label.show = false;
		}
	});
}
function getWeekDay(dateString) {
    let dateStringReg = /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/;
 
    if (dateString.match(dateStringReg)) {
        let presentDate = new Date(dateString),
            today = presentDate.getDay() !== 0 ? presentDate.getDay() : 7;
 
        return Array.from(new Array(7), function(val, index) {
            return formatDate(new Date(presentDate.getTime() - (today - index-1) * 24 * 60 * 60 * 1000));
        });
 
    } else {
        throw new Error('dateString should be like "yyyy-mm-dd" or "yyyy/mm/dd"');
    }
 
    function formatDate(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
}