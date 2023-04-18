"use strict";

// МІНІМУМ

const car = {
  brand: "Kia",
  model: "Picanto",
  year: 2017,
  averageSpeed: 100,
  fuelTank: 80,
  fuelConsumption: 10,
  drivers: ["Ivan", "Mark"],
  showInfo: function () {
    console.log(
      `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`
    );
  },
  addDriver: function () {
    if (newName) {
      this.drivers.push(newName);
      alert(`Ім'я ${newName} додано до списку!`);
    } else {
      alert(`Ви не ввели ім'я`);
    }
  },
  checkDriver: function (name) {
    if (this.drivers.includes(name)) {
      alert(`Є водій з ім'ям ${name}`);
    } else {
      alert(`Немає водія з ім'ям ${name}`);
    }
  },
  calculateTrip: function (distance) {
    let time = distance / this.averageSpeed;
    let rest = Math.floor(time / 4);
    time += rest;
    let fuel = Math.round((distance / 100) * this.fuelConsumption);
    alert(
      `Подорож на відстань ${distance} км займе ${time} годин. Водіям потрібно зробити ${rest} перерв. Для подолання такої відстані потрібно ${fuel} л пального.`
    );
  },
};

car.showInfo();

const newName = prompt("Введіть ім'я нового водія");
car.addDriver(newName);

console.log(car.drivers);

const driverName = prompt("Введіть ім'я водія, якого хочете знайти");
car.checkDriver(driverName);

const distance = Number(prompt("Вкажіть відстань яку потрібно подолати у км"));
car.calculateTrip(distance);


// НОРМА