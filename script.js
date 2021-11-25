var image = document.querySelector(".image-desktop");
var container = document.querySelector(".image-container-desktop");

window.addEventListener("load", checkImage());
document.body.addEventListener("mouseup", checkImage());

function checkImage() {
	var imgRatio = image.clientWidth / image.clientHeight;
	var contRatio = container.clientWidth / container.clientHeight;
	if (imgRatio > contRatio) {
		container.style.height = image.clientHeight + "px";
		container.style.flex = "0 1 auto";
		console.log("set min");
	} else {
		container.style.height = "auto";
		container.style.flex = "1";
		console.log("set max");
	}
	console.log("checked");
}
