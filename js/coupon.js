$(function(){
	var type = 0;
	$("input[name=couponType]").change(function(){
		var myvalue = $('input:radio[name=couponType]:checked').val();
		console.log(myvalue);
		type = myvalue;
	});
	$("#yesGo").click(function(){
		var beginTime = $("input[name=couponCanBeginTime]").val();
		var endTime = $("input[name=couponCanEndTime]").val();
		if(beginTime == null || beginTime == "" || beginTime == undefined){
			alert("请选择开始时间");
			return;
		}
		if(endTime == null || endTime == "" || endTime == undefined){
			alert("请选择结束时间");
			return;
		}
		var level = $("#level").val();
		if(level == null || level == "" || level == undefined){
			alert("请指定玩家等级");
			return;
		}
		addCoupon($.myTime.DateToUnix(beginTime),$.myTime.DateToUnix(endTime),level);
	});
})
//优惠券添加函数
/*
	startTime:开始时间
	endTime:结束时间
	class1:等级
	type:类型
*/
function addCoupon(startTime,endTime,class1) {
	var jsonData = {
		"command": "grant_coupon", //命令
		"start_time": startTime,//有效时间
		"end_time": endTime,	//有效时间
		"class": class1, //等级
		"type": "1", //类型
		"hand_out_people": $.cookie("userName") //发放人
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
			if(data.status == "succeed"){
				alert("添加成功");
			}else{
				alert("添加失败");
			}
		}
	});
}

$(function() {
	
	//当复选框发生改变时
	$("#couponPerson1").change(function() {
		if ($("#couponPerson1").is(":checked")) {
			$("#couponPerson2").prop("checked", "checked");
			$("#couponPerson3").prop("checked", "checked");
			$("#couponPerson4").prop("checked", "checked");
		} else {
			$("#couponPerson2").prop("checked", false);
			$("#couponPerson3").prop("checked", false);
			$("#couponPerson4").prop("checked", false);
		}
	});
	//当复选框发生改变时
	$("#couponPerson2").change(function() {
		if ($("#couponPerson2").is(":checked") && $("#couponPerson3").is(":checked") && $("#couponPerson4").is(":checked")) {
			$("#couponPerson1").prop("checked", "checked");
		} else {
			$("#couponPerson1").prop("checked", false);
		}
	});
	//当复选框发生改变时
	$("#couponPerson3").change(function() {
		if ($("#couponPerson2").is(":checked") && $("#couponPerson3").is(":checked") && $("#couponPerson4").is(":checked")) {
			$("#couponPerson1").prop("checked", "checked");
		} else {
			$("#couponPerson1").prop("checked", false);
		}
	});
	//当复选框发生改变时
	$("#couponPerson4").change(function() {
		if ($("#couponPerson2").is(":checked") && $("#couponPerson3").is(":checked") && $("#couponPerson4").is(":checked")) {
			$("#couponPerson1").prop("checked", "checked");
		} else {
			$("#couponPerson1").prop("checked", false);
		}
	});
})
