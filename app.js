
require('colors');
const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//como recibir argumentos por consola 
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')

crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green))
    .catch(err => console.log(err))