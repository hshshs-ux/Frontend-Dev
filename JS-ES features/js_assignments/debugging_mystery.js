"use strict";
(function q4(){
  try{
    function showMessage(){
      let greeting = "Welcome";
      console.log(greeting);
    }
    showMessage();
    console.log("Q4: fixed by declaring 'greeting' with let (strict mode prevents implicit globals).");
  }catch(e){
    console.log("Q4 Error:", e.message);
  }
})();
