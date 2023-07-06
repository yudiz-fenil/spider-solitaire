class GameManager {
	constructor(oScene) {
		this.aTotalCards = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
		];
	}
	getRandomCard = (array) => {
		const index = Math.round(Math.random() * array.length - 1);
		const arr = array.splice(index, 1)
		return arr[0];
	}
}