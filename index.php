<?php
    session_start();

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

    $yourPlace = $_SESSION['yourPlace'];
    $yourLevel = $_SESSION['yourLevel'];

?>


<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Memory</title>
    <link rel="stylesheet" href="style/cats.css">
    <link rel="stylesheet" href="style/dogs.css">
    <link rel="stylesheet" href="style/butterflies.css">
    <!-- <link rel="stylesheet" href="style/style.css"> -->
    <script>document.write('<link rel="stylesheet" href="style/style.css?dev=' + Math.floor(Math.random() * 100) + '"\>');</script>
    <!-- <link rel="stylesheet" href="style/menu.css"> -->
    <script>document.write('<link rel="stylesheet" href="style/menu.css?dev=' + Math.floor(Math.random() * 100) + '"\>');</script>


    <script type="text/javascript">
    let results = eval('<?php echo json_encode($results);?>');
    let yourPlace = eval('<?php echo json_encode($yourPlace);?>');
    let yourLevel = eval('<?php echo json_encode($yourLevel);?>');
    console.log(yourPlace);
    console.log(yourLevel);
    </script>
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

    <!-- <script src="js/menu.js"></script> -->
    <script>document.write('<script src="js/menu.js?dev=' + Math.floor(Math.random() * 100) + '"\><\/script>');</script>

</body>
</html>