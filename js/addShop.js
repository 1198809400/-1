var eleBool = false;
var statu1 = "";
function queryPerson(shopId) {
	var jsonData = {
		"command": "query_staff_info",
		"shop_id": shopId // shop_id
	};
	jsonData = JSON.stringify(jsonData);
	console.log(jsonData);
	$.ajax({
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			console.log(data);
			var shopData = data.data;
			console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for (var i = 0; i < shopData.length; i++) {
				inHtml += "<tr><td>" + (i + 1) + "</td>" +
					"<td>" + shopData[i].name + "</td>" +
					"<td>" + shopData[i].shop_id + "</td>" +
					"<td>" + shopData[i].phone_num + "</td>" +
					"<td>" + shopData[i].account + "</td>" +
					"<td>" + shopData[i].city + "</td>" +
					"<td>" + shopData[i].province  + "</td>" +
					"<td>" +
					"<div class='editShop mouseGesture'>" +
					"<img src='img/map _edit备份.svg' />" +
					"</div>" +
					"<div class='deleteShop mouseGesture'>" +
					"<img src='img/3rd_trash_b备份 3.svg' />" +
					"</div>" +
					"</td></tr>";

			}
			$("#tableDiv tbody").html(inHtml);
			var tNumber = data.total_items;
			console.log(tNumber);
			// if (!eleBool) {
			// 	initPage(tNumber, endNum);
			// 	eleBool = true;
			// }
			var height1 = $("#tableDiv").height();
			var height2 = $("#tableDiv2").height();
			console.log(height1 + height2);
			$("#middleFunction").height(height1 + height2 + 210);
			$("#leftMenu").height(height1 + height2 + 600);
		}
	});
}

function queryDevice(beginNum, endNum) {
	var jsonData = {
		"command": "get_device", // 命令
		"start_item": beginNum, // 开始
		"request_items": endNum // 条数
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
			console.log(data.data);
			var inHtml = "";
			var showEndNum = 0;
			for (var i = 0; i < shopData.length; i++) {
				inHtml += "<tr><td>" + (i + 1) + "</td>" +
					"<td>" + shopData[i].ip + "</td>" +
					"<td>" + shopData[i].cpu + "</td>" +
					"<td>" + shopData[i].mac_address + "</td>" +
					"<td>" + shopData[i].shop_id + "</td>" +
					"<td>" +
					"<div class='editShop mouseGesture'>" +
					"<img src='img/map _edit备份.svg' />" +
					"</div>" +
					"<div class='deleteShop mouseGesture'>" +
					"<img src='img/3rd_trash_b备份 3.svg' />" +
					"</div>" +
					"</td></tr>";

			}
			$("#tableDiv2 tbody").html(inHtml);
			var tNumber = data.total_items;
			console.log(tNumber);
			if (!eleBool) {
				initPage(tNumber, endNum);
				eleBool = true;
			}
			var height1 = $("#tableDiv").height();
			var height2 = $("#tableDiv2").height();
			console.log(height1 + height2);
			$("#middleFunction").height(height1 + height2 + 210);
			$("#leftMenu").height(height1 + height2 + 600);
		}
	});

}

