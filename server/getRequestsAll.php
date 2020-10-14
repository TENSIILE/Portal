<?php 
    try {
        require_once '../config/config.php';

        $requests = [];
        $i        = 0;

        $result = $mysql->query("SELECT * FROM `requests`");

        while ($row = $result->fetch_assoc()) {
            $nCategory         = $row['categoryId'];
            $namesCategory     = $mysql->query("SELECT * FROM `categories` WHERE `id` = '$nCategory'");
            $namesCategory     = $namesCategory->fetch_assoc();
            $row['categoryId'] = $namesCategory['title'];
            $requests[$i]      = $row;
            
            $i++;
        }

        echo json_encode(['data' => $requests]);

        $mysql->close();

    } catch (Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th.message, 'status' => 'error']);
    }

?>