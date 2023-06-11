const win_w = window.outerWidth;
const win_h = window.innerHeight;
let i = 0;



//반응형
window.addEventListener('resize', function(){
    hd_scroll();
    mobile_remove();
});



//헤더
function hd_scroll() {
    window.addEventListener('scroll', function(){
        const scr_top = window.scrollY || document.documentElement.scrollTop;

        if (win_w > 1023 && scr_top > 65) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        };

        if (win_w <= 1023 && scr_top > 65) {
            header.classList.add('m-fixed');
        } else {
            header.classList.remove('m-fixed');
        };
    });
}
hd_scroll();


const header = document.querySelector('header');
const hdGnb = header.querySelectorAll('.gnb > ul > li');
const hdLnb = header.querySelectorAll('.lnb');
const menuBg = document.querySelector("header .menu_bg");

function slideDown(el) {
    el.style.display = 'block';
    el.style.height = '0px';
  
    let height = el.scrollHeight;
  
    el.style.transition = 'height 0.3s';
    el.style.height = height + 'px';
  
    setTimeout(function() {
        el.style.transition = '';
    }, 300);
}
  
function slideUp(el) {
    let height = el.scrollHeight;
  
    el.style.transition = 'height 0.3s';
    el.style.height = '0px';
  
    setTimeout(function() {
        el.style.display = 'none';
        el.style.transition = '';
        el.style.height = '';
    }, 300);
}
  
function hdMouseEnter() {
    hdLnb.forEach(function(lnb) {
        slideDown(lnb);
    });
    slideDown(menuBg);
    header.classList.add('on');
}
  
function hdMouseLeave() {
    hdLnb.forEach(function(lnb) {
        slideUp(lnb);
    });
    slideUp(menuBg);
    header.classList.remove('on');
}
  
hdGnb.forEach(function(item) {
    item.addEventListener('mouseenter', hdMouseEnter);
    item.addEventListener('focusin', hdMouseEnter);
    header.addEventListener('mouseleave', hdMouseLeave);
    header.addEventListener('focusout', hdMouseLeave);
});


const hdLang = header.querySelector('.lang > span');
const hdLangList = header.querySelector('.lang > ul');

function slideToggle(el) {
    if (window.getComputedStyle(el).display === 'none') {
        slideDown(el);
    } else {
        slideUp(el);
    }
}



//모바일 메뉴
const body = document.querySelector('body');
const mobileOnly = document.querySelector('.mobile_only');
const side = document.querySelector('.side');
const sdGnb = side.querySelectorAll('.gnb > ul > li');
const sdLnb = side.querySelectorAll('.lnb');
const hdMobileBtn = header.querySelector('.mo_btn');
const sdMobileBtn = side.querySelector('.mo_btn');

function mobile_remove() {
    if (win_w > 1023) {
        body.classList.remove('on');
        mobileOnly.classList.remove('on');

        sdGnb.forEach(function(item) {
            item.classList.remove('on');
            item.querySelector('.lnb').style.display = 'none';
        });
    
        sdGnb[0].classList.add('on');
        sdGnb[0].querySelector('.lnb').style.display = 'block';
    }
}
mobile_remove();

hdMobileBtn.addEventListener('click', function() {
    body.classList.add('on');
    mobileOnly.classList('on');
});

sdMobileBtn.addEventListener('click', function() {
    mobile_remove();
});

function getSiblings(el) {
    return Array.from(el.parentNode.children).filter(function(child) {
        return child !== el;
    });
}

sdGnb.forEach(function(item) {
    item.addEventListener('click', function() {
        const siblings = getSiblings(item);
        siblings.forEach(function(sibling) {
            sibling.classList.remove('on');
            sibling.querySelector('.lnb').style.display = 'none';
        });

        item.classList.add('on');
        item.querySelector('.lnb').style.display = 'block';
    });
});



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
        if (index === i) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
  
fcTit.forEach(function(item, index) {
    item.addEventListener('click', function() {
        var i = index;
        sec_fc();
    });
});



//주변 즐길거리
const atrContent = docoment.querySelectorAll('.atr_section .content .cont');
const atrFilter = document.querySelectorAll('.atr_section .filter li');
const atrFilterSpan = atrFilter.querySelectorAll('span');

function offsetTop(el) {
    const rect = el.getBoundingClientRect(); //요소의 위치 정보
    const scr_top = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scr_top; //이 함수는 rect.top+scr_top(offset().top) 값을 반환
}

function attr(el, attributeName) {
    return el.getAttribute(attributeName);
}

window.addEventListener('scroll', function() {
    const scr_top = window.scrollY || document.documentElement.scrollTop;

    atrContent.forEach(function(item) {
        if (offsetTop(item) + 100 < scr_top + win_h && offsetTop(item)) {
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0';
        }
    });
});

atrFilter.forEach(function(item, index) {
    item.addEventListener('click', function() {
        const dataName = attr(item, 'data-name');
        var i = index;

        atrContent.style.display = 'none';
        atrContent.classList.contains(dataName);

        item.classList.toggle('on', index === i);
    });
});