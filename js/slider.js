// 메인 슬라이드
$(".main-visual .slider").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable : true,
    arrows: false,
    swipeToSlide: true,
    slideToShow: 1,
    dots: true,
    dotsClass: 'slick-main-bar'
});


// 스페셜오퍼
$(".section-offers .slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable : true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev-btn"><span></span></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next-btn"><span></span></button>',
    centerMode: true,
    centerPadding: '0px',
    variableWidth: true,
    swipeToSlide: true,
    dots: true,
    dotsClass: 'slick-custom-dots'
});


// 객실
$(".section-room .slider").slick({
    autoplay: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable : true,
    arrows: false,
    variableWidth: true,
    swipeToSlide: true,
    infinite: false
});

$(".section-room .slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var calc = ((nextSlide+1) / (slick.slideCount)) * 100;
    $(".section-room .progress_bar").css('background-size', calc + '% 100%');
});

$(window).mousemove(function(){
    client_x = event.clientX;
    client_y = event.clientY;
    $(".section-room .cursor").css({
        top: client_y,
        left: client_x
    });
});

$(".section-room .room_image_wrap .slider").mouseenter(function(){
    $(".section-room .cursor").addClass("on");
});

$(".section-room .room_image_wrap .slider").mouseleave(function(){
    $(".section-room .cursor").removeClass("on")
});


// 부대시설 : 모바일
$(".section-fc-m .slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable : true,
    arrows: false,
    swipeToSlide: true,
    slideToShow: 1,
    dots: true,
    dotsClass: 'slick-custom-dots'
});