const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  password:{
  type:String,
  required:true,
  trim:true
  },
  phone: {
    type: String,
    trim:true
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  business_code: {
    type: String,
    unique: true,
  },
  location: {
    type: String,
    
  },
  country: {
    type: String,

  },
  about: {
    type: String,
  },
  social:{
    type: String,
    trim: true,
    
  },
  website: {
    type: String,
    trim: true,
    
  },
  verified: {
    type: Boolean,
    required: true,
    default:false
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
