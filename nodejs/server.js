const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})


const app = express()
const port = 8000
var users = []
var posts = [{
  id: 1,
  description: 'safdas asdf ',
  createdAt: new Date(),
  postOs: 'web'
},
{
  id: 2,
  description: 'safdas asdf ',
  createdAt: new Date(),
  postOs: 'web'
},
{
  id: 3,
  description: 'safdas asdf ',
  createdAt: new Date(),
  postOs: 'web'
}
]


 
app.use(cors())
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
 

 app.use(express.static('public'))
// react > createPost> storage > db


// app.post('/createPost',upload.single('avatar'),(req,res)=>{
//   console.log("req.body", req.file);
  
//   posts = [...posts, {...req.body,imageURL: req.file.path}]
//   res.status(200).json({
//     message: 'sucess',
//     data: posts
//   })
// })

app.post('/createPost',(req,res)=>{

  console.log('====================================');
  console.log(".req.body", req.body);
  console.log('====================================');
  
  posts = [...posts, {...req.body}]
  res.status(200).json({
    message: 'sucess',
    data: posts
  })
})


app.delete('/deletePost', (req,res)=>{
  console.log("req.query", req.query.id);
  const idValue =  parseInt(req.query.id)
  posts = posts.filter((post)=> post.id !== idValue)
  console.log('====================================');
  console.log("posts", posts);
  console.log('====================================');
  res.status(200).json({
    message: 'sucess',
    data: posts
  })
})


app.get('/getPosts',(req, res) => {
  // get posts
  console.log("req", req.query.uid);
  try {
    
    

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