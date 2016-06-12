function loadCloseBtnHanlder(){
	$("#btnErrClose").on("click",function(e){	
		e.preventDefault();			
		$("#overlayErr").fadeOut(400);		
	});
}

function setDialogMsg(msg){	
	$("#errMsg").html(msg);
}

$(document).ready(function(){
	loadCloseBtnHanlder();
});