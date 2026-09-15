const form = document.querySelector("#address-form");
const input = document.querySelector("#wallet-address");
const resultMessage = document.querySelector("#result-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const address = input.value.trim();
  const addressPattern = /^0x[a-fA-F0-9]{40}$/;

  if (address === "") {
    resultMessage.textContent = "Please enter an Ethereum address.";
  } else if (addressPattern.test(address)) {
    resultMessage.textContent = "This address has a valid basic Ethereum format.";
  } else {
    resultMessage.textContent =
      "Invalid format. An Ethereum address must begin with 0x followed by 40 hexadecimal characters.";
  }
});