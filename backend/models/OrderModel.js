import mongoose from "mongoose";

const Order = mongoose.Schema({
    tanggal:{
        type: Date,
        required: true
    },
    merk:{
        type: String,
        required: true
    },
    jumlah:{
        type: Number,
        required: true
    },
    harga_beli:{
        type: Number,
        required:true
    },
    harga_jual:{
        type: Number,
        required:true
    },
});

export default mongoose.model('Orders', Order);