module.exports = function(app) {


  app.get('/listUserStory',function(request,response,next) {



    // resultat des requêtes
    

    request.getConnection(function(error,connection){
      //verif co a la bd
      if (error) return next("Impossible de se connecter");

      connection.query('SELECT * FROM userstorys where idprojet = "' + request.query.idBacklog + '" ', function(error, data) {

        if (error) {
          console.log(error);
          return next("Erreur de requete");
        } else {
          
          response.send(JSON.stringify({

            result:data
          }));

        }


      });
      
      //envoi de la reponse

     

    });

    });


  app.post('/changeprio', function (request, response, next) {
    var id = request.body.id;
    var description = request.body.description;
    var prio = request.body.prio;

    request.getConnection(function (error, connection) {

      if (error) return next("Impossible de ce connecter");

      var requete = connection.query('UPDATE userstorys set priorite =' + prio + ' where id = ' + id + ' and  description = "' + description + '" ', function (error, data) {

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
