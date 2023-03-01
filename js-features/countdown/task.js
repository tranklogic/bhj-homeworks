const timerNode = document.getElementById('timer');
// Приводим стартовый период к секундам:
let time = timerNode.textContent
.split(':')
.reverse()
.reduce((sec, t, i)=>sec + t*Math.pow(60, i), 0)

function tic() {
	time--;
	// Переводим секунды в выходной формат:
	let s = time%60,
	m = ((time - s)%3600)/60,
	h = (time - time%3600)/3600;

	timerNode.textContent =  [h, m, s].map(t=>{
		let f = t.toFixed(0);
		return f.length <2 ? '0' + f : f
	}).join(':');

	if (time <= 0) {
		clearInterval(int);
		alert('Вы победили в конкурсе!');
		window.location.assign('success.zip')
	}
}

let int = setInterval(tic, 1000)