"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];
(function q2(){
  for(let i=0;i<employees.length;i++){
    try{
      const emp = employees[i];
      if(!emp || typeof emp.name !== "string") throw new Error(`Missing or invalid employee at index ${i}`);
      const salary = Number(emp.salary);
      const years = Number(emp.years);
      if(!Number.isFinite(salary)) throw new TypeError(`Invalid salary for ${emp.name}`);
      if(!Number.isFinite(years)) throw new TypeError(`Invalid years for ${emp.name}`);
      const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
      console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
    }catch(e){
      console.log(`Error processing employee index ${i}:`, e.message);
    }
  }
})();
