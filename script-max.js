"use strict";

// 1 завдання

// let min = 0;
// let max = 100;
// let guess = Math.floor((max + min) / 2);
// let count = 0;
// let answer = "";

// while (answer !== "=") {
//   answer = prompt(`Ваше число > ${guess}, < ${guess} або = ${guess}?`);

//   if (answer === ">") {
//     min = guess;
//     guess = Math.floor((max + min) / 2);
//     count++;
//   } else if (answer === "<") {
//     max = guess;
//     guess = Math.floor((max + min) / 2);
//     count++;
//   } else if (answer === "=") {
//     alert(`Вгадав число ${guess} за ${count} спроб.`);
//   } else {
//     alert("Будь ласка, введіть '>', '<' або '='");
//   }
// }

// 2 завдання

// for(let a = 2; a <= 9; a++) {
//     for(let b = 1; b <= 10; b++){
//         console.log(a * b);
//     }
// }

// 3 завдання

// let day = prompt("Введіть день:");
// let month = prompt("Введіть місяць:");
// let year = prompt("Введіть рік:");

// let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// let daysInMonth;

// if (month === 4 || month === 6 || month === 9 || month === 11) {
//   daysInMonth = 30;
// } else if (month === 2) {
//     daysInMonth = leapYear ? 29 : 28;
// } else {
//   daysInMonth = 31;
// }

// if (day < daysInMonth) {
//     day++;
// } else {
//     day = 1;
//     if (month < 12) {
//         month++;
//     } else {
//         month = 1;
//         year++;
//     }
// }

// if (day < 10) {
//     day = "0" + day;
// }

// if (month < 10) {
//     month = "0" + month;
// }

// alert(`Наступна дата: ${day}.${month}.${year}`);

