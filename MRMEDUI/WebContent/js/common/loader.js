/**
 * 
 */
jQuery.getScript("js/common/constant.js")
	.done(function() {
		//alert('success');
		
	})
	.fail(function() {
		alert('Failure');
});

function loadLoginPage(){
	$( "#mainPanel" ).load( "html/login/login.html", function() {
		  //console.log( "Load was performed." );
		});	
}

jQuery.getScript("js/libs/bootstrap/bootstrap.min.js");
jQuery.getScript("js/controller/restcaller.js");

$(document).ready(function(){
	loadLoginPage();
});