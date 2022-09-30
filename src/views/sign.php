<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="./css/forms.css">
    <title>Document</title>
</head>

<body>
    
    <div class="container">
        <div class="forms">
            <div class="form login">
                <span class="title">Login</span>

                <form action="#" method="POST">
                    <div class="input-field">
                        <input type="text" placeholder="Digite seu e-mail" name="email" id="email" required>
                        <i class="uil uil-envelope-alt icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="senha" placeholder="Digite sua senha" name="senha" id="senha_login" required>
                        <i class="uil uil-padlock icon"></i>
                        <i class="uil uil-eye-slash showHiddenPass" onclick="show_password()"></i>
                    </div>

                    <div class="button">
                        <input type="submit" value="Entrar">
                    </div>
                </form>

                <div class="login_cadastro">
                    <span class="text">Não tem conta?
                        <a href="#" class="text cadsatro_link" onclick="change_form()">Cadastre-se</a>
                    </span>
                </div>
            </div>

            <div class="form cadastro">
                <span class="title">Cadastro</span>

                <form action="#" method="POST">
                    <div class="input-field">
                        <input type="text" placeholder="Digite seu nome" name="nome" required>
                        <i class="uil uil-user icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="email" placeholder="Digite seu e-mail" name="email" required>
                        <i class="uil uil-envelope-alt icon"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="senha" placeholder="Digite sua senha" name="senha" id="senha_cadastro" required>
                        <i class="uil uil-padlock icon"></i>
                    </div>

                    <div class="input-field">
                        <input type="password" class="senha" placeholder="Confirme sua senha" name="confirma_senha" id="confirma_senha" required>
                        <i class="uil uil-padlock icon"></i>
                        <i class="uil uil-eye-slash showHiddenPass" onclick="show_password()"></i>
                    </div>

                    <div class="button">
                        <input type="submit" value="Cadastrar">
                    </div>
                </form>

                <div class="login_cadastro">
                    <span class="text">Já tem conta?
                        <a href="#" class="text login_link" onclick="change_form()">Entre na sua conta</a>
                    </span>
                </div>
            </div>
        </div>
    </div>


    <script src="./js/forms.js"></script>
</body>

</html>