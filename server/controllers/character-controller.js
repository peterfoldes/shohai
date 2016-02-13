var path = require('path');
var Character = require(path.resolve('server/models/character'));

module.exports.create = function(request, response) {
    Character.find(function(err, characters) {
        if (err) {
            response.send(err);
        }
    
        if (characters.length > 1) {
            response.json(characters);
        } else {
            var c = new Character({
                name: "Velch",
                player: "Ulmar",
            });
            response.json([c]);
        }
    });
};
