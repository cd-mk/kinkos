// TypeA Mall page JS

$(document).ready(function(){

  new WOW().init();

  // gnb
  $('.gnb_link > .js-show > a').on('mouseenter', function() {
    var title = $(this).text();
    $(this).addClass('active');
    $('.gnb_dept2').stop().slideDown(500);

    $('.js-snb-title').text(title);
    $('#dim').show();
  });
  $('#header').on('mouseleave', function() {
    $('.gnb_dept2').stop().slideUp(500);
    $('#dim').hide();
    $('.gnb_link > li > a').removeClass('active');
  });
  $('.gnb_dept1').on('mouseenter', function() {
    $('.gnb_dept2').stop().slideUp(500);
    $('#dim').hide();
  });

  // visual slider
  var swiper = new Swiper('.main_slide .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.btn_next',
      prevEl: '.btn_prev',
    },
  });

  // thumbnail slider
   var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      centeredSlides: true,
	 		loop: true,
			loopedSlides: 3
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 65,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.5,
      slideToClickedSlide: true,
			loop: true,
      loopedSlides: 3,
      navigation: {
        nextEl: '.section4_next',
        prevEl: '.section4_prev',
      }
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  

    // tab
    $('.js-tabnav').each(function(){
      console.log();
    });
    $('.tablinks').on('click', function() {
      var wrapper = $(this).closest('.js-tabnav'),
        tabconWrapper = wrapper.next('.js-tabcon');

      var idx = $(this).parent().index();

      tabconWrapper.find('.tabcontent').removeClass('active');
      tabconWrapper.find('.tabcontent').eq(idx).addClass('active');
      
      wrapper.find('.tablinks').removeClass('active');
      wrapper.find('.tablinks').eq(idx).addClass('active');    
    });

    // mobile
    $('.gnb_open').on('click', function() {
      $('.m_gnb').addClass('active');
      $('.mo_dim').show();
      $('body').css('overflow', 'hidden');
    });
    $('.m_btn_prev').on('click', function() {
      $('.m_gnb').removeClass('active');
      $('.mo_dim').hide();
      $('body').css('overflow', 'auto');
    });

    // fixedmenu 
    var swiper = new Swiper('.product_list', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      loopedSlides: 3,
      navigation: {
        nextEl: '.fixed-next',
        prevEl: '.fixed-prev',
      }
    });
});

