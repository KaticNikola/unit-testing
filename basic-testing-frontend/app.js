import { extractEnteredNumberValues } from "./src/parser.js";
import {  calculateResult } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.getElementById("test-form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputvalues = extractEnteredNumberValues(form);

  let result = calculateResult(numberInputvalues);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
