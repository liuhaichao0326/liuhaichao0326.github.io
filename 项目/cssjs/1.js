; $(document).ready(function () {
	$("#top li").each(function(i){
			$(this).hover(function(){
 			$(this).css("color","red");
 		},function(){
 			$(this).css("color","#575757");
 		})
	})
	$("#shujihong").hover(function(){
		$("#shujihong").css("color","red")
	},function(){
		$("#shujihong").css("color","#000")
	})

	$(".topshanglanyou1").hover(function(){
		$(".topshanglanyou1xian").stop(true).slideDown(200).css("display","block")
	},function(){
		$(".topshanglanyou1xian").stop(true).slideUp(200).css("display","none")
	})
	$(".topshanglanyou2").hover(function(){
		$(".topshanglanyou2xian").stop(true).show(200).css("display","block")
	},function(){
		$(".topshanglanyou2xian").stop(true).hide(200).css("display","none")
	})
 	 $("#tapdian").children().click(function(){
            $("#tap").children().eq($(this).index()).fadeIn().css({"display":"block"}).siblings().css("display","none")
        })


})