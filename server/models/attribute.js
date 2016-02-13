String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function Attribute(name) {
    this.name = name.capitalizeFirstLetter();
    this._modifierTable = {
        3: -3, 4: -3, 5: -3,
        6: -2, 7: -2,
        8: -1, 9: -1,
        10: 0, 11: 0,
        12: 1, 13: 1,
        14: 2, 15: 2,
        16: 3, 17: 3,
        18: 4, 19: 4
    };
}

Attribute.prototype.abbreviation = function() {
    return this.name.substr(0, 3);
};

Attribute.prototype.modifier = function(value) {
    return this._modifierTable[value];
};

Attribute.findByName = function(name) {
    for (var attribute in Attributes) {
        if (Attributes[attribute].name === name
                || Attributes[attribute].abbreviation() === name) {
            return Attributes[attribute];
        }
    }
};

var Attributes = {
    STRENGTH: new Attribute("Strength"),
    DEXTERITY: new Attribute("Dexterity"),
    CONSTITUTION: new Attribute("Constitution"),
    INTELLIGENCE: new Attribute("Intelligence"),
    WISDOM: new Attribute("Wisdom"),
    CHARISMA: new Attribute("Charisma")
};

module.exports = Attribute;