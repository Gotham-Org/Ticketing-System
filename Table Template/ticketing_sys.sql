-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2023 at 12:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketing_sys`
--

-- --------------------------------------------------------

--
-- Table structure for table `ticket_table`
--

CREATE TABLE `ticket_table` (
  `id` int(11) NOT NULL,
  `category` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `req` varchar(20) NOT NULL,
  `acct` varchar(20) NOT NULL,
  `descr` varchar(500) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'New',
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket_table`
--

INSERT INTO `ticket_table` (`id`, `category`, `title`, `req`, `acct`, `descr`, `status`, `time`) VALUES
(1, 'ITS', 'hello test', 'me', 'admin', 'testing again', 'In Process', '2023-04-18 22:11:19'),
(2, 'ITS', 'ticket 2', 'me 2', 'admin 2', 'adgasdgn adgjslkdgjs sdgsd', 'On Hold', '2023-04-18 22:13:09'),
(3, 'ITS', 'Course is not visible', 'Jon', 'Electronics', 'User is not able to view the course EL 200 ', 'On Hold', '2023-04-18 22:46:59'),
(4, 'ITS', 'Ticket 3', 'lolo ', 'Hehe', 'asjfnasjkfa ajgaskjfnalkj nasgasifjnalksn lansglksa', 'Resolved', '2023-04-18 22:53:57'),
(5, 'ITS', 'test 4', 'ssdtgsdts ', 'dfhsfh ', 'dshashds sdh sd sdgsd g sd\r\nasfafa', 'On Hold', '2023-04-18 22:49:49'),
(6, 'ITS', 'afasfasf', 'sdgsg ', 'adga adf ', 'sadhsdag adgdth srsd sdg sdgsd', 'New', '2023-04-18 22:17:20'),
(7, 'ITS', 'lolololol', 'sdgsd', 'sdgsdg', 'shsdhgsdgsd', 'Resolved', '2023-04-18 22:47:05'),
(8, 'ITS', 'sdglnsgjn', 'sfjkgnsjdgnsjldgnsl', 'fdjgnsdljdgnsldgn', 'sfjgnsljdgnlsgnlskgnlskdngsdg', 'New', '2023-04-18 22:21:23'),
(9, 'ITS', 'adfaf', 'sdsdfsd', 'adfasfsaf', 'sgsdhsdhdshs', 'New', '2023-04-18 22:35:39'),
(10, 'ITS', 'lolwa', 'lol person', 'sdfsdf', 'sdfgsdgsdhsdhgs', 'On Hold', '2023-04-18 22:50:05'),
(11, 'ITS', 'hope it works', 'sdgsg', 'sdgsdg', 'sgsdgdsgsvsgsdgs sgsdgs sdg', 'Resolved', '2023-04-18 22:54:05'),
(12, 'TAG', 'TAG ticket it is', 'agasg', 'sgasgsag', 'asgasgagasg', 'New', '2023-04-18 22:56:59'),
(13, 'TAG', 'HEllo Ji', 'sdgfsdg', 'sfdgsfg', 'gbsfsdfgsf dgsd gsdgdsg sd', 'New', '2023-04-18 22:57:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ticket_table`
--
ALTER TABLE `ticket_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ticket_table`
--
ALTER TABLE `ticket_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
