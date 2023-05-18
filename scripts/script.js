"use strict";

class Circle {
  constructor(radius) {
    this.circleRadius = radius;
  }

  get radius() {
    return this.circleRadius;
  }

  set radius(value) {
    this.circleRadius = value;
  }

  get diameter() {
    return this.circleRadius * 2;
  }

  circleArea() {
    return Math.PI * this.circleRadius ** 2;
  }

  circleLength() {
    return 2 * Math.PI * this.circleRadius;
  }
}

const num = new Circle(12);
console.log(num.radius);
console.log(num.diameter);
console.log(num.circleArea());
console.log(num.circleLength());

class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }

  write(text, parent = document.body) {
    const p = document.createElement("p");
    p.innerText = text;
    p.style.color = this.color;

    for (let index = 0; index < text.length; index++) {
      if (this.ink > 0) {
        parent.append(p);
        this.ink -= 0.5;
      } else {
        break;
      }
    }
  }
}

class RefillableMarker extends Marker {
  constructor(color, ink, refill) {
    super(color, ink);
    this.refill = refill;
  }

  refillMarker() {
    this.ink = this.refill;
  }
}

const marker = new Marker("blue", 40);
marker.write("Hello World");
console.log(`Ink - ${marker.ink}`);

const refillMarker = new RefillableMarker("pink", 40, 60);
refillMarker.write("Refillable marker");
console.log(`Ink ${refillMarker.ink}`);

refillMarker.refillMarker();
refillMarker.write("Keep using marker");
console.log(`Ink ${refillMarker.ink}`);

class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
    getName() {
      return this.name;
    }
    getPosition() {
      return this.position;
    }
    getSalary() {
      return this.salary;
    }
  }
  
  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
    getHtml() {
      let html = "<table><tr><th>Name</th><th>Position</th><th>Salary</th></tr>";
      for(let employee of this.employees) {
          html += "<tr>";
          html += "<td>" + employee.getName() + "</td>";
          html += "<td>" + employee.getPosition() + "</td>";
          html += "<td>" + employee.getSalary() + "</td>";
          html += "</tr>";
      }
      html += "</table>";
      return html;
    }
  }
  
  const employees = [
      new Employee("Mark", "Artist", 15000),
      new Employee("John", "Doctor", 25000),
      new Employee("Alice", "Driver", 10000),
      new Employee("Jane", "Designer", 35000),
  ];
  
  const empTable = new EmpTable(employees);
  const tableHtml = empTable.getHtml();
  const table = document.createElement('div');
  table.innerHTML = tableHtml;
  document.body.appendChild(table);
  