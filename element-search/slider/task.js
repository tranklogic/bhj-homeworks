const items = document.querySelectorAll('.slider__item'),
dots = document.querySelectorAll('.slider__dot');

let current = 0;

function show(index) {
	if (index < 0) {
		index = items.length - 1
	} else if (index >= items.length) {
		index = 0
	}

	if (current  !== index) {
		items[current].classList.remove('slider__item_active');
		items[index].classList.add('slider__item_active');
		dots[current].classList.remove('slider__dot_active');
		dots[index].classList.add('slider__dot_active');

		current = index;
	}
}

document.querySelector('.slider__arrow_prev').addEventListener('click', ()=>show(current - 1));
document.querySelector('.slider__arrow_next').addEventListener('click', ()=>show(current + 1));

// Дополнительное задание:
document.querySelectorAll('.slider__dot')
.forEach((el, i)=>el.addEventListener('click', show.bind(null, i)));

/*
Кое-что для скринридера. Просто я незрячий
*/
document.querySelectorAll('.slider__image')
.forEach((el, i)=>el.setAttribute('alt', 'slide ' + i));

document.querySelectorAll('.slider__dot')
.forEach((el, i)=>el.setAttribute('title', 'slide ' + i));