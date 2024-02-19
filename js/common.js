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
	if(document.querySelector('.burger-sidebar__inner') != null){
		document.querySelector('.burger-sidebar__inner').onclick = function(e){
			document.querySelector('.sidebar').classList.toggle('opened');
		}

	}
	// END siedebar toggling


	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		if(document.querySelector('.footer-photos') !== null){
		  const footerSlider = new Swiper('.footer-photos', {
			  loop: true,
			  speed: 2000,
			  slidesPerView: 3,
			  spaceBetween:10,
			   pagination: {
	            el: '.swiper-pagination',
	            type: 'progressbar',
	        },
			  autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
			});
		}
		
		ymaps.ready(mapInit);
		
		function mapInit(){     
	       var myMap = new ymaps.Map("map", {
	            center: [56.860138, 35.920379],
	            zoom: 17,
	           	controls: ['zoomControl'], //оставляем только масштабирование
	           	// behaviors: ['drag'] //оставляем только поведение drag
	        });


	       // одиночный маркер 
		        var placemark = new ymaps.Placemark(myMap.getCenter(), {
		        	

		      	});

		        myMap.geoObjects.add(placemark);
	    }
		  // function ScrollUpdateDelay() {
		  // 	setTimeout(function(){ scroll.update(); }, 500);

		  // }

		  // ScrollUpdateDelay();
	


// 	scroll.on('scroll', (args) => {
//     console.log('scroll')
//     if(typeof args.currentElements['hey'] === 'object') {
//         let progress = args.currentElements['hey'].progress;
//         console.log(progress);
//         // ouput log example: 0.34
//         // gsap example : myGsapAnimation.progress(progress);
//     }
// });

