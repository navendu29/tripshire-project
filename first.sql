-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2017 at 11:27 AM
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
  `teststatus` varchar(1000) NOT NULL,
  `marks` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`email`, `links`, `teststatus`, `marks`) VALUES
('navendugupta29@gmail.com', 'http://127.0.0.1:8081/taketest/388ae127-9320-4edc-be5b-526bfb44a726', '1', '2');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` varchar(1000) NOT NULL,
  `ques` varchar(1000) NOT NULL,
  `op1` varchar(1000) NOT NULL,
  `op2` varchar(1000) NOT NULL,
  `op3` varchar(1000) NOT NULL,
  `ans` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `ques`, `op1`, `op2`, `op3`, `ans`) VALUES
('1', 'natinal animal', 'tiger', 'peacock', 'elephant', 'tiger'),
('2', 'biggest animal', 'blue whale', 'elephant', 'giraffe', 'blue whale'),
('3', 'pm of india', 'arvind kejriwal', 'rahul gandhi', 'narendra modi', 'narendra modi'),
('6', 'cm of delhi', 'narendra modi', 'rahul gandhi', 'arvind kejriwal', 'arvind kejriwal'),
('4', 'capital', 'delhi', 'bangalore', 'chennai', 'delhi');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
