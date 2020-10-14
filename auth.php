<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
    <link rel="stylesheet" href="scss/stylePanel.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <div class="alert alert-dismissible">
            <strong></strong>
            <p></p>
            <button type="button" class="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="authorization_register">
            <div class="header">
                <h2>Авторизация</h2>
            </div>
            <div class="body">
                <div class="control">
                    <div class="input-group flex-nowrap">
                        <input type="text" name='login' id='login' class="form-control" placeholder="Введите свой логин"
                            aria-describedby="addon-wrapping">
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="password" name='password' id='password' class="form-control"
                            placeholder="Введите свой пароль" aria-describedby="addon-wrapping">
                    </div>
                    <button class='btn btn-primary' id='signIn'>Войти</button>
                </div>
                <div class="img">
                    <img src="static/icons/authentication.svg" alt="">
                </div>
            </div>
            <div class="footer">
                <a href="/register.php">Нет аккаунта ?</a>
            </div>
        </div>
    </div>
</body>
<script type='module' src="utils/login_page.js"></script>

</html>