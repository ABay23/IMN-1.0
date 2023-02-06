const mongoose = require('mongoose')

const userModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a Name'],
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
module.exports = ('User', userModelSchema)
