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
const menuBg = document.querySelector('header .menu_bg');

function slideDown(el) {
    if (el.length > 0) {
        el.style.height = el.scrollHeight + 'px';
    } else {
        let styleHeight = window.getComputedStyle(el).getPropertyValue('height');
        el.style.height = styleHeight;
    }
    el.style.transition = 'height 0.3s';
  
    setTimeout(function() {
        el.style.transition = '';
    }, 300);
}
  
function slideUp(el) {
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
const mobileOnly = document.querySelector('.mobile-only');
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
    mobileOnly.classList.add('on');
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