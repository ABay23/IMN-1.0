const asyncHandler = require('express-async-handler')

const User = require('../models/userModels')

const Ticket = require('../models/ticketModel')

// Get user Ticket
// @Route GET api/tickets
// @Access Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using id on JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const tickets = await Ticket.find({ user: req.user.id })
  res.status(200).json(tickets)

  res.status(200).json({ message: 'Get Tickets' })
})

// Create New Ticket
// @Route POST api/tickets
// @Access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTickets' })
})

module.exports = {
  getTickets,
  createTicket,
}
