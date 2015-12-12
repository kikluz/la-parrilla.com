// ------------------------------------------------------------
// accordion madness
// ------------------------------------------------------------
// hover effect
$(document).ready(function() {
  $('div.accordion-menu h3').add('div.accordion-menu h3').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

// independently show and hide
$(document).ready(function() {
  $('div.accordion-menu:eq(0) > div').hide();  
  $('div.accordion-menu:eq(0) > h3').click(function() {
    $(this).next().slideToggle('fast');
  });
});

// one showing at a time

$(document).ready(function() {
  $('div.accordion-menu:eq(1) > div:gt(0)').hide();  
  $('div.accordion-menu:eq(1) > h3').click(function() {
    $(this).next('div:hidden').slideDown('fast')
    .siblings('div:visible').slideUp('fast');
  });
});


//simultaneous showing and hiding

$(document).ready(function() {
  $('div.accordion-menu2:eq(0) > div').hide();
  $('div.accordion-menu2:eq(0) > h3').click(function() {
    $(this).next('div').slideToggle('fast')
    .siblings('div:visible').slideUp('fast');
  });
});

//queued showing and hiding
$(document).ready(function() {
  $('div.accordion-menu2:eq(1) > div').hide();  
  $('div.accordion-menu2:eq(1) > h3').click(function() {
    var $nextDiv = $(this).next();
    var $visibleSiblings = $nextDiv.siblings('div:visible');

    if ($visibleSiblings.length ) {
      $visibleSiblings.slideUp('fast', function() {
        $nextDiv.slideToggle('fast');
      });
    } else {
       $nextDiv.slideToggle('fast');
    }
  });
});