$(function() {
	var beginNum = 0;
	var endNum = 10;
	var noHis = "2017-06-22";
	var haveHis = "2017-06-22 00:00:01";
	var oNoHis = $.myTime.DateToUnix(noHis); // 1498060800
	var ohaveHis = $.myTime.DateToUnix(haveHis); // 1498123193
	console.log(oNoHis);
	console.log(ohaveHis);
	var role = $.cookie("rolePerson");
	if(role == "1"){
		var html111 = "<li>总店长</li>"+
		"<li>分店长</li>"+
		"<li>店员</li>"+
		"<li>员工</li>";
		$("#roleSelect").html(html111);
		
	}else{
		var html111 = "<li>分店长</li>"+
		"<li>店员</li>"+
		"<li>员工</li>";
		$("#roleSelect").html(html111);
	}
	if ($.cookie("personShopId") != undefined || $.cookie("shopId") != undefined) {
		queryPerson($.cookie("shopId"));
	}
	$("#off").click(function() {
		$("#popup").css("display", "none");
		$("#mask").css("display", "none");
	});
	$("#dontDo").click(function() {
		$("#popup").css("display", "none");
		$("#mask").css("display", "none");
	});
	$("#tableDiv2").on("click", ".deleteShop", function() {
		var id = $(this).parent().parent("tr");
		var mac = id.find("td").eq(3).text();
		console.log(mac);
		if (confirm("确定删除吗？")) {
			deleteEle(mac, id);
		}
	});
	//点击保存 新建店铺
	$("#saveShop").click(function() {

		// var shopName = $("#searchShopInput").val(); //店铺名

		var shopName = $("#searchShopInput").val(); //店铺名
		var shopAddressCity = $.cookie("city"); //所在市
		console.log(shopAddressCity);
		var shopAddressPro = $.cookie("proText"); //店铺所在省
		console.log(shopAddressPro);
		if (shopAddressCity == undefined || shopAddressCity == "" || shopAddressCity == null) {
			shopAddressCity = "朝阳区";
		}
		if (shopAddressPro == undefined || shopAddressPro == "" || shopAddressPro == null) {
			shopAddressPro = "北京";
		}
		var shopDetaAdd = $("#detailedAddress").val(); //店铺详细地址
		var longitude = $("#longitude").val(); //店铺经度
		var latitude = $("#latitude").val(); //店铺纬度
		var shopPhone = $("#phoneNum").val(); //店铺手机
		var landlineNum = $("#landlineNum").val(); //店铺座机
		var opengingHours = $("#openingHours").val(); //开店时间

		// return;
		var endHours = $("#endHours").val(); //关店时间

		var intOpenTime = parseInt($("#openingHours").val().split(":")[0]);
		var intCloseTime = parseInt($("#endHours").val().split(":")[0]);
		console.log(intOpenTime + ".." + isNaN(intOpenTime));
		console.log(intCloseTime);
		if (isNaN(intOpenTime)) {
			alert("请选择营业时间");
			return;
		}
		if (isNaN(intCloseTime)) {
			alert("请选择营业时间");
			return;
		}
		if ((shopDetaAdd == "" || shopDetaAdd == null) && (longitude == "" ||
				longitude == null) && (latitude == "" || latitude == null) && (shopPhone == "" || shopPhone == null) && (
				landlineNum == "" || landlineNum == null) && (opengingHours == "" || opengingHours == null) && (endHours == "" ||
				endHours == null) && (intOpenTime == "" || intOpenTime == null) && (intCloseTime == "" || intCloseTime == null)) {
			alert("请补全店铺信息");
		}
		if (shopName == null || shopName == "") {
			alert("店铺名不能为空");
			console.log("ceshi2");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}
		if (shopDetaAdd == null || shopDetaAdd == "") {
			alert("请填写详细地址");
			console.log("ceshi2");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}
		if (landlineNum == null || landlineNum == "") {
			alert("请填写店铺座机");
			console.log("ceshi2");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}
		if (intOpenTime == null || intOpenTime == "") {
			alert("请选择开店时间");
			console.log("ceshi2");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}
		if (intCloseTime == null || intCloseTime == "") {
			alert("请选择闭店时间");
			console.log("ceshi2");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}
		if (intOpenTime >= intCloseTime) {
			alert("时间选择错误");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}

		var isPhoneRight = $.cookie("isPhoneRight");
		if (isPhoneRight != "true") {
			alert("手机号输入错误");
			console.log("ceshi");
			$("#postError").fadeIn();
			setTimeout(function() {
				$("#postError").fadeOut();
			}, 2000);
			return;
		}
		// The shop already exists
		opengingHours = "2020-01-01 " + opengingHours + ":00";
		console.log(opengingHours);
		opengingHours = $.myTime.DateToUnix(opengingHours);
		endHours = "2020-01-01 " + endHours + ":00";
		endHours = $.myTime.DateToUnix(endHours);
		console.log(shopAddressPro);
		console.log(shopAddressCity);
		var operation = $.cookie("operation");
		console.log(operation);
		var shopId = $.cookie("shopId");
		var json = "";
		if (operation == "change") {
			order = "modify_shop_address";
			json = {
				"shop_id": shopId, // 店面id
				"command": order, // 命令
				"name": shopName, // 店铺名称
				"province": shopAddressPro, // 省份
				"city": shopAddressCity, // 城市
				"address": shopDetaAdd, // 详细地址
				"cell_phone": shopPhone, // 手机号
				"land_line": landlineNum, // 座机
				"longitude": longitude, // 经度
				"latitude": latitude, // 纬度
				"open_hours": opengingHours, // 开门时间
				"close_hour": endHours, // 营业时间
			};
		} else {
			order = "add_shop_address";
			json = {
				"command": order, // 命令
				"name": shopName, // 店铺名称
				"province": shopAddressPro, // 省份
				"city": shopAddressCity, // 城市
				"address": shopDetaAdd, // 详细地址
				"cell_phone": shopPhone, // 手机号
				"land_line": landlineNum, // 座机
				"longitude": longitude, // 经度
				"latitude": latitude, // 纬度
				"open_hours": opengingHours, // 开门时间
				"close_hour": endHours, // 营业时间
			};
		}
		json = JSON.stringify(json);
		console.log(json);
		$.ajax({
			url: "http://step.nihaofuture.cn",
			type: "post",
			contentType: "application/x-www-form-urlencoded",
			dataType: "json",
			data: json,
			success: function(data) {
				console.log(data.toString());
				var status = data.status;
				if (status == "succeed") {
					initDate();
					$("#postSuccess").fadeIn();
					setTimeout(function() {
						$("#postSuccess").fadeOut();
					}, 2000);
					$.removeCookie("city");
					$.removeCookie("proText");
				} else {
					console.log(data);

					if (data.data[0].result == "The shop already exists") {
						alert("该店铺名已存在，请修改店铺名称");
					}
					$("#postError").fadeIn();
					setTimeout(function() {
						$("#postError").fadeOut();
					}, 2000);
					$.removeCookie("city");
					$.removeCookie("proText");
				}

			}
		});
	});
	$("#tableDiv").on("click",".editShop",function(){
		statu1 = "update";
		console.log(statu1);
		$(".searchPhoneNum").css("display", "none");
		$(".addPersonDate").css("display", "block");
		$(".addEl").css("display", "none");
		$(".addPersonDate .titlePngSon").css("left", "242px");
		$(".addPersonDate .titlePngSon").css("top", "-97px");
		$(".addPersonDate .titlePngSon").css("width", "197px");
		$(".addPersonDate .titlePngSon").css("height", "150px");
		$("#popup").css("display", "block");
		$("#mask").css("display", "block");
		$("#popup").css("width", "680px");
		$("#popup").css("height", "465px");
		var tab = $(this).parent().parent("tr").find("td");
		var name = tab.eq(1).text();
		var username = tab.eq(4).text();
		$("#personName").val(name);
		$("#adminUser").val(username);
		$("#adminUser").attr("disabled","disabled");
		
		// updatePerson(userName, password, name, type, phoneNum)
	});
	//鼠标悬浮效果
	$("#tableDiv tbody").on("mouseover","tr",function(){
		// alert(1);
		$(this).css("background","#E7F8FD");
	});
	//鼠标悬浮效果
	$("#tableDiv tbody").on("mouseout","tr",function(){
		// alert(1);
		$(this).css("background","#FFFFFF");
	});
	$("#tableDiv2 tbody").on("mouseover","tr",function(){
		// alert(1);
		$(this).css("background","#E7F8FD");
	});
	//鼠标悬浮效果
	$("#tableDiv2 tbody").on("mouseout","tr",function(){
		// alert(1);
		$(this).css("background","#FFFFFF");
	});
	
	$(document).on("mouseover",".editShop",function(){
		$(this).find("img").attr("src", "img/map _edit_click.svg");
	});
	$(document).on("mouseout",".editShop",function(){
		$(this).find("img").attr("src", "img/map _edit备份.svg");
	});
	$(document).on("mouseover",".deleteShop",function(){
		$(this).find("img").attr("src", "img/Combined Shape.svg");
	});
	$(document).on("mouseout",".deleteShop",function(){
		$(this).find("img").attr("src", "img/3rd_trash_b备份 3.svg");
	});
	
	$("#tableDiv").on("click",".deleteShop",function(){
		if(confirm("确定删除？")){
			var id = $(this).parent().parent("tr");
			deletePerson($(this).parent().parent("tr").find("td").eq(4).text(),id);
		}
	});
	$("#addElButton").click(function() {
		var IP = $("#elIp").val();
		var zhengZe = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
		if (IP == null || IP == undefined || IP == "") {
			alert("请输入IP地址");
			return;
		}
		if (!zhengZe.test(IP)) {
			alert("请输入正确的IP地址");
			return;
		}
		var cpu = $("#elCpu").val();
		if (cpu == null || cpu == undefined || cpu == "") {
			alert("请输入cpu地址");
			return;
		}
		var mac = $("#elMac").val();
		var zhengZe2 = /^([0-9a-fA-F]{2})(([/\s:][0-9a-fA-F]{2}){5})$/;
		var zhengZe3 = /^([0-9a-fA-F]{2})(([/\s:][0-9a-fA-F]{2}){5})$/;
		if (mac == null || mac == undefined || mac == "") {
			alert("请输入mac地址");
			return;
		}
		var mac1 = false;
		var mac2 = false;
		if (!zhengZe2.test(mac)) {
			mac1 = false;
		} else {
			mac1 = true;
		}
		if (!zhengZe3.test(mac)) {
			mac2 = false;
		} else {
			mac2 = true;
		}
		if (!mac1) {
			if (!mac2) {
				alert("请输入正确的MAC地址");
				return;
			}
		}
		if (!zhengZe.test(IP)) {
			alert("请输入正确的IP地址");
			return;
		}
		if ($("input[name=status]").val() == "add") {
			addElE(mac, cpu, IP);
		} else {
			updateElE(mac, cpu, IP);
		}
	});
	$("#tableDiv2").on("click", ".editShop", function() {
		if ($.cookie("personShopId") != undefined || $.cookie("shopId") != undefined) {
			$("input[name=status]").val("update");
			console.log($(this).parent().parent("tr").find("td").eq(3).text());
			$("#elMac").val($(this).parent().parent("tr").find("td").eq(3).text());
			$("#elIp").val($(this).parent().parent("tr").find("td").eq(1).text());
			$("#elCpu").val($(this).parent().parent("tr").find("td").eq(2).text());
			$(".searchPhoneNum").css("display", "none");
			$(".addPersonDate").css("display", "none");
			$(".addEl").css("display", "block");
			$("#popup").css("display", "block");
			$("#mask").css("display", "block");
			$("#popup").css("width", "680px");
			$("#popup").css("height", "465px");
			$("#shopOwner").val($.cookie("shopId"));
			$("#por").val($.cookie("city"));
			$("#city").val($.cookie("proText"));
		} else {
			alert("请将店铺信息填写完毕并保存后再新建设备");
		}
	});
	$("#addEquipment").click(function() {
		if ($.cookie("personShopId") != undefined || $.cookie("shopId") != undefined) {
			$("input[name=status]").val("add");
			$(".searchPhoneNum").css("display", "none");
			$(".addPersonDate").css("display", "none");
			$(".addEl").css("display", "block");
			$("#popup").css("display", "block");
			$("#mask").css("display", "block");
			$("#popup").css("width", "680px");
			$("#popup").css("height", "465px");
			$("#shopOwner").val($.cookie("shopId"));
			$("#por").val($.cookie("city"));
			$("#city").val($.cookie("proText"));
		} else {
			alert("请将店铺信息填写完毕并保存后再新建设备");
		}
	});
	//点击新建管理员
	$("#addPerson").click(function() {
		console.log($.cookie("personShopId"));
		console.log($.cookie("shopId"));
		statu1 = "add";
		//必须有shopId才能新建管理员
		if ($.cookie("personShopId") != undefined || $.cookie("shopId") != undefined) {
			$(".addEl").css("display", "none");
			$("#popup").css("display", "block");
			$("#mask").css("display", "block");
			$("#popup").css("width", "483px");
			$("#popup").css("height", "330px");
			$(".searchPhoneNum").css("display", "block");
			$(".addPersonDate").css("display", "none");
			$(".addPersonDate .titlePngSon").css("left", "242px");
			$(".addPersonDate .titlePngSon").css("top", "-97px");
			$(".addPersonDate .titlePngSon").css("width", "197px");
			$(".addPersonDate .titlePngSon").css("height", "150px");
		} else {
			alert("请将店铺信息填写完毕并保存后再新建管理员");
		}
	});


	//根据手机号查询该手机号是否关注公众号
	function queryPhoneVip(phoneNo) {
		var jsonData = {
			command: "get_members_by_phone", // 命令
			phone_num: phoneNo // 手机号
		};
		console.log(1);
		jsonData = JSON.stringify(jsonData);
		$.ajax({
			// async: false,
			url: "http://step.nihaofuture.cn",
			type: "post",
			contentType: "application/x-www-form-urlencoded",
			dataType: "json",
			data: jsonData,
			success: function(data) {
				// console.log(data.data[0].phone_num);
				try {
					console.log(data.data.phone_num);
					if (data.data.phone_num == undefined) {
						alert("请先关注公众号");
						$("#uName").prop("checked", false);
						return 1;
					}
					$("#uNameLabel").text(data.data.nick_name);
					$("#headPic #headPicIn").css("visibility", "visible");
					$("#headPic label").css("visibility", "visible");
					$("#headPic input").css("visibility", "visible");
				} catch (e) {
					console.log(e);
					alert("请先关注公众号");
					// return;
				}
			}
		});
	}

	//点击“查询”按钮查看是否关注公众号
	$("#searchButton").click(function() {
		var phoneNo = $("#phoneNo").val();
		if (phoneNo == null || phoneNo == "") {
			alert("请填写手机号");
			return;
		}
		queryPhoneVip(phoneNo); //15010485111
	});


	//点击“确定”查看是否选中该用户，选中便跳转
	$("#yesAdd").click(function() {
		var isChecked = $("#uName").is(":checked");
		console.log(isChecked);
		if (isChecked) {
			$("#popup").fadeOut();
			setTimeout(function() {
				$("#popup").css("width", "680px");
				$("#popup").css("height", "465px");
				$(".searchPhoneNum").css("display", "none");
				$(".addPersonDate").css("display", "block");
				$(".addPersonDate .titlePngSon").css("left", "242px");
				$(".addPersonDate .titlePngSon").css("top", "-97px");
				$(".addPersonDate .titlePngSon").css("width", "197px");
				$(".addPersonDate .titlePngSon").css("height", "150px");
				$("#adminUser").val($("#phoneNo").val());
				$("#adminUser").attr("disabled","disabled");
			}, 450);

			$("#popup").fadeIn();
		}
	});

	//点击“添加”查看必填内容是否都添加，若添加，则新建管理员
	$("#yes").click(function() { //15010485111
		var personName = $("#personName").val();
		if (personName == null || personName == "") {
			alert("请输入姓名");
			return;
		}
		var sex = $("#sex span").text();

		var role = $("#role span").text();
		if (role == "角色") {
			alert("请选择角色");
			return;
		}
		if (role == "超级管理员") {
			role = "1";
		} else if (role == "总店长") {
			role = "2";
		} else if (role == "分店长") {
			role = "3";
		} else if (role == "店员") {
			role = "4";
		} else if (role == "员工") {
			role ="5";
		}
		var adminUser = $("#adminUser").val();
		// if (adminUser == null || adminUser == "") {
		// 	alert("请输入账号");
		// 	return;
		// }
		var adminPwd = $("#adminPwd").val();
		if (adminPwd == null || adminPwd == "") {
			alert("请输入密码");
			return;
		}
		if(statu1 == "update"){
			console.log("更新");
			updatePerson(adminUser, adminPwd, personName, role, $("#adminUser").val());
			return;
		}
		var jsonData = {
			command: "add_staff", // 命令
			user_name: adminUser, // 用户名
			password: adminPwd, // 密码
			name: personName, // 姓名
			type: role, // 类型 [1 管理员 2 总店长 3 分店长 4 店员 5 员工]
			shop_id: $.cookie("shopId"), // 门店id
			province: $.cookie("proText"), // 省
			city: $.cookie("city"), // 城市
			phone_num: $("#phoneNo").val(), // 手机号
			open_id: "1", // open id
			nick_name: $("#uNameLabel").text(), // 昵称
			mail_box: "1" // 邮箱
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
				if (data.status == "succeed") {
					alert("添加成功");
					$("#popup").css("display", "none");
					$("#mask").css("display", "none");
				}
			}
		});
	});
	$("#frame #sex #sexSelect li").click(function() {
		var value = $(this).text();
		$("#frame #sex span").text(value);
		$("#frame #sex span").css("color", "#000");
	});
	//鼠标悬浮效果
	$("#frame #sex #sexSelect li").hover(function() {
		$(this).css("background", "rgba(230,247,255,1)");
	}, function() {
		$(this).css("background", "RGBA(253, 255, 255, 1)");
	});

	//鼠标悬浮效果
	$("#frame #role #roleSelect li").hover(function() {
		$(this).css("background", "rgba(230,247,255,1)");
	}, function() {
		$(this).css("background", "RGBA(253, 255, 255, 1)");
	});

	//鼠标点击效果
	$("#frame #sex").click(function(event) {
		event.stopPropagation();
		$("#frame #role #roleSelect").css("display", "none");
		if ($("#frame #sex #sexSelect").css("display") == "none") {
			$("#frame #sex #sexSelect").css("display", "block");
		} else {
			$("#frame #sex #sexSelect").css("display", "none");
		}
	});
	//鼠标点击效果
	$("#frame #role").click(function(event) {
		event.stopPropagation();
		$("#frame #sex #sexSelect").css("display", "none");
		if ($("#frame #role #roleSelect").css("display") == "none") {
			$("#frame #role #roleSelect").css("display", "block");
		} else {

			$("#frame #role #roleSelect").css("display", "none");
		}
	});

	//鼠标点击效果
	$("#frame #role #roleSelect li").click(function(event) {
		event.stopPropagation();
		var value = $(this).text();
		$("#frame #role span").text(value);
		$("#frame #role span").css("color", "#000");
		if (value == "超级管理员") {
			$("#frame #role").css("padding-right", "38px");
		} else if (value == "总店长" || value == "分店长") {
			$("#frame #role").css("padding-right", "66px");
		} else {
			$("#frame #role").css("padding-right", "80px");
		}
		$("#frame #role #roleSelect").css("display", "none");
	});
	//鼠标点击效果
	$(document).click(function() {
		$("#frame #role #roleSelect").css("display", "none");
		$("#frame #sex #sexSelect").css("display", "none");
	});
	//鼠标点击效果
	$("#no").click(function() {
		$("#popup").css("display", "none");
		$("#mask").css("display", "none");
	});
})

