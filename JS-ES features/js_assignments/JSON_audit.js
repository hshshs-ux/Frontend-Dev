"use strict";
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];
(function q9(){
  const clean = [];
  const errors = [];
  for(let i=0;i<rawData.length;i++){
    try{
      const obj = JSON.parse(rawData[i]);
      if(!obj.user || obj.age === undefined) throw new Error("MISSING_KEYS");
      obj.age = Number(obj.age);
      if(!Number.isFinite(obj.age)) throw new Error("INVALID_AGE");
      if(obj.age >= 18) clean.push(obj);
    }catch(e){
      errors.push({line:i, raw:rawData[i], error:e.message});
    }
  }
  console.log("Clean entries (18+):", clean);
  console.log("Errors with line numbers:", errors);
})();
