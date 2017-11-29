module.exports = function(app) {

    app.post('/user', function(request, response, next) {
        var email = request.body.email;
        var password = request.body.password;
        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");

            var requete = connection.query('SELECT  * FROM utilisateurs where email = "' + email + '" and password = "' + password + '" ', function(error, data) {

                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {
                    response.send(JSON.stringify({
                        result: data[0]
                    }));
                }



            });

        });
    });

    app.post('/addUser', function(request, response, next) {
        var email = request.body.email;
        var password = request.body.password;

        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");


            connection.query('select COUNT(*) as counting from utilisateurs where email = "' + email + '"', function(error, data) {


                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {

                    if (data[0].counting > 0) {
                        response.send(JSON.stringify({
                            result: 0,

                        }));
                    } else {
                        connection.query('INSERT INTO `utilisateurs` (`email`, `password`) VALUES ("' + email + '", "' + password + '")', function(error, data) {

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

}