<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);

        $id  = filter_var(trim($REQ['id']), FILTER_SANITIZE_STRING);

        $result = $mysql->query("SELECT * FROM `users` WHERE `id` = '$id'");

        $user = $result->fetch_assoc();

        if (count($user) <= 0) {
            echo json_encode(['message' => 'Такого пользователя не существует!', 'status' => 'error']);
            exit();
        }

        echo json_encode(['data' => $user['name']]);

        $mysql->close();

    } catch (Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th.message, 'status' => 'error']);
    }

?>