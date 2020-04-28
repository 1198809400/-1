$(function() {
	
	//点击删除店铺时
	$(document).on("click", ".deleteShop", function() {
		if (confirm("确定删除该店铺?")) {
			//点击确定后操作
			var index = $(this).parent("td").parent("tr").index("tr");
			var tr = $(this).parent("td").parent("tr");
			var shopId = $("input[name='shopId" + index + "']").val();
			console.log(shopId);
			var json = {
				"command": "delete_shop_address", // 命令
				"shop_id": shopId, // 店铺id
			};
			json = JSON.stringify(json);
			$.ajax({
				url: "http://step.nihaofuture.cn",
				type: "post",
				contentType: "application/x-www-form-urlencoded",
				dataType: "json",
				data: json,
				success: function(data) {
					if (data.status == "succeed") {
						console.log(data);
						// tr.remove();
						window.location.reload();
					}
				}
			});
		}

	});
})
