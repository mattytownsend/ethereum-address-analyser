const form = document.querySelector("#address-form");
const input = document.querySelector("#wallet-address");
const resultMessage = document.querySelector("#result-message");
const checkList = document.querySelector("#check-list");

const prefixCheck = document.querySelector("#prefix-check");
const lengthCheck = document.querySelector("#length-check");
const charactersCheck = document.querySelector("#characters-check");

function showCheck(element, passed, message) {
  element.textContent = `${passed ? "✓" : "✗"} ${message}`;
  element.className = passed ? "passed" : "failed";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const address = input.value.trim();

  if (address === "") {
    resultMessage.textContent = "Please enter an Ethereum address.";
    checkList.hidden = true;
    return;
  }

  const hasPrefix = address.startsWith("0x");
  const hasCorrectLength = address.length === 42;
  const hasValidCharacters = /^0x[a-fA-F0-9]{40}$/.test(address);

  showCheck(prefixCheck, hasPrefix, "Begins with 0x");
  showCheck(lengthCheck, hasCorrectLength, "Contains exactly 42 characters");
  showCheck(
    charactersCheck,
    hasValidCharacters,
    "Contains 40 valid hexadecimal characters after 0x"
  );

  checkList.hidden = false;

  if (hasPrefix && hasCorrectLength && hasValidCharacters) {
    resultMessage.textContent = "This address has a valid basic Ethereum format.";
  } else {
    resultMessage.textContent = "This address failed one or more format checks.";
  }
});