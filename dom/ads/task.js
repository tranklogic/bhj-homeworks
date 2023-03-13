function runrotator(container) {
	const items = Array.from(container.querySelectorAll('.rotator__case'));

	items.forEach(el=>{el.style.color = el.dataset.color});

	function getNext(el) {
		const next = items.indexOf(el) + 1;
		return next >= items.length ? items[0] : items[next]
	}

	function showCase(el) {
		container.style.color = el.dataset.color || 'inherit';
		el.classList.add('rotator__case_active');
		setTimeout(()=>{
			el.classList.remove('rotator__case_active')
			showCase(getNext(el));
		}, el.dataset.speed || 1000)
	}

	showCase(container.querySelector('.rotator__case_active') || items[0])
}

function runrotation(selector) {
	document.querySelectorAll(selector)
	.forEach(runrotator)
}

runrotation('.rotator');