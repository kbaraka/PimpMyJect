module.exports = function (app) {

    app.post('/listTasks', function (request, response, next) {
        var idProjet = request.body.idProjet;
        var idSprint = request.body.idSprint;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('SELECT * FROM taches WHERE idsprint = ' + idSprint + ' and idprojet = ' + idProjet, function (error, data) {

                if (error) {
                    return next("Erreur de requete");
                } else {

                    response.send(JSON.stringify({
                        result: data
                    }));

                }
            });

        });


    });

    app.post('/deleteTask', function (request, response, next) {
        var idSprint = request.body.idSprint;
        var numTask = request.body.numTask;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('DELETE FROM taches WHERE idsprint = ' + idSprint + ' AND numero = ' + numTask + '', function (error, data) {

                if (error) {
                    return next("Erreur de requete");
                } else {

                    response.send(JSON.stringify({
                        result: data
                    }));
                }
            });

        });


    });

    app.post('/addTask', function (request, response, next) {
        var idProjet = request.body.idprojet['0'].id;
        var idSprint = request.body.idsprint;
        var tasknumber = request.body.tasknumber;
        var usnumber = request.body.usnumber;
        var description = request.body.description;
        var person = request.body.person;
        var status = request.body.status;
        var test = request.body.test;


        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('INSERT INTO taches (idsprint, idprojet, description, numero, encharge, status, isE2E, numus) ' +
                "VALUES (" + idSprint + ", " + idProjet + ", '" + description + "', " + tasknumber + ", '" + person +
                "', '" + status + "', '" + test + "', " + usnumber + ")", function (error, data) {

                    if (error) {
                        return next("Erreur de requete");
                    } else {

                        response.send(JSON.stringify({
                            result: data
                        }));
                    }
                });

        });


    });





}