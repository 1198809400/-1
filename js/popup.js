$(function(){
	// $("#addPerson").click(function(){
	// 	$("#popup").css("display", "block");
	// 	$("#mask").css("display", "block");
	// });
	
	//点击弹框
	$("#addGame").click(function(){
		$("#popup").css("display", "block");
		$("#mask").css("display", "block");
		$("body").css("height","500px");
	});
	$("#popup .close").click(function() {
		$("#popup").css("display", "none");
		$("#mask").css("display", "none");
	});
	$("#popup .close").click(function() {
		$("#popup").css("display", "none");
		$("#mask").css("display", "none");
	});
});