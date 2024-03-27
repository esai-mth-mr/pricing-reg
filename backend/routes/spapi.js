const express = require('express');
const spapiController =  require('../controllers/spapi');
const router = express.Router();
const { authorizeBearerToken } = require("../middleware/authMiddleware")

router.get('/getprice', spapiController.getPrice);
router.get('/getasinitem', spapiController.getItemWithAsin);
router.get('/getmarketplaceparticipations', spapiController.allMarketplacePartipants);
router.post('/getitems', spapiController.getItems);
router.post('/putitemwithsku', spapiController.putItemWithSKU);
router.post('/putpricewithskuarray', spapiController.putPriceWithSkuArray);
router.post('/putitembusinesswithsku', spapiController.putItemBusinessWithSKU)
router.post('/getuploadlistingitems', [authorizeBearerToken], spapiController.getUploadListingItems)

module.exports = router
