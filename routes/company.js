const router = require('express').Router();
let Company = require('../models/company.model');

router.route('/').get((req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const name = req.body.name;

  const newCompany = new Company({
    name,
  });

  newCompany.save()
  .then(() => res.json('Company added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Company.findByIdAndDelete(req.params.id)
    .then(() => res.json('Company deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Company.findById(req.params.id)
    .then(company => {
      company.name = req.body.name;

      company.save()
        .then(() => res.json('Company updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;