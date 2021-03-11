import './modules/home';
const nav_link = document.querySelector(".nav-link");
const navbar = document.querySelector(".navbar");
if(window.location.pathname === "/sondeo"){
  nav_link.classList.add("active");
}else{
  nav_link.classList.remove("active");
}

