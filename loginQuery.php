<?php

include 'dbconnect.php';

session_start();

if (isset($_POST['loginBtn'])) {

    $username = $_POST['UserName'];
    $password = $_POST['UserPass'];
    
    $query = $connection->prepare("SELECT * FROM tbl_competidor WHERE nombre_competidor=:username");
    
    $query->bindParam("username", $username, PDO::PARAM_STR);
    $query->execute();
    
    $result = $query->fetch(PDO::FETCH_ASSOC);
    
    if (!$result){
        echo '<p class="error">Username is wrong!</p>';
    } else{
        if ($password == $result['clave_competidor']){
            $_SESSION['user_id'] = $result['id_competidor'];
            $_SESSION['tipo_user'] = $result['tipo_competidor'];
            $_SESSION['nombre_user'] = $result['nombre_competidor'];
            $_SESSION['edad_user'] = $result['edad_competidor'];
            $_SESSION['grado_user'] = $result['grado_competidor'];
            $_SESSION['modalidad_user'] = $result['modalidad_competidor'];
            $_SESSION['categoria_user'] = $result['categoria_competidor'];
            $_SESSION['pais_user'] = $result['pais_competidor'];
            $_SESSION['dojang_user'] = $result['dojang_competidor'];
            $_SESSION['maestro_user'] = $result['maestro_competidor'];
            $_SESSION['grafica_user'] = $result['grafica_competidor'];
            $_SESSION['contienda_user'] = $result['contienda_competidor'];
            $_SESSION['semaforo_user'] = $result['semaforo_competidor'];
            
            
            /*
            if ($_SESSION['tipo_user'] == "competidor"){
                header('Location: lobby.php');
            } else if ($_SESSION['tipo_user'] == "juez") {
                header('Location: stage_judges.php');
            }
            */
            if ($_SESSION['tipo_user'] == "juez") {
                
                $_SESSION['numeroJuez'] = (int)$result['numero_juez'];

                    if ($_SESSION['numeroJuez'] == 1){
                        $sql = "UPDATE tbl_contienda SET juez1_contienda=:nombrejuez WHERE activar_contienda=1";
                        
                        $consulta = $connection->prepare($sql);
                        $consulta->bindParam("nombrejuez", $_SESSION['nombre_user'], PDO::PARAM_STR);
                        $consulta->execute();

                    } else if ($_SESSION['numeroJuez'] == 2){

                        $sql = "UPDATE tbl_contienda SET juez2_contienda=:nombrejuez WHERE activar_contienda=1";
                        
                        $consulta = $connection->prepare($sql);
                        $consulta->bindParam("nombrejuez", $_SESSION['nombre_user'], PDO::PARAM_STR);
                        $consulta->execute();

                    } else if ($_SESSION['numeroJuez'] == 3){
                        
                        $sql = "UPDATE tbl_contienda SET juez3_contienda=:nombrejuez WHERE activar_contienda=1";
                        
                        $consulta = $connection->prepare($sql);
                        $consulta->bindParam("nombrejuez", $_SESSION['nombre_user'], PDO::PARAM_STR);
                        $consulta->execute();
                    } 
                        
                }

            header('Location: stage_guest.php');
        } else {
           echo '<p class="error">Password is wrong!</p>'; 
        }
    }
}

if (isset($_POST['guestBtn'])) {

    $_SESSION['tipo_user'] = "guest";
    header('Location: stage_guest.php');

}

?>