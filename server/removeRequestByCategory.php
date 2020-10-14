<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);

        $id = filter_var(trim($REQ['id']), FILTER_SANITIZE_STRING);

        $result = $mysql->query("SELECT * FROM `requests` WHERE `categoryId` = '$id'");

        $i = 0;
        
        while ($row = $result->fetch_assoc()) {
            $mysql->query("DELETE FROM `requests` WHERE `categoryId` = '$id'");
            $i++;
        }

        echo json_encode(['message' => 'Заявки была успешно удалены!']);

        $mysql->close();
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>