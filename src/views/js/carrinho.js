let carrinho = [];

function adicionar_carrinho(produto) {
    const index = carrinho.findIndex((item) => item.id === produto.id);

    if (index !== -1) {
        carrinho[index].quantidade++;
        carrinho[index].total = carrinho[index].quantidade * carrinho[index].valor;
    } else {
        produto.quantidade = 1;
        produto.total = produto.valor;
        carrinho.push(produto);
    }

    atualizarModalCarrinho();
    salvarCarrinhoNoLocalStorage();
    atualizarTotalCarrinho();
    atualizarContadorCarrinho();
}


function exibir_carrinho() {
    console.log("Itens no Carrinho:");
    for (const produto of carrinho) {
        console.log(produto.descricao, " - R$", produto.valor, " - Quantidade:", produto.quantidade, " - Total:", produto.total);
    }
}

function remover_item_carrinho(id) {
    carrinho = carrinho.filter((produto) => produto.id !== id);
    atualizarModalCarrinho();
    salvarCarrinhoNoLocalStorage();
    atualizarTotalCarrinho();
    atualizarContadorCarrinho();
}

function somar_mais_um(id) {
    const produtoIndex = carrinho.findIndex((produto) => produto.id === id);
    if (produtoIndex !== -1) {
        carrinho[produtoIndex].quantidade++;
        carrinho[produtoIndex].total = carrinho[produtoIndex].quantidade * carrinho[produtoIndex].valor;
        atualizarModalCarrinho();
        salvarCarrinhoNoLocalStorage();
        atualizarTotalCarrinho();
        atualizarContadorCarrinho();
    }
}

function subtrair_mais_um(id) {
    const produtoIndex = carrinho.findIndex((produto) => produto.id === id);
    if (produtoIndex !== -1) {
        if (carrinho[produtoIndex].quantidade > 1) {
            carrinho[produtoIndex].quantidade--;
            carrinho[produtoIndex].total = carrinho[produtoIndex].quantidade * carrinho[produtoIndex].valor;
            atualizarModalCarrinho();
            salvarCarrinhoNoLocalStorage();
            atualizarTotalCarrinho();
            atualizarContadorCarrinho();
        }
    }
}

function atualizarModalCarrinho() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    if (carrinho.length === 0) {
        cartItems.innerHTML = `
            <div class="carrinho_vazio">
                <i class="fa fa-frown-o" aria-hidden="true"></i>
                <p>Seu carrinho ainda não tem itens.</p>
            </div>
        `;
    } else {
        for (const produto of carrinho) {
            const itemHtml = `
                <div class="item-carrinho">
                    <img class="item-carrinho-imagem" src="${produto.imagem}" alt="${produto.descricao}">
                    <div class="item-carrinho-titulo">
                        <div class="item-carrinho-desc-qtd">
                            <span class="item-carrinho-descricao">${produto.descricao}</span>
                            <div class="item-carrinho-qtd-excluir">
                                <div class="item-carrinho_qtd_produto">
                                    <button class="item-carrinho-mais" onclick="somar_mais_um(${produto.id})"><i class="fa fa-plus" aria-hidden="true"></i></button>
                                    <p>x${produto.quantidade}</p>
                                    <button class="item-carrinho-menos" onclick="subtrair_mais_um(${produto.id})"><i class="fa fa-minus" aria-hidden="true"></i></button>
                                </div>
                                <div class="item-carrinho-excluir">
                                    <button class="item-carrinho-clear" onclick="remover_item_carrinho(${produto.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="item-carrinho-valores">
                            <span class="item-carrinho-preco"><b>$</b> ${produto.valor.toFixed(2)}</span>
                            <span class="item-carrinho-total"><b class="simbolo-dolar">$</b> ${produto.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
            cartItems.innerHTML += itemHtml;
        }
    }
}

function atualizarTotalCarrinho() {
    const totalCarrinho = carrinho.reduce((total, produto) => total + produto.total, 0);
    const carrinhoTotalizador = document.querySelector('.carrinho-totalizador');
    
    carrinhoTotalizador.innerHTML = `
    <span class="item-carrinho-total">
        <b>Total a pagar</b>
        <b><b class="simbolo-dolar">$</b> ${totalCarrinho.toFixed(2)}</b> 
    </span>`;

    const pagamentTotalizador = document.querySelector('.pagament-totalizador');
    
    pagamentTotalizador.innerHTML = `
    <span class="item-carrinho-total">
        <b>Total a pagar</b>
        <b><b class="simbolo-dolar">$</b> ${totalCarrinho.toFixed(2)}</b> 
    </span>`;
}

function salvarCarrinhoNoLocalStorage() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinhoDoLocalStorage() {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarModalCarrinho();
    }
}

function atualizarContadorCarrinho() {
    const pagamentButton = document.getElementById('pagament-button');
    const contadorCarrinho = document.getElementById('cart-item-count');

    if(carrinho.length != 0){
        contadorCarrinho.textContent = carrinho.length;
        
        pagamentButton.removeAttribute('disabled');
        pagamentButton.classList.remove('desativado'); 
        return;
    } else {
        pagamentButton.setAttribute('disabled', 'disabled');
        pagamentButton.classList.add('desativado');

        contadorCarrinho.textContent = '';
    }
    
}

carregarCarrinhoDoLocalStorage();
atualizarContadorCarrinho();
atualizarTotalCarrinho();