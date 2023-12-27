// let stocks = {
//   Fruits: ["Strawberry", "Grapes", "Kiwi", "banana"],
//   liquid: ["water", "sparkling water"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let isShopOpen = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our Shop is closed"));
//     }
//   });
// };
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   //promise chaining

//   .then(() => {
//     return order(0o0, () => console.log("production has started"));
//   })

//   .then(() => {
//     return order(2000, () => console.log("fruit was chopped"));
//   })

//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected `)
//     );
//   });

// Akshay' promise hw
// async functions createOrder,ProceedToPayment,OrderSummary, UpdateWallet

let cart = ["Shoes", "Pants", "Pyjamas", "Skirts"];

createOrder(cart).then(function (orderId) {
  console.log(orderId);
});

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const orderId = "1235f";
    setTimeout(function () {
      if (orderId) {
        resolve(console.log(orderId));
      }
    }, 2000);
  });
}
