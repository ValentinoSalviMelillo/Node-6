function ingresarNumeroDeArranque(){
    let arranque = parseInt(prompt("Ingresa un número para comenzar"));
    return arranque
}

function calcularLaSecuencia(arranque){
    let secuencia = [];
    secuencia.push(arranque);
    while(arranque != 1){
        if(arranque % 2 == 0){
            arranque/=2;
        }
        else{
            arranque*=3;
            arranque++;
        }
        secuencia.push(arranque);
    }
    return secuencia;
}


function procesarInformacion(){
    const arranque = ingresarNumeroDeArranque();
    const secuencia = calcularLaSecuencia(arranque);

    document.getElementById("longitud").innerText = secuencia.length;
    document.getElementById("maximo").innerText = Math.max(...secuencia);
}
