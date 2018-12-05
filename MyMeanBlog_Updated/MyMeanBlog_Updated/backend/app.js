const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Blog = require('./models/blog');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true }
)
  .then(() => {
    console.log("Connected to DB Successfully!!");
  })
  .catch(() => {
    console.log("Error in connecting to DB!");
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
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
    title: req.body.title,
    content: req.body.content
  });
  blog.save();
  //console.log(blog);
  res.status(201).json({
    message: 'blog added successfully'
  });
});

app.get('/api/blogs', (req, res) => {
  Blog.find().then(documents => {
    res.status(200).json({
      mess: "Post is done -success",
      blogs: documents

    })

  });
});

app.delete('/api/blogs/:id',(req,res,next)=>{
Blog.deleteOne({_id:req.params.id}).then(result =>{
  console.log(result);
  res.status(200).json({message:"Blog Review deleted!"})
});
});

  module.exports = app;
