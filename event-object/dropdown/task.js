function onMenuClick(e) {
	e.preventDefault();
	const menu = e.target.closest('.dropdown');
	if (e.target.classList.contains('dropdown__link')) {
		menu.querySelector('.dropdown__value').textContent = e.target.textContent;
	}
	menu.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
}

document.querySelector('.dropdown').addEventListener('click', onMenuClick);