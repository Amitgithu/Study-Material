// console.log(a);
// var a = 20;

// console.log(b);
// let b;

// console.log(a, b);

// function sum(a, b){
//     return a + b;
// }

// sum(20, 30);

// {
//     let c = 30;
//     console.log(c);

//     var d = 40;
//     console.log(d);
// }

// console.log(d);

// async function sum(){
//     setTimeout(()=>{
//         console.log("Running setTimeOut");
//     },0);
//     return await Promise.resolve('How does');
// }

// const a = sum();
// console.log(a);


// function Pet(name){
//     this.name = name;
//     this.getname = () => this.name;
// }

// const cat = new Pet("Amit");

// console.log(cat.getname());

// console.log(cat);

// const {getname} = cat;

// console.log(getname());

// console.log(typeof Pet);







// console.log(a);
// var a = 20;

// let b = 10;
// console.log(b);

// console.log(a, b);

// function sum(a, b){
//     return a + b;
// }
// setTimeout(function hello(){
//     console.log("Running setTimeOut");
// },10000);

// const studentName = "Vinod";

// const enrollStudent = new Promise((resolve, reject) => {
//     // Simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;
//       const studentName = "Vinod";
//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });

// enrollStudent
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });
// sum(20, 30);


// console.log("Start");

//         setTimeout(() => {
//             console.log("TimeOut start");

//             console.log("Timeout End");
//         }, 2000);


//         let pr = new Promise(function promise(resolve, reject) {
//             console.log("Promise handled");
//             resolve("Promise Resolved Called");
//             console.log("Promise Ended");
//         });
//         console.log(pr);
//         pr.then(function success(res) {
//             console.log(res);
//             console.log("Promise then function");
//         });

//         function HandleClick() {

//             setTimeout(() => {
//                 console.log("Handle TimeOut start");

//                 console.log("Handle Timeout End");
//             }, 2000);

//             let prom = new Promise((resolve, reject) => {
//                 console.log("Handle Click Promise");
//                 resolve("Promise inside function executed");
//             }).then((res) => {
//                 console.log(res);
//             });
//             console.log("Button clicked");
//             console.log("Already clicked button");
//         }


//         console.log("End");


const users = [
    {firstName:"Akshay",lastName:"Kumar",age:27},
    {firstName:"Deepak",lastName:"Ojha",age:40},
    {firstName:"Depika",lastName:"Padukon",age:37},
    {firstName:"Pankaj",lastName:"Sharma",age:29},
];


const output = users.reduce(function(acc, curr){
    if(curr.age < 30){
       acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(output);
    