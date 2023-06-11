//메인비주얼
const mainTxt = document.querySelector('.main-visual .mainTxt');

mainTxt.classList.add('on');



//다이닝
const tabBtn = document.querySelectorAll('.section-dining .tab-btn li');
const tabContent = document.querySelectorAll('.section-dining .tab-content li');

tabBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        var i = index;

        tabBtn.forEach(function(tabItem, tabIndex) {
            tabItem.classList.toggle('on', tabIndex === i);
        });
    
        tabContent.forEach(function(tabConItem, tabConIndex) {
            tabConItem.classList.toggle('on', tabConIndex === i);
        });
    });
});



//부대시설
/*
const fcTit = document.querySelectorAll('.section-fc .fc_tit .titWrap');
const fcContent = document.querySelectorAll('.section-fc .content .cont');
  
fcTit.forEach(function(item, index) {
    item.addEventListener('click', function() {
        var i = index;
        
        fcTit.forEach(function(fcTitItem, fcTitIndex) {
            fcTitItem.classList.toggle('on', fcTitIndex === i);
    
            if (fcTitIndex <= i) {
                fcTitItem.style.left = i * 6 + '%';
            } else {
                fcTitItem.style.left = 100 - Math.abs(i - 5) * 6 + '%';
            }
        });
      
        fcContent.forEach(function(fcConItem, fcConIndex) {
            fcConItem.classList.toggle('on', fcConIndex === i);
        });
    });
});
*/
$(function() {
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
});