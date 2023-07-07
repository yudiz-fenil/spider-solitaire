
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_win_cards
		const container_win_cards = this.add.container(0, 0);
		container_win_cards.visible = false;

		// container_bg
		const container_bg = this.add.container(0, 1);

		// card_base
		const card_base = this.add.image(107, 153, "card_base-2");
		card_base.scaleX = 0.45;
		card_base.scaleY = 0.45;
		container_bg.add(card_base);

		// collect_cards
		const collect_cards = this.add.image(107, 153, "back_red_0");
		collect_cards.scaleX = 0.45;
		collect_cards.scaleY = 0.45;
		container_bg.add(collect_cards);

		// text_1
		const text_1 = this.add.text(293, 103, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.text = "Spider Solitaire";
		text_1.setStyle({ "fontFamily": "Verdana", "fontSize": "20px", "fontStyle": "bold", "stroke": "#000", "strokeThickness": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bg.add(text_1);

		// text
		const text = this.add.text(293, 143, "", {});
		text.setOrigin(0.5, 0);
		text.text = "One Suit";
		text.setStyle({ "fontFamily": "Verdana", "fontSize": "20px", "fontStyle": "bold", "stroke": "#000", "strokeThickness": 2 });
		container_bg.add(text);

		// btn_play_again
		const btn_play_again = this.add.image(293, 235, "button");
		btn_play_again.scaleX = 0.5;
		btn_play_again.scaleY = 0.5;
		container_bg.add(btn_play_again);

		// text_2
		const text_2 = this.add.text(293, 228, "", {});
		text_2.setOrigin(0.5, 0);
		text_2.text = "Play Again";
		text_2.setStyle({ "fontFamily": "Verdana" });
		container_bg.add(text_2);

		// logo
		const logo = this.add.image(293, 57, "logo");
		logo.scaleX = 0.5;
		logo.scaleY = 0.5;
		container_bg.add(logo);

		// txt_time
		const txt_time = this.add.text(293, 178, "", {});
		txt_time.setOrigin(0.5, 0);
		txt_time.text = "00:00";
		txt_time.setStyle({ "fontFamily": "Verdana", "fontSize": "20px", "fontStyle": "bold", "stroke": "#000", "strokeThickness": 2 });
		container_bg.add(txt_time);

		// container_base_cards
		const container_base_cards = this.add.container(0, -2);

		// baseCard_7
		const baseCard_7 = new BaseCard(this, 1817, 156);
		container_base_cards.add(baseCard_7);

		// baseCard_6
		const baseCard_6 = new BaseCard(this, 1627, 154);
		container_base_cards.add(baseCard_6);

		// baseCard_5
		const baseCard_5 = new BaseCard(this, 1437, 155);
		container_base_cards.add(baseCard_5);

		// baseCard_4
		const baseCard_4 = new BaseCard(this, 1247, 153);
		container_base_cards.add(baseCard_4);

		// baseCard_3
		const baseCard_3 = new BaseCard(this, 1057, 153);
		container_base_cards.add(baseCard_3);

		// baseCard_2
		const baseCard_2 = new BaseCard(this, 867, 151);
		container_base_cards.add(baseCard_2);

		// baseCard_1
		const baseCard_1 = new BaseCard(this, 677, 153);
		container_base_cards.add(baseCard_1);

		// baseCard_0
		const baseCard_0 = new BaseCard(this, 487, 152);
		container_base_cards.add(baseCard_0);

		// container_bg_cards
		const container_bg_cards = this.add.container(0, 1);

		// card_base_0
		const card_base_0 = this.add.image(107, 414, "card_base-2");
		card_base_0.scaleX = 0.45;
		card_base_0.scaleY = 0.45;
		container_bg_cards.add(card_base_0);

		// card_base_1
		const card_base_1 = this.add.image(297, 414, "card_base-2");
		card_base_1.scaleX = 0.45;
		card_base_1.scaleY = 0.45;
		container_bg_cards.add(card_base_1);

		// card_base_2
		const card_base_2 = this.add.image(487, 414, "card_base-2");
		card_base_2.scaleX = 0.45;
		card_base_2.scaleY = 0.45;
		container_bg_cards.add(card_base_2);

		// card_base_3
		const card_base_3 = this.add.image(677, 414, "card_base-2");
		card_base_3.scaleX = 0.45;
		card_base_3.scaleY = 0.45;
		container_bg_cards.add(card_base_3);

		// card_base_4
		const card_base_4 = this.add.image(867, 414, "card_base-2");
		card_base_4.scaleX = 0.45;
		card_base_4.scaleY = 0.45;
		container_bg_cards.add(card_base_4);

		// card_base_5
		const card_base_5 = this.add.image(1057, 414, "card_base-2");
		card_base_5.scaleX = 0.45;
		card_base_5.scaleY = 0.45;
		container_bg_cards.add(card_base_5);

		// card_base_6
		const card_base_6 = this.add.image(1247, 414, "card_base-2");
		card_base_6.scaleX = 0.45;
		card_base_6.scaleY = 0.45;
		container_bg_cards.add(card_base_6);

		// card_base_7
		const card_base_7 = this.add.image(1437, 414, "card_base-2");
		card_base_7.scaleX = 0.45;
		card_base_7.scaleY = 0.45;
		container_bg_cards.add(card_base_7);

		// card_base_8
		const card_base_8 = this.add.image(1627, 414, "card_base-2");
		card_base_8.scaleX = 0.45;
		card_base_8.scaleY = 0.45;
		container_bg_cards.add(card_base_8);

		// card_base_9
		const card_base_9 = this.add.image(1817, 414, "card_base-2");
		card_base_9.scaleX = 0.45;
		card_base_9.scaleY = 0.45;
		container_bg_cards.add(card_base_9);

		// container_cards_main
		const container_cards_main = this.add.container(0, 0);

		// container_cards_0
		const container_cards_0 = this.add.container(0, 0);
		container_cards_0.name = "container_cards_0";
		container_cards_main.add(container_cards_0);

		// container_cards_1
		const container_cards_1 = this.add.container(0, 0);
		container_cards_1.name = "container_cards_1";
		container_cards_main.add(container_cards_1);

		// container_cards_2
		const container_cards_2 = this.add.container(0, 0);
		container_cards_2.name = "container_cards_2";
		container_cards_main.add(container_cards_2);

		// container_cards_3
		const container_cards_3 = this.add.container(0, 0);
		container_cards_3.name = "container_cards_3";
		container_cards_main.add(container_cards_3);

		// container_cards_4
		const container_cards_4 = this.add.container(0, 0);
		container_cards_4.name = "container_cards_4";
		container_cards_main.add(container_cards_4);

		// container_cards_5
		const container_cards_5 = this.add.container(0, 0);
		container_cards_5.name = "container_cards_5";
		container_cards_main.add(container_cards_5);

		// container_cards_6
		const container_cards_6 = this.add.container(0, 0);
		container_cards_6.name = "container_cards_6";
		container_cards_main.add(container_cards_6);

		// container_cards_7
		const container_cards_7 = this.add.container(0, 0);
		container_cards_7.name = "container_cards_7";
		container_cards_main.add(container_cards_7);

		// container_cards_8
		const container_cards_8 = this.add.container(0, 0);
		container_cards_8.name = "container_cards_8";
		container_cards_main.add(container_cards_8);

		// container_cards_9
		const container_cards_9 = this.add.container(0, 0);
		container_cards_9.name = "container_cards_9";
		container_cards_main.add(container_cards_9);

		// container_top
		const container_top = this.add.container(0, 0);

		// container_toast
		const container_toast = this.add.container(10, 1000);
		container_toast.visible = false;

		// bg_toast
		const bg_toast = this.add.rectangle(0, 0, 500, 50);
		bg_toast.setOrigin(0, 0);
		bg_toast.isFilled = true;
		bg_toast.fillAlpha = 0.2;
		container_toast.add(bg_toast);

		// txt_toast
		const txt_toast = this.add.text(10, 25, "", {});
		txt_toast.setOrigin(0, 0.5);
		txt_toast.text = "New text";
		txt_toast.setStyle({ "fontFamily": "Verdana" });
		container_toast.add(txt_toast);

		this.container_win_cards = container_win_cards;
		this.collect_cards = collect_cards;
		this.btn_play_again = btn_play_again;
		this.txt_time = txt_time;
		this.container_base_cards = container_base_cards;
		this.container_cards_main = container_cards_main;
		this.container_top = container_top;
		this.container_toast = container_toast;
		this.bg_toast = bg_toast;
		this.txt_toast = txt_toast;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_win_cards;
	/** @type {Phaser.GameObjects.Image} */
	collect_cards;
	/** @type {Phaser.GameObjects.Image} */
	btn_play_again;
	/** @type {Phaser.GameObjects.Text} */
	txt_time;
	/** @type {Phaser.GameObjects.Container} */
	container_base_cards;
	/** @type {Phaser.GameObjects.Container} */
	container_cards_main;
	/** @type {Phaser.GameObjects.Container} */
	container_top;
	/** @type {Phaser.GameObjects.Container} */
	container_toast;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_toast;
	/** @type {Phaser.GameObjects.Text} */
	txt_toast;

	/* START-USER-CODE */

	// Write more your code here
	showToast = (msg) => {
		this.txt_toast.setText(msg);
		this.bg_toast.width = this.txt_toast.width + 20;
		this.container_toast.setVisible(true);
		setTimeout(() => {
			this.container_toast.setVisible(false);
		}, 2000);
	}
	addDefaultCards = () => {
		const cardContainer = this.container_cards_main.list
		for (let i = 0; i < cardContainer.length; i++) {
			let cards = 5;
			if (i > 3) cards = 4
			for (let j = 0; j < cards; j++) {
				const card = new Card(this, 107 + (190 * i), 415 + (45 * j));
				card.setCard("back_red_0");
				card.setName("back_red_0");
				cardContainer[i].add(card);
				this.aArray.push(card)
			}
		}
		for (let i = 0; i < cardContainer.length; i++) {
			let card = 5;
			if (i > 3) card = 4
			for (let j = card; j < card + 1; j++) {
				const cardName = "spade_" + this.oGameManager.getRandomCard(this.aTotalCards);
				const card = new Card(this, 107 + (190 * i), 415 + (45 * j));
				card.setCard(cardName);
				card.setName(cardName);
				card.setSize(180, 260);
				card.setInteractive({ draggable: true });
				cardContainer[i].add(card);
				this.aArray.push(card)
			}
		}
	}
	isSequence(array) {
		if (array.length <= 1) {
			return true;
		}
		for (let i = 1; i < array.length; i++) {
			if (array[i] - array[i - 1] !== -1) {
				return false;
			}
		}
		return true;
	}
	isWinSequence(array) {
		if (array.length == 13) {
			for (let i = 1; i < array.length; i++) {
				if (array[i] - array[i - 1] !== 1) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}
	create() {
		this.oGameManager = new GameManager(this);
		this.aTotalCards = this.oGameManager.aTotalCards;
		this.editorCreate();
		this.aArray = []
		this.nGameTime = 0;
		this.nGameInteraval = setInterval(() => {
			this.nGameTime++;
			const minutes = Math.floor(this.nGameTime / 60);
			const seconds = this.nGameTime % 60;
			this.txt_time.setText(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
		}, 1000);
		this.oToasts = {
			emptypiles: "Cannot dealt from stock: All piles need at least one card for stock to be delt.",
			drop: "Cannot drop: Your card need to be one rank down.",
		}
		this.addDefaultCards();
		this.nCollectCounter = 0;
		this.nTotalSequence = -1;
		this.lastContainer = null;
		this.isCardDragging = false;
		this.isCardDraggable = false;
		this.dragGroup = this.add.group();

		this.input.on('dragstart', (pointer, gameObject, dragX, dragY) => {
			console.log("Drag Start")
			this.lastContainer = gameObject.parentContainer
			const cardIndex = gameObject.parentContainer.list.indexOf(gameObject);
			const containerLength = gameObject.parentContainer.list.length;
			const aSequence = [];
			let aCards = [];
			if (cardIndex != containerLength - 1) {
				for (let i = cardIndex; i < containerLength; i++) {
					aSequence.push(parseInt(this.lastContainer.list[i].name.match(/\d+/)[0]));
					aCards.push(this.lastContainer.list[i]);
				}
				if (this.isSequence(aSequence)) {
					aCards.forEach((card) => this.container_top.add(card))
					this.isCardDraggable = true;
				} else {
					aCards = [];
				}
			} else {
				aCards.push(gameObject);
				this.container_top.add(gameObject);
				this.isCardDraggable = true;
			}
		});
		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			if (this.isCardDraggable) {
				gameObject.parentContainer.list.forEach((card, i) => this.moveCard(card, dragX, dragY + (i * 45)))
			}
		});
		this.input.on('dragend', (pointer, gameObject) => {
			if (this.isCardDragging) {
				this.isCardDragging = false;
				this.isCardDraggable = false;
				this.checkContainer(pointer.x);
			} else {
				gameObject.parentContainer.each((card) => this.lastContainer.add(card));
			}
		});
		this.collect_cards.setInteractive().on('pointerdown', () => {
			if (this.collectCards()) {
				this.nCollectCounter++
				if (this.nCollectCounter == 5) this.collect_cards.setVisible(false);
			}
		})
		this.btn_play_again.setInteractive().on('pointerdown', () => {
			clearInterval(this.nGameInteraval);
			this.scene.restart();
		});
	}
	moveCard(gameObject, x, y) {
		this.isCardDragging = true;
		gameObject.x = x;
		gameObject.y = y;
	}
	checkContainer = (x) => {
		switch (true) {
			case (x >= 0 && x < 195):
				this.checkLastCard(this.container_cards_main.list[0], 0);
				break;
			case (x >= 195 && x < 390):
				this.checkLastCard(this.container_cards_main.list[1], 1);
				break;
			case (x >= 390 && x < 585):
				this.checkLastCard(this.container_cards_main.list[2], 2);
				break;
			case (x >= 585 && x < 780):
				this.checkLastCard(this.container_cards_main.list[3], 3);
				break;
			case (x >= 780 && x < 975):
				this.checkLastCard(this.container_cards_main.list[4], 4);
				break;
			case (x >= 975 && x < 1170):
				this.checkLastCard(this.container_cards_main.list[5], 5);
				break;
			case (x >= 1170 && x < 1365):
				this.checkLastCard(this.container_cards_main.list[6], 6);
				break;
			case (x >= 1365 && x < 1560):
				this.checkLastCard(this.container_cards_main.list[7], 7);
				break;
			case (x >= 1560 && x < 1755):
				this.checkLastCard(this.container_cards_main.list[8], 8);
				break;
			case (x >= 1755 && x < 1950):
				this.checkLastCard(this.container_cards_main.list[9], 9);
				break;
			default:
				this.checkLastCard(this.container_cards_main.list[0], 0);
				break;
		}
	}
	checkLastCard = (container, index) => {
		if (container.length) {
			const lastCard = parseInt(container.list[container.list.length - 1].name.match(/\d+/)[0]);
			const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
			if (dragCardNumber === lastCard - 1) {
				this.container_top.each(card => container.add(card));
				this.arrangeCards(container, index);
				this.openLastCard(this.lastContainer);
			} else {
				this.container_top.each(card => this.lastContainer.add(card))
				this.showToast(this.oToasts.drop);
				this.arrangeCards(this.lastContainer, parseInt(this.lastContainer.name.match(/\d+/)[0]));
			}
		} else {
			this.container_top.each(card => container.add(card))
			this.arrangeCards(container, index);
			this.openLastCard(this.lastContainer);
		}
	}
	arrangeCards = (container, index) => {
		let gap = 45;
		if (container.list.length > 14) gap = 40;
		if (container.list.length >= 18) gap = 35;
		container.list.forEach((card, i) => {
			card.x = 107 + (190 * index);
			card.y = 415 + (gap * i);
		});
		if (container.length >= 13) {
			const aCards = container.list
			const aSequence = []
			for (let i = aCards.length - 1; i > aCards.length - 14; i--) {
				const card = aCards[i];
				if (card.name.includes("spade")) {
					aSequence.push(parseInt(card.name.match(/\d+/)[0]));
				}
			}
			if (aSequence.length == 13) {
				if (this.isWinSequence(aSequence)) {
					this.nTotalSequence++;
					this.container_base_cards.list[this.nTotalSequence].setWinCard();
					const length = container.list.length;
					for (let i = length - 1; i >= length - 13; i--) {
						container.list[i].setPosition(0, 0);
						this.container_win_cards.add(container.list[i]);
					}
					this.openLastCard(container);
					if (this.nTotalSequence == 7) this.fireWorks();
				}
			}
		}
	}
	openLastCard = (container) => {
		if (container.length) {
			const card = container.list[container.list.length - 1];
			if (card.name == "back_red_0") {
				const cardName = this.oGameManager.getRandomCard(this.aTotalCards);
				const card = container.list[container.list.length - 1];
				card.setCard("spade_" + cardName);
				card.setName("spade_" + cardName);
				card.setSize(180, 260);
				card.setInteractive({ draggable: true });
			}
		}
	}
	collectCards = () => {
		let gap = 45;
		const cardContainerList = this.container_cards_main.list
		for (let i = 0; i < cardContainerList.length; i++) {
			const cardContainer = cardContainerList[i].list
			if (cardContainer.length == 0) {
				this.showToast(this.oToasts.emptypiles);
				return false;
			}
		}
		for (let i = 0; i < cardContainerList.length; i++) {
			const cardContainer = cardContainerList[i].list
			const y = cardContainer[cardContainer.length - 1].y;
			const cardName = "spade_" + this.oGameManager.getRandomCard(this.aTotalCards);
			const card = new Card(this, 107 + (190 * i), y + gap);
			card.setCard(cardName);
			card.setName(cardName);
			card.setSize(180, 260);
			card.setInteractive({ draggable: true });
			cardContainerList[i].add(card);
		}
		return true;
	}
	fireWorks = () => {
		clearInterval(this.nGameInteraval);
		const duration = 5 * 1000,
			animationEnd = Date.now() + duration,
			defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}
		const interval = setInterval(function () {
			const timeLeft = animationEnd - Date.now();
			if (timeLeft <= 0) {
				return clearInterval(interval);
			}
			const particleCount = 50 * (timeLeft / duration);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
				})
			);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
				})
			);
		}, 250);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
