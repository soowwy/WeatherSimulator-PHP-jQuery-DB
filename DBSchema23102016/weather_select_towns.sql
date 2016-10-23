-- MySQL dump 10.13  Distrib 5.7.12, for linux-glibc2.5 (x86_64)
--
-- Host: localhost    Database: weather
-- ------------------------------------------------------
-- Server version	5.7.15-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `select_towns`
--

DROP TABLE IF EXISTS `select_towns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `select_towns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `precipitation` varchar(45) NOT NULL,
  `humidity` varchar(45) NOT NULL,
  `wind` varchar(45) NOT NULL,
  `degreeC` varchar(45) NOT NULL,
  `degreeF` varchar(45) NOT NULL,
  `day` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `select_towns`
--

LOCK TABLES `select_towns` WRITE;
/*!40000 ALTER TABLE `select_towns` DISABLE KEYS */;
INSERT INTO `select_towns` VALUES (10,'Sofia','60%','55%','26km/h','38','46','Monday'),(14,'Sofia','80%','65%','20km/h','25','26','Tuesday'),(15,'Sofia','90%','75%','25km/h','23','20','Wednesday'),(16,'Sofia','40%','35%','15km/h','33','40','Thursday'),(17,'Sofia','30%','37%','10km/h','37','45','Friday'),(18,'Sofia','31%','38%','12km/h','39','47','Saturday'),(19,'Sofia','26%','30%','14km/h','30','37','Sunday'),(20,'Dubai','0.5%','10%','24km/h','45','53','Monday'),(21,'Dubai','0.7%','12%','26km/h','46','55','Tuesday'),(22,'Dubai','0.9%','9%','30km/h','48','57','Wednesday'),(23,'Dubai','5%','15%','20km/h','36','47','Thursday'),(24,'Dubai','10%','25%','15km/h','32','42','Friday'),(25,'Dubai','20%','35%','35km/h','27','32','Saturday'),(26,'Dubai','30%','45%','45km/h','22','27','Sunday'),(27,'Hollywood','80%','65%','25km/h','32','42','Monday'),(28,'Hollywood','70%','55%','22km/h','28','38','Tuesday'),(29,'Hollywood','60%','45%','19km/h','33','43','Wednesday'),(30,'Hollywood','50%','35%','15km/h','35','46','Thursday'),(31,'Hollywood','40%','55%','25km/h','38','50','Friday'),(32,'Hollywood','56%','75%','35km/h','25','34','Saturday'),(33,'Hollywood','67%','87%','38km/h','22','31','Sunday');
/*!40000 ALTER TABLE `select_towns` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-23 13:50:34
