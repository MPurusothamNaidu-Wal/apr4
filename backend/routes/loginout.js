var express = require('express');
const userController = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.getusers);
router.get('/createtable', userController.createTable);
router.post('/adduser', userController.addUser);
router.post('/login', userController.login);
router.put('/edituser/:id', userController.editUser);
router.get('/:id', userController.getUserById);
module.exports = router;