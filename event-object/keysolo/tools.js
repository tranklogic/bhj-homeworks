class Timer {
  constructor(container, callback) {
    this.container = document.querySelector(container || "#timer");
    this.callback = callback || function () {};
    this.render("∞");
  }

  start(time, callback) {
    this.timerId && this.stop();
    this.currentTime = time || 0;
    this.render();
    this.timerId = setInterval(() => this.tic(callback), 1000);
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
    this.render("∞");
  }

  tic(callback) {
    this.currentTime--;
    this.render();
    typeof callback === "function" && callback();
    if (this.currentTime <= 0) {
      this.stop();
      this.callback();
    }
  }
  render(time) {
    time = time || this.currentTime || "∞";
    this.container ? (this.container.textContent = time) : console.log(time);
  }
}

class Rating {
  constructor(options) {
    this.options = options || {};
    this.items = [];
    this.container = document.querySelector(this.options.container || "#rate");
  }

  render(format) {
    let rate = !format ? this.rate : (this.rate * 60).toFixed(0);
    this.container ? (this.container.textContent = rate) : console.log(rate);
  }

  add(item) {
    this.items.push(item);
  }

  get time() {
    return this.items.reduce((time, item) => {
      return (time += item.time);
    }, 0);
  }

  get count() {
    return this.items.reduce((count, item) => {
      return (count += item.count);
    }, 0);
  }

  get rate() {
    return this.items.length ? ((1000 * this.count) / this.time).toFixed(2) : 0;
  }
}
class Counter {
  constructor(name) {
    this.name = name;
    this.start = Date.now();
    this.count = 0;
  }

  fix(result) {
    this.stop = Date.now();
    this.result = result || "-";
  }

  get time() {
    return this.stop ? this.stop - this.start : 0;
  }

  get rate() {
    return this.stop ? ((1000 * this.count) / this.time).toFixed(2) : 0;
  }
}

const letters = {
"en-ru": {
  "`": "Ё",
  Q: "Й",
  W: "Ц",
  E: "У",
  R: "К",
  T: "Е",
  Y: "Н",
  U: "Г",
  I: "Ш",
  O: "Щ",
  P: "З",
  "[": "Х",
  "]": "Ъ",
  A: "Ф",
  S: "Ы",
  D: "В",
  F: "А",
  G: "П",
  H: "Р",
  J: "О",
  K: "Л",
  L: "Д",
  ";": "Ж",
  "'": "Э",
  Z: "Я",
  X: "Ч",
  C: "С",
  V: "М",
  B: "И",
  N: "Т",
  M: "Ь",
  ",": "Б",
  ".": "Ю"
},
 "ru-en": {
  Ё: "`",
  Й: "Q",
  Ц: "W",
  У: "E",
  К: "R",
  Е: "T",
  Н: "Y",
  Г: "U",
  Ш: "I",
  Щ: "O",
  З: "P",
  Х: "[",
  Ъ: "]",
  Ф: "A",
  Ы: "S",
  В: "D",
  А: "F",
  П: "G",
  Р: "H",
  О: "J",
  Л: "K",
  Д: "L",
  Ж: ";",
  Э: "'",
  Я: "Z",
  Ч: "X",
  С: "C",
  М: "V",
  И: "B",
  Т: "N",
  Ь: "M",
  Б: ",",
  Ю: "."
 }
};
