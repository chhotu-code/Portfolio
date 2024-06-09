const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");



app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"portfolio",
  password:"Chhotu@123",
});

app.get("/",(req,res)=>{
    res.send("this is working");
})

app.listen("2020",(req,res)=>{
    console.log("port is working....");
})