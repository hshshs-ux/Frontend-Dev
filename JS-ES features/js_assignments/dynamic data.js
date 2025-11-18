"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
(function q1(){
  const validNumeric = [];
  const invalidNumeric = [];
  const report = [];
  for(let i=0;i<apiData.length;i++){
    const raw = apiData[i];
    const asString = String(raw);
    const asBoolean = (raw === "true" || raw === true) ? true : (raw === "false" || raw === false) ? false : Boolean(raw);
    const asNumber = Number(raw);
    const isNum = Number.isFinite(asNumber);
    if(isNum) validNumeric.push(asNumber);
    else invalidNumeric.push({index:i, raw});
    report.push({index:i, raw, asString, asBoolean, asNumber, isValidNumber:isNum});
  }
  console.log("Q1 REPORT");
  for(const r of report){
    console.log(`Index ${r.index}: raw=${JSON.stringify(r.raw)} | String="${r.asString}" | Boolean=${r.asBoolean} | Number=${r.asNumber} | ValidNumber=${r.isValidNumber}`);
  }
  console.log("Valid numeric array:", validNumeric);
  console.log("Invalid numeric entries:", invalidNumeric);
})();
