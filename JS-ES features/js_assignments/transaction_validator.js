"use strict";
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
(function q3(){
  const valid = [];
  const invalid = [];
  for(let i=0;i<transactions.length;i++){
    try{
      const t = transactions[i];
      debugger;
      if(t === null) throw new Error("NULL_ENTRY");
      if(typeof t !== "object" || t.id === undefined || t.amount === undefined) throw new Error("MISSING_FIELD");
      if(typeof t.amount !== "number") throw new Error("INVALID_AMOUNT_TYPE");
      if(t.amount < 0) throw new Error("NEGATIVE_AMOUNT");
      valid.push(t);
    }catch(e){
      invalid.push({index:i, error:e.message});
    }
  }
  console.log("Valid transactions:", valid);
  console.log("Invalid transactions:", invalid);
  console.log("Summary: successful =", valid.length, ", failed =", invalid.length);
})();
