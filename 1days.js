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

var lengthOfLastWord = function(s) {
    let arr = s.trim()

    return arr.length - arr.lastIndexOf(' ') - 1
};


console.log(lengthOfLastWord("   fly me   to   the moon  "))



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

//? ?