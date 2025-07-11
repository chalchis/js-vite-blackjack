
/**
 * 
 * @param {*} puntosPlayer 
 * @param {*} puntosCasino 
 */
export const determinarGanador = (puntosPlayer, puntosCasino) => {
	setTimeout(() => {
		//mensajeFinal(puntosMinimos, puntosCasino);
		let mensaje;

		if (puntosPlayer === puntosCasino) 
		{
			mensaje = "Empate";
		} else if (puntosPlayer > 21) {
			mensaje = "Ganador Casino"; // Jugador se pasó
		} else if (puntosCasino > 21) {
			mensaje = "Ganador el Jugador"; // Casino se pasó
		} else {
			// Si llegamos aquí, sabemos que:
			// - No hay empate
			// - Ninguno se pasó de 21
			// Así que solo comparamos puntajes
			mensaje = (puntosPlayer > puntosCasino) 
				? "Ganador el Jugador" 
				: "Ganador Casino";
		}

		alert(mensaje);
		
	}, 70);
};