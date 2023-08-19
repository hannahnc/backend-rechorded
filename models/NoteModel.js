const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title:{ type: String, required: true} ,
    artist:{ type: String, required: false},
    youtube:{ type: String, required: false},
    major:{ type: String, required: false},
    body:{ type: String, required: true} ,
    user:{ type: String, required: true} ,
},
{
    versionKey: false,
}
);

const NoteModel = mongoose.model("note", noteSchema);

module.exports = {
    NoteModel,
};