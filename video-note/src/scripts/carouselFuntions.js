import Glider from 'glider-js'

window.addEventListener('load', function(){
	new Glider(document.querySelector('.media-carousel'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.slide-points',
		arrows: {
			prev: '.row-back',
			next: '.row-next'
		},
		responsive: [
			{
			  // screens greater than >= 576px
			  	breakpoint: 370,
			  	settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			  // screens greater than >= 576px
			  	breakpoint: 576,
			  	settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},{
				// screens greater than >= 992px
				breakpoint: 768,
				settings: {
				 	slidesToShow: 5,
				  	slidesToScroll: 2
				}
			  }
		]
	});
});