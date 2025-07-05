const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");


dotenv.config({ path: "config.env" });

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(  process.env.MONGO_URI || "mongodb+srv://noor:ENl9vnIjoBEgeeY2@cluster0.6maemza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use("/notes", require("../routes/notes"));
app.use("/todos", require("../routes/todos"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
