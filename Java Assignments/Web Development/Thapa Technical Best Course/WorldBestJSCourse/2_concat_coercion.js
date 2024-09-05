//* ============================
//* Data Types Section - part 2
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

// const str = "Hello " + "World";
// console.log(str);

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10;
// console.log(sum);

//* ============================
//* Tricky Interview Questions
//* ============================
console.log(10 + "20");  
console.log(9 - "5");
console.log("Java" + "Script");
console.log(" " + " ");
let sum = " " + 0;
console.log(typeof sum);
console.log("vinod" - "thapa");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);


// 1020 4 JavaScript "" object NAN 2 1 1 -1

/* 
The `typeof` operator in JavaScript returns a string that indicates the type of the operand (the value you want to check). Here’s a list of all the possible values that `typeof` can return, along with a brief explanation:

1. "undefined": 
   - Returned when the value is `undefined`.
   - Example: 
    
     let x;
     console.log(typeof x); // "undefined"
     

2. "boolean": 
   - Returned for boolean values: `true` or `false`.
   - Example: 
    
     let flag = true;
     console.log(typeof flag); // "boolean"
     

3. "number": 
   - Returned for numbers, including integers, floats, and special numeric values like `NaN` (Not a Number).
   - Example: 
    
     let num = 42;
     console.log(typeof num); // "number"
     console.log(typeof NaN); // "number"
     

4. "string": 
   - Returned for string values.
   - Example: 
    
     let str = "Hello";
     console.log(typeof str); // "string"
     

5. "bigint": 
   - Returned for BigInt numbers, which are used to represent integers with arbitrary precision.
   - Example: 
    
     let bigIntNum = 123456789012345678901234567890n;
     console.log(typeof bigIntNum); // "bigint"
     

6. "symbol": 
   - Returned for symbols, which are unique and immutable primitive values used as keys for object properties.
   - Example: 
    
     let sym = Symbol("id");
     console.log(typeof sym); // "symbol"
     

7. "object": 
   - Returned for objects, including arrays, `null`, and other objects created with constructors.
   - Example: 
    
     let obj = { key: "value" };
     console.log(typeof obj); // "object"
     
     let arr = [1, 2, 3];
     console.log(typeof arr); // "object"
     
     console.log(typeof null); // "object" (this is a well-known quirk in JavaScript)
     

8. "function": 
   - Returned for functions.
   - Example: 
    
     function myFunc() { return "Hello"; }
     console.log(typeof myFunc); // "function"
     

### Summary of All `typeof` Return Values:
1. `"undefined"`
2. `"boolean"`
3. `"number"`
4. `"string"`
5. `"bigint"`
6. `"symbol"`
7. `"object"`
8. `"function"`

These are the possible return values of the `typeof` operator in JavaScript. */