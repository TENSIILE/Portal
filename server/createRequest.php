<?php 
    try {
        require_once '../config/config.php';

        $REQ = json_decode(file_get_contents("php://input"), true);
        
        $id          = filter_var(trim($REQ['id']), FILTER_SANITIZE_STRING);
        $title       = filter_var(trim($REQ['title']), FILTER_SANITIZE_STRING);
        $category    = filter_var(trim($REQ['category']), FILTER_SANITIZE_STRING);
        $description = filter_var(trim($REQ['description']), FILTER_SANITIZE_STRING);

        $categoryId = $mysql->query("SELECT * FROM `categories` WHERE `title` = '$category'");

        $categoryId = $categoryId->fetch_assoc();
        $categoryId = $categoryId['id'];
        
        $mysql->query("INSERT INTO `requests` (`ownerId`, `title`, `categoryId`, `description`) VALUES ('$id','$title', '$categoryId', '$description')");
        
        $result = $mysql->query("SELECT id FROM `requests` WHERE `title` = '$title' AND `categoryId` = '$categoryId'");
        $result = $result->fetch_assoc();

        $mysql->close();

        echo json_encode(['message' => 'Заявка была успешно отправлена!', 'data' => $result['id']]);
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>