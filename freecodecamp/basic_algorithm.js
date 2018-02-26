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
const truncateString = (str, n) => {
	if (n >= str.length) {
		return str;
	}
	else {
		return `${str.substr(0, n)}...`;
	}
}

// 9. Finders Keepers
const findElement = (arr, predicateFn) => {
	let notFound = true;
	let el;
	arr.map(x => {
		if (notFound) {
			if (predicateFn(x)) {
				el = x;
				notFound = false;
			}
		}
	});
	return el;
}
// 10. BooWho
const booWho = x => typeof x === 'boolean';
// 11. Title Case
const titleCase = str => {
	let lowerStrArray = str.toLowerCase().split(' ');
	return lowerStrArray.map(x => {
		let upperFirst = x.charAt(0).toUpperCase();
		let tail = x.slice(1);
		return upperFirst + tail;
	}).join(' ');
}
// 12. Bounce falsy
const bouncer = arr => arr.filter(Boolean);
// 13. Where do I Belong
const getIndexToIns = (arr, n) => {
	let sorted = [...arr, n].sort((a, b) => a < b ? -1 : 1);
	return sorted.indexOf(n);
}
// 14. Mutations
const mutation = ([str, target]) => {
	let strArray = str.toLowerCase().split('');
	let targetArray = target.toLowerCase().split('');
	return targetArray.every(x => strArray.includes(x));
}
// 15. Chunky Monkey
const chunkArrayInGroups = (arr, n) => {
	let _arr = [...arr];
	let _res = [];

	while (_arr.length > n) {
		_res.push([..._arr.splice(0, n)]);
	}
	_res.push(_arr);
	return _res;
}