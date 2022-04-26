<?php

$string1 = "Hola que tal soy Charles";
$string2 = "Hola \nQue tal ?\tSoy Charles ";

// Primer clean, solo espacios
$string1_clear = str_replace(' ', '', $string1);
echo $string1_clear;

// Segundo clean con todos los whitespaces, line-breaks, tabs, setc, usando preg_replace
$string2_clear = preg_replace('/\s+/', '', $string2);
echo $string2_clear;

?>