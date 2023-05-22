class User {
  constructor(name, role) {
    if (
      name === undefined ||
      role === undefined ||
      (role !== "admin" && role !== "user")
    ) {
      alert("Некоректне значення поля");
      return;
    }

    this.name = name;
    this.role = role;
    this.password = "";
    this.loggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    this.password = newPassword;
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(name, role) {
    const user = new User(name, role);
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  changeUserRole(user, newRole) {
    if (newRole !== "admin" && newRole !== "user") {
      alert("Невірно вказана роль");
    } else {
      user.role = newRole;
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }
}

const admin = new Admin("Ivan");
console.log(`${admin.getName()}, ${admin.getRole()}`);

admin.addUser("Ivan", "admin");
admin.addUser("Olena", "user");
admin.addUser("Maria", "user");
admin.changeUserRole(admin.users[2], "admin");
console.log(admin.getAllUsers());

const user = new User("Petro", "user");
user.changePassword("123");
user.login();
console.log(
  `Користувач ${user.getName()} залогінений з паролем ${user.password}`
);


class WorldClock {
    constructor(timezone) {
      this.timezone = timezone;
    }
  
    getCurrentDate() {
      const now = new Date();
      const options = { timeZone: this.timezone, dateStyle: 'full' };
      return now.toLocaleDateString(undefined, options);
    }
  
    getCurrentDateTime() {
      const now = new Date();
      const options = { timeZone: this.timezone, timeStyle: 'long' };
      return now.toLocaleString(undefined, options);
    }
  }
  
  const clockDashboard = document.getElementById('clockDashboard');
  const timezoneInput = document.getElementById('timezoneInput');
  const addClockBtn = document.getElementById('addClockBtn');
  
  addClockBtn.addEventListener('click', () => {
    const timezone = timezoneInput.value.trim();
    if (timezone !== '') {
      const clock = new WorldClock(timezone);
      addClockToDashboard(clock);
    }
  });
  
  function addClockToDashboard(clock) {
    const clockDiv = document.createElement('div');
    clockDiv.classList.add('clock');
  
    const timezoneText = document.createElement('p');
    timezoneText.textContent = `Часовий пояс: ${clock.timezone}`;
    clockDiv.appendChild(timezoneText);
  
    const timeBtn = document.createElement('button');
    timeBtn.textContent = 'Показати час';
    timeBtn.addEventListener('click', () => {
      const currentTime = clock.getCurrentDateTime();
      alert(`Поточний час (${clock.timezone}): ${currentTime}`);
    });
    clockDiv.appendChild(timeBtn);
  
    const dateBtn = document.createElement('button');
    dateBtn.textContent = 'Показати дату';
    dateBtn.addEventListener('click', () => {
      const currentDate = clock.getCurrentDate();
      alert(`Поточна дата (${clock.timezone}): ${currentDate}`);
    });
    clockDiv.appendChild(dateBtn);
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити годинник';
    deleteBtn.addEventListener('click', () => {
      clockDiv.parentNode.removeChild(clockDiv);
    });
    clockDiv.appendChild(deleteBtn);
  
    clockDashboard.appendChild(clockDiv);
  }
  
  
  
