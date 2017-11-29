-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2017 at 08:57 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `first`
--

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `email` varchar(1000) NOT NULL,
  `links` varchar(1000) NOT NULL,
  `marks` varchar(1000) NOT NULL,
  `teststatus` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `email` varchar(200) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `testStatus` tinyint(1) NOT NULL,
  `marks` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`email`, `link`, `testStatus`, `marks`) VALUES
('navendugupta29@gmail.com', 'hellmrnavenduthis isgud', 0, 0),
('navendugupta29@gmail.com', 'hellmrnavenduthis isgud', 0, 0),
('hello', 'isthatfine', 0, 0),
('hello', 'isthatfine', 0, 0),
('akshay', 'hello', 0, 0),
('akshay', 'hello', 0, 0),
('email_id', 'hello', 0, 0),
('email_id', 'hello', 0, 0),
('email_id', 'hello', 0, 0),
('email_id', 'hello', 0, 0),
('email_id', 'hello', 0, 0),
('jeevan', '16', 82, 2),
('coolnav10', '16', 82, 2),
('saakshi', '16', 82, 2),
('kunal', '6d519b89-7176-4538-b791-18a4df3eb478', 82, 2),
('abhi', '5c6d8017-7342-48a1-a312-78c65d261111', 82, 2),
('saakshi@gmail.com', 'a09d0c16-f466-46f0-99cd-6caee8ef1769', 82, 2),
('lklhk', 'c152877d-6074-418e-a548-28b032466776', 82, 2),
('lklhk', '62a88d74-ac0d-413a-b0b9-8a5423b3d589', 82, 2),
('querudvckdsk', '37edb9b1-1ae0-41bb-ac69-1c3126c6b6fe', 82, 2),
('querudvckdsk', 'a8811095-a91b-4d9b-90e9-79d39b743287', 82, 2),
('querudvckdsk', '80739220-91a4-47f2-84da-57cab5554f37', 82, 2),
('querudvckdsk', '1ad2606a-56ae-4b03-9018-01b32f11777f', 82, 2),
('opverma', '2137d976-9e15-46e2-a3a6-17f89cb40529', 82, 2),
('saakshi.gupta2910@gmail.com', '5385ae42-75f0-47b1-b0a5-109b298e1c87', 82, 2),
('saakshi.gupta2910@gmail.com', 'a3959d58-8cb5-4316-b6e3-a9d848fd910a', 82, 2),
('navendugupta32@gmail.com', '80f0f486-11af-4584-91aa-9cb562b4901e', 82, 2);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(100) NOT NULL,
  `ques` varchar(1000) NOT NULL,
  `op1` varchar(1000) NOT NULL,
  `op2` varchar(1000) NOT NULL,
  `op3` varchar(1000) NOT NULL,
  `ans` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `ques`, `op1`, `op2`, `op3`, `ans`) VALUES
(1, 'who invented telephone', 'alexandar graham bell', 'bill gates', 'newton', 'hitler'),
(1, 'who invented telephone', 'alexandar graham bell', 'bill gates', 'newton', 'hitler'),
(2, 'HIghest paid athlete in 2015', 'ronaldo', 'Floyd Mayweather Jr.', 'messi', 'Floyd Mayweather Jr.'),
(2, 'HIghest paid athlete in 2015', 'ronaldo', 'Floyd Mayweather Jr.', 'messi', 'Floyd Mayweather Jr.'),
(4, 'who is the national animal', 'peacock', 'lion', 'tiger', 'tiger'),
(4, 'who is the national animal', 'peacock', 'lion', 'tiger', 'tiger');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `password`) VALUES
(1, 'navendu', 'jdsvbicbiadkb'),
(1, 'navendu', 'jdsvbicbiadkb'),
(22, 'vcjvkcbalbl', 'kvivikbkh');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
