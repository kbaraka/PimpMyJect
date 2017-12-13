module.exports = function (app) {
    app.post('/createsprint', function (request, response, next) {
        var numberSprint = request.body.numberSprint;
        var startDate = request.body.startDate;
        var endDate = request.body.endDate;
        var idprojet = request.body.idprojet;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");




            connection.query('SELECT COUNT(*) as counting from sprints where numero = "' + numberSprint + '"', function (error, data) {


                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {

                    if (data[0].counting > 0) {

                        response.send(JSON.stringify({
                            result: 0,

                        }));

                    } else {


                        connection.query("insert into sprints (numero, idprojet,datedebut,datefin) values ('" + numberSprint + "','" + idprojet + "','" + startDate + "','" + endDate + "')", function (error, data) {


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
    app.post('/sprints', function (request, response, next) {
        var idprojet = request.body.idprojet;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('SELECT * FROM sprints WHERE idprojet = ' + idprojet + '', function (error, data) {

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

    app.post('/listTasks', function (request, response, next) {
        //  var idProjet = request.body.idProjet;
        var idSprint = request.body.idSprint;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('SELECT * FROM taches WHERE idsprint = ' + idSprint + '', function (error, data) {

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

    app.post('/deleteTask', function (request, response, next) {
        //  var idProjet = request.body.idProjet;
        var idSprint = request.body.idSprint;
        var numTask = request.body.numTask;

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('DELETE FROM taches WHERE idsprint = ' + idSprint + ' AND numero = ' + numTask + '', function (error, data) {

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

    app.post('/addTask', function (request, response, next) {
        var idProjet = request.body.idprojet['0'].id;
        var idSprint = request.body.idsprint;
        var tasknumber = request.body.tasknumber;
        var usnumber = request.body.usnumber;
        var description = request.body.description;
        var person = request.body.person;
        var status = request.body.status;
        var test = request.body.test;

        console.log("addtask");

        request.getConnection(function (error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('INSERT INTO taches (idsprint, idprojet, description, numero, encharge, status, isE2E, numus) ' + 
                            "VALUES (" + idSprint + ", " + idProjet + ", '" + description + "', " + tasknumber + ", '" + person +
                            "', '" + status + "', '" + test + "', " + usnumber + ")", function (error, data) {

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


  


}