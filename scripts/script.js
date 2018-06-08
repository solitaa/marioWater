var audioBool = true;
$(document).ready(function () {
	
	var mainDiv = $("<div/>").attr("id", "map").appendTo("body");
	var d = $("<div/>");
	d.appendTo(mainDiv);
	var i = $("<img/>").attr({ "src": "images/mario-bros.jpg", "id": "st" });
	d.append(i);
	$("#st").css({
		"height": "600px"
	});

	d.css({
		"position": "absolute",
		"margin": "0 auto"
	});
	var p1 = $("<p/>").attr("id", "start");
	var p2 = $("<p/>").attr("id", "continue");
	p1.appendTo(d);
	p2.appendTo(d);
	p1.text("NEW GAME");
	p2.text("CONTINUE");
	$("#start").css({
		"color": "white",
		"font-size": "30px",
		"position": "absolute",
		"left": "320px",
		"top": "320px"
	});
	$("#continue").css({
		"color": "white",
		"font-size": "30px",
		"position": "absolute",
		"left": "320px",
		"top": "370px"
	});
	p1.click(changeView);
	p2.click(changeView);
});

