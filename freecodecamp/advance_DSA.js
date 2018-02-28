// 1. Palindrome
function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  let front = 0;
  let back = str.length - 1;

  // short-circuit when length is EVEN
  if( str.length % 2 === 0 ) return false;

  while(front <= back) {
    if(str.charAt(front) !== str.charAt(back)) return false;
    front++;
    back--;
  }
  return true;
}

// 2. Roman Numeral
function convertToRoman ( number ) {
  let numeral_tuple = {
    "1": 'I',
    "5": 'V',
    "10": 'X',
    "50": 'L',
    "100": 'C',
    "500": 'D',
    "1000": 'M'
  };
  let stringNum = number.toString();
  const arrReversed = Array.from(stringNum).reverse();
  return arrReversed.map( (x, i) => {
    let zeroes = '0'.repeat(i);
    let ones = '1' + zeroes;
    let fives = '5' + zeroes;
    let base = x + zeroes;

    let nx = Number(x);

    let isTwoOrThree = nx > 1 && nx < 4;
    let isSixToEight = nx > 5 && nx < 9;
    if(isTwoOrThree) {
      return numeral_tuple[ones].repeat(x);
    }
    else if(nx === 4) {
      let a = numeral_tuple[ones];
      let b = numeral_tuple[fives];
      return `${a}${b}`;
    }
    else if(isSixToEight) {
      let tails = numeral_tuple[ones].repeat(nx-5);
      return `${numeral_tuple[fives]}${tails}`;
    }
    else if(nx === 9) {
      let a = numeral_tuple[ones];
      let c = numeral_tuple[ones + '0'];
      return `${a}${c}`;
    } else {
      return numeral_tuple[base];
    }
  }).reverse().join('');
}

// 3. Caesars Cipher
function rot13 (str) {
  let arr = str.split(' ');
  return arr.map(x=> {
    let strArr = x.split('');
    return strArr.map(x=> {
      let code = x.charCodeAt();
      if (code >= 65 && code <= 77) {
        code += 13;
      }
      else if (code >= 78 && code <= 90) {
        code -= 13;
      }
      return String.fromCharCode(code);
    }).join('');
  }).join(' ');
}

// 4. Telephone Number Validator
// Can't justify/understand sample implementations in internet
function telephoneCheck() {
}

// 5. Cash Register
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var tuple = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1,
    five: 5,
    ten: 10,
    twenty: 20,
    'one-hundred':100
  };

}