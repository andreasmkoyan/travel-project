/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 100424
Source Host           : localhost:3306
Source Database       : test_andreas

Target Server Type    : MYSQL
Target Server Version : 100424
File Encoding         : 65001

Date: 2023-06-05 13:18:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of countries
-- ----------------------------
INSERT INTO `countries` VALUES ('1', 'Arabia', '2023-06-05 07:34:37', '2023-06-05 07:34:37');
INSERT INTO `countries` VALUES ('3', 'armenia', '2023-06-05 07:34:39', '2023-06-05 07:51:07');
INSERT INTO `countries` VALUES ('5', 'Albania', '2023-06-05 07:52:05', '2023-06-05 07:52:05');
INSERT INTO `countries` VALUES ('6', 'Russia', '2023-06-05 07:52:16', '2023-06-05 07:52:16');
INSERT INTO `countries` VALUES ('7', 'USA', '2023-06-05 07:52:21', '2023-06-05 07:52:21');

-- ----------------------------
-- Table structure for travels
-- ----------------------------
DROP TABLE IF EXISTS `travels`;
CREATE TABLE `travels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count` int(11) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `ticket_price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `from_country` int(11) DEFAULT NULL,
  `to_country` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `from_country` (`from_country`),
  KEY `to_country` (`to_country`),
  CONSTRAINT `travels_ibfk_1` FOREIGN KEY (`from_country`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `travels_ibfk_2` FOREIGN KEY (`to_country`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of travels
-- ----------------------------
INSERT INTO `travels` VALUES ('8', '10', '00:00:00', '2500', '2023-06-05 07:53:14', '2023-06-05 07:53:14', '5', '6');
INSERT INTO `travels` VALUES ('9', '10', '00:00:00', '2500', '2023-06-05 07:53:20', '2023-06-05 07:53:20', '5', '7');
INSERT INTO `travels` VALUES ('10', '10', '00:00:00', '2500', '2023-06-05 07:53:25', '2023-06-05 07:53:25', '7', '6');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `emailToken` varchar(255) DEFAULT NULL,
  `isVerified` int(11) DEFAULT 0,
  `accessToken` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Andreas', 'Mkoyan', 'and@mail.ru', '$2b$10$n.UvtUFXcbwaBH6Nd6XLdeWmAAtqFjLCcdLcUtV06Jl4DeCycEkNS', '5E8D99', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFuZHJlYXMiLCJzdXJuYW1lIjoiTWtveWFuIiwiZW1haWwiOiJhbmRAbWFpbC5ydSIsImlzVmVyaWZpZWQiOjEsInJvbGUiOjAsImlhdCI6MTY4NTk1MzE4OCwiZXhwIjoxNjg1OTU2Nzg4fQ.751UJNxFB-LBTkQhjdCESiK1Zd1bcGlYzzprbVLMQ5E', '0', '2023-06-05 05:48:04', '2023-06-05 08:19:48');
INSERT INTO `users` VALUES ('2', 'Andreas', 'Mkoyan', 'vah@mail.ru', '$2b$10$WOskGSDaWOw21pyzuWaMWOs0Yy06LOIrBGTf8Mm85oDQ1rDsI8Ihy', '56BFE1', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkFuZHJlYXMiLCJzdXJuYW1lIjoiTWtveWFuIiwiZW1haWwiOiJ2YWhAbWFpbC5ydSIsImlzVmVyaWZpZWQiOjEsInJvbGUiOjEsImlhdCI6MTY4NTk1NDA0MiwiZXhwIjoxNjg1OTU3NjQyfQ.7iBPGEcfB_a9tHKCdMA9W7g6_vWmgz_GzPxwVWWWhUA', '1', '2023-06-05 06:24:24', '2023-06-05 08:34:02');
INSERT INTO `users` VALUES ('3', 'Asd', 'Mkoyan', 'sus@mail.ru', '$2b$10$v4vyn.7Q9wLEDCDfWxGFo.WLD5Umb719VIYTzjsXku6jsdq8COEo.', '7F62A0', '1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkFzZCIsInN1cm5hbWUiOiJNa295YW4iLCJlbWFpbCI6InN1c0BtYWlsLnJ1IiwiaXNWZXJpZmllZCI6MSwicm9sZSI6MSwiaWF0IjoxNjg1OTUyNjA4LCJleHAiOjE2ODU5NTYyMDh9.et3VHE3BYuQ6HQkEkne3vEsz5tZnilspG1ZL29mOuFo', '1', '2023-06-05 07:31:51', '2023-06-05 08:10:08');

-- ----------------------------
-- Table structure for usertravels
-- ----------------------------
DROP TABLE IF EXISTS `usertravels`;
CREATE TABLE `usertravels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `travelId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `travelId` (`travelId`),
  KEY `userId` (`userId`),
  CONSTRAINT `usertravels_ibfk_1` FOREIGN KEY (`travelId`) REFERENCES `travels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usertravels_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertravels
-- ----------------------------
INSERT INTO `usertravels` VALUES ('3', '2023-06-05 07:53:57', '2023-06-05 07:53:57', '9', '2');
INSERT INTO `usertravels` VALUES ('5', '2023-06-05 07:54:07', '2023-06-05 07:54:07', '10', '1');
SET FOREIGN_KEY_CHECKS=1;
