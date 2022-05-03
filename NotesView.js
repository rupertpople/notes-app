const notesModel = require('./notesModel');

class NotesView {
  constructor(model = new notesModel) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl);
  }

  displayNotes() {

    this.notes = this.model.getNotes();
    for (let i = 0; i < this.notes.length; i++) {
      let newElement = document.createElement('div');
      newElement.classList.add('note')
      newElement.innerText = `${this.notes[i]}`;
      this.mainContainerEl.append(newElement);
    };
  };

}

module.exports = NotesView;