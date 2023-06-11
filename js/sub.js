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