// Дописал функцию из конспекта
function isInViewport(el){
const viewportHeight = window.innerHeight;
const { top, bottom } = el.getBoundingClientRect();

return top < viewportHeight && bottom > 0
};

const reveal = document.querySelector('.reveal');
window.addEventListener('scroll', e=>{
	isInViewport(reveal) ?
	reveal.classList.add('reveal_active') :
	reveal.classList.remove('reveal_active')
})