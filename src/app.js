const express= require("express");
const hbs= require("hbs")

const app= express() ;
const mongoose=require("mongoose")
const bodyparser=require('body-parser')
const routes= require('./routes/main');
 const detail=require("./model/detail.js");
const Slider=require('./model/Slider.js');
const Service=require("./model/Service.js");

//const detail=require("./src/models/detail.js")


const { connect } = require("http2");
const { title } = require("process");
const service = require("./model/Service.js");

// / static/ css/ style.css

 app.use(bodyparser.urlencoded({
  extended:true
 }))

app.use('/static',express.static("public"))
 app.use('/',routes)


app.get("/",(request,res)=>{
     res.send("this ois data frome server")
})


//templet engine

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

 //db connections 


 var uri = "mongodb://127.0.0.1:27017/NODE_PROJECT";
// mongoose.connect("mongodb://127.0.0.1:27017/NODE_PROJECT", ()=>{
//   console.log("connected")
// });

mongoose.connect(uri).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  console.log("connected")

/*
service.create([
  {
  icon:'fa-brands fa-accusoft ',  
  title:'Provide best courses',
  description:'We provide courses that help  our student in learning and in placement ',
  linkText:'https://www.learcodewithayush.com',
  link:' Check'
  },
  {
    icon:'fa-solid fa-universal-access ',
    title:'learn projects',
    description:'We provide courses that help  our student in learning and in placement ',
    linkText:'https://www.learcodewithayush.com',
    link:'Learn '
  },
  {
    icon:'fa-solid fa-universal-access ',
    title:'learn projects',
    description:'We provide courses that help  our student in learning and in placement ',
    linkText:'https://www.learcodewithayush.com',
    link:'Learn '
  },
])*/



/*Slider.create([
  {
title:'learn Java in very easy manner',
subTitle:'java is one of the most popular programing in langauge',
imageUrl:"/static/images/backgr1.jpg"
  },
  {
    title:'What is django in phython?',
    subTitle:'django is most famous web framework of  phython programing  ',
    imageUrl:"public/images/b ack2.jpg"
  },
  {
    title:'What about node js ',
    subTitle:'Node js is runtime enviromant to execute javascript out said browser',
    imageUrl:"public/images/back 3.jpg"
  },
])*/





   //-},
  //-err => { /** handle initial connection error */ 
    //-console.log("Error")

     /*detail.create({
      brandName: "Ayush Technical Solutions",
      brandIconUrl:"views/partials/Screenshot 2024-08-24 134358.png",
      links:[
        {
          label:"home",
          url: "/"

        },
        {
          label:"services",
          url:"/services"
        },
        {
          label:"Gallery",
          url:"/galery"
        },
        
        {
          label:"About ",
          url:"/about-section"
        },
        {
          label:"Contact-Us",
          url:"/contact_us_section"
        }
      
        
      ]
  })*/
      
  })






app.listen(process.env.PORT |5556,()=>{
    console.log("server is started")
})
    
