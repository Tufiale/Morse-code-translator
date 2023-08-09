import { morseCodeObject } from "./data";
import { outputtedText } from "./main";
import { inputtedText } from "./main";

export const handleTranslateToMorseCode = (event: Event) => {
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
