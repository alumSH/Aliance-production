const navbar =
  document.querySelector(
    ".navbar",
  ); /* обращаемся к документу, чтобы он через селектор нашел класс навбар и поместил его в константу navbar */
const logo = document.querySelector(".logo-svg use");
window.addEventListener("scroll", () => {
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo";
    /*console.log(logo.href); /* узнаем какой хреф стоит у лого */
  } else {
    navbar.classList.remove("navbar-light");
    logo.href.baseVal = "img/sprite.svg#header1";
  }

  /*console.log("Прокрутка");*/
  /* вызов лога в консоле */
  /*alert("Прокрутка!");*/
}); /* window - все окно  addEventListener - говорит всему окну "слушать" какое-то событие, что происходит на странице(в нашем случае scroll - прокрутка) */
