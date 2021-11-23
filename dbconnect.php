<?php
/*
$servername = "localhost";
$database = "a5678s5f_coliseum";
$username = "a5678s5f";
$password = 'tI$B5Cf4+#4#';
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    echo '';
}
mysqli_close($conn);
*/

define('USER', 'a5678s5f');
define('PASSWORD', 'tI$B5Cf4+#4#');
define('HOST', 'localhost');
define('DATABASE', 'a5678s5f_coliseum');
 
try {
    $connection = new PDO("mysql:host=".HOST.";dbname=".DATABASE, USER, PASSWORD);
} catch (PDOException $e) {
    exit("Error: " . $e->getMessage());
}
?>