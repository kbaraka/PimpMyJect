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
  `datefin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `sprints` (`id`, `idprojet`, `numero`, `datedebut`, `datefin`) VALUES
(1, 1, 7, '2017-12-12', '2017-01-12'),
(2, 1, 2, '2018-01-20', '2018-03-02'),
(3, 1, 3, '2019-02-02', '2020-04-02');



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
  `difficulte` int(11) NOT NULL,
  `Test` varchar(255) NOT NULL,
  `Doc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `userstorys` (`id`, `idprojet`, `numero`, `description`, `priorite`, `difficulte`, `Test`, `Doc`) VALUES
(1, 1, 1, 'En tant que développeur, je souhaite m’inscrire dans l’application en donnant mon email et mon mot de passe.', 43, 10, 'http://localhost:4200/equipes/workspace/backlog/listUserStory', 'https://dashboard.heroku.com/apps/murmuring-meadow-45192/resources/new?addonService=jawsdb'),
(2, 1, 3, 'En tant que développeur, je souhaite pouvoir obtenir la liste des équipes dont je suis membre afin de voir leur composition.', 2, 3, 'http://localhost/phpmyadmin/sql.php?db=cdp&table=userstorys&token=6ee839b288080dce465b5864a4937e4c&pos=0', 'http://localhost:4200/equipes/workspace/backlog/listUserStory'),
(3, 1, 2, 'En tant que développeur, je souhaite pouvoir me connecter/déconnecter afin d’utiliser/quitter l’application.', 8, 23, 'http://localhost/phpmyadmin/sql.php?db=cdp&table=userstorys&token=6ee839b288080dce465b5864a4937e4c&pos=0', 'http://localhost:4200/equipes/workspace/backlog/listUserStory'),
(4, 1, 81, 'w02a17wjtbc', 20, 71, 'http://localhost/phpmyadmin/sql.php?db=cdp&table=userstorys&token=6ee839b288080dce465b5864a4937e4c&pos=0', 'http://localhost:4200/equipes/workspace/backlog/listUserStory');



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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE `taches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `userstorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

