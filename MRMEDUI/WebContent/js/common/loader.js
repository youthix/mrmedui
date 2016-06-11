/**
 * 
 */
jQuery.getScript("js/common/constant.js")
	.done(function() {
		//alert('success');
		/* yay, all good, do something */
	})
	.fail(function() {
		alert('failure');
		/* boo, fall back to something else */
});

jQuery.getScript("js/libs/bootstrap/bootstrap.min.js");

jQuery.getScript("js/model/loginM.js");
jQuery.getScript("js/controller/restcaller.js");
