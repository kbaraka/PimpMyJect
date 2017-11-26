module.exports = function(app) {
    app.post('/createsprint', function(request, response, next) {
        var numberSprint = request.body.numberSprint;
        var startDate = request.body.startDate;
        var endDate = request.body.endDate;
        var idprojet=request.body.idprojet;
    
        request.getConnection(function(error, connection) {

            if (error) return next("Impossible de ce connecter");

            connection.query("insert into sprints (numero, idprojet,datedebut,datefin) values ('"+numberSprint+"','"+idprojet+"','"+startDate+"','"+endDate+"')", function(error, data) {


                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                }  else
                {
                    response.send(JSON.stringify({ 
                        result : data
                    }));
                }
                
                
    
             });
    
        });
    
    });
}
    
