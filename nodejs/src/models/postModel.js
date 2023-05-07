var mongoose = require("mongoose")

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

module.exports = postsCollection

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
