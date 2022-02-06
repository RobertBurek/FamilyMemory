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
    // $yourPlacesWon = array_merge([], $_SESSION['yourPlacesWon']);
    $yourPlacesWon = $_SESSION['yourPlacesWon'];
    // $yourPlacesWon = [];
    // $yourPlacesWon = $_SESSION['$yourPlacesWon'];
    $placeWon = [];

    // function addYourPlaceWon ($list, $yourPlace) {
    //     foreach($list as $el) {
    //         if ($yourPlace[0] == $el[0]) {
    //             if ($el[1] >= $yourPlace[1]) {
    //                 // $placeWon[1] +=1;
    //                 echo $el[1];
    //             };
    //     };
    //     return array_push($list, $yourPlace);
    // };

    function sendInfoMail($nameInfo, $levelInfo, $resultInfo) {
            header("content-type: application/json; charset=utf-8");
            // if($name && $email && $phone && $message){
            $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
            $message_body="Ktoś zagrał w Twoją gierkę: MEMORY\n";
            $message_body.="Był/a to: ".$nameInfo."\n";
            $message_body.="Level: ".$levelInfo."\n";
            $message_body.="Jej/jego wynik: ".$resultInfo." s \n\n";
            $message_body.="Pozdrowionka ze stronki GryJS.";
            mail("robertburek@wp.pl","Memory Family - $name",$message_body,$headers);
            //  $json=array("status"=>1,"msg"=>"<p style='color: #060;font-size: 20px;font-weight: 700;'>Formularz został pomyślnie wysłany.</p>");
            //  }
            //  else{
            //  $json=array("status"=>0,"msg"=>"<p style='color: #F00;font-size: 20px;font-weight: 700;''>Wystąpił problem z wysłaniem formularza.</p>"); 
            //  }
            // }
            // else{
            //  $json=array("status"=>0,"msg"=>"<p style='color: #F00;font-size: 20px;font-weight: 700;'>Proszę wypełnić wszystkie pola przed wysłaniem.</p>"); 
            // }
            // echo json_encode($json);
            // exit;
    }


    if (($_SESSION['currentResult'] != $result)||($_SESSION['currentLevel'] != $level)) {
        // echo $_SESSION['$currentResult']." - ".$_SESSION['$currentLevel']."\n";
        $_SESSION['currentResult'] = $result;
        $_SESSION['currentLevel'] = $level;
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
                            // array_push($yourPlacesWon, $placeWon);
                            // addYourPlaceWon($placeWon);
                            // $_SESSION['$yourPlacesWon'] = $yourPlacesWon;
                            $temp = [];
                            print_r($temp);
                            echo "</br>";
                            echo "</br>";
                            foreach($yourPlacesWon as $el) {
                                if ($el[0] == $placeWon[0]) {
                                    // print_r($el);
                                    // echo "</br>";
                                    if ($el[1] >= $placeWon[1]) {
                                        // $el[1] = $el[1] + 1;
                                        // echo $el[1];
                                        array_push($temp, [$el[0], $el[1] + 1]);
                                    } else array_push($temp, $el);
                                    // print_r($el);
                                    // echo "</br>";
                                } else array_push($temp, $el);
                                // print_r($temp);
                                    print_r($el);
                                    echo "</br>";
                            };

                            array_push($temp, $placeWon);
                            sendInfoMail($name, $level, $result);
                            echo "</br>";
                            echo "</br>";
                            print_r($placeWon);
                            echo "</br>";
                            echo "</br>";
                            print_r($temp);
                            // $yourPlacesWon = addYourPlaceWon($yourPlacesWo, $placeWon);
                            $_SESSION['yourPlacesWon'] = $temp;
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