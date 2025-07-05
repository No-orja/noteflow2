const Note = require("../models/noteModel");

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

exports.createNote = async (req, res) => {
  const { title, content, createdDate } = req.body;
  const note = await Note.create({ title, content, createdDate });
  res.json(note);
};

exports.updateNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};

exports.toggleCompleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  note.completed = !note.completed;
  await note.save();
  res.json(note);
};
