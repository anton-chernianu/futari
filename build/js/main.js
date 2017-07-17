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

$( document ).ready(function() {
	// Mobibe Humburger Menu
	$(".menu-button-wrapper").click(function(){
		$(this).toggleClass("open");
		$(".mobile-menu").toggleClass("mobile-menu--open");
	})

	$('.car__image').hover(function(){
		$(this).find(":nth-child(2)").fadeToggle();
	});

	if ($(window).width() < 600) {
   		$('.car__image').find(":nth-child(2)").remove();
	}

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