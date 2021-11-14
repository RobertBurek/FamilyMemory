<?php
	session_start();
			// $_SESSION['nazwapliku']=$nazwStr; 

$data = array('imie' => 'Jan', 'nazwisko' => 'Kowalski');
// echo json_encode($data);
$_SESSION['dane']=$data;

?>

