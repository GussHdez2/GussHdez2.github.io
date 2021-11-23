<?php

include 'dbconnect.php';

session_start();

        $username = 1;
        $puntos = $_POST['puntosAzul'];
            
        $sql = "UPDATE tbl_contienda SET puntos_azul='$puntos' WHERE activar_contienda=1";
        $consulta = $connection->prepare($sql);
        $result = $consulta->execute();
            


?>