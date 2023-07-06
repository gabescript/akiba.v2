-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Jul-2023 às 01:19
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `akiba`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `niveis_de_acesso` json NOT NULL,
  `usuario` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` longblob NOT NULL,
  `nome` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `idade` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `localidade` varchar(900) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `apelido` varchar(900) COLLATE utf8mb4_general_ci NOT NULL,
  `biografia` varchar(1500) COLLATE utf8mb4_general_ci NOT NULL,
  `gostos` json NOT NULL,
  `redes_sociais` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `niveis_de_acesso`, `usuario`, `senha`, `avatar`, `nome`, `idade`, `localidade`, `apelido`, `biografia`, `gostos`, `redes_sociais`) VALUES
(2, '[\"\"]', 'admin', 'admin', '', '', '', '', '', '', '[\"\"]', '[\"\"]');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
