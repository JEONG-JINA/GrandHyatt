var scr_top = $(window).scrollTop();
var win_w = $(window).outerWidth();
var i = 0;

sec_fc();
$(".main-visual .mainTxt").addClass("on");


// 헤더
$(window).scroll(function(){
    hd_scr();
});

$(window).resize(function(){
    $(window).scroll(function(){
        hd_scr();
    });
});

function hd_scr() {
    var scr_top = $(window).scrollTop();
    var win_w = $(window).outerWidth();

    if(win_w > 1023 && scr_top > 65) {
        $("header").addClass("fixed");
    }else {
        $("header").removeClass("fixed");
    };

    if (win_w <= 1023 && scr_top > 65) {
        $("header").addClass("m-fixed");
    }else {
        $("header").removeClass("m-fixed");
    };
}

$("header .gnb > ul > li").on("mouseenter focusin", function(){
    $("header .lnb").stop().slideDown();
    $("header .menu_bg").stop().slideDown();
    $("header").addClass("on");
});

$("header").on("mouseleave focusout", function(){
    $("header .lnb").stop().slideUp();
    $("header .menu_bg").stop().slideUp();
    $("header").removeClass("on");
});

$("header .top ._menu .lang > span").click(function(){
    $(this).siblings().stop().slideToggle();
});


// 모바일 메뉴
$("header .top .mo_btn").click(function(){
    $("body").addClass("on")
    $(".mobile-only").addClass("on")
});

$(".side .mo_btn").click(function(){
    mobile_remove();
});

$(".side .gnb > ul > li").click(function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    $(this).find(".lnb").show();
    $(this).siblings().find(".lnb").hide();
});

function mobile_remove() {
    $("body").removeClass("on");
    $(".mobile-only").removeClass("on");
    $(".side .gnb > ul  > li").removeClass("on");
    $(".side .gnb > ul  > li").find(".lnb").hide();
    $(".side .gnb > ul  > li:first-child").addClass("on");
    $(".side .gnb > ul  > li:first-child").find(".lnb").show();
}

if(win_w > 1023) {
    mobile_remove();
}

$(window).resize(function(){
    var win_w = $(window).outerWidth();
    
    if(win_w > 1023) {
        mobile_remove();
    }
});


// 다이닝
$(".section-dining .tab-btn li").click(function(){
    var inx = $(this).index();
    $(".section-dining .tab-btn li").eq(inx).addClass("on");
    $(".section-dining .tab-btn li").not( $(".section-dining .tab-btn li").eq(inx)).removeClass("on");
    $(".section-dining .tab-content li").eq(inx).addClass("on");
    $(".section-dining .tab-content li").not( $(".section-dining .tab-content li").eq(inx)).removeClass("on");
});


// 부대시설
function sec_fc(){
    $(".section-fc .fc_tit .titWrap").eq(i).addClass("on"+i);
    $(".section-fc .fc_tit .titWrap").not($(".section-fc .fc_tit .titWrap").eq(i)).removeClass("on"+i);
    $(".section-fc .fc_tit .titWrap").eq(i).addClass("on");
    $(".section-fc .fc_tit .titWrap").not($(".section-fc .fc_tit .titWrap").eq(i)).removeClass("on");

    $(".section-fc .content .cont").eq(i).stop().fadeIn();
    $(".section-fc .content .cont").not($(".section-fc .content .cont").eq(i)).stop().fadeOut();
    item = $(".section-fc .fc_tit .titWrap");
    active_item = $(".section-fc .fc_tit .titWrap").eq(i);
    item.each(function(inx){
        if(inx <= i){
            $(this).css({left:inx*6+"%"});
        }else {
            //console.log(Math.abs(inx-5))
            $(this).css({left:100-Math.abs(inx-5)*6+"%"});
        }
    });
}

$(".section-fc .fc_tit .titWrap").click(function(){
    i = $(this).index();
    sec_fc();
});


// 주변즐길거리
$(window).scroll(function(){
    win_h = $(window).height();
    scr_top = $(window).scrollTop();

    atr_cont();
});

$(".atr_section .filter li").click(function(){
    _name = $(this).attr("data-name");
    i =  $(this).index();
    atr_filter();
});

function atr_filter(){
    $(".atr_section .content .cont").stop().hide();
    $(".atr_section ."+_name).stop().show();
    $(".atr_section .filter li span").not($(".atr_section .filter li span").eq(i)).stop().hide();
    $(".atr_section .filter li").not($(".atr_section .filter li").eq(i)).removeClass("on");
    $(".atr_section .filter li span").eq(i).stop().show();
    $(".atr_section .filter li").eq(i).addClass("on");
};

function atr_cont(){
    $(".atr_section .content .cont").each(function(inx){
        this_top = $(this).offset().top;
        if(this_top + 100 < scr_top + win_h && this_top){
            $(this).css({opacity:"1"});
        }
        else{
            $(this).css({opacity:"0"});
        }
    });
};