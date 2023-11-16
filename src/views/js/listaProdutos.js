
var produtosJSON = [
    {
        "id": 1,
        "descricao": "Hambúrguer Clássico",
        "valor": 9.99,
        "desconto_percentual": 14,
        "estrelas": 4.2,
        "favorito": true,
        "imagem": "./src/views/produtos/hamburguer.jpg",
        "itens": [
            { nome: "Tomate", quantidade: "100g" },
            { nome: "Cebola", quantidade: "50g" },
            { nome: "Ovo", quantidade: "1" }
        ]
    },
    {
        "id": 2,
        "descricao": "Pizza Margherita",
        "valor": 14.99,
        "desconto_percentual": 2,
        "estrelas": 4.5,
        "favorito": true,
        "imagem": "./src/views/produtos/pizza.jpg",
        "itens": [
            { nome: "Molho de Tomate", quantidade: "150g" },
            { nome: "Mozzarella", quantidade: "100g" },
            { nome: "Manjericão", quantidade: "10 folhas" }
        ]
    },
    {
        "id": 3,
        "descricao": "Batatas Fritas Crocantes",
        "valor": 4.99,
        "desconto_percentual": 10,
        "estrelas": 4.0,
        "favorito": true,
        "imagem": "./src/views/produtos/batatas.jpg",
        "itens": [
            { nome: "Batatas", quantidade: "200g" },
            { nome: "Sal", quantidade: "5g" },
            { nome: "Pimenta", quantidade: "2g" }
        ]
    },
    {
        "id": 4,
        "descricao": "Sushi Combo Especial",
        "valor": 24.99,
        "desconto_percentual": 8,
        "estrelas": 4.7,
        "favorito": false,
        "imagem": "./src/views/produtos/sushi.jpg",
        "itens": [
            { nome: "Salmão", quantidade: "150g" },
            { nome: "Arroz de Sushi", quantidade: "200g" },
            { nome: "Alga Nori", quantidade: "10 folhas" }
        ]
    },
    {
        "id": 5,
        "descricao": "Salada Caesar",
        "valor": 8.99,
        "desconto_percentual": 5,
        "estrelas": 4.0,
        "favorito": false,
        "imagem": "./src/views/produtos/salada.jpg",
        "itens": [
            { nome: "Alface", quantidade: "100g" },
            { nome: "Frango Grelhado", quantidade: "150g" },
            { nome: "Croutons", quantidade: "30g" },
            { nome: "Molho Caesar", quantidade: "20ml" }
        ]
    },
    {
        "id": 6,
        "descricao": "Taco de Carne",
        "valor": 11.99,
        "desconto_percentual": 17,
        "estrelas": 4.3,
        "favorito": true,
        "imagem": "./src/views/produtos/taco.jpg",
        "itens": [
            { nome: "Carne Moída", quantidade: "100g" },
            { nome: "Tortillas de Milho", quantidade: "4 unidades" },
            { nome: "Abacate", quantidade: "100g" },
            { nome: "Salsa", quantidade: "50g" }
        ]
    },
    {
        "id": 7,
        "descricao": "Frango Grelhado com Legumes",
        "valor": 12.99,
        "desconto_percentual": 12,
        "estrelas": 4.1,
        "favorito": false,
        "imagem": "./src/views/produtos/frango.jpg",
        "itens": [
            { nome: "Peito de Frango", quantidade: "200g" },
            { nome: "Abobrinha", quantidade: "150g" },
            { nome: "Pimentões", quantidade: "100g" },
            { nome: "Azeite de Oliva", quantidade: "30ml" }
        ]
    },
    {
        "id": 8,
        "descricao": "Massa à Carbonara",
        "valor": 15.99,
        "desconto_percentual": 9,
        "estrelas": 4.6,
        "favorito": true,
        "imagem": "./src/views/produtos/massa.jpg",
        "itens": [
            { nome: "Massa Spaghetti", quantidade: "200g" },
            { nome: "Ovos", quantidade: "2 unidades" },
            { nome: "Queijo Parmesão", quantidade: "50g" },
            { nome: "Pancetta", quantidade: "100g" }
        ]
    },
    {
        "id": 9,
        "descricao": "Smoothie de Frutas Tropicais",
        "valor": 6.99,
        "desconto_percentual": 19,
        "estrelas": 4.4,
        "favorito": true,
        "imagem": "./src/views/produtos/smoothie.jpg",
        "itens": [
            { nome: "Banana", quantidade: "1 unidade" },
            { nome: "Manga", quantidade: "100g" },
            { nome: "Abacaxi", quantidade: "100g" },
            { nome: "Iogurte", quantidade: "150ml" }
        ]
    },
    {
        "id": 10,
        "descricao": "Sanduíche Vegetariano",
        "valor": 10.99,
        "desconto_percentual": 6,
        "estrelas": 4.3,
        "favorito": false,
        "imagem": "./src/views/produtos/sanduiche.jpg",
        "itens": [
            { nome: "Pão Integral", quantidade: "2 fatias" },
            { nome: "Alface", quantidade: "50g" },
            { nome: "Tomate", quantidade: "50g" },
            { nome: "Queijo Suíço", quantidade: "30g" }
        ]
    },
    {
        "id": 11,
        "descricao": "Sorvete de Chocolate",
        "valor": 5.99,
        "desconto_percentual": 13,
        "estrelas": 4.8,
        "favorito": true,
        "imagem": "./src/views/produtos/sorvete.jpg",
        "itens": [
            { nome: "Sorvete de Chocolate", quantidade: "100g" },
            { nome: "Calda de Chocolate", quantidade: "50ml" },
            { nome: "Granulado", quantidade: "20g" }
        ]
    },
    {
        "id": 12,
        "descricao": "Café Expresso",
        "valor": 2.99,
        "desconto_percentual": 4,
        "estrelas": 4.0,
        "favorito": false,
        "imagem": "./src/views/produtos/cafe.jpg",
        "itens": [
            { nome: "Café Moído", quantidade: "10g" },
            { nome: "Água Quente", quantidade: "30ml" }
        ]
    }
];

