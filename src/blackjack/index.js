import _ from 'underscore';
// import { createDeck } from './usecases/crear-deck';
// import { getCarta } from './usecases/pedir-carta';
// import { valorCarta } from './usecases/valor-carta';

import { createDeck, getCarta, acumularPuntos, turnoCasino, createCartaImg } from './usecases'; // Importa las funciones de los casos de uso


	'use strict'; // Activa el modo estricto de JavaScript, que ayuda a evitar errores comunes y mejora la seguridad del código.


	/*
	2C = Two of clubs
	2D = Two of Diaminds
	2H = Two of Hearts
	2S = Two of Spades
	*/
    

	//mazo
	let deck			= [];
	//let deckTable		= [];
	const typesCards 	= ['C', 'D', 'H', 'S'],
		especialCards = ['A', 'J', 'Q', 'K'];

    deck = createDeck(typesCards, especialCards);	

	//puntos de los jugadores
	let puntosPlayers = [];

	//referencias del html
	const btnNuevoJuego = document.querySelector('#btnNuevo'),
		btnPedir = document.querySelector('#btnPedir'),
		btnDetener = document.querySelector('#btnDetener');	

	//divCartas de los jugadores
	const divCartasPlayers = document.querySelectorAll('.divCartas'),
		puntajePlayerTxt = document.querySelectorAll('.puntostxt');

	console.log({divCartasPlayers});
	console.log({puntajePlayerTxt});

	//document.getElementsByClassName
	//document.getElementById
	//document.querySelectorAll

	// Inicializa el juego
	const InicializaJuego = ( numJugadores = 2 ) => {
        
        //deck = []; //reinicia el mazo
        console.log(`mazo: ${deck}`);
		
		//inicializa el mazo
		createDeck(typesCards, especialCards);

		for (let i = 0; i < numJugadores; i++)
		{
			puntosPlayers.push(0);
		}

		console.log({puntosPlayers});

		//resetea las cartas y el puntaje de los jugadores
		puntajePlayerTxt.forEach( (element, index) => {
			element.innerText = 0; //inicializa los puntos de los jugadores			
			divCartasPlayers[index].innerHTML = ''; //limpia las cartas de los jugadores

			btnPedir.disabled = false; //habilita el boton de pedir carta
			btnDetener.disabled = false; //habilita el boton de detener
		});
	};

	//----------------------------------------------------

	

	//----------------------------------------------------

	

    

	//----------------------------------------------------

	
	//----------------------------------------------------

	

	//----------------------------------------------------

	

	//----------------------------------------------------

	

	//----------------------------------------------------

	
	
	//eventos============================

	btnPedir.addEventListener('click', ()=> {
		
		//dar carta
		const carta = getCarta(deck);
		const puntosMinimo = acumularPuntos(0, carta, puntosPlayers, puntajePlayerTxt); // el 0 jugador es el primer jugador
		console.log(`puntos jugador: ${puntosMinimo}`);
		createCartaImg( 0, carta, divCartasPlayers );
	
		//condicion
		if (puntosMinimo > 21)
		{
			console.warn('Juega casino A');
			//desactivar boton de pedir carta
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			//turno del casino
			turnoCasino( puntosPlayers, deck, puntajePlayerTxt, divCartasPlayers );
		}
		else
		{
			if (puntosMinimo === 21)
			{
				console.warn('Juega Casino B');
				//console.warn('Blackjack del Jugador');
				btnPedir.disabled = true;
				btnDetener.disabled = true;
				//turno del casino
				turnoCasino( puntosPlayers, deck, puntajePlayerTxt, divCartasPlayers );
			}
		}	

	});

	//----------------------------------------------------

	//detener
	btnDetener.addEventListener('click', () => {

		//desactivar boton de pedir carta
		btnPedir.disabled = true;
		
		//desactivar boton de detener
		btnDetener.disabled = true;

        console.warn(puntosPlayers[0]);

		//turno del casino
		turnoCasino( puntosPlayers, deck, puntajePlayerTxt, divCartasPlayers );

	});

	//----------------------------------------------------

	//nuevo juego
	btnNuevoJuego.addEventListener('click', () => {	
        puntosPlayers = [];
		InicializaJuego();
	});


	//innerText si en el css tiene una propiedad de visibilidad, no se muestra
	//textContent es lo mismo que innerText, pero no respeta el css y muestra el texto aun si tiene visibilidad hidden
	//innerHTML atrea todo el html
	//Delegación de Eventos: Flujo "hacia arriba" (bubbling) y "hacia abajo" (capturing)
	//https://www.youtube.com/watch?v=ihOlYYoGNq0&t=992s

	// const zoneBtn = document.querySelector('#contend-botones');
	// zoneBtn.insertAdjacentHTML('beforeend', `
	// <div class="col-sm">
	// 	<button id="btnExtra" class="btn btn-danger btn-block">Extra</button>
	// </div>
	// `);

	InicializaJuego();

