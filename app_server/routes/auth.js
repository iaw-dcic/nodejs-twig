
const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/register', auth.getRegister);
router.post('/register', auth.register);

router.get('/login', auth.getLogin);
router.post('/login', auth.login);

router.get('/logout', auth.logout);

module.exports = router;