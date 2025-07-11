import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {String<String>} turno 
 * @param {String<String>} carta 
 * @returns {Number<Number>} retorna el puntaje acumulado del jugador
 * 
 */
//acumular puntos
//turno 0 a....son jugadores la ultima posicion es el casino
export const acumularPuntos = ( turno, carta, puntosPlayers, puntajePlayerTxt ) => {

    console.log(`sumando puntos: turno: ${turno}, carta: ${carta}`);

    puntosPlayers[turno] = puntosPlayers[turno] + valorCarta(carta);

    puntajePlayerTxt[turno].innerText = puntosPlayers[turno];

    console.log('puntaje:'+puntosPlayers[turno]);	

    return puntosPlayers[turno];

};