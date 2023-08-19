const mongoose = require("mongoose");

const pdfSchema = mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: false },
    youtube: { type: String, required: false },
    major: { type: String, required: false },
    body: { type: String, required: true },
},
    {
        versionKey: false,
    }
);

const PdfModel = mongoose.model("pdf", pdfSchema);

module.exports = {
    PdfModel,
};