
// You can write more code here

/* START OF COMPILED CODE */

class Solitaire extends Phaser.Scene {

	constructor() {
		super("Solitaire");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_body
		const container_body = this.add.container(0, 0);

		// text_1
		const text_1 = this.add.text(110, 213, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.alpha = 0.5;
		text_1.alphaTopLeft = 0.5;
		text_1.alphaTopRight = 0.5;
		text_1.alphaBottomLeft = 0.5;
		text_1.alphaBottomRight = 0.5;
		text_1.text = "REDEAL";
		text_1.setStyle({ "color": "#000", "fontFamily": "Verdana", "fontSize": "20px", "fontStyle": "bold", "stroke": "#000", "shadow.stroke": true, "shadow.fill": true });
		container_body.add(text_1);

		// btn_redeal
		const btn_redeal = this.add.image(110, 153, "redeal");
		btn_redeal.scaleX = 0.2;
		btn_redeal.scaleY = 0.2;
		btn_redeal.alpha = 0.5;
		btn_redeal.alphaTopLeft = 0.5;
		btn_redeal.alphaTopRight = 0.5;
		btn_redeal.alphaBottomLeft = 0.5;
		btn_redeal.alphaBottomRight = 0.5;
		container_body.add(btn_redeal);

		// delt_card
		const delt_card = this.add.image(110, 153, "back_red_0");
		delt_card.scaleX = 0.45;
		delt_card.scaleY = 0.45;
		container_body.add(delt_card);

		// delt_base_0
		const delt_base_0 = this.add.image(110, 153, "card_base-2");
		delt_base_0.scaleX = 0.45;
		delt_base_0.scaleY = 0.45;
		container_body.add(delt_base_0);

		// delt_base_1
		const delt_base_1 = this.add.image(310, 153, "card_base-2");
		delt_base_1.scaleX = 0.45;
		delt_base_1.scaleY = 0.45;
		container_body.add(delt_base_1);

		// container_delt_cards_24
		const container_delt_cards_24 = this.add.container(0, 0);
		container_delt_cards_24.name = "container_delt_cards_24";
		container_body.add(container_delt_cards_24);

		// container_base_cards
		const container_base_cards = this.add.container(0, 0);

		// baseCard_0
		const baseCard_0 = new BaseCard(this, 710, 153);
		baseCard_0.name = "baseCard_0";
		container_base_cards.add(baseCard_0);

		// baseCard_1
		const baseCard_1 = new BaseCard(this, 910, 153);
		baseCard_1.name = "baseCard_1";
		container_base_cards.add(baseCard_1);

		// baseCard_2
		const baseCard_2 = new BaseCard(this, 1110, 153);
		baseCard_2.name = "baseCard_2";
		container_base_cards.add(baseCard_2);

		// baseCard_3
		const baseCard_3 = new BaseCard(this, 1310, 153);
		baseCard_3.name = "baseCard_3";
		container_base_cards.add(baseCard_3);

		// container_bg_cards
		const container_bg_cards = this.add.container(0, 0);

		// card_base_0
		const card_base_0 = this.add.image(110, 414, "card_base-2");
		card_base_0.scaleX = 0.45;
		card_base_0.scaleY = 0.45;
		container_bg_cards.add(card_base_0);

		// card_base_1
		const card_base_1 = this.add.image(310, 414, "card_base-2");
		card_base_1.scaleX = 0.45;
		card_base_1.scaleY = 0.45;
		container_bg_cards.add(card_base_1);

		// card_base_2
		const card_base_2 = this.add.image(510, 414, "card_base-2");
		card_base_2.scaleX = 0.45;
		card_base_2.scaleY = 0.45;
		container_bg_cards.add(card_base_2);

		// card_base_3
		const card_base_3 = this.add.image(710, 414, "card_base-2");
		card_base_3.scaleX = 0.45;
		card_base_3.scaleY = 0.45;
		container_bg_cards.add(card_base_3);

		// card_base_4
		const card_base_4 = this.add.image(910, 414, "card_base-2");
		card_base_4.scaleX = 0.45;
		card_base_4.scaleY = 0.45;
		container_bg_cards.add(card_base_4);

		// card_base_5
		const card_base_5 = this.add.image(1110, 414, "card_base-2");
		card_base_5.scaleX = 0.45;
		card_base_5.scaleY = 0.45;
		container_bg_cards.add(card_base_5);

		// card_base_6
		const card_base_6 = this.add.image(1310, 414, "card_base-2");
		card_base_6.scaleX = 0.45;
		card_base_6.scaleY = 0.45;
		container_bg_cards.add(card_base_6);

		// container_pure_sequence
		const container_pure_sequence = this.add.container(0, 0);

		// container_pure_piles_0
		const container_pure_piles_0 = this.add.container(0, 0);
		container_pure_piles_0.name = "container_pure_piles_0";
		container_pure_sequence.add(container_pure_piles_0);

		// container_pure_piles_1
		const container_pure_piles_1 = this.add.container(0, 0);
		container_pure_piles_1.name = "container_pure_piles_1";
		container_pure_sequence.add(container_pure_piles_1);

		// container_pure_piles_2
		const container_pure_piles_2 = this.add.container(0, 0);
		container_pure_piles_2.name = "container_pure_piles_2";
		container_pure_sequence.add(container_pure_piles_2);

		// container_pure_piles_3
		const container_pure_piles_3 = this.add.container(0, 0);
		container_pure_piles_3.name = "container_pure_piles_3";
		container_pure_sequence.add(container_pure_piles_3);

		// container_piles_main
		const container_piles_main = this.add.container(0, 0);

		// container_piles_0
		const container_piles_0 = this.add.container(0, 0);
		container_piles_0.name = "container_piles_0";
		container_piles_main.add(container_piles_0);

		// container_piles_1
		const container_piles_1 = this.add.container(0, 0);
		container_piles_1.name = "container_piles_1";
		container_piles_main.add(container_piles_1);

		// container_piles_2
		const container_piles_2 = this.add.container(0, 0);
		container_piles_2.name = "container_piles_2";
		container_piles_main.add(container_piles_2);

		// container_piles_3
		const container_piles_3 = this.add.container(0, 0);
		container_piles_3.name = "container_piles_3";
		container_piles_main.add(container_piles_3);

		// container_piles_4
		const container_piles_4 = this.add.container(0, 0);
		container_piles_4.name = "container_piles_4";
		container_piles_main.add(container_piles_4);

		// container_piles_5
		const container_piles_5 = this.add.container(0, 0);
		container_piles_5.name = "container_piles_5";
		container_piles_main.add(container_piles_5);

		// container_piles_6
		const container_piles_6 = this.add.container(0, 0);
		container_piles_6.name = "container_piles_6";
		container_piles_main.add(container_piles_6);

		// container_top
		const container_top = this.add.container(0, 0);

		this.btn_redeal = btn_redeal;
		this.delt_card = delt_card;
		this.container_delt_cards_24 = container_delt_cards_24;
		this.baseCard_3 = baseCard_3;
		this.container_pure_sequence = container_pure_sequence;
		this.container_piles_main = container_piles_main;
		this.container_top = container_top;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_redeal;
	/** @type {Phaser.GameObjects.Image} */
	delt_card;
	/** @type {Phaser.GameObjects.Container} */
	container_delt_cards_24;
	/** @type {BaseCard} */
	baseCard_3;
	/** @type {Phaser.GameObjects.Container} */
	container_pure_sequence;
	/** @type {Phaser.GameObjects.Container} */
	container_piles_main;
	/** @type {Phaser.GameObjects.Container} */
	container_top;

	/* START-USER-CODE */

	// Write your code here
	addDefaultCards = () => {
		const cardContainer = this.container_piles_main.list
		for (let i = 0; i <= 6; i++) {
			for (let j = 0; j <= i; j++) {
				const cardName = i == j ? this.oGameManager.getRandomCard(this.aTotalCards) : "back_red_0";
				const card = new Card(this, 110 + (200 * i), 414 + (45 * j));
				card.setCard(cardName);
				card.setName(cardName);
				card.setSize(180, 260);
				if (cardName != "back_red_0") card.setInteractive({ draggable: true });
				cardContainer[i].add(card);
			}
		}
	}
	addDeltCards = () => {
		for (let i = 1; i <= 24; i++) {
			this.aDeltCards.push(this.oGameManager.getRandomCard(this.aTotalCards));
		}
	}
	isReverseSequence(array) {
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
	create() {
		document.title = "Solitaire";
		this.oGameManager = new GameManager(this);
		this.editorCreate();
		this.aTotalCards = this.oGameManager.aSolitaireCards;
		this.aDeltCards = [];
		this.aDeltedCards = [];
		this.addDefaultCards();
		this.addDeltCards();
		this.nTotalSequence = -1;
		this.lastContainer = null;
		this.isCardDragging = false;
		this.isCardDraggable = false;
		// this.nGameTime = 0;
		// this.nGameInteraval = setInterval(() => {
		// 	this.nGameTime++;
		// 	const minutes = Math.floor(this.nGameTime / 60);
		// 	const seconds = this.nGameTime % 60;
		// 	this.txt_time.setText(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
		// }, 1000);

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
				if (this.isReverseSequence(aSequence)) {
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
				this.checkContainer(pointer.x, pointer.y);
			} else {
				gameObject.parentContainer.each((card) => this.lastContainer.add(card));
			}
		});
		this.delt_card.setInteractive().on('pointerdown', () => this.deltCard());
		this.btn_redeal.setInteractive().on('pointerdown', () => this.reDealCards());
	}
	moveCard(gameObject, x, y) {
		this.isCardDragging = true;
		gameObject.x = x;
		gameObject.y = y;
	}
	checkContainer = (x, y) => {
		if (y > 280) {
			switch (true) {
				case (x >= 0 && x < 200):
					this.checkLastCard(this.container_piles_main.list[0], 0);
					break;
				case (x >= 200 && x < 400):
					this.checkLastCard(this.container_piles_main.list[1], 1);
					break;
				case (x >= 400 && x < 600):
					this.checkLastCard(this.container_piles_main.list[2], 2);
					break;
				case (x >= 600 && x < 800):
					this.checkLastCard(this.container_piles_main.list[3], 3);
					break;
				case (x >= 800 && x < 1000):
					this.checkLastCard(this.container_piles_main.list[4], 4);
					break;
				case (x >= 1000 && x < 1200):
					this.checkLastCard(this.container_piles_main.list[5], 5);
					break;
				case (x >= 1200 && x < 1400):
					this.checkLastCard(this.container_piles_main.list[6], 6);
					break;
				default:
					this.checkLastCard(this.container_piles_main.list[0], 0);
					break;
			}
		} else {
			switch (true) {
				case (x >= 600 && x < 800):
					this.checkPureCards(this.container_pure_sequence.list[0], 0);
					break;
				case (x >= 800 && x < 1000):
					this.checkPureCards(this.container_pure_sequence.list[1], 1);
					break;
				case (x >= 1000 && x < 1200):
					this.checkPureCards(this.container_pure_sequence.list[2], 2);
					break;
				case (x >= 1200 && x < 1400):
					this.checkPureCards(this.container_pure_sequence.list[3], 3);
					break;
				default:
					this.checkPureCards(this.container_pure_sequence.list[0], 0);
					break;
			}
		}
	}
	backToPile = () => {
		this.container_top.each(card => this.lastContainer.add(card))
		this.arrangeCards(this.lastContainer, parseInt(this.lastContainer.name.match(/\d+/)[0]));
	}
	checkLastCard = (container, index) => {
		if (container.length) {
			const lastCard = parseInt(container.list[container.list.length - 1].name.match(/\d+/)[0]);
			const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
			const dragCardSuit = this.container_top.list[0].name.split("_")[0];
			const lastCardSuit = container.list[container.list.length - 1].name.split("_")[0];
			if (dragCardNumber === lastCard - 1 && dragCardSuit != lastCardSuit) {
				if ((dragCardSuit == "spade" && lastCardSuit == "club") || (dragCardSuit == "club" && lastCardSuit == "spade") || (dragCardSuit == "heart" && lastCardSuit == "diamond") || (dragCardSuit == "diamond" && lastCardSuit == "heart")) {
					this.backToPile();
					// this.showToast(this.oToasts.drop);
				} else {
					if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
					this.container_top.each(card => container.add(card));
					this.arrangeCards(container, index);
					this.openLastCard(this.lastContainer);
				}
			} else {
				this.backToPile();
				// this.showToast(this.oToasts.drop);
			}
		} else {
			const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
			if (dragCardNumber == 13) {
				if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
				this.container_top.each(card => container.add(card))
				this.arrangeCards(container, index);
				this.openLastCard(this.lastContainer);
			} else {
				this.backToPile();
			}
		}
	}
	checkPureCards = (container, index) => {
		const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
		const dragCardSuit = this.container_top.list[0].name.split("_")[0];
		if (this.container_top.list.length == 1) {
			if (container.list.length == 0) {
				if (dragCardNumber == 1 && this.container_top.list.length == 1) {
					if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
					this.container_top.each(card => container.add(card))
					this.arrangeCards(container, index);
					this.openLastCard(this.lastContainer);
				} else {
					this.backToPile();
				}
			} else {
				const lastCard = container.list[container.list.length - 1];
				const lastCardSuit = lastCard.name.split("_")[0];
				const lastCardNumber = parseInt(lastCard.name.split("_")[1]);
				if (dragCardSuit == lastCardSuit && (dragCardNumber - 1) == lastCardNumber) {
					if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
					this.container_top.each(card => container.add(card))
					this.arrangeCards(container, index);
					this.openLastCard(this.lastContainer);
				} else {
					this.backToPile();
				}
			}
		} else {
			this.backToPile();
		}
	}
	arrangeCards = (container, index) => {
		if (index == 24) {
			this.container_delt_cards_24.each(card => card.setPosition(310, 153));
		} else if (container.name.includes("container_pure_piles")) {
			container.each(card => card.setPosition(710 + (200 * index), 153));
		}
		else {
			let gap = 45;
			if (container.list.length > 14) gap = 40;
			if (container.list.length >= 18) gap = 35;
			container.list.forEach((card, i) => {
				card.x = 110 + (200 * index);
				card.y = 414 + (gap * i);
			});
		}
		// if (container.length >= 13) {
		// 	const aCards = container.list
		// 	const aSequence = []
		// 	for (let i = aCards.length - 1; i > aCards.length - 14; i--) {
		// 		const card = aCards[i];
		// 		if (card.name.includes("spade")) {
		// 			aSequence.push(parseInt(card.name.match(/\d+/)[0]));
		// 		}
		// 	}
		// 	if (aSequence.length == 13) {
		// 		if (this.isWinSequence(aSequence)) {
		// 			this.nTotalSequence++;
		// 			this.container_base_cards.list[this.nTotalSequence].setWinCard();
		// 			const length = container.list.length;
		// 			for (let i = length - 1; i >= length - 13; i--) {
		// 				container.list[i].setPosition(0, 0);
		// 				this.container_win_cards.add(container.list[i]);
		// 			}
		// 			this.openLastCard(container);
		// 			if (this.nTotalSequence == 7) this.fireWorks();
		// 		}
		// 	}
		// }
	}
	openLastCard = (container) => {
		if (container.length) {
			const card = container.list[container.list.length - 1];
			if (card.name == "back_red_0") {
				const cardName = this.oGameManager.getRandomCard(this.aTotalCards);
				const card = container.list[container.list.length - 1];
				card.setCard(cardName);
				card.setName(cardName);
				card.setSize(180, 260);
				card.setInteractive({ draggable: true });
			}
		}
	}
	deltCard = () => {
		const cardName = this.oGameManager.getFirstCard(this.aDeltCards);
		this.aDeltedCards.push(cardName);
		const card = new Card(this, 310, 153);
		card.setCard(cardName);
		card.setName(cardName);
		card.setSize(180, 260);
		card.setInteractive({ draggable: true });
		this.container_delt_cards_24.add(card);
		if (this.aDeltCards.length == 0) this.delt_card.setVisible(false);
	}
	checkDeltCard = (cardName) => {
		if (this.aDeltedCards.includes(cardName)) this.aDeltedCards.pop();
	}
	reDealCards = () => {
		if (this.aDeltedCards.length) {
			this.delt_card.setVisible(true);
			while (this.aDeltedCards.length) {
				this.aDeltCards.push(this.aDeltedCards.shift());
			}
			this.container_delt_cards_24.removeAll(true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
