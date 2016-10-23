<?php

require_once 'db_settings.php';

$getTown = empty($_POST['getTown']) ? '' : $_POST['getTown'];


$pdo = new PDO('mysql:host=localhost;dbname=weather', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$sth = $pdo->prepare("SELECT * FROM save_towns WHERE name = '$getTown'");
$sth->execute();

$result = $sth->fetchAll(PDO::FETCH_ASSOC);

//var_dump($result);
if($result == []) {
    return;
} else {
    echo json_encode($result);
}