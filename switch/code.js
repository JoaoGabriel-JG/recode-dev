let mes = 8;

switch(mes){        //inicio da chave

    case 1:
    case 2:
    case 3:
        console.log("Primeiro trimestre");
    break;                                      //final do primeiro bloco de linhas

    case 4:
    case 5:
    case 6:
        console.log("Segundo trimestre")
    break;

    case 7:
    case 8:     //ponto de entrada 
    case 9:
        console.log("Terceiro trimestre")
    break;

    case 10:
    case 11:
    case 12:
        console.log("Quarto trimestre")
    
    //na ultima opção não precisa do break

    default:
        console.log("Mês invalido")

}