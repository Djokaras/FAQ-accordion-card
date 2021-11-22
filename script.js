'use strict';

const topPart = document.querySelectorAll(`.top-part`);
const card = document.querySelectorAll(`.card`);
const acc = document.querySelector(`.accordion`);

for (let i = 0; i < topPart.length; i++) {
	topPart[i].addEventListener(`click`, function () {
		for (let l = 0; l < card.length; l++) {
			if (card[l].classList.contains(`active`)) {
				card[l].classList.remove(`active`);
			}
		}
		card[i].classList.add(`active`);
	});
}
