// Função para aplicar desconto de 10%
function aplicarDesconto(valorTotal) {
    if (valorTotal > 2999) { // Representa maior que 10%
        return valorTotal * 0.95; // Aplica desconto de 15%
    } else {
        return valorTotal * 0.9; // Aplica desconto de 20%
    }
}

document.getElementById('compraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const valorTotal = parseFloat(document.getElementById('valorCompra').value);

    const valorFinal = aplicarDesconto(valorTotal);

    document.getElementById('resultado').innerHTML = `<p>Cliente: ${nomeCliente}</p>
                                                      <p>Valor Total da Compra: R$ ${valorFinal.toFixed(2)}</p>`;
});

function exemplo() {
    const valor = parseFloat(document.getElementById('valorMenor').value);
    let total = 3000; // Fator de multiplicação do desconto, padrão sem desconto

    if (valor < 2500) { // Se for menor que 2500
        total = 2500; // Aplica desconto de 10%
    }

    const laranjas = 130;
    const ananas= 50;
    const cadeiraDeGame = 245;
    const maças = 20;
    const laptop = 100;
    const impressora = 150;

    const Maria= (MAÇAS * 1) + (ANANAS * 1) + (laranjas * 1);
    const João = (laptop * 1) + (impressora * 1);
    const jOSE = (laptop * 1) + (cadeiraDeGame * 1);

    document.getElementById('resultado2').innerHTML = `<p>Lucas tem que pagar ${MARIA  * total}</p>
                                                       <p>Leila tem que pagar ${JOAO * total}</p>
                                                       <p>Daniel tem que pagar ${jOSE
                                                        * total}</p>`;
}
