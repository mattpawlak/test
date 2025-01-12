$(document).ready(function(){
	slider();
	$("#video").videoPopup();
});

/* Slider */
function slider(){

	$('.control-dot').first().addClass('active');
	$('.slider-unit').first().addClass('active');

	$('.control-dot').click(function(){
		var $this = $(this),
		    $dotLength = $this.parent().children(),
		    position = $dotLength.index($this);

		$('.control-dot').removeClass('active').eq(position).addClass('active');
		$('.slider-unit').removeClass('active').eq(position).addClass('active');
	});
};

// navbar

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar");
    var $section = $("section");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $section.addClass('pt-69');
	});
});

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
	var $menu = $("#js-menu");
	if($menu.hasClass('active')){
		$menu.parent().addClass("bg");
	} else{
		$menu.parent().removeClass("bg");
	}
});


var $first = $('li:first', 'ul'),
      $last = $('li:last', 'ul');

      $(".next").click(function () {
          var $next,
              $selected = $(".active");
          // get the selected item
          // If next li is empty , get the first
          $next = $selected.next('li').length ? $selected.next('li') : $first;
          $selected.removeClass("active");
          $next.addClass('active');
      });
      $(".previous").click(function () {
    var $prev,
        $selected = $(".active");
    // get the selected item
    // If prev li is empty , get the last
    $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
    $selected.removeClass("active");
    $prev.addClass('active');
});

$('#accept').change(function(){
	$("#send-form").prop('disabled', !this.checked);
}).change();


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 52.403327, lng: 16.909979};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
};
