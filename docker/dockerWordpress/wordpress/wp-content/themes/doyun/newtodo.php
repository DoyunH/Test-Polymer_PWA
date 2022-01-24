<?php
// ; 빠뜨리지 않기, 오타 주의
// echo '<pre>';
// var_dump($_POST);
// echo '</pre>';

$todoName = $_POST['todo_name'] ?? '';
$todoName = trim($todoName);

if($todoName){
    $json = file_get_contents('todo.json');
    $jsonArray = json_decode($json, true);
    $jsonArray[$todoName] = ['completed' => false];
    echo '<pre>';
    var_dump($jsonArray);
    echo '</pre>';
    file_put_contents('todo.json');
}