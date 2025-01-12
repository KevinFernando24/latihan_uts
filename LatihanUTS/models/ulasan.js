const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Produk',
        required : true,
    },
    pengguna_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Pengguna',
        required : true,
    },
    rating : {
        type : Number,
    },
    komentar : {
        type : String,
    },
    tanggal_ulasan: {
        type : Date,
    }
});

const ulasan = mongoose.model('Produk', ulasanSchema);
module.exports = ulasan;