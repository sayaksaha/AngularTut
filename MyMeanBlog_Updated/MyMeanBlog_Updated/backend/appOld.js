const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
  const blog = req.body;
  console.log(blog);
  res.status(201).json({
    message: 'blog added successfully'
  });
});

app.get('/api/blogs',(req,res)=>{

  const blogs =[
    {
      id:"es2435",
      title:"Movie1",
      content:"mov cont1"
    },
    {
      id:"43657746",
      title:"Movie2",
      content:"mov cont2"
    },
    {
      id:"kugjh2",
      title:"Movie3",
      content:"mov cont3"
    }
  ];


res.status(200).json({
  mess:"Post is done -success",
  blogs:blogs

});

});


module.exports = app;
