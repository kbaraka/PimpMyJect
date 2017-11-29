module.exports = function(app) {

app.post('/sprints', function(request, response, next) {
        var idprojet = request.body.idprojet;
        
        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query('SELECT * FROM sprints WHERE idprojet = '+ idprojet +'', function(error, data) {
                
                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                } else {

                    response.send(JSON.stringify({
                        result : data
                    }));

                }
            });




        });



    });


}