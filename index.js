const hamburger = document.querySelector(".hamburger");
const hamburgerNav = document.querySelector(".hamburgerNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerNav.classList.toggle("active");
});

const hamburgerFooterOne = document.querySelector(".hamburgerFooterOne");
const hamburgerFooterListOne = document.querySelector(
  ".hamburgerFooterListOne"
);

hamburgerFooterOne.addEventListener("click", () => {
  hamburgerFooterOne.classList.toggle("active");
  hamburgerFooterListOne.classList.toggle("active");
});

const hamburgerFooterTwo = document.querySelector(".hamburgerFooterTwo");
const hamburgerFooterListTwo = document.querySelector(
  ".hamburgerFooterListTwo"
);

hamburgerFooterTwo.addEventListener("click", () => {
  hamburgerFooterTwo.classList.toggle("active");
  hamburgerFooterListTwo.classList.toggle("active");
});

const hamburgerFooterThree = document.querySelector(".hamburgerFooterThree");
const hamburgerFooterListThree = document.querySelector(
  ".hamburgerFooterListThree"
);

hamburgerFooterThree.addEventListener("click", () => {
  hamburgerFooterThree.classList.toggle("active");
  hamburgerFooterListThree.classList.toggle("active");
});

const hamburgerFooterFour = document.querySelector(".hamburgerFooterFour");
const hamburgerFooterListFour = document.querySelector(
  ".hamburgerFooterListFour"
);

hamburgerFooterFour.addEventListener("click", () => {
  hamburgerFooterFour.classList.toggle("active");
  hamburgerFooterListFour.classList.toggle("active");
});