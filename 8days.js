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

function getCount(str) {
    return str.split("");
  }