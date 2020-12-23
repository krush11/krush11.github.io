const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('index');    
});
router.get('/blog', function (req, res) {
    return res.render('blog');
});
module.exports = routes;