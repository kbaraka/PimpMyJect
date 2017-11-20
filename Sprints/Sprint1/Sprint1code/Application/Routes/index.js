module.exports = function(app){

    require('./login')(app);
    require('./projet')(app);
    require('./equipe')(app);

    
}