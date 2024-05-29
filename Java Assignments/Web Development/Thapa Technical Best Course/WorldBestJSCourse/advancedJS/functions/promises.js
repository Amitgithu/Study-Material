//* ==========================================
//*  Promise in JavaScript
//* ==========================================

//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//todo 👉 In simpler terms, a promise is like a placeholder for the result of an asynchronous operation. Or A container for the future result or value.

//* It can be in one of three states:

//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.

//? Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.

//* ==========================================
//* Using the Promise Constructor (Class):
//* ==========================================

//? You can create a promise using the Promise constructor. This involves creating a new instance of the Promise class, which takes a function as an argument. This function, often referred to as the "executor function," takes two parameters: resolve and reject. You call resolve when the asynchronous operation is successful and reject when it encounters an error.
// These resolve() and reject() are the methods which are provide by the Javascript.

//* real life example

//todo  1:  default state is pending

//todo 2:  Promise Made:  Your friend promises to call you after 2 days at 6 pm. This is similar to creating a promise in JavaScript.

//todo 3:  Pending Stage:  During the 2-day period, you're in a "pending" stage. You're not sure whether your friend will fulfill the promise (call you) or break the promise (not call you). Similarly, when you create a promise in JavaScript, it starts in a pending state until it either resolves (fulfills) or rejects.

//todo 4: Resolution at a Specific Time:  After 2 days and exactly at 6 pm, you'll know whether the promise is fulfilled (resolved) if your friend calls you, or if it's broken (rejected) if your friend doesn't call. This aligns with the idea that promises in JavaScript resolve or reject, often triggered by asynchronous operations, at a specific point in time.

//* ==========================================
//* 2: Using a Function (Promise Wrapper):
//* ==========================================

//? You can also create a promise by defining a function that returns a promise. This function usually encapsulates some asynchronous operation. Inside this function, you manually create a promise and resolve or reject it based on the result of the asynchronous operation.

// syntax
// function myPromiseFunction() {
//   return new Promise((resolve, reject) => {
//     // Asynchronous operations here
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });
// }


// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Sorry, I can't");
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Don't worry, We all miss you and keep smiling");
//   });

// 1: By default promise has the pending state
// 2: the moment we use setTimeout, we need to handle promises, we can do using then and catch

/* 

Note : 1. When we call the resolve() or reject() method the state of the Promise object will changes means from pending 
          state to the fullfilled or rejected state along with the Promise output or value inside PromiseResult.
       2. Until we do not call resolve() or reject() callback the Promise will remain in pending state.
       3. When we call resolve() callback present inside Promise then it will call the callback function which is defined
          inside .then() method of Promise.
       4. When we call reject() callback then it will call the callback function which is defined inside .catch() method
          of Promise.
       5. When JS see the .then() method it will registered the callback function inside browser the callback function will 
          pass through the callback queue and is called when the call stack is empty and this callback is only executed or 
          register when the resolve() or reject() method will be called.

*/


/*
  1. Before promise we used to depend on callback functions which would result in 
      1.) Callback Hell (Pyramid of doom) | 
      2.) Inversion of control

  2. Inversion of control is overcome by using promise.
    2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
    2.2) A promise has 3 states: pending | fulfilled | rejected.
    2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
    2.4) A promise resolves only once and it is immutable. 
    2.5) Using .then() we can control when we call the cb(callback) function.

  3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of 
     horizontally. Chaining is done using '.then()'.

  4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return 
     a value. This returned value will be used by the next .then()

*/

/*  Promise Revision and Homework By Akshay Saini.

1. Promise can be created using a new Promise() constructor function.
2. This constructor function takes a callback function as argument. 
3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
4. We can only resolve or reject a promise. Nothing else can be done.
5. An error can also be created using new Error('error message').
6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
8. It can be useful in a way if we want to catch error for a particular portion of a chain.
9. We can have multiple catch based on requirement and then a general catch at the end.
10. Always remember to return a value in the promise chain for the next .then to use .
11. * If it returns a value => It will be  used as an argument in next function. 
    * If it is a promise then the next .then in the promise chain is attached to the promise returned by the current 
      callback function.(Matlab jo promise return ho raha hai uske sath next .then() method attach ho jayega jo ki promise
      resolve ya fullfilled hone prr then ke nader jo callback function hai usse involve ya call kar dega).

Homework:


const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderID) {
    return proceedToPayment(orderID)
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt);
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has beed debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message);
  })
  .then(function() {
    console.log('No matter what happens, I will get executed');
  });



function createOrder(cart) {
  const pr = new Promise(function(resolve, reject) {
    // create order
    // Validate Cart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    // logic for createOrder
    const orderId = '12345';
    if (orderId) {
      setTimeout(function() {
        resolve(orderId);
      }, 5000)
    }
  });

  return pr;
}

function proceedToPayment(orderID) {
  // Logic for handling payment.
  // This function returns a promise
  return new Promise(function(resolve, reject) {
    // logic
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  })
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  })
}

function validateCart(cart) {
  // code to validate cart.
  return true;
  // return false;
}


*/


// 
//* ==========================================
//* Promise Methods
//* ==========================================

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.
/* 
1. Until all the Promise doesn't complete its task we can't get the output.
  Promise.all([promise1, promise3, promise2]) 
  Suppose promise1 => 5000ms, promise2 => 100ms, and promise3 => 2000ms then after 5000ms we get our output.

2. We get the output in the form of array in which the array have result of promise in the order we called promise.
  Promise.all([promise1, promise3, promise2]) 
  Suppose promise1 => "Hello 1", promise2 => "Hello 2", and promise3 => "Hello 3" then we get output as ["Hello 1", "Hello 3", "Hello 2"]

3. If any promise failed to fulfilled its task then the result will the reject state message of the failed promise. 
  Promise.all([promise1, promise3, promise2]) 
  Suppose promise1 => "Hello 1", promise2 => "Failed to response", and promise3 => "Hello 3"
  then output will be failed message => Failed to response

*/

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

/* 
  1. Until all the Promise doesn't complete its task we can't get the output.
  Promise.all([promise1, promise3, promise2]) 
  Suppose promise1 => 5000ms, promise2 => 100ms, and promise3 => 2000ms then after 5000ms we get our output.


  2. We get the output in the form of array in which the array have result of promise in the order we called promise.
  Promise.all([promise1, promise3, promise2]) 
  Suppose promise1 => "Hello 1", promise2 => "Hello 2", and promise3 => "Hello 3" then we get output as [{status: "fulfilled", "Hello 1"}, {status: "rejected", "Hello 3"}, {status: "fulfilled", "Hello 2"}]

*/
//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.


/*
  In output we get the message of that promise which take minimum time out of all promises to setted when that promise
  will resolve or reject doesn't matter.

*/

/* 
  Real-life Usage of this concept  : 
    Out of number of API's call we need to determine from which API we get the data first, so the API which brings 
    the data first i will use that data.

*/
// Example usage:

// The enrollStudent function returns a promise that resolves or rejects based on the success or failure of the enrollment process.
// The then method is used to handle the success case, printing a success message.
// The catch method is used to handle the failure case, printing an error message.
// The finally method is used to print a message indicating the completion of the enrollment process, whether successful or not.

// Example usage:
// const studentName = "Vinod";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     // Simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;

//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("First"), 2000)
);

// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 5000)
// );

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Failed"), 100)
);

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000)
);

// Promise.all([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
