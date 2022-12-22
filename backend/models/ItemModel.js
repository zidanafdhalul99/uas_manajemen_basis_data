import mongoose from "mongoose";

const Item = mongoose.Schema({
    merk:{
        type: String,
        required: true
    },
    harga:{
        type: Number,
        required: true
    },
    tgl:{
        type: Date,
        required: true
    }
});

export default mongoose.model('Items', Item);