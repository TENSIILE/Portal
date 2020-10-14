<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);
    
        $login    = filter_var(trim($REQ['login']), FILTER_SANITIZE_STRING);
        $password = filter_var(trim($REQ['password']), FILTER_SANITIZE_STRING);
        
        $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login'");

        $user = $result->fetch_assoc();

        if (count($user) <= 0) {
            echo json_encode(['message' => 'Такого пользователя не существует!', 'status' => 'error']);
            exit();
        }

        if (password_verify($password, $user['password'])) {

            echo json_encode(['userId' => $user['id'], 'statusAccount' => $user['status']]);
        } else {
            echo json_encode(['message' => 'Неверные данные, повторите снова!', 'status' => 'error']);
        }

        $mysql->close();

    } catch (Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
?>

