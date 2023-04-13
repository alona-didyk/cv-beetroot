// let count = 0;
// let array = [
//   4,
//   "some",
//   true,
//   4,
//   6,
//   7,
//   false,
//   60,
//   70,
//   50,
//   60,
//   "adfsc",
//   "vwsdv",
//   ["vefav", "vsf"],
// ];
// let count = array[8];

// while (count < arr.length) {
//     console.log(arr[count]);
//     count++
// }

// do {
//     console.log('Some text', count);
//     count++
// } while (count < 0);

// for (let i = 0; i < array.length; i++) {
//     console.log(arr[i]);
// }

// for (let i = 0; i <= count; i++) {

//   if (i === 6) {
//     continue;
//   }

//   console.log(i);

//   if (i === 10) {
//     break;
//   }
// }

// let count = 30;

// parent: for (let i = 0; i <= count; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(`First index: ${i}, Second: ${j}`);
//     if (i === 5) {
//       break;
//     }
//   }
// }

// console.log(Array.isArray(array));

// let count;

// let array = [
//   true,
//   5,
//   "1",
//   56,
//   "fgdsd",
//   [1, false, 47, "bsv", 234],
//   [64, false, 8768, "3", true],
// ];

// // console.log(Array.isArray(array));

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   if (Array.isArray(i)) {
//     break;
//   }
// }

// let array = [
//     true,
//     5,
//     "1",
//     56,
//     "fgdsd",
//     [64, false, 8768, "3", true]
//   ];

//   // console.log(Array.isArray(array));

//   for (let i = 0; i < array.length; i++) {

//     const element = array[i];

//     if (Array.isArray(element)) {
//       for (let index = 0; index < element.length; i++) {
//         console.log(element[i]);
//       }
//     } else {
//         console.log(element);
//     }
//   }

// let count = prompt("Type number");
// let i = 0;

// while (i < count) {
//   alert("Number");
//   i++;
// }

// let sheepAnimal = Number(prompt("Вкажіть кількість овець"));
// let result;

// if (sheepAnimal > 0) {
//   for (let i = 1; i <= sheepAnimal; i++) {
//     if (i === 1) {
//       result = i + " вівця...";
//     } else {
//       result += i + " вівця...";
//     }
//   }
//   alert(result);
// } else {
//   alert("Введіть невід'ємне число");
// }

// let num = Number(prompt("Enter the number"));

// for (let i = num; i > 0; i--) {
//     let string = '';
//     for (let a = 0; a < i; a++) {
//         string += i;
//     }
//     console.log(string);
// }
