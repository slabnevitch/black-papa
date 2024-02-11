// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	if('objectFit' in document.documentElement.style === false){
	  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	    var image = el.querySelector('img');
	    el.style.backgroundImage = 'url("'+image.src+'")';
	    el.classList.add('ibg');
	    el.classList.remove('_fit');
		 });
	}
	// End ibg class

	// siedebar toggling
	document.querySelector('.burger-sidebar__inner').onclick = function(e){
		document.querySelector('.sidebar').classList.toggle('opened');
	}
	// END siedebar toggling

	const scroll = new LocomotiveScroll({
		    el: document.querySelector('[data-scroll-container]'),
		    smooth: true
		});
		document.querySelector('.person-view__scroll').onclick = function() {
			scroll.scrollTo(document.querySelector('.person-works'));

		}

	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		
		const thumbSwiper = new Swiper('.person-view__thumb', {
		  loop: true,
		  // effect: "slide",
		  speed: 2000,
		  // initialSlide: 1,
		  parallax: true,
		  effect: 'fade',
		  allowTouchMove: false,
		  fadeEffect: {
		    crossFade: true
		  }
		  // effect: "creative",
		      // creativeEffect: {
		      //   prev: {
		      //     // shadow: true,
		      //     translate: ["-50%", 0, -200],
		      //   },
		      //   next: {
		      //     // shadow: true,
		      //     translate: ["80%", 0, -200],
		      //   },
		      // },
		      //  prev: {
		      //     shadow: true,
		      //     translate: ["-20%", 0, -1],
		      //   },
		      //   next: {
		      //     shadow: true,
		      //     translate: ["100%", 0, 0],
		      //   }
		      // }
		  
		  
		});
		const swiper = new Swiper('.person-view__big', {
		  // Optional parameters
		  // direction: 'vertical',
		  loop: true,
		  effect: 'fade',
		  allowTouchMove: false,
		  fadeEffect: {
		    crossFade: true
		  },
		  speed: 0,
		  // delay: 6000,
		  // autoplay: true,

		  // If we need pagination
		  pagination: {
		    el: '.swiper-pagination',
		  },

		  // Navigation arrows
		  // navigation: {
		  //   clickable: true,
		  //   nextEl: '.swiper-button-next',
		  //   prevEl: '.swiper-button-prev',
		  // },

		  // And if we need scrollbar
		  scrollbar: {
		    el: '.swiper-scrollbar',
		  },
		   on: {
		    afterInit: function (swiper) {
		      console.log(swiper.slidesEl);
		      // swiper.slidesEl.querySelector('.swiper-slide-prev').style.zIndex = '97';
		      swiper.slidesEl.querySelector('.swiper-slide-next').style.zIndex = '98';
		      swiper.slidesEl.querySelector('.swiper-slide-active').classList.add('zoom-out');
		    },
		  }
		  
		});
		const sliderArrowDelay = 2500;
		let swiperDirection = null;
		let slideChangeInterval;

		thumbSwiper.slideTo(1);

		function swiperAutoplay(){
		  slideChangeInterval = setInterval(() => {
		    sliderMoove('forward');
		  }, 3000);
		}
		// swiperAutoplay();

		document.querySelector('.person-view__prev').onclick = (e) => {
		  clearInterval(slideChangeInterval);
		   swiper.slidesEl.classList.add('swiper-changes');
		  
		  sliderMoove('back');
		  
		  e.target.disabled = true;
		  setTimeout(() => {e.target.disabled = false;},  sliderArrowDelay);
		}
		document.querySelector('.person-view__next').onclick = (e) => {
		  clearInterval(slideChangeInterval);
		   swiper.slidesEl.classList.add('swiper-changes');
		  sliderMoove('forward');
		  e.target.disabled = true;
		  setTimeout(() => {e.target.disabled = false;},  sliderArrowDelay);
		} 

		function sliderMoove(direction){
		  swiperDirection = direction;
		  let activeSlide =  swiper.slidesEl.querySelector('.swiper-slide-active');
		  activeSlide.classList.add('animation-active');
		  
		  Array.prototype.slice.call(swiper.slidesEl.querySelectorAll('.swiper-slide')).forEach((slide, i) => {
		          slide.classList.add('zoom-out');

		 });
		  // if(activeSlide.previousElementSibling !== null){
		  //   activeSlide.previousElementSibling.classList.add('zoom-out');
		  // }
		  // if(activeSlide.nextElementSibling !== null){
		  //   activeSlide.nextElementSibling.classList.add('zoom-out');
		  // }
		  
		  changeSlidersIndex(direction);
		  if(direction === 'forward'){
		    thumbSwiper.slideNext();
		  }else{
		    // console.log(swiper.activeIndex)
		    thumbSwiper.slidePrev();
		    // thumbSwiper.slideTo(swiper.activeIndex + 1);
		  }
		  
		  setTimeout(() => {
		      direction === 'forward' ? swiper.slideNext() : swiper.slidePrev();
		      
		       [...swiper.slidesEl.querySelectorAll('.swiper-slide:not(.swiper-slide-active)')].forEach((slide) => {
		      slide.classList.remove('animation-active');

		    });
		    console.log(swiper.activeIndex)   
		      
		     Array.prototype.slice.call(swiper.slidesEl.querySelectorAll('.swiper-slide')).forEach((slide, i) => {
		        if(i == swiper.activeIndex){
		          slide.classList.add('zoom-out');
		        }else{
		          slide.classList.remove('zoom-out');
		        }
		        
		      });

		   
		    }, 1500);
		}

		swiper.on('transitionStart', function (swiper) {
		  console.log('slideNextTransitionStart');

		});
		swiper.on('transitionEnd', function (swiper) {
		  // console.log('slideNextTransitionEnd');

		});
		swiper.on('transitionStart', function (swiper) {
		  // console.log('transitionStart');
		  changeSlidersIndex(swiperDirection);
		});
		swiper.on('transitionEnd', function (swiper) {
		  console.log('transitionEnd');
		});

		function changeSlidersIndex(direction){
		  console.log(swiper.slides.length);
		  console.log(swiper.activeIndex);
		  if(swiper.activeIndex == 0 && direction === 'back'){
		    swiper.slides[swiper.slides.length - 1].style.zIndex = '98';
		    swiper.slidesEl.querySelector('[data-swiper-slide-index="'+(swiper.activeIndex+1)+'"]').style.zIndex = '97';
		  
		  }
		   if(swiper.activeIndex == swiper.slides.length - 1 && direction === 'forward'){
		    swiper.slides[0].style.zIndex = '98';
		    swiper.slidesEl.querySelector('[data-swiper-slide-index="'+(swiper.slides.length - 1)+'"]').style.zIndex = '97';
		   }
		  [...swiper.slides].forEach((slide, i)=>{
		    if(i !== swiper.activeIndex && i !== swiper.activeIndex + 1 && i !== swiper.activeIndex - 1){
		      slide.style.zIndex = '0';
		    }
		    // else if(i === swiper.activeIndex + 1){
		    //   swiper.slidesEl.querySelector('[data-swiper-slide-index="'+(swiper.activeIndex+1)+'"]').style.zIndex = '98';
		    //   swiper.slidesEl.querySelector('[data-swiper-slide-index="'+(swiper.activeIndex+1)+'"]').style.zIndex = '97';
		    // }
		  });
		  
		  swiper.slidesEl.querySelector('.swiper-slide-active').style.zIndex = '99';
		   // swiper.slidesEl.querySelector('.swiper-slide-active').classList.add('zoom-out');
		  
		  if( direction === 'forward'){
		    if( swiper.slidesEl.querySelector('.swiper-slide-prev') !== null){
		      swiper.slidesEl.querySelector('.swiper-slide-prev').style.zIndex = '97';
		       swiper.slidesEl.querySelector('.swiper-slide-prev').classList.add('zoom-out');
		    }
		    if( swiper.slidesEl.querySelector('.swiper-slide-next') !== null){
		      swiper.slidesEl.querySelector('.swiper-slide-next').style.zIndex = '98';
		      swiper.slidesEl.querySelector('.swiper-slide-next').classList.add('zoom-out');
		    }
		  }else{
		    if( swiper.slidesEl.querySelector('.swiper-slide-prev') !== null){
		      swiper.slidesEl.querySelector('.swiper-slide-prev').style.zIndex = '98';
		       swiper.slidesEl.querySelector('.swiper-slide-prev').classList.add('zoom-out');
		    }
		    if( swiper.slidesEl.querySelector('.swiper-slide-next') !== null){
		      swiper.slidesEl.querySelector('.swiper-slide-next').style.zIndex = '97';
		       swiper.slidesEl.querySelector('.swiper-slide-next').classList.add('zoom-out');
		    }
		  }
		}
	});
})();