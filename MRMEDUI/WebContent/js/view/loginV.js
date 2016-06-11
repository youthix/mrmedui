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
	window.location.href='BillingPage.html';
}

$(document).ready(function(){	
	loadLoginClickHandler();
});