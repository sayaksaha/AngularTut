const express = require('express');
const bodyParser = require('body-parser');
const Blog  = require('./models/blog');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/angapp"
).then(()=>{
  console.log("Connected to DB successfully!");
})
.catch (()=> {
  console.log("Error in connecting to db!!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req,res,next)=>{

res.setHeader('Access-Control-Allow-Origin',"*");
res.setHeader('Access-Control-Allow-Headers',
"Origin, X-Requested-With, Content-Type, Accept");
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
);
next();
})

app.post("/api/blogs", (req, res, next) => {
  const blog = new Blog({
    title:req.body.title,
    content:req.body.content
  });
  blog.save();
  //console.log(blog);
  res.status(201).json({
    message: 'blog added successfully'
  });
});

app.get('/api/blogs',(req,res)=>{
Blog.find(documents =>{
  res.status(200).json({
    mess:"getting from db is done -success",
    blogs:documents
})

});

});


module.exports = app;
