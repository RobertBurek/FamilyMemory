<?php
    session_start();

    $result = sprintf("%01.3f", $_POST["result"]);
    $level = $_POST["level"];
    $name = stripslashes(trim($_POST["name"]));

    // echo $result." - ".$level." - ".$name."\n";

    $name_file = 'results.txt';
    $default_file = 'defaultResults.php';
    $results = [];
    $thisLevel = false;
    $changePlayer = false;
    $nextResult = 0;
    $yourPlacesWon = $_SESSION['$yourPlacesWon'];
    // $yourPlacesWon = [];
    $placeWon = [];

    if (($_SESSION['$currentResult'] != $result)||($_SESSION['$currentLevel'] != $level)) {
        // echo $_SESSION['$currentResult']." - ".$_SESSION['$currentLevel']."\n";
        $_SESSION['$currentResult'] = $result;
        $_SESSION['$currentLevel'] = $level;
        // $_SESSION['$currentName'] = $name;
        // echo "tak";
        $numberLevel += -1;
        if (file_exists($name_file)) {
            $fp = fopen($name_file, "rb");
            while(!feof($fp)) {
                $line = str_replace("\n", "", fgets($fp));
                $line = str_replace("\r", "", $line);
                if (strstr($line, "cards")) $numberLevel += 1;
               if ($line == $level) {
                   $thisLevel = true;
               };
               if ($thisLevel) {
                   if (($nextResult > 2) && ($nextResult % 2 == 1) && ($nextResult <= 22)) {
                        if (($result <= $line || $line == " ")&& !$changePlayer) {
                            array_push($results, $result);
                            array_push($results, $name);
                            $changePlayer = true;
                            // $_SESSION['$yourResult'] = $result;
                            // $_SESSION['$yourPlace'] = floor($nextResult / 2);
                            // $_SESSION['$yourLevel'] = $numberLevel;
                            // echo $_SESSION['$yourResult']." - ".$_SESSION['$yourPlace']." - ".$_SESSION['$yourLevel']."\n";
                            $placeWon = [$numberLevel, floor($nextResult / 2)];
                            array_push($yourPlacesWon, $placeWon);
                            $_SESSION['$yourPlacesWon'] = $yourPlacesWon;
                            // print_r($yourPlacesWon);
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
    } ;
    // else {
        // echo $_SESSION['$currentResult']." - ".$_SESSION['$currentLevel']."\n";
        // echo "nie";
    // }

//   mail("robertburek@wp.pl", "Wygrał dzisiaj", $tresc);

if (isset($_POST["choice"])) {
    switch ($_POST["choice"]) {
        case "index":
            // header("Location: http://robertburek.pl/GryJS/MemoryPHP/index.php");
            header('Location: index.php');
            break;
        case "memoryPlay":
            // header("Location: http://robertburek.pl/GryJS/MemoryPHP/memoryPlay.php");
            header('Location: memoryPlay.php');
            break;
    }
}
?>