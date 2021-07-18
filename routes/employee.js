const router = require("express").Router();

const { query } = require("express");
let Employee = require("../models/Employees");

//Lists all Employee
router.route("/").get((req, res) => {
  var query = req.query;
  Employee.find(query)
    .then((employees) => res.json(employees))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Creates new Employee
router.route("/create").post((req, res) => {
  let employee_detail = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    location: req.body.location,
    cv: req.body.cv,
    social: req.body.social,
    website: req.body.website,
    code: req.body.code,
    employer: req.body.employer
  };

  Employee.create(employee_detail)
    .then((data) => res.json({response:"Successfully Submitted", data:data}))
    .catch((err) =>res.status(400)
        .json({
          response: "Ops! There was an error, ensure all details are filled in",
          error: err,
        })
    );
});

// Deletes teacher by id
router.route("/delete/:id").post((req, res) => {
  Employee.findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.json({response:"Employee deleted Successfully",data:data}))
    .catch((err) => res.status(400).json("Employee with this ID does not exist" + err));
});

//Updates by id

router.route("/update/:id").post((req, res) => {
  let employee_detail = {
    interview: req.body.interview,
    hired: req.body.hired,
    rejected: req.body.rejected
  };
  Employee.findByIdAndUpdate({_id:req.params.id},employee_detail)
    .then((data) => res.json({response:"Employee Status updated Successfully",data:data}))
    .catch((err) =>
      res.status(400)
        .json({
          response: "Ops! This ID does not exist, ensure all details are filled in",
          error: err,
        })
    );
});


//search by parameters
router
  .route("/detail")
  .get((req, res) => {
   var query=req.query;
    Employee.find(query)
      .then((employees) => res.json(employees))
      .catch((err) => res.status(400).json("Error: " + err));
  });



module.exports = router;
