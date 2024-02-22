<?php

//* Path del JSON
$path = __DIR__ . '/../database/tasks.json';

//* Creo una variabile per inserire i dati del JSON
//! ATTENZIONE E' UNA STRINGA
$array = file_get_contents($path);

//* Converto in array PHP
$tasks = json_decode($array, true);

//* Rispondo in linguaggio JSON
header('Content-type: application/json');

//* Stampo i tasks riconvertiti in JSON
echo json_encode($tasks);