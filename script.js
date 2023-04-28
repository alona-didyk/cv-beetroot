// 1 завдання

let text = document.getElementById("text");
let textarea = document.createElement("textarea");

function switchToTextarea() {
  textarea.value = text.innerHTML;
  text.replaceWith(textarea);
  textarea.focus();
}

function switchToDiv() {
  text.innerHTML = textarea.value;
  textarea.replaceWith(text);
}

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "e") {
    event.preventDefault();
    switchToTextarea();
  } else if ((event.ctrlKey || event.metaKey) && event.key === "s") {
    event.preventDefault();
    switchToDiv();
  }
});

// 2 завдання

const table = document.getElementById("table");
const tbody = document.querySelector("tbody");
const headers = document.querySelectorAll("th");
const rows = Array.from(tbody.querySelectorAll("tr"));

headers.forEach((th, index) => {
  th.addEventListener("click", () => {
    sortTable(index, th.dataset.type);
  });
});

function sortTable(colNum, type) {
  let compare;

  switch (type) {
    case "number":
      compare = function (row1, row2) {
        return (
          parseFloat(row1.cells[colNum].innerHTML) -
          parseFloat(row2.cells[colNum].innerHTML)
        );
      };
      break;
    case "string":
      compare = function (row1, row2) {
        return row1.cells[colNum].innerHTML.localeCompare(
          row2.cells[colNum].innerHTML
        );
      };
      break;
  }

  rows.sort(compare);
  tbody.append(...rows);
}

// 3 завдання

const resize = document.getElementById("resize");
let startX, startY, startWidth, startHeight;

resize.addEventListener("mousedown", (event) => {
  if (
    event.offsetX >= resize.offsetWidth - 10 &&
    event.offsetY >= resize.offsetHeight - 10
  ) {
    event.preventDefault();
    startX = event.clientX;
    startY = event.clientY;

    startWidth = parseInt(document.defaultView.getComputedStyle(resize).width);
    startHeight = parseInt(
      document.defaultView.getComputedStyle(resize).height
    );

    resize.addEventListener("mousemove", mousemove);
    resize.addEventListener("mouseup", mouseup);
  }
});

function mousemove(e) {
  const newWidth = e.clientX - startX + startWidth;
  const newHeight = e.clientY - startY + startHeight;
  resize.style.width = newWidth + "px";
  resize.style.height = newHeight + "px";
}

function mouseup(ev) {
  resize.removeEventListener("mousemove", mousemove);
  resize.removeEventListener("mouseup", mouseup);
}
