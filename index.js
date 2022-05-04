const notesModel = require('./notesModel');
const NotesView = require('./NotesView')

const model = new notesModel();

console.log('The notes app is running');

console.log(model.getNotes());


const notesview = new NotesView(model)

console.log(notesview.displayNotes())
