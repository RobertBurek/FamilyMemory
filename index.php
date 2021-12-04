<?php
    $name_file = 'results.txt';
    $default_file = 'defaultResults.php';
    $results = [];
    if (file_exists($name_file)) {
        $fp = fopen($name_file, "rb");
        while(!feof($fp)) {
            $line = str_replace("\n", "", fgets($fp));
            $line = str_replace("\r", "", $line);
            array_push($results, $line);
        };
        fclose($fp);
        unset($results[count($results)-1]);
    }
    else {
    //   echo 'Nie znaleziono pliku!';
      require_once $default_file;
    };
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Memory</title>
    <link rel="stylesheet" href="style/cats.css">
    <link rel="stylesheet" href="style/dogs.css">
    <link rel="stylesheet" href="style/butterflies.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/menu.css">

    <script type="text/javascript">
    let results = eval('<?php echo json_encode($results);?>');
    </script>
    <?php
        // $tresc = '';
        // if ($results<>"") {
        //     foreach ($results as $result) {
        //         if ($result == 'Robert') $tresc = $tresc."Robercik!!!\n";
        //         else $tresc = $tresc.$result."\n";
        //     }
        // $f=fopen('dane.txt', "a");
        // ftruncate($f, 0);
        // fputs($f, $tresc);
        // fclose($f);
        // };
    ?>
</head>
<body>
    <div id="center" class="center">
        <div id="resultsLeft">
            <div id="result_1_left" class="titleResult">
                <!-- z pliku, na razie z menu.js -->
            </div>
            <div id="result_2_left" class="titleResult">
                <!-- z pliku, na razie z menu.js -->
            </div>
            <div id="result_3_left" class="titleResult">
                <!-- z pliku, na razie z menu.js -->
            </div>
        </div>
        <div id="pictures" class="widht1Element">
            <div id="animal1"></div>
            <div id="animal2"></div>
            <div id="animal3"></div>
        </div>
        <div id="levels">
            <div id="level1" ></div>
            <div id="level2" ></div>
            <div id="level3" ></div>
        </div>
        <div id="resultsRight">
            <div id="result_1_right" class="titleResult">
                <!-- z pliku, na razie z menu.js -->
            </div>
            <div id="result_2_right" class="titleResult">
                <!-- z pliku, na razie z menu.js -->
            </div>
            <div id="result_3_right" class="titleResult">
                <!-- z pliku, na razie z menu.js -->
            </div>
        </div>
    </div>
    <div id="StartGame" class="overlayHidden">
        <a class="buttonStart" href="memoryPlay.php"> S T A R T</a>
    </div>

    <script src="menu.js"></script>

</body>
</html>