
# Fortis Games - Random Date Generator Automation

This project uses Cypress to automate the validation of the random date generator tool at [random.org/calendar-dates](https://www.random.org/calendar-dates/).

## Purpose

Automates tests that:
- Select a date range (from January 5, 2024 to November 25, 2025).
- Generate 4 random dates within the range.
- Validate that:
  - Exactly 4 dates are returned.
  - All dates are within the selected range.
  - The summary displays the correct start and end dates.

## Requirements

- Node.js >= 16
- npm

## Installation

```bash
npm install
```

## How to Run the Tests

To run Cypress tests in headless mode:

```bash
npx cypress run
```

To open the Cypress graphical interface and run tests interactively:

```bash
npx cypress open
```

The tests are located in `cypress/e2e/randomDate.cy.js`.

## Project Structure

- `cypress/e2e/`: Contains automated test files.
- `cypress/support/`: Custom commands and support files.
- `cypress.config.js`: Cypress configuration.