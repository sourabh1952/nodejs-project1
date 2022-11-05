const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true   
    },
    lastname:{
        type:String,
        required:true   
    }
})

// now we need to create a collection
const Register = new mongoose.model("Register",employeeSchema);

module.exports= Register;