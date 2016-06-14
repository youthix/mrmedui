jQuery.getScript("js/model/loginM.js");



function loadLoginClickHandler(){	
	$("#login").on("click",function(e){	
		e.preventDefault();
		var uname=$("#inputUsername").val();		
		var pass=$("#inputPassword").val();
		var dataToSend="{\"ul\":[{\"un\":\""+uname+"\",\"pwd\":\""+pass+"\"}],\"bid\":\""+bid+"\"}";		
		ajaxReqWithComplexInput(url["login"],reqType["post"],
				true,contentType["json"],dataType["json"],
				dataToSend,null,null,"login");		
	});	
}


function loadNextPage(){
		$("#mainPanel").load( "html/billing/billing.html", function() {
			 // console.log( "Load billing was performed." );		
	});	
	//window.location.href="html/billing/billing.html";return false;
}

$(document).ready(function(){
	loadLoginClickHandler();	
});