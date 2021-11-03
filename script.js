const btn = document.querySelector(".btn");
const txt = document.querySelector(".form-text");
const inp = document.querySelector(".top-form__input");
txt.classList.add("hidden");

const lightRed = "hsl(354, 100%, 66%)";
const paleBlue = "hsl(223, 100%, 88%)";
const darkBlue = "hsl(209, 33%, 12%)";

btn.addEventListener("click", function () {
  if (inp.value === "") {
    txt.classList.remove("hidden");
    inp.placeholder = "example@email/com";
    inp.style.borderColor = lightRed;
    inp.style.setProperty("--c", darkBlue);
  } else {
    txt.classList.add("hidden");
    inp.placeholder = "Your email address";
    inp.style.borderColor = paleBlue;
  }
});
console.log(inp.placeholder.color);
