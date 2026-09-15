# Ethereum Address Analyser

A simple beginner Web3 project that checks the basic format of an Ethereum address and retrieves its live ETH balance.

## About This Project

This is my first Web3 development project.

I built it as a learning exercise with guidance from **OpenAI Codex in ChatGPT**. Codex generated and explained much of the initial code while I created the files, used GitHub, committed the changes, deployed the website, tested different addresses and worked through errors.

I currently have only a basic understanding of HTML and am beginning to learn CSS, JavaScript and blockchain development. This repository represents the start of that process rather than a finished professional application.

I plan to return to this project as my skills improve, understand more of the code independently and gradually develop it into a more useful, multifunctional Ethereum analysis tool.

## Live Demo

[Open the Ethereum Address Analyser](https://mattytownsend.github.io/ethereum-address-analyser/)

## Current Features

* Checks whether an address begins with `0x`
* Checks whether it contains exactly 42 characters
* Checks for valid hexadecimal characters
* Retrieves the address's live ETH balance from Ethereum Mainnet
* Handles empty input, invalid addresses and failed network requests
* Works in a web browser without requesting wallet access

## How It Currently Works

The application first uses JavaScript to check the basic format of the entered address.

If the address passes these checks, it sends an `eth_getBalance` JSON-RPC request to a public Ethereum node. The node returns the balance in Wei, which the application converts into ETH and displays.

## Technologies Used

* HTML
* CSS
* JavaScript
* Ethereum JSON-RPC
* GitHub
* GitHub Pages
* OpenAI Codex in ChatGPT for coding guidance and explanations

## What I Have Learned So Far

Through this first version, I have started learning how to:

* Structure a webpage with HTML
* Style a webpage using CSS
* Connect HTML, CSS and JavaScript files
* Find and update HTML elements using JavaScript
* Validate user input
* Request live data from an external service
* Read public Ethereum data using JSON-RPC
* Handle errors using `try` and `catch`
* Use the browser console to investigate problems
* Create commits and maintain a project on GitHub
* Deploy a live website using GitHub Pages
* Use AI as a development and learning tool

## Current Limitations

* It checks only the basic format of an Ethereum address
* It does not verify EIP-55 checksum capitalisation
* It displays only the native ETH balance
* It does not show token balances or transaction history
* It cannot currently identify smart-contract addresses
* It depends on a third-party public Ethereum RPC endpoint
* Much of the initial code was produced with AI guidance and is still being studied

## Possible Future Improvements

As I learn more, I may add:

* EIP-55 checksum validation
* Smart-contract address detection
* Token balances
* Transaction information
* Support for multiple blockchain networks
* Better balance formatting
* More detailed error messages
* Automated tests
* Improved mobile design and accessibility
* Refactored code written with a deeper independent understanding

## Disclaimer

This application reads publicly available blockchain information. It does not connect to users' wallets and will never request a private key or recovery phrase.
