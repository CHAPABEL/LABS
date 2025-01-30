import { array } from "./object.js";

const closeBtn = document.getElementById("closeBtn");
const parent = document.getElementById("parantList");
const runBtn = document.getElementById("runBtn");

let activeIndex = null;

function addIndex() {
  array.forEach((item, index) => {
    item.num = index;
    addWorkList(item, index);
  });
}

function addWorkList(item, index) {
  const div = document.createElement("div");
  div.className =
    "grid grid-cols-[150px_400px_150px] border-b-4 pb-4 items-center";

  const span = document.createElement("span");
  span.innerText = item.num + 1;
  span.className = "text-2xl";

  const h1 = document.createElement("h1");
  h1.className = "text-md";
  h1.innerText = item.title;

  const btn = document.createElement("button");
  btn.className =
    "bg-blue-500 ml-48 text-2xl text-white w-52 rounded-xl transition duration-300 hover:scale-[110%]";
  btn.innerText = "Открыть";
  btn.id = item.num;

  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(btn);
  parent.appendChild(div);

  btn.addEventListener("click", () => {
    activeIndex = index;
    PopUpShow(activeIndex);
  });
}

function PopUpShow(index) {
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("codeTxt").innerText = array[index].code;
}

runBtn.addEventListener("click", () => {
  array[activeIndex].action();
});

closeBtn.addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});

addIndex();
