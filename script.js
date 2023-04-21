"use strict";

// МІНІНМУМ

const shoppingList = [
  {
    name: "молоко",
    quantity: 1,
    bought: false,
    price: 35,
    sum: 0,
  },
  {
    name: "хліб",
    quantity: 2,
    bought: true,
    price: 30,
    sum: 0,
  },
  {
    name: "соняшникова олія",
    quantity: 1,
    bought: true,
    price: 70,
    sum: 0,
  },
  {
    name: "яблука",
    quantity: 5,
    bought: true,
    price: 8,
    sum: 0,
  },
  {
    name: "шоколадка",
    quantity: 2,
    bought: false,
    price: 30,
    sum: 0,
  },
];
console.log(shoppingList);

const sortedList = shoppingList.sort((a, b) => a.bought - b.bought);

sortedList.forEach((item) => {
  const purchased = item.bought ? `куплено` : `не куплено`;
  alert(
    `${item.name}: Кількість: ${item.quantity} шт. Ціна: ${item.price} грн. Статус: ${purchased}`
  );
});

const productItem = prompt(`Вкажіть, що ви купили`);
const boughtItem = shoppingList.find((item) => item.name === productItem);

if (boughtItem) {
  boughtItem.bought = true;
  const purchased = boughtItem.bought ? `куплено` : `не куплено`;
  alert(`${productItem} ${purchased}!`);
} else {
  alert(`Продукт "${productItem}" не знайдено в списку покупок`);
}

console.log(shoppingList);

// НОРМА

const itemDelete = prompt("Вкажіть назву продукту, який Ви хочете видалити");
const updatedShoppingList = shoppingList.filter(
  (item) => item.name !== itemDelete
);

console.log(updatedShoppingList);

const newItemName = prompt("Введіть назву продукту:");
const newItemQuantity = +prompt("Введіть кількість:");
const newItemPrice = +prompt("Введіть ціну:");
const newItemSum = newItemQuantity * newItemPrice;

let existingItem = updatedShoppingList.find(
  (item) => item.name === newItemName
);

if (existingItem) {
  existingItem.quantity += newItemQuantity;
} else {
  let newItem = {
    name: newItemName,
    quantity: newItemQuantity,
    bought: false,
    price: newItemPrice,
    sum: newItemSum,
  };
  updatedShoppingList.push(newItem);
}

console.log(updatedShoppingList);

// МАКСИМУМ

let totalSum = 0;

for (let index = 0; index < shoppingList.length; index++) {
  totalSum += shoppingList[index].quantity * shoppingList[index].price;
}

alert(`Повна сума: ${totalSum} грн.`);

let boughtSum = 0;
let notBoughtSum = 0;

for (let index = 0; index < shoppingList.length; index++) {
  if (shoppingList[index].bought) {
    boughtSum += shoppingList[index].quantity * shoppingList[index].price;
  } else {
    notBoughtSum += shoppingList[index].quantity * shoppingList[index].price;
  }
}

alert(`Сума придбаних товарів: ${boughtSum} грн, непридбаних: ${notBoughtSum} грн.`);

shoppingList.forEach (item => {
    item.sum = item.quantity * item.price;
})

const sortedListByPrice = shoppingList.sort((a, b) => a.sum - b.sum);

console.log(sortedListByPrice);
