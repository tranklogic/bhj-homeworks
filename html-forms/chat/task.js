class Bot {
	constructor(chat, answers) {
		this.chat = chat;
		this.answers = answers;
	}

	getAnswer() {
		const index = Math.floor(Math.random() * this.answers.length);
		return this.answers[index]
	}

	onMessage(message) {
		const answer = {},
		text = message.text.toLowerCase();
		if (text.includes('добр')) {
			answer.text = 'А тебе я добра не желаю. Выпей яду!'
		} else if (text.includes('здрав')) {
			answer.text = 'Здоровей видали. Чё нада?'
		} else {
			answer.text = this.getAnswer()
		}
		this.chat.add(answer)
	}
}


class Chat {
	constructor() {
		this.container = document.querySelector('.chat-widget');
		this.messages = this.container.querySelector('#chat-widget__messages');
		this.input = this.container.querySelector('#chat-widget__input');

		this.container.querySelector('.chat-widget__side')
		.addEventListener('click', e=>{
			this.container.classList.add('chat-widget_active');
		});

		this.input.addEventListener('keyup', e=>{
			e.key === 'Enter'
			&& e.target.value
			&& this.add({
				client: true,
				text: e.target.value
			});
		});

		this.bot = new Bot(this, [
			'Как вы мне все надоели!',
			'Работа не волк - в лес не убежит',
			'Расслабься: от работы кони дохнут',
			'Крабы достали',
			'С ракообразными не разговариваю',
		])
	}

	add(message) {
		const item = document.createElement('div');
		item.classList.add('message');
		message.client && item.classList.add('message_client');
		item.innerHTML = this.createMessageHTML(message)
		this.messages.append(item)

		message.client && this.bot.onMessage(message)
	}

	createMessageHTML(message) {
		const date = new Date();
		const hours = date.getHours(),
		minutes = date.getMinutes();
		return `
			<div class="message__time">${hours}:${minutes}</div>
			<div class="message__text">${message.text || ''}</div>
		`
	}
}


new Chat();
