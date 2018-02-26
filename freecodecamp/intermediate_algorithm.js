// 1. Sum of all numbers in range
function sumAll([start, end]) {
	let sum = 0;
	let min = start < end ? start : end;
	let max = start < end ? end : start;

	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}
// 2. Diff of 2 array
function diffArray(arr1, arr2) {
	return [
		...arr1.filter(v => !arr2.includes(v)),
		...arr2.filter(v => !arr1.includes(v))
	];
}
// 3. Seek and Destroy
function destroyer(arr, ...el) {
	return arr.filter(v => !el.includes(v));
}
// 4.Wherefore art thou
function whatIsInAName(collection, source) {
	return collection.filter(v => {
		let props = Object.keys(source);
		return props.every(x => source[x] === v[x]);
	});
}
// 5. spinal-tap-case
function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
	return str.replace(/\s|_/g, "-");
}
// 6. Pig Latin
function translatePigLatin(str) {

}