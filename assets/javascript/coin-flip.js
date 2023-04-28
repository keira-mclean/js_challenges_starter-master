"use strict";

(function(){

    let button = document.getElementById("flip");
    let result = document.getElementById("result");
    let tosses = document.getElementById("tosses");

    let countOfTosses = tosses.innerHTML;
    let addToss = parseInt(countOfTosses)+1;
    tosses.innerHTML = addToss;
      
    button.addEventListener("click", onClick);

     function onClick(event) {
      let coin = Math.random();

      if (coin < 0.5) {
        result.innerHTML = "Heads";
      } else {
        result.innerHTML = "Tails";
      }
    }

})();
