<?php

include 'dbconnect.php';

session_start();

    $username = 1;

    $query = $connection->prepare("SELECT * FROM tbl_contienda WHERE activar_contienda=:username");
    $query->bindParam("username", $username, PDO::PARAM_STR);
    $query->execute();
    
    $result = $query->fetch(PDO::FETCH_ASSOC);
    
    if (!$result){
        echo '<p class="error">No hay contiendas activas. Un momento porfavor...</p>';
    } else{
        
        $combate = array('puntajeRojo' => $result['puntos_rojo'],
                        'puntajeAzul' => $result['puntos_azul'],
                        'combateActivado' => $result['combate_activado']);
                        
        echo json_encode($combate);
         
        
    }

?>