function relogio(){

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    if(hora < 10){
        hora = "0" + hora
    }
    
    if(minutos < 10){
        minutos = "0" + minutos
    }

    if(segundos < 10){
        segundos = "0" + segundos
    }

    let tempo_total = hora + ":" + minutos + ":" + segundos;
    
    let relogio = window.document.getElementById('clock');

    relogio.innerHTML = tempo_total;
}

setInterval(relogio, 500)