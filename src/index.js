const hamburger = document.querySelector(".hamburger");
const hamburgerNav = document.querySelector(".hamburgerNav");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    hamburgerNav.classList.toggle("active");
})

  