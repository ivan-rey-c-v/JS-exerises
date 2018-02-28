// 1. Palindrome
function palindrome(str) {
  str = str.replace(/[^a-zA-z]/g, '').toLowerCase();
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
function toRomanNumeral ( number ) {
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



