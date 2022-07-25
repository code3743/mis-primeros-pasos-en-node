const fs = require('fs')


const crearArchivo = async (base, limite, vista)=>{
    try{


    let salida = ''
    for(let i = 1; i<=limite; i++){
        salida += `${base} x ${i} = ${base*i} \n`
    }
    if(vista){
        console.log("==================")
        console.log("   Tabla del",base)
        console.log("==================")
        console.log(salida);
    } 
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `./out/tabla-${base}.txt`
    }catch(err){
        throw err
    }
}


module.exports = {
    crearArchivo
}