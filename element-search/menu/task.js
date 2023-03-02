function menuClick(e) {
	const subMenu = e.target.closest('.menu__item')
	.querySelector('.menu_sub');
	if (subMenu) {
		e.preventDefault();
		const active = document.querySelector('.menu_active');
		active && active !== subMenu && active.classList.remove('menu_active');
		subMenu.classList.toggle('menu_active');
	}
}

document.querySelectorAll('.menu__link')
.forEach(el=>el.addEventListener('click', menuClick));
