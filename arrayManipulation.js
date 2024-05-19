// Function to process an array of numbers
function processArray(numbers) {
    const processedNumbers = [];
    for (const number of numbers) {
      if (number % 2 === 0) {
        processedNumbers.push(number * number); // Square even numbers
      } else {
        processedNumbers.push(number * 3); // Triple odd numbers
      }
    }
    return processedNumbers;
  }
  
  // Function to format strings based on corresponding numbers
  function formatArrayStrings(strings, processedNumbers) {
    if (strings.length !== processedNumbers.length) {
      throw new Error("String and number arrays must have the same length");
    }
    const formattedStrings = [];
    for (let i = 0; i < strings.length; i++) {
      if (processedNumbers[i] % 2 === 0) {
        formattedStrings.push(strings[i].toUpperCase()); // Capitalize for even
      } else {
        formattedStrings.push(strings[i].toLowerCase()); // Lowercase for odd
      }
    }
    return formattedStrings;
  }
  
  // Exports for other files
  module.exports = { processArray, formatArrayStrings };
  