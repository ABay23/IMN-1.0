const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: user,
    },
    productName: {
      type: String,
      required: [true, 'Please add the name of the product'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a Password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('User', ticketSchema)
