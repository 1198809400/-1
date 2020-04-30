var isPageInit = false;

//上传文件框的点击
function upfile() {
	document.getElementById("upFileInput").click();
}
$(function() {
	//调用获取游戏函数
	initDate(0, 10);
	$(document).click(function() {
		$("#popup #gameModDiv1").css("display", "none");
	});
	
	//点击删除图标时
	$(document).on("click", ".deleteShop", function() {
		if (confirm("确定删除该游戏?")) {
			var gameName = $(this).parent("td").parent("tr").find("td").eq(1).text();
		
			deleteGame(gameName);
		}
		// deleteGame(gameName);
	});
	$("#off").click(function() {
		$("#popup").css("display", "none");
		$("#mask").css("display", "none");
	});
	//点击修改图标时
	$(document).on("click", ".editShop", function() {
		$("#gameName").attr("disabled","disabled");
		$("#popup").css("display", "block");
		$("#mask").css("display", "block");
		var gameName = $(this).parent("td").parent("tr").find("td").eq(1).text();
		var gameType = $(this).parent("td").parent("tr").find("td").eq(2).text();
		$("#gameName").val(gameName);
		$("#gameMod span").text(gameType);
		// deleteGame(gameName);
	});
	
	//当上传文件框变化时
	$("#upFileInput").change(function() {
		run(this, function(data) {
			$("#base64").val(data.split(",")[1]);
		});
	});
	
	//鼠标点击改变效果
	$("#popup #gameModDiv1 li").click(function(event) {
		event.stopPropagation();
		$("#popup #gameMod span").text($(this).text());
		$("#popup #gameModDiv1").css("display", "none");
		$("#popup #gameMod span").css("color", "#000");
	});
	//鼠标点击改变效果
	$("#gameMod").click(function(event) {
		event.stopPropagation();
		if ($("#popup #gameModDiv1").css("display") == "block") {
			$("#popup #gameModDiv1").css("display", "none");
		} else {
			$("#popup #gameModDiv1").css("display", "block");
		}
	});
	
	//控制输入框是否输入
	$("#upFileButton").click(function() {
		var gameName = $("#gameName").val();
		if (gameName == null || gameName == "") {
			alert("请输入游戏名称");
			return;
		}
		var img = $("#base64").val();
		var type = $("#gameMod span").text();
		if (type == "请选择") {
			alert("请选择游戏类型");
			return;
		}
		if(img == "" || img == undefined || img == null){
			alert("请添加图标");
			return;
		}
		img = img.replace("+","%2B");
		//调用添加游戏函数
		addGame(gameName, type, img);
	});
});
//添加游戏函数
function addGame(name, type, img) {
	var jsonData = {
		command: "games_add", // 命令
		name: name, // 游戏名称
		type: type, // 游戏类型
		out_line_ip: "1", // ip
		performan_display_mode: "1", // 战绩展示模式
		award: "1" ,// 奖项,
		back_group_image: img // 游戏图片 要求:[base64格式，不带格式头（如：data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAAMACAIAAABAXKuVAAAAAXNSR0IArs4c6QAAAARnQU...，去掉前面的“data:image/png;base64,”），图片base64编码后小于30k]
	};
	jsonData = JSON.stringify(jsonData);
	$.ajax({
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		// maxPostSize
		data: jsonData,
		success: function(data) {
			if (data.status == "succeed") {
				alert("操作成功");

				$("#mask").css("display", "none");
				$("#popup").css("display", "none");
				window.location.reload();
			}
		}
	});
}
//删除游戏
function deleteGame(gameName) {
	var jsonData = {
		command: "games_del", // 命令
		name: gameName, // 游戏名称
	};
	jsonData = JSON.stringify(jsonData);
	$.ajax({
		// async: false,
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			if (data.status == "succeed") {
				alert("删除成功");
				window.location.reload();
			}
		}
	});

}
//获取游戏信息
function initDate(beginNum, endNum) {
	var jsonData = {
		command: "games", // 命令
	};
	jsonData = JSON.stringify(jsonData);
	$.ajax({
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			var shopData = data.data;
			var inHtml = "";
			var showEndNum = 0;
			for (var i = 0; i < shopData.length; i++) {
				var num = beginNum + 1;
				inHtml += "<tr><td>" + (num + i) + "</td>" +
					"<td>" + shopData[i].name + "</td>" ;
				if (shopData[i].type == "" || shopData[i].type == null) {
					inHtml += "<td class='tableStyle_td_address'>--</td>";
				} else {
					inHtml += "<td class='tableStyle_td_address'>" + shopData[i].type + "</td>";
				}
				inHtml +="<td>" + shopData[i].performance_display_mode + "</td>" ;
				if(shopData[i].introduction != "" || shopData[i].introduction != null){
					inHtml +="<td><img src='data:image/png;base64," + shopData[i].introduction + "'/></td>" ;
				}else{
					inHtml +="<td>无</td>" ;
				}
				
				inHtml +=
					"<td>" + getLocalTime(shopData[i].create_time).split(" ")[0] + "</td>" +
					"<td>" +
					"<div class='editShop mouseGesture'>" +
					"<img src='img/map _edit备份.svg' />" +
					"</div>" +
					"<div class='deleteShop mouseGesture'>" +
					"<img src='img/3rd_trash_b备份 3.svg' />" +
					"</div>" +
					"</td></tr>";
				showEndNum = num + i;
			}
			var cNumber = data.current_items;
			$("tbody").html(inHtml);
			if (!isPageInit) {
				initPage(0, endNum);
				isPageInit = true;
			}
			$(".dataText p .first").text(beginNum + 1);
			$(".dataText p .end").text(showEndNum);
			$(".dataText p .allNumber").text(showEndNum);
			var height1 = $("#middleFunction").height();
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
			var begin = (e - 1) * endNum;
			initDate(begin, endNum);
		},
	});
}

//图片转Base64
function run(input_file, get_data) {
	/*input_file：文件按钮对象*/
	/*get_data: 转换成功后执行的方法*/
	if (typeof(FileReader) === 'undefined') {
		alert("抱歉，你的浏览器不支持 FileReader，不能将图片转换为Base64，请使用现代浏览器操作！");
	} else {
		try {
			/*图片转Base64 核心代码*/
			var file = input_file.files[0];
			//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件  
			if (!/image\/\w+/.test(file.type)) {
				alert("请确保文件为图像类型");
				return false;
			}
			var reader = new FileReader();
			reader.onload = function() {
				get_data(this.result);
			}
			reader.readAsDataURL(file);
		} catch (e) {
			alert('图片转Base64出错啦！' + e.toString())
		}
	}
}
