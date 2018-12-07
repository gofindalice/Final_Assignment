window.addEventListener("load", function(){

  var focusIn = function(element){
    element.style.backgroundColor = "white";
  }

  inView(".myrect").on("enter", focusIn);