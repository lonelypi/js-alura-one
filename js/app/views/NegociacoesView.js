class NegociacoesView extends View{

    constructor(elemento){
        super(elemento);

    }

    template(model){

        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    </tbody>
                        ${model.negociacoes.map(n => `

                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>

                            `
                        ).join('')}
                    <tfoot>

                        <td colspan="3"></td>
                        <td>${model.negociacoes.reduce((total,n) => total + n.volume, 0.0)}
                        </td>
                    </tfoot>
                </table>
                
        `;
    }

    //Função reduce processa um array e retorna um unico resultado.
    //A função reduce recebe dois parâmetros: uma função e um valor inicial. Na função interna ao reduce, o primeiro parâmetro é o valor da última iteração

    //Lembrando quando a arrow function possui somente uma declaração, nao precisa de return.

}
