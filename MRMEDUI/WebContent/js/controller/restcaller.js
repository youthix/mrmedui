/**
 * 
 */
function successHandler(data,varToUpdate,theContainer,source){
	if(source=='login'){
		validateLoginResp(data);
	}
}

function failureHandler(jqXHR, textStatus,theContainer,source){
	if(source=='login'){
		failureHandlerLogin(jqXHR, textStatus);
	}
}

function ajaxReqWithPlainInput(url,method,async,contentType,dataType,dataToSend,varToUpdate,theContainer,source){
	var request=$.ajax({
		url:url,
		method:method,
		aysnc:async,
		contentType:contentType,
		dataType:dataType,
		data:dataToSend
	});
	request.done(function(data) {
		successHandler(data,varToUpdate,theContainer,source);
	});
	request.fail(function(jqXHR, textStatus) {
		failureHandler(jqXHR, textStatus,theContainer,source);
	});
}


function ajaxReqWithComplexInput(url,method,async,contentType,dataType,dataToSend,varToUpdate,theContainer,source){
	
	var request=$.ajax({
		url:url,
		method:method,
		aysnc:async,
		contentType:contentType,
		dataType:dataType,
		data:dataToSend	
	});
	request.done(function(data) {
		successHandler(data,varToUpdate,theContainer,source);
	});
	request.fail(function(jqXHR, textStatus) {
		failureHandler(jqXHR, textStatus,theContainer,source);
	});
}