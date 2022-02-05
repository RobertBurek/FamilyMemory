<?php
    session_start();

    if (isset($_POST["choice"])) {
        switch ($_POST["choice"]) {
            case "index":
                // header("Location: http://robertburek.pl/GryJS/MemoryPHP/index.php");
                // header('Location: index.php');
                break;
            case "memoryPlay":
                // header("Location: http://robertburek.pl/GryJS/MemoryPHP/memoryPlay.php");
                // header('Location: memoryPlay.php');
                break;
        }
    }

    $result = sprintf("%01.3f", $_POST["result"]);
    $level = $_POST["level"];
    $name = stripslashes(trim($_POST["name"]));

    echo $result." - ".$level." - ".$name."\n";

    $name_file = 'results.txt';
    $default_file = 'defaultResults.php';
    $results = [];
    $thisLevel = false;
    $changePlayer = false;
    $nextResult = 0;

    if (($_SESSION['$currentResult'] != $result)||($_SESSION['$currentLevel'] != $level)) {
        echo $_SESSION['$currentResult']." - ".$_SESSION['$currentLevel']."\n";
        $_SESSION['$currentResult'] = $result;
        $_SESSION['$currentLevel'] = $level;
        // $_SESSION['$currentName'] = $name;
        echo "tak";

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
                        if (($result <= $line || $line == " ")&& !$changePlayer) {
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
    } else {
        echo $_SESSION['$currentResult']." - ".$_SESSION['$currentLevel']."\n";
        echo "nie";
    }
//   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);
?>