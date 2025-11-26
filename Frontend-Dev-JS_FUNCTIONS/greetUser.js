function greetUser(userName, callbackFunction) {
    console.log("Hello " + userName);
    callbackFunction();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

greetUser("Jai", showEndMessage);