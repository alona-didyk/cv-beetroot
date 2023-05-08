const KEY = "1a394f79";
const API = `http://www.omdbapi.com/?apikey=${KEY}&`;

const form = document.querySelector(".type-form");
const input = document.querySelector(".type-input");
const search = document.querySelector(".type-search");
const res = document.querySelector(".type-results");
const pagination = document.querySelector(".pagination");

let currentPage = 1;
let currentSearch = "movie";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") {
    alert("Please write a name of a movie");
    return;
  }
  res.innerHTML = "";
  searchMovies(input.value.trim(), currentSearch, currentPage);
});

function searchMovies(input, search, page) {
  const url = `${API}&s=${input}&type=${search}&page=${page}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "False") {
        alert("Movie not found");
      } else {
        showMovie(data.Search);
        showPagination(Math.ceil(data.totalResults / 10), page);
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

function showMovie(movies) {
  res.innerHTML = "";
  movies.forEach((movie) => {
    const elem = document.createElement("div");
    elem.classList.add("movie", "movieDetails");
    elem.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title}">
    <div class="movie-info">
    <h3>${movie.Title}</h3>
    <p>${movie.Year}</p>
    <button class="details-btn" data-id="${movie.imdbID}">Details</button>
    </div>
    `;
    res.appendChild(elem);
  });
  addDetailsListener();
}

function showPagination(totalPages, currentPage) {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      currentPage = i;
      searchMovies(input.value.trim(), currentSearch, currentPage);
    });
    pagination.appendChild(button);
  }
}

function addDetailsListener() {
  const detailsBtns = document.querySelectorAll(".details-btn");
  detailsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      fetch(`${API}&i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          const elem = document.createElement("div");
          elem.classList.add("movie-details");
          elem.innerHTML = `<h2>${data.Title}</h2>
          <img src="${data.Poster}" alt="${data.Title}">
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Rated:</strong> ${data.Rated}</p>
          <p><strong>Runtime:</strong> ${data.Runtime}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          `;
          res.appendChild(elem);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    });
  });
}



// setTimeout(() => {
//     console.log(1)
// }, 0)

// console.log

// const promise = new Promise((resolve, reject) => {
//     try {
//         // throw new Error()
//         resolve('resolve')
//     } catch (error) {
//         reject('reject bhjbk')
//     }
// })

// promise
// .then((result) => {console.log(result)
// return 'some'})
// .then((result2) => console.log(result))
// .catch((e) => console.warn(e))
// .finally(() => console.log('finally'))

// function* generator() {
//     yield 1;
//     yield 2;
//     return 3
// };

// const res = generator();

// console.log(res.next())

// const API = "https://jsonplaceholder.typicode.com";

// const wraper = document.body.querySelector("#postsWrapper");

// const getData = (url) => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((data) => data);
//   };
// const createPostElement = (post) => {
//   const link = document.createElement('a');
//   link.href = './post.html?id=' + post.id;
//   link.classList.add('card');
//   link.classList.add('w-25');
//   const div = document.createElement('div');
//   div.classList.add('card-body');
//   const h5 = document.createElement('h5');
//   h5.classList.add('card-title');
//   h5.innerText = post.title;
//   const p = document.createElement('p');
//   div.classList.add('card-text');
//   p.innerText = post.body;

//   div.appendChild(h5);
//   div.appendChild(p);
//   link.appendChild(div);

//   return link;
// };

// const getPosts = async () => {
//   const data = await getData(API + '/posts');
//   console.log(data);
//   data.forEach(element => {
//     wraper.appendChild(createPostElement(element));
//   });
// };

// getPosts();
