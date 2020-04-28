$(function(){
	var height1 = $("#tableDiv").height();
	var height2 = $("#tableDiv2").height();
	console.log(height1+height2);
	$("#middleFunction").height(height1+height2+200);
	$("#leftMenu").height(height1+height2+600);
	
	
});