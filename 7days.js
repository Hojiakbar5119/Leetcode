// const binaryArrayToNumber = arr => {
//     // your code
//    const binnary =  arr.join('')
//    return parseInt(binnary,2)
//   };

//   console.log(binaryArrayToNumber([1,0,1,0]));
// //? done

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
// function findAverage(array) {
//   // your code here
//   let summ = array.reduce((old, cur) => {
//     return old + cur;
//   }, 0);

//   return summ/array.length
// }

// console.log(findAverage([1, 2, 3]));
// var humanYearsCatYearsDogYears = function (humanYears) {
//     let cat = 0;
//     let dog = 0;
//     if (humanYears == 1) {
//       cat = cat + 15;
//       dog = dog + 15;
//     }
//     if (humanYears == 2) {
//           cat = cat + 15;
//       dog = dog + 15;
//       cat = cat + 9;
//       dog = dog + 9;
//     }
//     if (humanYears >= 3) {
//              cat = cat + 15;
//       dog = dog + 15;
//       cat = cat + 9;
//       dog = dog + 9;
//       for (let i = 3; i <= humanYears; i++) {
//         cat = cat + 4;
//         dog = dog + 5;
//       }
//     }
//     return [humanYears, cat, dog];
//   };
  
//   console.log(humanYearsCatYearsDogYears(1));


var countSheep = function (num){
    //your code here
    let textContent = ''
    for(let i=1; i<=num; i++){
        textContent += `${i} sheep...`
        // textContent +=i
    }

    return textContent
  }

  console.log(countSheep(4));