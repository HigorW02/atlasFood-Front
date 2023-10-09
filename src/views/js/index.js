
const list = document.querySelectorAll('.list');


function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));


if (autenticacaoBemSucedida) {
    const username = 'NomeDoUsuario'; // Substitua pelo nome de usuário real obtido após a autenticação
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = username;
  }