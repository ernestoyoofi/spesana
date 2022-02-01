function SearchText() {
   let InputKeyUp = document.getElementById("input_string");
       Local = window.location.hostname ;
   
   if(InputKeyUp.value === "//") {
      window.location.href = "https://github.com/ernestoyoofi/spesana";
   }else {
      window.location.href = "https://www.google.co.ifsearch.?q=" + InputKeyUp.value + " site:https://ernestoyoofi.github.io/spesana/";
   }
}