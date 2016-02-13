var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
    name: String,
    level: Number
});

var attributeSchema = new Schema({
    name: String,
    value: Number
});

var skillSchema = new Schema({
    name: String,
    proficiency: Boolean,
    attribute: String
});

var characterSchema = new Schema({
    name: { type: String, unique: true },
    player: String,
    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now },
    race: String,
    alignment: String,
    classes: [classSchema],
    attributes: [attributeSchema],
    skills: [skillSchema],
    languages: [String]
});

var Character = mongoose.model('Character', characterSchema);

module.exports = Character;