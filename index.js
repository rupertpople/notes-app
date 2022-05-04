const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

const model = new NotesModel();
const api = new NotesApi();
const notesview = new NotesView(model, api);

console.log('The notes app is running');

console.log(model.getNotes());

console.log(notesview.displayNotes())
