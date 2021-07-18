const router = require("express").Router();
const { query } = require("express");
const generator = require("../functionalities/jobCodeGenerator");

const Job = require("../models/Jobs");

router.route("/").get((req, res) => {
  var query = req.query;
  Job.find(query)
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const job_detail = {
    code: generator(),
    creator_id: req.body.creator_id,
    position: req.body.position,
    location: req.body.location,
    country: req.body.country,
    experience:req.body.experience,
    department:req.body.department,
    positionType: req.body.positionType,
    description: req.body.description,
    remote: req.body.remote
  };

  Job.create(job_detail)
    .then((data) => res.json({ response: "Job Created", data: data }))
    .catch((err) =>
      res.status(400).json({ response: "Ops! there was an error", error: err })
    );
});

router.route("/delete/:id").post((req, res) => {
  Job.findOneAndDelete({ _id: req.params.id })
    .then((data) =>
      data === null
        ? res.json({ response: "Does not exist" })
        : res.json({ response: "Deleted Successfully" })
    )
    .catch((err) => res.status(400).json({ response: "failed", error: err }));
});

router.route("/update/:id").post((req, res) => {
  const update = {
    position: req.body.position,
    location: req.body.location,
    country: req.body.country,
    experience:req.body.experience,
    department:req.body.department,
    positionType: req.body.positionType,
    description: req.body.description,
    remote: req.body.remote
  };
  Job.findByIdAndUpdate({ _id: req.params.id }, update)
    .then((data) =>
      data === null
        ? res.json({ response: "Does not exist" })
        : res.json({ response: "Updated Successfully" })
    )
    .catch((err) => res.status(400).json({ response: "failed", error: err }));
});

module.exports = router;
