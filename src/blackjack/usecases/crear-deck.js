import _ from 'underscore';

/**
 * 
 * @param {Array<String>} typesCards ej: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especialCards ej: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un mazo de cartas
 */

//create deck
export const createDeck = (typesCards, especialCards) => {

	//inicializar el mazo
	let deck = [];
	
	for (let d = 2; d <= 10; d++) 
	{		
		// deck.push(d+'C');
		for (let typeCard of typesCards) 
		{
			deck.push(d+typeCard);	
		}
	}	
	
	for (let espec of especialCards) 
	{
		//deck.push(typeCard+espec);	
		for (let typeCard of typesCards) 
		{
			deck.push(espec+typeCard);
		}
	}

	return _.shuffle(deck);
};