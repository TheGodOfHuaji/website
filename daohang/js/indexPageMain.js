window.onload = function() {
	// var ideaMain = document.getElementById('id').clientWidth/16;
	// var ideaHeight = ideaMain*9;
	// document.getElementById('idea').style.height = ideaHeight + "px";
	setTimeout("document.getElementById('kw').style = 'transition: 0.4s;-moz-transition: 0.4s;-webkit-transition: 0.4s;-o-transition: 0.4s;';document.getElementById('searchSubmit').style = 'transition: 0.4s;-moz-transition: 0.4s;-webkit-transition: 0.4s;-o-transition: 0.4s;';",400);
	getSettings();
	document.getElementById('set_background').value = getCookie('background');
}

document.onkeydown = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 13) {
		if (document.getElementById('kw') == document.activeElement) {
			submitS();
		}
	}
};
