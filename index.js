const notesModel = require('./notesModel');

const model = new notesModel();

console.log('The notes app is running');

console.log(model.getNotes());

model.addNote('This is an example note');
