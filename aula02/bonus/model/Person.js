const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
salary: {
type: Number,
required: true
},
approved: {
type: Boolean,
required: true
}
});

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
