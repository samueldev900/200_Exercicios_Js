var pare = 'red';
var prossiga = 'green'
var atencao = 'yellow'


function semaforo(cor){

    switch(cor){
        case 'red':
            console.log('Sinal Vermelho. PARE');
        break

        case 'green':
            console.log('Sinal Verde. Prossiga');
        break

        case 'yellow':
            console.log('Sinal Amarelo. ATENÇÃO')
        break

        default:
            console.log('Cor não existente no Semaforo')
    }


}


semaforo('blue');