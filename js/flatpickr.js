// 예약
var checkIn = flatpickr(document.querySelector('.start_date'), {
	'monthSelectorType' : 'static',
	"locale": "ko" 
});
var checkOut = flatpickr(document.querySelector('.end_date'), {
	'monthSelectorType' : 'static',
	"locale": "ko" 
});