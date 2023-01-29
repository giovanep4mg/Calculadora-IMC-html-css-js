# Calculadora-IMC-html-css-js
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
    <!--CSS---->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <header><h1>Calculadora de IMC</h1></header>
        <div class="divAltura">
            <label for="altura">Altura (m)</label>
            <input type="number" id="altura">
        </div>
        <div class="divPeso">
            <label for="peso">Peso (Kg)</label>
            <input type="number" id="peso">
        </div>
        <div class="divCalc">
            <button onclick="calcIMC()" >Calcular</button>
        </div>
        <span id="resultado"></span>
    </main>
    <!---JS---->
    <script src="script.js">

    </script>
</body>
</html>
