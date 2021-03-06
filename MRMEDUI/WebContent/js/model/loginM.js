function validateLoginResp(data){	
	if(data!=null){
		var v=checkResStatus(data);
		if(v==true)
		 loadNextPage();
		else return false;
	}	
}

function failureHandlerLogin(jqXHR, textStatus){	
	openErrorDialog(msgs["fatalM"],msgs["fatalT"]+errorCodes[jqXHR.status]);	
}

function checkResStatus(data){
	var res="";
	$.each(data,function(key,val){
		if(key=="resStatus"){
			$.each(val,function(key,val){
				if(key=="code"){
					if(val=="SUCCESS"){
						res=true;
					}	
					else{
						showError(data);
						res=false;
					}
				}
				
			});
		}
	});
	return res;
}

function showError(data){
	$.each(data,function(key,val){
		if(key=="resStatus"){
			$.each(val,function(key,val){
				if(key=="msg"){
					openErrorDialog(val,msgs["unauthT"]);
				}				
			});
		}
	});
}