Array.prototype.myMap = function(callbackFunction) {
    const resultList = [];
    for (let item of this) {
        resultList.push(callbackFunction(item));
    }
    return resultList;
};

console.log([1,2,3].myMap(n => n * 2));