var parceirosJSON = [
    {
        "nome": "Crocants Pastelaria",
        "imagem": "./src/views/img2/logo_v1628362244.jpeg",
        "link": "./parceiros/CrocantsPastelaria.html"
    },
    {
        "nome": "Mc Donalds",
        "imagem": "./src/views/img2/100.png",
        "link": "./parceiros/mcdonalds.html"
    },
    {
        "nome": "Giraffas",
        "imagem": "./src/views/img2/101.png",
        "link": "./parceiros/giraffas.html"
    },
    {
        "nome": "Bobs",
        "imagem": "./src/views/img2/102.png",
        "link": "./parceiros/Bobs.html"
    },
    {
        "nome": "Boi e Brasa",
        "imagem": "./src/views/img2/103.jpg",
        "link": "./parceiros/Boi_e_Brasa.html"
    },
    {
        "nome": "Rei das Coxinhas",
        "imagem": "./src/views/img2/104.png",
        "link": "./parceiros/Rei_das_Coxinhas.html"
    },
    {
        "nome": "Pai e Filho",
        "imagem": "./src/views/img2/60.jpg",
        "link": "./parceiros/Pai_e_Filho.html"
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
    link.href = parceiro.link;
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
