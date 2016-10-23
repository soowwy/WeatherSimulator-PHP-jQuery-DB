<?php


require_once 'db_settings.php';

$name = empty($_POST['name']) ? '' : $_POST['name'];
/*$precipitation = empty($_POST['precipitation']) ? '' : $_POST['precipitation'];
$humidity = empty($_POST['humidity']) ? '' : $_POST['humidity'];
$wind = empty($_POST['wind']) ? '' : $_POST['wind'];
$degreeC = empty($_POST['degreeC']) ? '' : $_POST['degreeC'];
$degreeF = empty($_POST['degreeF']) ? '' : $_POST['degreeF'];
$day = empty($_POST['day']) ? '' : $_POST['day']; */


$pdo = new PDO('mysql:host=localhost;dbname=weather', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

//$query = 'INSERT INTO <TABLE> (name, value) VALUES ("' . $name. ', "' . $value . '")';
$towns = [[$name]];

$insertTownSql = 'INSERT INTO save_towns (name) VALUES (?)';

$statement = $pdo->prepare($insertTownSql);

$ids = [];
foreach ($towns as $town) {

    $statement->execute($town);
    $ids[] = $pdo->lastInsertId();
}


if($ids[0] == ""){
    echo json_encode('empty');
    return;
}else {
   echo json_encode($towns);
}




