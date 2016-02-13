var Attributes = require('attribute');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function Skill(name, attribute) {
    this.name = name.capitalizeFirstLetter();
    this.attribute = attribute.capitalizeFirstLetter();
}

Skill.findByName = function(name) {
    for (var skill in Skills) {
        if (Skills[skill].name === name) {
            return Skills[skill];
        }
    }
};

var Skills = {
    ACROBATICS: new Skill("Acrobatics", Attributes.DEXTERITY),
};

module.exports = Skill;