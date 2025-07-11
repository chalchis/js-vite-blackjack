 import _ from 'underscore';

/**
 * 
 * @param {Array<String>} mazo de cartas
 * @returns {String<String>} retorna una carta del mazo
 */

//pedir carta
export const getCarta = (deck) => {

	if (deck.length === 0) 
	{
		throw 'No hay mas cartas';
	}

	const cardIndexDeck = _.random(0, deck.length - 1);
	const carta = deck[cardIndexDeck];
	//deckTable.push(carta);
	deck.splice(cardIndexDeck, 1);

	return carta; // Devuelve la carta que sacamos

};