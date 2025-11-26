function applyOperation(numberList, operationFunction) {
    return operationFunction(numberList);
}

function doubleNumbers(numberList) {
    return numberList.map(n => n * 2);
}

function squareNumbers(numberList) {
    return numberList.map(n => n * 2);
}

console.log(applyOperation([1,2,3,4], doubleNumbers));
console.log(applyOperation([1,2,3,4], squareNumbers));