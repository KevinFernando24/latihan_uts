const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    pengguna_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'pengguna',
        required : true,
    },
    produk_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Produk',
        required : true,
    },
    jumlah : {
        type : Number,
    },
    status : {
        type : String,
    },
    tanggal_pesanan : {
        type : Date,
    }
});

const pesanan = mongoose.model('Supplier', pesananSchema);
module.exports = pesanan;