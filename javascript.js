const mainContainer = document.getElementById("mainContainer");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const resetBtn = document.getElementById("resetBtn");
const sizeInput = document.getElementById("size");
resetBtn.addEventListener("click", createGrid);

function resetGrid() {}

function createGrid() {
  mainContainer.innerHTML = "";
  for (i = 0; i < sizeInput.value; i++) {
    for (current = 0; current < sizeInput.value; current++) {
      const gridContainer = document.createElement("div");
      gridContainer.classList.add("gridDiv");
      const width = 100 / sizeInput.value;
      gridContainer.style.width = `${width}%`;
      gridContainer.style.height = `${width}%`;
      gridContainer.style.backgroundColor = color1.value;
      gridContainer.addEventListener("mouseover", changeColor);
      mainContainer.appendChild(gridContainer);
    }
  }
}

function changeColor() {
  this.style.backgroundColor = color2.value;
}

document.addEventListener("DOMContentLoaded", createGrid);
