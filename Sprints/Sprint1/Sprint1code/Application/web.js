var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    connection = require('express-myconnection'),
    mysql = require('mysql'),
    cors = require('cors'),
    app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(

    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cdp',
    }, 'request')

);
app.use(express.static(path.join(__dirname, './Public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/index.html'));
});


var router = express.Router();

app.use('/', router);

require('./Routes')(app);




var server = app.listen(3000, function() {

    console.log("Listening to port %s", server.address().port);

});
