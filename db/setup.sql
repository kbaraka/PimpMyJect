
CREATE TABLE `equipes` (
  `idutilisateur` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `equipes` (`idutilisateur`, `idprojet`) VALUES
(1, 1),
(1, 2),
(2, 1);


CREATE TABLE `projets` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `projets` (`id`, `nom`) VALUES
(1, 'CDP'),
(2, 'MDP');


CREATE TABLE `sprints` (
  `id` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `datedebut` date NOT NULL,
  `datefin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `taches` (
  `id` int(11) NOT NULL,
  `idsprint` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `encharge` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `isE2E` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE `userstorys` (
  `id` int(11) NOT NULL,
  `idprojet` int(11) NOT NULL,
  `numero` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `priorite` int(255) NOT NULL,
  `difficulte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `userstorys` (`id`, `idprojet`, `numero`, `description`, `priorite`, `difficulte`) VALUES
(1, 1, 1, 'En tant que developpeur, je souhaite visiter la page X', 48, 10),
(2, 1, 3, 'En tant que developpeur, je souhaite modifier la page X', 2, 3),
(3, 1, 2, 'En tant que developpeur, je souhaite effacer  la page X', 8, 23);



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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `sprints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `taches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `userstorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
