// const miles = 0.621371192;
// let kilometers = prompt("Enter value in kilometers: ");

// const result = kilometers * miles;

// alert(`${result}`);

// const salary = 250;
// const percent = 0.1;
// let month = prompt('monthly salary');

// const result = Number(salary) * percent;
// alert(result);

// let firstName = 'Ivan';
// let age = 27;

// // let result = firstName + ' has ' + age + ' years!'
// // let result = `${firstName} has ${age} years!`;

// // let result = "5" + 5;
// // let result = 5;

// const MAGIC_NUMBER = 0;

// const firstNumber = prompt('First number');
// const operator = prompt('Type operator');
// const secondNumber = prompt('Second number');

// const result = eval(Number(firstNumber) + operator +secondNumber);
// alert(result);

// console.log(result);


// console.log(typeof result);
// const lastName = 'some const';
// let lastName = 'some const';
// lastName = null;

// firstName = 'Ivan';


// console.log(firstName);
// console.log(age);








// var n = prompt("Enter radius of circle (cm)", "");
// var area = n * n * Math.PI;
// var power="\u00B2";
// alert("Area of circle is " + area + " cm"+power);

const distance = prompt('Please enter the distance between the two cities in kilometers');
const time = prompt('Please enter the number of hours you want to reach your destination');

if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
    alert('Invalid input. Distance and time must be positive numbers.');
} else {
const speed = distance / time;
alert(`You need to travel at a speed of ${speed} kilometers per hour to reach your destination in ${time} hours.`);
}



// const distance = prompt("Please enter the distance between the two cities in kilometers:");
// const time = prompt("Please enter the number of hours you want to reach your destination:");
  
// if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
//     alert("Invalid input! Distance and time must be positive numbers.");
// } else {
// const speed = distance / time;
// alert(`You need to travel at a speed of ${speed} kilometers per hour to reach your destination in ${time} hours.`);
//   }


