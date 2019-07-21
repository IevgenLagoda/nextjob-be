const router = require('express').Router();
let Campaign = require('../models/campaign.model');

router.route('/').get((req, res) => {
  Campaign.find()
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const name = req.body.name;

  const newCampaign = new Campaign({
    name,
  });

  newCampaign.save()
  .then(() => res.json('Campaign added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Campaign.findById(req.params.id)
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Campaign.findByIdAndDelete(req.params.id)
    .then(() => res.json('Campaign deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Campaign.findById(req.params.id)
    .then(campaign => {
      campaign.name = req.body.name;

      campaign.save()
        .then(() => res.json('Campaign updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;