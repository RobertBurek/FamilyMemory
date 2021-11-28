<?php

    $result = sprintf("%01.3f", $_POST["result"]);
    $level = $_POST["level"];
    $name = stripslashes(trim($_POST["name"]));

        // header("Location: http://localhost/FamilyMemory/index.php");
        header("Location: http://localhost/FamilyMemory/memoryPlay.php");
        $level = $_POST["lista"];


    $name_file = 'results.txt';
    $default_file = 'defaultResults.php';
    $results = [];
    $thisLevel = false;
    $thisLevel = false;
    $changePlayer = false;
    $afterChange = false;
    $nextResult = 0;
    if (file_exists($name_file)) {
        $fp = fopen($name_file, "rb");
        while(!feof($fp)) 
        {
           $line = substr(fgets($fp), 0, -1);
           if ($line == $level) {
               $thisLevel = true;
            //    $nextResult = 0;
           }
           if ($thisLevel) {
               if (($nextResult > 2) && ($nextResult % 2 == 1) && ($nextResult <= 22)) {
                    if ($result <= $line && !$changePlayer) {
                        array_push($results, $result);
                        array_push($results, $name);
                        // $afterChange = true;
                        $changePlayer = true;
                    }
               }
            //    if (($nextResult > 4) && ($nextResult % 2 == 0) && ($nextResult < 23)) {
            //         if ($changePlayer && !$afterChange) {
            //         array_push($results, $name);
            //         $changePlayer = false;
            //         !$afterChange = true;
            //         };
            //     }
            //    ++$nextResult;
               array_push($results, $line);
               if ($changePlayer && $nextResult == 22) {
                   array_pop($results);
                   array_pop($results);
               };
            //    if ($nextResult < 21) array_push($results, $line);
               if ($nextResult == 22) $thisLevel = false;
               ++$nextResult;
           } else array_push($results, $line);
        //    if ($thisLevel && ($nextResult == 22 || $nextResult == 23)) {
            // if (!$thisLevel)// && ($nextResult == 22 || $nextResult == 23)) {
            //  array_push($results, $line);
        //    } else array_push($results, $line);
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
    $f=fopen("results.txt", "a");
    ftruncate($f, 0);
    fputs($f, $tresc);
    fclose($f);

    // header("Location: http://localhost/FamilyMemory/index.php");
//   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
}
//   $f=fopen("testResults.txt", "a");
//   fputs($f, $results);
//   fclose($f);
// //   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
// }
?>