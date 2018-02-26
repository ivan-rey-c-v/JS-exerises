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
const translatePigLatin = str => {
	str = str.toLowerCase();
	let getHead = str => str.charAt(0);
	let getTail = str => str.slice(1);
	let isFirstVowel = str => ['a', 'e', 'i', 'o', 'u'].includes(getHead(str));

	const _rec = str => {
		let hasVowel = ['a', 'e', 'i', 'o', 'u'].some(x => str.includes(x));
		if (hasVowel) {
			str = `${getTail(str)}${getHead(str)}`;
			return isFirstVowel(str) ? str : _rec(str);
		} else {
			return str;
		}
	};
	return isFirstVowel(str) ? `${str}way` : `${_rec(str)}ay`;
}
// 7. Search and Replace
const myReplace = (str, target, val) => {
	let isHeadCap = target.charCodeAt(0) >= 65 && target.charCodeAt(0) <= 90;
	if (isHeadCap) {
		val = val.toLowerCase();
		let headCode = val.charCodeAt(0);
		let tail = val.slice(1);
		let headCap = String.fromCharCode(headCode - 32);
		val = `${headCap}${tail}`;
		return str.replace(target, val);
	} else {
		return str.replace(target, val);
	}
}
// 8. DNA Pairing
const pairElement = str => {
	let strArray = str.toUpperCase().split('');
	return strArray.map(x => {
		let pair = {
			A: 'T',
			T: 'A',
			C: 'G',
			G: 'C'
		}[x];
		return [x, pair];
	});
}
// 9. Missing letters
const fearNotLetter = str => {
	str = str.toLowerCase();
	let strArray = str.split('');
	let missingCodes = [];
	strArray.reduce((x, y) => {
		let code_x = x.charCodeAt(0);
		let code_y = y.charCodeAt(0);
		const isOneDiff = (a, b) => (a - b) === 1;

		while (!isOneDiff(code_y, code_x)) {
			code_x += 1;
			missingCodes.push(code_x);
		}
		return y;
	});
	return missingCodes.length === 0 ? undefined : String.fromCharCode(...missingCodes);
}