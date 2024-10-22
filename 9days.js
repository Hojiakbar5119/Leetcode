// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function
 

// Constraints:

// -1000 <= x <= 1000
// 0 <= functions.length <= 1000
// all functions accept and return a single integer



function compose(functions) {
    if (functions.length === 0) {
        return x => x;  // Identity function
    }

    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Example 1
let functions1 = [x => x + 1, x => x * x, x => 2 * x];
let fn1 = compose(functions1);
console.log(fn1(4));  // Output: 65

// Example 2
let functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
let fn2 = compose(functions2);
console.log(fn2(1));  // Output: 1000

// Example 3
let functions3 = [];
let fn3 = compose(functions3);
console.log(fn3(42));  // Output: 42


// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called
 

// Constraints:

// calls is a valid JSON array
// 1 <= calls.length <= 10
// 1 <= calls[i].length <= 100
// 2 <= JSON.stringify(calls).length <= 1000


function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// Example 1
const addFn = (a, b, c) => a + b + c;
const onceAddFn = once(addFn);
console.log(onceAddFn(1, 2, 3));  // Output: 6
console.log(onceAddFn(2, 3, 6));  // Output: undefined

// Example 2
const multiplyFn = (a, b, c) => a * b * c;
const onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4));  // Output: 140
console.log(onceFn2(2, 3, 6));  // Output: undefined
console.log(onceFn2(4, 6, 8));  // Output: undefined
