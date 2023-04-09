// const random = Math.floor(Math.random() * 10);

// console.log(random);

// let integer = 2;
// let someString = null;

// // let integerSecond = 4;
// let someStringSecond = '2';
// let stringType = 'string';

// let result = typeof integer === someString;
// let result2 = typeof someStringSecond === stringType;

// let res = result || result2;

// let result = integer === Number(someString);

// result -= 2

// console.log(result--);

// let res = typeof integer === someString;

// let res = someString;

// console.log(res);

// const name = prompt("Name");
// const secondName = prompt("Name Second");

// const cond = name === "Marta" && SecondName === "Ivan";

// if (name === "Ivan") {
//   console.log("Man");
// } else if (name === "Marta" || SecondName === 'inna') {
//   console.log("Female");
// }
// else {
//   console.log("Not a name");
// }

// if (name === "Ivan") {
//   console.log("Man");
// } else {
//   console.log("Not a name");
// }
// name === "Ivan"
//   ? console.log("Man")
//   : name === "Marta"
//   ? console.log("Female")
//   : console.log("Not a name");

// const someString = 'Some text';

// console.log(someString.toLowerCase())

// switch (name.toLowerCase()) {
//   case "Ivan":
//   case "Nazar":
//     console.log("Man");
//     break;
//   case "Marta":
//     console.log("Female");
//     break;

//   default:
//     console.log("Not a name");
//     break;
// }

// let firstNumber = prompt("Enter first number");
// let operator = prompt("Enter operator (+, -, *, /)");
// let secondNumber = prompt("Enter second number");

// let result;

// switch (operator) {
//   case "+":
//     result = firstNumber + secondNumber;
//     break;
//   case "-":
//     result = firstNumber - secondNumber;
//     break;
//   case "*":
//     result = firstNumber * secondNumber;
//     break;
//   case "/":
//     result = firstNumber / secondNumber;
//     break;
//   default:
//     alert("Invalid operator entered");
// }

//   alert(`The result is ${result}`);

// const someText = prompt('Type something');

// if (someText) {
//     console.log(someText);
// } else {
//     throw Error("No text here")
// }

// let purchase = Number(prompt('Enter amount'));
// let discount;

// let result;

// switch (result) {
//   case purchase >= 200 && purchase < 300:
//     discount = purchase * 0.97;
//     break;
//   case purchase >= 300 && purchase < 500:
//     discount = purchase * 0.95;
//     break;
//   case purchase >= 500:
//     discount = purchase * 0.93;
//     break;
//   default:
//     discount = purchase;
// }

// alert(`Purchase amount: ${purchase}`);
// alert(`Discounted amount: ${discount}`);

// let purchase = Number(prompt("Enter amount"));
// let discount;

// if (purchase >= 200 && purchase < 300) {
//   discount = purchase * 0.97;
// } else if (purchase >= 300 && purchase < 500) {
//   discount = purchase * 0.95;
// } else if (purchase >= 500) {
//   discount = purchase * 0.93;
// } else {
//   discount = purchase;
// }

// alert(`Purchase amount: ${purchase}`);
// alert(`Discounted amount: ${discount}`);

// let points = 0;

// let answer1 = prompt('What is the capital of Ukraine?\nA) Kyiv\nB) Lviv\nC) Odesa');
// if (answer1 === "a") {
//     points += 2;
// }

// let answer2 = prompt("What year is it now?\nA) 2023\nB) 2022\nC) 2021");

// if (answer2 === "a") {
//   points += 2;
// }

// let answer3 = prompt("What color is the sun?\nA) yellow\nB) blue\nC) pink");

// if (answer3 === "a") {
//   points += 2;
// }

// alert(`You scored ${points} points.`);