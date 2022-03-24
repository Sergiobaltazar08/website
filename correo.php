<?php
	
if(isset($_POST['enviar'])){

	if(!isset($_POST['nombre']) && !isset($_POST['emal']) && !isset($_POST['asunto'])&&!isset($_POST['msg'])){
		$nombre=$_POST['nombre'];
		$emal=$_POST['emil'];
		$asunto=$_POST['asunto'];
		$msg=$_POST['msg'];
		$destinatario = 'baltazarsergiodavid@gmail.com';
		$header = "Enviado desde la pagina de B M S D" ."\r\n";
		$mensajeCompleto = $msg ."\nAtentamente: ". $nombre
		mail($destinatario, $asunto, $mensajeCompleto, $header);
		echo "<script>alert('Correo enviado exitosamente')</script>";
		echo "<script>m_setTimeout(\"location.href='index.html'\", 1000)</script>";
	}
}
?>