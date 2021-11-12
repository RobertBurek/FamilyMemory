<?php

// wczytanie starych danych

// otwarcie pliku do odczytu
$fp = fopen("\results\butterfly12.txt", "r");

//odczytanie danych
$stareDane = fread($fp, filesize("\results\butterfly12.txt"));
echo $stareDane;

// zamknięcie pliku
fclose($fp)

// stworzenie nowych danych

$noweDaneStart  = "To, co chcesz, żeby było na początku\n";
$noweDaneEnd  = "To, co chcesz, żeby było na końcu\n";
$noweDaneStart .= $stareDane;
$stareDane .= $noweDaneEnd;

// zapisanie nowych danych

// otwarcie pliku do zapisu
$fp = fopen("\results\butterfly12.txt", "w");

// zapisanie danych
fputs($fp, $noweDane);

// zamknięcie pliku
fclose($fp);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Memory</title>
    <link rel="stylesheet" href="cats.css">
    <link rel="stylesheet" href="dogs.css">
    <link rel="stylesheet" href="butterflies.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <!-- Zawartość wypełniona przez app.js -->
        <!-- w zależności od dokonanego wyboru w menu. -->
    </div>
    <!-- <a class="button" href="#infoWynik">Info</a> -->
    <div id="infoWynik" class="overlay">
        <div class="popUp">
            <br>
            <div id="contentInfo">
                <!-- <h3>Brawo !!! Twój wynik to 24s.</h3>
                <h3> Jesteś w TOP10.</h3> -->
            </div>
            <form action="#" method="POST">
                <p>
                    Podaj swoje imię: 
                    <input class="boxstyle" type="text" name="name" value="" autofocus="autofocus">
                </p>
                <a class="close" href="#">&times;</a>
                <br>
                <a class="button again" href="javascript:reset()"> Jeszcze raz ? </a>
            </form>
        </div>
    </div>

    <script src="app.js"></script>

</body>
</html>