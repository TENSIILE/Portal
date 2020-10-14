<?php 
    try {
        require_once '../config/config.php';

        $ID = $_POST['id'];

        $upload_image = $_FILES["image"]["name"];

        $folder='../upload/';

        move_uploaded_file($_FILES["image"]["tmp_name"], "$folder" . $_FILES["image"]["name"]);

        $mysql->query("UPDATE `requests` SET `image` = '$upload_image' WHERE `id` = '$ID'");
        $mysql->close();
    
        echo json_encode(['message' => 'Изображение было успешно загружено на сервер!']);
        
    } catch (\Throwable $th) {
        echo json_encode(['message' => 'Произошла ошибка сервера, попробуйте снова!', 'error' => $th, 'status' => 'error']);
    }
    
?>