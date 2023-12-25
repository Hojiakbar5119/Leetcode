// const filter_list = (n) => n.filter((num)=>toString(num));
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

function friend(friends) {
  //your code here
  return friends.filter((letter) => letter.length == 4);
}

// console.log(friend(["Ryan", "Kieran", "Mark"]));
//! Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// function sumStr(a,b) {
//   return (+a + +b).toString()
// }
// console.log(sumStr("4","5"));

// function getCount(str) {
//     return str.split("").filter(vowel =>  "aeiou".includes(vowel)).length;
//   }

//   console.log(getCount("salom dunyo"));

// ? nowaday roman integers

// var romanToInt = function (s) {
//   if (s <= 0 || s > 3999) {
//     return false;
//   }
//   const romanNumerals = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I",
//   };
//   let result = "";
//   for (let value in romanNumerals) {
//     while (s >= value) {
//       result += romanNumerals[value];
//       s -= value;
//     }
//   }
//   return result
// };

// console.log(romanToInt(1994));

// var romanToInt = function (s) {
//   const romanNumerals = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     const currentSymbol = s[i];
//     const nextSymbol = s[i + 1];

//     if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
//       result += romanNumerals[currentSymbol + nextSymbol];
//       i++; // Skip the next symbol since it's part of a two-character Roman numeral
//     } else {
//       result += romanNumerals[currentSymbol];
//     }
//   }

//   return result;
// };

// // Example usage:
// const integer = romanToInt("MCMXCIV");
// console.log(integer); // Output: 1994



var intToRoman = function (num) {
  const romanNumerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };

  let result = '';

  for (let value in romanNumerals) {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }

  return result;
};

// Example usage:
const roman = intToRoman(1994);
console.log(roman); // Output: 'MCMXCIV'



