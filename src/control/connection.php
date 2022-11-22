<?php

require("./config/config.php")


$connection = mysqli_connect($HOST, $USER, $PASSWORD, $DATABASE);

if (!$connection) {
    echo "Falha na conexão, tente novamente mais tarde!";
}

?>