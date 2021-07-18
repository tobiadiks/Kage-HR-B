var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        firstname:{
            type: String,
            required: true,
            trim: true
        },
        lastname:{
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type:String,
        },
        cv: {
            type: String,
            required: true
        },
        social:{
            type: String,
            required: true,
            trim: true
        },
        website:{
            type: String,
            trim: true
        },
        code:{
            type: String,
            required: true
        },
        interview:{
            type: Boolean,
            default: false
        },
        hired:{
            type: Boolean,
            default:false
        },
        rejected:{
            type: Boolean,
            default:false
        },
        employer:{
            type: String,
            trim: true,
            required: true,
            default:'none'
        }
    },
    {
        timestamps:true,
    }
);


const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;