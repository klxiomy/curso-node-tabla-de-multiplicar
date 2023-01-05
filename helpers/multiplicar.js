//file system
const fs = require('fs');
const colors = require('colors');
// let nombreTabla = ''
// con promesa
// const crearTabla = (base = 5) => {
//     return new Promise((resolve, reject) => {
//         console.log('================');
//         console.log('  Tabla del:', base);
//         console.log('================');
//         if (base) {
//             let salida = '';
//             for (let i = 0; i <= 10; i++) {
//                 salida += `${base} x ${i} = ${base * i}\n`;
//             }
//             console.log(salida);

//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             // console.log(`Tabla del ${base} creada correctamente`);
//             resolve(`Tabla del ${base}`)
//         } else {
//             reject('Por favor pone un numero diferente a 0')
//         }
//     })
// }
//con ASYNC Y AWAIT 
const crearTabla = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida, consola = '';
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.magenta} ${base * i}\n`;
        }
        if (listar) {
            console.log('================'.blue);
            console.log('  Tabla del:'.green, colors.green(base));
            console.log('================'.blue);
            console.log(consola);
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
        return `Tabla del ${base}`
        // }
    } catch (error) {
        throw error;
    }

}
module.exports = {
    crearTabla
}