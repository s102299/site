let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})


var tabEen = document.querySelector("#een");
var tabTwee = document.querySelector("#twee");
var tabDrie = document.querySelector("#drie");
var tabVier = document.querySelector("#vier");

tabEen.onclick = function() {
      this.className = "";
      tabTwee.className = "";
      tabDrie.className = "";
}

tabTwee.onclick = function() {
       if (this.className === "twee-weg") {
             this.className = "";
             tabDrie.className = "";
       } else {
            tabEen.classList.add("een-weg");
       }
}

tabDrie.onclick = function() {
      if (this.className === "drie-weg") {
            this.className = "";
      } else {
            tabEen.classList.add("een-weg");
            tabTwee.classList.add("twee-weg");
      }
}

tabVier.onclick = function() {
      tabEen.classList.add("een-weg");
      tabTwee.classList.add("twee-weg");
      tabDrie.classList.add("drie-weg");
}
