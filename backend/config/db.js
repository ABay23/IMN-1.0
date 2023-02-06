import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline)
    process.exit(1)
  }
}

export default connectDB
