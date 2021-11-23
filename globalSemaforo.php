<?php
    session_start();

    $semaforo = array('semaforo' => $_SESSION['semaforo_user'],
                      'tipoUser' => $_SESSION['tipo_user']);
    echo json_encode($semaforo);
?>