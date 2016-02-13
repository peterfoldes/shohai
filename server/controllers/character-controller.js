var path = require('path');
var Character = require(path.resolve('server/models/character'));

module.exports.create = function(request, response) {
    Character.find(function(err, characters) {
        if (err) {
            response.send(err);
        }
    
        response.json(characters);
    });
};