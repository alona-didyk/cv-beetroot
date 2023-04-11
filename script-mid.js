"use strict";

// 1 завдання

// const num = prompt("Введіть п/'ятирозрядне число");

// if (num.length !== 5) {
//     alert("Це не п'ятирозрядне число");
// } else if ( num === num.split("").reverse().join("")) {
//     alert("Це число - паліндром");
// } else {
//     alert("Це число не є паліндромом");
// }

// 2 завдання

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

// alert(`Purchase amount: ${purchase.toFixed(2)}`);
// alert(`Discounted amount: ${discount.toFixed(2)}`);

// 3 завдання

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= 10; i++) {
//     let num = +prompt(`Введіть ${i} число`);
//     if (num > 0) {
//         positive++
//     } else if (num < 0) {
//         negative++;
//     } else if (num === 0) {
//         zero++;
//     }

//     if (num % 2 === 0) {
//         even++;
//       } else {
//         odd++;
//       }
// }

// alert(`Кількість додатніх чисел: ${positive}
// Кількість від'ємних чисел: ${negative}
// Кількість нулів: ${zero}
// Кількість парних чисел: ${even}
// Кількість непарних чисел: ${odd}`);

// 4 завдання

// let currentDay = "Понеділок";

// while (confirm(`День тижня - ${currentDay}. Хочеш побачити наступний день?`)) {
//   switch (currentDay) {
//     case "Понеділок":
//       currentDay = "Вівторок";
//       continue;
//     case "Вівторок":
//       currentDay = "Середа";
//       continue;
//     case "Середа":
//       currentDay = "Четвер";
//       continue;
//     case "Четвер":
//       currentDay = "П'ятниця";
//       continue;
//     case "П'ятниця":
//       currentDay = "Субота";
//       continue;
//     case "Субота":
//       currentDay = "Неділя";
//       continue;
//     case "Неділя":
//       currentDay = "Понеділок";
//       continue;
//   }
// }
