module.exports = function(app) {


    app.post('/invite', function(request, response, next) {
        var invitEmail = request.body.invitEmail;
        var projectName = request.body.projectName;


        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('select COUNT(*) as counting from equipes where idutilisateur = (SELECT id from utilisateurs where email = "' + invitEmail + '") AND idprojet = (select id from projets where nom = "' + projectName + '")', function(error, data) {


                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {

                    if (data[0].counting > 0) {
                        response.send(JSON.stringify({
                            result: 0,

                        }));
                    } else {
                        connection.query(' INSERT INTO equipes ( idutilisateur, idprojet ) SELECT A.id, B.id FROM utilisateurs A, projets B WHERE A.email="' + invitEmail + '" AND B.nom="' + projectName + '" ', function(error, data) {

                            if (error) {
                                console.log(error);
                                return next("Erreur de requete");
                            } else {
                                let valid = 0;
                                if (data.affectedRows > 0) valid = 1;


                                response.send(JSON.stringify({
                                    result: valid,

                                }));

                            }

                        });

                    }

                }
            });




        });



    });


    app.post('/createproject', function(request, response, next) {
        var project = request.body.project;
        var userid = request.body.user;


        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('select COUNT(*) as counting from projets where nom = "' + project + '"', function(error, data) {


                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {

                    if (data[0].counting > 0) {
                        response.send(JSON.stringify({
                            result: 0,

                        }));
                    } else {
                        connection.query(' INSERT INTO projets (nom) VALUES("' + project + '")', function(error, data) {

                            if (error) {
                                console.log(error);
                                return next("Erreur de requete");
                            } else {
                                let valid = 0;
                                if (data.affectedRows > 0) valid = 1;


                                connection.query(' INSERT INTO equipes (idutilisateur,idprojet) VALUES(' + userid + ',' + data.insertId + ')');
                                response.send(JSON.stringify({
                                    result: valid,

                                }));

                            }

                        });

                    }

                }
            });




        });



    });
}