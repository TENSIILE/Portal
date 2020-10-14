<?php 
    require_once '../config/config.php';

    $readyRequest = [];
    $i            = 0;

    $result = $mysql->query("SELECT * FROM `requests` WHERE `status` = 'Готово' LIMIT 4");

    while ($row = $result->fetch_assoc()) {
        $nCategory         = $row['categoryId'];
        $namesCategory     = $mysql->query("SELECT * FROM `categories` WHERE `id` = '$nCategory'");
        $namesCategory     = $namesCategory->fetch_assoc();
        $row['categoryId'] = $namesCategory['title'];
        $readyRequest[$i]  = $row;

        $i++;
    }

    echo json_encode(['data' => $readyRequest]);

    $mysql->close();

?>