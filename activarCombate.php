<?php

include 'dbconnect.php';

session_start();

        $username = 1;

            
        $sql = "UPDATE tbl_contienda SET combate_activado=1 WHERE activar_contienda=1";
        $consulta = $connection->prepare($sql);
        $result = $consulta->execute();

?>