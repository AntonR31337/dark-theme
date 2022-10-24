const selectSingle = document.querySelector('.select-form');
const selectSingle_title = selectSingle.querySelector('.select-form__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select-form__label');

let link = document.getElementById("theme-link");
const togleThemeBtn = document.getElementById("togleThemeBtn");

const lightTheme = "./styles/light.style.css";
const darkTheme = "./styles/dark.style.css";

const inputLight = document.getElementById("themeLight");
const inputDark = document.getElementById("themeDark");

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

function togleTheme() {
  event.preventDefault();

  let currTheme = link.getAttribute("href");

  if (inputLight.checked) {
    currTheme = lightTheme;
  } else {
    currTheme = darkTheme;
  }

  link.setAttribute("href", currTheme);

}

togleThemeBtn.addEventListener("click", togleTheme)