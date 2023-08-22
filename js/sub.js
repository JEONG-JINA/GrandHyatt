//주변 즐길거리
const atrContent = document.querySelectorAll('.atr_section .content .cont');
const atrFilter = document.querySelectorAll('.atr_section .filter li');

function offsetTop(el) {
    const rect = el.getBoundingClientRect(); //요소의 위치 정보
    const scr_top = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scr_top; //이 함수는 rect.top+scr_top(offset().top) 값을 반환
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
        const dataName = item.getAttribute('data-name');
        var i = index;

        atrFilter.forEach(function(filterItem, filterIndex) {
            filterItem.classList.toggle('on', filterIndex === i);
        });

        atrContent.forEach(function(atrItem) {
            atrItem.style.display = 'none';
        });
        document.querySelectorAll('.atr_section .content .' + dataName).forEach(function(atrData) {
            atrData.style.display = 'block';
        });
    });
});