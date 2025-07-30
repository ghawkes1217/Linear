-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 30, 2025 at 01:09 AM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_responses`
--

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `module` int(11) NOT NULL,
  `user_time` varchar(99) NOT NULL,
  `r1` int(11) NOT NULL,
  `w1` int(11) NOT NULL,
  `r2` int(11) NOT NULL,
  `w2` int(11) NOT NULL,
  `r3` int(11) NOT NULL,
  `w3` int(11) NOT NULL,
  `r4` int(11) NOT NULL,
  `w4` int(11) NOT NULL,
  `r5` int(11) NOT NULL,
  `w5` int(11) NOT NULL,
  `r6` int(11) NOT NULL,
  `w6` int(11) NOT NULL,
  `r7` int(11) NOT NULL,
  `w7` int(11) NOT NULL,
  `r8` int(11) NOT NULL,
  `w8` int(11) NOT NULL,
  `r9` int(11) NOT NULL,
  `w9` int(11) NOT NULL,
  `r10` int(11) NOT NULL,
  `w10` int(11) NOT NULL,
  `r11` int(11) NOT NULL,
  `w11` int(11) NOT NULL,
  `r12` int(11) NOT NULL,
  `w12` int(11) NOT NULL,
  `r13` int(11) NOT NULL,
  `w13` int(11) NOT NULL,
  `r14` int(11) NOT NULL,
  `w14` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `modules`
--

INSERT INTO `modules` (`module`, `user_time`, `r1`, `w1`, `r2`, `w2`, `r3`, `w3`, `r4`, `w4`, `r5`, `w5`, `r6`, `w6`, `r7`, `w7`, `r8`, `w8`, `r9`, `w9`, `r10`, `w10`, `r11`, `w11`, `r12`, `w12`, `r13`, `w13`, `r14`, `w14`) VALUES
(1, 'sdfsdfg', 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1),
(1, 'sdfsdfg', 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_name` varchar(99) NOT NULL,
  `password` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_name`, `password`) VALUES
('sdfsdfg', 'rrr');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
