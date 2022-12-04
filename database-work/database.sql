-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql202.epizy.com
-- Generation Time: Dec 04, 2022 at 01:26 AM
-- Server version: 10.3.27-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `epiz_33084078_ecorp`
--

-- --------------------------------------------------------

--
-- Table structure for table `panel`
--

CREATE TABLE `panel` (
  `idPanel` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `idSite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `panel`
--

INSERT INTO `panel` (`idPanel`, `login`, `password`, `idSite`) VALUES
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profession`
--

INSERT INTO `profession` (`idProfession`, `name`) VALUES
(1, 'frontend-Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº'),
(2, 'Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€'),
(3, 'backend-Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº'),
(5, 'devops'),
(8, 'Ð¢ÐµÑÑ‚Ð¸Ñ€Ð¾Ð²Ñ‰Ð¸Ðº'),
(9, 'ÐœÐµÐ½ÐµÐ´Ð¶ÐµÑ€ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¾Ð²'),
(10, 'Seo'),
(11, 'Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚ Ð¿Ð¾ ÐºÐ¸Ð±ÐµÑ€Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸'),
(12, 'fullstack-Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº'),
(13, 'Ð”Ð¸Ð·Ð°Ð¹Ð½ÐµÑ€'),
(14, 'ÐÐ¾Ð²Ð°Ñ Ð´Ð¾Ð»Ð¶Ð½Ð¾ÑÑ‚ÑŒ');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `idProject` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `finishDate` date NOT NULL,
  `idSite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`idProject`, `name`, `startDate`, `finishDate`, `idSite`) VALUES
(1, 'ÐŸÐ¾Ð¼ÐµÐ½ÑÑ‚ÑŒ ÑˆÑ€Ð¸Ñ„Ñ‚ Ð½Ð° Times New Roman', '2022-11-01', '2022-11-23', 2),
(2, 'Ð¡Ð²ÐµÑ€ÑÑ‚Ð°Ñ‚ÑŒ Ð½Ð¾Ð²ÑƒÑŽ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ‡ÐºÑƒ', '2022-11-16', '2022-11-30', 2),
(3, 'ÐŸÑ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÑŒ ÑÐ°Ð¹Ñ‚ Ð½Ð° Ð²Ð¸Ñ€ÑƒÑÑ‹', '2020-01-01', '2020-01-23', 1),
(4, 'Ð¡Ð¾ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð¼Ð°ÐºÐµÑ‚ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹', '2021-01-01', '2021-01-08', 4),
(5, 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ ci/cd', '2022-08-09', '2022-08-14', 6),
(6, 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð·ÐµÑ€ÐºÐ°Ð»Ð¾', '2022-10-11', '2022-10-25', 7),
(7, 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð¼ÐµÑ‚Ð°Ð´Ð°Ð½Ð½Ñ‹Ðµ', '2022-12-11', '2022-12-19', 8),
(8, 'Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð¾Ð¿Ð»Ð°Ñ‚Ñƒ Ð¿Ð¾ ÑÐ±Ð¿', '2022-03-16', '2022-03-20', 9),
(9, 'ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð±Ð´', '2022-03-05', '2022-03-10', 10),
(10, 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð·Ð°Ñ‰Ð¸Ñ‚Ñƒ Ð¾Ñ‚ ddos', '2022-11-16', '2022-11-29', 11),
(11, 'ÐžÐ¿Ñ‚Ð¸Ð¼Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÐ°Ð¹Ñ‚', '2022-12-13', '2022-12-31', 7);

-- --------------------------------------------------------

--
-- Table structure for table `server`
--

CREATE TABLE `server` (
  `idServer` int(11) NOT NULL,
  `ipServer` varchar(15) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `site`
--

CREATE TABLE `site` (
  `idSite` int(11) NOT NULL,
  `domain` varchar(100) NOT NULL,
  `idServer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`idSite`, `domain`, `idServer`) VALUES
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
-- Table structure for table `worker`
--

