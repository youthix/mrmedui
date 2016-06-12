function loadCloseBtnHanlder(){
	$("#btnErrClose").on("click",function(e){	
		e.preventDefault();			
		$("#overlayErr").fadeOut(400);		
	});
}

function setDialogMsg(msg,title){	
	$("#errTitle").html(title);
	$("#errMsg").html(msg);
}

$(document).ready(function(){
	loadCloseBtnHanlder();
});