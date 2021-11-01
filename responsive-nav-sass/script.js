const navbar = document.querySelector(".nav__main");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// window.onscroll = () => {
//   navbar.classList.remove("active");
// };
