module.exports = function (app) {
    app.post('/listSprintBuild', function (request, response, next) {
        var numProjet = request.body.numProjet;
        var numSprint = request.body.numSprint;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('SELECT build FROM sprints WHERE idprojet = ' + numProjet + ' AND numero = ' + numSprint + '', function (error, data) {

                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {

                    response.send(JSON.stringify({
                        result: data
                    }));

                }
            });




        });


    });

    app.post('/listSprintBuildChange', function (request, response, next) {
        var numProjet = request.body.numProjet;
        var numSprint = request.body.numSprint;
        var newBuild = request.body.newBuild;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            var requete = connection.query('UPDATE sprints SET build =" ' + newBuild + ' " where idprojet = ' + numProjet + ' and  numero = ' + numSprint + '', function (error, data) {

                if (error) {
                    console.log(error);

                    return next("Erreur de requete");
                } else {
                    response.send(JSON.stringify({
                        result: data.affectedRows
                    }));
                }



            });

        });
    });




}