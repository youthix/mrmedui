/**
 * 
 */
/*
 * Service URLs
 * */
var url = { 
  "login" : "http://localhost/mrmedservices/rest/service/login",
  "getUser" : "http://localhost/mrmedservices/rest/service/get/users",
  "saveUser" : "http://localhost/mrmedservices/rest/service/get/users",
  "getCustomer" : "http://localhost/mrmedservices/rest/service/get/customer",
  "saveCustomer" : "http://localhost/mrmedservices/rest/service/get/customer",
  "searchStock" : "http://localhost/mrmedservices/rest/service/search/stock"
};

var repeatDivs={
		"prod" : "prodRow"
}

var msgs = { 
		  "unauthT" : "UNAUTHORIZED",
		  "fatalT" :  "FATAL#",
		  "fatalM" : "OOPS something went wrong here! <br> Please contact support team and report this error!",
		  "noSearchT" : "SEARCH_UNSUCCESSFUL",
		  "noSearchM" : "No record matching your search criteria is found.<br>Please try again.",
		   };

var errorCodes={
		"404":"ERROR_404 ",
		"500":"ERROR_500 ",
		"404":"ERROR_401 "
};

var bid="stockist_dummy";

var reqType={
		"get":"GET",
		"post":"POST",
		"put":"PUT",
		"delete":"DELETE"
};

var contentType={
	"www":"application/x-www-form-urlencoded",
	"multipart":"multipart/form-data",
	"text":"text/plain",
	"json":"application/json; charset=UTF-8"
};

var dataType={
		"xml":"xml",
		"html":"html",
		"script":"script",
		"json":"json",
		"jsonp":"jsonp",
		"text":"text"
};

