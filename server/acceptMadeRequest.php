<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);

        $id    = filter_var(trim($REQ['id']), FILTER_SANITIZE_STRING);
        $date  = filter_var(trim($REQ['date']), FILTER_SANITIZE_STRING);

        $mysql->query("UPDATE `requests` SET `status` = 'Готово' WHERE `id` = '$id'");
        $mysql->query("UPDATE `requests` SET `date` = '$date' WHERE `id` = '$id'");

        echo json_encode(['message' => 'Данный запрос был успешно принят!']);

        $mysql->close();
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>