const navbar =
  document.querySelector(
    ".navbar",
  ); /* обращаемся к документу, чтобы он через селектор нашел класс навбар и поместил его в константу navbar */
window.addEventListener("scroll", () => {
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light");
  } else {
    navbar.classList.remove("navbar-light");
  }

  /*console.log("Прокрутка");*/
  /* вызов лога в консоле */
  /*alert("Прокрутка!");*/
}); /* window - все окно  addEventListener - говорит всему окну "слушать" какое-то событие, что происходит на странице(в нашем случае scroll - прокрутка) */
