class Negociacao {

    constructor(data, quantidade, valor){

        //Crio uma nova data baseada na data que me passou, para não ter a capacidade de mudar.
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume(){

        return this._quantidade * this._valor;

    }

    //metodos acessadores
    get data(){

        //Programação defensiva para a pessoa não ter acesso aos dados de dentro de Data de nao modifica-los
        //Assim só altera a cópia, mas não altera o valor da váriavel em si criada.
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

}