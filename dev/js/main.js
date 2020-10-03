
jQuery(document).ready(function($) {
//sections  
$a=$('#aboutme');
$q=$('#qualification');
// $p=$('#projects');

  $(".close").on('click',function(){
    $ele =$(this).parents('section');
    $ele.addClass('animated slideOutUp');
    new WOW().init();
  });
  $('#h').on('click',function(){
      if($a.hide()){
        
      }
    
  });
  $('#a').on('click',function(){
    $a.removeClass('slideOutUp');
    $a.addClass('animated slideInDown');
    new WOW().init();
    $a.show();
  });
  $('#q').on('click',function(){
    $q.removeClass('slideOutUp');
    $q.addClass('animated slideInDown');
    new WOW().init();
    $q.show();
  });
  $('#p').on('click',function(){
    
  });
  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // custom code

});
function display(){
  document.getElementById("form").style.display="block";
}

