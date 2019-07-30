const router = require("express").Router();
let Interview = require("../models/interview.model");

router.route("/").get((req, res) => {
  Interview.find()
    .then(interviews => res.json(interviews))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const title = req.body.title;
  const url = req.body.url || "";
  const companyId = req.body.companyId;
  const companyName = req.body.companyName || "";
  const status = req.body.status || "";

  const newInterview = new Interview({
    title,
    url,
    companyId,
    companyName,
    status
  });

  newInterview
    .save()
    .then(() => res.json("Interview added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Interview.findById(req.params.id)
    .then(interview => res.json(interview))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/company/:id").get((req, res) => {
  Interview.$where(`companyId = ${req.params.id}`)
    .then(interview => res.json(interview))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Interview.findByIdAndDelete(req.params.id)
    .then(() => res.json("Interview deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Interview.findById(req.params.id)
    .then(interview => {
      interview.title = req.body.title;
      interview.url = req.body.url || "";
      interview.companyId = req.body.companyId;
      interview.companyName = req.body.companyName || "";
      interview.status = req.body.status || "";

      interview
        .save()
        .then(() => res.json("Interview updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
