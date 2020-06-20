const express = require('express');
const router = express.Router();

const create = require('../controllers/create');
const search = require('../controllers/search');
const read_id = require('../controllers/read_id');
const update = require('../controllers/update');
const del = require('../controllers/delete');
const auth = require('../auth/auth.js');

router.all('/*', auth);
router.post('/api/create', create.controller);
router.get('/api/search', search.controller);
router.get('/api/read_id', read_id.controller);
router.put('/api/update', update.controller);
router.delete('/api/delete', del.controller);

module.exports = router;