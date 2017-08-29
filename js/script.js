var link = document.querySelector(".btn--footer");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__close");
var form = popup.querySelector("form");
var write = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    write.value = storage;
    email.focus();
  } else {
    write.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  write.classList.remove("modal-error");
  email.classList.remove("modal-error");
  popup.classList.remove("modal-shake");
});

form.addEventListener("submit", function (evt) {
  if (!write.value) {
    evt.preventDefault();
    write.classList.add("modal-error");
  }

  if (!email.value) {
    evt.preventDefault();
    email.classList.add("modal-error");
  }

  if (!write.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-shake");
  }
});
