"use strict";
(function q7(){
  class InvalidOperationError extends Error{}
  const operations = ["add", "divide", "power", "root", "subtract", "unknown"];
  const num1 = 25, num2 = 0;
  const results = [];
  for(const op of operations){
    try{
      let res;
      switch(op){
        case "add": res = num1 + num2; break;
        case "subtract": res = num1 - num2; break;
        case "divide":
          if(num2 === 0) throw new Error("DIVIDE_BY_ZERO");
          res = num1 / num2; break;
        case "power": res = num1 ** num2; break;
        case "root":
          if(num1 < 0) throw new Error("NEGATIVE_ROOT");
          res = Math.sqrt(num1); break;
        default: throw new InvalidOperationError("INVALID_OPERATION");
      }
      results.push({operation:op, result:res});
      console.log(`Operation: ${op} | Result: ${res}`);
    }catch(e){
      console.log(`Operation: ${op} | Error: ${e.message}`);
    }
  }
  console.log("Q7 Summary:", results);
})();
