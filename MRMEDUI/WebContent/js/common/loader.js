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

jQuery.getScript("js/libs/bootstrap/bootstrap.min.js");
jQuery.getScript("js/controller/restcaller.js");