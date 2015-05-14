$(document).ready(function(){

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
});