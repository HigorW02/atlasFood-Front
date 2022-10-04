<?php

$HOST = "127.0.0.1";
$USER = "root";
$PASS = "";
$DB = "atlas";

$connection = mysqli_connect($HOST, $USER, $PASS, $DB);

if (!$connection) {
    echo "Falha na conexão, tente novamente mais tarde!";
}

?>