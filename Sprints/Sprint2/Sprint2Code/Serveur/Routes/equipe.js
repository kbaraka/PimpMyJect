module.exports = function(app) {  

app.get('/equipes',function(request,response,next){
  // resultat des requêtes

  var res = [];

  
    request.getConnection(function(error,connection){
        if (error) return next("Impossible de se connecter");

        // Récupération des équipes avec l'id utilisateur
      connection.query('SELECT * FROM equipes where idutilisateur="' + request.query.id+'"', function(error, data) {
          if(error){
            console.log(error);
            return next("Impossible d'obtenir la liste des champs de la table equipes");
          }
          else {
            // Si liste équipes ok, récupération de la liste de tous les projets
            connection.query('SELECT * FROM projets', function(err, d) {
            if (err) {
              console.log(err);
              return next(err);
            }
            else {
              
              // Comparaison et récupération des id des projets de 'projets' avec les id de la table 'equipes'
              for (var i = 0; i < d.length; i++) {
                for (var j = 0; j < data.length; j++) {
                  if (d[i].id == data[j].idprojet) {
                    res.push(d[i]);
                  }
                }
              }
              
              // Envoi de la réponse
              response.send(JSON.stringify({
                result : res
              }));
            }
          });
         }
        });
    });
});


}