function openModal(id) {
	document.getElementById(id).classList.add('modal_active');
}

function closeModal() {
	document.querySelector('.modal_active').classList.remove('modal_active')
}

document.querySelectorAll('.modal__close')
.forEach(el=>el.addEventListener('click', closeModal));

document.querySelector('.show-success')
.addEventListener('click', ()=>openModal('modal_success'))

openModal('modal_main');