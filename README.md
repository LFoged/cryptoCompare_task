# CryptoCompare test

## Description

Solution to the 'CryptoCompare NodeJS coding task'.  
A `Node.js` program for requesting and comparing Trade Data from the CryptoCompare API.

This app only runs locally.

## Running program locally

1. Clone this repo to your local machine.
2. Navigate to your local clone of the repo.
3. Create a `.env` file and assign your CryptoCompare API Key to the variable `API_KEY` (see .env.example).
4. Run `npm i` in your terminal to install dependencies.
5. Run `npm start` in your terminal to start the program.

The program is now running and the results will be logged to your terminal, after 60seconds.

**NOTE:** For the 1st 60seconds (default) that the program is running, nothing will be logged to the terminal, and it might look like the program/connection is unresponsive/'just hanging' - it is in fact getting trade data. The results will be logged after 60seconds.

## Immediate improvements

-   Add tests

#### Author

Louis Foged