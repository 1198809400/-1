$(function(){
	var proAndCity = "";
	
	$(".cityDiv").on("click","p",function(event){
		event.stopPropagation();
		var text = $(this).text();
		$.cookie("city",text);
		$(".cityDiv").css("display","none");
		$("#gunDDiv").height("0");
		$("#gunDDiv").css("border", "0");
		$("#gunDDiv").css("display", "none");
		$(".proText").text(text);
		$(".proText").css("color","black");
	});
	$("#wraap1 li").click(function(event){
		event.stopPropagation();
		console.log(addressArr[0]);
		console.log($(this).offset().top);
		var top = $(this).offset().top;
		$(".cityDiv").css("display","block");
		$(".cityDiv").css("top",top-270);
		var proText = $(this).text();
		console.log(proText);
		if(proText=="北京"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			var html = "<p>东城区</p>"+
			"<p>西城区</p>"+
			"<p>朝阳区</p>"+
			"<p>丰台区</p>"+
			"<p>石景山区</p>"+
			"<p>海淀区</p>"+
			"<p>门头沟区</p>"+
			"<p>房山区</p>"+
			"<p>通州区</p>"+
			"<p>顺义区</p>"+
			"<p>昌平区</p>"+
			"<p>大兴区</p>"+
			"<p>怀柔区</p>"+
			"<p>平谷区</p>"+
			"<p>密云县</p>"+
			"<p>延庆县</p>";
			$(".cityDiv").html(html);
		}else if(proText=="天津"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>和平区</p>"+
			"<p>河东区</p>"+
			"<p>河西区</p>"+
			"<p>南开区</p>"+
			"<p>河北区</p>"+
			"<p>红桥区</p>"+
			"<p>塘沽区</p>"+
			"<p>汉沽区</p>"+
			"<p>大港区</p>"+
			"<p>东丽区</p>"+
			"<p>西青区</p>"+
			"<p>津南区</p>"+
			"<p>北辰区</p>"+
			"<p>武清区</p>"+
			"<p>宝坻区</p>"+
			"<p>宁河县</p>"+
			"<p>静海县</p>"+
			"<p>蓟　县</p>";
			$(".cityDiv").html(html);
		}else if(proText=="上海"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>黄浦区</p>"+
			"<p>卢湾区</p>"+
			"<p>徐汇区</p>"+
			"<p>长宁区</p>"+
			"<p>静安区</p>"+
			"<p>普陀区</p>"+
			"<p>虹口区</p>"+
			"<p>闸北区</p>"+
			"<p>杨浦区</p>"+
			"<p>闵行区</p>"+
			"<p>宝山区</p>"+
			"<p>嘉定区</p>"+
			"<p>浦东新区</p>"+
			"<p>金山区</p>"+
			"<p>松江区</p>"+
			"<p>青浦区</p>"+
			"<p>南汇区</p>"+
			"<p>奉贤区</p>"+
			"<p>崇明县</p>";
			$(".cityDiv").html(html);
		}else if(proText=="重庆"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>万州区</p>"+
			"<p>涪陵区</p>"+
			"<p>渝中区</p>"+
			"<p>大渡口区</p>"+
			"<p>江北区</p>"+
			"<p>沙坪坝区</p>"+
			"<p>九龙坡区</p>"+
			"<p>南岸区</p>"+
			"<p>北碚区</p>"+
			"<p>万盛区</p>"+
			"<p>双桥区</p>"+
			"<p>渝北区</p>"+
			"<p>巴南区</p>"+
			"<p>黔江区</p>"+
			"<p>长寿区</p>"+
			"<p>綦江县</p>"+
			"<p>潼南县</p>"+
			"<p>铜梁县</p>"+
			"<p>大足县</p>"+
			"<p>荣昌县</p>"+
			"<p>璧山县</p>"+
			"<p>梁平县</p>"+
			"<p>城口县</p>"+
			"<p>丰都县</p>"+
			"<p>垫江县</p>"+
			"<p>武隆县</p>"+
			"<p>忠　县</p>"+
			"<p>开　县</p>"+
			"<p>云阳县</p>"+
			"<p>奉节县</p>"+
			"<p>巫山县</p>"+
			"<p>巫溪县</p>"+
			"<p>石柱土家族自治县</p>"+
			"<p>秀山土家族苗族自治县</p>"+
			"<p>酉阳土家族苗族自治县</p>"+
			"<p>彭水苗族土家族自治县</p>"+
			"<p>江津市</p>"+
			"<p>合川市</p>"+
			"<p>永川市</p>"+
			"<p>南川市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="河北"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>石家庄</p>"+
			"<p>唐山市</p>"+
			"<p>秦皇岛</p>"+
			"<p>邯郸市</p>"+
			"<p>邢台市</p>"+
			"<p>保定市</p>"+
			"<p>张家口</p>"+
			"<p>承德市</p>"+
			"<p>沧州市</p>"+
			"<p>廊坊市</p>"+
			"<p>衡水市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="山西"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>太原市</p>"+
			"<p>大同市</p>"+
			"<p>阳泉市</p>"+
			"<p>长治市</p>"+
			"<p>晋城市</p>"+
			"<p>朔州市</p>"+
			"<p>晋中市</p>"+
			"<p>运城市</p>"+
			"<p>忻州市</p>"+
			"<p>临汾市</p>"+
			"<p>吕梁市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="辽宁"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>沈阳市</p>"+
			"<p>大连市</p>"+
			"<p>鞍山市</p>"+
			"<p>抚顺市</p>"+
			"<p>本溪市</p>"+
			"<p>丹东市</p>"+
			"<p>锦州市</p>"+
			"<p>营口市</p>"+
			"<p>阜新市</p>"+
			"<p>辽阳市</p>"+
			"<p>盘锦市</p>"+
			"<p>铁岭市</p>"+
			"<p>朝阳市</p>"+
			"<p>葫芦岛市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="黑龙江"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>哈尔滨市</p>"+
			"<p>齐齐哈尔市</p>"+
			"<p>鸡西市</p>"+
			"<p>鹤岗市</p>"+
			"<p>双鸭山市</p>"+
			"<p>大庆市</p>"+
			"<p>伊春市</p>"+
			"<p>佳木斯市</p>"+
			"<p>牡丹江市</p>"+
			"<p>黑河市</p>"+
			"<p>绥化市</p>"+
			"<p>七台河市</p>"+
			"<p>大兴安岭地区</p>";
			$(".cityDiv").html(html);
		}else if(proText=="江苏"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>南京市</p>"+
			"<p>无锡市</p>"+
			"<p>徐州市</p>"+
			"<p>常州市</p>"+
			"<p>苏州市</p>"+
			"<p>连云港市</p>"+
			"<p>淮安市</p>"+
			"<p>盐城市</p>"+
			"<p>扬州市</p>"+
			"<p>镇江市</p>"+
			"<p>泰州市</p>"+
			"<p>宿迁市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="浙江"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>杭州市</p>"+
			"<p>宁波市</p>"+
			"<p>温州市</p>"+
			"<p>嘉兴市</p>"+
			"<p>湖州市</p>"+
			"<p>绍兴市</p>"+
			"<p>金华市</p>"+
			"<p>衢州市</p>"+
			"<p>舟山市</p>"+
			"<p>台州市</p>"+
			"<p>丽水市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="安徽"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>合肥市</p>"+
			"<p>芜湖市</p>"+
			"<p>蚌埠市</p>"+
			"<p>马鞍山市</p>"+
			"<p>淮南市</p>"+
			"<p>淮北市</p>"+
			"<p>铜陵市</p>"+
			"<p>安庆市</p>"+
			"<p>黄山市</p>"+
			"<p>滁州市</p>"+
			"<p>阜阳市</p>"+
			"<p>宿州市</p>"+
			"<p>巢湖市</p>"+
			"<p>六安市</p>"+
			"<p>亳州市</p>"+
			"<p>池州市</p>"+
			"<p>宣城市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="福建"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>福州市</p>"+
			"<p>厦门市</p>"+
			"<p>莆田市</p>"+
			"<p>三明市</p>"+
			"<p>泉州市</p>"+
			"<p>漳州市</p>"+
			"<p>南平市</p>"+
			"<p>龙岩市</p>"+
			"<p>宁德市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="江西"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>南昌市</p>"+
			"<p>景德镇市</p>"+
			"<p>萍乡市</p>"+
			"<p>九江市</p>"+
			"<p>新余市</p>"+
			"<p>鹰潭市</p>"+
			"<p>赣州市</p>"+
			"<p>吉安市</p>"+
			"<p>上饶市</p>"+
			"<p>抚州市</p>"+
			"<p>宜春市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="山东"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>青岛市</p>"+
			"<p>济南市</p>"+
			"<p>淄博市</p>"+
			"<p>枣庄市</p>"+
			"<p>东营市</p>"+
			"<p>烟台市</p>"+
			"<p>潍坊市</p>"+
			"<p>济宁市</p>"+
			"<p>泰安市</p>"+
			"<p>威海市</p>"+
			"<p>日照市</p>"+
			"<p>莱芜市</p>"+
			"<p>临沂市</p>"+
			"<p>德州市</p>"+
			"<p>聊城市</p>"+
			"<p>滨州市</p>"+
			"<p>荷泽市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="河南"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>郑州市</p>"+
			"<p>开封市</p>"+
			"<p>洛阳市</p>"+
			"<p>平顶山市</p>"+
			"<p>安阳市</p>"+
			"<p>鹤壁市</p>"+
			"<p>新乡市</p>"+
			"<p>焦作市</p>"+
			"<p>濮阳市</p>"+
			"<p>许昌市</p>"+
			"<p>漯河市</p>"+
			"<p>三门峡市</p>"+
			"<p>南阳市</p>"+
			"<p>商丘市</p>"+
			"<p>信阳市</p>"+
			"<p>周口市</p>"+
			"<p>驻马店市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="湖北"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>武汉市</p>"+
			"<p>荆州市</p>"+
			"<p>黄石市</p>"+
			"<p>十堰市</p>"+
			"<p>宜昌市</p>"+
			"<p>襄樊市</p>"+
			"<p>鄂州市</p>"+
			"<p>荆门市</p>"+
			"<p>孝感市</p>"+
			"<p>黄冈市</p>"+
			"<p>咸宁市</p>"+
			"<p>随州市</p>"+
			"<p>仙桃市</p>"+
			"<p>潜江市</p>"+
			"<p>天门市</p>"+
			"<p>神农架林区</p>"+
			"<p>恩施土家族苗族自治州</p>";
			$(".cityDiv").html(html);
		}else if(proText=="湖南"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			// $(".cityDiv").css("width","170");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>广州市</p>"+
			"<p>韶关市</p>"+
			"<p>深圳市</p>"+
			"<p>珠海市</p>"+
			"<p>汕头市</p>"+
			"<p>佛山市</p>"+
			"<p>江门市</p>"+
			"<p>湛江市</p>"+
			"<p>茂名市</p>"+
			"<p>肇庆市</p>"+
			"<p>惠州市</p>"+
			"<p>梅州市</p>"+
			"<p>汕尾市</p>"+
			"<p>河源市</p>"+
			"<p>阳江市</p>"+
			"<p>清远市</p>"+
			"<p>东莞市</p>"+
			"<p>中山市</p>"+
			"<p>潮州市</p>"+
			"<p>揭阳市</p>"+
			"<p>云浮市</p>";
			$(".cityDiv").html(html);
		}else if(proText=="海南"){
			$.cookie("proText",proText);
			$(".cityDiv").html("");
			$(".cityDiv").css("height","196");
			$(".cityDiv").css("overflow","hidden");
			var html = "<p>海口市</p>"+
			"<p>三亚市</p>"+
			"<p>五指山市</p>"+
			"<p>琼海市</p>"+
			"<p>文昌市</p>"+
			"<p>万宁市</p>"+
			"<p>东方市</p>"+
			"<p>定安县</p>"+
			"<p>屯昌县</p>"+  
			"<p>澄迈县</p>"+
			"<p>临高县</p>"+
			"<p>白沙黎族自治县</p>"+
			"<p>昌江黎族自治县</p>"+
			"<p>乐东黎族自治县</p>"+
			"<p>陵水黎族自治县</p>"+
			"<p>琼中黎族苗族自治县</p>"+
			"<p>保亭黎族苗族自治县</p>";
			$(".cityDiv").html(html);
		}
		$(".cityDiv p").addClass("mouseGesture");
	});
	
})