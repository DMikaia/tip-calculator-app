let isTipAmount = false;
let isTipBox = false;
let isTipPerson = false;

let tipAmount = document.getElementById("bill");

let billValue = 0;

tipAmount.addEventListener("change", () => {
  if (tipAmount.value !== NaN && tipAmount.value > 0) {
    if (document.getElementById("error-bill").style.display === "block") {
      document.getElementById("error-bill").style.display = "none";
      tipAmount.style.border = null;
    }

    isTipAmount = true;
    billValue = tipAmount.value;
    calculateTip();
  } else {
    isTipAmount = false;
    document.getElementById("error-bill").style.display = "block";
    tipAmount.style.border = "solid 2px #ff0000";
    tipAmount.style.borderRadius = "0.25rem";
  }
});

let perc = 0;

tipBox.forEach((element) => {
  element.addEventListener("click", () => {
    isTipBox = true;
    perc = parseInt(element.children[0].innerHTML);
    if (tipInput.value) {
      tipInput.value = "";
    }
    calculateTip();
  });
});

tipInput.addEventListener("change", () => {
  if (tipInput.value !== NaN && tipInput.value > 0) {
    isTipBox = true;
    perc = tipInput.value;
    calculateTip();
  }
});

let tipPerson = document.getElementById("number-person");

let personNumber = 0;

tipPerson.addEventListener("change", () => {
  if (tipPerson.value !== NaN && tipPerson.value > 0) {
    if (document.getElementById("error-person").style.display === "block") {
      document.getElementById("error-person").style.display = "none";
      tipPerson.style.border = null;
    }

    isTipPerson = true;
    personNumber = tipPerson.value;
    calculateTip();
  } else {
    isTipPerson = false;
    document.getElementById("error-person").style.display = "block";
    tipPerson.style.border = "solid 2px #ff0000";
    tipPerson.style.borderRadius = "0.25rem";
  }
});

let calculateTip = () => {
  if (isTipAmount && isTipBox && isTipPerson) {
    let tipValue = (billValue * perc) / 100;
    let perPerson = (tipValue / personNumber).toFixed(2);
    document.getElementById("tip-per-person").innerHTML = "$" + perPerson;
    document.getElementById("tip-total").innerHTML = "$" + tipValue;
  }
};

let reset = document.querySelector("button");

reset.addEventListener("click", () => {
  isTipAmount = false;
  isTipBox == false;
  isTipPerson = false;

  tipAmount.value = "";
  removeActive(-1);
  tipInput.value = "";
  tipPerson.value = "";

  document.getElementById("tip-per-person").innerHTML = "$0.00";
  document.getElementById("tip-total").innerHTML = "$0.00";
});
