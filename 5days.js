// let obj = {
//     name: "Webbrain",
//     status: "IT Center",
//     founded: 2019,
//   };
  
// //code here


//   for(let value in obj){
//       console.log(value);
//   }
  

// let obj = {
//   name: "Webbrain",
//   status: "IT Center",
//   founded: 2019,
// };

// let handler = {
//   get: function(target, prop) {
//       return target[prop];
//   }
// };

// let proxy = new Proxy({}, handler);

// Object.keys(obj).forEach(function(key) {
//   proxy[key] = obj[key];
//   if(proxy[key] !== obj[name]){

//   }
// });

// for(let value in proxy){
//   console.log(value);
// }


// const arr = [1]

// arrred = arr.reduce((a,b)=>{
//   return a+b
// },1)
// console.log(arrred);


// const timestamp = 1701395966000; // UNIX timestamp
// const date = new Date(timestamp);

// console.log(date.toDateString());
// // console.log;
// // console.log(new Date());


const today = new Date(); // Bugungi sana
const unixTimestamp = today.getTime();

console.log(unixTimestamp); // Unix timestamp
