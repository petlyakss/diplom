/*$(document).ready(function(){

var is_chat_open = false; //Проверяем, в каком состоянии чат

function chat_init(){
	$(".chat_header_img_block").html("<img src='user.jpg' alt='kkklkl'>");
	$(".chat_header_text_block").text("Оператор Операторович");	
}

function chat_window_motion(){ //Функция анимации чата
	if(is_chat_open == false){
		$(".chat_main_block").animate({"bottom": "+=400px"}, "slow");
		is_chat_open = true;
		chat_init();
		$("#chat_main_block").draggable();
	}else{
		$(".chat_main_block").animate({"bottom": "-=400px"}, "slow");
		is_chat_open = false;
	}
}


	$(".chat_header_block").click(function(){ //Обработка нажатия на окно чата
		chat_window_motion();
	});
});*/
$(document).ready(function(){
	var is_rpChat_open = false;
	
	$(".rpChat_mini_header").click(function(){
		if(is_rpChat_open == false){
			is_rpChat_open = true;
			$(".rpChat_mini_header").css("display","none");
			$(".rpChat_main_block").css("display","block");
		}else{
			is_rpChat_open = false;
			$(".rpChat_main_block").css("display","none");
			$(".rpChat_mini_header").css("display","block");
		}
	});
	
	$("#rpChat_main_block").draggable();
	$(".fa-arrows-alt").click(function(){
		$(".rpChat_main_block").removeClass("rpChat_main_block_mini");
		$(".rpChat_header_text").removeClass("rpChat_header_text_mini");
		$("#final_span").removeClass("rpChat_textarea_mini");
	});
	$(".fa-minus").click(function(){
		$(".rpChat_main_block").addClass("rpChat_main_block_mini");
		$(".rpChat_header_text").addClass("rpChat_header_text_mini");
		$("#final_span").addClass("rpChat_textarea_mini");
	});
	$(".fa-times").click(function(){
		is_rpChat_open = false;
		$(".rpChat_main_block").css("display","none");
		$(".rpChat_mini_header").css("display","block");
	});
	
});