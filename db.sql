-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.25 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for storage-ql
CREATE DATABASE IF NOT EXISTS `storage-ql` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `storage-ql`;

-- Dumping structure for table storage-ql.jav_film
CREATE TABLE IF NOT EXISTS `jav_film` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `poster` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `title_en` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `actress` varchar(500) NOT NULL,
  `genre` varchar(500) NOT NULL,
  `tag` varchar(500) NOT NULL,
  `series` varchar(500) NOT NULL,
  `maker` varchar(500) NOT NULL,
  `director` varchar(500) NOT NULL,
  `label` varchar(500) NOT NULL,
  `release_date` date NOT NULL,
  `added_date` date NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table storage-ql.jav_film: ~0 rows (approximately)

-- Dumping structure for table storage-ql.jav_media
CREATE TABLE IF NOT EXISTS `jav_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `film_id` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `path` varchar(500) DEFAULT NULL,
  `media_attr` json DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table storage-ql.jav_media: ~0 rows (approximately)

-- Dumping structure for table storage-ql.job
CREATE TABLE IF NOT EXISTS `job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `identifer` varchar(250) NOT NULL,
  `params` json NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `retry_no` tinyint(4) NOT NULL DEFAULT '0',
  `run_at` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_id` (`identifer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table storage-ql.job: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
