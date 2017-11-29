module.exports = function(app) {
    app.post('/createsprint', function(request, response, next) {
        var numberSprint = request.body.numberSprint;
        var startDate = request.body.startDate;
        var endDate = request.body.endDate;
        var idprojet=request.body.idprojet;
    
        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");




            connection.query('SELECT COUNT(*) as counting from sprints where numero = "' + numberSprint + '"', function(error, data) {
                
                
                                if (error) {
                                    console.log(error);
                                    return next("Erreur de requete");
                                } else {
                                   
                                    if (data[0].counting > 0) {
                                       
                                        response.send(JSON.stringify({
                                            result: 0,
                                            
                                        }));
                                      
                                    } else {
                                        

            connection.query("insert into sprints (numero, idprojet,datedebut,datefin) values ('"+numberSprint+"','"+idprojet+"','"+startDate+"','"+endDate+"')", function(error, data) {

             
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