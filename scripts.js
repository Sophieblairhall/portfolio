// Navigation Menu Hover Effect

$( document ).ready(function() {
	$('.navlink').hover(function() {
		$('.navlink').not(this).toggleClass('toggle');
	});
	$('.navlink').mouseout(function() {
		$('.navlink').not($(this)).removeClass('toggle');
	});
});

// Project Items Hover Effect

$( document ).ready(function() {
	$('li').hover(function() {
		$('li').not(this).toggleClass('toggle');
	});
	$('li').mouseout(function() {
		$('li').not($(this)).removeClass('toggle');
	});
});

// Hover background change

//Beauty Retouching
$(function() {
  $('.midnight').hover(function() {
    $('body').css('background-color', '#ccabf1');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.midnight').hover(function(){   
      $('.caption1').fadeIn()  
        $('.caption1').removeClass('hide');    
    },     
    function(){    
      $('.caption1').fadeOut()
        $('.caption1').addClass('hide');     
    });
});   

//Product Retouching
$(function() {
  $('.smoke').hover(function() {
    $('body').css('background-color', '#eaa5a4');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.smoke').hover(function(){   
      $('.caption2').fadeIn()  
        $('.caption2').removeClass('hide');    
    },     
    function(){    
      $('.caption2').fadeOut()
        $('.caption2').addClass('hide');     
    });
});   

//Illustration
$(function() {
  $('.yellow').hover(function() {
    $('body').css('background-color', '#f2c29c');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.yellow').hover(function(){     
	    $('.caption3').fadeIn()
        $('.caption3').removeClass('hide');
    },     
    function(){
	    $('.caption3').fadeOut() 
        $('.caption3').addClass('hide');    
    });
});   


//photo
$(function() {
  $('.nude').hover(function() {
    $('body').css('background-color', '#bdd48e');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.nude').hover(function(){    
	    $('.caption4').fadeIn() 
        $('.caption4').removeClass('hide');    
    },     
    function(){    
	    $('.caption4').fadeOut()
        $('.caption4').addClass('hide');     
    });
});   


//Bricolage Mag
$(function() {
  $('.dust').hover(function() {
    $('body').css('background-color', '#eddf94');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.dust').hover(function(){ 
	    $('.caption5').fadeIn()    
        $('.caption5').removeClass('hide');    
    },     
    function(){    
	    $('.caption5').fadeOut()
        $('.caption5').addClass('hide');     
    });
});   


//Whipps Cross
$(function() {
  $('.copper').hover(function() {
    $('body').css('background-color', '#ba8332');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.copper').hover(function(){ 
	    $('.caption6').fadeIn()    
        $('.caption6').removeClass('hide');    
    },     
    function(){    
	    $('.caption6').fadeOut()
        $('.caption6').addClass('hide');     
    });
});   

//Misc
$(function() {
  $('.ooze').hover(function() {
    $('body').css('background-color', '#b75675');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.ooze').hover(function(){ 
      $('.caption7').fadeIn()    
        $('.caption7').removeClass('hide');    
    },     
    function(){    
      $('.caption7').fadeOut()
        $('.caption7').addClass('hide');     
    });
});   


//New Marc
$(function() {
  $('.grease').hover(function() {
    $('body').css('background-color', '#8f9cb4');
  }, function() {
    // on mouseout, reset the background colour
    $('body').css('background-color', '');
  });
});
$(document).ready(function() {     
    $('.grease').hover(function(){   
	    $('.caption8').fadeIn()  
        $('.caption8').removeClass('hide');    
    },     
    function(){    
	    $('.caption8').fadeOut()
        $('.caption8').addClass('hide');     
    });
});   


