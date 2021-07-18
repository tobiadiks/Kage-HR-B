const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    creator_id:{
        required:true,
        type:String
    },
    code:{
        required:true,
        type:String,
        trim:true
    },
    position:{
        type:String,
        required: true
    },
    positionType:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    experience:{
        type:Number,
        required: true
    },
    department:{
        type:String,
        required: true
    },
    opened: {
        type:Boolean,
        default:true
    },
    remote: {
        type:Boolean,
        required:true,
        default:false
    }
})

const Job = mongoose.model("Jobs", jobSchema);

module.exports = Job;


