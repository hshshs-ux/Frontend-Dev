"use strict";
(function q10(){
  function outer(){
    console.log("outer - count before declaration ->", typeof count !== "undefined" ? count : undefined);
    var count = 5;
    function inner(){
      console.log("inner - count before inner declaration ->", typeof count !== "undefined" ? count : undefined);
      var count = 10;
      console.log("inner - count after inner declaration ->", count);
    }
    inner();
    console.log("outer - count after inner ->", count);
  }
  outer();
  function outerArrow(){
    console.log("outerArrow - count before declaration ->", typeof countA !== "undefined" ? countA : undefined);
    var countA = 5;
    const innerArrow = () => {
      console.log("innerArrow sees countA (closure) before local var ->", typeof countAInner !== "undefined" ? countAInner : undefined);
      var countAInner = 10;
      console.log("innerArrow local countAInner ->", countAInner);
    };
    innerArrow();
    console.log("outerArrow - countA after ->", countA);
  }
  outerArrow();
})();
