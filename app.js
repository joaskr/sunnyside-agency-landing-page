const menuButton = document.querySelector(".menu-button");
const menuButtonIcon = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

const showMenu = () => {
  hamburgerMenu.classList.add("is-active");
  menuButtonIcon.src = "./images/icon-close.svg";
};
const closeMenu = () => {
  hamburgerMenu.classList.remove("is-active");
  menuButtonIcon.src = "./images/icon-hamburger.svg";
};
menuButton.addEventListener("click", () =>
  hamburgerMenu.classList.contains("is-active") ? closeMenu() : showMenu()
);
