




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {     
    return amount * 0.1
}

function convertToUpperCase(text) {
    return text.toUpperCase();

}

function findMaximum(num1, num2) {
    return Math.max(num1, num2)
    
}

function isPalindrome(word) {
    return word === word.split("").reverse().join("");

}

function calculateDiscountedPrice(originalPrice,discountPercentage){
    const discount = originalPrice * (discountPercentage / 100); return originalPrice - discount;
}

console.log(calculate(100));
console.log(convertToUpperCase("Hello there"));
console.log(findMaximum(22,27));
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(calculateDiscountedPrice(100, 20));