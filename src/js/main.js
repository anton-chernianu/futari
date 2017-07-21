// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     	zoom: 16,
// 		scrollwheel:  false,
// 		center: {lat: 50.497500, lng: 30.455741},
// 		styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}]
                
// 		});
// 		marker = new google.maps.Marker({
// 		map: map,
// 		draggable: false,
// 		position: {lat: 50.497500, lng: 30.455741},
// 		icon: "../images/map.png"
//   });
// }


window.onscroll=function(){
   console.log( 
     'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' +
     'left: ' + (window.pageXOffset || document.documentElement.scrollLeft)
   );
}

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

  $('#btn--cream').on('click', function() {
    $('.car__front-toxic').addClass('car--hidden');
    $('.car__front-cream').addClass('car--visible');
  });

   $('#btn--toxic').on('click', function() {
        $('.car__front-toxic').removeClass('car--hidden');
    $('.car__front-cream').removeClass('car--visible');
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