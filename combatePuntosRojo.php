<?php

include 'dbconnect.php';

session_start();

        $username = 1;
        $puntos = $_POST['puntosRojo'];
            
        $sql = "UPDATE tbl_contienda SET puntos_rojo='$puntos' WHERE activar_contienda=1";
        $consulta = $connection->prepare($sql);
        $result = $consulta->execute();
            


?>