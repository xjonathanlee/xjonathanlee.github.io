//readjust for better values;
// init Isotope
console.log("init");

$(document).ready(function(){
    $('.project-thumbnail').okhover({
        fadeIn: true,
        fadeOut: true,
        fadeInDuration: 200
    });
console.log("I am hoeverings");
});

var $grid = $('.grid').isotope({
  itemSelector: '.project-component',
  layoutMode: 'fitRows',
  getSortData: {
    category: '[data-category]'
  }
});

// bind filter button
$('#filters').on('click', 'button', function() {
  console.log("click");
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
    filter: filterValue
  });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    console.log("click");
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});




// var $gridIso = $('.grid-mason').isotope({
//   itemSelector: '.grid-item',
//   percentPosition:true,
//   masonry:{
//     columnWidth:'.gridmason-alpha'
//   }
// });
//
// $gridIso.imagesLoaded().progress( function(){
//   $gridIso.isotope('layout');
// });

var $gridmason = $('.grid-mason').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true

});

$gridmason.imagesLoaded().progress(function() {
  $gridmason.masonry();
});



$('.grid-item').click(function(event) {
			// Check if not already open
			if (!$(this).hasClass('item-opened')) {
				// Values
				var elWidth = $(this).outerWidth() / 2;
				var elPosition = this.getBoundingClientRect();

				// Store position
				$(this).attr('data-coord-left', $(this).css('left'));
				$(this).attr('data-coord-top', $(this).css('top'));

				// Transition effect
					$(this).css({
						top:	elPosition.top,
						left:	elPosition.left
					}).delay(200).css({
						top: 			'100px',
						left:			'10%',
						zIndex:		'99999',
						// marginLeft:	'-20%'
						// position: 'fixed'
					}).addClass('item-opened');

				$('.gridmason-alpha').fadeIn();

				// Scroll to the top
				$('html, body').animate({
					scrollTop: $('.grid-mason').offset().top
				}, 650);
				$('.grid-mason').css('overflow', 'visible');
			} else{
				$('.grid-mason').css('overflow', 'hidden');
			}
	});


// Close item Modal
	$(document).on('click', function(e) {
		if ($('.item-opened').length > 0) {
			if (!$(e.target).closest('.grid-item').length && !$(e.target).hasClass('item-opened')) {
				$('.gridmason-alpha').fadeOut(350);

				$('.item-opened').css({
					top: 			$('.item-opened').data('coord-top'),
					left:			$('.item-opened').data('coord-left'),
					marginLeft:	''
				});

				$('html, body').animate({
					scrollTop: ($('.grid-mason').offset().top + parseFloat($('.item-opened').data('coord-top'))) - 30
				}, 650);

				setTimeout(function() {
					$('.grid-item').css('z-index', '').removeClass('item-opened');
				}, 350);
				$('.grid-mason').css('overflow', 'hidden');
			}
		}
	});
