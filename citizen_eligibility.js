// Q10. Citizen Eligibility Validator

// Input values
let age = 19;            // You can change this value to test
let isCitizen = true;    // true = citizen, false = non-citizen

// Eligibility check using nested if-else and logical operators
if (age >= 18) {
  if (isCitizen) {
    if (age >= 21) {
      console.log("Eligible for all services."); // Vote, Drive, Passport
    } else {
      console.log("Eligible to vote only."); // Citizen but under 21
    }
  } else {
    console.log("Only age criteria met."); // Not a citizen but adult
  }
} else {
  console.log("Not eligible yet."); // Under 18
}
