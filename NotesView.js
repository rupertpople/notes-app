const notesModel = require('./notesModel');

class NotesView {
  constructor(model = new notesModel) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button')
    this.textFieldEl = document.querySelector('#add-note-text')
    console.log(this.mainContainerEl);

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.textFieldEl.value)
      this.displayNotes();
    })
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