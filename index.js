// arrow function
// const golden = function goldenFunction() {
//   console.log("this is golden!!");
// };
// golden();

//ES6
const golden = () => console.log("this is golden !!");
golden();

//bject literal di ES5
// const newFunction = function literal(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(firstName + " " + lastName);
//       return;
//     },
//   };
// };
// //Driver Code
// newFunction("William", "Imoh").fullName();

//bject literal di ES6
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
      return;
    },
  };
};
//Driver Code
newFunction("William", "Imoh").fullName();

// 5 // dalam ES5
// const newObject = {
//   firstName: "Harry",
//   lastName: "Potter Holt",
//   destination: "Hogwarts React Conf",
//   occupation: "Deve-wizard Avocado",
//   spell: "Vimulus Renderus!!!",
// };
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;
// // Driver code
// console.log(firstName, lastName, destination, occupation);

// dalam ES6
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};
const { firstName, lastName, destination, occupation, spell } = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation);

// 4. Array Spreading
//ES5
// const west = ["Will", "Chris", "Sam", "Holly"];
// const east = ["Gill", "Brian", "Noel", "Maggie"];
// const combined = west.concat(east);
// //Driver Code
// console.log(combined);

//ES6

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);

// 5. Template Literals
const planet = "earth";
const view = "glass";
// var before =
//   "Lorem " +
//   view +
//   "dolor sit amet, " +
//   "consectetur adipiscing elit," +
//   planet +
//   "do eiusmod tempor " +
//   "incididunt ut labore et dolore magna aliqua. Ut enim" +
//   " ad minim veniam";
var before = ` Lorem ${view} dolor sit amet consectetur adipiscing elit ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;
// Driver Code
console.log(before);
