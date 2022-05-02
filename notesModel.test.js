const notesModel = require('./notesModel');

describe('notesModel class', () => {
  test('model.getNotes on new model returns empty array', () => {
    model = new notesModel();
    expect(model.getNotes()).toEqual([]);
  });
});