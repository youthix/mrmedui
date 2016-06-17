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
	var rowContainer="";
	$.each(data,function(key,val){
		if(key=="sl"){
			if(val.length<=0){
				openErrorDialog(msgs["noSearchM"],msgs["noSearchT"]);
				return false;
			}
			else{
				$.each(val,function(key,val){
					rowContainer=getContainerClone("#"+repeatDivs["prod"]);					
					//rowContainer=getContainerCloneWithRow("#prodBody","#"+repeatDivs["prod"]);
					$.each(val,function(key,val){						
					if(key=="bat")	{
						$(rowContainer.find("#bat")).html(val);
					}
					else if(key=="expDt")	{
						$(rowContainer.find("#expDt")).html(val);
					}
					else if(key=="lQty")	{
						$(rowContainer.find("#lQty")).html(val);
					}
					else if(key=="name")	{
						$(rowContainer.find("#name")).html(val);
					}
					else if(key=="type")	{
						var h="<img src=\"images/logo_mini.png\" height=\"20px\" width=\"20px\" />";						
						$(rowContainer.find("#type")).html(h);
					}						
					});
					
				});
			}
		 }
		});
	//Remove Sample container
	hideTopRowInContainer("#prodBody");
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