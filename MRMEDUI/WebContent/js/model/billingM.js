function loadSearchProdResults(data){	
	if(data!=null){
		var v=checkResStatus(data);
		if(v==true)
			populateSearchProdTable(data);
		else return false;
	}	
}

function failureHandlerSearchProduct(jqXHR, textStatus){	
	openErrorDialog(msgs["fatalM"],msgs["fatalT"]+errorCodes[jqXHR.status]);	
}

function populateSearchProdTable(data){
	
	$.each(data,function(key,val){
		if(key=="sl"){
			if(val.length<=0){
				openErrorDialog(msgs["noSearchM"],msgs["noSearchT"]);
				return false;
			}			
		 }
		});
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
					openErrorDialog(val,msgs["noSearchT"]);
				}				
			});
		}
	});
}