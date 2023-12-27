//
// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], {}));

// const [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, ...c);

// const nest = {
//   start: { x: 1, y: 2 },
//   end: { x: 5, y: 8 },
// };
// const {
//   start: { x: startX, y: startY },
// } = nest;
// console.log(startX);

// function removeFirstTwo(list) {
//   const [a, b, ...shorterList] = list;
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(sourceWithoutFirstTwo);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const ss = {
  max: 59.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.99,
  average: 35.85,
};
// Only change code below this line
const half = ({ max, min } = ss) => (max + min) / 2.0;
// Only change code above this line
console.log(half());
