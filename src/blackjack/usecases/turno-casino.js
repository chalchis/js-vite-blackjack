import { acumularPuntos } from "./acumular-puntos";
import { createCartaImg } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { getCarta } from "./pedir-carta";


//turno casino
export const turnoCasino = (puntosPlayers, deck, puntajePlayerTxt, divCartasPlayers) => {

	 console.log(`turno del casino con puntos: ${puntosPlayers}`);
	
	let puntosCasino = 0;
	let turno = 1;//puntosPlayers.length;
	console.log(`turno de casino : ${turno}`);

	do {
		//dar carta
		const carta = getCarta(deck);
		puntosCasino = acumularPuntos(1, carta, puntosPlayers, puntajePlayerTxt); // el casino es el ultimo jugador			
		createCartaImg(turno, carta, divCartasPlayers);

		if (puntosPlayers[0] > 21)
		{			
			break; // si el casino pasa de 21, termina su turno
		}

	} while ((puntosCasino < puntosPlayers[0]) && (puntosPlayers[0] <= 21));

	determinarGanador(puntosPlayers[0], puntosCasino);		

	console.log(`Puntaje de los jugadores: ${puntosPlayers}`);
};
