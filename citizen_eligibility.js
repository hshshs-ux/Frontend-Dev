let age = 19;    
let isCitizen = true; 
if (age >= 18) {
  if (isCitizen) {
    if (age >= 21) {
      console.log("Eligible for all services."); 
    } else {
      console.log("Eligible to vote only."); 
    
  } else {
    console.log("Only age criteria met."); 
  }
} else {
  console.log("Not eligible yet.");
}

