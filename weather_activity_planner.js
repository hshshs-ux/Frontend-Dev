// Q5. Weather Activity Planner
// This program gives activity suggestions based on weather conditions.
// It considers temperature, rainfall, and wind speed to suggest what to do.

// Step 1: Declare variables for temperature, isRaining, and windSpeed
let temperature = 28;    // in °C
let isRaining = false;   // true = raining, false = not raining
let windSpeed = 12;      // in km/h

// Step 2: Use conditional statements with logical operators to suggest activities
let activityMessage = "";

// Check conditions in order of importance
if (isRaining) {
  // Highest priority: if it's raining
  activityMessage = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  // If it's hot and not raining
  activityMessage = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  // Too cold and windy — combine && operator
  activityMessage = "Too cold and windy — stay home.";
} else if ((temperature >= 15 && temperature <= 35) && (windSpeed <= 20 || !isRaining)) {
  // Moderate conditions and low wind → ideal for outdoor walk
  activityMessage = "Perfect day for a walk.";
} else {
  // Fallback condition (in case none match)
  activityMessage = "Check the weather again before planning!";
}

// Step 3: Display the weather data and suggestion
console.log("----- Weather Activity Planner -----");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggestion: ${activityMessage}`);
