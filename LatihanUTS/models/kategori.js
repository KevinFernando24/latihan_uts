const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama_kategori : {
        type : String,
    },
    deskripsi : {
        type : String,
    },
    created_at: {
        type : Date,
    },
    updated_at : {
        type : Date,
    },
    Status : {
        type : Boolean,
    }
});

const kategori = mongoose.model('Kategori', kategoriSchema);
module.exports = kategori;