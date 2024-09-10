const express = require('express')
const{ route } = require('express/lib/application')
const detail = require("../model/detail")
const Slider = require('../model/Slider')
const service = require('../model/Service')
const contact= require('../model/contact')
const routes = express.Router()


routes.get("/", async(req,res)=>{
var id = '66dd41d2ffbaf830c1e2ba5f';
const details=  await detail.findOne({_id:'66dd41d2ffbaf830c1e2ba5f'})
const slides= await Slider.find()
//console.log(details) 
//console.log(slides)
const services= await service.find()

    res.render("index", {
        details:details,
         slides:slides,
        services:services

    });
});
routes.get('/gallery', async (req,res)=>{
    const details=  await detail.findOne({_id:'66dd41d2ffbaf830c1e2ba5f'});
    res.render("gallery",{
        details:details
    });
});

// process contact form 
routes.post("/process-contact-form",async(request,response)=>{
    console.log("form is submit")
    console.log(request.body)
    // save the data to db
try{
const data= await contact.create(require.body)
console.log(data)
response.redirect("/")

}catch(e)

{
    console.log(e)
    response.redirect("/")
}
})
 module.exports=routes;
