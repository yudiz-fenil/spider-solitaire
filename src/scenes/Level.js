
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

		// container_bg
		const container_bg = this.add.container(0, 1);

		// collect_cards
		const collect_cards = this.add.image(107, 153, "back_red_0");
		collect_cards.scaleX = 0.45;
		collect_cards.scaleY = 0.45;
		container_bg.add(collect_cards);

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
		const card_base_2 = this.add.image(491, 414, "card_base-2");
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

		this.container_win_cards = container_win_cards;
		this.collect_cards = collect_cards;
		this.container_base_cards = container_base_cards;
		this.container_cards_main = container_cards_main;
		this.container_top = container_top;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_win_cards;
	/** @type {Phaser.GameObjects.Image} */
	collect_cards;
	/** @type {Phaser.GameObjects.Container} */
	container_base_cards;
	/** @type {Phaser.GameObjects.Container} */
	container_cards_main;
	/** @type {Phaser.GameObjects.Container} */
	container_top;

	/* START-USER-CODE */

	// Write more your code here
	addDefaultCards = () => {
		const card = new Card(this, 100, 100).setCard("back_red");
		for (let i = 0; i < this.container_cards_main.list.length; i++) {
			const cardContainer = this.container_cards_main.list
			for (let j = 0; j < 5; j++) {
				const cardName = (() => {
					return j == 4 ? "spade_" + this.oGameManager.getRandomCard(this.aTotalCards) : "back_red_0";
				})()
				const cardBody = (() => {
					return j == 4 ? "openCard" : "closeCard";
				})()
				const card = new Card(this, 107 + (190 * i), 415 + (50 * j));
				card.setDepth(0);
				card.setCard(cardName);
				card.setName(cardName);
				card.body = cardBody;
				if (cardName != "back_red_0") {
					card.setSize(180, 260);
					card.setInteractive({ draggable: true });
				}
				cardContainer[i].add(card);
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
		this.addDefaultCards();
		this.nTotalSequence = -1;
		this.lastContainer = null;
		this.isCardDragging = false;
		this.isCardDraggable = false;
		this.dragGroup = this.add.group();

		this.input.on('dragstart', (pointer, gameObject, dragX, dragY) => {
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
				gameObject.parentContainer.list.forEach((card, i) => this.moveCard(card, dragX, dragY + (i * 50)))
			}
		});
		this.input.on('dragend', (pointer, gameObject) => {
			if (this.isCardDragging) {
				this.isCardDragging = false;
				this.isCardDraggable = false;
				this.checkContainer(pointer.x);
			}
		});
		this.collect_cards.setInteractive().on('pointerdown', () => {
			this.collectCards();
		})
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
				console.log("x is out of range");
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
				this.arrangeCards(this.lastContainer, parseInt(this.lastContainer.name.match(/\d+/)[0]));
			}
		} else {
			this.container_top.each(card => container.add(card))
			this.arrangeCards(container, index);
			this.openLastCard(this.lastContainer);
		}
	}
	arrangeCards = (container, index) => {
		let gap = 50;
		if (container.list.length > 14) gap = 40;
		container.list.forEach((card, i) => {
			card.x = 107 + (190 * index);
			card.y = 415 + (gap * i);
		});
		if (container.length >= 13) {
			const aCards = container.list
			const aSequence = []
			for (let i = aCards.length - 1; i > aCards.length - 14; i--) {
				const card = aCards[i];
				if (card.body == "openCard") {
					aSequence.push(parseInt(card.name.match(/\d+/)[0]));
				}
			}
			if (aSequence.length == 13) {
				if (this.isWinSequence(aSequence)) {
					this.nTotalSequence++;
					this.container_base_cards.list[this.nTotalSequence].setWinCard();
					for (let i = aCards.length - 1; i > aCards.length - 14; i--) {
						const card = aCards[i];
						if (card.body == "openCard") {
							aSequence.push(parseInt(card.name.match(/\d+/)[0]));
						}
					}
					// for (let i = aCards.length - 1; i > aCards.length - 14; i--) {
					// 	const card = aCards[i];
					// 	if (card.body == "openCard") {
					// 		this.container_win_cards.add(card);
					// 		card.setPosition(0, 0);
					// 	}
					// }
					// this.openLastCard(container);
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
				card.body = "openCard";
				card.setSize(180, 260);
				card.setInteractive({ draggable: true });
			}
		}
	}
	collectCards = () => {
		let gap = 50;
		const cardContainerList = this.container_cards_main.list
		for (let i = 0; i < cardContainerList.length; i++) {
			const cardContainer = cardContainerList[i].list
			const y = cardContainer[cardContainer.length - 1].y;
			const cardName = "spade_" + this.oGameManager.getRandomCard(this.aTotalCards);
			const card = new Card(this, 107 + (190 * i), y + gap);
			card.setCard(cardName);
			card.setName(cardName);
			card.setSize(180, 260);
			card.body = "openCard";
			card.setInteractive({ draggable: true });
			cardContainerList[i].add(card);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
