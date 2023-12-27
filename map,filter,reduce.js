// converting an array to binary

let arr = [4, 5, 6, 7];

// let output = arr.map(function (x) {
//   return x.toString(2);
// });
// console.log(output);

//reduc to find max out of this array

// const output = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(output);

//reduc print {24:2, 21:1, 35:1}
const users = [
  { firstName: "Parth", lastName: "Goswami", age: 24 },
  { firstName: "Purvi", lastName: "Singhal", age: 21 },
  { firstName: "slony", lastName: "Sghal", age: 35 },
  { firstName: "Purvish", lastName: "ghal", age: 24 },
];

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

// const output2 = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output2);

let output3 = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output3);
