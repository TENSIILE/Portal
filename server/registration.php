<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);
    
        $login    = filter_var(trim($REQ['login']), FILTER_SANITIZE_STRING);
        $email    = filter_var(trim($REQ['email']), FILTER_SANITIZE_STRING);
        $password = filter_var(trim($REQ['password']), FILTER_SANITIZE_STRING);
        $name     = filter_var(trim($REQ['name']), FILTER_SANITIZE_STRING);
        $surname  = filter_var(trim($REQ['surname']), FILTER_SANITIZE_STRING);
        $lastname = filter_var(trim($REQ['lastname']), FILTER_SANITIZE_STRING);
    
        $pass_hash = password_hash($password, PASSWORD_BCRYPT);
    
        $mysql->query("INSERT INTO `users` (`login`, `email`, `password`, `name`, `surname`, `lastname`) VALUES ('$login', '$email', '$pass_hash', '$name', '$surname', '$lastname')");
        $mysql->close();
    
        echo json_encode(['message' => 'Аккаунт был успешно создан!']);
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>