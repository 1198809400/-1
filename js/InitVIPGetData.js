$(function() {
	
	var page_s1 = createPage('#pageNumber');
	initVip(page_s1,0,10);
	// $("#jumpPage").click(function(){
	// 	var pageNum = $(this).text();
	// 	console.log(pageNum);
	// 	var beginNum = (parseInt(pageNum)- 1) * 10;
	// 	initVip(page_s1,beginNum,10);
	// 	// jumpPage(page_s1,allNum,10,pageNum);
	// });
});
// var allNum = 0;
function getLocalTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}   
var isPageInit = false;
//查询会员
function initVip(page_s1,beginNum,endNum){
	var jsonData = {
		command: "get_members", // 命令
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
			console.log(jsonData);
			console.log(data);
			var VIPData = data.data;
			// console.log(data);
			// console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for(var i = 0;i<VIPData.length;i++){
				var num =beginNum+1;
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
				inHtml += "<tr><td>"+(num+i)+"</td>"+
								"<td>"+VIPData[i].name+"</td>"+
								"<td>"+phoneNum+"</td>"+
								"<td>"+gradeLv+"</td>"+
								"<td>"+VIPData[i].union_id+"</td>"+
								"<td>"+VIPData[i].nick_name+"</td>"+
								"<td>"+province+"</td>"+
								"<td>"+city+"</td>"+
								"<td>"+country+"</td>"+
								"<td>"+getLocalTime(VIPData[i].attention_time).split(" ")[0]+"</td>";
				showEndNum = num+i;
			}
			var tNumber = data.total_items;
			var cNumber = data.current_items;
			// allNum = tNumber;
			console.log(tNumber);
			console.log(cNumber);
			console.log(inHtml);
			$("tbody").html(inHtml);
			if(!isPageInit){
				initPage(page_s1,tNumber, endNum);
				isPageInit = true;
			}
			$(".dataText p .first").text(beginNum+1);
			$(".dataText p .end").text(showEndNum);
			$(".dataText p .allNumber").text(tNumber);
			var height1 = $("#middleFunction").height();
			console.log(height1);
			$("#leftMenu").height(parseInt(height1)+24);
		}
	});
}
function initPage(page_s1,tNumber, endNum) {
	// 初始化 分页
	
	// 设置分页
	setPage(page_s1, {
		pageTotal: tNumber, // 数据总条数   
		pageSize: endNum, // 每页显示条数
		pageCurrent: 1, //  当前页
		maxBtnNum: 9, // 最多按钮个数  （最少5个）
		change: function(e) { // 页数变化回调函数（返回当前页码）
			console.log("当前页数："+e);
			var begin = (e-1)*endNum;
			console.log("begin***********>"+begin);
			initVip(page_s1,begin,endNum);
		},
	});
}
function jumpPage(page_s1,tNumber, endNum,nowPage) {
	// 初始化 分页
	// var page_s1 = createPage('#pageNumber');
	// 设置分页
	console.log(tNumber);
	console.log(endNum);
	setPage(page_s1, {
		pageTotal: tNumber, // 数据总条数   
		pageSize: endNum, // 每页显示条数
		pageCurrent: nowPage, //  当前页
		maxBtnNum: 9, // 最多按钮个数  （最少5个）
		// change: function(e) { // 页数变化回调函数（返回当前页码）
		// 	console.log("当前页数："+e);
		// 	var begin = (e-1)*endNum;
		// 	initVip(begin,endNum);
		// },
	});
}