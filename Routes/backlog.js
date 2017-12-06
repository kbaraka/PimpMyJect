module.exports = function(app) {
    app.post("/backlog/create-us", function(request, response, next) {
      var projectId = request.body.projectID;
      var number = request.body.numberUS;
      var priority = request.body.priorityUS;
      var difficulty = request.body.difficultyUS;
      var description = request.body.descriptionUS;

      if (projectId != null && number != null && priority != null && difficulty != null && description != null) {
        request.getConnection(function(error,connection){
          if (error) return next("Impossible de se connecter");

          // Récupération des équipes avec l'id utilisateur
          connection.query("INSERT INTO userstorys(idprojet, numero, description, priorite, difficulte) "
                        + "VALUES('" + projectId + "', '" + number + "', '" + description + "', '" + priority + "', '" + difficulty + "')",
          function(error, data) {
            if(error){
              console.log(error);
              return next("Ajout impossible");
            }
            else {
              let valid = 0;
              if (data.affectedRows > 0) {
                  valid = 1;
              }

              response.send(JSON.stringify({
                  result: valid
              }));
              }
          });
        });
      }
      else {
        response.send(JSON.stringify({
          result: "invalid form"
        }));
        return next("Formulaire invalide");
      }
    });

  app.post('/listUserStory',function(request,response,next) {



    // resultat des requêtes
    

    request.getConnection(function(error,connection){
      //verif co a la bd
      if (error) return next("Impossible de se connecter");

      connection.query('SELECT * FROM userstorys where idprojet = "' + request.body.idBacklog + '" ', function(error, data) {

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
  app.post('/changetest', function (request, response, next) {
    var id = request.body.id;
    var description = request.body.description;
    var test = request.body.test;

    request.getConnection(function (error, connection) {

      if (error) return next("Impossible de ce connecter");

      var requete = connection.query('UPDATE userstorys set Test ="' + test + '" where id = ' + id + ' and  description = "' + description + '" ', function (error, data) {

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
  app.post('/changedoc', function (request, response, next) {
    var id = request.body.id;
    var description = request.body.description;
    var doc = request.body.doc;

    request.getConnection(function (error, connection) {

      if (error) return next("Impossible de ce connecter");

      var requete = connection.query('UPDATE userstorys set Doc ="' + doc + '" where id = ' + id + ' and  description = "' + description + '" ', function (error, data) {

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
