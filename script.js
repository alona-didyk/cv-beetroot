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
    sum: 0
}
];
console.log(shoppingList);

const sortedList = shoppingList.sort((a, b) => a.bought - b.bought)

sortedList.forEach(item => {
    const purchased = item.bought ? `куплено` : `не куплено`;
    alert(`${item.name}: Кількість: ${item.quantity} шт. Ціна: ${item.price} грн. Статус: ${purchased}`)
})

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