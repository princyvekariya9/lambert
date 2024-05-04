

//   about slider start
$(document).ready(function(){
    $('#about_slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        })
  
        // our reastorant
        $('#our_restorans').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        })
       
        // testimonial
        $('#testimonial').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long "></i>'],
        })
});
//   about slider end

 // scrolling
        
 $(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
// scrolling end

// scrolling about section start
$(function() {
  $('#about').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
// scrolling about section end

 // loader start
 $(document).ready(function(){
  setTimeout(function(){
      $('.loader').fadeOut();
  },1000);
})
//loader end