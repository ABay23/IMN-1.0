const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModels')

// Register User
// @Route api/users
// @Access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // Validate
  if (!name || !email || !password) {
    res.status(404)
    throw new Error('Please Include All Fields!')
  }

  // Validate if User Exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User Already Exists!')
  }
  // Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// Login User
// @Route api/users/login
// @Access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  // Validate user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

// Get Current User
// @Route api/users/me
// @Access Private
const getMe = asyncHandler(async (req, res) => {
  const user = {
    user: req.user._id,
    name: req.user.name,
    email: req.user.email,
  }
  res.status(200).json(user)
})

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
