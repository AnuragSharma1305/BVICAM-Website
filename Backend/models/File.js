const mongoose = require("mongoose");
// How to create a model
// Step 1 :require mongoose
// Step 2 :Create a mongoose schema (structure of a user)
// Step 3 : Create a model

const File = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
});

const FileModel = mongoose.model("File", File);

module.exports = FileModel;
