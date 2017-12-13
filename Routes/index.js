module.exports = function(app){

    require('./login')(app);
    require('./projet')(app);
    require('./equipe')(app);
    require('./backlog')(app);
    require('./sprint')(app);
    require('./build')(app);
    require('./task')(app);

    
}