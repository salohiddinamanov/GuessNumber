let mainNumber = document.querySelector(".secretnumber"),
input = document.querySelector(".input"),
btn = document.querySelector(".btn"),
result = document.querySelector(".result"),
score1 = document.querySelector(".score1"),
score2 = document.querySelector(".score2"),
againButton = document.querySelector(".buttonAgain");

let number = Number(input.value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let numberMinus = 20;

againButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
    numberMinus = 20;
    score1.textContent = numberMinus;
    input.value = "";
    result.textContent = "Start guessing...";
})

console.log(secretNumber);
btn.addEventListener("click", () => {
  let number = Number(input.value);
  if (!number) {
    result.textContent = "⛔️ No number!";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
} else if (secretNumber === number) {
    result.textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "green";
    mainNumber.textContent = secretNumber;
} else if (secretNumber !== number) {
    result.textContent = secretNumber < number ? "📈 Katta son!" : "📉 Kichik Son!";
    score1.textContent = (numberMinus -=  1);
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    mainNumber.textContent = "?";
  }
});

