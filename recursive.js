function isPalindrome(str) {
  // Remove spaces, punctuation, and lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const recursiveCheck = (s, start, end) => {
    if (start >= end) return true;
    if (s[start] !== s[end]) return false;
    return recursiveCheck(s, start + 1, end - 1);
  };

  return recursiveCheck(cleanStr, 0, cleanStr.length - 1);
}

// Example usage
const testStr = "A man, a plan, a canal, Panama";
console.log(`Is "${testStr}" a palindrome? ${isPalindrome(testStr)}`);

function getTicketPrice(age) {
  if (age <= 12) {
    return 10; // Children
  } else if (age >= 13 && age <= 17) {
    return 15; // Teenagers
  } else {
    return 20; // Adults
  }
}

// Example usage
const age = 16;
console.log(`The ticket price for age ${age} is $${getTicketPrice(age)}`);

function isLeapYear(year) {
  // A leap year is divisible by 4 but not by 100 unless it's also divisible by 400
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage
const year = 2024;
console.log(`Is ${year} a leap year? ${isLeapYear(year)}`);

function fibonacci(n) {
  if (n <= 0) {
    throw new Error("Input must be a positive integer");
  }
  if (n === 1) {
    return 0; // First Fibonacci number
  } else if (n === 2) {
    return 1; // Second Fibonacci number
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
  }
}

// Example usage
const n = 10; // Find the 10th Fibonacci number
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
