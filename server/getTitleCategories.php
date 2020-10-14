<?php 
    try {
        require_once '../config/config.php';

        $result = $mysql->query("SELECT * FROM `categories`");

        $categories = [];
        $i          = 0;
        
        while ($row = $result->fetch_assoc()) {
            $categories[$i] = $row;
            $i++;
        }

        if (count($categories) <= 0) {
            echo json_encode(['message' => 'Категории пусты!', 'status' => 'error']);
            exit();
        }

        echo json_encode(['data' => $categories]);

        $mysql->close();

    } catch (Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th.message, 'status' => 'error']);
    }

?>