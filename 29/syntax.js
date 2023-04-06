var n = prompt("Enter radius of circle (cm)", "");
var area = n * n * Math.PI;
var power="\u00B2";
alert("Area of circle is " + area + " cm"+power);

const distance = prompt('Please enter the distance between the two cities in kilometers');
const time = prompt('Please enter the number of hours you want to reach your destination');

if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
    alert('Invalid input. Distance and time must be positive numbers.');
} else {
const speed = distance / time;
alert('You need to travel at a speed of ${speed} kilometers per hour to reach your destination in ${time} hours.');
}



// const distance = prompt("Please enter the distance between the two cities in kilometers:");
// const time = prompt("Please enter the number of hours you want to reach your destination:");
  
// if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
//     alert("Invalid input! Distance and time must be positive numbers.");
// } else {
// const speed = distance / time;
// alert(`You need to travel at a speed of ${speed} kilometers per hour to reach your destination in ${time} hours.`);
//   }


