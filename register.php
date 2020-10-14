<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
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
                <h2>Зарегистрироваться</h2>
            </div>
            <div class="body">
                <div class="control register m-0">
                    <div class="input-group flex-nowrap">
                        <input type="text" name='login' id='login' class="form-control" minlength='4'
                            placeholder="Введите свой логин" aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="email" name='email' id='email' class="form-control"
                            placeholder="Введите свою почту" aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="password" name='password' id='password' class="form-control" minlength='4'
                            placeholder="Введите свой пароль" aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="password" name='password_repeat' id='password_repeat' minlength='4'
                            class="form-control" placeholder="Введите свой пароль еще раз"
                            aria-describedby="addon-wrapping" required>
                    </div>
                    <hr>
                    <div class="input-group flex-nowrap">
                        <input type="text" name='name' id='name' class="form-control" minlength='4'
                            placeholder="Введите свое имя" aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="text" name='surname' id='surname' class="form-control" minlength='4'
                            placeholder="Введите свой фамилию" aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="input-group flex-nowrap">
                        <input type="text" name='lastname' id='lastname' class="form-control" minlength='4'
                            placeholder="Введите свое отчество" aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="privacy">
                        <input type="checkbox" id='check-privacy'>
                        <label for="check-privacy">Я Согласен на обработку <a href="#">персональных данных</a></label>
                    </div>
                    <button class='btn btn-primary' id='reg' disabled='true'>Регистрация</button>
                </div>

            </div>
            <div class="footer">
                <a href="/auth.php">Авторизоваться</a>
            </div>
        </div>
    </div>
</body>
<script type='module' src="utils/register_page.js"></script>

</html>