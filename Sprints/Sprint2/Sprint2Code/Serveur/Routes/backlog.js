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

}
