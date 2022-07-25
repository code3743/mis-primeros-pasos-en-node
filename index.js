const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yars');
const colors = require('colors');


// console.log(process.argv)

// const [, , ArgumentosBase = 'base=5'] = process.argv
// const [ ,base = 5] = ArgumentosBase.split('=')


crearArchivo(argv.b, argv.l, argv.v)
            .then((base) => console.log(`La tabla en base ${base} se creo`.red.bgYellow.bold))
            .catch((err)=> console.log(err))

