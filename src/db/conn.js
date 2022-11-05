// connecting database to express application
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/councilForm",{
    
}).then(()=>{
    console.log(`connection succesfull`);

}).catch((e)=>{
    console.log(`no connection ${e}`);
})