const router = require('express').Router();
const {
    info_hp
} = require('../controllers');

// GET localhost:8080/info_hp =› Ambil data semua info_hp
router.get('/info_hp', info_hp.getDataHandphone);

// GET localhost:8080/info_hp/2=›Ambildatasemuahandphoneberda
router.get('/info_hp/:id', info_hp.getDataHandphoneByID);

// POST localhost:8080/info_hp/add=›Tambahdatahandphonekedatat
router.post('/info_hp/add', info_hp.addDataHandphone);

// POST localhost:8080/info_hp/2=›Edit data info_hp
router.post('/info_hp/edit', info_hp.editDataHandphone);

// POST localhost:8080/info_hp/delete=>Delete data info_hp
router.post('/info_hp/delete/', info_hp.deleteDataHandphone);

module.exports = router;