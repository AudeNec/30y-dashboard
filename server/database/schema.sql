-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema 30y_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `30y_db` DEFAULT CHARACTER SET utf8 ;
USE `30y_db` ;

-- -----------------------------------------------------
-- Table `30y_db`.`daily_data`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `30y_db`.`daily_data` ;

CREATE TABLE IF NOT EXISTS `30y_db`.`daily_data` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `mood` INT NULL,
  `money_spent` INT NULL,
  `sport` INT NULL,
  `alcohol` TINYINT NULL,
  `friends` TINYINT NULL,
  `healthy_food` TINYINT NULL,
  `working` TINYINT NULL,
  `clean` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `30y_db`.`content_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `30y_db`.`content_type` ;

CREATE TABLE IF NOT EXISTS `30y_db`.`content_type` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `30y_db`.`platform`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `30y_db`.`platform` ;

CREATE TABLE IF NOT EXISTS `30y_db`.`platform` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `30y_db`.`content`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `30y_db`.`content` ;

CREATE TABLE IF NOT EXISTS `30y_db`.`content` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `new` TINYINT NULL,
  `rating` INT NULL,
  `difficulty` INT NULL,
  `content_type_id` INT NOT NULL,
  `platform_id` INT NOT NULL,
  `img` INT NULL,
  PRIMARY KEY (`id`, `content_type_id`),
  INDEX `fk_content_content_type_idx` (`content_type_id` ASC) VISIBLE,
  INDEX `fk_content_platform1_idx` (`platform_id` ASC) VISIBLE,
  CONSTRAINT `fk_content_content_type`
    FOREIGN KEY (`content_type_id`)
    REFERENCES `30y_db`.`content_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_content_platform1`
    FOREIGN KEY (`platform_id`)
    REFERENCES `30y_db`.`platform` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
