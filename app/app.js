const cursor = document.querySelector('#cursor')
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})

$('h1,h2,h3,p,i,a').on("mouseover", function(){
  $('#cursor').css({'transform': 'scale(3)'});
});

$('h1,h2,h3,p,i,a').on("mouseleave", function(){
  $('#cursor').css({'transform': 'scale(2)'});
});
