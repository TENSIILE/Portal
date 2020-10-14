<!DOCTYPE html>
<html lang="ru">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Портал Сергиево-Посада | Аккаунт</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="scss/office.css">
</head>

<body>
    <div class="container">
        <div class="main-menu">
            <div class="logo">
                <img src="static/icons/portal_1.svg" alt="">
            </div>
            <ul class='list' id='main-list-menu'>
                <?php require_once './layouts/menu_list_icon.php' ?>
            </ul>
        </div>
        <div class='main'>

            <div class="alert alert-dismissible">
                <strong></strong> <p></p>
                <button type="button" class="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="header">
                <p id='type-account'>Личный аккаунт</p>
                <div class="user">
                    <p class="name" id='name-user'>Имя пользователя</p>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.738 19.738"
                        style="enable-background:new 0 0 19.738 19.738;" xml:space="preserve">
                        <g>
                            <path d="M18.18,19.738h-2c0-3.374-2.83-6.118-6.311-6.118s-6.31,2.745-6.31,6.118h-2
                            c0-4.478,3.729-8.118,8.311-8.118C14.451,11.62,18.18,15.26,18.18,19.738z" />

                            <path d="M9.87,10.97c-3.023,0-5.484-2.462-5.484-5.485C4.385,2.461,6.846,0,9.87,0
		                    c3.025,0,5.486,2.46,5.486,5.485S12.895,10.97,9.87,10.97z M9.87,2C7.948,2,6.385,3.563,6.385,5.485S7.948,8.97,9.87,8.97
		                    c1.923,0,3.486-1.563,3.486-3.485S11.791,2,9.87,2z" />
                        </g>
                    </svg>

                    <div class="contextmenu">
                        <ul>
                            <li>
                                <a href='/index.php' class='btn btn-primary' id='btn-goto-main'>На главную</a>
                            </li>
                            <li>
                                <button class='btn btn-danger' id='btn-exit'>Выйти</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content">
                
            </div>
        </div>
    </div>
    <script type='module' src="js/personal_office.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>