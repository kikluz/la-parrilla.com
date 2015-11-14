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

// multiples modals for menu images

$('.open-modal').click(function() {
  var el = $(this)[0],
      classes = el.className.split(/\s+/);
  for(var i = 0; i < classes.length; i++) {
    if(classes[i].match(/modal-/)) {
      var modalClass = classes[i];
      $('.modal.' + modalClass).fadeIn('fast');
    }
  }
});

$('.close-modal').click(function() {
  $(this).closest('.modal').fadeOut('fast');
});


$('button').click(function(e) {
  $('.overlay, .modal').addClass('active');
  e.preventDefault();
});

$('.modal img').click(function(e) {
  $('.overlay, .modal').removeClass('active');
  e.preventDefault();
});


