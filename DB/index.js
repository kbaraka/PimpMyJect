const mysql = require('../node_modules/mysql'),
    connection = require('../node_modules/express-myconnection');

module.exports = function (app) {
    settings = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'db_schema',
    };
    app.use(connection(mysql, settings, 'request'));


}
