/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');
const NotesModel = require('./notesModel')

const mockedModel = {
  getNotes: () => {
    ['This is an example note']
  }
};

describe('NotesView', () => {
  describe('.displayNotes', () => {
    it("gets the notes from model and displays it as a new div element with class 'note'", () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NotesModel
      model.addNote('This is an example note');
      const notesView = new NotesView(model);

      notesView.displayNotes();

      expect(document.querySelectorAll('div.note').length).toBe(1);
    });

    it('correct number of notes are displayed when display notes is called twice', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NotesModel
      model.addNote('This is an example note');
      const notesView = new NotesView(model);

      notesView.displayNotes();
      notesView.displayNotes();

      expect(document.querySelectorAll('div.note').length).toBe(1);
    });
  });

  it('addes a note which is then added to the list of notes displayed', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new NotesView;
    const messageInput = document.querySelector('#add-note-text');
    messageInput.value = 'Walk the dogs';
    const addNotebuttonEl = document.querySelector('#add-note-button');
    addNotebuttonEl.click();
    const notes = document.querySelector('div.note');
    expect(notes.innerText).toEqual('Walk the dogs');
  });
});