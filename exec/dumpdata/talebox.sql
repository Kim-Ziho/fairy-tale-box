-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: i8c101.p.ssafy.io    Database: talebox
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `history_id` bigint NOT NULL AUTO_INCREMENT,
  `star_point` int NOT NULL,
  `study_date` datetime DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `story_id` bigint DEFAULT NULL,
  PRIMARY KEY (`history_id`),
  KEY `FKbnwj6i7md9xd8vr1pfqqbf1q5` (`member_id`),
  KEY `FKsx8yd95nj8r30pwjsy18nmix7` (`story_id`),
  CONSTRAINT `FKbnwj6i7md9xd8vr1pfqqbf1q5` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKsx8yd95nj8r30pwjsy18nmix7` FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,0,'2023-02-16 01:49:00',3,1),(2,0,'2023-02-16 10:49:01',3,1),(3,0,'2023-02-16 01:54:37',3,1),(4,0,'2023-02-16 02:40:28',3,1),(5,0,'2023-02-16 06:15:58',3,1),(6,3,'2023-02-16 06:47:13',3,1),(7,0,'2023-02-16 06:54:29',3,1),(8,0,'2023-02-16 07:37:57',3,1),(9,1,'2023-02-16 11:42:10',3,1),(10,0,'2023-02-16 12:05:37',3,1),(11,1,'2023-02-16 12:12:01',3,1),(12,0,'2023-02-16 12:22:46',3,1),(13,1,'2023-02-16 12:25:19',3,1),(14,0,'2023-02-16 13:48:22',3,1),(15,0,'2023-02-16 15:10:37',3,1),(16,2,'2023-02-16 15:18:54',3,1),(17,0,'2023-02-16 15:28:03',3,1),(18,3,'2023-02-16 15:39:18',3,1),(19,0,'2023-02-16 15:57:06',3,1),(20,2,'2023-02-16 15:57:18',3,1),(21,1,'2023-02-16 16:05:48',3,1),(22,0,'2023-02-16 16:45:57',3,1);
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `serial_num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `UK_mbmcqelty0fbrvxp1q58dn57t` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (2,'2023-02-13 07:31:05','admin@naver.com','관리자 계정1','{bcrypt}$2a$10$RUxLHvOPx665t4SHHCEAeeeSsvbnb5GNjWocpHwe8pTzrxKiHE/C6','ROLE_ADMIN','관리자 계정은 시리얼넘버가 없다'),(3,'2023-02-13 07:35:23','test1@naver.com','테스트 계정','{bcrypt}$2a$10$ct/6E0oD1WwUo9/EaL1lUuzPB/Fi4kRdIQVXS/gCO9WoMpNmPO9VC','ROLE_USER','동화상자c101-1');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_raspberry`
--

DROP TABLE IF EXISTS `member_raspberry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_raspberry` (
  `member_raspberry_id` bigint NOT NULL AUTO_INCREMENT,
  `access_token` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `raspberry_id` bigint DEFAULT NULL,
  PRIMARY KEY (`member_raspberry_id`),
  KEY `FK3k3llmfbwonw1y9hxg6xwsa34` (`member_id`),
  KEY `FKru85148vffypqqiackteat5f7` (`raspberry_id`),
  CONSTRAINT `FK3k3llmfbwonw1y9hxg6xwsa34` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKru85148vffypqqiackteat5f7` FOREIGN KEY (`raspberry_id`) REFERENCES `raspberry_serial` (`raspberry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_raspberry`
--

LOCK TABLES `member_raspberry` WRITE;
/*!40000 ALTER TABLE `member_raspberry` DISABLE KEYS */;
INSERT INTO `member_raspberry` VALUES (1,NULL,NULL,2,NULL),(2,NULL,NULL,3,1);
/*!40000 ALTER TABLE `member_raspberry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raspberry_serial`
--

DROP TABLE IF EXISTS `raspberry_serial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raspberry_serial` (
  `raspberry_id` bigint NOT NULL AUTO_INCREMENT,
  `serial_num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`raspberry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raspberry_serial`
--

LOCK TABLES `raspberry_serial` WRITE;
/*!40000 ALTER TABLE `raspberry_serial` DISABLE KEYS */;
INSERT INTO `raspberry_serial` VALUES (1,'동화상자c101-1'),(2,'동화상자c101-2'),(3,'동화상자c101-3'),(4,'동화상자c101-4'),(5,'동화상자c101-5');
/*!40000 ALTER TABLE `raspberry_serial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `story` (
  `story_id` bigint NOT NULL AUTO_INCREMENT,
  `overview` varchar(255) DEFAULT NULL,
  `package_path` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`story_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (1,'옛날 옛적 깊은 산 속에 가난하지만 사이좋은 오누이와 그 홀어머니 가족이 살고 있었다. 오누이의 아버지는 일찍 세상을 떠났고, 어머니 혼자 집으로부터 몇 고개를 넘어가야 나오는 먼 거리의 장터에 떡을 내다 파는 일을 하며 생계를 책임지고 있었다.....','/storyPath','해님달님'),(2,'옛날 어느 마을에 흥부와 놀부라는 형제가 살았다. 놀부와 흥부는 아버지가 살아계실 때는 사이좋은 척 했으나, 아버지가 돌아가신 뒤 못된 놀부는 착한 흥부를 돈 한푼 안 줘서 쫓아냈고, 흥부는 스무명의 처자식들과 함께 찢어질 정도로 가난한 처지에 어떻게든 먹고살려고 별의별 힘든 날품팔이로 살아간다.......','/storyPath2','흥부전'),(3,'콩쥐는 어머니를 일찍 여의고 계모 슬하에서 자라게 된다. 계모는 자기가 데리고 온 팥쥐만을 감싸며 콩쥐를 학대한다. 밭을 맬 때 팥쥐에게는 쇠호미를 주고 콩쥐에게는 나무호미를 주어 골탕을 먹이려 하지만, 하늘에서 어머니의 넋인 소가 내려와 도와주고 과일도 준다.......','/storyPath3','콩쥐팥쥐'),(4,'이것은 시연용 동화이다. c101팀의 발표가 성공리에 마무리 되었으면 .......','/storyPath4','시연용 동화'),(5,'우리 시그니처 캐릭터 깨순이~~~~~~~~~~~~~~~~~~~~~~~~~.......','/storyPath5','깨순이'),(6,'스토리내용6','/storyPath6','스토리이름6');
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `word`
--

DROP TABLE IF EXISTS `word`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `word` (
  `word_id` bigint NOT NULL AUTO_INCREMENT,
  `image_path` varchar(255) DEFAULT NULL,
  `word_name` varchar(255) DEFAULT NULL,
  `story_id` bigint DEFAULT NULL,
  PRIMARY KEY (`word_id`),
  KEY `FKahva2gfapi6wu930c5k13xc4s` (`story_id`),
  CONSTRAINT `FKahva2gfapi6wu930c5k13xc4s` FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `word`
--

LOCK TABLES `word` WRITE;
/*!40000 ALTER TABLE `word` DISABLE KEYS */;
INSERT INTO `word` VALUES (1,'../img/history/1-mom.png','엄마',1),(2,'../img/history/2-tiger.png','호랑이',1),(3,'../img/history/3-ricecake.png','떡',1),(4,'../img/history/4-promise.png','약속',1),(5,'../img/history/5-house.png','집',1),(6,'../img/history/6-voice.png','목소리',1),(7,'../img/history/7-hand.png','손',1),(8,'../img/history/8-tree.png','나무',1),(9,'../img/history/9-sun.png','햇님',1),(10,'../img/history/10-moon.png','달님',1);
/*!40000 ALTER TABLE `word` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `word_result`
--

DROP TABLE IF EXISTS `word_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `word_result` (
  `word_result_id` bigint NOT NULL AUTO_INCREMENT,
  `audio_path` varchar(255) DEFAULT NULL,
  `is_correct` bit(1) DEFAULT NULL,
  `history_id` bigint DEFAULT NULL,
  `word_id` bigint DEFAULT NULL,
  PRIMARY KEY (`word_result_id`),
  KEY `FKhcipc6gwurc6qttgu8u3s49y6` (`history_id`),
  KEY `FK5xxhljmk6g5jp46ovkit12uv6` (`word_id`),
  CONSTRAINT `FK5xxhljmk6g5jp46ovkit12uv6` FOREIGN KEY (`word_id`) REFERENCES `word` (`word_id`),
  CONSTRAINT `FKhcipc6gwurc6qttgu8u3s49y6` FOREIGN KEY (`history_id`) REFERENCES `history` (`history_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `word_result`
--

LOCK TABLES `word_result` WRITE;
/*!40000 ALTER TABLE `word_result` DISABLE KEYS */;
INSERT INTO `word_result` VALUES (1,'/home/nvidia/STT/엄마6/audio/teat.wav',_binary '',6,1),(2,'/home/nvidia/STT/호랑이6/audio/teat.wav',_binary '',6,2),(3,'/home/nvidia/STT/떡6/audio/teat.wav',_binary '\0',6,3),(4,'/home/nvidia/STT/약속6/audio/teat.wav',_binary '',6,4),(5,'/home/nvidia/STT/집6/audio/teat.wav',_binary '',6,5),(6,'/home/nvidia/STT/목소리6/audio/teat.wav',_binary '',6,6),(7,'/home/nvidia/STT/손6/audio/teat.wav',_binary '',6,7),(8,'/home/nvidia/STT/나무6/audio/teat.wav',_binary '',6,8),(9,'/home/nvidia/STT/엄마7/audio/teat.wav',_binary '',7,1),(10,'/home/nvidia/STT/호랑이7/audio/teat.wav',_binary '',7,2),(11,'/home/nvidia/STT/떡7/audio/teat.wav',_binary '',7,3),(12,'/home/nvidia/STT/약속7/audio/teat.wav',_binary '',7,4),(13,'/home/nvidia/STT/집7/audio/teat.wav',_binary '',7,5),(14,'/home/nvidia/STT/목소리7/audio/teat.wav',_binary '',7,6),(15,'/home/nvidia/STT/엄마9/audio/teat.wav',_binary '\0',9,1),(16,'/home/nvidia/STT/호랑이9/audio/teat.wav',_binary '\0',9,2),(17,'/home/nvidia/STT/떡9/audio/teat.wav',_binary '\0',9,3),(18,'/home/nvidia/STT/약속9/audio/teat.wav',_binary '\0',9,4),(19,'/home/nvidia/STT/집9/audio/teat.wav',_binary '\0',9,5),(20,'/home/nvidia/STT/목소리9/audio/teat.wav',_binary '\0',9,6),(21,'/home/nvidia/STT/손9/audio/teat.wav',_binary '\0',9,7),(22,'/home/nvidia/STT/나무9/audio/teat.wav',_binary '\0',9,8),(23,'/home/nvidia/STT/엄마10/audio/teat.wav',_binary '\0',10,1),(24,'/home/nvidia/STT/호랑이10/audio/teat.wav',_binary '',10,2),(25,'/home/nvidia/STT/떡10/audio/teat.wav',_binary '\0',10,3),(26,'/home/nvidia/STT/약속10/audio/teat.wav',_binary '',10,4),(27,'/home/nvidia/STT/집10/audio/teat.wav',_binary '\0',10,5),(28,'/home/nvidia/STT/목소리10/audio/teat.wav',_binary '',10,6),(29,'/home/nvidia/STT/손10/audio/teat.wav',_binary '\0',10,7),(30,'/home/nvidia/STT/엄마11/audio/teat.wav',_binary '\0',11,1),(31,'/home/nvidia/STT/호랑이11/audio/teat.wav',_binary '',11,2),(32,'/home/nvidia/STT/떡11/audio/teat.wav',_binary '\0',11,3),(33,'/home/nvidia/STT/약속11/audio/teat.wav',_binary '\0',11,4),(34,'/home/nvidia/STT/집11/audio/teat.wav',_binary '\0',11,5),(35,'/home/nvidia/STT/목소리11/audio/teat.wav',_binary '',11,6),(36,'/home/nvidia/STT/손11/audio/teat.wav',_binary '\0',11,7),(37,'/home/nvidia/STT/나무11/audio/teat.wav',_binary '\0',11,8),(38,'/home/nvidia/STT/호랑이12/audio/teat.wav',_binary '\0',12,2),(39,'/home/nvidia/STT/떡12/audio/teat.wav',_binary '\0',12,3),(40,'/home/nvidia/STT/집12/audio/teat.wav',_binary '\0',12,5),(41,'/home/nvidia/STT/목소리12/audio/teat.wav',_binary '\0',12,6),(42,'/home/nvidia/STT/엄마13/audio/teat.wav',_binary '\0',13,1),(43,'/home/nvidia/STT/떡13/audio/teat.wav',_binary '\0',13,3),(44,'/home/nvidia/STT/약속13/audio/teat.wav',_binary '\0',13,4),(45,'/home/nvidia/STT/목소리13/audio/teat.wav',_binary '\0',13,6),(46,'/home/nvidia/STT/목소리13/audio/teat.wav',_binary '\0',13,6),(47,'/home/nvidia/STT/손13/audio/teat.wav',_binary '\0',13,7),(48,'/home/nvidia/STT/나무13/audio/teat.wav',_binary '\0',13,8),(49,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/호랑이16/audio/teat.wav',_binary '',16,2),(50,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/떡16/audio/teat.wav',_binary '',16,3),(51,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/약속16/audio/teat.wav',_binary '\0',16,4),(52,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/집16/audio/teat.wav',_binary '\0',16,5),(53,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/목소리16/audio/teat.wav',_binary '\0',16,6),(54,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/손16/audio/teat.wav',_binary '',16,7),(55,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/엄마18/audio/teat.wav',_binary '',18,1),(56,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/호랑이18/audio/teat.wav',_binary '',18,2),(57,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/떡18/audio/teat.wav',_binary '\0',18,3),(58,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/약속18/audio/teat.wav',_binary '',18,4),(59,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/집18/audio/teat.wav',_binary '',18,5),(60,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/목소리18/audio/teat.wav',_binary '',18,6),(61,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/손18/audio/teat.wav',_binary '\0',18,7),(62,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/나무18/audio/teat.wav',_binary '',18,8),(63,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/엄마20/audio/teat.wav',_binary '',20,1),(64,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/집20/audio/teat.wav',_binary '',20,5),(65,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/손20/audio/teat.wav',_binary '',20,7),(66,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/나무20/audio/teat.wav',_binary '',20,8),(67,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/엄마21/audio/teat.wav',_binary '\0',21,1),(68,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/호랑이21/audio/teat.wav',_binary '\0',21,2),(69,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/손21/audio/teat.wav',_binary '\0',21,7),(70,'/home/nvidia/S08P12C101/frontend/my-app/src/STT/나무21/audio/teat.wav',_binary '\0',21,8);
/*!40000 ALTER TABLE `word_result` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17  1:58:02
