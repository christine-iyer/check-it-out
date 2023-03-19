require('dotenv').config()
const GetMoneyFrom = require('../../models/gertMoneyFromSchema.js.js')
const User = require('../../models/user')

// delete getMoneyFrom
// create getMoneyFrom
// update getMoneyFrom

const destroyGetMoneyFrom = async (req, res, next) => {
  try {
    const deletedGetMoneyFrom = await GetMoneyFrom.findByIdAndDelete(req.params.id)
    res.locals.data.getMoneyFrom = deletedGetMoneyFrom
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const updateGetMoneyFrom = async (req, res, next) => {
  try {
    const updatedGetMoneyFrom = await GetMoneyFrom.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.locals.data.getMoneyFrom = updatedGetMoneyFrom
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const createGetMoneyFrom = async (req, res, next) => {
  try {
    const createdGetMoneyFrom = await GetMoneyFrom.create(req.body)
    const user = await User.findOne({ email: res.locals.data.email })
    user.getMoneyFroms.addToSet(createdGetMoneyFrom)
    await user.save()
    res.locals.data.getMoneyFrom = createdGetMoneyFrom
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const respondWithGetMoneyFrom = (req, res) => {
  res.json(res.locals.data.getMoneyFrom)
}

module.exports = {
  destroyGetMoneyFrom,
  updateGetMoneyFrom,
  createGetMoneyFrom,
  respondWithGetMoneyFrom
}