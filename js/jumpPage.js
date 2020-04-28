//点击切换页面
$(function(){
	$("#addShop").click(function() {
		$.cookie("operation","add");
		$.removeCookie("shopId");
		window.location.href = "addShop.html";
	});
	$("#index").click(function() {
		window.location.href = "index1.html";
	});
	
	$(".menuLi").eq(0).click(function(){
		window.location.href = "index1.html";
	});
	$(".menuLi").eq(1).click(function(){
		window.location.href = "VIP.html";
	});
	$(".menuLi").eq(2).click(function(){
		window.location.href = "game.html";
	});
	$(".menuLi").eq(3).click(function(){
		window.location.href = "initGame.html";
	});
	$(".menuLi").eq(4).click(function(){
		window.location.href = "coupon.html";
	});
	$(".href").click(function() {
		window.location.href = "game.html";
	});
	$(".href1").click(function() {
		window.location.href = "gamedata.html";
	});
});