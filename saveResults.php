<?php
session_start();
$name = $_POST["name"];
echo 'zrobione '.$name.'<br/>';
var_dump($_SESSION['resultsDog12']);

?>