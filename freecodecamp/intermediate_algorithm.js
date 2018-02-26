// 5. spinal-tap-case
function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
	return str.replace(/\s|_/g, "-");
}