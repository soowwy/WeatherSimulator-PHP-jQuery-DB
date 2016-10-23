<?php

/**
 * Created by PhpStorm.
 * User: vasil
 * Date: 08.08.16
 * Time: 12:55
 */
class DB
{
    /**
     * @var PDO $connection
     */
    protected static $connection;

    public static function getConnection()
    {
        if (!self::connection) {
            self::connection = new PDO(....)
        }

        return self::connection;
    }

    public static function query($sql, $params) {
        $sth =self::getConnection()->prepare($sql);
        $sth->execute($params);
    }
}

DB::query('SELECT * FROM users WHERE id= ?', [1]);