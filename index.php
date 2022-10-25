<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/views/css/index.css">
    <link rel="shortcut icon" href="src/views/img/logoAtlasFood.jpeg" type="image/x-icon">
    <title>AtlasFood-Inicio</title>
</head>

<body>
    <div class="cabecalho">
        <header>
            <h2 class="titulo">AtlasFood</h2>
            <div class="logo">
                <img src="src/views/img/logoAtlasFood.jpeg" alt="" class="" height="89px" >
            </div>
            <button class="login">
                <a href="src/views/sign.php">Entrar</a>
            </button>
        </header>
    </div>

    <div class="navBar">
        <div class="navLink">
            <p><a href="./index.html">Inicio</a></p>
            <p><a href="src/views/restaurante.html">Restaurantes</a></p>
            <p><a href="">Sobre nós</a></p>
        </div>
    </div>
    
    <main class="corpo">
        <div class="carrossel">
            <div class="container" id="img">
                <img src="src/views/img/carrocel1.webp" alt="">
                <img src="src/views/img/carrocel2.webp" alt="">
                <img src="src/views/img/carrocel3.jpg" alt="">
                <img src="src/views/img/carrocel4.jpg" alt="">
                <img src="src/views/img/carrocel5.webp" alt="">
            </div>
        </div>

        <div class="navigation">
        <ul>
            <li class="list active">
                <a href="#">
                    <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span class="title">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="restaurant-outline"></ion-icon></span>
                    <span class="title">Restaurante</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                    <span class="title">Usuario</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                    <span class="title">Mensagens</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="trending-up-outline"></ion-icon></ion-icon></span>
                    <span class="title">Dados</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="help-circle-outline"></ion-icon></ion-icon></span>
                    <span class="title">Ajuda</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                    <span class="title">Sair</span>
                </a>
            </li>
        </ul>
    </div>
    <script  type = "module"  src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" > </script> 
    <script  nomodule  src = "https://unpkg .com/ionicons@5.5.2/dist/ionicons/ionicons.js" > </script>
    
    <script>
        const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click', activeLink));
    </script>

<!--
        <div class="linha1">
            <div class="card">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>

            <div class="card">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>

            <div class="card">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>
        </div>

        <div class="linha2">
            <div class="card">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>

            <div class="card">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>

            <div class="card">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>
        </div>
    </main>
    <hr>

    <footer class="rodape">
        <img src="src/views/img/footer1.jpg" alt="">
        <a href="">
            <img src="src/views/img/footer2.webp" alt="">
        </a>
        <a href="">
            <img src="src/views/img/footer3.png" alt="">
        </a>
    </footer>
-->
   <script src="src/views/js/index.js" defer></script>
</body>

</html>