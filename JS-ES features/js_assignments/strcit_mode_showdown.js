(function q8_strict(){
  "use strict";
  try{
    function demo(a, a2){
      let total = 10;
      return total;
    }
    console.log("Strict mode result:", demo(5,10));
  }catch(e){
    console.log("Strict Error:", e.message);
  }
})();
