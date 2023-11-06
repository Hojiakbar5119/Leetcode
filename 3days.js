// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
console.log("react learning");

let palindrome = (integers) => {
//   console.log("this number plaindroms");

  let reverse = integers.split("").reverse();
  // if(integer)
  // console.log(integers.split(""));

  // console.log(reverse);
  if (integers.split("") != reverse) {
    return false;
  }else{
    true
  }
};

// console.log(palindrome());

palindrome("121");
