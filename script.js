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
      `Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nSpeed: ${this.averageSpeed}\nFuel: ${this.fuelTank}\nConsumption: ${this.fuelConsumption}`
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

const now = new Date();

const myDateObject = {
  MS_PER_SECOND: 1000,
  MS_PER_MINUTE: 60000,
  MS_PER_HOUR: 3600000,

  DataType: {
    SECONDS: "SECONDS",
    MINUTES: "MINUTES",
    HOURS: "HOURS",
  },

  buildDate() {
    let date = now;
    console.log(date);
    let changedSeconds = +prompt("Введіть кількість секунд:");
    let changedMinutes = +prompt("Введіть кількість хвилин:");
    let changedHours = +prompt("Введіть кількість годин:");
    date = this.changeDate(date, changedSeconds, this.DataType.SECONDS);
    date = this.changeDate(date, changedMinutes, this.DataType.MINUTES);
    date = this.changeDate(date, changedHours, this.DataType.HOURS);
    console.log(date);
  },

  changeDate(date, time, dataType) {
    const msCount = this.getMilliseconds(dataType);
    return new Date(date.getTime() + time * msCount);
  },

  getMilliseconds(dataType) {
    switch (dataType) {
      case this.DataType.SECONDS:
        return this.MS_PER_SECOND;
      case this.DataType.MINUTES:
        return this.MS_PER_MINUTE;
      case this.DataType.HOURS:
        return this.MS_PER_HOUR;
    }
  },
};

myDateObject.buildDate();