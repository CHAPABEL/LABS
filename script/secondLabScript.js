import { array } from "./object.js";
import { erand } from "./object.js";
console.log("array");
const parent = document.getElementById("parantList");
let btnArr = [];

function addIndex() {
  for (let i = 0; i < array.length; i++) {
    array[i].num = i + 1;
  }

  addWorkList();
}

function addWorkList() {
  array.forEach((item) => {
    const div = document.createElement("div");
    div.className =
      "grid grid-cols-[150px_400px_150px] border-b-4 pb-4 items-center";

    const span = document.createElement("span");
    span.innerText = item.num;
    span.className = "text-2xl ";

    const h1 = document.createElement("h1");
    h1.className = "text-md";
    h1.innerText = item.title;

    const btn = document.createElement("button");
    btn.className =
      "bg-blue-500 ml-48 text-2xl text-white w-52 rounded-xl transition duration-300 hover:scale-[110%]";
    btn.innerText = "Начать";
    btn.id = item.num;

    parent.appendChild(div);
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(btn);

    btnArr.push(btn);
  });
  btnArr.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      erand[index]();
    });
  });
}

addIndex();
