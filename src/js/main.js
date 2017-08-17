// window.onscroll=function(){
//    console.log( 
//      'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
//      'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
//    );
// }

// SCROLL ACTION
// if ($(window).width() > 600) {
//   $(window).scroll(function() {
//       if ($(this).scrollTop() > 100) { // this refers to window
//           // alert("You've scrolled 100 pixels.");
//           $('.car__image').find(":nth-child(1)").hide();
//           $('.car__image').find(":nth-child(2)").show();
//       }

//         if ($(this).scrollTop() < 100) { // this refers to window
//           // alert("You've scrolled 100 pixels.");
//           $('.car__image').find(":nth-child(1)").show();
//           $('.car__image').find(":nth-child(2)").hide();
//       }
//   });
// }

$( document ).ready(function() {
	// Mobile Humburger Menu
	$(".menu-button-wrapper").click(function(){
    // $('.main-content').fade("slow", "linear");

   	$(this).toggleClass("open");
   	$(".mobile-menu").toggleClass("mobile-menu--open");
	})

  // JS HOVER
	// $('.car__image').hover(function(){
	// 	$(this).find(":nth-child(2)").fadeToggle();
	// });

	// if ($(window).width() < 600) {
 //   		$('.car__image').find(":nth-child(2)").remove();
	// }
  // FINISH JS HOVER

  $('#light-btn').on('click', function() {
    var dataName = $(this).data('name');
    $('.market-block').hide();
    
    // if($(this).hasClass('active')) {
    //   $(this).removeClass('active');
    //   return;
    // }
    
    // $('#light-btn').removeClass('active');
    // $(this).addClass('active');
    
    $('.' + dataName).show();
  });


  $('.plus--close').on('click', function() {
  	$('.market-block').hide();
  });

  $('.color__cream').on('click', function() {
    $('.car__front-toxic').addClass('car--hidden');
    $('.car__front-cream').addClass('car--visible');
    $('.car__back-toxic').addClass('car--hidden');
    $('.car__back-cream').addClass('car--visible');
  });

   $('.color__toxic').on('click', function() {
    $('.car__front-toxic').removeClass('car--hidden');
    $('.car__front-cream').removeClass('car--visible');
    $('.car__back-toxic').removeClass('car--hidden');
    $('.car__back-cream').removeClass('car--visible');
  });

     // $("#front-juke").hover(function(){           
     //     $(this).fadeOut(1000,function(){
     //       $(this).attr("src","images/nissan-back.jpg");
     //       $(this).fadeIn(1000);
     //     });
     //   },  function(){                 
     //       $(this).fadeOut(1000, function(){
     //         $(this).attr("src","images/nissan-front.jpg");
     //         $(this).fadeIn(1000);
     //       });                  
     //   });
	
	// $( "#front-juke" ).hover(
 //  function() {
 //    $(this).attr("src","images/nissan-front2.jpg");
 //    // $(this).fadeTo();
 //  }, function() {
 //    $(this).attr("src","images/nissan-front.jpg");
 //  }
	// );
});