// 	scroll.on('call', (func, args, obj) => {
//    // this[func]();
//    console.log(args);
//    console.log(obj);
// });

	if(document.querySelector('.person-view') !== null){
		function numValue(num) {
			return num.toString().length > 1 ? num : `0${num}`
		}

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
		});
		const swiper = new Swiper('.person-view__big', {
		  loop: true,
		  effect: 'fade',
		  allowTouchMove: false,
		  fadeEffect: {
		    crossFade: true
		  },
		  speed: 0,
		  // delay: 6000,
		  // autoplay: true,

		  pagination: {
	        el: ".swiper-pagination",
	        type: 'custom',
	 		renderCustom: (swiper, current, total) => {
 				return numValue(current);
	 		}
	      },

		   on: {
		    afterInit: function (swiper) {
		      console.log(swiper.slidesEl);
		      // swiper.slidesEl.querySelector('.swiper-slide-prev').style.zIndex = '97';
		      swiper.slidesEl.querySelector('.swiper-slide-next').style.zIndex = '98';
		      swiper.slidesEl.querySelector('.swiper-slide-active').classList.add('zoom-out');
		      animateNameShow(swiper.activeIndex);

		    },
		  }
		  
		});
		const sliderArrowDelay = 2500;
		let swiperDirection = null;
		let slideChangeInterval;
		var namesIndex = 0;

		thumbSwiper.slideTo(1);

		function animateNameShow(animatedSide){
			setTimeout(function() {
			      
				[...swiper.slides[animatedSide].querySelectorAll('.name-person-view__first, .name-person-view__last')]
				.forEach((slide) => {
					
						slide.classList.remove('rotateOutUpLeft');
						slide.classList.add('rotateInUpLeft');
		      	});

		      	[...swiper.slides].forEach((slide, i) => {
					if(i !== animatedSide){


					}
		      	});

		      }, 1500)
		}
		function animateNameHide(animatedSide){
			      console.log(swiper.slides[animatedSide]);
				[...swiper.slides[animatedSide].querySelectorAll('.name-person-view__first, .name-person-view__last')]
				.forEach((slide) => {
						console.log(slide.textContent)
						slide.classList.remove('rotateInUpLeft');
						slide.classList.add('rotateOutUpLeft');

		      	});

		}

		function swiperAutoplay(){
		  slideChangeInterval = setInterval(() => {
		    sliderMoove('forward');
		  }, 3000);
		}
		// swiperAutoplay();

		document.querySelector('.person-view__prev').onclick = (e) => {
		  clearInterval(slideChangeInterval);
		   swiper.slidesEl.classList.add('swiper-changes');
		  
  			if(swiper.activeIndex > 0){
  				animateNameHide(namesIndex);
  				 animateNameShow(namesIndex - 1);
  				 namesIndex -= 1;
  				 if(namesIndex < 0){
  				 	namesIndex = swiper.slides.length - 1;
  				 }
			  sliderMoove('back');
			 
			  e.target.disabled = true;
			  setTimeout(() => {e.target.disabled = false;},  sliderArrowDelay);
			
			}
		}
		document.querySelector('.person-view__next').onclick = (e) => {
		  clearInterval(slideChangeInterval);
		   swiper.slidesEl.classList.add('swiper-changes');
			  console.log('index in Next' + swiper.activeIndex)
		   if(swiper.activeIndex <= swiper.slides.length - 2){
  				animateNameHide(namesIndex);
  				 animateNameShow(namesIndex + 1);
 				namesIndex += 1;
 				if(namesIndex > swiper.slides.length - 1){
  				 	namesIndex = 0;
  				 }
			  sliderMoove('forward');

			  e.target.disabled = true;
			  setTimeout(() => {

			  	e.target.disabled = false;
			  },  sliderArrowDelay);
		   }
		} 

		function sliderMoove(direction){
		  swiperDirection = direction;
		  let activeSlide =  swiper.slidesEl.querySelector('.swiper-slide-active');
		  activeSlide.classList.add('animation-active');
		  
		  Array.prototype.slice.call(swiper.slidesEl.querySelectorAll('.swiper-slide')).forEach((slide, i) => {
		          slide.classList.add('zoom-out');

		 });
		  
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
		  // console.log(swiper.slides.length);
		  console.log('in cange ' + swiper.activeIndex);
		  
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

		//---------------Swiper
		if(document.querySelector('.works-swiper') !== null){
		  var cardsSwiper = new Swiper('.works-swiper', {
			observer: true,
			observeParents: true,
			// centered: 'auto',
			// loop:true,
			// centeredSlides: true,
			//freeMode: true,// в сочетании с mousewheel дает возможность прокручивать стр-цу. после докручивания слайдера до начала или конца колесом мыши
			slidesPerView: 6,
			spaceBetween: 40,
			observer: true,
			observeParents: true,

			  watchSlidesProgress: true,//предотвращает прокрутку слайдов при клике на ссылку внутри слайда
			  navigation: {
			  	clickable: true,
			  	nextEl: '.person-works__nav--next',
			  	prevEl: '.person-works__nav--prev',
			  },

			});

		  document.querySelector('.person-works__nav--next').onclick = function() {
		  	console.log('next tick!!')
		  	cardsSwiper.slideNext();
		  }
		}
		//---------------END Swiper

		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true
		    // scrollFromAnywhere: true,
		    // resetNativeScroll: true
		    // offset: ['100%', 0]
		});
		document.querySelector('.person-view__scroll').onclick = function() {
			console.log(document.querySelector('.person-works__slider').getBoundingClientRect().top)
			var coord = document.querySelector('.person-works__slider').getBoundingClientRect().top;
			scroll.scrollTo(document.querySelector('.person-works__slider').getBoundingClientRect().height, {
				offset: 50, 
				duration: 500,
				callback: function() {
					
				}
			});

		}
		scroll.on('scroll', (func, args, obj) => {

			// console.log(func.currentElements);
			if(func.delta.y === 0){
				document.querySelector('.person-view__cover').classList.remove('covered');
			}
			if(typeof func.currentElements['hey'] === 'object') {
				document.querySelector('.person-view__cover').classList.add('covered');
				// setTimeout(function() {
				// 	cardsSwiper.slideTo(cardsSwiper.slides.length / 2, 3000);

				// }, 1000);
			}
			if(typeof func.currentElements['cards'] === 'object') {
				console.log('doscrollili!');
				document.querySelector('.works-swiper').classList.add('expanded');
				document.querySelector('.person-works__nav').classList.add('hidden');
				// [...document.querySelectorAll('.person-works__card')].forEach(card => {

				// 	card.classList.remove('flipOutX');
				// 	card.classList.add('flipInX');
				// });
			}
		});

		}
	});
})();