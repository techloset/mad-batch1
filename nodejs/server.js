const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 8000

var posts = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
app.use(bodyParser.json())

app.use((req,res,next)=>{
 console.log("console in app.use");
//  res.end("response end in app.use")
next()
})

app.use((req,res,next)=>{
  console.log("console in app.use second");
 //  res.end("response end in app.use")
 next()
 })
 

app.post('/createPost', (req,res)=>{
  console.log("req.body", req.body);
  posts = [...posts, req.body]
  res.send("post req response")
})

app.get('/getPosts',(req, res) => {
  // get posts
  console.log("req", req.query.uid);
  try {
    
    // var posts = [{
    //   id: 1,
    //   description: 'safdas asdf ',
    //   createdAt: new Date(),
    //   postOs: 'web'
    // },
    // {
    //   id: 2,
    //   description: 'safdas asdf ',
    //   createdAt: new Date(),
    //   postOs: 'web'
    // },
    // {
    //   id: 3,
    //   description: 'safdas asdf ',
    //   createdAt: new Date(),
    //   postOs: 'web'
    // }
    // ]
  

    // posts = posts.filter((post)=> post.id == req.query.id)

    res.status(200).json({
      message: 'sucess',
      data: posts
    })

  } catch (error) {
    res.status(500).json({
      message: 'failed',
      error: error
    })
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})