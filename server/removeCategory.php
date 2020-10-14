<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);

        $id  = filter_var(trim($REQ['id']), FILTER_SANITIZE_STRING);

        $mysql->query("DELETE FROM `categories` WHERE `id` = $id");

        echo json_encode(['message' => 'Категория была успешно удалена!']);

        $mysql->close();
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>