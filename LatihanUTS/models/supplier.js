const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    nama_supplier : {
        type : String,
    },
    email : {
        type : String,
    },
    kontak : {
        type : String,
    },
    alamat : {
        type : String,
    },
    tanggal_mendaftar : {
        type : Date,
    }
});

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;