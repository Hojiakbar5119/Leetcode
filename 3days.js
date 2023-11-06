// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
// console.log("react learning");

// let palindrome = (integers) => {
// //   console.log("this number plaindroms");

//   let reverse = integers.split("").reverse();
//   // if(integer)
//   // console.log(integers.split(""));

//   // console.log(reverse);
//   if (integers.split("") != reverse) {
//     return false;
//   }else{
//     true
//   }
// };

// // console.log(palindrome());

// palindrome("121");

// this solved problems in chatgpt

function isPalindrome(x) {
    // Convert the integer to a string
    const str = x.toString();
    
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    // Compare the reversed string with the original string
    return str === reversedStr;
}
