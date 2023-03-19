const { Schema, model } = require('mongoose')

const payMoneyToSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  itemPurchased: { type: String, required: true },
  quantityPurchased: { type: Number, required: true },
  unitCost:  { type: Number, required: true },
  tax:  { type: Number, required: true },
  saleType:  { type: Number, required: true },//categoy
  accountNumber:  { type: Number, required: true },
  class:{ type: String, required: true },

  category: {type: String},
  imageUrl: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = model('PayMoneyTo', payMoneyToSchema)