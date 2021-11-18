'use strict';

const arrow = document.querySelectorAll(`.icon`);
const card = document.querySelectorAll(`.card`);
const acc = document.querySelector(`.accordion`);

for (let i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener(`click`, function () {
		for (let l = 0; l < card.length; l++) {
			if (card[l].classList.contains(`active`)) {
				card[l].classList.remove(`active`);
			}
		}
		card[i].classList.add(`active`);
	});
}
