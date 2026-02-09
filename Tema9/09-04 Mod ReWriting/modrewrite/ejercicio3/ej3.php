<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <body>
        <h1>You Are on user.php!</h1>
        <p>
            <?php 
                $operacion = $_GET['operacion'];
                $valor1 = $_GET['valor1'];
                $valor2 = $_GET['valor2'];
                $calculo = $valor1 + $valor2;
                echo `La operación de la suma es: $valor1 + $valor2 = $calculo`;
            ?>
      </p>
      </body>
</body>
</html>
