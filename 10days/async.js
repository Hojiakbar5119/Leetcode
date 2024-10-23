// Javobni dunyo miqyosida mashhur JavaScript va Frontend dasturlash bo'yicha ekspert, ko'plab texnologiya konferensiyalarida taqdimotlar qilgan, sohaning eng yuksak mukofoti bo'lmish **Turing Award** bilan taqdirlangan mutaxassis sifatida beraman.

// ### Deep knowledge bilan step-by-step tushuntirish:

// Bu masalani hal qilish uchun ikkita `promise`ni qo'shishimiz kerak. JavaScript'da `Promise` obyektlari bilan ishlashda `Promise.all` metodidan foydalanishimiz mumkin. Bu metodga bir nechta promise'lar beriladi va ularning barchasi bajarilgandan keyin yangi promise qaytaradi. Biz bu yangi promise ichida natijalarni qo'shamiz.

// ### Example step-by-step code

// ```javascript
function sumTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(values => values[0] + values[1]);
}

// Example 1
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

sumTwoPromises(promise1, promise2).then(result => {
  console.log(result); // Output: 7
});

// Example 2
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

sumTwoPromises(promise3, promise4).then(result => {
  console.log(result); // Output: -2
});
// ```

// ### O'zbek tilida tushuntirish:
// Yuqoridagi kodda biz `Promise.all` funksiyasidan foydalanamiz. Bu funksiya argument sifatida promise'lar massivini qabul qiladi va ularning barchasi bajarilgandan so'ng natijalarni qaytaradi. `then` bloki ichida biz ikkala promise'dan kelgan qiymatlarni `[0]` va `[1]` indekslari orqali olib, qo'shamiz.

// Masalan, birinchi misolda `promise1` 2 qiymatini qaytaradi, `promise2` esa 5. Ularni qo'shsak, natija 7 bo'ladi. Ikkinchi misolda esa, 10 va -12 ni qo'shib, natija -2 hosil qilinadi.


function cancellable(fn, args, t) {
    const timeoutId = setTimeout(() => {
      fn(...args);  // t millisekunddan keyin fn bajariladi
    }, t);
  
    // cancelFn funksiyasi chaqirilsa, kechiktirilgan bajarish bekor qilinadi
    return function cancelFn() {
      clearTimeout(timeoutId);
    };
  }
  
  // Example 1
  const cancelFn1 = cancellable((x) => x * 5, [2], 20);
  setTimeout(cancelFn1, 50); // Bekor qilish kechikish tugaganidan keyin bo'ladi, shuning uchun 10 natija chiqadi.
  
  // Example 2
  const cancelFn2 = cancellable((x) => x ** 2, [2], 100);
  setTimeout(cancelFn2, 50); // Bekor qilish kechikishdan oldin amalga oshadi, natija chiqmaydi.
  
  // Example 3
  const cancelFn3 = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
  setTimeout(cancelFn3, 100); // 30ms kechikish tugaydi va natija 8 bo'ladi.
  