// Q2. Multi-Type Data Summary
// This program simulates a database summary by declaring different data types
// and displaying their labels, values, and data types in a formatted table.

// Step 1: Declare variables of various data types
let userName = "Jai";                 // String
let userAge = 21;                     // Number
let isVerified = true;                // Boolean
let hobbies = ["coding", "music", "travel"]; // Array
let userProfile = { city: "Mathura", country: "India" }; // Object
let lastLogin = null;                 // Null
let accountStatus;                    // Undefined (not assigned)

// Step 2: Prepare a summary report for each variable
let dataSummary = [
  { Label: "userName", Value: userName, Type: typeof userName },
  { Label: "userAge", Value: userAge, Type: typeof userAge },
  { Label: "isVerified", Value: isVerified, Type: typeof isVerified },
  { Label: "hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "userProfile", Value: userProfile, Type: typeof userProfile },
  { Label: "lastLogin", Value: lastLogin, Type: typeof lastLogin }, // typeof null = "object"
  { Label: "accountStatus", Value: accountStatus, Type: typeof accountStatus }
];

// Step 3: Print a formatted table with console.table()
console.table(dataSummary);
