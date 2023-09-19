function calcularMedia(nota1,nota2){
    n = (nota1 + nota2)/2;

    if(n >= 7){
        console.log('Aluno Aprovado com a média: ' + n);
    }
     else if(n >= 5 && n < 7 ){

        console.log('Aluno de Recuperação com a média: ' + n)

     }

     else{

        console.log('Aluno Reprovado com a média: ' + n);
     }
    

}


calcularMedia(7.5,5)
