<?php
//* Rispondo in linguaggio JSON
header('Content-type: application/json');

//* Path del JSON
$path = __DIR__ . '/../database/tasks.json';

//* Creo una variabile per inserire i dati del JSON
//! ATTENZIONE E' UNA STRINGA
$array = file_get_contents($path);

//* Prendo i tasks così come mi sono arrivati, ovvero in JSON
$tasks = $array;

//* Controllo se ho un nuovo task. In POST perché vengo chiamato per fare qualcosa...
$new_task = $_POST['task'] ?? '';

//* Se ho un nuovo task lo aggiungo nell'array
if($new_task){
    //* Converto in array PHP
 $tasks = json_decode($array, true);

 //* Inserisco il nuovo task nell'array
 $task[] = $new_task;

 //* Riconverto in JSON
 $tasks = json_encode($tasks);
} 

//* Stampo i tasks riconvertiti in JSON
echo ($tasks);