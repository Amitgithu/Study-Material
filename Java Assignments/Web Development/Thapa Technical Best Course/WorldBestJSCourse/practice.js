/* function outerFunction(){
    let a = 40;
    let b = 50;
    let name = "Amit";
    let age = 23;

    function sum(c, d){
        return c + d;
    }

    function innerFunction(){
        let num = 20;
        console.log("Sum of two number : " + a + b);
        console.log("Age is ", age);
        sum(a, b);
        return a + b;
    }
    return innerFunction;
}

let closureFunction = outerFunction();

console.dir(closureFunction);

*/

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Hey, I miss you");
        resolve("Promise executed succuessfully");
    }, 2000);
});

console.dir(promise);

promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


let a = 10;


function modify(x){
    console.log("Value of x : ", x);
    return x = 20;
}

console.log(modify(a));
console.log("Value of a : ", a);