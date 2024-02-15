
// Função os valores do emprestimo serao inseridos pelom usuario.
function aplicartaxas() {
    if (taxas) { // 1 representa segunda-feirazz
        return valorTotal * 0.95; // Aplica desconto de 5%
    } else if (diaDaSemana === 3) { // 3 representa quarta-feira
        return valorTotal * 0.9; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}

document.getElementById('compraForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const taxas  = parseInt(document.getElementById('1,1.5 e 3.0').value);
    const numerooo = parseFloat(document.getElementById('concursandoo ').value);
    const valor total da taxas = parseFloat(document.getElementById('CLT').value);
    const taxas  = parseFloat(document.getElementById('contrato temporario').value);

    const valorTotal = (inicial * 20000000 + ( taxa do empresimo 300000 * ) + (valor final a ser pagoo é de * 6000000);

    const valorFinal = aplicartaxas(taxa, valorASerPagoo);

    document.getElementById('resultado').innerHTML = `<p>Cliente: ${nomeCliente}</p>
                                                      <p>valor a ser pago : R$ ${valorFinal.toFixed(2)}</p>`;
});

function exemplo() {
    const dias = document.getElementById('dias').value;
    let total = 1; // Fator de multiplicação do desconto, padrão sem desconto 

   

    const emprestimo = (Concursandor* 1) + (CLT* 2) + (PARA CONTRATO temporario * 3);
    const joao = (LING * 1) + (frang * 1) + (boi * 2);

    document.getElementById('resultado2').innerHTML = `<p> João tem que pagar  ${joao * total}</p>
                                                       <p> Maria tem que pagar ${maria * total}</p>`;
}
