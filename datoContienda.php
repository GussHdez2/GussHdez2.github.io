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
        
        $contienda = array('idContienda' => $result['id_contienda'],
                        'numeroContienda' => $result['numero_contienda'],
                        'idGrafica' => $result['tbl_grafica_id_grafica'],
                        'competidor1Contienda' => $result['competidor1_contienda'],
                        'competidor2contienda' => $result['competidor2_contienda'],
                        'colorCompetidor1Contienda' => $result['color_competidor1_contienda'],
                        'colorCompetidor2Contienda' => $result['color_competidor1_contienda'],
                        'juez1Contienda' => $result['juez1_contienda'],
                        'juez1VotoContienda' => $result['juez1_voto_contienda'],
                        'juez2Contienda' => $result['juez2_contienda'],
                        'juez2VotoContienda' => $result['juez2_voto_contienda'],
                        'juez3Contienda' => $result['juez3_contienda'],
                        'juez3VotoContienda' => $result['juez3_voto_contienda'],
                        'activarVideo' => $result['activar_video'],
                        'urlVideoRojo' => $result['url_video_rojo'],
                        'urlVideoAzul' => $result['url_video_azul'],
                        'mostrarVideo' => $result['mostrar_video'],
                        'tipoContienda' => $result['tipo_contienda'],
                        'combateActivado' => $result['combate_activado']);
                        
        echo json_encode($contienda);
        
        $_SESSION['juez1Nombre'] = $result['juez1_contienda'];
        $_SESSION['juez2Nombre'] = $result['juez2_contienda'];
        $_SESSION['juez3Nombre'] = $result['juez3_contienda'];
         
        
    }

?>