// mobile phone manu ::

const burgerMenu = document.getElementById("burger-menu");
const menuCross = document.getElementById("menu-cross");
const navigations = document.getElementById("navigations");

burgerMenu.addEventListener("click", function () {
  navigations.style.top = "12rem";
  navigations.style.boxShadow = "0 0 0 100vmax #000000a9";
  burgerMenu.style.display = "none";
  menuCross.style.display = "block";
});
menuCross.addEventListener("click", function () {
  navigations.style.boxShadow = "none";
  setTimeout(() => {
    burgerMenu.style.display = "block";
    menuCross.style.display = "none";
    navigations.style.top = "-150vh";
  }, 500);
});
