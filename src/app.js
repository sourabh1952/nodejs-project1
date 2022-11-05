const express =require("express");
const path =require("path");
const hbs=require("hbs");
const app =express();
require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

// const static_path =path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partials_path =path.join(__dirname,"../templates/partials");
// app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


// console.log(path.join(__dirname,"../public"));
app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/register",(req,res)=>{
    res.render("register")
});

app.post("/register", async(req,res)=>{
    try{
        console.log(req.body.fullname);
        const Regis = new Register({
                fullname: req.body.fullname,
                lastname: req.body.lastname
            })

        const Regisd=await Regis.save();
        res.status(201).render("index");
        
    }
    catch (error){
        res.status(400).send(error);
    }
});

app.listen(port,()=>{
    console.log(`server is running at  ${port}`)
})