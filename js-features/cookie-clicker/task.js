const counter = document.getElementById('clicker__counter'),
rate = document.getElementById('clicker__rate'),
cookie = document.getElementById('cookie');
let clickTime = Date.now();

cookie.addEventListener('click', e=>{
	let count = parseInt(counter.textContent) +1;
	counter.textContent = count;
	rate.textContent = (1000/(Date.now() - clickTime)).toFixed(2);
	clickTime = Date.now();
	e.target.width = count%2 ? 250 : 200;
})