<?php
// session_start();
// $name = $_POST["name"];
// echo 'zrobione '.$name.'<br/>';
// var_dump($_SESSION["results"]);
    $name_file = 'results.txt';
    $default_file = 'defaultResults.php';
    $results = [];
    if (file_exists($name_file)) {
        $fp = fopen($name_file, "rb");
        while(!feof($fp)) 
        {
           $line = substr(fgets($fp), 0, -1);
           array_push($results, $line);
        };
        fclose($fp);
        unset($results[count($results)-1]);
    }
    else{
    //   echo 'Nie znaleziono pliku!';
    //   require_once $default_file;
    }



$result = stripslashes(trim($_POST["result"]));
$level = stripslashes(trim($_POST["level"]));
$name = $_POST["name"];
echo json_encode($results);

// if ($result<>"" && $level<>"") {
//   $tresc="$result - $level\n";
//   $tresc=$tresc.$name."\n";
//   $f=fopen("results.txt", "a");
//   fputs($f, $tresc);
//   fclose($f);
// //   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
// }
?>