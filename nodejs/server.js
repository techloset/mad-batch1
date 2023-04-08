const express = require('express')
const app = express()
const port = 8000


app.get('/getPosts', (req, res) => {
  // get posts
  console.log("req", req.query.uid);
  try {
    
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

    let requiredPost = posts.filter((post)=> post.id == req.query.id)

    res.status(200).json({
      message: 'sucess',
      data: requiredPost
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