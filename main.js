let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector("#new-btn");
let show = document.querySelector(".msg");
let msg = document.querySelector("#show");
let trn = true; //playerO,playerX

const wincod = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  trn0 = true;
  enableboxes();
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (trn) {
      box.innerHTML = "O";
      trn = false;
    } else {
      box.innerHTML = "X";
      trn = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showwinner = (winner) => {
  msg.innerHTML = `winner is ${winner}`;
  disableboxes();
};

const checkwinner = () => {
  for (pattern of wincod) {
    let p1val = boxes[pattern[0]].innerText;
    let p2val = boxes[pattern[1]].innerText;
    let p3val = boxes[pattern[2]].innerText;

    if (p1val != "" && p2val != "" && p3val != "") {
      if (p1val == p2val && p2val === p3val) {
        console.log("WINNER");
        showwinner(p1val);
      }
    }
  }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
