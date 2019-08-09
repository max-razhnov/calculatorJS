let display = document.getElementById("display");
const clrAllBtn = document.getElementById("clearAll");

function insertElement(el) {
  display.value += el;
}

clrAllBtn.addEventListener("click", clear);

function clear() {
  display.value = "";
}

function backspace() {
  let newDisplayVal = display.value.split("");
  newDisplayVal.pop();
  display.value = newDisplayVal.join("");
}

function equal() {
  display.value = eval(display.value);
}
