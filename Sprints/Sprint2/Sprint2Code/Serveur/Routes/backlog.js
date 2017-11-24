module.exports = function(app) {


  app.get('/listUserStory',function(request,response,next) {



    // resultat des requêtes
    var res = [];

    request.getConnection(function(error,connection){
      //verif co a la bd
      if (error) return next("Impossible de se connecter");

      connection.query('SELECT * FROM userstorys where idbacklog = "' + request.query.idBacklog + '" ', function(error, data) {

        if (error) {
          console.log(error);
          return next("Erreur de requete");
        } else {
          res.push(data);

        }


      });

      //envoi de la reponse
      response.send(JSON.stringify({
        result : res
      }));

    });

    });

}
