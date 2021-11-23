<?php

include 'dbconnect.php';

session_start();
            
        $sql = "UPDATE tbl_contienda SET juez1_voto_contienda='',juez2_voto_contienda='',juez3_voto_contienda='' WHERE activar_contienda=1";
        $consulta = $connection->prepare($sql);
        $result = $consulta->execute();
            


?>