-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 12 Décembre 2017 à 05:55
-- Version du serveur :  5.7.20-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_schema`
--

-- --------------------------------------------------------

--
-- Structure de la table `equipes`
--

CREATE TABLE `equipes` (
  `idutilisateur` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `equipes`
--

INSERT INTO `equipes` (`idutilisateur`, `idprojet`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3);

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

CREATE TABLE `projets` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `projets`
--

INSERT INTO `projets` (`id`, `nom`) VALUES
(1, 'CDP'),
(2, 'MDP'),
(3, 'ZDP');

-- --------------------------------------------------------

--
-- Structure de la table `sprints`
--

CREATE TABLE `sprints` (
  `id` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `datedebut` date NOT NULL,
  `datefin` date NOT NULL,
  `build` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `sprints`
--

INSERT INTO `sprints` (`id`, `idprojet`, `numero`, `datedebut`, `datefin`, `build`) VALUES
(1, 1, 7, '2017-12-12', '2017-01-12', ''),
(2, 1, 2, '2018-01-20', '2018-03-02', ''),
(3, 1, 3, '2019-02-02', '2020-04-02', '');

-- --------------------------------------------------------

--
-- Structure de la table `taches`
--

CREATE TABLE `taches` (
  `id` int(11) NOT NULL,
  `idsprint` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `encharge` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `isE2E` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `taches`
--

INSERT INTO `taches` (`id`, `idsprint`, `idprojet`, `description`, `numero`, `encharge`, `status`, `isE2E`) VALUES
(1, 7, 1, 'créer un composant inscription', 1, 'rihab', 'done', 'test e2e'),
(2, 3, 1, 'je suis une nouvelle tache ', 2, 'rourou', 'done', 'coucou');

-- --------------------------------------------------------

--
-- Structure de la table `userstorys`
--

CREATE TABLE `userstorys` (
  `id` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `priorite` int(255) NOT NULL,
  `difficulte` int(11) NOT NULL,
  `Test` varchar(255) NOT NULL,
  `Doc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `userstorys`
--

INSERT INTO `userstorys` (`id`, `idprojet`, `numero`, `description`, `priorite`, `difficulte`, `Test`, `Doc`) VALUES
(1, 1, 1, 'En tant que développeur, je souhaite m’inscrire dans l’application en donnant mon email et mon mot de passe.', 43, 10, '\n\n', 'https://dashboard.heroku.com/apps/murmuring-meadow-45192/resources/new?addonService=jawsdb'),
(2, 1, 3, 'En tant que développeur, je souhaite pouvoir obtenir la liste des équipes dont je suis membre afin de voir leur composition.', 2, 3, 'undefined', 'http://localhost:4200/equipes/workspace/backlog/listUserStory'),
(3, 1, 2, 'En tant que développeur, je souhaite pouvoir me connecter/déconnecter afin d’utiliser/quitter l’application.', 8, 23, 'http://localhost/phpmyadmin/sql.php?db=cdp&table=userstorys&token=6ee839b288080dce465b5864a4937e4c&pos=0', 'http://localhost:4200/equipes/workspace/backlog/listUserStory'),
(4, 1, 81, 'w02a17wjtbc', 20, 71, 'http://localhost/phpmyadmin/sql.php?db=cdp&table=userstorys&token=6ee839b288080dce465b5864a4937e4c&pos=0', 'http://localhost:4200/equipes/workspace/backlog/listUserStory');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `email`, `password`) VALUES
(1, 'test@gmail.com', '0000'),
(2, 'second@gmail.com', '0000');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `projets`
--
ALTER TABLE `projets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sprints`
--
ALTER TABLE `sprints`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `taches`
--
ALTER TABLE `taches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `userstorys`
--
ALTER TABLE `userstorys`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `projets`
--
ALTER TABLE `projets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `sprints`
--
ALTER TABLE `sprints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `taches`
--
ALTER TABLE `taches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `userstorys`
--
ALTER TABLE `userstorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
