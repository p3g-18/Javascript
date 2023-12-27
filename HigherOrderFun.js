// // area, circumference and diameter of a circle

// let radius = [3, 2, 4, 6];

// const areaOfCircle = function () {
//   return Math.PI * radius * radius;
// };

// const calculate = function (radi, logic) {
//   const output = [];
//   for (let i = 0; i < radi.length; i++) {
//     output.push(logic(radi[i]));
//   }
//   return output;
// };
// let answer = calculate();
// console.log(answer(radius, areaOfCircle));

let radius = [3, 6, 5, 4];

let area = function (radius) {
  return Math.PI * radius * radius;
};
let circumference = function (r) {
  return 2 * Math.PI * r;
};

let calculate = function (radii, logic) {
  let output = [];n
  2
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radii[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
