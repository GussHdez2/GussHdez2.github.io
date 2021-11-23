<?php

include 'dbconnect.php';

session_start();

        $username = 1;

        if ($_SESSION['juez1Nombre'] == $_SESSION['nombre_user']){

            $sql = "UPDATE tbl_contienda SET juez1_voto_contienda='rojo' WHERE activar_contienda=1";
            $consulta = $connection->prepare($sql);
            $result = $consulta->execute();
            
        } else if ($_SESSION['juez2Nombre'] == $_SESSION['nombre_user']){
            
            $sql = "UPDATE tbl_contienda SET juez2_voto_contienda='rojo' WHERE activar_contienda=1";
            $consulta = $connection->prepare($sql);
            $result = $consulta->execute();
            
        } else if ($_SESSION['juez3Nombre'] == $_SESSION['nombre_user']){
            
            $sql = "UPDATE tbl_contienda SET juez3_voto_contienda='rojo' WHERE activar_contienda=1";
            $consulta = $connection->prepare($sql);
            $result = $consulta->execute();
            
        }

?>