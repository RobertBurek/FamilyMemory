<?php
	session_start();
    $nazwa_pliku = '.\results\butterfly12.txt';
if (!file_exists($nazwa_pliku)) 
{
  echo 'Nie znaleziono pliku!';
  exit;
}
$results=file($nazwa_pliku);
if (count($results)===0)
{
  echo 'Plik jest pusty!';
//   exit;
}

$liczba_linii = count(file($nazwa_pliku));
// $kolejna = "Kolejna linia ".$liczba_linii+1;

// if (is_writeable($nazwa_pliku))
//   {
//    if ($plik = fopen($nazwa_pliku, "a"))
//      {
//       if (fwrite($plik, "".$kolejna."
// ") !== FALSE) 
//             echo "Zapis do pliku zakończył się powodzeniem..."."<br/>";
//         else echo "Zapis do pliku się nie powiódł...";

//       fclose($plik);

//      } else echo "Nie mogę nawiązać połączenia z plikiem...";

//   } else echo "Do pliku nie można dopisać informacji lub on nie istnieje...";

$arrayA = [];

$fp = fopen($nazwa_pliku, "rb");
while(!feof($fp))
{
   $linia = substr(fgets($fp), 0, -2);
   $name = substr(fgets($fp), 0, -2);
   $arrayLinia = array($linia,$name);
//    array_push($arrayA, $linia);
   array_push($arrayA, $arrayLinia);
}
var_dump($arrayA);
echo '<br/><br/>';
unset($arrayA[count($arrayA)-1]);
var_dump($arrayA);
// $results = fread($fp, filesize($nazwa_pliku));
// $results = implode('', file($nazwa_pliku));
// echo $results[5];
// foreach($results as $wiersz)
// echo @wiersz;

echo '<br/><br/>';
$a1=array(1,2,3);
$a22=array("ggggggg",5);
$a2=array($a22, 6);
// $a=array($a1,$a2);
// $a=array("sfsdfsf\r\n","piopipoip\r\n","gfhghjfgjghj\r\n"); //'["sfsdfsf","piopipoip","gfhghjfgjghj"]'
$a=$arrayA;                                        //'["Kolejna linia 1\r\n","Kolejna linia 2\r\n"]'
// var_dump($a);
?>

<!DOCTYPE html>
<html lang="en">
<head>

<script type="text/javascript">

var json='<?php
        // $a1=array(1,2,3);
        // $a22=array("ggggggg",5);
        // $a2=array($a22, 6);
        // $a=array($a1,$a2);
        echo json_encode($a);
?>';
var a=eval(json);
document.write(a[1]);
console.log(a[1][1]);



    let results=eval('<?php echo json_encode($arrayA);?>');
    console.log(results);
    var a = eval(results);

    console.log(a[1]);


    
    // console.log(myvar);

    // console.log(pll);
    localStorage.setItem("plik",results);
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