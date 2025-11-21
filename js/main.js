// 페이지 아래로 스크롤 시 header 스타일링 적용
const header = document.querySelector(".header");
// 요소의 총 높이
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글 버튼 클릭 처리
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});

// 테마 토글 기능
const html = document.documentElement;
const themeToggle = document.querySelector(".header__theme");
const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme =
  localStorage.getItem("theme") || (darkTheme.matches ? "dark" : "light");

if (savedTheme === "light") {
  html.classList.add("light-theme");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  html.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
  const isLight = html.classList.toggle("light-theme");
  themeToggle.innerHTML = isLight
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
