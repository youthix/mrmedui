jQuery.getScript("js/model/billingM.js");


function loadSearchProdClickHandler(){	
	$("#searchProdBtn").on("click",function(e){	
		e.preventDefault();
		resetContainer("#prodBody");
		var vSearchProdTxt=$("#searchProdTxt").val();		
		var dataToSend="{\"sl\":[{\"name\":\""+vSearchProdTxt+"\"}],\"bid\":\""+bid+"\",\"sp\":\"\"}";		
		ajaxReqWithComplexInput(url["searchStock"],reqType["post"],
				true,contentType["json"],dataType["json"],
				dataToSend,null,null,"searchProd");		
	});	
}

function loadResetProdClickHandler(){	
	$("#resetProdBtn").on("click",function(e){	
		e.preventDefault();			
		resetContainer("#prodBody");
	});	
}

/*
function loadNextPage(){
		$("#mainPanel").load( "BillingPage.html", function() {
			 // console.log( "Load billing was performed." );		
	});	
	window.location.href="BillingPage.html";return false;
}*/

$(document).ready(function(){
	loadSearchProdClickHandler();	
	loadResetProdClickHandler();
});