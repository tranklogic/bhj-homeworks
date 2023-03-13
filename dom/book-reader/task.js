/*
Чтобы вешать один обработчик на все контролы
я добавил в вёрстку контролов немного data атрибутов,
по которым вычисляются классы для книги
*/


const book = document.querySelector('.book');

function onControlClick(e) {
	e.preventDefault();
	const target = e.target,
	control = target.closest('.book__control');
	const { prefix, key, active } = control.dataset;
	const current = control.querySelector('.' + active);
	if (target === current || !target.hasAttribute('href')) {
		return false
	}
// Вычисляем текущий и целевой классы по атрибутам контрола
	const currentClass = current.hasAttribute('data-' + key) ? prefix + current.getAttribute('data-' + key) : '',
	targetClass = target.hasAttribute('data-' + key) ? prefix + target.getAttribute('data-' + key) : '';

// меняем класс контрола на книге
	currentClass && book.classList.remove(currentClass);
	targetClass && book.classList.add(targetClass);
const {fontSize, color, backgroundColor} = getComputedStyle(book);
console.log([fontSize, color, backgroundColor].join());
// меняем класс активности на контролах
	current.classList.remove(active);
	target.classList.add(active);
}

document.querySelector('.book__controls')
.addEventListener('click', onControlClick);