function initDate() {
	var jsonData = {
		command: "get_shop_address", // 命令
		start_item: 0, // 默认从1开始
		request_items: 5000 // 默认一次取10条
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
			for (var i = 0; i < shopData.length; i++) {
				if ($("#searchShopInput").val() == shopData[i].name && $.cookie("proText") == shopData[i].province) {
					console.log("Add Shop Success For Shop Id:" + shopData[i].shop_id);
					$.cookie("shopId", shopData[i].shop_id);
					$.cookie("proText", shopData[i].province);
					$.cookie("city", shopData[i].city);
				}
			}
		}
	});
}

function addElE(mac, cpu, ip) {
	var jsonData = {
		"command": "add_device", // 命令
		"mac_address": mac, // mac 地址
		"city": $.cookie("proText"), // 城市
		"province": $.cookie("city"), // 省份
		"cpu": cpu, // cpu
		"ip": ip, // ip
		"shop_id": $.cookie("shopId") // 店铺id
	};
	jsonData = JSON.stringify(jsonData);
	$.ajax({
		url: "http://step.nihaofuture.cn",
		type: "post",
		contentType: "application/x-www-form-urlencoded",
		dataType: "json",
		data: jsonData,
		success: function(data) {
			console.log(data);
			if (data.status == "succeed") {
				alert("操作成功");
				queryDevice(0, 10);
				$("#popup").css("display", "none");
				$("#mask").css("display", "none");
			}
		}
	});
}

