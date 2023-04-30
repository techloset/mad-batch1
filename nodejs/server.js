const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const mongoose = require('mongoose');


main()

async function main() {
  try {
   const connection =  await mongoose.connect('mongodb+srv://admin:test1214@cluster0.g17dot3.mongodb.net/test');
     console.log("connection successful",connection);
  } catch (error) {
    console.log(
      "connection error", error
    );
  }

}


const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })


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

// const postSchema = new mongoose.Schema({
//   address: {
//     city: {
//       type: String,
//       required:true,
//     },
//     state: String,
//     country: String
//   },
//   email:{
//     type: String,
//     validate: (email)=> true,
//     unique: true
//   },
//   description: String,
//   age: {
//     type: Number,
//     min: 15,
//     max: 65,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     required: true,
//   },
//   postOs: String
// });


const postSchema = new mongoose.Schema({
  description: String,
  age: {
    type: Number,
    min: 15,
    max: 65,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postOs: String
});

const postsCollection = mongoose.model('posts', postSchema);

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log("console in app.use");
  //  res.end("response end in app.use")
  next()
})

app.use((req, res, next) => {
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

app.post('/createPost', async(req, res) => {
try {
  console.log('====================================');
  console.log(".req.body", req.body);
  console.log('====================================');
  const post = new postsCollection(req.body);
  const result = await post.save()
  console.log("result", result);
  const posts = await postsCollection.find();
  console.log("posts", posts);
  // posts = [...posts, { ...req.body }]
  res.status(200).json({
    message: 'sucess',
    data: posts
  })
} catch (error) {
  console.log("error",error);
  res.status(500).json({
    message: 'failed',
    error:error,
    data: []
  })
}
 
})


app.delete('/deletePost', async(req, res) => {
  try {
    console.log("req.query", req.query.id);
  const idValue = parseInt(req.query.id)
  
  // posts = posts.filter((post) => post.id !== idValue)
  const posts = await postsCollection.deleteOne({postOs:req.query.id})
  console.log('====================================');
  console.log("posts", posts);
  console.log('====================================');
  res.status(200).json({
    message: 'sucess',
    data: posts
  })
  } catch (error) {
    res.status(500).json({
      message: 'failed',
      error:error,
      data: []
    })
  }
  
})


app.get('/getPosts', async(req, res) => {
  // get posts
  console.log("req", req.query.uid);
  try {

    let posts = []
      if (req.query.uid) {
        posts = await postsCollection.find({postOs:  req.query.uid});
      }
      else {
        posts = await postsCollection.find();
      }
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