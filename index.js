let count = 0;
let screen = [];

function btn(input) {
  let display = document.getElementById("show");

  if (input === "clr") {
    display.innerHTML = " ";
    screen.splice(0, screen.length);
    count = 0;
  } else {
    screen[count] = input;
    display.innerHTML = screen;

    count++;
  }
}
function add() {
  console.log("add statrted");
  for (let i = 0; i < screen.length, i++; ) {
    if (isNan(screen[i])) {
      console.log("thi is num", screen[i]);
    } else {
      console.log("thi is sign", screen[i]);
    }
  }
}

console.log("js loaded");
