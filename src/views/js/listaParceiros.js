var parceirosJSON = [
    {
        "nome": "Crocants Pastelaria",
        "imagem": "./src/views/img2/logo_v1628362244.jpeg"
    },
    {
        "nome": "Mc Donalds",
        "imagem": "./src/views/img2/100.png"
    },
    {
        "nome": "Giraffas",
        "imagem": "./src/views/img2/101.png"
    },
    {
        "nome": "Bobs",
        "imagem": "./src/views/img2/102.png"
    },
    {
        "nome": "Boi e Brasa",
        "imagem": "./src/views/img2/103.jpg"
    },
    {
        "nome": "Rei das Coxinhas",
        "imagem": "./src/views/img2/104.png"
    },
    {
        "nome": "Pai e Filho",
        "imagem": "./src/views/img2/60.jpg"
    }
];

function carregarParceiros() {
    const productGrid = document.getElementById('parceiro-grid');
    parceirosJSON.forEach(parceiro => {
        const card = criarCardParceiro(parceiro);
        productGrid.appendChild(card);
    });
}

function criarCardParceiro(parceiro) {
    const card = document.createElement('div');
    card.className = 'small-image';

    const link = document.createElement('a');
    link.href = parceiro.imagem;
    link.target = '_blank';

    const imagem = document.createElement('img');
    imagem.style.borderRadius = '15%';
    imagem.src = parceiro.imagem;
    imagem.alt = parceiro.nome;
    imagem.width = 200;
    imagem.height = 150;

    const temas = document.createElement('div');
    temas.className = 'temas';
    temas.innerHTML = `<p>${parceiro.nome}</p>`;

    link.appendChild(imagem);
    card.appendChild(link);
    card.appendChild(temas);

    return card;
}

window.addEventListener('load', carregarParceiros);
