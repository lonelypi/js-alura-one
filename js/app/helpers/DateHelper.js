class DateHelper {

    constructor(){

        //Para avisar pro programador que não é para criar uma estância.
        throw new Error("DateHelper não pode ser instanciado.")

    }

    //AULA 4
    //Definindo um método como estático eu não preciso estanciar um objeto da classe DateHelper
    static dataParaTexto(data){

        //Primeiro contato com template String.
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    }

    static textoParaData(texto){
        //Expresão regular:
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
        
        return new Date(...texto.split('-').map((item, indice) =>  item - indice % 2));
            //Quando possuo uma unica linha de código em uma arrow function, não há necessidade de
            //escrever o return ou por chaves.
    }

}