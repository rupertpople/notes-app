/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const NotesView = require('./NotesView');
const notesModel = require('./notesModel')

const mockedModel = {
  getNotes: () => {
    ['This is an example note']
  }
};

describe('NotesView', () => {
  describe('.displayNotes', () => {
    it("gets the notes from model and displays it as a new div element with class 'note'", () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new notesModel
      model.addNote('This is an example note');
      const notesView = new NotesView(model);

      notesView.displayNotes();

      expect(document.querySelectorAll('div.note').length).toBe(1);

    })
  })

})