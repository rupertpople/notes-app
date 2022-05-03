const notesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = model
  }

  displayNotes() {
    let notes = this.model.getNotes();
    console.log(notes)
    for (let i = 0; i < notes.length; i++) {
      let newElement = document.createElement('div.note');
      newElement.innerText = `${note[i]}`;
      let body = document.querySelector('body');
      body.append(newElement);
    };
  };

}

module.exports = NotesView;