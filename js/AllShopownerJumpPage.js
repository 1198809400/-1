//鼠标点击 跳转页面  总店长页面使用
$(function(){
	$("#addShop").click(function() {
		$.cookie("operation","add");
		window.location.href = "AllShopownerAddShop.html";
	});
	$("#index").click(function() {
		window.location.href = "AllShopownerIndex.html";
	});
	
	$(".menuLi").eq(0).click(function(){
		window.location.href = "AllShopownerAddShop.html";
	});
	$(".menuLi").eq(1).click(function(){
		window.location.href = "AllShopownerVIP.html";
	});
	$(".menuLi").eq(2).click(function(){
		window.location.href = "game.html";
	});
	$(".href").click(function() {
		window.location.href = "game.html";
	});
	$(".href1").click(function() {
		window.location.href = "gamedata.html";
	});
});