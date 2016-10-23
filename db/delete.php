<?php
/**
 * Created by PhpStorm.
 * User: vasil
 * Date: 08.08.16
 * Time: 12:51
 */

require_once 'db_settings.php';

$pdo = new PDO('mysql:host=localhost;dbname=quiz', DB_USER, DB_PASS, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$sth = $pdo->prepare('DELETE FROM users WHERE idusers = ?');
$sth->execute([6]);

var_dump($sth->rowCount());
