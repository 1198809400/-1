//通过js控制输入框的样式变化
$(function() {
	var isFocus = true;
	$(".inputText").focus(function() {
		isFocus = false;
		$(this).css("border", "1px solid rgba(114,92,215,1)");
	});
	$(".inputText").blur(function() {
		isFocus = true;
		$(this).css("border", "1px solid rgba(114,92,215,0.3);");
	});

	$("#phoneNum").blur(function() {
		var phoneText = $(this).val();
		console.log(phoneText);
		if ($.trim(phoneText) == "" || $.trim(phoneText) == null) {
			return false;
		}
		if (!(/^1[3456789]\d{9}$/.test(phoneText))) {
			$("#phoneNumError").fadeIn();
			setTimeout(function() {
				$("#phoneNumError").fadeOut();
			}, 2000);
			$.cookie("isPhoneRight","false");
			return false;
		}
		$.cookie("isPhoneRight","true");
	});
	$(".inputText").hover(function() {
		if ($(this).css("border-color") == "rgb(114, 92, 215)") {
			console.log("123");
			isFocus = false;
			return false;
		}
		isFocus = true;
		$(this).css("border", "1px solid rgba(114,92,215,1)");
	}, function() {
		console.log($(this).css("border-color"));
		if (isFocus) {
			$(this).css("border", "1px solid rgba(114,92,215,0.3)");
		}

	});
	$("#searchAddress").hover(function() {
		if ($(this).css("border-color") == "rgb(114, 92, 215)") {
			console.log("123");
			isFocus = false;
			return false;
		}
		isFocus = true;
		$(this).css("border", "1px solid rgba(114,92,215,1)");
	}, function() {
		console.log($(this).css("border-color"));
		if (isFocus) {
			$(this).css("border", "1px solid rgba(114,92,215,0.3)");
		}
	
	});
	
});
