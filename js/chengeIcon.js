//鼠标悬浮效果
$(function() {
	$(".menuLi").hover(function() {
		$(this).find(".displayBar").css("visibility", "visible");
	}, function() {
		$(this).find(".displayBar").css("visibility", "hidden");
	});
})
