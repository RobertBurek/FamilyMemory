<?php
	session_start();
if (!file_exists('.\results\butterfly12.txt')) 
{
  echo 'Nie znaleziono pliku!';
  exit;
}
$resultsBatt12=file('.\results\butterfly12.txt');
if (count($resultsBatt12)===0)
{
  echo 'Plik jest pusty!';
  exit;
}
$plik = [];

$dog12 = implode('', file('.\results\putty12.txt'));
$listaDog12 = array($dog12);
echo json_encode($listaDog12);
// foreach($dog12 as $wiersz) echo $wiersz.'<br/>';

foreach($resultsBatt12 as $wiersz){
echo $wiersz.'<br/>';
array_push($plik, $wiersz);
}

echo '<br/>';echo '<br/>';
echo $plik[4];
echo '<br/>';echo '<br/>';

$data = array(['Jan', 'Kowalski'],['Robert','Burek']);
// echo $data;
echo json_encode($data);
echo json_encode($data[1]);
// $_SESSION['dane']=$data;
// echo $data;
// echo $_SESSION['dane'];

// wczytanie starych danych

// otwarcie pliku do odczytu
$fp = fopen('.\results\putty12.txt', "r");

//odczytanie danych
$stareDane = fread($fp, filesize('.\results\putty12.txt'));

// zamknięcie pliku
fclose($fp);

// stworzenie nowych danych

$noweDane = '[DDDDOOOOOGGGGGGG,8.258]';
$noweDane .= $stareDane;

// zapisanie nowych danych

// otwarcie pliku do zapisu
$fp2 = fopen('.\results\putty12.txt', "w");

// zapisanie danych
fputs($fp2, $noweDane);

// zamknięcie pliku
fclose($fp2);

?>
<!DOCTYPE html>
<html lang="en">
<head>

<script type="text/javascript">
    let myvar='<?php echo json_encode($data);?>';
    let resultsB12='<?php echo json_encode($resultsBatt12);?>';
    for (let index = 0; index <= 12; index++) {
    };
    
    console.log(myvar);
    console.log(resultsB12);
    // console.log(pll);
    localStorage.setItem("plik",resultsB12);
    // localStorage.setItem("dog12",dog12);
</script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Memory</title>
    <link rel="stylesheet" href="cats.css">
    <link rel="stylesheet" href="dogs.css">
    <link rel="stylesheet" href="butterflies.css">
    <link rel="stylesheet" href="style.css">
	<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
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