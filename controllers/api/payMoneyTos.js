require('dotenv').config()
const PayMoneyTo = require('../../models/payMoneyToSchema.js.js')
const User = require('../../models/user')

// delete payMoneyTo
// create payMoneyTo
// update payMoneyTo

const destroyPayMoneyTo = async (req, res, next) => {
  try {
    const deletedPayMoneyTo = await PayMoneyTo.findByIdAndDelete(req.params.id)
    res.locals.data.payMoneyTo = deletedPayMoneyTo
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const updatePayMoneyTo = async (req, res, next) => {
  try {
    const updatedPayMoneyTo = await PayMoneyTo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.locals.data.payMoneyTo = updatedPayMoneyTo
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const createPayMoneyTo = async (req, res, next) => {
  try {
    const createdPayMoneyTo = await PayMoneyTo.create(req.body)
    const user = await User.findOne({ email: res.locals.data.email })
    user.payMoneyTos.addToSet(createdPayMoneyTo)
    await user.save()
    res.locals.data.payMoneyTo = createdPayMoneyTo
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const respondWithPayMoneyTo = (req, res) => {
  res.json(res.locals.data.payMoneyTo)
}

module.exports = {
  destroyPayMoneyTo,
  updatePayMoneyTo,
  createPayMoneyTo,
  respondWithPayMoneyTo
}