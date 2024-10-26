// calculator uchun class yozmoqchiman

class Calculator {
    /**
     * @param {number} value
     */
    constructor(value) {
        this.result = value;  // Initialize the result with the given value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;  // Add the value to the current result
        return this;  // Return the current instance for chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;  // Subtract the value from the current result
        return this;  // Return the current instance for chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;  // Multiply the current result by the given value
        return this;  // Return the current instance for chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");  // Throw an error if dividing by zero
        }
        this.result /= value;  // Divide the current result by the given value
        return this;  // Return the current instance for chaining
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);  // Raise the current result to the power of the given value
        return this;  // Return the current instance for chaining
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;  // Return the current result
    }
}

// Example usage:
const actions1 = ["Calculator", "add", "subtract", "getResult"];
const values1 = [10, 5, 7];

const calculator1 = new Calculator(values1[0]);
console.log(calculator1.add(values1[1]).subtract(values1[2]).getResult()); // Output: 8

const actions2 = ["Calculator", "multiply", "power", "getResult"];
const values2 = [2, 5, 2];

const calculator2 = new Calculator(values2[0]);
console.log(calculator2.multiply(values2[1]).power(values2[2]).getResult()); // Output: 100

const actions3 = ["Calculator", "divide", "getResult"];
const values3 = [20, 0];

try {
    const calculator3 = new Calculator(values3[0]);
    calculator3.divide(values3[1]).getResult(); // This will throw an error
} catch (error) {
    console.log(error.message); // Output: "Division by zero is not allowed"
}
