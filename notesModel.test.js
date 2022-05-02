const notesModel = require('./notesModel');

describe('notesModel class', () => {
  test('model.getNotes on new model returns empty notes array', () => {
    let model = new notesModel();
    expect(model.getNotes()).toEqual([]);
  });

  test('model.addNote() adds items to the notes array', () => {
    let model = new notesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual([
      'Buy milk',
      'Go to the gym'
    ]);
  });
});