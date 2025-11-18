"use strict";
(function q6(){
  function pyramidLet(n = 5){
    for(let i=1;i<=n;i++){
      let row = "";
      for(let j=1;j<=i;j++) row += "* ";
      console.log(row.trim());
    }
  }
  function pyramidVar(n = 5){
    for(var i=1;i<=n;i++){
      var row = "";
      for(var j=1;j<=i;j++) row += "* ";
      console.log(row.trim());
    }
  }
  pyramidLet(4);
  console.log("--- now using var ---");
  pyramidVar(4);
})();
