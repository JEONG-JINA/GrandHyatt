//메인비주얼
const mainTxt = document.querySelector('.main-visual .mainTxt');

mainTxt.classList.add('on');



//다이닝
const tabBtn = document.querySelectorAll('.section-dining .tab-btn li');
const tabContent = document.querySelectorAll('.section-dining .tab-content li');

tabBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        var i = index;

        tabBtn.forEach(function(btnItem, btnIndex) {
            btnItem.classList.toggle('on', btnIndex === i);
        });
    
        tabContent.forEach(function(contentItem, contentIndex) {
            contentItem.classList.toggle('on', contentIndex === i);
        });
    });
});



//부대시설
const fcTit = document.querySelectorAll('.section-fc .fc_tit .titWrap');
const fcContent = document.querySelectorAll('.section-fc .content .cont');

function sec_fc() {
    fcTit.forEach(function(item, index) {
        item.classList.toggle('on', index === i);

        if (index <= i) {
            item.style.left = i * 6 + '%';
        } else {
            item.style.left = 100 - Math.abs(i - 5) * 6 + '%';
        }
    });
  
    fcContent.forEach(function(item, index) {
        item.classList.toggle('on', index === i);
    });
}
  
fcTit.forEach(function(item, index) {
    item.addEventListener('click', function() {
        i = index;
        sec_fc();
    });
});