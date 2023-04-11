"use strict";

// 1 завдання

// const userAgeAsk = prompt("Вкажіть ваш вік");
// const userAge = parseInt(userAgeAsk);

// if (userAge >= 0 && userAge <= 11) {
// alert("Ви дитина");
// } else if (userAge >= 12 && userAge <= 17) {
//     alert("Ви підліток");
// } else if (userAge >= 18 && userAge <= 59) {
//     alert("Ви дорослий");
// } else if (userAge >= 60) {
//     alert("Ви пенсіонер");
// } else {
//     alert("Ви ввели не правильні дані");
// }

// 2 завдання

// const num = prompt("Введіть число від 1 до 9");

// switch (num) {
//   case "0":
//     alert("Спецсимвол - )");
//     break;
//   case "1":
//     alert("Спецсимвол - !");
//     break;
//   case "2":
//     alert("Спецсимвол - @");
//     break;
//   case "3":
//     alert("Спецсимвол - #");
//     break;
//   case "4":
//     alert("Спецсимвол - $");
//     break;
//   case "5":
//     alert("Спецсимвол - %");
//     break;
//   case "6":
//     alert("Спецсимвол - ^");
//     break;
//   case "7":
//     alert("Спецсимвол - &");
//     break;
//   case "8":
//     alert("Спецсимвол - *");
//     break;
//   case "9":
//     alert("Спецсимвол - (");
//     break;
// }

// 3 завдання

// let firstNum = prompt("Вкажіть початкове значення діапазону");
// let lastNum = prompt("Вкажіть кінцеве значення діапазону");
// let sumNum = 0;

// if (firstNum > lastNum) {
//     alert("Початкове значення не може бути більше за кінцеве");
// } else {
//     for (let i = firstNum; i <= lastNum;) {
//         sumNum += i++;
//     }
//     alert("Сума всіх чисел:" + sumNum);
// }

// 4 завдання

// let firstNum = +prompt("Вкажіть перше число");
// let secondNum = +prompt("Вкажіть друге число");

// while (firstNum != 0 && secondNum != 0) {
//     if (firstNum > secondNum) {
//         firstNum = firstNum % secondNum;
//     } else {
//         secondNum = secondNum % firstNum
//     }
// }

// alert(firstNum+secondNum);

// 5 завдання 

// let num = prompt("Вкажіть число");

// for (let i = 1; i <= num; i++) {
//     if(num % i === 0) {
//         alert(i);
//     }
// }
