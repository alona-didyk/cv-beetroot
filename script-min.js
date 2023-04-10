"use strict"

// 1 завдання

const userAgeAsk = prompt("Вкажіть ваш вік");
const userAge = parseInt(userAgeAsk);

if (userAge >= 0 && userAge <= 11) {
alert("Ви дитина");
} else if (userAge >= 12 && userAge <= 17) {
    alert("Ви підліток");
} else if (userAge >= 18 && userAge <= 59) {
    alert("Ви дорослий");
} else if (userAge >= 60) {
    alert("Ви пенсіонер");
} else {
    alert("Ви ввели не правильні дані");
}