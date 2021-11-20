<?php
// session_start();
// $name = $_POST["name"];
// echo 'zrobione '.$name.'<br/>';
// var_dump($_SESSION['resultsDog12']);




$result = stripslashes(trim($_POST["result"]));
$level = stripslashes(trim($_POST["level"]));
$name = $_POST["name"];
echo 'zrobione '.$name.'<br/>';

if ($result<>"" && $level<>"") {
  $tresc="$result - $level\n";
  $tresc=$tresc.$name."\n";
  $f=fopen("results.txt", "a");
  fputs($f, $tresc);
  fclose($f);
//   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
}
?>