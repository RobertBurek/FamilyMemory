<?php
// session_start();
// $name = $_POST["name"];
// echo 'zrobione '.$name.'<br/>';
// var_dump($_SESSION["results"]);

$result = $_POST["result"];
$level = $_POST["level"];
$name = stripslashes(trim($_POST["name"]));

    $name_file = 'results.txt';
    $default_file = 'defaultResults.php';
    $results = [];
    $thisLevel = false;
    $thisLevel = false;
    $changePlayer = false;
    if (file_exists($name_file)) {
        $fp = fopen($name_file, "rb");
        while(!feof($fp)) 
        {
           $line = substr(fgets($fp), 0, -1);
           if ($line === "".$level) {
               $thisLevel = true;
               $nextResult = 0;
           }
           if ($thisLevel) {
               if (($nextResult > 4) && ($nextResult % 2 == 1) && ($nextResult < 21)) {
                    if ($result <= $line && !$changePlayer) {
                        $line = $result;
                        $changePlayer = true;
                    }
               }
               if (($nextResult > 4) && ($nextResult % 2 == 0) && ($nextResult < 21)) {
                if ($changePlayer) {
                    $line = $name;
                    $changePlayer = false;
                }
           }
               ++$nextResult;
           }
           if ($thisLevel && ($nextResult==21||$nextResult==22)) {

           } else array_push($results, $line);
        };
        fclose($fp);
        unset($results[count($results)-1]);
    }
    else{
    //   echo 'Nie znaleziono pliku!';
    //   require_once $default_file;
    }



// $result = $_POST["result"];
// $level = $_POST["level"];
// $name = stripslashes(trim($_POST["name"]));
// echo json_encode($results);

// if ($result<>"" && $level<>"") {
//   $tresc="$result - $level\n";
//   $tresc=$tresc.$name."\n";
$tresc = "";
if ($results<>"") {
    foreach ($results as $result) {
        // if ($result === 'Kasia') $tresc = $tresc."Katarzyna\n";
        // else 
        $tresc = $tresc.$result."\n";
        // if ($result === 'cardsCatAll18') {
            // $.'cardsCatAll18'='to jest to';
            // echo $.'cardsCatAll18';
            // define('STALA', array('ergerg'));
            // echo STALA[0];
        // }
    }
//   $tresc="$result - $level\n";
//   $tresc=$tresc.$name."\n";
    $f=fopen("testResults.txt", "a");
    ftruncate($f, 0);
    fputs($f, $tresc);
    fclose($f);
//   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
}
//   $f=fopen("testResults.txt", "a");
//   fputs($f, $results);
//   fclose($f);
// //   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
// }
?>