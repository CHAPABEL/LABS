const addButList = document.getElementById("plBut");
const delButList = document.getElementById("mnBut");
let addNum = document.getElementById("itmNum");
let coust = document.getElementById("coustItm");
let endCoust = document.getElementById("endCoustItm");

function adddCoust() {}

function addItmList() {
  addButList.onclick = () => {
    let currentNum = parseInt(addNum.innerText);
    let currentCoust = parseInt(coust.innerText.replace("₽", ""));
    addNum.innerText = currentNum + 1;
    let bCoust = 300 * (currentNum + 1);
    coust.innerText = bCoust + "₽";
    let totalCost = bCoust - 9;
    endCoust.innerText = totalCost + "₽";
  };

  delButList.onclick = () => {
    let currentNum = parseInt(addNum.innerText);
    let currentCoust = parseInt(coust.innerText.replace("₽", ""));

    if (currentNum > 1) {
      addNum.innerText = currentNum - 1;
      let bCoust = 300 * (currentNum - 1);
      coust.innerText = bCoust + "₽";
      let totalCost = bCoust - 9;
      endCoust.innerText = totalCost + "₽";
    }
  };
}

addItmList();
