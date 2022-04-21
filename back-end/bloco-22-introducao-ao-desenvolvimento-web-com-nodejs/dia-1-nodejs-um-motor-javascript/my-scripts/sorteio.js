import {
  questionInt as _questionInt,
  question as _question,
} from "readline-sync";

function voice(r ="You won!") {
  console.log(r);
}
const randomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  return randomNumber;
};

const questionInt = () => {
  let information = _questionInt("Type a number between 1 and 10: ");
  return information;
};

while (questionInt() !== randomNumber()) {
  console.log(`My number ${randomNumber()}`);
  console.log("You lost!");

  let question = _question(
    "Do you wanna play it again ? Response (y) or (n): "
  ).toLowerCase();

  if (question === "n") {
    voice("I see you soon!");
    break;
  }

  while (question !== "y" && question !== "n") {
    question = _question(
      "Type (y) to continue or (n) to cancel."
    ).toLowerCase();
  }

  if (question === "y") {
    voice("Let's go");
    const randomNumber = Math.floor(Math.random() * 10 + 1);
  }
}
