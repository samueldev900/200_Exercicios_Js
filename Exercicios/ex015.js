function verificarPalindromo(palavra){

    var palavraInvertida = palavra.split('').reverse().join('');

    if(palavra == palavraInvertida){

        console.log(palavra + " é um palindromo")

    }

    else{

        console.log(palavra + " não é um palindromo")

    }

}


verificarPalindromo("Arara")



