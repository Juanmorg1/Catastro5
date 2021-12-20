function open_modal() {
  let overlay = document.getElementById("forgotPass_Modal"),
    popup = document.getElementById("Modal_content");

  overlay.classList.add("active");
  popup.classList.add("active");
}

function close_modal() {
  let overlay = document.getElementById("forgotPass_Modal"),
    popup = document.getElementById("Modal_content");

  overlay.classList.remove("active");
  popup.classList.remove("active");
}

function transition() {
  let elem_1 = document.getElementById("elem1"),
    elem_2 = document.getElementById("elem2");

  elem_1.classList.add("transition");
  elem_2.classList.add("transition");
}

/* .login.active{
  transform: scale(0.9);
}
.animate.active{
  position: absolute;
  width: 100%;
  height: 100%;
}
.transform{
  transform: translateX(-100%);
} */