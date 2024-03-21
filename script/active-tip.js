let tipBox = document.querySelectorAll(".tip-box");
let tipInput = document.querySelector(".tip-input");

tipBox.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.add("active");
    removeActive(index);
  });
});

tipInput.addEventListener("click", () => {
  removeActive(-1);
});

let removeActive = (index) => {
  for (let i = 0; i < tipBox.length; i++) {
    if (tipBox[i].classList.contains("active") && i !== index) {
      tipBox[i].classList.remove("active");
    }
  }
};
