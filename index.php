<?php
    require_once './config/config.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Портал Сергиево-Посада</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="scss/style.css">
</head>

<body>

    <body style='overflow: hidden;'>

        <div class="preloader">
            <div class="loader"></div>
        </div>

        <header>
            <nav class="navigation">
                <div class="container-fluid relative">
                    <div class="navbar-header">
                        <div class="logo">
                            <img src="static/icons/Logo.svg" alt="">
                            <h1 id="brand">Portal</h1>
                        </div>
                        
                        <ul class='menu'>
                            <li><a href="#nav">Главная</a></li>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#bid">Решенные проблемы</a></li>
                            <li><a href='#footer'>Контакты</a></li>
                        </ul>
                        <div class="open-system">
                            <ul>
                                <li><a href="/register.php">Нет аккаунта</a></li>
                                <?php 
                                    if ($_COOKIE['portal-posad']) {
                                        $userLogin = $_COOKIE['portal-posad__name-login'];
                                        
                                        if ($userLogin) {
                                            if ($_COOKIE[TYPE_ACCOUNT] == 'admin') {
                                                echo "<li><a href='/admin_panel.php' class='btn btn-purple'>$userLogin</a></li>";
                                            } else {
                                                echo "<li><a href='/personal_office.php' class='btn btn-purple'>$userLogin</a></li>";
                                            }
                                            
                                        } else {
                                            if ($_COOKIE[TYPE_ACCOUNT] == 'admin') {
                                                echo "<li><a href='/admin_panel.php' class='btn btn-purple'>Админ панель</a></li>";
                                            } else {
                                                echo "<li><a href='/personal_office.php' class='btn btn-purple'>Личный аккаунт</a></li>";
                                            }
                                        }
                                    } else {
                                        echo "<li><a href='/auth.php' class='btn'>Войти</a></li>";
                                    }

                                ?>
                            </ul>
                        </div>
                        
                        <div class="burger">
                            <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80"
                                onclick="this.classList.toggle('active')">
                                <path class="line top"
                                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                                <path class="line middle" d="m 30,50 h 40" />
                                <path class="line bottom"
                                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <div id='nav' class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="intro-message">
                        <div class="texts">
                            <h1 class="wow">Городской портал <strong>Сергиево Посада</strong></h1>
                            <span class="network-name">Администрация Сергиево-Посадского городского округа</span>
                        </div>
                        <img class='wow' id='main-image-header' src="static/icons/city_buildings_.svg" alt="">   
                    </div>
                </div>
            </div>
        </div>

        <div class="content-section" id='about'>
            <div class="container wow">
                <h2 class="section-heading">Городской портал</h2>
                <div class="content">
                    <p class="lead">Административно городское поселение Сергиев Посад, наряду с другими 11 поселениями (города Хотьково, Пересвет, Краснозаводск, поселки городского типа Скоропусковский, Богородское и 288 сельских населенных пункта) входит в Сергиево-Посадкий муниципальный район. Находится в 70 км от Москвы. Время в пути от столицы ок. 1-1,5 часов.
                    </p>
                    <div class="mr-lg reference">
                        <img class='responsibility-img' src="static/icons/_tv_presenter.svg" id="responsive" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="content-section wow slideInRight back-color" data-wow-delay="0.2s">
            <div class="container">
                <h2 class="section-heading">Новости</h2>
                <div class="content d-block">
                    <div class="news">
                        <p class="text-column">Соцпредприниматели и НКО Люберец могут поучаствовать в конкурсе на лучший проект <br><br> сегодня в 18:08</p>
                        <p class="text-column">Соцпредприниматели и НКО Люберец могут поучаствовать в конкурсе на лучший проект <br><br> сегодня в 18:08</p>
                        <p class="text-column">Соцпредприниматели и НКО Люберец могут поучаствовать в конкурсе на лучший проект <br><br> сегодня в 18:08</p>
                        <p class="text-column">Соцпредприниматели и НКО Люберец могут поучаствовать в конкурсе на лучший проект <br><br> сегодня в 18:08</p>
                    </div>
                    <button class="btn btn-primary">Перейти ко всем новостям</button>
                </div>
            </div>
        </div>

        <div class="content-section-attachment">
            <div class="image image-bank"></div>
        </div>

        <div class="content-section-c content-section wow slideInLeft" data-wow-delay="0.2s">
            <div class="container">
                <h2 class="section-heading">Интересные факты</h2>
                <div class="content">
                    <div class="card-wrapper">
                        <div class="card-fact">
                            <img src="static/icons/bus.svg" alt="Автобус">
                            <h3>Географическое положение</h3>
                            <p>Сергиев Посад находится в центральной части России, на Средне-Русской возвышенности, в северо-восточной части Московской области, в 70 км от Москвы и в 200 км от Ярославля.</p>
                        </div>
                        <div class="card-fact">
                            <img src="static/icons/library.svg" alt="Автобус">
                            <h3>История Сергиева Посада</h3>
                            <p>Сергиев Посад находится в центральной части России, на Средне-Русской возвышенности, в северо-восточной части Московской области, в 70 км от Москвы и в 200 км от Ярославля.</p>
                        </div>
                        <div class="card-fact">
                            <img src="static/icons/museum.svg" alt="Автобус">
                            <h3>Достопримечательности</h3>
                            <p>Сергиев Посад находится в центральной части России, на Средне-Русской возвышенности, в северо-восточной части Московской области, в 70 км от Москвы и в 200 км от Ярославля.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-section-e">
            <div id="portfolio" class="portfolio">
                <div class="paddin g-0">
                    <ul class="portfolio-content" id="all-progects">
                        <li class="portfolio-item draggable-non-event portfolio-item-active ">
                            <img src="static/img/slide-1.jpg" alt="Лавра">
                        </li>
                        <li class="portfolio-item draggable-non-event">
                            <img src="static/img/slide-2.jpg" alt="Лавра">
                        </li>
                        <li class="portfolio-item draggable-non-event">
                            <img src="static/img/slide-3.jpg" alt="Лавра">
                        </li>
                        <li class="portfolio-item draggable-non-event">
                            <img src="static/img/slide-4.jpg" alt="portfolio">
                        </li>
                        <li class="portfolio-item draggable-non-event">
                            <img src="static/img/lavra.png" alt="Лавра">
                        </li>
                        <ul class="portfolio-dots"></ul>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-section-b wow slideInRight" id='bid' data-wow-delay="0.2s">
            <div class="container">
                <h2 class="section-heading">Количество выполненных работы</h2>
                <div class="content">
                    <div class="diagrams">
                        <h3>Дороги</h3>
                        <div class="diagram">
                            <svg viewBox="0 0 32 32">
                              <circle r="16" cx="16" cy="16" class="circle"></circle>
                              <circle r="16" cx="16" cy="16" stroke-dasharray="75 100" class="circle-diagrams"></circle>
                            </svg>
                            <div class="diagram-data">698</div>
                          </div>
                    </div>
                    <div class="diagrams">
                        <h3>Строительство</h3>
                        <div class="diagram">
                            <svg viewBox="0 0 32 32">
                              <circle r="16" cx="16" cy="16" class="circle"></circle>
                              <circle r="16" cx="16" cy="16" stroke-dasharray="44 100" class="circle-diagrams"></circle>
                            </svg>
                            <div class="diagram-data">121</div>
                          </div>
                    </div>
                    <div class="diagrams">
                        <h3>Дворы</h3>
                        <div class="diagram">
                            <svg viewBox="0 0 32 32">
                              <circle r="16" cx="16" cy="16" class="circle"></circle>
                              <circle r="16" cx="16" cy="16" stroke-dasharray="14 100" class="circle-diagrams"></circle>
                            </svg>
                            <div class="diagram-data">48</div>
                          </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-section-b wow slideInLeft" data-wow-delay="0.2s">
            <div class="container">
                <h2 class="section-heading">Решенные заявки</h2>
                <div class="content">
                    <div class="cards" id='card__ready_requests'>
                        
                    </div>
                </div>
            </div>
        </div>


        <div id='pre-footer' class="content-section-attachment wow slideInUp">
            <div class="image image-back-2"></div>
        </div>

        <footer id='footer'>
            <div class="container">
                <div class="row">
                    <p class="copyright text-muted small text-center">Copyright &copy; Все права защищены! 2020</p>
                </div>
                <div class="icons">
                    <a href="#"><img src="static/icons/instagram.svg" alt=""></a>
                    <a href="#"> <img src="static/icons/vk.svg" alt=""></a>  
                </div>  
            </div>
        </footer>


        <div class="arrow-up">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <script defer src="utils/assets.js"></script>


    </body>

</html>