import express from 'express'
// const dotenv = require('dotenv').config()
import dotenv from 'dotenv'
// import colors from 'colors'
import connectDB from './config/db.js'
// const express = require('express')

const dot = dotenv.config()

connectDB()
const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})
