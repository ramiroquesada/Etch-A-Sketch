let grid = document.getElementById("grid-container");

let rangeValueNumber = document.getElementById("rangeValueNumber");

let eraseButton = document.getElementById("eraseButton");
let selector = document.getElementById("myRange");

let colorSelector = document.getElementById("color-picker");

let rainbowCheckbox = document.getElementById("rainbow");

let gridElements = [];

let colorWhite = "#ffffff";

let currentMode = "color";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentColor = "#000000";

//CAMBIAR COLOR PINCEL
colorSelector.addEventListener("change", (e) => {
  currentColor = e.target.value;
  console.log(currentColor);
});

//CAMBIAR MODO A RAINBOW Y VICEVERSA

rainbowCheckbox.addEventListener("change", () => {
  currentMode = currentMode === "color" ? "rainbow" : "color";
});

//CAMBIA EL TAMAÑO DE LA GRILLA
let squareSide = 16;

const changeSquareSide = (e) => {
  squareSide = e.target.value;

  rangeValueNumber.innerHTML = `Square: ${squareSide} x ${squareSide} `;

  gridElements = [];

  grid.textContent = "";

  grid.style.setProperty(
    "grid-template-columns",
    "repeat(" + squareSide + ",auto)"
  );

  fillGrid();
};

selector.addEventListener("change", changeSquareSide);

//RELLENA LA GRILLA

const fillGrid = () => {
  for (i = 1; i <= squareSide * squareSide; i++) {
    let gridElement = document.createElement("div");
    grid.appendChild(gridElement);

    gridElement.classList.add("gridElement");

    //gridElement.innerHTML= i;

    gridElement.addEventListener("mouseover", changeColor);
    gridElement.addEventListener("mousedown", changeColor);

    gridElements.push(gridElement);
  }
};

//PINTA LA GRILLA

const changeColor = (e) => {
  if (e.type === "mouseover" && !mouseDown) return;
  else if (e.which === 1 && currentMode === "color") {
    e.path[0].style.backgroundColor = currentColor;
  } else if (e.which === 1 && currentMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    e.path[0].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (e.which === 3) {
    e.path[0].style.backgroundColor = "#ffffff";
  }
};

//LIMPIA LA GRILLA

const eraseAll = () => {
  gridElements.forEach((element) => {
    element.style.backgroundColor = colorWhite;
  });
};

eraseButton.addEventListener("click", eraseAll);

// EJECUTA EL PROGRAMA

fillGrid();
