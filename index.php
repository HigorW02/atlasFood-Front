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
    <!-- Chamando o código do Cabeçaho da página! -->
    <?php
    require("./src/views/templates/cabecalho.html");
    ?>
    
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

        <!-- Chamando o código do Menu Lateral -->
        <?php
        require_once("./src/views/templates/menu.html");
        ?>
    </main>
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
    <script  type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script> 
    <script  nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="src/views/js/index.js" defer></script>
</body>

</html>