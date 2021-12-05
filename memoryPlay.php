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
</head>
<body>
    <div id="container">
        <!-- Zawartość wypełniona przez app.js -->
        <!-- w zależności od dokonanego wyboru w menu. -->
    </div>
    <a class="button" href="#infoWynik">Info</a>
    <div id="infoWynik" class="overlay">
        <div class="popUp">
            <br>
            <div id="contentInfo">
                <!-- <h3>Brawo !!! Jesteś w TOP10.</h3> -->
                <!-- <h3>Twój wynik to 24.564 s</h3> -->
                <!-- Zawartość wypełniona przez app.js -->
                <!-- w zależności od dokonanego wyboru w menu. -->
            </div>
            <form action="saveResults.php" method="POST">
                <p id="dataPlayer">
                    <!-- Podaj swoje imię:  -->
                    <!-- <input id=name type="text" class="boxstyle" name="name" value="Pawełek" autofocus="autofocus"> -->
                    <!-- <input id="result" type="text" name="result" value="9.888" hidden/> -->
                    <!-- <input id="level" type="text" name="level" value="cardsCatAll12" hidden/> -->
                </p>
                <a class="close" href="#">&times;</a>

                        <!-- Test szybkiego zapisu wyniku w pliku -->
                        <!-- <p>
                        Wynik:     
                        <input id="result" type="text" name="result" value=""/>
                        </p>
                        <p>
                        Level: 
		                    <select name="lista" size="1">
                                <option>cardsCatAll12</option>
		                    	<option>cardsCatAll18</option>
                                <option>cardsCatAll24</option>
                                <option>cardsDogAll12</option>
                                <option>cardsDogAll18</option>
		                    	<option>cardsDogAll24</option>
		                    	<option>cardsButterflyAll12</option>
		                    	<option>cardsButterflyAll18</option>
		                    	<option>cardsButterflyAll24</option>
		                    </select>
                        </p> -->

                <div class="menu">
                <br/><input class="button" type="submit" value="Jeszcze raz?"/>
                <a class="button" href="saveResults.php" type="submit">Nowa gra?</a>
                </div>
            </form>
        </div>
    </div>

    <script src="js/app.js"></script>

</body>
</html>