const express = require('express');
const {
    getCategories,addCategory, removeCategory, getEmails, addEmail, removeEmail
} = require('../controllers/emailController');

const router = express.Router();

router.get('/categories', getCategories);
router.post('/categories/add', addCategory);
router.delete('/categories/:categoryId/remove', removeCategory);

router.get('/categories/:categoryId/emails', getEmails);
router.post('/categories/:categoryId/emails/add', addEmail);
router.delete('/categories/:categoryId/emails/:emailId/remove', removeEmail);

module.exports = router;