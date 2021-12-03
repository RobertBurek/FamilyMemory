<?php
    $result = sprintf("%01.3f", $_POST["result"]);
    $level = $_POST["level"];
    $name = stripslashes(trim($_POST["name"]));

    // header("Location: http://localhost/MemoryPHP/index.php");
    header("Location: http://localhost/MemoryPHP/memoryPlay.php");
    // $level = $_POST["lista"];

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
        while(!feof($fp)) {
            $line = str_replace("\n", "", fgets($fp));
            $line = str_replace("\r", "", $line);
           if ($line == $level) {
               $thisLevel = true;
           };
           if ($thisLevel) {
               if (($nextResult > 2) && ($nextResult % 2 == 1) && ($nextResult <= 22)) {
                    if ($result <= $line && !$changePlayer) {
                        array_push($results, $result);
                        array_push($results, $name);
                        $changePlayer = true;
                    }
               }
               array_push($results, $line);
               if ($changePlayer && $nextResult == 22) {
                   array_pop($results);
                   array_pop($results);
               };
               if ($nextResult == 22) $thisLevel = false;
               ++$nextResult;
            } else array_push($results, $line);
        };
        fclose($fp);
        unset($results[count($results)-1]);
    }
    else {
      echo 'Nie znaleziono pliku!';
      require_once $default_file;
    };
    $tresc = "";
    if ($results<>"") {
        foreach ($results as $result) {
            $tresc = $tresc.$result."\n";
        }
        $f=fopen("results.txt", "a");
        ftruncate($f, 0);
        fputs($f, $tresc);
        fclose($f);
    };
//   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
?>