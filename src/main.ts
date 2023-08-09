import "./style.scss";
import { handleTranslateToMorseCode } from "./functions";

//Query Selectors
export let outputtedText = document.querySelector("#output-box") as HTMLElement;
const transBtn = document.querySelector("#translate-btn") as HTMLButtonElement;
export let inputtedText = document.querySelector(
  "#input-box"
) as HTMLInputElement;

//event listener

transBtn.addEventListener("click", handleTranslateToMorseCode);
