import { morseCodeObject } from "./data";

//Query Selectors
let outputtedText = document.querySelector("#output-box") as HTMLElement;
const transBtn = document.querySelector("#translate-btn") as HTMLButtonElement;
let inputtedText = document.querySelector("#input-box") as HTMLInputElement;

console.log(inputtedText);
//function to handle translation

// let inputtedTextCont = inputtedText.textContent;

const handleTranslateToMorseCode = (event: Event) => {
  console.log(inputtedText.value);
  inputtedText.value
    .toUpperCase()
    .split("")
    .map((char) => {
      if (morseCodeObject[char]) {
        return morseCodeObject[char];
      }
      return "";
    })
    .join(" ");
  return inputtedText.value;

  // outputtedText.textContent = inputtedTextCont;
};

//event listener

transBtn.addEventListener("click", handleTranslateToMorseCode);

//SEPERATE WORD TO INDIVIDUAL CHARACTERS
// CAPITALISE THE CHARACTER
// MAP OVER CHARACTERS
