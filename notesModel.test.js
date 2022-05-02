const notesModel = require('./notesModel');

describe('notesModel class', () => {

  test('#getNotes on new model returns empty notes array', () => {
    let model = new notesModel();
    expect(model.getNotes()).toEqual([]);
  });

  test('#addNote adds items to the notes array', () => {
    let model = new notesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual([
      'Buy milk',
      'Go to the gym'
    ]);
  });

  test('#reset deletes existing notes to return to empty notes array', () => {
    let model = new notesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
});