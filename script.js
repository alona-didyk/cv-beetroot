let user = {};
user.name = "Іван";
user.surname = "Сміт";
user.name = "Петро";
delete user.name;

// const isEmpty = obj => Object.keys(obj).length ? false : true;

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum)

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню",
// };

// multiplyNumeric(menu);

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню",
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
