var path = require('path');
var characterController = require(path.resolve("server/controllers/character-controller"));

module.exports = function(app) {
    app.get('/api/characters', characterController.create);
    app.post('/api/characters', characterController.create);

    // Frontend routes
    app.get('*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};