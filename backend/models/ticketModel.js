const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)
// {
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User',
//   },
//   productName: {
//     type: String,
//     required: [true, 'Please add the name of the product'],
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please add an email'],
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: [true, 'Please add a Password'],
//   },
//   isAdmin: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
// },
// {
//   timestamps: true,
// }
// )
module.exports = mongoose.model('Ticket', ticketSchema)
