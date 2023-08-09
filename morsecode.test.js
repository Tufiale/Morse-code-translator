import { morseCodeObject } from "./data";
import { outputtedText } from "./main";
import { inputtedText } from "./main";
import { handleTranslateToMorseCode } from "./functions";

describe("handleTranslateToMorsecode"),
  () => {
    it("should translate to morse code", () => {
      //Acting Arranging Test
      const result = translatedCharacters("hello");

      //Assertion
      expect(result).toEqual(".... . .-.. .-.. ---");
    });
  };
