<?php

require("connection.php");
session_start();

$nome = mysqli_real_escape_string($connection, trim($_POST['nome']));
$email = mysqli_real_escape_string($connection, trim($_POST['email']));
$senha = mysqli_real_escape_string($connection, trim($_POST['senha']));
$confirma_senha = mysqli_real_escape_string($connection, trim($_POST['confirma_senha']));



if (empty($nome) || empty($email) || empty($senha) || empty($confirma_senha)){
    $_SESSION['campo_vazio'] = true;
    header('Location: ../views/sign.php');

} elseif ($senha != $confirma_senha) {
    $_SESSION['senha_inválida'] = true;
    header('Location: ../views/sign.php');

} else {
    $select = "SELECT COUNT(*) AS users FROM usuario WHERE email = '$email'";
    $query_select = mysqli_query($connection, $select);
    $result = mysqli_fetch_row($query_select);

    if ($result['users'] == 1) {
        $_SESSION['usuario_existe'] = true;
        header('Location: ../views/sign.php');
        exit();

    } else {

        $insert = "INSERT INTO usuario (nome, email, senha) VALUES ('$nome', '$email', md5('$senha'))";
        $query_insert = mysqli_query($connection, $insert) or die ("ERRO ". mysqli_error($connection));

        $_SESSION['cadastro_realizado'] = true;
        header('Location: ../views/sign.php');
        exit();
    }
}