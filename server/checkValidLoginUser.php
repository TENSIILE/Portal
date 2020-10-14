<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);

        $login = filter_var(trim($REQ['login']), FILTER_SANITIZE_STRING);

        $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login'");

        $user = $result->fetch_assoc();

        if (count($user) <= 0) {
            echo json_encode(['message' => 'Данного логина не существует', 'valid' => true]);
            exit();
        }

        echo json_encode(['message' => 'Такой логин уже существует!', 'valid' => false]);

        $mysql->close();

    } catch (Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th.message, 'status' => 'error']);
    }

?>