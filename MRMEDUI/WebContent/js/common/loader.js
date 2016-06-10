/**
 * 
 */

/*$( document ).ready(function() {
	alert("Hi")
	$.getScript("constant.js");
	$.getScript("url.js");
	$.getScript("../controller/restcaller.js");
	alert("Hi2")
	
});*/

	
	jQuery.getScript("constant.js")
	.done(function() {
		alert('success');
		/* yay, all good, do something */
	})
	.fail(function() {
		alert('failure');
		/* boo, fall back to something else */
});