var whatsappJson = {
    "celular": "989940869",
    "mensagem": "Ol%C3%A1%20quero%20comprar%20o%20produto"
}


function createProductCard(product) {
    var productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
    <div class="product-card-rating">
    <div class="product-card-desc">
        <p class="product-card-desc-title">${product.desconto_percentual}% Off</p>
    </div>

    <style>
        .heart-icon {
            cursor: pointer;
            color: ${product.favorito ? 'red' : '#ccc'}; /* Defina a cor com base no estado do favorito */
        }
    </style>

    <div class="heart-icon" onclick="toggleFavorite(${product.id})">
        &#10084; <!-- Código HTML para um coração -->
    </div>

</div>
        
          
        
        </div>
        <img src="${product.imagem}" alt="${product.descricao}">
        <div class="star-rating">${getStarRatingHTML(product.estrelas)}</div>
        <div class="product-card-button">
            <div class="product-price-title">
                <h3 class="product-name">${product.descricao}</h3>
                <div class="product-price-div">
                    <strong class="product-price-dolar">R$</strong>
                    <strong class="product-price"> ${product.valor.toFixed(2)}</strong>
                </div>
            </div>
            <div class="product-button">
                <div class="product-items-list"> <!-- Div para exibir os itens -->
                    <p class="product-items-title">Itens do produto:</p>
                    <ul class="product-items">
                        ${product.itens.map(item => `<li>${item.nome}: ${item.quantidade}</li>`).join('')}
                    </ul>
                </div>
                <a href="https://api.whatsapp.com/send?phone=${whatsappJson.celular}&text=${whatsappJson.mensagem}: ${product.descricao}" class="chat"><i class="fa fa-comment-o" aria-hidden="true"></i></a>
                <button onclick='adicionar_carrinho(${JSON.stringify(product)})' class="add-to-cart"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        </div>
    `;

    return productCard;
}
let favoritos = [];

function toggleFavorite(productId) {
    const product = produtosJSON.find(p => p.id === productId);
    const index = favoritos.indexOf(product.id);

    if (index !== -1) {
        // Remova dos favoritos
        favoritos.splice(index, 1);
    } else {
        // Adicione aos favoritos
        favoritos.push(product.id);
    }

    updateFavoriteState(); // Atualize o estado de favoritos para todos os produtos
}

function updateFavoriteState() {
    const heartIcons = document.querySelectorAll('.heart-icon');

    produtosJSON.forEach((product, index) => {
        const heartIcon = heartIcons[index];
        const isFavorite = favoritos.includes(product.id);

        heartIcon.style.color = isFavorite ? 'red' : '#ccc';
    });
}

function getStarRatingHTML(rating) {
    var numberOfStars = Math.round(rating);
    var starHTML = '';
    for (var i = 0; i < numberOfStars; i++) {
        starHTML += '<span class="star">★</span>';
    }
    return starHTML;
}

function displayProducts() {
    var productGrid = document.getElementById('produto-grid');

    produtosJSON.forEach(function (product) {
        var productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

window.addEventListener('load', displayProducts);