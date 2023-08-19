const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {authenticator} = require("../middlewares/authenticator");
const {PdfModel} = require("../models/PdfModel");

const pdfRouter = express.Router();
pdfRouter.use(authenticator);

pdfRouter.get("/", async (req, res)=>{

})

module.exports = {
    pdfRouter,
};