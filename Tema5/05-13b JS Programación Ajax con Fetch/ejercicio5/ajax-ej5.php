<?php
$hoy = date('l jS \of F Y h:i:s A');
//$ahora=print_r($hoy);
$jsonCadena = '{ 
    "Nombre":"Francisco",
    "Apellido":"Aybar Romero",
    "Cargo":"IT Developer",
    "Fecha":"' . $hoy . '"}';
echo ($jsonCadena);
