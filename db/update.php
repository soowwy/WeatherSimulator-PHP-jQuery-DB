<?php
/**
 * Created by PhpStorm.
 * User: vasil
 * Date: 08.08.16
 * Time: 12:40
 */

require_once 'db_settings.php';

$pdo = new PDO('mysql:host=localhost;dbname=quiz', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$sth = $pdo->prepare('UPDATE users SET names = :names WHERE idusers = :idusers');

$sth->execute([':names' => 'Gosho', ':idusers' => '1']);

var_dump($sth->rowCount());