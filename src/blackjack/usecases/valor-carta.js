
/**
 * 
 * @param {<String>} carta 
 * @returns <String> valor numerico de la carta
 */
//valor de la carta
export const valorCarta = ( carta ) => {

    console.log(carta);

    let valor = carta.substring(0, carta.length - 1);

    valor = (!isNaN(valor)) ? valor * 1 :
            (valor === 'A') ? 11 : 10;
    
    console.log(`valor carta: ${valor}`);

    return valor;
};