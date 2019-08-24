/**
 * Archivo para multiplicar.
 */
const fs = require('fs'); //Requider propio de Node. Libreria que ya existe en node
//Importamos el paquete colors
const colors = require('colors');   

/**
 * crea la tabla de multiplicar en la base que se indique y la persiste en un fichero.
 * @param {BigInteger} base 
 */
//module.exports.escribeTablaMultiplicar = async (base) => {
let escribeTablaMultiplicar = async (base) => {

    //Comprobamos que la base es un numero:
    if ( !Number(base) ) 
        throw new Error(`El valor ${base} no es un valor numerico`);

    let data = '';
    let nombreFichero = `./tablas/tabla${base}.txt`


    //Componemos la tabla de multilpicar
    for (let i = 1; i < 10 ; i++) {
        console.log(`${base} * ${i} = ${base * i}`.red);
        data += `${base} * ${i} = ${base * i} \n`;
    }

    //Escribe en fichero el contenido de la tabla del dos.
    fs.writeFile(nombreFichero, data, (err) => {
        if (err) throw new Error(err);
    });

    return nombreFichero;
}

//Para añadir los objetos que quiero exportar de forma global al resto de la aplicacion.
//se debe utu¡ilizar el objeto modulo.

module.exports = {
    escribeTablaMultiplicar
}
