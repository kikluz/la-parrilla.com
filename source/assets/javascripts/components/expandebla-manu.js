$('#accordion-menu .open').click(function() {

    $('#accordion-menu .open').removeClass('open-selected');
        $('#accordion-menu .content-info').slideUp('normal');
        if($(this).next().is(':hidden') == true) {
            $(this).addClass('open-selected');
            $(this).next().slideDown('normal');
         } 
          
     });
    $('#accordion-menu .content-info').hide();