const router = require('express').Router()
const getMoneyFromCtrl = require('../../controllers/api/getMoneyFroms')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/getMoneyFroms/:id
DELETE
destroy getMoneyFrom
*/
router.delete('/:id', checkToken, ensureLoggedIn, getMoneyFromCtrl.destroyGetMoneyFrom, getMoneyFromCtrl.respondWithGetMoneyFrom)
/*
/api/getMoneyFroms/:id
PUT
update getMoneyFrom
*/
router.put('/:id', checkToken, ensureLoggedIn, getMoneyFromCtrl.updateGetMoneyFrom, getMoneyFromCtrl.respondWithGetMoneyFrom)
/*
/api/getMoneyFroms
POST
create getMoneyFrom
*/
router.post('/', checkToken, ensureLoggedIn, getMoneyFromCtrl.createGetMoneyFrom, getMoneyFromCtrl.respondWithGetMoneyFrom)

module.exports = router
