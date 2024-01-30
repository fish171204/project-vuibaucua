let images = {
  "bầu": "images/bầu.png",
  "cua": "images/cua.png",
  "cá": "images/cá.png",
  "gà": "images/gà.png",
  "tôm": "images/tôm.png",
  "nai": "images/nai.png",
};

let bowl = document.getElementById("bowl");
let disc = document.getElementById("disc");
let results = document.getElementById("results");

let resultsArray = [];
let isAnimationRunning = false;

function shake() {
  if (isAnimationRunning) return; // Nếu hiệu ứng đang chạy, không cho phép nhấn lại

  bowl.style.transform = "translateY(0)"; // Đặt vị trí ban đầu cho bowl

  isAnimationRunning = true;

  setTimeout(function () {
    bowl.style.transform = "translateY(-100%)"; // Dịch chuyển bowl lên trên
    resultsArray = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * 6);
      resultsArray.push(images[Object.keys(images)[randomIndex]]);
    }

    setTimeout(function () {
      isAnimationRunning = false; // Kết thúc hiệu ứng, cho phép nhấn lại
    }, 1000);
  }, 100);
}

function openResults() {
  if (isAnimationRunning) return; // Nếu hiệu ứng đang chạy, không cho phép nhấn lại

  bowl.style.transform = "translateY(0)"; // Đặt lại vị trí ban đầu cho bowl

  isAnimationRunning = true;

  setTimeout(function () {
    results.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      let img = document.createElement("img");
      img.src = resultsArray[i];
      results.appendChild(img);
    }

    setTimeout(function () {
      isAnimationRunning = false; // Kết thúc hiệu ứng, cho phép nhấn lại
    }, 1000);
  }, 100);
}

document.getElementById("shake").addEventListener("click", shake);
document.getElementById("open").addEventListener("click", openResults);