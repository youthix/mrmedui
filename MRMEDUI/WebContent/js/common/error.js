function loadCloseBtnHanlder(){
	$("#btnErrClose").on("click",function(e){	
		e.preventDefault();			
		$("#overlayErr").fadeOut(400);		
	});
}

$(document).ready(function(){
	loadCloseBtnHanlder();
});