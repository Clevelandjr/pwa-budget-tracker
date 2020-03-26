const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    name: {
       type: String,
       trim: true,
       require: "Please enter a name for the transaction." 
    },
    value: {
        type: Number,
        required: "Please enter a dollar amount."
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
