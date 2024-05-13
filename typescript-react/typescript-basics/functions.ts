// FUNCTIONS

// let sayHi: () => void
let sayHi = () => {
  console.log("hi, welcome");
};

// sayHi = "hi";
// Type 'string' is not assignable to type '() => void'.ts(2322)

// error :
// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355)
// let funcReturnString = (): string => {
//   console.log("hi");
// };
let funcReturnString = (): string => {
  console.log("hi");
  return "lama dev";
};

// let multiple: (num: number) => number
let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

// error
// Type 'number' is not assignable to type 'void'.ts(2322)
// let multiple3 = (num: number): void => {
//   return num * 2;
// };

let sum = (num1: number, num2: number) => {
  return num1 + num2;
};

sum(2, 3);

// optional argument
let sum2 = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum2(2, 3);
