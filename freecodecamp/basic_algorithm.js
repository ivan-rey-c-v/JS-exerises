// Basic JS Algorithm Scripting

// 1. Convert Celsius to Fahrenheit
function convertToF(celsius) {
	return celsius * 1.8 + 32;
}
// 2. Reverse a string
function reverseString(str) {
	return str.split('').reverse().join('');
}
// 3. Factorialize a Number
function factorialize(n, accum = 1) {
	if (num === 1 || num === 0) {
		return accum;
	} else {
		return factorialize(n - 1, n * accum);
	}
}
// 4. Find the Longest Word in a String
function findLongestWordLength(str) {
	let wordsArr = str.split(' ');
	return wordsArr.reduce((current, next) => {
		return current.length <= next.length ? next : current;
	}).length;
}
// 5. Largest of four
function largestNum(arr) {
	return arr.reduce((current, next) => {
		return current <= next ? next : current;
	});
}
function largestOfFour(subArray) {
	return subArray.map(largestNum);
}
// 6.Confirm the Ending
const confirmEnding = (str, target) => {
	let slicedStr = str.slice(-target.length, str.length);
	console.log(slicedStr, target)
	return slicedStr === target;
}
// 7. Repeat a String Repeat a String
const repeatStringNumTimes = (str, count) => {
	if (count <= 0) {
		return '';
	} else {
		let newStr = str.toString();
		console.log(str);
		for (let i = 1; i < count; i++) {
			str += newStr;
		}
		return str;
	}
}
// 8. Truncate a string
