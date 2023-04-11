"use strict";

(function(){

    let button = document.getElementById("flip");
    let result = document.getElementById("result");

   
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
