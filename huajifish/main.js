window.onload = function() {
	ph();
}

window.onresize = function() {
	ph();
}

window.onscroll = function() {
	var top = document.body.scrollTop;
	if (top>=600) {
		document.getElementById('menu_bar2').style = "position: fixed;top: 0;left: 0;";
	} else {
		document.getElementById('menu_bar2').style = "position: fixed;top: -68px;left: 0;box-shadow: none;";
	}
}

function ph() {
	var top = document.body.offsetHeight + 400;
	var height = document.getElementById('ph').offsetHeight;
	var a = top - height;
	document.getElementById('ph').style = "top: " + a + "px;" + "left: 220px;";
}

function openI(name) {
	if (name == "zjc") {
		if (document.getElementById("nZjc") != null&&document.getElementById("nZjc") != "") {
			document.getElementById("nZjc").style.display = "block";
		} else {
			var x = document.getElementById('name_zjc').getBoundingClientRect().top;
			var y = document.getElementById('name_zjc').getBoundingClientRect().left;
			var width = document.getElementById('name_zjc').offsetWidth;
			var docStr = document.body.innerHTML;
			var nZjc = '"nZjc"';
			var none = '"none"';
			document.body.innerHTML = docStr + "<div class='name_js' style='position: fixed;top:" + x + "px;width:" + width + "px;left:" + y + "px;z-index: 999999999;background: #d9609b;color: #ffffff;box-shadow: none;' id='nZjc'><div class='name_r' id='zjc_bac'><img src='icons/close.png' style='cursor: pointer;margin: 20px;width: 30px;height: 30px;float: right;display: none;' id='zjc_close' onclick='document.getElementById(" + nZjc + ").style.display = " + none + ";'></div><h1>郑靖川</h1><p id='zjc_p' style='display: none;'>没有什么介绍......</p></div>";
			var str = "document.getElementById('nZjc').style.borderRadius = '0';" + "document.getElementById('nZjc').style.background = '#ffffff';" + "document.getElementById('nZjc').style.color = '#272727';" + "document.getElementById('nZjc').style.width = '100%';" + "document.getElementById('nZjc').style.left = '0';" + "document.getElementById('nZjc').style.boxShadow = '0px 2px 10px rgba(100,149,237,0.5)';";
			var str2 = "document.getElementById('nZjc').style.top = '0';" + "document.getElementById('nZjc').style.height = '100%';";
			setTimeout(str,0);
			setTimeout(str2,400);
			setTimeout("document.getElementById('zjc_bac').style.height = '26%';document.getElementById('zjc_close').style.display = 'block';document.getElementById('zjc_p').style.display = 'block';",400);
		}
	} else if (name == "zmk") {
		if (document.getElementById("nZmk") != null && document.getElementById("nZmk") != "") {
			document.getElementById("nZmk").style.display = "block";
		} else {
			var x = document.getElementById('name_zmk').getBoundingClientRect().top;
			var y = document.getElementById('name_zmk').getBoundingClientRect().left;
			var width = document.getElementById('name_zmk').offsetWidth;
			var docStr = document.body.innerHTML;
			var nZmk = '"nZmk"';
			var none = '"none"';
			document.body.innerHTML = docStr + "<div class='name_js' style='position: fixed;top:" + x + "px;width:" + width + "px;left:" + y + "px;z-index: 999999999;background: #d9609b;color: #ffffff;box-shadow: none;' id='nZmk'><div class='name_r' id='zmk_bac'><img src='icons/close.png' style='cursor: pointer;margin: 20px;width: 30px;height: 30px;float: right;display: none;' id='zmk_close' onclick='document.getElementById(" + nZmk + ").style.display = " + none + ";'></div><h1>张孟轲</h1><p id='zmk_p' style='display: none;'>没有什么介绍......</p></div>";
			var str = "document.getElementById('nZmk').style.borderRadius = '0';" + "document.getElementById('nZmk').style.background = '#ffffff';" + "document.getElementById('nZmk').style.color = '#272727';" + "document.getElementById('nZmk').style.width = '100%';" + "document.getElementById('nZmk').style.left = '0';" + "document.getElementById('nZmk').style.boxShadow = '0px 2px 10px rgba(100,149,237,0.5)';";
			var str2 = "document.getElementById('nZmk').style.top = '0';" + "document.getElementById('nZmk').style.height = '100%';";
			setTimeout(str,0);
			setTimeout(str2,400);
			setTimeout("document.getElementById('zmk_bac').style.height = '26%';document.getElementById('zmk_close').style.display = 'block';document.getElementById('zmk_p').style.display = 'block';",400);
		}
	} else if (name == "zjh") {
		if (document.getElementById("nZjh") != null && document.getElementById("nZjh") != "") {
			document.getElementById("nZjh").style.display = "block";
		} else {
			var x = document.getElementById('name_zjh').getBoundingClientRect().top;
			var y = document.getElementById('name_zjh').getBoundingClientRect().left;
			var width = document.getElementById('name_zjh').offsetWidth;
			var docStr = document.body.innerHTML;
			var nZjh = '"nZjh"';
			var none = '"none"';
			document.body.innerHTML = docStr + "<div class='name_js' style='position: fixed;top:" + x + "px;width:" + width + "px;left:" + y + "px;z-index: 999999999;background: #d9609b;color: #ffffff;box-shadow: none;' id='nZjh'><div class='name_r' id='zjh_bac'><img src='icons/close.png' style='cursor: pointer;margin: 20px;width: 30px;height: 30px;float: right;display: none;' id='zjh_close' onclick='document.getElementById(" + nZjh + ").style.display = " + none + ";'></div><h1>曾金恒</h1><p id='zjh_p' style='display: none;'>没有什么介绍......</p></div>";
			var str = "document.getElementById('nZjh').style.borderRadius = '0';" + "document.getElementById('nZjh').style.background = '#ffffff';" + "document.getElementById('nZjh').style.color = '#272727';" + "document.getElementById('nZjh').style.width = '100%';" + "document.getElementById('nZjh').style.left = '0';" + "document.getElementById('nZjh').style.boxShadow = '0px 2px 10px rgba(100,149,237,0.5)';";
			var str2 = "document.getElementById('nZjh').style.top = '0';" + "document.getElementById('nZjh').style.height = '100%';";
			setTimeout(str,0);
			setTimeout(str2,400);
			setTimeout("document.getElementById('zjh_bac').style.height = '26%';document.getElementById('zjh_close').style.display = 'block';document.getElementById('zjh_p').style.display = 'block';",400);
		}
	} else if (name == "lrk") {
		if (document.getElementById("nLrk") != null && document.getElementById("nLrk") != "") {
			document.getElementById("nLrk").style.display = "block";
		} else {
			var x = document.getElementById('name_lrk').getBoundingClientRect().top;
			var y = document.getElementById('name_lrk').getBoundingClientRect().left;
			var width = document.getElementById('name_lrk').offsetWidth;
			var docStr = document.body.innerHTML;
			var nLrk = '"nLrk"';
			var none = '"none"';
			document.body.innerHTML = docStr + "<div class='name_js' style='position: fixed;top:" + x + "px;width:" + width + "px;left:" + y + "px;z-index: 999999999;background: #d9609b;color: #ffffff;box-shadow: none;' id='nLrk'><div class='name_r' id='lrk_bac'><img src='icons/close.png' style='cursor: pointer;margin: 20px;width: 30px;height: 30px;float: right;display: none;' id='lrk_close' onclick='document.getElementById(" + nLrk + ").style.display = " + none + ";'></div><h1>冷睿康</h1><p id='lrk_p' style='display: none;'>没有什么介绍......</p></div>";
			var str = "document.getElementById('nLrk').style.borderRadius = '0';" + "document.getElementById('nLrk').style.background = '#ffffff';" + "document.getElementById('nLrk').style.color = '#272727';" + "document.getElementById('nLrk').style.width = '100%';" + "document.getElementById('nLrk').style.left = '0';" + "document.getElementById('nLrk').style.boxShadow = '0px 2px 10px rgba(100,149,237,0.5)';";
			var str2 = "document.getElementById('nLrk').style.top = '0';" + "document.getElementById('nLrk').style.height = '100%';";
			setTimeout(str,0);
			setTimeout(str2,400);
			setTimeout("document.getElementById('lrk_bac').style.height = '26%';document.getElementById('lrk_close').style.display = 'block';document.getElementById('lrk_p').style.display = 'block';",400);
		}
	}
}