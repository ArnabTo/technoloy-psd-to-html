document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

$('h2,h3,p,i,a').on("mouseover", function(){
  $('#cursor').css({'transform': 'scale(3)'});
});

$('h2,h3,p,i,a').on("mouseleave", function(){
  $('#cursor').css({'transform': 'scale(2)'});
});

$('h1').on("mouseover", function(){
  $('#cursor').css({'transform': 'scale(4)'});
});
$('h1').on("mouseleave", function(){
  $('#cursor').css({'transform': 'scale(3)'});
});

// sayHello
var Hello = ["\n%c STOP RIGHT THERE CRIMINAL SCUM!" + " %c http://www.nørman.com/ \n", "color: white; font-size: 14px; background: #000; padding:5px 0;", "background: #fff; padding:3px 0; margin-bottom: 4px;"];
window.console.log.apply(console, Hello);