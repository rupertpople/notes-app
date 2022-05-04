const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');

class NotesView {
  constructor(model = new NotesModel, api = new NotesApi) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button')
    this.textFieldEl = document.querySelector('#add-note-text')
    console.log(this.mainContainerEl);

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.textFieldEl.value)
      this.textFieldEl.value = '';
      this.displayNotes();
    })
  }

  displayNotes() {
    document.querySelectorAll('div.note').forEach(note => {
      note.remove();
    });

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