const mongoose = require("mongoose");

const penggunaSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    tanggal_daftar : {
        type : Date,
    },
    password : {
        type : String,
    },
    alamat : {
        type : String,

    }
});

const pengguna = mongoose.model('Produk', penggunaSchema);
module.exports = pengguna;