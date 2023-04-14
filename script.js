"use strict"

// 1 завдання

function firstTask1(params) {
    // тіло функції
}

const firstTask2 = function name(params) {
    // тіло функції
}

const firstTask3 = (params) => // тіло функції

// 2 завдання

function count(...args) {
    console.log(args.length);
}
count(1, 5)

// 3 завдання

const numFirst = Number(prompt('Вкажіть перше число'));
const numSecond = Number(prompt('Вкажіть друге число'));

function comp(numFirst, numSecond) {
    if (numFirst < numSecond) {
        return '-1'; 
    } else if (numFirst > numSecond) {
        return '1';
    } else {
        return '0';
    } 
}

alert(comp(numFirst, numSecond));

// 4 завдання

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
 alert( factorial(5));

 function factorial2() {
    let num = Number(prompt("Введіть число"));
    let result = 1;

    for (let index = 2; index <= num; index++) {
        result *= index; 
    }
return result;
 }

alert( factorial2())

//   5 завдання

const firstNum = prompt('First number');
const secondNum = prompt('Second number');
const thirdNum = prompt('Third number');

function plusNum(firstNum, secondNum, thirdNum) {
    return Number(firstNum + secondNum + thirdNum);
}

alert(plusNum(firstNum, secondNum, thirdNum));

// 6 завдання

const length = Number(prompt('Введіть довжину прямокутника'));
const width = Number(prompt('Введіть ширину прямокутника'));

function area() {
    if (length && width) {
        return length * width;
    } else if (length) {
        return length * length;
    } else {
        return width * width;
    }
}

const result = area();

alert(`Площа: ${result}`);

// НОРМА

// 1 завдання

function perfectNumber(pNum) {
    let sum = 0;
    for (let i = 1; i < pNum; i++) {
        if (pNum % i === 0) {
            sum += i;
        }
    }
    return sum === pNum;
}

console.log(perfectNumber(6))

// 2 завдання

function typePerfectNumber(min, max) {
    for (let index = min; index <= max; index++) {
        if (perfectNumber(index)) {
            console.log(index);
        }
    }
}

typePerfectNumber(1, 100);