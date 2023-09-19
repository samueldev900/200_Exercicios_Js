/*
31 = 1-3-5-7-8-10-12
30 = 4-6-9-11
38 = 2 
*/

function diasAno(n){
    if(n == 1||n==3||n==5||n==7||n==8||n==10||n==12){
        console.log('Esse mes tem 31 dias corridos.')
    }
    else if(n == 4||n==6||n==9||n==11){
        console.log('Esse mes tem 30 dias corridos.')
    }
    else if(n == 2){
        console.log('O mes de fevereiro tem 28 dias')
    }
    else{
        console.log('Mes no indentificado.')
    }
}

function determinar(n){
switch(n){

        case 2:
            console.log('28 ou 29 dias')
        break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        console.log('Esse mes tem 31 dias')
        break;
        default:
            console.log('Esse mes tem 30 dias')


    }
}

determinar(4)