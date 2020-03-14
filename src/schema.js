var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const budgetSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Enter expense"
    },
    value: {
      type: Number,
      required: "Enter price"
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Transaction = mongoose.model("Transaction", budgetSchema);
  
  module.exports = Transaction;