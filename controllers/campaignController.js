const Campaign = require('../models/Campaign');

// Get all campaigns
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new campaign
const createCampaign = async (req, res) => {
  const campaign = new Campaign(req.body);
  console.log(req.body);
  try {
    const newCampaign = await campaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Edit an existing campaign
const updateCampaign = async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCampaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllCampaigns,
  createCampaign,
  updateCampaign
};
