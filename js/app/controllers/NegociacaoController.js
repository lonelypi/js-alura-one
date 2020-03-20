class NegociacaoController {
    //AULA 3

    //Metodo, função que pertence a um objeto. Função está sozinha.
    //Preciso usar o metodo bind, para manter a associação (com document)
    //  fazendo uma referência ao `document` no caso usado.
    
    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    
    }
        //A reticencias se chama spread operator! Que separa cada valor do array.
        //Metodo map é usado para formar algo novo, ele possui um return.

    adiciona(event) {
        event.preventDefault();
        
        //AULA 4
        // console.log(DateHelper.dataParaTexto(negociacao.data));

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionado com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
        
        console.log(this._listaNegociacoes.negociacoes);
    }

    // "_" pq o método só pode ser chamado pela própria classe.
    _criaNegociacao() { 

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }


    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();
    }

}