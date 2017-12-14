
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `equipes` (
  `idutilisateur` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `equipes` (`idutilisateur`, `idprojet`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3);



CREATE TABLE `projets` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `projets` (`id`, `nom`) VALUES
(1, 'CDP'),
(2, 'MDP'),
(3, 'ZDP');



CREATE TABLE `sprints` (
  `id` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `datedebut` date NOT NULL,
  `datefin` date NOT NULL,
  `build` varchar(255) NOT NULL DEFAULT 'lien de votre build'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `sprints` (`id`, `idprojet`, `numero`, `datedebut`, `datefin`, `build`) VALUES
(1, 1, 7, '2017-12-12', '2017-01-12', ' lien de votre build '),
(2, 1, 2, '2018-01-20', '2018-03-02', 'lien de votre build'),
(3, 1, 3, '2019-02-02', '2020-04-02', 'lien de votre build'),
(4, 1, 10, '2019-02-02', '2021-02-02', 'lien de votre build');



CREATE TABLE `taches` (
  `id` int(11) NOT NULL,
  `idsprint` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `encharge` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `isE2E` varchar(255) NOT NULL,
  `numus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `taches` (`id`, `idsprint`, `idprojet`, `description`, `numero`, `encharge`, `status`, `isE2E`, `numus`) VALUES
(1, 7, 1, 'Creer un composant inscription', 1, 'Rihab', 'Done', 'false', 2),
(2, 7, 1, 'Rediger les Test E2E', 2, 'Taha', 'Done', 'false', 3),
(3, 7, 1, 'Executer les Test E2E', 3, 'Bastien', 'ToDo', 'false', 8),
(4, 7, 1, 'Creer un formulaire d inscription', 4, 'Omar', 'Done', 'true', 6),
(5, 7, 1, 'Creer un formulaire de connexion', 5, 'Kevin', 'Done', 'true', 6);



CREATE TABLE `userstorys` (
  `id` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `priorite` int(255) NOT NULL,
  `difficulte` int(11) NOT NULL,
  `Test` varchar(255) NOT NULL DEFAULT 'lien de votre test',
  `Doc` varchar(255) NOT NULL DEFAULT 'lien de votre documentation'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `userstorys` (`id`, `idprojet`, `numero`, `description`, `priorite`, `difficulte`, `Test`, `Doc`) VALUES
(1, 1, 1, 'En tant que developpeur, je souhaite m inscrire dans l application en donnant mon email et mon mot de passe.',2, 8, 'https://github.com/Momotoculteur/PimpMyJect/tree/master/Sprints/Sprint3', 'https://github.com/Momotoculteur/PimpMyJect/tree/master/Sprints/Sprint3'),
(2, 1, 2, 'En tant que developpeur, je souhaite me connecter',1, 13, 'https://github.com/Momotoculteur/PimpMyJect/tree/master/Sprints/Sprint3', 'https://github.com/Momotoculteur/PimpMyJect/tree/master/Sprints/Sprint3');



CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `utilisateurs` (`id`, `email`, `password`) VALUES
(1, 'test@gmail.com', '0000'),
(2, 'second@gmail.com', '0000');


ALTER TABLE `projets`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `sprints`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `taches`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `userstorys`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `projets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE `sprints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `taches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
ALTER TABLE `userstorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;