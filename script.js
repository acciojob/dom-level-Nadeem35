const target = document.getElementById("level");

let level = 0;
let current = target;

while (current) {
  level++;
  current = current.parentElement;
}

alert("The level of the element is: " + level);
