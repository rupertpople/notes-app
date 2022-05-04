/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const NotesView = require('./NotesView');

const mockedModel = {
  getNotes: () => ['This is an example note', 'Another note']
  //corrected the syntax - there were curly brackets that shouldn't be there.
  
};

describe('NotesView', () => {
  describe('.displayNotes', () => {
    it("gets the notes from model and displays it as a new div element with class 'note'", () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const notesView = new NotesView(mockedModel);
      notesView.displayNotes();
      expect(document.querySelectorAll('div.note').length).toBe(2);

    })
  })

})