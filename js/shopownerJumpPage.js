$(function(){
	// $("#addShop").click(function() {
	// 	$.cookie("operation","add");
	// 	window.location.href = "addShop.html";
	// });
	// $("#index").click(function() {
	// 	window.location.href = "index.html";
	// });
	
	$(".menuLi").eq(0).click(function(){
		window.location.href = "ShopownerAddShop.html";
	});
	$(".menuLi").eq(1).click(function(){
		window.location.href = "ShopownerVIP.html";
	});
	$(".menuLi").eq(2).click(function(){
		window.location.href = "ShopownerGame.html";
	});
	// $(".href").click(function() {
	// 	window.location.href = "game.html";
	// });
	// $(".href1").click(function() {
	// 	window.location.href = "gamedata.html";
	// });
});