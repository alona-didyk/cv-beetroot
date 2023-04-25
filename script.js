"use strict";

// 1. Створити сторінку, що показує нумерований список пісень

var playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

const playlistItems = document.getElementById("playlist");

playList.forEach((playListItem) => {
  const list = document.createElement("li");
  list.innerHTML = `${playListItem.author}, ${playListItem.song}`;
  playlistItems.appendChild(list);
});

/*2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
 На модальном вікні повинен бути текст і кнопка "Закрити". 
 Спочатку модальне вікно не відображається. При кліку на кнопку 
 "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.*/

const openButton = document.querySelector(".button__open");
const modalWindow = document.querySelector(".modal-window");
const closeButton = document.querySelector(".button__close");

openButton.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})

// 3. Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

