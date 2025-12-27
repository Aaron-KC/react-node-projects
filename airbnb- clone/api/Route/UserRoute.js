const { register, login, signOut } = require('../Controller/UserController')

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', signOut);

module.exports = router;