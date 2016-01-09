var path = require('path');
var Character = require('./models/character');

module.exports = function(app) {
    app.get('/api/characters', function(req, res) {
        Character.find(function(err, characters) {
            if (err) {
                res.send(err);
            }
      
            res.json(characters);
        });
    });

    app.get('*', function(req, res) {
        res.sendFile(path.resolve('public/views/index.html'));
    });
}