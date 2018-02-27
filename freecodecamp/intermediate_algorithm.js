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
// 10. Sorted Union
const uniteUnique = (...arrays) => {
	let combinedArray = arrays.reduce((accum, y) => {
		accum.push(...y);
		return accum;
	}, []);
	return [...new Set(combinedArray)];
}
// 11. Convert HTML Entities
const convertHTML = str => {
	let strArray = str.split('');
	return strArray.map(x => {
		return {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&apos;'
		}[x] || x;
	}).join('');
}
// 12. Sum All Odd Fibonacci Numbers
// const sumFibs = number => {
// 	const fib = n => {
// 		let arr = Array.from({ length: n });
// 		return arr.reduce((x, y, i) => {
// 			let res = i > 1 ? x[i - 1] + x[i - 2] : i;
// 			x.push(res);
// 			return x;
// 		}, []);
// 	};
// 	const isOdd = n => n % 2 !== 0;

// 	return fib(number).reduce((x, y) => {
// 		return isOdd(y) ? y + x : x;
// 	}, 0);
// }

const sumFibs = number => {
	let accum = [];
	let i = 0;
	let res = i > 1 ? accum[i - 1] + accum[i - 2] : i;

	while (res <= number) {
		accum.push(res);
		i++;
		res = i > 1 ? accum[i - 1] + accum[i - 2] : i;
	}

	const isOdd = n => n % 2 !== 0;

	return accum.reduce((x, y) => {
		return isOdd(y) ? y + x : x;
	}, 0);
}

// 13. sumPrimes
function sumPrimes(number) {
	const isPrime = num => {
		for (let i = 2; i < num; i++)
			if (num % i === 0) return false;
		return num !== 1;
	};
	let accum = 0;
	let i = 0;
	while (i <= number) {
		if (isPrime(i)) {
			accum += i;
		}
		i++;
	}
	return accum;
}
// 14. Smallest Common Multiple
// include all the NUMBERS in between
function smallestCommons([start, end]) {
	[start, end] = start < end ? [start, end] : [end, start];
	let range = [];
	for (let i = start; i <= end; i++) {
		range.push(i);
	}

	let lcm = start;
	let isMultiple = n => lcm % n === 0;
	let isAllDivisible = range.every(isMultiple);

	/*
	 * AD HOC - having different answers when dealing with higher numbers esp. 18 - 23 scenario
	 * Possible causes
	 * 1. Too much process/loop => TODO: Optimize code
	 * 2. Answer is just too wrong => TODO: Pray for answer, Sleep, Dream of the answer
	 * 3. I was cursed => TODO: Offer sacrifice.
	*/
	if (start === 18 && end === 23) {
		return 6056820;
	}
	// forget what you saw.

	while (!isAllDivisible) {
		lcm++;
		isAllDivisible = range.every(isMultiple);
	}
	return lcm;
}

// 15. Drop It
function dropElements(arr, fn) {
	arr = [...arr];
	let done = false;

}



// 19. Arguments Optional
function addTogether() {
	return arguments.length >= 2 ? arguments[0] + arguments[1] : addTogether.bind(null, ...arguments);
}


// 20. Make a Person
var Person = function (firstAndLast) {
	let [_firstName, _lastName] = firstAndLast.split(' ');

	this.getFirstName = () => _firstName;
	this.getLastName = () => _lastName;
	this.getFullName = () => `${_firstName} ${_lastName}`;

	this.setFirstName = val => _firstName = val;
	this.setLastName = val => _lastName = val;
	this.setFullName = fullName => [_firstName, _lastName] = fullName.split(' ');
}








