const router = require('express').Router()
const payMoneyToCtrl = require('../../controllers/api/payMoneyTos')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/payMoneyTos/:id
DELETE
destroy payMoneyTo
*/
router.delete('/:id', checkToken, ensureLoggedIn, payMoneyToCtrl.destroyPayMoneyTo, payMoneyToCtrl.respondWithPayMoneyTo)
/*
/api/payMoneyTos/:id
PUT
update payMoneyTo
*/
router.put('/:id', checkToken, ensureLoggedIn, payMoneyToCtrl.updatePayMoneyTo, payMoneyToCtrl.respondWithPayMoneyTo)
/*
/api/payMoneyTos
POST
create payMoneyTo
*/
router.post('/', checkToken, ensureLoggedIn, payMoneyToCtrl.createPayMoneyTo, payMoneyToCtrl.respondWithPayMoneyTo)

module.exports = router
