// Ushbu vazifani yechish uchun `debounce` funksiyasini yaratamiz. `debounce` funksiyasi bajarilishi t millisekundga kechiktiriladi va bu vaqt ichida yana bir marta chaqirilsa, oldingi bajarilish bekor qilinadi.

// O'zingiz kiritgan diagrammada ko'rsatilgandek, har bir chaqiruv o'z vaqtiga yetmasdan yangi chaqiruv kelib tushsa, avvalgi chaqiruv bekor qilinadi. Faqat oxirgi chaqiruv vaqt o‘tganidan so‘ng bajariladi.

// Misol uchun, t = 50ms, chaqiruvlar 30ms, 60ms, va 100ms da bo‘lsa, birinchi ikki chaqiruv bekor qilinadi va faqat 3-chi chaqiruv 150ms da bajariladi.

// Mana sizga to'liq JavaScript yechimi va qanday ishlashini tushuntirish:

// ```javascript
// /**
//  * @param {Function} fn
//  * @param {number} t milliseconds
//  * @return {Function}
//  */
// var debounce = function(fn, t) {
//     let timeout; // oxirgi chaqiruv vaqtini saqlaydi

//     return function(...args) {
//         // Agarda oldingi vaqt taymer mavjud bo'lsa uni to'xtatadi
//         clearTimeout(timeout);

//         // t vaqt kechikishidan so'ng yangi taymer o'rnatiladi
//         timeout = setTimeout(() => {
//             fn(...args); // funksiya chaqiriladi
//         }, t);
//     }
// };

// /**
//  * Misol uchun foydalanish:
//  * const log = debounce(console.log, 100);
//  * log('Salom'); // bekor qilinadi
//  * log('Salom'); // bekor qilinadi
//  * log('Salom'); // t=100ms da bajariladi
//  */
// ```

// ### Tushuntirish

// 1. `timeout` degan o'zgaruvchi yaratamiz va bu oxirgi taymerni saqlash uchun ishlatiladi. Bu taymer har safar yangi chaqiruv kelib tushganda yangilanadi.
// 2. `clearTimeout(timeout)` - har safar funksiya chaqirilganda, avvalgi taymer to‘xtatiladi, shunda avvalgi chaqiruv bekor qilinadi.
// 3. `setTimeout(() => { fn(...args); }, t);` - `t` millisekund kechikishidan so'ng funksiya bajariladi.
// 4. Agar `t` vaqt ichida yangi chaqiruv kelib tushmasa, oxirgi taymerda saqlangan funksiya bajariladi.

// ### Misollar bilan ishlashi

// #### Misol 1
// Input: 
// ```javascript
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// ```
// Natija: `[{"t": 125, inputs: [2]}]`

// Izoh: Birinchi chaqiruv ikkinchi chaqiruv bilan bekor qilindi va faqat ikkinchi chaqiruv `t` kechikish bilan bajarildi.

// #### Misol 2
// Input: 
// ```javascript
// t = 20
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 100, inputs: [2]}
// ]
// ```
// Natija: `[{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]`

// Izoh: Har bir chaqiruv `t` kechikish bilan bajarildi.

// ### Diagrammadagi Izoh

// Diagrammada ko'rib turganingizdek, bir nechta kirish chaqiruvi ketma-ket kelib tushmoqda. Debounced funksiyada esa faqat oxirgi chaqiruvlar ishlamoqda, qolgani kechikish vaqtida bekor qilinadi. Bu foydali bo'lib, funktsiya chaqiruvlari haddan tashqari ko'p bo'lganida, oxirgi chaqiruvlar bilan cheklanadi va resurslar isrof qilinmaydi.

// Agar qo'shimcha savollaringiz bo'lsa, yordam berishdan mamnunman!



/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeout; // oxirgi chaqiruv vaqtini saqlaydi

    return function(...args) {
        // Agarda oldingi vaqt taymer mavjud bo'lsa uni to'xtatadi
        clearTimeout(timeout);

        // t vaqt kechikishidan so'ng yangi taymer o'rnatiladi
        timeout = setTimeout(() => {
            fn(...args); // funksiya chaqiriladi
        }, t);
    }
};

/**
 * Misol uchun foydalanish:
 * const log = debounce(console.log, 100);
 * log('Salom'); // bekor qilinadi
 * log('Salom'); // bekor qilinadi
 * log('Salom'); // t=100ms da bajariladi
 */
