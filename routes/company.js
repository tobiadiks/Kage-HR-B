const router = require('express').Router();
const { query } = require('express');
const Company = require('../models/Company');

router.route('/').get((req,res)=>{
    var query = req.query
    Company.find(query)
    .then((data)=> res.json(data))
    .catch(err=> res.status(400).json(err))
})

router.route('/signup').post((req,res)=>{   //creates company account
    const company_detail ={
        name: req.body.name,
        password: req.body.password,
        phone:req.body.phone,
        email: req.body.email,
        location: req.body.location,
        country: req.body.country,
    }

    Company.create(company_detail)
    .then((data) => res.json({response:'created successfully', data:data}))
    .catch((err) => res.status(400).json({response:'There was an error', error:err}))
})

router.route('/update/:id').post((req,res)=>{
    const detail={
        name: req.body.name,
        password: req.body.password,
        phone:req.body.phone,
        email: req.body.email,
        location: req.body.location,
        address: req.body.address,
        country: req.body.country,
        business_code: req.body.code,
        website: req.body.website,
        social: req.body.social
    }

        Company.findOneAndUpdate({_id:req.params.id},detail)
        .then(data => data == null ? 
            res.json({response:"Does not exist", data:data}) 
            : 
            res.json({response:"Updated successfully", data:data})
            )
        .catch(err => res.status(400).json({response:"something went wrong"}))
    
})

router.route('/login').post((req,res)=>{
    const detail={
         email : req.body.email,
         password : req.body.password
    }

        Company.findOne({email:detail.email, password:detail.password})
        .then(data => data == null ? 
            res.json({response:"Wrong Email or Password, Login Failed", data:data,success:false}) 
            : 
            res.json({ id:data._id, success:true})
            )
        .catch(err => res.status(400).json({response:"Wrong Password", success:false}))
    
})

module.exports = router;