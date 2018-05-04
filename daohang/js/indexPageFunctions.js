function submitS() {
	var str = document.getElementById('kw').value;
	if (IsURL(str)) {
		if (str.indexOf("http") != -1) {
			window.open(str);
		} else {
			var str2 = "http://" + str;
			window.open(str2);
		}
	} else {
		var linkStr = "https://www.baidu.com/s?wd=" + str;
		window.open(linkStr);
	}
}

function submitGoogle() {
	var str = document.getElementById('kw').value;
	if (IsURL(str)) {
		if (str.indexOf("http") != -1) {
			window.open(str);
		} else {
			var str2 = "http://" + str;
			window.open(str2);
		}
	} else {
		var linkStr = "https://www.google.com/search?q=" + str;
		window.open(linkStr);
	}
}

function IsURL(urlStr) {
	var strRegex = /^(((ht|f)tps?):\/\/)?[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
	var re = new RegExp(strRegex);
	if (re.test(urlStr)) {
		return true; 
	} else { 
		return false; 
	}
}

function openTools(url,title,style) {
	if (style == 'mobile') {
		document.getElementById('toolsIframe').style.width = "25%";
		document.getElementById('toolsTitleBody').style.width = "25%";
		document.getElementById('toolsBody').style.padding = "40px 37.5%";
		document.getElementById('toolsFi').style.display = "block";
		document.getElementById('toolsBody').style.display = "block";
		document.getElementById('toolsIframe').src = url;
		document.getElementById('toolsTitle').innerHTML = title;
	} else if (style == 'map') {
		document.getElementById('toolsIframe').style.width = "80%";
		document.getElementById('toolsIframe').style.height = "80%";
		document.getElementById('toolsTitleBody').style.width = "80%";
		document.getElementById('toolsBody').style.padding = "20px 10%";
		document.getElementById('toolsFi').style.display = "block";
		document.getElementById('toolsBody').style.display = "block";
		document.getElementById('toolsIframe').src = url;
		document.getElementById('toolsTitle').innerHTML = title;
	} else {
		document.getElementById('toolsIframe').style.width = "60%";
		document.getElementById('toolsTitle').style.width = "60%";
		document.getElementById('toolsFi').style.display = "block";
		document.getElementById('toolsBody').style.display = "block";
		document.getElementById('toolsIframe').src = url;
		document.getElementById('toolsTitle').innerHTML = title;
	}
}

function closeTools() {
	smallTools();
	document.getElementById('toolsIframe').style.width = "60%";
	document.getElementById('toolsTitleBody').style.width = "60%";
	document.getElementById('toolsBody').style.padding = "40px 20%";
	document.getElementById('toolsFi').style.display = "none";
	document.getElementById('toolsBody').style.display = "none";
	document.getElementById('toolsIframe').src = "";
	document.getElementById('toolsTitle').innerHTML = "&nbsp;";
}

function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	{
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

function delCookie(name) {
	setCookie(name,"",-1);
}

function getSettings() {
	if (getCookie('background') != null && getCookie('search-completing') != "") {
		if (IsURL(getCookie('background'))) {
			var color = getCookie('background');
			var colorA = color.replace(/%3F/g,"?").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%3A/g,":");
			document.getElementById('body').style.background = "url(" + colorA + ")";
			document.getElementById('body').style.backgroundSize = "100% auto";
			document.getElementById('body').style.backgroundAttachment = "fixed";
		} else {
			var color = getCookie('background');
			document.getElementById('body').style.background = color;
			document.getElementById('body').style.backgroundSize = "100% auto";
			document.getElementById('body').style.backgroundAttachment = "fixed";
		}
		if (getCookie('search-completing') != "true") {
			document.getElementById('sc-a').src = "";
			document.getElementById('sc-b').innerHTML = "";
		}
	} else {
		setup();
	}
}

function setup() {
	document.getElementById('setup_body').style.display = "block";
	document.getElementById('toolsFi').style.display = "block";
}

function closeSetup() {
	document.getElementById('setup_body').style.display = "none";
	document.getElementById('toolsFi').style.display = "none";
}

function subSettings() {
	var color = document.getElementById('setup_background').value;
	if (color != "" && color != null) {
		if (IsURL(color)) {
			setCookie('background',color,9999);
			var colorA = color.replace(/%3F/g,"?").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%3A/g,":");
			document.getElementById('body').style.background = "url(" + colorA + ")";
		} else {
			setCookie('background',color,9999);
			document.getElementById('body').style.background = color;
		}
	} else {
		setCookie('background','#ffffff',9999);
		document.getElementById('body').style.background = "#ffffff";
	}
	document.getElementById('body').style.backgroundSize = "100% auto";
	document.getElementById('body').style.backgroundAttachment = "fixed";
	var search = document.getElementById('setup_search').value;
	setCookie('search-completing',search,9999);
	if (search != "true") {
		document.getElementById('sc-a').src = "";
		document.getElementById('sc-b').innerHTML = "";
	}
	closeSetup();
}