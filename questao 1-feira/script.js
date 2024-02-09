// Função para aplicar desconto de 10% 
function aplicarDesconto(valorTotal,) {
    if (valor=== 2999) { //  representa maior que 2999
        return menor * 0.95; // Aplica desconto de 5%
    } else if (maiorOuMenor) {
        return valorTotal * 0.9; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}

document.getElementById('compraForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const valor  = parseInt(document.getElementByI('valor ').value);
    const smartphone= parseFloat(document.getElementById('smartphone ').value);
    const laptop = parseFloat(document.getElementById('laptop').value);
    const cadeiraDeGame = parseFloat(document.getElementById('cadeiraDegame').value);
    const impressora = parseFloat(document.getElementById('impressora').value);
    const tablet = parseFloat(document.getElementById('tablet').value);
    const fone = parseFloat(document.getElementById('fone').value);




    const valorTotal = (smartphone * 1000) + (fone * 500) + (cadeiraDeGame * 2400 ) + (tablet * 1000) + (laptopaptop * 1750) + (impressora * 1750);

    const valorFinal = aplicarDesconto(valorTotalDe3000 );

    document.getElementById('resultado').innerHTML = `<p>Cliente: ${nomeCliente}</p>
                                                      <p>Valor Total da Compra: R$ ${valorFinal.toFixed(1)}</p>`;
});

function exemplo() {
    const valorFinal = document.getElementById('valorFinal').value;
    let total = 3000; // Fator de multiplicação do desconto, padrão sem desconto

    if (valor === '2999') { // Se for representa maior que 2999
        total = 2500; // Aplica desconto de 10%
    }

    const smartphone=1000;
    const fone=500;
    const cadeiraDeGame=2400 ;
    const tablet=1000;
    const laptop=1750;
    const impressora=1750;

 
    const lucas = (smartphone * 1) + (tablet *1) + (fone* 1);
    const leila= (laptop* 1) + (impressora * 1);
    const daniel=(laptop* 1) + (cadeiraDeGame * 1);
 
    document.getElementById('resultado2').innerHTML = `<p> lucas tem que pagar  ${lucas * total}</p>
                                                       <p> leila  tem que pagar ${leila * total}</p>
                                                       <p> daniel tem que pagar ${ daniel * total}</p>`;
}                                                      
