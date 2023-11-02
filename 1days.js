// console.log("SAlom mening dasturlash tilim ")

// ? Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// var toLowerCase = function(s) {
//     return s.toLowerCase()
// };

// console.log(toLowerCase("SAlom dunyo"))



//? Given a string s consisting of words and spaces, return the length of the last word in the string.

//? A word is a maximal 
//? substring
//?  consisting of non-space characters only.


// var lengthOfLastWord = function(s) {
//     let arr = s.trim().split(" ")

    
//     const last =  arr.length-1

//     return arr[last].length
    
// };


// console.log(lengthOfLastWord("   fly me   to   the moon  "))

// var lengthOfLastWord = function(s) {
//     let arr = s.trim()

//     return arr.length - arr.lastIndexOf(' ') - 1
// };


// console.log(lengthOfLastWord("   fly me   to   the moon  "))



// !
// `arr.lastIndexOf(' ')` kodi string (`arr`) ichida eng oxirgi bo'sh joy (probel)ni izlaydi va uni topganda o'shancha bo'lgan indeksni qaytaradi. 
// `arr.length - arr.lastIndexOf(' ') - 1` formulasi esa eng oxirgi bo'sh joydan qolgani - ya'ni so'nggi so'zni uzunligini hisoblash uchun ishlatiladi.

// Misol uchun:
// ```javascript
// const text = "   fly me   to   the moon  ";
// const lastSpaceIndex = text.lastIndexOf(' '); // 20
// const lastWordLength = text.length - lastSpaceIndex - 1; // 4
// ```

// Ustuvor masala misolida kod foydalaniladi.

//? Valid anagram  
//  !  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// var isAnagram = function(s, t) {
//     // if(s.split('').sort() !== t.split('').sort()){
//     //     return false
//     // } else{
//     //     return true
//     // }


//     let after = s.split('').sort().join('')
//    let last=  t.split('').sort().join('')

//   if(after == last){
//     return true
//   }
//   else{
//     return false
//   }

// };


// console.log(isAnagram('isAnagram','Ainsagram'))






// ? Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// 
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function(nums, n) {
    let result = []
    for(let i=n; i<nums.length; i++){

        // result.push(nums[i])
        // result.push(num+i)
        result.push(nums[i+n])
    }
    return result
};

console.log([2,5,2,3,4,7],2)
