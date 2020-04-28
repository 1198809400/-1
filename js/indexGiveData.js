function clickF(id) {
	var index = id.parent().index("tr");
	var shop = id.parent().find("td");
	var shopName = shop.eq(1).text();
	// console.log(shopName);
	var shopID = shop.eq(2).text();
	var shopCity = shop.eq(3).text();
	var shopPro = shop.eq(4).text();
	var shopAddress = shop.eq(5).text();
	var time = shop.eq(6).text().split("-");
	var shopOpeningTime = time[0];
	var shopEndingTime = time[1];
	//手机号
	var shopPhoneNum = $("input[name='cellPhoneNum" + index + "']").val();
	//座机号
	var landlineNum = $("input[name='landlineNum" + index + "']").val();
	//经度
	var longitude = $("input[name='longitude" + index + "']").val();
	//纬度
	var latitude = $("input[name='latitude" + index + "']").val();
	// console.log(shopPhoneNum);
	// console.log(shopOpeningTime);

	// console.log($(this).parent("td").parent("tr").index("tr"));
	var htmlStr = "addShop.html?operation=look&shopName=" + shopName +
		"&shopID=" + shopID +
		"&shopCity=" + shopCity +
		"&shopPro=" + shopPro +
		"&shopAddress=" + shopAddress +
		"&shopOpeningTime=" + shopOpeningTime +
		"&shopEndingTime=" + shopEndingTime +
		"&shopPhoneNum=" + shopPhoneNum +
		"&landlineNum=" + landlineNum +
		"&longitude=" + longitude +
		"&latitude=" + latitude;
	window.location.href = htmlStr;
}
//将index店铺首页中的数据通过超链接传给下一个页面
$(function() {
	$(document).on("click", ".tableclick", function() {
		clickF($(this));
	});
	$(document).on("click", ".editShop", function() {
		var index = $(this).parent("td").parent("tr").index("tr");
		var shop = $(this).parent("td").parent("tr").find("td");
		var shopName = shop.eq(1).text();
		// console.log(shopName);
		var shopID = shop.eq(2).text();
		var shopCity = shop.eq(3).text();
		var shopPro = shop.eq(4).text();
		var shopAddress = shop.eq(5).text();
		var time = shop.eq(6).text().split("-");
		var shopOpeningTime = time[0];
		var shopEndingTime = time[1];
		//手机号
		var shopPhoneNum = $("input[name='cellPhoneNum" + index + "']").val();
		//座机号
		var landlineNum = $("input[name='landlineNum" + index + "']").val();
		//经度
		var longitude = $("input[name='longitude" + index + "']").val();
		//纬度
		var latitude = $("input[name='latitude" + index + "']").val();
		// console.log(shopPhoneNum);
		// console.log(shopOpeningTime);

		// console.log($(this).parent("td").parent("tr").index("tr"));
		var htmlStr = "addShop.html?operation=change&shopName=" + shopName +
			"&shopID=" + shopID +
			"&shopCity=" + shopCity +
			"&shopPro=" + shopPro +
			"&shopAddress=" + shopAddress +
			"&shopOpeningTime=" + shopOpeningTime +
			"&shopEndingTime=" + shopEndingTime +
			"&shopPhoneNum=" + shopPhoneNum +
			"&landlineNum=" + landlineNum +
			"&longitude=" + longitude +
			"&latitude=" + latitude;
		window.location.href = htmlStr;
	})
	// $(".editShop").click(function(){

	// var shopEndingTime = $(this).parent("td").parent("tr").find("td").eq(6).text();
	// });
});
