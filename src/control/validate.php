<?php

require("./connection.php");
session_start();

if (empty($_POST['email']) || empty($_POST['senha'])) {
    $_SESSION['campo_vazio'] = true;
    header("Location: ../views/sign.php");
    exit();
}

$email = mysqli_real_escape_string($connection, ($_POST['email']));
$senha = mysqli_real_escape_string($connection, ($_POST['senha']));

$select = "select count(*) as users from usuario where email = '$email' AND senha = md5('$senha')";
$query = mysqli_query($connection, $select);
$result = mysqli_fetch_array($query);

if ($result['users'] == 1) {
    $_SESSION['usuario'] = $nome;
    header('Location: ../../index.php');
    exit();
} else {
    $_SESSION['usuario_invalido'] = true;
    header('Location: ../views/sign.php');
    exit();
}


?>
