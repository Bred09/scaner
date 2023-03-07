let db = [];
function add() {
  var area = document.getElementById("kizy");
  var lines = area.value.replace(/\r\n/g, "\n").split("\n");

  console.log(lines);
  return db = lines;
}


let form = document.querySelector("form");
let codeForm = document.querySelector(".code");
let body = document.querySelector("body");

codeForm.focus();
codeForm.onblur = () => {
  codeForm.focus();
};

let good = new Audio("media/alerts/good1.mp3");
let bad = new Audio("media/alerts/bad.ogg");

function phonOff() {
  body.style.backgroundColor = "#fff";
  body.style.transition = "1s";
}

form.onsubmit = () => {
  console.log(codeForm.value);
  if (db.includes(codeForm.value)) {
    good.play();
    console.log("OK");
    codeForm.value = "";
    body.style.backgroundColor = "green";
    body.style.transition = "";
    setTimeout(phonOff, 1000);
  } else {
    bad.play();
    console.log("Error");
    body.style.backgroundColor = "red";
    body.style.transition = "";
    setTimeout(phonOff, 1000);
  }

  console.log("Submit");
  return false;
};

