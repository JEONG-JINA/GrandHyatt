const win_w = window.outerWidth;
const win_h = window.innerHeight;
let i = 0;



//공통 컴포넌트
const components = document.querySelectorAll('.component');

components.forEach(function(el) {
    const include = el.getAttribute('data-include');

    fetch(include)
    .then(res => res.text())
    .then(data => {
        el.innerHTML = data;
        getScript();
    });
});



function getScript() {
    //헤더
    const header = document.querySelector('header');

    function hd_scroll() {
        window.addEventListener('scroll', function(){
            const win_w = window.outerWidth;
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


    $(function() {
        $("header .gnb > ul > li").on("mouseenter focusin", function() {
            $("header .lnb").stop().show();
            $("header .menu_bg").stop().show();
            $("header").addClass("on");
        });
    
        $("header").on("mouseleave focusout", function() {
            $("header .lnb").stop().slideUp();
            $("header .menu_bg").stop().slideUp();
            $("header").removeClass("on");
        });
    
        $("header .top ._menu .lang > span").click(function() {
            $(this).siblings().stop().slideToggle();
        });
    });
    

    /*const hdGnb = header.querySelectorAll('.gnb > ul > li');
    const hdLnb = header.querySelectorAll('.lnb');
    const menuBg = document.querySelector('header .menu_bg');

    function slideDown(el) {
        el.style.display = 'block';
        el.style.transition = 'height 0.3s';

        if (el.scrollHeight > 0) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            let styleHeight = window.getComputedStyle(el).getPropertyValue('height');
            el.style.height = styleHeight;
        }
  
        setTimeout(function() {
            el.style.height = '';
        }, 200);
    }
  
    function slideUp(el) {
        el.style.transition = 'height 0.3s';
        el.style.height = '0px';
        el.style.display = 'none';
  
        setTimeout(function() {
            el.style.height = '';
            el.style.display = 'none';
        }, 200);
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

    hdLang.addEventListener('click', function() {
        slideToggle(hdLangList);
    });*/



    //모바일 메뉴
    const body = document.querySelector('body');
    const mobileMenu = document.querySelector('.mobile-only');
    const mobileGnb = mobileMenu.querySelectorAll('.gnb > ul > li');
    const hdMobileBtn = header.querySelector('.mo_btn');
    const mobileBtn = mobileMenu.querySelector('.mo_btn');

    function mobile_remove() {
        body.classList.remove('on');
        mobileMenu.classList.remove('on');

        mobileGnb.forEach(function(item) {
            item.classList.remove('on');
            item.querySelector('.lnb').style.display = 'none';
        });
    
        mobileGnb[0].classList.add('on');
        mobileGnb[0].querySelector('.lnb').style.display = 'block';
    }

    if (win_w > 1023) {
        mobile_remove();
    }


    hdMobileBtn.addEventListener('click', function() {
        body.classList.add('on');
        mobileMenu.classList.add('on');
    });

    mobileBtn.addEventListener('click', function() {
        mobile_remove();
    });


    function getSiblings(el) {
        return Array.from(el.parentNode.children).filter(function(child) {
            return child !== el;
        });
    }

    mobileGnb.forEach(function(item) {
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



    //반응형
    window.addEventListener('resize', function() {
        hd_scroll();
        mobile_remove();
    });
}