CREATE TABLE `worker` (
  `idWorker` int(11) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `idProfession` int(11) DEFAULT NULL,
  `idProject` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `worker`
--

INSERT INTO `worker` (`idWorker`, `surname`, `name`, `birthday`, `idProfession`, `idProject`) VALUES
(1, 'ÐœÐ°ÑÐº', 'Ð˜Ð»Ð¾Ð½', '1980-03-23', 1, 1),
(2, 'Ð”Ð¶Ð¾Ð¿Ñ', 'Ð¡Ñ‚Ð¸Ð²', '2022-11-13', 3, 1),
(3, 'Ð›ÐµÐ±ÐµÐ´ÐµÐ²', 'Ð¡ÐµÑ€Ð³ÐµÐ¹', '2022-11-01', 2, 2),
(4, 'Ð®', 'Ð­Ð²Ð°Ð½', '1937-05-20', 5, 2),
(6, 'Ð¢Ð¾Ñ€Ð²Ð°Ð»ÑŒÐ´Ñ', 'Ð›Ð¸Ð½ÑƒÑ', '1971-11-16', 5, 7),
(8, 'ÐœÐ°ÐºÐºÐ¾Ð½ÐµÐ»', 'Ð¡Ñ‚Ð¸Ð²', '1971-12-16', 9, 9),
(9, 'Ð¢Ð°Ð½Ð½ÐµÐ½Ð±Ð°ÑƒÐ¼', 'Ð­Ð½Ð´Ñ€ÑŽ', '1950-11-16', 10, 10),
(10, 'Ð¡Ñ‚Ð¾Ð»Ð»Ð¼Ð°Ð½', 'Ð Ð¸Ñ‡Ð°Ñ€Ð´', '1990-10-16', 8, 8),
(11, 'Ð¡Ñ‚Ð¾Ð»ÑÑ€Ð¾Ð²', 'ÐÐ½Ð´Ñ€ÐµÐ¹', '1970-10-05', 12, 3),
(12, 'Ð“ÐµÐ¹Ñ‚Ñ', 'Ð‘Ð¸Ð»Ð»', '1967-05-24', 13, 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `panel`
--
ALTER TABLE `panel`
  ADD PRIMARY KEY (`idPanel`),
  ADD KEY `idSite` (`idSite`);

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
  ADD KEY `idSite` (`idSite`);

--
-- Indexes for table `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`idServer`);

--
-- Indexes for table `site`
--
ALTER TABLE `site`
  ADD PRIMARY KEY (`idSite`),
  ADD KEY `site_ibfk_1` (`idServer`);

--
-- Indexes for table `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`idWorker`),
  ADD KEY `idProfession` (`idProfession`),
  ADD KEY `idProject` (`idProject`);

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
  MODIFY `idProject` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `server`
--
ALTER TABLE `server`
  MODIFY `idServer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `site`
--
ALTER TABLE `site`
  MODIFY `idSite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `worker`
--
ALTER TABLE `worker`
  MODIFY `idWorker` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `panel`
--
ALTER TABLE `panel`
  ADD CONSTRAINT `panel_ibfk_1` FOREIGN KEY (`idSite`) REFERENCES `site` (`idSite`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`idSite`) REFERENCES `site` (`idSite`);

--
-- Constraints for table `site`
--
ALTER TABLE `site`
  ADD CONSTRAINT `site_ibfk_1` FOREIGN KEY (`idServer`) REFERENCES `server` (`idServer`);

--
-- Constraints for table `worker`
--
ALTER TABLE `worker`
  ADD CONSTRAINT `worker_ibfk_1` FOREIGN KEY (`idProfession`) REFERENCES `profession` (`idProfession`),
  ADD CONSTRAINT `worker_ibfk_2` FOREIGN KEY (`idProject`) REFERENCES `project` (`idProject`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
