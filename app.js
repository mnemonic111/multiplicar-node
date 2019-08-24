//Forma comun para importar archivos.
//const mlps = require('./multiplicar/multiplicar');

//Con la desestructuracion se pueden importar las cosas de la siguiente manera:
const {escribeTablaMultiplicar} = require('./multiplicar/multiplicar');

//Argv 
const argv = require('yargs')
    .command('listar','imprimime en consola la tabla de multiplicar.', {
        base: { //Definimos el flag base e indicamos como se usa.
            demand: true, //Decimos que es obligatorio.
            alias: 'b' //Incluimos un alias al comando.
        },
        limite: {
            alias: 'l',
            default: 2 //Valor por defecto si no es introducido en la aplicacion.
        }   
    }) //Incluye ayuda para los comandos.
    .help()
    .argv;

//Importamos el paquete colors
const colors = require('colors');

//Recuperamos los argumentos de arranque del programa.
//Se recuperan del objeto process.
let arguments = process.argv;

//Recuperamos el parametro ubicado en la segunda posicion de los argumentos.
//Al ser un array, y los dos primeras posiciones las ocupan los argumentos de entrada de node.
// array empieza por cero, y los argumentos propios de node , el primero nuestro pasa a  ser el de la posicion
// 2 (realmente el trecero )
let param = arguments[2];

//Al ser un string , al ser introducido de la siguiente manera '--base=5', tenemos que hacer un split 
// de = quedandonos con la ultima posicion ( sabemos que el array empieza por la posicion 0).

let base = param.split('=')[1];

//Importaremos los argumentos con argsv
//let comando = process.argv._[0];
//let argv2 = process.argv;
//let base = argv2.base; //Recibimos el parametro base.
//let limite = argv2.limite; //Recibimos el limite

/*
switch(comando) {
    case 'listar':
        console.log('listar');
    break;
    case 'crear':
        console.log('listar');
    break;
    default:
        console.log('comando no reconocido');
    break;
}
*/

//Intentamos escribir el fichero en la ruta por defecto.
//Con la forma comun de importar archivos se llamaria a la funcion de esta manera
//mlps.escribeTablaMultiplicar(base).then(nombreArchivo => {

//Con la desestructuracion de esta manera (notar que ya no se hace referencia al alias mlps):
escribeTablaMultiplicar(base).then(nombreArchivo => {
    console.log(`Se escribe el fichero ${nombreArchivo}`);
}).catch( (e) => {
    console.log(`Error de escritura: ${e}`);
})







  
