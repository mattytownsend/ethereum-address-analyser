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

async function getEthBalance(address) {
  const response = await fetch("https://cloudflare-eth.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [address, "latest"],
      id: 1
    })
  });

  if (!response.ok) {
    throw new Error("Ethereum request failed");
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  const wei = BigInt(data.result);
  const eth = Number(wei) / 1e18;

  return eth;
}

form.addEventListener("submit", async function (event) {
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

  if (!(hasPrefix && hasCorrectLength && hasValidCharacters)) {
    resultMessage.textContent = "This address failed one or more format checks.";
    return;
  }

  resultMessage.textContent = "Valid format. Retrieving Ethereum balance...";

  try {
    const balance = await getEthBalance(address);
    resultMessage.textContent = `Ethereum balance: ${balance.toFixed(6)} ETH`;
  } catch (error) {
    resultMessage.textContent =
      "The address is valid, but its balance could not be retrieved.";
    console.error(error);
  }
});