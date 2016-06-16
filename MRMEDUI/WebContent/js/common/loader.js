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

function getContainerClone(sectionVar){
	var theContainer=$(sectionVar);
	var clonedSection="";	
	if(theContainer.length==1){
		clonedSection=$(theContainer).clone(true);
	}
	else clonedSection=$(theContainer[0]).clone(true);
	//And appending it just after current container
	$(clonedSection).insertAfter(theContainer[theContainer.length-1]);	
	return clonedSection;
}

function hideTopRowInContainer(sectionVar){
	var theContainer=$(sectionVar);	
	$(theContainer[0]).hide();
}

function resetContainer(sectionVar){
	var theContainer=$(sectionVar);	
	console.log(theContainer.length);
	for(var i=1;i<=theContainer.length;i++){
	console.log(theContainer[i])	;
	$(theContainer[i]).remove();}
}


function getContainerCloneWithRow(sectionVar,rowSelectorVar){
	var theContainer=$(sectionVar).find(rowSelectorVar);
	var clonedSection="";
	if(theContainer.length==1){
		clonedSection=$(theContainer).clone(true);
	}
	else clonedSection=$(theContainer[0]).clone(true);
	//And appending it just after current container
	$(clonedSection).insertAfter(theContainer[theContainer.length-1]);
	return clonedSection;
}

function openErrorDialog(msg,title)
{
  $( "#errorPanel" ).load( "html/error/default.html", function() {
		  //console.log( "Load was performed." );
	  setDialogMsg(msg,title);
  });  
  $("#errorPanel").css("display","block");     
}

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