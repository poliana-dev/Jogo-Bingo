
function sorteioNumero(){
    let sorteado=[];
    const max=76;
    let num;

    for(let i=0; i<max; i++){  //determinando o tamanho da lista
        sorteado[i]= i+1
    }

    let teste;

    for(let i= sorteado.length; i; ){  //embaralhando os numeros
        num= Math.random() * i-- | 0;
        teste= sorteado[num];
        sorteado[num]= sorteado[i];
        sorteado[i]= teste;

    
    }
    
    //provavelmente o numero vai se repetir em algum momento, pesquisei bastante pra poder conseguir fazer, enfim é isso

    document.getElementById("resultado").innerHTML=sorteado[num] 
      
}











