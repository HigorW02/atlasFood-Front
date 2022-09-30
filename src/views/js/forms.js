const container = document.querySelector('.container'),
    senhas = document.querySelectorAll('.senha'),
    icones = document.querySelectorAll('.showHiddenPass'),
    login_link = document.querySelector('.login_link'),
    cadastro_link = document.querySelector('.cadastro_link');


// Função para mostrar a senha ao apertar no ícone de visualizar senha \\
function show_password() {
    for (const senha of senhas) {
        if (senha.type == "password") {
            senha.setAttribute("type", "text");
            change_icon();

            //Deixa de mostrar a senha depois de 15 segundos \\
            setTimeout(() => {
                senha.setAttribute("type", "password");
                change_icon();
            }, 15000);

        } else {
            senha.setAttribute("type", "password");
            change_icon();
        }

        // Função para mudar ícone de visualizar senha \\
        function change_icon() {
            for (const icon of icones) {
                if (senha.type == "text") {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                } else {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                }
            }
        }
    }
}

function change_form() {
    if (container.classList == "container") {
        container.classList.add("active");
    } else {
        container.classList.remove("active");
    }
}

// cadastro_link.addEventListener("click", ( )=>{
//     container.classList.add("active");
// });
// login_link.addEventListener("click", ( )=>{
//     container.classList.remove("active");
// });


