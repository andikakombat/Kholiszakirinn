function extractDomain(url) {
	var hostname;
	if (url.indexOf("://") > -1) {hostname = url.split('/')[2];}
	else {hostname = url.split('/')[0];}
	hostname = hostname.split(':')[0];
	hostname = hostname.split('?')[0];
	return hostname;
}
function exception(){
	var exception = new Array();	
	setting.exceptionurl = setting.exceptionurl;
	exception = setting.exceptionurl.split(",");
	return exception;
