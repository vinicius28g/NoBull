let total = 0;
function calcularTotal() {
    const produtos = document.querySelectorAll('.produto');
    total = 0;
    

    produtos.forEach(produto => {
        debugger
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', '').replace(',', '.'));
        const quantidade = parseInt(produto.querySelector('.quantidade').value);
        total += preco * quantidade;
    });

    document.getElementById('total').innerHTML = `<span>Total:</span> <span><strong>R$ ${total.toFixed(2).replace('.', ',')}</strong></span>`;
}

function finalizarCompra() {
    if (total > 0) {
        Swal.fire({
            icon: 'success',
            title: 'Compra Finalizada!',
            html: `<p>Seu pedido foi processado com sucesso.<br><strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong></p>`,
            confirmButtonText: 'Fechar'
        });
        // Limpar o carrinho
        const produtos = document.querySelectorAll('.produto');
        produtos.forEach(produto => {
            produto.querySelector('.quantidade').value = 0;
        });
        document.getElementById('total').innerHTML = `<span>Total:</span> <span><strong>R$ 0,00</strong></span>`;
        total = 0; // Resetar o total
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Carrinho Vazio',
            text: 'Adicione itens ao carrinho antes de finalizar a compra.',
            confirmButtonText: 'Entendi'
        });
    }
}
