class WordsController extends verbalizer.Controller {
  _init() {
    this.app.root.add(() => this.app.setControl(this), {
      name: "Соло на клавиатуре"
    });
    this.setAction("Enter", this.props.game.toggle);
    this.setAction("Up,Down", () =>
      this.app.echo("cursor", this.props.game.wordElement.textContent)
    );
  }
  _start() {
    this.props.game.unregisterEvents();
  }
  _stop() {
    this.props.game.registerEvents();
  }
  idle(e) {
    this.props.game.check(e);
  }
}

class Game {
  constructor(container) {
    this.title = "Соло на клавиатуре";
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.wordElement.innerHTML = this.title;
    this.winsElement = container.querySelector("#wins");
    this.lossElement = container.querySelector("#loss");
    this.timerCheckbox = container.querySelector("#checkbox-timer");
    this.dictionarySelect = container.querySelector("#select-dictionary");
    this.playButton = container.querySelector("#button-play");

    this.check = this.check.bind(this);
    this.toggle = this.toggle.bind(this);

    this.playButton.addEventListener("click", this.toggle);
    this.reportElement = document.querySelector(".report");
    this.reportElement
      .querySelector(".dialog-close")
      .addEventListener("click", () => {
        this.reportElement.close();
      });

    this.vb = document.querySelector("web-verbalizer");
    this.vb.controller = new WordsController({
      app: this.vb,
      game: this
    });
    this.settings = {
      game: this,
      winCondition: 10,
      loseCondition: 5,
      get timer() {
        return this.game.timerCheckbox.checked;
      },
      get dictionary() {
        return this.game.dictionarySelect.value;
      }
    };
    this.rating = new Rating({ container: "#rate" });
    this.timer = new Timer("#timer", () => this.fail("timeout"));
    this.words = words;

    this.registerEvents();
  }

  get lang() {
    return this.dictionarySelect.value;
  }
  start() {
    this.playButton.setAttribute("data-pressed", true);
    this.playButton.textContent = "Stop";
    this.currentRating = new Rating({ container: "#rate" });
    this.next();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  stop(reason) {
    this.timer.stop();
    this.playButton.removeAttribute("data-pressed");
    this.playButton.textContent = "Start";
    if (reason !== "pause") {
      this.currentRating.render("min");
      this.currentRating.result = reason;
      this.rating.add(this.currentRating);
      this.vb.root.add(this.currentRating, {
        name: "rating" + this.rating.items.length
      });
      this.showResults(this.currentRating);
    }
    this.wordElement.innerHTML = this.title;
  }

  toggle() {
    !this.playButton.dataset.pressed ? this.start() : this.stop("pause");
    return this;
  }

  next() {
    const word = this.getWord();
    this.renderWord(word);
    this.counter = new Counter(word);
    this.settings.timer && this.timer.start(word.length);
    this.currentRating.render("min");
  }

  getWord() {
    const index = Math.floor(Math.random() * this.words.length),
      dict =
        this.settings.dictionary === "auto"
          ? index % 2
            ? "ru"
            : "en"
          : this.settings.dictionary,
      word = this.words[index][dict],
      comma = word.indexOf(","),
      paren = word.indexOf("(");
    let selection = comma < 1 ? word : word.slice(0, comma);
    selection = paren < 1 ? selection : selection.slice(0, paren);

    return selection.trim();
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
    this.vb.echo("cursor", this.wordElement.textContent, 1);
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    this.counter.fix("success");
    this.currentRating.add(this.counter);
    if (++this.winsElement.textContent === this.settings.winCondition) {
      this.stop("win");
    } else {
      verbalizer.soundkit.nota("A6");
      this.vb.echo("status", "Верно " + this.winsElement.textContent);
      this.next();
    }
  }

  fail(reason) {
    verbalizer.soundkit.nota("C4");
    verbalizer.soundkit.nota("A6#");
    this.counter.fix(reason || "fail");
    this.currentRating.add(this.counter);
    if (++this.lossElement.textContent === this.settings.loseCondition) {
      this.stop("lose");
    } else {
      this.vb.echo("status", "Ошибка " + this.lossElement.textContent);
      this.next();
    }
  }

  check(e) {
    if (e.key.length > 1 || !this.playButton.dataset.pressed) {
      return;
    }
    e.stopPropagation();

    if (this.counter.count === 0 && e.type === "command") {
/*
    Если ввод из вербализатора,
    компенсируем время, 
    затраченное на выслушивание слова
*/
      this.counter.start = Date.now();
      this.settings.timer && this.timer.start(this.counter.name.length);
    }
    this.counter.count++;
    let equal = false;
    const input = e.key.toUpperCase(),
      match = this.currentSymbol.textContent.toUpperCase(),
      inputCharCode = input.charCodeAt(0),
      matchCharCode = match.charCodeAt(0);
    if (inputCharCode < 255 && matchCharCode > 255) {
      // ввод латинский, текущий символ - нет
      equal = letters["en-ru"][input] === match;
    } else if (inputCharCode > 255 && matchCharCode < 255) {
      // ввод не латинский, текущий символ латинский
      equal = letters["ru-en"][input] === match;
    } else {
      // раскладка и текст совпадают
      equal = inputCharCode === matchCharCode;
    }

    equal ? this.success() : this.fail();
  }

  showResults(rating) {
    const content = rating.items
      .map((item) => {
        return `
<tr>
<td>${item.name}</td>
<td>${item.name.length}</td>
<td>${item.count}</td>
<td>${(item.time / 1000).toFixed(2)}</td>
<td>${(item.rate * 60).toFixed(0)}</td>
<td>${item.result}</td>
</tr>
`;
      })
      .join("");
    this.reportElement.querySelector(".game-result").innerHTML = `
<table>
<tr>
<th>Слово</th>
<th>Символов</th>
<th>Напечатоно</th>
<th>Время</th>
<th>Скорость</th>
<th>Результат</th>
</tr>
${content}
<tr>
<td>Итого</td>
<td></td>
<td>${rating.count}</td>
<td>${(rating.time / 1000).toFixed(2)}</td>
<td>${(rating.rate * 60).toFixed(0)}</td>
<td>${rating.result}</td>
</tr>
</table>
`;

    this.reportElement.showModal();
  }

  registerEvents() {
    !this.enabled && document.addEventListener("keyup", this.check);
    this.enabled = true;
  }

  unregisterEvents() {
    this.enabled && document.removeEventListener("keyup", this.check);
    this.enabled = false;
  }
}

const game = new Game(document.getElementById("game"));
