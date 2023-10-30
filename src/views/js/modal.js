function modal_carrinho(metodo){
    const cartModal = document.getElementById('cart-modal');
    const abreFechar = metodo == 'abrir' ? 0 : 100;
    cartModal.style.transform = `translateX(${abreFechar}%)`; 
}

function modal_pagamento(metodo){
    const pagamentModal = document.getElementById('pagament-modal');
    const abreFechar = metodo == 'abrir' ? 0 : 100;
    pagamentModal.style.transform = `translateX(${abreFechar}%)`;
}
