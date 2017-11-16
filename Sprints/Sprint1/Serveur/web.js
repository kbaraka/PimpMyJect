var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express();

var cors=require('cors');// pour éviter le probleme de Access-Control-Allow-Origin
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:true,credentials: true}));




/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

app.use(

    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'cdp',
    },'request')

);

app.get('/',function(request,response){
    response.send('Welcome');
});


var router = express.Router();
app.use('/', router);
router.route('/addUser').post(function (request, response, next) {
    var email = request.body.email;
    var password = request.body.password;

    request.getConnection(function (error, connection) {

        if (error) return next("Impossible de ce connecter");


            connection.query('select COUNT(*) as counting from utilisateurs where email = "' + email + '"', function (error, data) {


                if (error) {
                    console.log(error);
                    return next("Erreur de requete");
                }
                else {

                    if (data[0].counting > 0) {
                        response.send(JSON.stringify({
                            result: 0,

                        }));
                    }
                    else {
                         connection.query('INSERT INTO `utilisateurs` (`email`, `password`) VALUES ("' + email + '", "' + password + '")', function (error, data) {

                            if (error) {
                                console.log(error);
                                return next("Erreur de requete");
                            }
                            else {
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
router.route('/user').post(function(request,response,next){
	var email = request.body.email;
	var password = request.body.password;

    request.getConnection(function(error,connection){

        if (error) return next("Impossible de ce connecter");

        var requete = connection.query('SELECT  * FROM utilisateurs where email = "'+email+'" and password = "'+password+'" ',function(error,data){

            if(error){
                console.log(error);
                return next("Erreur de requete");
            }
            else
            {
            	response.send(JSON.stringify({ 
            		result : data[0]
            	}));
            }
			
            

         });

    });

});



router.route('/invite').post(function(request,response,next){
var invitEmail = request.body.invitEmail;
var projectName = request.body.projectName;


request.getConnection(function(error,connection){
    
    if (error) return next("Impossible de ce connecter");

connection.query('select COUNT(*) as counting from equipes where idutilisateur = (SELECT id from utilisateurs where email = "'+invitEmail+'") AND idprojet = (select id from projets where nom = "'+projectName+'")',function(error,data){
   

        if(error){
            console.log(error);
            return next("Erreur de requete");
        }
        else
        {
        
            if(data[0].counting > 0)
            {
            	response.send(JSON.stringify({ 
				                result : 0,
				                
				            }));
            }
            else
            {
            	connection.query(' INSERT INTO equipes ( idutilisateur, idprojet ) SELECT A.id, B.id FROM utilisateurs A, projets B WHERE A.email="'+invitEmail+'" AND B.nom="'+projectName+'" ',function(error,data){

				        if(error){
				            console.log(error);
				            return next("Erreur de requete");
				        }
				        else
				        {
				        	let valid = 0;
				        	if(data.affectedRows > 0) valid = 1;


				            response.send(JSON.stringify({ 
				                result : valid,
				                
				            }));
				            
				        }           

				});

            }
            
        }    
          });       





});



});


router.route('/createproject').post(function(request,response,next){
var project = request.body.project;
var userid = request.body.user;


request.getConnection(function(error,connection){
    
    if (error) return next("Impossible de ce connecter");

connection.query('select COUNT(*) as counting from projets where nom = "'+project+'"',function(error,data){
   

        if(error){
            console.log(error);
            return next("Erreur de requete");
        }
        else
        {
        
            if(data[0].counting > 0)
            {
            	response.send(JSON.stringify({ 
				                result : 0,
				                
				            }));
            }
            else
            {
            	connection.query(' INSERT INTO projets (nom) VALUES("'+project+'")',function(error,data){

				        if(error){
				            console.log(error);
				            return next("Erreur de requete");
				        }
				        else
				        {
				        	let valid = 0;
				        	if(data.affectedRows > 0) valid = 1;
				        	

				        	connection.query(' INSERT INTO equipes (idutilisateur,idprojet) VALUES('+userid+','+data.insertId+')');
				            response.send(JSON.stringify({ 
				                result : valid,
				                
				            }));
				            
				        }           

				});

            }
            
        }    
          });       





});



});



router.route('/equipes').get(function(request,response,next){
  // resultat des requêtes
  var res = [];

    request.getConnection(function(error,connection){
        if (error) return next("Impossible de se connecter");

        // Récupération des équipes avec l'id utilisateur
        connection.query('SELECT * FROM equipes where idutilisateur="'+request.query.id+'"', function(error, data) {
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






var server = app.listen(3000,function(){

   console.log("Listening to port %s",server.address().port);

});
