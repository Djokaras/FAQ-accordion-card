'use strict';

const arrow = document.querySelectorAll(`.icon`);
const card = document.querySelectorAll(`.card`);

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener(`click`, function () {
		card[i].classList.toggle(`active`);
	});
}
