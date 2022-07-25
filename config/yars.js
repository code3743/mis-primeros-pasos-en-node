const argv = require('yargs')
                    .option('v',{
                        alias:'vista',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('l',{
                        alias:'limite',
                        type: 'number',
                        default:10,
                        describe: 'Limited de la tabla'

                    })
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,    
                        describe: 'Base de la bandera'
                        })
                        .check((argv, option)=>{
                            if(isNaN(argv.b)) throw 'La Base debe ser un numero'
                            if(isNaN(argv.l)) throw 'El limite debe ser un numero'
                            return true;
                        })
                        .argv


module.exports = argv;