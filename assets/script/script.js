/* const arrayOfNumbers = [];

for (let i = 0; i < 90; i++) {
  arrayOfNumbers.push(i + 1);
}
console.log(arrayOfNumbers);
 */
//const container = document.getElementById(container);
//container.classList.add("container");

const cells = function () {
  for (let i = 0; i < 90; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cells");
  }
};
//container.appendChild(cells);
cells();

const button = document.createElement("button");
button.innerText = "estrai un numero";
console.log(button);
button.classList.add("button");
//container.appendChild("button");
