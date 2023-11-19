const hamburger = document.querySelector(".hamburger");
const hamburgerNav = document.querySelector(".hamburgerNav");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    hamburgerNav.classList.toggle("active");
})

const hamburgerFooterOne = document.querySelector(".hamburgerFooterOne");
const hamburgerFooterListOne = document.querySelector(".hamburgerFooterListOne");

hamburgerFooterOne.addEventListener("click",() => {
    hamburgerFooterOne.classList.toggle("active");
    hamburgerFooterListOne.classList.toggle("active");
})

  