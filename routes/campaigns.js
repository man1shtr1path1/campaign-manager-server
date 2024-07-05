const express = require('express');
const router = express.Router();
const { getAllCampaigns, createCampaign, updateCampaign } = require('../controllers/campaignController');

router.get('/', getAllCampaigns);
router.post('/', createCampaign);
router.put('/:id', updateCampaign);

module.exports = router;
