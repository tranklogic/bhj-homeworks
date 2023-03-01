const dead = document.getElementById('dead'),
lost = document.getElementById('lost');

document.querySelectorAll('.hole-game .hole').forEach(el=>el.addEventListener('click', onClick));

function onClick(e) {
	if (e.target.classList.contains( 'hole_has-mole' )) {
		let count = parseInt(dead.textContent) +1;
		dead.textContent = count;
		count === 10 && stop(true)
	} else {
		let count = parseInt(lost.textContent) +1;
		lost.textContent = count;
		count === 5 && stop(false)
	}
}

function stop(win) {
	if (win) {
		alert('Победа!')
	} else {
		alert('Поражение!')
	}
	dead.textContent = 0;
	lost.textContent = 0;
}