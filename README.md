 
# Checkout Order Total Kata - TypeScript TDD Solution

## Overview
This is my Test-Driven Development (TDD) solution for the Checkout Order Total kata, implemented in TypeScript for Manna Technologies.he project is designed as a demonstration of clean code, modularity, and robust testing practices.

```bash

## Challenge Summary
Build a grocery point-of-sale system that calculates pre-tax total prices supporting:
- Handle both per-item and per-weight products
- Markdowns and specials
- Item removal
- Apply various discount rules and special offers

## Installation
npm install
```

## Running Tests Suite

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Building the Project

```bash
npm run build
```

## Development Process
This solution follows the TDD methodology (Red-Green-Refactor cycle):
- **Red**: Write a failing test
- **Green**: Write the minimum code necessary to make the test pass.
- **Refactor**: Clean up and Improve the code while keeping tests green

Each feature implementation includes proper commit history showing the TDD process.

## Architecture
- Clean separation of concerns
- Strategy pattern for pricing logic
- Custom error handling for invalid operations
- Fully type-safe with TypeScript

## Author
Developed by Lahbari ismail - TDD Implementation for Manna Technologies
Feel free to reach out for any questions or suggestions!