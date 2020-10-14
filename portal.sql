-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Окт 14 2020 г., 19:05
-- Версия сервера: 5.7.30
-- Версия PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `portal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'Дворы'),
(2, 'Дороги'),
(3, 'Природа');

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `ownerId` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` text,
  `status` varchar(20) NOT NULL DEFAULT 'Обработка',
  `date` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `requests`
--

INSERT INTO `requests` (`id`, `ownerId`, `title`, `categoryId`, `description`, `image`, `status`, `date`) VALUES
(1, 1, 'Сломался люк', 2, 'Почините люк', '', 'Отклонено', '14.10.2020'),
(20, 2, 'Мусор на улице', 3, '', 'unsolved.jpg', 'Готово', '14.10.2020'),
(23, 2, 'Бандиты', 1, 'Бандиты гуляют по городу', '', 'Отклонено', '14.10.2020'),
(24, 2, 'Смыло всю дорогу на вокзале', 2, 'Дорога плывет', '', 'Отклонено', '14.10.2020');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `password`, `name`, `surname`, `lastname`, `status`) VALUES
(1, 'TENSIILE', 'laptev-vlad2001@yandex.ru', '$2y$10$n9.E9KJ2xSbJ5hjXbeYdBe4PHauQkr0XJx3O3zPphbq1uEIIV8nbm', 'Влад', 'Лаптев', 'Дмитриевич', 'admin'),
(2, 'flazed', 'flazed@mail.ru', '$2y$10$52PfOne04ZdUpGE5iCu.LODlzYUPFxx8fmF2RVFzASf2sNKEQaSHq', 'Петя', 'Петров', 'Петрович', 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `ownerId` (`ownerId`,`categoryId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`ownerId`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
