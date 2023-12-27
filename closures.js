// use var and print 1 2 3 4 5 using set timeout
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     },1000);
//   }
// }
// x(); // will print '6' 5 times  because var is a global scope and it will update the value to 6 every second. quick fix for it is using let.
// what if i am forced to use var and solve this code??

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000);
//     }
//     close(i);
//   }
//   console.log("namaste");
// }
// x();

// advantages of closure => hiding the data or encapsulation

function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
let close = new Counter();
close.incrementCounter();
close.incrementCounter();
close.decrementCounter();
