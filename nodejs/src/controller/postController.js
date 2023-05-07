const postsCollection = require("../models/postModel");
const sendEmail = require("../utils/sendEmail");

const doCreatePost = async (req, res) => {
    try {
        console.log('====================================');
        console.log(".req.body", req.body);
        console.log('====================================');
        const post = new postsCollection(req.body);
        const result = await post.save()
        console.log("result", result);
        const posts = await postsCollection.find();
        console.log("posts", posts);
        await sendEmail("naveed@techloset.com", "new post created", posts.toString())

        // posts = [...posts, { ...req.body }]
        res.status(200).json({
            message: 'sucess',
            data: posts
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: 'failed',
            error: error,
            data: []
        })
    }

}


const doDeletePost = async(req, res) => {
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
    
  }


  const doGetPosts = async(req, res) => {
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
  
  }

module.exports = {
    doCreatePost,
    doDeletePost,
    doGetPosts
}