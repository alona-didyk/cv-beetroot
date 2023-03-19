document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("header__burger").addEventListener("click", function(){
      document.querySelector("header").classList.toggle("open")
  }) 
})