// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
      
//     }
//     displayName();
//   }
//   init();
  

function outer() {
    var a = 10;
    function inner() {
        let b = 40;
        console.log(b);
    } // inner forms a closure with outer
    return inner;
}
outer()(); // 10 // over here first `()` will return inner function and then using second `()` to call inner function 