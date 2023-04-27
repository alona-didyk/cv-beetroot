// 1 завдання

let text = document.getElementById('text');
let textarea = document.createElement('textarea');

function switchToTextarea() {
    textarea.value= text.innerHTML;
    text.replaceWith(textarea);
    textarea.focus();
}

function switchToDiv() {
    text.innerHTML = textarea.value;
    textarea.replaceWith(text);
}

document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault();
        switchToTextarea();
    } else if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        switchToDiv();
    }
});


