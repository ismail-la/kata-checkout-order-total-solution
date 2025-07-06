 
# Checkout Order Total Kata - TDD Solution

## Overview
This is a Test-Driven Development (TDD) solution for the Checkout Order Total kata, implemented in TypeScript for Manna Technologies.

## Problem Statement
Build a grocery point-of-sale system that calculates pre-tax total prices supporting:
- Per-unit and weighted items
- Markdowns and specials
- Item removal
- Various promotional offers

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Building

```bash
npm run build
```

## TDD Approach
This solution follows the Red-Green-Refactor cycle:
- **Red**: Write a failing test
- **Green**: Make the test pass with minimal code
- **Refactor**: Improve the code while keeping tests green

Each feature implementation includes proper commit history showing the TDD process.

## Architecture
- Clean separation of concerns
- Strategy pattern for pricing logic
- Comprehensive error handling
- Type-safe TypeScript implementation

## Author
[Your Name] - TDD Implementation for Manna Technologies