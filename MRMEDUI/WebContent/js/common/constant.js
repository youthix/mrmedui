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
};

var msgs = { 
		  "unauthT" : "UNAUTHORIZED"
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

