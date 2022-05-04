let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let textResult = document.querySelector(".header--text");

let guessInput = document.getElementById("number");
let checkButton = document.querySelector(".btn");
let image = document.querySelector(".image");
let numberDiv = document.querySelector(".numberDiv");

let attempts = document.getElementById("attempts");

guessInput.focus();

checkButton.addEventListener("click", checkClick);

let randomNum = Math.floor(Math.random() * 101);
// console.log(randomNum);

let tried_list = [];
function checkClick(e) {
  let guessNumber = guessInput.value;
  tried_list.push(" " + guessNumber)
  numberDiv.innerText = "Tried Numbers : " +  tried_list

  if (guessNumber < 0 || guessNumber > 100) {
    alert("The number must be between 0 and 100");
    guessInput.value = "";
    return;
  }

  if (guessNumber == "") {
    alert("Please Enter A Number ");
    return;
  }

  if (guessNumber < randomNum) {
    attempts.innerHTML--;
    span1.innerHTML = guessNumber;
    guessInput.value = "";
    textResult.innerHTML = "Try Again!";
    if (attempts.innerHTML == 0) {
      image.style.backgroundImage = "url(./img/gameover.gif)";
      checkButton.innerHTML = "RESTART";
      textResult.innerHTML = "Click RESTART!";
      numberDiv.innerText = "True number : " + randomNum
      if (
        checkButton.addEventListener("click", () =>
          window.location.reload(false)
        )
      );
    }
  } else if (guessNumber > randomNum) {
    attempts.innerHTML--;
    span2.innerHTML = guessNumber;
    guessInput.value = "";
    textResult.innerHTML = "Try Again!";
    if (attempts.innerHTML == 0) {
      image.style.backgroundImage = "url(./img/gameover.gif)";
      checkButton.innerHTML = "RESTART";
      textResult.innerHTML = "Click RESTART!";
      numberDiv.innerText = "True number : " + randomNum
      if (
        checkButton.addEventListener("click", () =>
          window.location.reload(false)
        )
      );
    }
  } else if (guessNumber == randomNum) {
    guessInput.value = "";
    image.style.backgroundImage = "url(./img/winner.gif)";
    checkButton.innerHTML = "RESTART";
    textResult.innerHTML = "CONGRATULATIONS!!!"
    numberDiv.innerText = "winner number : " + randomNum
    if (
      checkButton.addEventListener("click", () => window.location.reload(false))
    ) {
      true;
    }
  }
  e.preventDefault();
}
