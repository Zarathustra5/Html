-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 01, 2023 at 06:32 AM
-- Server version: 10.11.2-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_work`
--

-- --------------------------------------------------------

--
-- Table structure for table `panel`
--

CREATE TABLE `panel` (
  `idPanel` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `idProject` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `panel`
--

INSERT INTO `panel` (`idPanel`, `login`, `password`, `idProject`) VALUES
(7, 'user', 'pppp', 2),
(9, 'ffjbc', 'vdfhhf', 4),
(10, 'gddhjv', 'cdegvvv', 6),
(11, 'khfdssd', 'dwrhcc', 7),
(12, 'lhvdws', 'awtgfd', 8),
(13, 'jbvvjjb', 'ggggggg', 9),
(14, 'sdghh', '5268yd', 10),
(15, 'dfyhv', '334444', 11),
(16, 'log', 'pas', 12),
(18, 'new', '12345', 1);

-- --------------------------------------------------------

--
-- Table structure for table `profession`
--

CREATE TABLE `profession` (
  `idProfession` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `profession`
--

INSERT INTO `profession` (`idProfession`, `name`) VALUES
(1, 'frontend-разработчик'),
(2, 'Системный администратор'),
(3, 'backend-разработчик'),
(5, 'devops'),
(8, 'Дизайнер'),
(9, 'Специалист по кибербезопасности'),
(10, 'Seo'),
(11, 'Тестировщик'),
(12, 'fullstack-разработчик'),
(13, 'Верстальщик');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `idProject` int(11) NOT NULL,
  `domain` varchar(100) NOT NULL,
  `idServer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`idProject`, `domain`, `idServer`) VALUES
(1, 'google.com.ru', 4),
(2, 'vk.com', 2),
(4, 'yandex.ru', 2),
(6, 'kali.org', 1),
(7, 'mail.ru', 9),
(8, 'avito.ru', 5),
(9, 'gosuslugi.ru', 7),
(10, 'exploit-db.com', 6),
(11, 'wikipedia.org', 8),
(12, 'youtube.com', 10),
(13, 'gismeteo.ru', 11);

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE `server` (
  `idServer` int(11) NOT NULL,
  `ipServer` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `server`
--

INSERT INTO `server` (`idServer`, `ipServer`, `password`) VALUES
(1, '8.8.8.8', 'newpassword'),
(2, '33.6.123.12', 'sec3ret5'),
(4, '1.1.1.1', 'secret12'),
(5, '6.6.6.6', 'qwerty'),
(6, '43.43.54.12', 'random4'),
(7, '3.5.2.64', '23bypass'),
(8, '5.3.8.4', 'password'),
(9, '432.532.345.421', 'difficult!'),
(10, '34.64.322.64', 'pass3257'),
(11, '9.9.9.9', 'qwertyu');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `idTask` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `finishDate` date NOT NULL,
  `idProject` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`idTask`, `name`, `startDate`, `finishDate`, `idProject`) VALUES
(1, 'Поменять шрифт на New Roman', '2022-11-01', '2022-11-23', 2),
(2, 'Сверстать новую страничку', '2022-11-16', '2022-11-30', 2),
(3, 'Проверить сайт на вирусы', '2020-01-01', '2020-01-23', 1),
(4, 'Составить макет страницы', '2021-01-01', '2021-01-08', 4),
(5, 'Настроить ci/cd', '2022-08-09', '2022-08-14', 6),
(6, 'Настроить зеркало', '2022-10-11', '2022-10-25', 7),
(7, 'Указать метаданные', '2022-12-11', '2022-12-19', 8),
(8, 'Добавить оплату по сбп', '2022-03-16', '2022-03-20', 9),
(9, 'Оптимизировать базу данных', '2022-03-05', '2022-03-10', 10),
(10, 'Поменять пароль от панели', '2022-11-16', '2022-11-29', 11);

-- --------------------------------------------------------

--
-- Table structure for table `worker`
--

CREATE TABLE `worker` (
  `idWorker` int(11) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `idProfession` int(11) DEFAULT NULL,
  `idTask` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `worker`
--

INSERT INTO `worker` (`idWorker`, `surname`, `name`, `birthday`, `idProfession`, `idTask`) VALUES
(1, 'Маск', 'Илон', '1980-03-23', 1, 1),
(2, 'Торвальдс', 'Линус', '2022-11-13', 3, 1),
(3, 'Ю', 'Эван', '2022-11-01', 2, 2),
(4, 'Лебедев', 'Сергей', '1937-05-20', 5, 2),
(6, 'Столлман', 'Ричард', '1971-11-16', 5, 7),
(8, 'Гейтс', 'Билл', '1971-12-16', 9, 9),
(9, 'Джопс', 'Стив', '1950-11-16', 10, 10),
(10, 'Макконел', 'Стив', '1990-10-16', 8, 8),
(11, 'Столяров', 'Андрей', '1970-10-05', 12, 3),
(12, 'Рэймонд', 'Эрик', '1967-05-24', 13, 10),
(14, 'Новый', 'Сотрудник', '2002-12-31', 11, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `panel`
--
ALTER TABLE `panel`
  ADD PRIMARY KEY (`idPanel`),
  ADD KEY `idSite` (`idProject`);

--
-- Indexes for table `profession`
--
ALTER TABLE `profession`
  ADD PRIMARY KEY (`idProfession`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`idProject`),
  ADD KEY `site_ibfk_1` (`idServer`);

--
-- Indexes for table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`idServer`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`idTask`),
  ADD KEY `idSite` (`idProject`);

--
-- Indexes for table `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`idWorker`),
  ADD KEY `idProfession` (`idProfession`),
  ADD KEY `idProject` (`idTask`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `panel`
--
ALTER TABLE `panel`
  MODIFY `idPanel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `profession`
--
ALTER TABLE `profession`
  MODIFY `idProfession` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `idProject` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `server`
--
ALTER TABLE `server`
  MODIFY `idServer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `idTask` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `worker`
--
ALTER TABLE `worker`
  MODIFY `idWorker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `panel`
--
ALTER TABLE `panel`
  ADD CONSTRAINT `panel_ibfk_1` FOREIGN KEY (`idProject`) REFERENCES `project` (`idProject`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`idServer`) REFERENCES `server` (`idServer`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`idProject`) REFERENCES `project` (`idProject`);

--
-- Constraints for table `worker`
--
ALTER TABLE `worker`
  ADD CONSTRAINT `worker_ibfk_1` FOREIGN KEY (`idProfession`) REFERENCES `profession` (`idProfession`),
  ADD CONSTRAINT `worker_ibfk_2` FOREIGN KEY (`idTask`) REFERENCES `task` (`idTask`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
