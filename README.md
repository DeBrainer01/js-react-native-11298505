**Student ID:** 11298505

**Assignment 1 - JavaScript for React Native**

This repository contains solutions for the first four tasks of DCIT202 Mobile Application Development - Assignment 1. The provided code utilizes JavaScript functions to manipulate arrays and create user profiles.

**Task 1: arrayManipulation.js**

- `processArray` function takes an array of numbers and returns a new array where even numbers are squared and odd numbers are tripled.

**Task 2: arrayManipulation.js**

- `formatArrayStrings` function takes two arrays: an array of strings and an array of numbers processed by `processArray`. It modifies each string based on the corresponding number:
    - Capitalizes the entire string if the number is even.
    - Converts the string to lowercase if the number is odd.

**Task 3: userInfo.js**

- `createUserProfiles` function takes an array of names and an array of modified names from Task 2. 
- It returns an array of objects, each containing:
    - `originalName`: The original name from the input array.
    - `modifiedName`: The modified name based on the corresponding number.
    - `id`: An auto-incremented ID starting from 1.

**Instructions:**

1. Clone this repository and commit each task separately.

**Note:**

- This solution assumes basic understanding of JavaScript functions, loops, and conditional statements.

**Further Exploration:**

- Explore error handling for cases where input arrays have different lengths.
- Implement unit tests for the functions.