function updateElE(mac, cpu, ip) {
	var jsonData = {
		"command": "modify_device", // 命令
		"mac_address": mac, // mac 地址
		"city": $.cookie("proText"), // 城市
		"province": $.cookie("city"), // 省份
		"cpu": cpu, // cpu
		"ip": ip, // ip
		"shop_id": $.cookie("shopId") // 店铺id
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
			console.log(data);
			if (data.status == "succeed") {
				alert("操作成功");
				queryDevice(0, 10);
				$("#popup").css("display", "none");
				$("#mask").css("display", "none");
			}
		}
	});
}

function deleteEle(mac, id) {
	var jsonData = {
		"command": "delete_device", // 命令
		"mac_address": mac // mac
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
			console.log(data);
			if (data.status == "succeed") {
				alert("操作成功");
				var tmp = null;
				tmp = id.next();
				id.remove();
				while (true) {
					var no = parseInt(tmp.find("td").eq(0).text()) - 1;
					tmp.find("td").eq(0).text(no);
					tmp = tmp.next();
					if (isNaN(no)) {
						break;
					}
				}
			}
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
			console.log("当前页数：" + e);
			var begin = (e - 1) * endNum;
			queryDevice(begin, endNum);
		},
	});
}

function updatePerson(userName, password, name, type, phoneNum) {
	var jsonData = {
		"command": "modify_staff_info", // 命令
		"user_name": userName, // 用户名
		"password": password, // 密码
		"name": name, // 姓名
		"type": type, // 类型 [1 管理员 2 总店长 3 分店长 4 店员 5 员工]
		"shop_id": $.cookie("shopId"), // 门店id
		"province": $.cookie("proText"), // 省
		"city": $.cookie("city"), // 城市
		"phone_num": phoneNum, // 手机号
		"open_id": "1", // open id
		"nick_name": "1", // 昵称
		"mail_box": "1" // 邮箱
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
			if (data.status == "succeed") {
				alert("操作成功");
				$("#popup").css("display", "none");
				$("#mask").css("display", "none");
			}
		}
	});
}
function deletePerson(phoneNum,id){
	var jsonData = {
		   "command" : "delete_staff_info",       // 命令
		   "user_name":phoneNum             // 用户名
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
			if (data.status == "succeed") {
				alert("操作成功");
				var tmp = null;
				tmp = id.next();
				id.remove();
				while (true) {
					var no = parseInt(tmp.find("td").eq(0).text()) - 1;
					tmp.find("td").eq(0).text(no);
					tmp = tmp.next();
					if (isNaN(no)) {
						break;
					}
				}
			}
		}
	});
	
}