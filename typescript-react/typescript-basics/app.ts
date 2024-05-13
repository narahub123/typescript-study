// what typescript does
// define a strict type
// use the same type throught coding
let variable = "hello";

// variable = 51; // error : Type 'number' is not assignable to type 'string'.ts(2322)
variable = "hi";

let age = 18;

// age = "eighteen";

let ageWithType: number = 22;

// ageWithType = "eighteen";
ageWithType = 18;

let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean: false;

// multiple types : Union type
let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = [];

// Array
let names = ["john", "jane", "tom"];

// names.push(3); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
names.push("mike");

let numbers = [11, 22, 34];

// numbers.push("mike");
numbers.push(9);

let testStringArray: string[];

// testStringArray = [1, 2, 3]; // Type 'number' is not assignable to type 'string'.ts(2322)
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];

// testNumberArray = [false, "hi", 4]; // Type 'boolean' is not assignable to type 'number'.ts(2322)
testNumberArray = [1, 3, 5];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "two", 3];

// OBJECTS

let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

user.username = "jane";
// user.age = "eighteen";
user.age = 29;
// user.isAdmin = "no";
user.isAdmin = true;

// user.phone = "+1234567"; // Property 'phone' does not exist on type '{ username: string; age: number; isAdmin: boolean; }'.ts(2339)

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

// need to write all the properties in the type
// userObj = {
//   username: "john",
//   age: 23,
// };
// Property 'isAdmin' is missing in type '{ username: string; age: number; }' but required in type '{ username: string; age: number; isAdmin: boolean; }'.ts(2741)
userObj = {
  username: "john",
  age: 23,
  isAdmin: false,
};

// adding a new property which is not in the type, it causes error
// userObj = {
//   username: "john",
//   age: 23,
//   isAdmin: false,
//   phone: "+12345",
// };
// Object literal may only specify known properties, and 'phone' does not exist in type '{ username: string; age: number; isAdmin: boolean; }'.ts(2353)

// optional type
let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "jane",
  age: 34,
  isAdmin: true,
};

userObj2 = {
  username: "jane",
  age: 34,
  isAdmin: true,
  phone: "+12345",
};

// ANY TYPE
// Variable 'testAny' implicitly has an 'any' type,
// but a better type may be inferred from usage.ts(7043)
let testAny; // let testAny : any;

testAny = 12;
testAny = "hi";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, "two", false, [12], { key: "value" }];
