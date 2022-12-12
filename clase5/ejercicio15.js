/*15) Programa una función para convertir números de base binaria a 
decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

function miFuncion(valor, base) {
    if (typeof valor == "number" && typeof base == "number") {
        if(valor < 0){
            return "Ups... No aceptamos valores negativos";
        }
        switch (base) {
            case 2:
                const stringBinary = valor.toString();
                //console.log(stringBinary.length);
                if(stringBinary.length>16){
                    return "Número muy grande para procesar."
                }
                if(stringBinary.includes("2") || stringBinary.includes("3")|| stringBinary.includes("4") || stringBinary.includes("5") || stringBinary.includes("6") || stringBinary.includes("7") || stringBinary.includes("8")|| stringBinary.includes("9")){
                    return "Has ingresado un número en la base equivocada."
                }
                let sumatoria = 0;
                for (let i = 0; i < stringBinary.length; i++) {
                    sumatoria += stringBinary[stringBinary.length-i-1]*Math.pow(2,i);
                }
                return sumatoria;
            case 10:
                if(valor>Number.MAX_SAFE_INTEGER){
                    return "Número muy grande para procesar."
                }
                let acumuladoInverso = "";
                let salida="";
                while (valor > 1) {
                    acumuladoInverso+= valor%2;
                    valor = Math.floor(valor/2);
                }
                acumuladoInverso+=1;

                for (let i = acumuladoInverso.length-1; i >= 0; i--) {
                    salida += acumuladoInverso[i];
                }
                return salida;
            default:
                return "Base numérica no válida.";
        }
    } else{
        return "Has ingresado un tipo de dato incorrecto.";
    }
}

console.log(miFuncion(134512312343274, 10));