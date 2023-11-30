// function DashInsert(str) {
//   const splitar = str.toString().split("");
//   let minusget = "";
//   for (const element of splitar) {
//     if (element % 2 === 1) {
//        (minusget = element + "-");
      
//     }
//   }
// }

// console.log(DashInsert(99946));
function DashInsert(str) {
    const strArray = str.toString().split('');
  
    // Iterate through the array backward
    for (let i = strArray.length - 1; i > 0; i--) {
      const currentDigit = parseInt(strArray[i], 10);
      const prevDigit = parseInt(strArray[i - 1], 10);
  
      // Check if both digits are odd
      if (currentDigit % 2 !== 0 && prevDigit % 2 !== 0 && currentDigit !== 0 && prevDigit !== 0) {
        // Insert a dash between them
        strArray.splice(i, 0, '-');
      }
    }
  
    // Join the array back into a string and return
    return strArray.join('');
  }
  
  
  // Example usage
  console.log(DashInsert(4547-9-3)); // Output: 4547-9-3
  
  