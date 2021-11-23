<?php

include 'dbconnect.php';

session_start();

    $contienda;
    $contienda2;

    $sql = "SELECT id_contienda,competidor1_contienda,competidor2_contienda FROM tbl_contienda";
    $result =  $connection->query($sql);
    
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        $contienda2 = array($row['id_contienda'],$row['competidor1_contienda'],$row['competidor2_contienda']);
        $contienda .= array($contienda2);
      }

      echo json_encode($contienda);
    } else {
      echo "0 results";
    }
                    


?>