import fs from "fs";
import path from "path";

import { beforeEach, expect, it, vi } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
// html file to string
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

// window obg emul.browser
const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDocumentContent); //append to existing data
});
it('should add an error paragraph to the id="errors" element ', () => {
  showError("Test");
  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstElementChild;
  expect(errorParagraph).not.toBeNull();
});
it("should not contain error paragraph initially", () => {
  const errorElement = document.getElementById("errors");
  const errorParagraph = errorElement.firstElementChild;
  expect(errorParagraph).toBeNull();
});

it("should output provided message to error paragraph", () => {
    const testErrorMessage = 'Test'
    showError(testErrorMessage);
    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;
    expect(errorParagraph.textContent).toBe(testErrorMessage)
});
