var counter = 0, // to keep track of current slide
    $items = $('.hero-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
  $items.removeClass('show'); // remove .show from whichever element currently has it
  $items.eq(itemToShow).addClass('show');    
};

// add click events to prev & next buttons 
$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});




// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
/*if('ontouchstart' in window){
  $('.hero-slideshow').swipe({
    swipeLeft:function() {
      counter++;
      showCurrent(); 
    },
    swipeRight:function() {
      counter--;
      showCurrent(); 
    }
  });
}*/





$(document).on('ready', inicio);
  // Funciones claves, apertura y cierre de vista previa
  function inicio(){
    $('.gallery img').on('click', abrirFull);
    $('#previa').on('click', cerrarFull);
  }
  //
  function abrirFull(){
    var nombre = $(this).attr('alt'),
        direccion = "https://s-media-cache-ak0.pinimg.com/" + nombre + ".jpg";
    
    $('#imgFull img').attr('src', direccion);
    $('#previa').fadeIn();
  }

function cerrarFull(){
  $('#previa').fadeOut();
}