<?php
/*	Recopilo los datos vía POST	Con strip_tags suprimo etiquetas HTML y php para evitar una posible inyección.	Como no gestiona base de datos no es necesario limpiar de inyección SQL.*/
$nombre = $_POST['name'];
$correo = $_POST['mail'];
$pais = $_POST['pais'];
$dojang = $_POST['dojang'];
$numero = $_POST['numero'];
$grado = $_POST['grado'];
$categorias = $_POST['categorias'];
$instructor = $_POST['instructor'];

//Correo de destino; donde se enviará el correo.
$correoDestino = 'sonbaegumdo@hotmail.com'. ', ';
$correoDestino .= 'project.codiac@gmail.com';

//Texto emisor; sólo lo leerá quien reciba el contenido.
$textoEmisor = "MIME-VERSION: 1.0\r\n";
$textoEmisor .= "Content-type: text/html; charset=UTF-8\r\n";
$textoEmisor .= "From: snb-coliseum.com";

//Headers del correo electrónico.
$headers =
	'From: ' . $correoDestino . "\r\n". 
	'Reply-To: ' . $correo. "\r\n" . 
	'X-Mailer: PHP/' . phpversion() .
	'MIME-Version: 1.0\r\n'.
	'Content-type: text/html; charset=UTF-8\r\n';

//Formateo el asunto del correo
$asunto = "Sign up completed: ".$nombre;
//Formateo el cuerpo del correo
$cuerpo = "<b>You have been succesfully sign up to Sonbae Coliseum.</b><br><br>\n".
          "<table>".
          "<tr><td>Name</td><td>".$nombre."</td></tr>".
          "<tr><td>Country</td><td>".$pais."</td></tr>".
          "<tr><td>Dojang</td><td>".$dojang."</td></tr>".
          "<tr><td>Phone number</td><td>".$numero."</td></tr>".
          "<tr><td>Grade</td><td>".$grado."</td></tr>".
          "<tr><td>Cathegories</td><td>".$categorias."</td></tr>".
          "<tr><td>Instructor</td><td>".$instructor."</td></tr>".
          "</table>".
          "";

// Envío el mensaje
mail( $correoDestino, $asunto, $cuerpo, $textoEmisor);

?>