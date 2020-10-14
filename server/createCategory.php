<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);
    
        $title = filter_var(trim($REQ['title']), FILTER_SANITIZE_STRING);
    
        $mysql->query("INSERT INTO `categories` (`title`) VALUES ('$title')");
        $mysql->close();
    
        echo json_encode(['message' => 'Категория была успешно добавлена!']);
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>