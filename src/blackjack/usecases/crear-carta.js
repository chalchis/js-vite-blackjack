/**
 * 
 * @param {*} turno 
 * @param {*} carta 
 * @param {*} divCartasPlayers 
 */

//crear carta imagen
export const createCartaImg = ( turno, carta, divCartasPlayers ) => {

    console.log(`turno: ${turno}, carta: ${carta}`);
    //imagen
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasPlayers[turno].append(imgCarta);

};