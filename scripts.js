function calcularPrecos() {
    // Obter o valor de custo do produto
    let custo = parseFloat(document.getElementById('custo').value);

    // Verificar se o custo é um número válido
    if (isNaN(custo) || custo <= 0) {
        alert("Por favor, insira um valor de custo válido.");
        return;
    }

    // Calcular os preços
    let precoPrime = custo + (custo * 0.90);
    let precoAPrazo = custo + (custo * 1.20);

    // Exibir os resultados de preço
    document.getElementById('preco_prime').innerText = 'Preço Prime: R$ ' + precoPrime.toFixed(2);
    document.getElementById('preco_aprazo').innerText = 'Preço a Prazo: R$ ' + precoAPrazo.toFixed(2);
}
