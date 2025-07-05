const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  toggleCompleteNote
} = require("../controllers/noteController");

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.patch("/changeStauts/:id", toggleCompleteNote);

module.exports = router;
