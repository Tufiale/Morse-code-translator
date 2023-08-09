import { morseCodeObject } from "./data";

//Query Selectors
let outputtedText = document.querySelector("#output-box") as HTMLElement;
const transBtn = document.querySelector("#translate-btn") as HTMLButtonElement;
let inputtedText = document.querySelector("#input-box") as HTMLInputElement;

//function to handle translation

const handleTranslateToMorseCode = (event: Event) => {
  const inputtedString = inputtedText.value.toUpperCase();
  const translatedCharacters = inputtedString
    .split("")
    .map((char) => {
      if (morseCodeObject[char]) {
        return morseCodeObject[char];
      }
    })
    .join(" ");

  outputtedText.textContent = translatedCharacters;
};

//event listener

transBtn.addEventListener("click", handleTranslateToMorseCode);
